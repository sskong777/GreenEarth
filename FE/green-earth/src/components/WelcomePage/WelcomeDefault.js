import React from "react";
import { useNavigate } from "react-router-dom";

import "../../style/WelcomeDefault.css";

// 웰컴 페이지 기본 컴포넌트
const WelcomeDefault = (props) => {
  const navigate = useNavigate();

  // 지구 살리는 방법 버튼 클릭 시 컴포넌트 교체를 위한 값 변경
  const onClick = () => {
    props.setDescription(true);
  };

  return (
    <div className="WelcomeDefault">
      {/* 로고 이미지 */}
      <img src={"assets/images/logo_main.png"} className="LogoImage" />

      <div className="WelcomeBody">
        <div>
          {/* 배경 이미지 */}
          <img
            src={"assets/images/WelcomeDefault.png"}
            className="WelcomeImage"
          />
        </div>

        <div className="Buttons">
          {/* WelcomeDescription 컴포넌트로 이동 */}
          <div className="WelcomeButton mb-5">
            <button onClick={onClick} className="Btn">
              지구를 살리는 방법
            </button>
          </div>

          {/* 로그인으로 이동 */}
          <div className="WelcomeButton">
            <button onClick={() => navigate("/login")} className="Btn">
              지구 구하러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDefault;
