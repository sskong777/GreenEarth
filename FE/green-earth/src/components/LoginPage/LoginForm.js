import React, { useState } from "react";
import { useAuthCallback } from "./../../functions/useAuthCallback";

import "../../style/LoginPage/LoginForm.css";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { loginCallback } = useAuthCallback();

  // KAKAO LOGIN
  const REST_API_KEY = `2045a52f644e0bfc27a039cf2bef8568`;
  const REDIRECT_URI = `http://localhost:3000/oauth/redirect`;
  // const REDIRECT_URI = `http://k7d206.p.ssafy.io/oauth/redirect`;

  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!id.trim() && !password.trim()) {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    } else if (!id.trim()) {
      alert("아이디를 입력해주세요");
      return;
    } else if (!password.trim()) {
      alert("비밀번호를 입력해주세요");
      return;
    } else {
      loginCallback(id, password);
    }
  };

  return (
    <div className="LoginForm">
      <h1>환영합니다!</h1>
      <h2>아이 회원은 아이디로 로그인, 보호자는 카카오 로그인 하세요</h2>

      <form method="post" onSubmit={submitHandler} className="LoginFormBody">
        {/* 아이디 */}
        <div className="LoginElement">
          <input
            type="id"
            name="id"
            value={id}
            placeholder="아이디를 입력하세요"
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        {/* 비밀번호 */}
        <div className="LoginElement">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 버튼 */}
        <div>
          <button className="LoginButton">로그인</button>
        </div>
      </form>

      <div className="LoginLine"></div>

      {/* 카카오 로그인 */}
      <div>
        <button
          onClick={() => {
            window.open(url);
          }}
        >
          <img src={"assets/images/kakao_login_medium_wide.png"} />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
