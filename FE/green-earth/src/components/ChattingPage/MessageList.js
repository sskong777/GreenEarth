import { useChatCallback } from "../../functions/useChatCallback";

function MessageList({ messages, curUserChatInfo }) {
  const renderNotice = (msg) => {
    console.log(msg);
    return <div className="chat-notice">{msg.notice}</div>;
  };

  const renderMessage = (msg, idx) => {
    const { sender, content, sendAt } = msg;
    const className =
      curUserChatInfo.sender === msg.sender
        ? "Messages-message-currentUser"
        : "Messages-message";
    return (
      <div className={className} key={idx}>
        <div className="Message-content">
          <div className="sender">{sender}</div>
          <div className="text">{content}</div>
          <div className="sendAt">{sendAt}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="messages-list">
      {messages.map((msg, idx) => renderMessage(msg, idx))}
    </div>
  );
}

export default MessageList;
