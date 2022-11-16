import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

function InputForm({ handleOnSendMessage }) {
  
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = () => {
    setText("");
    handleOnSendMessage(text);
  }

  return (
    <div className="message-input">
      <TextField className="inputField"
        label="Type your message here..."
        placeholder="메시지를 입력해주세요."
        onChange={event => handleOnChange(event)}
        margin="normal"
        value={text}
        onKeyPress={event => {
          if (event.key === "Enter") handleOnSubmit();
        }}
        style={{ height: "30px", width: "80%" }}>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleOnSubmit}>전송</Button>
    </div>
  );

}

export default InputForm;