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

  const senderEmail = localStorage.getItem('userEmail'); // 예시로 localStorage에서 이메일 가져오기

  useEffect(() => {
    const ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${username}/`); // username으로 웹소켓 연결
    setSocket(ws);

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: data.sender_email, message: data.message }
        ]);
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
  }, [username]);

  const sendMessage = async () => {
    if (messageInput.trim() === '') return;

    const token = localStorage.getItem('access_token');
    console.log("현재 사용자:", senderEmail);
    console.log("전송할 username:", username);
    console.log("전송할 URL:", `http://127.0.0.1:8000/chat/send/${username}/`);  // URL 로그 확인

    try {
        const response = await axios.post(
            `http://127.0.0.1:8000/chat/send/${username}/`,
            { message: messageInput },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("메시지 전송 성공:", response.data);
        if (socket) {
            socket.send(JSON.stringify({ message: messageInput, sender_email: senderEmail }));
        }
    } catch (error) {
        console.error("메시지 전송 오류:", error.response ? error.response.data : error.message); // 오류 로그 확인
    }
    setMessageInput('');
};


  return (
    <ChatContainer>
      <h2>채팅방</h2>
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
