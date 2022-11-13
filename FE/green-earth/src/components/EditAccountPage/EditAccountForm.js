import React, { useState, useEffect } from "react";
import { useAuthCallback } from "./../../functions/useAuthCallback";

import { useNavigate } from "react-router-dom";

import "../../style/SignUpPage/SignUpForm.css";

const EditAccountForm = ({ childInfo }) => {
  const navigate = useNavigate();

  const { accountEditCallback, nickNameCheckCallback } = useAuthCallback();

  const [nickname, setNickname] = useState(childInfo.nickname);
  const [gender, setGender] = useState(childInfo.gender);
  const [birthday, setBirthday] = useState(childInfo.birthday);

  // 아이디 중복 체크용 useState
  const [check, setCheck] = useState(true);

  // 닉네임 중복 확인 check
  useEffect(() => {
    if (gender === "MALE") {
      setGender("왕자님");
    }
    if (gender === "FEMALE") {
      setGender("공주님");
    }
    if (birthday) {
      const date = birthday.split("-");
      setBirthday(`${date[0]}년 ${date[1]}월 ${date[2]}일`);
    }
  }, []);

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
    if (check) {
      alert("아이디 중복 체크를 해주세요");
      return;
    }
    if (window.confirm("아이디를 수정하시겠습니까?")) {
      accountEditCallback(childInfo.childId, nickname);
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
        alert("사용할 수 있는 아이디입니다");
        setCheck(false);
        return;
      } else if (text === "이미 존재하는 닉네임입니다.") {
        alert("사용할 수 없는 아이디입니다.");
        setNickname("");
        return;
      }
    });
  };

  return (
    <div className="SignUpForm">
      <div>
        {/* 회원수정 폼 */}
        <form className="SignUpFormBody" method="post" onSubmit={submitHandler}>
          {/* 아이디(닉네임) */}
          <input
            type="nickname"
            name="nickname"
            value={nickname}
            placeholder="아이디를 입력하세요."
            onChange={(e) => setNickname(e.target.value)}
            className="SignUpFormBodyElement mt-10"
          />

          {/* 이름 */}
          <div className="SignUpFormBodyElement"> {childInfo.realName}</div>

          {/* 성별 */}
          <div className="SignUpFormBodyElement"> {gender}</div>

          {/* 생일 */}
          <div className="SignUpFormBodyElement"> {birthday}</div>

          {/* 버튼 */}
          <button className="SignUpButton mt-20">회원 수정</button>
        </form>
        <button className="SignUpBackButton" onClick={() => navigate(-1)}>
          뒤로 가기
        </button>
      </div>
      <div>
        {/* 아이디(닉네임) 중복 확인 버튼 */}
        <form
          className="NicknameCheckForm mt-20"
          method="get"
          onSubmit={nicknameCheckHandler}
        >
          <button>확인</button>
        </form>
      </div>
    </div>
  );
};

export default EditAccountForm;
