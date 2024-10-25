from django.urls import path
from .views import SendMessageAPI, CreateChatRoomAPI, ChatRoomAPI, ChatMessageView

urlpatterns = [
    path('send/<str:username>/', SendMessageAPI.as_view(), name='send_message'),  # 'chat/' 생략
    path('create/<str:username>/', CreateChatRoomAPI.as_view(), name='create_chat_room'),
    path('<int:room_id>/', ChatRoomAPI.as_view(), name='chat_room'),
    path('messages/<int:room_id>/', ChatMessageView.as_view(), name='chat_messages'),
]
