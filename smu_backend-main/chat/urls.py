from django.urls import path
from . import views

urlpatterns = [
    path('chat/create/<str:recipient_email>/', views.CreateChatRoomAPI.as_view(), name='create_chat_room'),
    path('chat/room/<int:room_id>/', views.ChatRoomAPI.as_view(), name='get_chat_room'),
    path('chat/message/<int:room_id>/', views.SendMessageAPI.as_view(), name='send_message'),
]
