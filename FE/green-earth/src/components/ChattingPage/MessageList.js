import { useChatCallback } from "../../functions/useChatCallback";

function MessageList({ messages, curUserChatInfo }) {

  const { randomColor } = useChatCallback();

  const renderNotice = (msg) => {
    console.log(msg);
    return (
      <div className="chat-notice">{ msg.notice }</div>
    );
  };
  
  const renderMessage = (msg) => {
    const { sender, content, sendAt } = msg;
    const className = (curUserChatInfo.sender === msg.sender) ? "Messages-message currentUser" : "Messages-message";
    const divStyle = {
      backgroundColor: (curUserChatInfo.sender === msg.sender) ? curUserChatInfo.color : "#94d8ff"
    };
    return (
      <li className={ className } key={ msg.sendAt }>
        <div className="Message-content">
          <div className="username">{ sender }</div>
          <div className="text">{ content }</div>
          {/* <div className="text" style={divStyle}>{ content }</div> */}
        </div>
      </li>
    );
  };

  return (
    <ul className='message-list'>
      { messages.map((msg) => renderMessage(msg)) }
    </ul>
  );
}

export default MessageList;