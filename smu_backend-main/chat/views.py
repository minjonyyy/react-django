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
from django.utils.text import slugify

User = get_user_model()

def get_email_prefix(email):
    return email.split('@')[0]


class SendMessageAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, username):
        recipient = get_object_or_404(User, email__startswith=username)  # username을 이메일 앞부분으로 조회
        sender = request.user
        print(f"Sender email: {sender.email}")  # 현재 사용자의 이메일 출력
        print(f"Recipient username (email prefix): {username}, Recipient email: {recipient.email}")  # 수신자 이메일 출력

        # 발신자와 수신자가 모두 포함된 방을 검색
        room = ChatRoom.objects.filter(participants=sender).filter(participants=recipient).distinct().first()
        if not room:
            print("채팅방을 찾을 수 없음 - 수신자와 발신자 포함된 방이 없음")  # 채팅방 미존재 로그 추가
            return Response({"error": "Chat room not found"}, status=status.HTTP_404_NOT_FOUND)

        message = request.data.get('message')
        if not message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        # 메시지 생성
        chat_message = ChatMessage.objects.create(room=room, sender=sender, message=message)
        serializer = ChatMessageSerializer(chat_message)

        # WebSocket을 통한 메시지 전송
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            f"chat_{room.id}",
            {
                "type": "chat_message",
                "message": message,
                "sender_email": get_email_prefix(sender.email)
            }
        )
        print(f"Message sent: {message} by {sender.email}")  # 메시지 전송 확인용 로그

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
class CreateChatRoomAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, username):
        sender = request.user
        recipient = get_object_or_404(User, email__startswith=username)
        print(f"Chat Room Creation Request - Sender: {sender.email}, Recipient: {recipient.email}")

        # 발신자와 수신자가 포함된 방을 찾기
        room = ChatRoom.objects.filter(participants=sender).filter(participants=recipient).distinct().first()

        if not room:
            # 방이 없을 때 새로 생성
            room = ChatRoom.objects.create()
            room.participants.add(sender, recipient)
            print(f"Created new chat room with ID: {room.id} for sender: {sender.email} and recipient: {recipient.email}")
        else:
            print(f"Chat room already exists with ID: {room.id} for sender: {sender.email} and recipient: {recipient.email}")

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
