import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberInfoState } from "../../store/atoms";

const ChatButton = () => {

  const navigate = useNavigate();
  
  // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
  const [memberInfo] = useRecoilState(memberInfoState);
  
  return (
    <button className="ParentMainLogoutButton" 
      onClick={() => navigate("/chat", { state: { sender: memberInfo.nickname, roomId: (memberInfo.isParent ? memberInfo.nickname : memberInfo.parent) } })}>
      채팅방
    </button>
  );
};

export default ChatButton;