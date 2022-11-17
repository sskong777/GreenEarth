import "../style/ChattingPage/Chatting.css";

import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import SockJsClient from "react-stomp";

import { useChatCallback } from "./../functions/useChatCallback";

import MessageList from "../components/ChattingPage/MessageList";
import InputForm from "../components/ChattingPage/InputForm";

function ChattingPage() {
	const [messages, setMessage] = useState([]);
	
	const clientRef = useRef(null);
	
	const location = useLocation();
	const username = location.state.username;
	const roomId = location.state.roomId;

	const endPointUrl = "http://localhost:8882/api/chat";

	const topic = "/room/" + roomId;

	const { onConnected, onDisconnected, sendMessage } = useChatCallback();

	const handleSendMessage = (sendText) => {
    sendMessage(username, roomId, sendText, clientRef);
  };

  const handleReceiveMessage = (receivedMsg) => {
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
			<MessageList messages={messages} currentUser={username} />
			<InputForm handleOnSendMessage={handleSendMessage} />
		</div>
	);

}

export default ChattingPage;