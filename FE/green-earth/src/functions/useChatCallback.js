
export const useChatCallback = () => {

	const onConnected = () => {
    console.log("Connection Successfully!");
  };

  const onDisconnected = () => {
    console.log("Connection Failed!");
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

	const sendMessage = (username, roomId, sendText, clientRef) => {
    let send_message = {
      sender: username,
      content: sendText,
      roomId: roomId
    }
    clientRef.current.sendMessage("/pub/message", JSON.stringify(send_message));
	};

	return {
		onConnected,
		onDisconnected,
		joinCallback,
		sendMessage
	};
};