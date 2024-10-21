from django.conf import settings
from rest_framework import serializers
from .models import ChatRoom, ChatMessage

User = settings.AUTH_USER_MODEL  # AUTH_USER_MODEL 참조

class ChatRoomSerializer(serializers.ModelSerializer):
    participants = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True)

    class Meta:
        model = ChatRoom
        fields = ['id', 'participants', 'created_at']

class ChatMessageSerializer(serializers.ModelSerializer):
    sender = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    room = serializers.PrimaryKeyRelatedField(queryset=ChatRoom.objects.all())

    class Meta:
        model = ChatMessage
        fields = ['id', 'sender', 'room', 'message', 'timestamp']
