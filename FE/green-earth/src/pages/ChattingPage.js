import "../style/ChattingPage/Chatting.css";

import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import SockJsClient from "react-stomp";

import { useChatCallback } from "./../functions/useChatCallback";

import MessageList from "../components/ChattingPage/MessageList";
import InputForm from "../components/ChattingPage/InputForm";

function ChattingPage() {

	const { randomColor } = useChatCallback();

	const [messages, setMessage] = useState([]);
	
	const clientRef = useRef(null);
	
	const location = useLocation();

	// 현재 사용자 채팅 정보
	const [chatInfo] = useState({
		sender: location.state.sender,
		roomId: location.state.roomId, 
		color: randomColor() });

	const endPointUrl = "http://localhost:8882/api/chat";

	const topic = "/room/" + chatInfo.roomId;

	const { onConnected, onDisconnected, sendMessage } = useChatCallback();

	const handleSendMessage = (sendText) => {
		// console.log(chatInfo);
    sendMessage(chatInfo, sendText, clientRef);
  };

  const handleReceiveMessage = (receivedMsg) => {
		// console.log(receivedMsg);
    setMessage(messages.concat(receivedMsg));
  };

	return (
		<div className="chat-container">
			<SockJsClient
				 url={endPointUrl}
				 topics={[topic]} 
				 onConnect={onConnected}
				 onDisConnect={onDisconnected}
				 onMessage={handleReceiveMessage}
				 ref={clientRef} />
			<MessageList messages={messages} curUserChatInfo={chatInfo} />
			<InputForm handleOnSendMessage={handleSendMessage} />
		</div>
	);

}

export default ChattingPage;