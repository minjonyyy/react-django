from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import ChatRoom, ChatMessage
from .serializers import ChatRoomSerializer, ChatMessageSerializer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

User = settings.AUTH_USER_MODEL  # AUTH_USER_MODEL 참조

# 이메일에서 '@' 앞부분만 추출하는 함수
def get_email_prefix(email):
    return email.split('@')[0]

# 채팅방 생성 API
class CreateChatRoomAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, recipient_email):
        sender = request.user
        recipient = get_object_or_404(User, email=recipient_email)

        # 이메일에서 '@' 앞부분만 사용
        sender_prefix = get_email_prefix(sender.email)
        recipient_prefix = get_email_prefix(recipient.email)

        # 이미 채팅방이 존재하는지 확인 (이메일 앞부분으로 구분)
        room = ChatRoom.objects.filter(participants__email__startswith=sender_prefix)\
                               .filter(participants__email__startswith=recipient_prefix).first()

        if not room:
            room = ChatRoom.objects.create()
            room.participants.add(sender, recipient)

        serializer = ChatRoomSerializer(room)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

# 채팅방 정보 조회 API
class ChatRoomAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, room_id):
        room = get_object_or_404(ChatRoom, id=room_id)
        serializer = ChatRoomSerializer(room)
        return Response(serializer.data)

# 메시지 전송 및 WebSocket 실시간 전송 API
class SendMessageAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, room_id):
        room = get_object_or_404(ChatRoom, id=room_id)
        sender = request.user
        message = request.data.get('message')

        if not message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        # 새 메시지 저장
        chat_message = ChatMessage.objects.create(room=room, sender=sender, message=message)

        # 저장된 메시지를 반환
        serializer = ChatMessageSerializer(chat_message)

        # WebSocket을 통한 실시간 메시지 전송 (Redis 사용)
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            f"chat_{room_id}",  # WebSocket 채팅방 ID
            {
                "type": "chat_message",
                "message": message,
                "sender_email": get_email_prefix(sender.email)  # 이메일 앞부분만 전송
            }
        )

        return Response(serializer.data, status=status.HTTP_200_OK)
