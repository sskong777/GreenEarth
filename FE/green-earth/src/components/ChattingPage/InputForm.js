import { useState } from "react";

function InputForm({ handleOnSendMessage }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = () => {
    setText("");
    handleOnSendMessage(text);
  };

  return (
    <div className="message-input">
      <input
        className="inputField"
        placeholder="메시지를 입력해주세요."
        onChange={(event) => handleOnChange(event)}
        margin="normal"
        value={text}
        onKeyPress={(event) => {
          if (event.key === "Enter") handleOnSubmit();
        }}
      />
      <button className="messageSendButton" onClick={handleOnSubmit}>
        전송
      </button>
    </div>
  );
}

export default InputForm;
