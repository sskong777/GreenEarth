import React, { useState, useEffect } from "react";
import { useAuthCallback } from "./../../functions/useAuthCallback";

import { useNavigate } from "react-router-dom";

import "../../style/SignUpPage/SignUpForm.css";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [realName, setRealName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [avatar, setAvatar] = useState("");

  const [check, setCheck] = useState(true);

  const { signUpCallback, nickNameCheckCallback } = useAuthCallback();

  // 닉네임 중복 확인 check
  useEffect(() => {
    setCheck(true);
  }, [nickname]);

  //   회원 정보 검사
  const submitHandler = (e) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert("아이디를 입력해주세요");
      return;
    }
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (!password2.trim()) {
      alert("비밀번호를 한번 더 입력해주세요");
      return;
    }
    if (!realName.trim()) {
      alert("이름을 입력해주세요");
      return;
    }
    if (!gender.trim()) {
      alert("성별을 입력해주세요");
      return;
    }
    if (!birthday.trim()) {
      alert("생일을 입력해주세요");
      return;
    }
    if (!avatar.trim()) {
      alert("아바타를 입력해주세요");
      return;
    }
    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    if (check) {
      alert("닉네임 중복 체크를 해주세요");
      return;
    } else {
      signUpCallback(nickname, password, realName, gender, birthday, avatar);
    }
  };

  //   아이디(닉네임) 중복 확인
  const nicknameCheckHandler = (e) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert("아이디를 입력해주세요");
      return;
    }
    nickNameCheckCallback(nickname).then((response) => {
      const text = response.data;
      if (text === "사용할 수 있는 닉네임입니다.") {
        alert("사용할 수 있는 닉네임입니다");
        setCheck(false);
        return;
      } else if (text === "이미 존재하는 닉네임입니다.") {
        alert("사용할 수 없는 닉네임입니다.");
        setNickname("");
        return;
      }
    });
  };

  return (
    <div className="SignUpForm">
      {/* 회원가입 폼 */}
      <form className="SignUpFormBody" method="post" onSubmit={submitHandler}>
        {/* 아이디(닉네임) */}
        <div className="SignUpFormBodyElement">
          <label htmlFor="nickname">아이디</label>
          <input
            type="nickname"
            name="nickname"
            value={nickname}
            placeholder="아이디를 입력하세요"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        {/* 비밀번호 */}
        <div className="SignUpFormBodyElement">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="SignUpFormBodyElement">
          <label htmlFor="password2">비밀번호 확인</label>
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="비밀번호를 한번더 입력하세요"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        {/* 이름 */}
        <div className="SignUpFormBodyElement">
          <label htmlFor="realName">이름</label>
          <input
            type="realName"
            name="realName"
            value={realName}
            placeholder="이름을 입력하세요"
            onChange={(e) => setRealName(e.target.value)}
          />
        </div>

        {/* 성별 */}
        <div className="SignUpFormBodyElement">
          <label htmlFor="gender">성별</label>
          <input
            type="gender"
            name="gender"
            value={gender}
            placeholder="성별을 입력하세요"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        {/* 생일 */}
        <div className="SignUpFormBodyElement">
          <label htmlFor="birthday">생일</label>
          <input
            type="birthday"
            name="birthday"
            value={birthday}
            placeholder="생일을 입력하세요"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        {/* 아바타 */}
        <div className="SignUpFormBodyElement">
          <label htmlFor="avatar">아바타</label>
          <input
            type="avatar"
            name="avatar"
            value={avatar}
            placeholder="아바타를 입력하세요"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        {/* 버튼 */}
        <div className="SignUpButton">
          <button>회원 가입</button>
        </div>
      </form>

      {/* 아이디(닉네임) 중복 확인 버튼 */}
      <form
        className="NicknameCheckForm"
        method="get"
        onSubmit={nicknameCheckHandler}
      >
        <button>닉네임 중복 확인</button>
      </form>
    </div>
  );
};

export default SignUpForm;
