import React, { useState } from "react";
import { useAuthCallback } from "./../../functions/useAuthCallback";

import { useNavigate } from "react-router-dom";

import "../../style/LoginPage/LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { loginCallback } = useAuthCallback();

  // KAKAO LOGIN
  const REST_API_KEY = `2045a52f644e0bfc27a039cf2bef8568`;
  // const REDIRECT_URI = `http://localhost:3000/oauth/redirect`;
  const REDIRECT_URI = `https://내가그린지구.com/oauth/redirect`;

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
      <div className="text-light text-5xl mt-16 mb-10">환영합니다!</div>
      <div className="text-lightGray text-xl">
        아이 회원은 아이디로 로그인하시고
      </div>
      <div className="text-lightGray text-xl">
        보호자 회원은 카카오로 간편하게 로그인하세요.
      </div>

      <form method="post" onSubmit={submitHandler} className="LoginFormBody">
        {/* 아이디 */}
        <input
          type="id"
          name="id"
          value={id}
          placeholder="아이디를 입력하세요."
          onChange={(e) => setId(e.target.value)}
          className="LoginElement"
        />

        {/* 비밀번호 */}
        <input
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력하세요."
          onChange={(e) => setPassword(e.target.value)}
          className="LoginElement"
        />

        {/* 버튼 */}
        <button className="LoginButton">로그인</button>
      </form>

      {/* <div className="LoginLine"></div> */}

      {/* 카카오 로그인 */}
      <div className="text-lightGray text-xl ml-1 mb-5">
        ――――――― 보호자 로그인 ―――――――
      </div>
      <button
        onClick={() => {
          window.location.href = `${url}`;
        }}
      >
        <img src={"assets/images/kakaologin.svg"} />
      </button>
    </div>
  );
};

export default LoginForm;
