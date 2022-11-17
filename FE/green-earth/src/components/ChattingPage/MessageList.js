import { useChatCallback } from "../../functions/useChatCallback";

function MessageList({ messages, curUserChatInfo }) {

  const { randomColor } = useChatCallback();
  
  const renderMessage = (msg) => {
    console.log(msg, curUserChatInfo);
    const { sender, content, sendAt } = msg;
    const className = (curUserChatInfo.sender === msg.sender) ? "Messages-message currentUser" : "Messages-message";
    const color = (curUserChatInfo.sender === msg.sender) ? curUserChatInfo.color : randomColor();
    
    return (
      <li className={ className } key={ msg.sendAt }>
        <div className="Message-content">
          <div className="username">{ sender }</div>
          <div className="text">{ content }</div>
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