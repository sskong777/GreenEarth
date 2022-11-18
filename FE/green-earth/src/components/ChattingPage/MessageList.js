import { useChatCallback } from "../../functions/useChatCallback";

function MessageList({ messages, curUserChatInfo }) {
  const renderNotice = (msg) => {
    console.log(msg);
    return <div className="chat-notice">{msg.notice}</div>;
  };

  const renderMessage = (msg) => {
    const { sender, content, sendAt, color } = msg;
    const className =
      curUserChatInfo.sender === msg.sender
        ? "Messages-message currentUser"
        : "Messages-message";
    const divStyle = {
      borderColor:
        curUserChatInfo.sender === msg.sender ? curUserChatInfo.color : color,
    };
    return (
      <li className={className} key={msg.sendAt}>
        <div className="Message-content">
          <div className="sender">{sender}</div>
          <div className="text" style={divStyle}>
            {content}
          </div>
          <div className="sendAt">{sendAt}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="messages-list">
      {messages.map((msg) => renderMessage(msg))}
    </ul>
  );
}

export default MessageList;
