import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Message = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ChatRoom = () => {
  const { username } = useParams(); // URL에서 username 가져오기
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [roomId, setRoomId] = useState(null);  // room_id 상태 추가

  const senderEmail = localStorage.getItem('userEmail'); // 예시로 localStorage에서 이메일 가져오기

  useEffect(() => {
    const fetchRoomId = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/chat/create/${username}/`,  // 경로 수정: chat/ 추가
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setRoomId(response.data.id);  // room_id 설정
      } catch (error) {
        console.error("채팅방 생성 오류:", error);
      }
    };

    fetchRoomId();
  }, [username]);

  useEffect(() => {
    if (roomId) {
        const ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomId}/`);  // room_id로 웹소켓 연결
        setSocket(ws);

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                // 중복 메시지 필터링: 동일한 메시지가 추가되지 않도록 함
                setMessages((prevMessages) => {
                    const isDuplicate = prevMessages.some(
                        (msg) => msg.sender === data.sender_email && msg.message === data.message
                    );
                    if (!isDuplicate) {
                        return [
                            ...prevMessages,
                            { sender: data.sender_email, message: data.message }
                        ];
                    }
                    return prevMessages;  // 중복인 경우 이전 상태 유지
                });
            } catch (error) {
                console.error("메시지 수신 오류:", error); // JSON 파싱 오류 처리
            }
        };

        ws.onclose = () => {
            console.log('WebSocket closed');
        };

        return () => {
            ws.close();
        };
    }
}, [roomId]);

  // 메시지 전송 함수
  const sendMessage = async () => {
    if (messageInput.trim() === '' || !roomId) return;  // roomId 확인

    const token = localStorage.getItem('access_token');

    try {
      await axios.post(
        `http://127.0.0.1:8000/chat/send/${username}/`,  // chat/ 추가
        { message: messageInput },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (socket) {
        socket.send(JSON.stringify({ message: messageInput, sender_email: senderEmail }));
      }
    } catch (error) {
      console.error("메시지 전송 오류:", error);
    }

    setMessageInput('');
  };

  // 기존 메시지 불러오기
  const fetchMessages = async () => {
    if (!roomId) return;  // roomId 확인

    const token = localStorage.getItem('access_token');
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/chat/messages/${roomId}/`,  // chat/ 추가
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setMessages(response.data);
    } catch (error) {
      console.error("기존 메시지 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [roomId]);  // roomId가 설정될 때마다 메시지 불러오기

  return (
    <ChatContainer>
      <h2>{username}님과의 채팅방</h2>
      <MessageList>
        {messages.map((msg, index) => (
          <Message key={index}>
            <strong>{msg.sender}: </strong>
            {msg.message}
          </Message>
        ))}
      </MessageList>
      <InputContainer>
        <Input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <SendButton onClick={sendMessage}>전송</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatRoom;
