import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// 스타일 정의
const ChatRoomContainer = styled.div`
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

const ChatRoom = ({ authorEmail }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const socketRef = useRef(null);
    const messageEndRef = useRef(null);

    useEffect(() => {
        // WebSocket 연결 설정
        socketRef.current = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${authorEmail}/`);

        socketRef.current.onopen = () => {
            console.log("WebSocket connection established");
        };

        socketRef.current.onmessage = (event) => {
            const messageData = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, messageData.message]);
        };

        socketRef.current.onclose = () => {
            console.log("WebSocket connection closed");
        };

        // 컴포넌트 언마운트 시 WebSocket 연결 종료
        return () => {
            socketRef.current.close();
        };
    }, [authorEmail]);

    const sendMessage = () => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify({ message: newMessage }));
            setNewMessage("");
        }
    };

    // 메시지가 업데이트될 때 자동 스크롤
    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <ChatRoomContainer>
            <h2>Chat with {authorEmail}</h2>
            <MessageList>
                {messages.map((msg, index) => (
                    <Message key={index}>{msg}</Message>
                ))}
                <div ref={messageEndRef} />
            </MessageList>
            <InputContainer>
                <Input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="메시지를 입력하세요"
                />
                <SendButton onClick={sendMessage}>전송</SendButton>
            </InputContainer>
        </ChatRoomContainer>
    );
};

export default ChatRoom;
