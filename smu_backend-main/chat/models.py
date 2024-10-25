from django.db import models
from django.conf import settings

class ChatRoom(models.Model):
    participants = models.ManyToManyField(settings.AUTH_USER_MODEL)  # 참가자 필드

    def __str__(self):
        return f"ChatRoom {self.id}"

class ChatMessage(models.Model):
    room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)  # 채팅방과 메시지 연결
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # 발신자
    message = models.TextField()  # 메시지 내용
    timestamp = models.DateTimeField(auto_now_add=True)  # 타임스탬프

    def __str__(self):
        return f"{self.sender} in {self.room}: {self.message[:20]}"  # 메시지의 첫 20자만 출력
