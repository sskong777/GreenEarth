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

	const joinCallback = (username, clientRef) => {
		console.log(username);
		let join_notice = {
			username: username,
			type: "JOIN",
			roomId: username
		};
		clientRef.current.sendMessage("/pub/notice", JSON.stringify(join_notice));
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
		joinCallback,
		sendMessage
	};
};