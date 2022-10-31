import React, { useState } from "react";
import { useAuthCallback } from "./../../functions/useAuthCallback";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginCallback } = useAuthCallback();

  // KAKAO LOGIN
  const REST_API_KEY = `2045a52f644e0bfc27a039cf2bef8568`;
  const REDIRECT_URI = `http://localhost:5173/oauth/redirect`;
  // const REDIRECT_URI = `https://j7d210.p.ssafy.io/oauth/redirect`;

  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email.trim() && !password.trim()) {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    } else if (!email.trim()) {
      alert("아이디를 입력해주세요");
      return;
    } else if (!password.trim()) {
      alert("비밀번호를 입력해주세요");
      return;
    } else {
      loginCallback(email, password);
    }
  };

  return (
    <div>
      <h1>환영합니다!</h1>
      <h2>아이 회원은 아이디로 로그인, 보호자는 카카오 로그인 하세요</h2>

      <form method="post" onSubmit={submitHandler}>
        {/* 아이디 */}
        <div>
          <label htmlFor="email">아이디</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="아이디를 입력하세요"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* 비밀번호 */}
        <div>
          <label htmlFor="password">비밀번호</label>
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
          <button type="">로그인</button>
        </div>

        <h1>--보호자 로그인--</h1>
      </form>

      {/* 카카오 로그인 */}
      <div>
        <button
          onClick={() => {
            window.open(url);
          }}
        >
          카카오 로그인
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
