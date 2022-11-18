export const useChatCallback = () => {

	const randomColor = () => {
		let colorList = ["rgb(227, 193, 48)", "rgb(241 192 131)",
		 "rgb(245, 195, 241)", "rgb(198 167 243)", "rgb(159 229 129)"];
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
      roomId: chatInfo.roomId,
			color: chatInfo.color
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