# chat/consumers.py

import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'

        # 채팅방 그룹에 참여
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # 채팅방 그룹에서 나가기
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # WebSocket으로부터 메시지를 받았을 때
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # 채팅방 그룹에 메시지 전송
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    # 채팅방에서 메시지를 받을 때
    async def chat_message(self, event):
        message = event['message']

        # WebSocket에 메시지 전송
        await self.send(text_data=json.dumps({
            'message': message
        }))
