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
from django.contrib.auth import get_user_model

User = get_user_model()

def get_email_prefix(email):
    return email.split('@')[0]

# SendMessageAPI의 post 메서드 수정
class SendMessageAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, username):
        sender = request.user
        recipient_email_prefix = get_email_prefix(username)
        recipient = get_object_or_404(User, email__startswith=recipient_email_prefix)

        # 발신자와 수신자가 포함된 채팅방이 이미 존재하는지 확인
        room = ChatRoom.objects.filter(participants=sender).filter(participants=recipient).first()

        # 채팅방이 존재하지 않으면 새로 생성
        if not room:
            room = ChatRoom.objects.create()
            room.participants.add(sender, recipient)
            created = True
            print(f"새로운 채팅방이 생성되었습니다: {room.id}")
        else:
            created = False
            print(f"기존 채팅방이 확인되었습니다: {room.id}")

        # 이후 메시지 전송 로직은 그대로 유지
        message = request.data.get('message')
        if not message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        chat_message = ChatMessage.objects.create(room=room, sender=sender, message=message)
        serializer = ChatMessageSerializer(chat_message)

        # WebSocket 메시지 전송
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            f"chat_{room.id}",
            {
                "type": "chat_message",
                "message": message,
                "sender_email": get_email_prefix(sender.email)
            }
        )
        return Response(serializer.data, status=status.HTTP_200_OK)

# 채팅방 생성 API
class CreateChatRoomAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, username):
        sender = request.user
        recipient_email_prefix = get_email_prefix(username)  # username을 통해 이메일 앞부분 추출
        recipient = get_object_or_404(User, email__startswith=recipient_email_prefix)  # 수신자 조회

        # 이메일 앞부분 로그 확인
        print(f"발신자: {sender.email}, 수신자: {recipient.email}")

        # 발신자와 수신자가 포함된 채팅방이 이미 존재하는지 조회
        room = ChatRoom.objects.filter(participants=sender).filter(participants=recipient).first()

        # 채팅방이 존재하지 않으면 새로 생성
        if not room:
            room = ChatRoom.objects.create()
            room.participants.add(sender, recipient)
            print(f"새로운 채팅방이 생성되었습니다: {room.id}")
        else:
            print(f"기존 채팅방이 확인되었습니다: {room.id}")

        serializer = ChatRoomSerializer(room)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ChatRoomAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, room_id):
        room = get_object_or_404(ChatRoom, id=room_id)
        serializer = ChatRoomSerializer(room)
        return Response(serializer.data)

class ChatMessageView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, room_id):
        room = get_object_or_404(ChatRoom, id=room_id)
        messages = ChatMessage.objects.filter(room=room)
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data)

