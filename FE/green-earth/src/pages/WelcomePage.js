import React, { useState } from "react";

// 로그아웃 버튼(임시)
import { useAuthCallback } from "../functions/useAuthCallback";

import WelcomeDescription from "./../components/WelcomePage/WelcomeDescription";
import WelcomeDefault from "./../components/WelcomePage/WelcomeDefault";

import "../style/WelcomePage/WelcomePage.css";

const WelcomePage = () => {
  // 컴포넌트 구분을 위한 상태
  const [description, setDescription] = useState(false);

  // 로그아웃 버튼(임시)
  const { logoutcallback } = useAuthCallback();

  return (
    <div className="WelcomePage">
      {/* 메인 컴포넌트 */}
      {!description && <WelcomeDefault setDescription={setDescription} />}
      {/* 지구를 살리는 방법 설명 컴포넌트 */}
      {description && <WelcomeDescription />}
      {/* 로그아웃 버튼(임시) */}
      <button onClick={logoutcallback}>로그아웃임시</button>
    </div>
  );
};

export default WelcomePage;
