import "../style/ChattingPage/Chatting.css";

import { useState, useRef } from "react";
import SockJsClient from "react-stomp";

import { useChatCallback } from "./../functions/useChatCallback";

import MessageList from "../components/ChattingPage/MessageList";
import InputForm from "../components/ChattingPage/InputForm";

function ChattingPage(props) {
	
	const [messages, setMessage] = useState([]);

	const clientRef = useRef(null);

	const username = "이름";

	const roomId = "이름";

	const endPointUrl = "http://localhost:8882/api/chat";

	const topic = "/room/" + roomId;

	const { sendMessage } = useChatCallback();

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
				 onConnect={useChatCallback.onConnect}
				 onDisConnect={useChatCallback.onDisConnect}
				 onMessage={handleReceiveMessage}
				 ref={clientRef}/>
			<MessageList messages={messages} currentUser={username} />
			<InputForm handleOnSendMessage={handleSendMessage} />
		</div>
	);

}

export default ChattingPage;