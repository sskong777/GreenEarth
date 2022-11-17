export const useChatCallback = () => {

	const randomColor = () => {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }; 

	const onConnected = () => {
    console.log("Connect Successfully!");
  };

  const onDisconnected = () => {
    console.log("Connection Stop!");
  };

	const sendNotice = (chatInfo, noticeType, clientRef) => {
		let send_notice = {
			username: chatInfo.sender,
			type: noticeType,
			roomId: chatInfo.roomId
		};
		console.log(send_notice);
		clientRef.current.sendMessage("/pub/notice", JSON.stringify(send_notice));
	};

	const sendMessage = (chatInfo, sendText, clientRef) => {
    let send_message = {
      sender: chatInfo.sender,
      content: sendText,
      roomId: chatInfo.roomId
    }
		console.log(send_message);
    clientRef.current.sendMessage("/pub/message", JSON.stringify(send_message));
	};

	return {
		randomColor,
		onConnected,
		onDisconnected,
		sendNotice,
		sendMessage
	};
};