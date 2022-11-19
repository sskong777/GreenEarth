import "../style/ChattingPage/Chatting.css";

import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { chatMessageListState } from "../store/atoms";
import { useLocation } from "react-router-dom";
import SockJsClient from "react-stomp";

import { useChatCallback } from "./../functions/useChatCallback";

import MessageList from "../components/ChattingPage/MessageList";
import InputForm from "../components/ChattingPage/InputForm";

function ChattingPage() {

	const { randomColor } = useChatCallback();

	// 채팅 내역 유지를 위해 recoil 로 저장
	const [messages, setMessage] = useRecoilState(chatMessageListState);
	
	const clientRef = useRef(null);
	
	const location = useLocation();

	// 현재 사용자 채팅 정보
	const [chatInfo] = useState({
		sender: location.state.sender,
		roomId: location.state.roomId,
		color: randomColor() });

	const endPointUrl = "https://k7d2061.p.ssafy.io/api/chat";

	const topic = "/room/" + chatInfo.roomId;

	const { onConnected, onDisconnected, sendNotice, sendMessage } = useChatCallback();

	const handleSendMessage = (sendText) => {
    sendMessage(chatInfo, sendText, clientRef);
  };

  const handleReceiveMessage = (receivedMsg) => {
		console.log(receivedMsg);
    setMessage(messages.concat(receivedMsg));
  };

	const handleOnConncted = () => {
		onConnected();
		// sendNotice(chatInfo, "JOIN", clientRef);
	};

	return (
		<div className="chat-container">
			<SockJsClient
				 url={endPointUrl}
				 topics={[topic]} 
				 onConnect={handleOnConncted}
				 onDisConnect={onDisconnected}
				 onMessage={handleReceiveMessage}
				 ref={clientRef} />
			<MessageList messages={messages} curUserChatInfo={chatInfo} />
			<InputForm handleOnSendMessage={handleSendMessage} />
		</div>
	);

}

export default ChattingPage;