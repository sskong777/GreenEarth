import React, { useState, useEffect } from "react";
import { useAuthCallback } from "./../../functions/useAuthCallback";

import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from "date-fns";

import "../../style/SignUpPage/SignUpForm.css";

import swal from "sweetalert";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");

  // 비밀번호 정규식(숫자만 4자리)
  const regex = /^[0-9]{4}$/;
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [realName, setRealName] = useState("");

  // 성별 드롭다운
  const genderOptions = ["왕자님", "공주님"];
  const [isGenderActive, setIsGenderActive] = useState(false);
  const [gender, setGender] = useState("성별을 선택해 주세요.");

  // 생일 선택용 달력
  const [birthday, setBirthday] = useState(new Date());
  const _ = require("lodash");
  const years = _.range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  // 이메일 중복 체크용 useState
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
      swal({
        title: "아이디를 입력해 주세요!",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    if (!password.trim()) {
      swal({
        title: "비밀번호를 입력해주세요!",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    if (!regex.test(password)) {
      setPassword("");
      swal({
        title: "비밀번호는 4자리의 숫자만 가능합니다.",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    if (!password2.trim()) {
      swal({
        title: "비밀번호를 한번 더 입력해 주세요.",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    if (password !== password2) {
      swal({
        title: "비밀번호가 일치하지 않습니다!",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    if (!realName.trim()) {
      swal({
        title: "이름을 입력해 주세요!",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    if (gender === "성별을 설정해 주세요.") {
      swal({
        title: "성별을 설정해 주세요!.",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    if (check) {
      swal({
        title: "닉네임 중복 체크를 해 주세요!",
        icon: "warning",
        button: "확인",
      });
      return;
    } else if (window.confirm("회원가입을 하시겠습니까?")) {
      if (gender === "왕자님") {
        signUpCallback(nickname, password, realName, "MALE", birthday);
      } else {
        signUpCallback(nickname, password, realName, "FEMALE", birthday);
      }
    }
  };

  //   아이디(닉네임) 중복 확인
  const nicknameCheckHandler = (e) => {
    e.preventDefault();
    if (!nickname.trim()) {
      swal({
        title: "아이디를 입력해 주세요!",
        icon: "warning",
        button: "확인",
      });
      return;
    }
    nickNameCheckCallback(nickname).then((response) => {
      const text = response.data;
      if (text === "사용할 수 있는 닉네임입니다.") {
        swal({
          title: "사용할 수 있는 아이디 입니다!",
          icon: "success",
          button: "확인",
        });
        setCheck(false);
        return;
      } else if (text === "이미 존재하는 닉네임입니다.") {
        swal({
          title: "사용할 수 없는 아이디 입니다!",
          icon: "error",
          button: "확인",
        });
        setNickname("");
        return;
      }
    });
  };

  return (
    <div className="SignUpForm mt-4">
      <div>
        {/* 회원가입 폼 */}
        <form className="SignUpFormBody" method="post" onSubmit={submitHandler}>
          {/* 아이디(닉네임) */}
          <input
            type="nickname"
            name="nickname"
            value={nickname}
            placeholder="아이디를 입력하세요."
            onChange={(e) => setNickname(e.target.value)}
            className="SignUpFormBodyElement"
          />

          {/* 비밀번호 */}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => setPassword(e.target.value)}
            className="SignUpFormBodyElement"
          />

          {/* 비밀번호 확인 */}
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="비밀번호를 한번 더 입력하세요."
            onChange={(e) => setPassword2(e.target.value)}
            className="SignUpFormBodyElement"
          />

          {/* 이름 */}
          <input
            type="realName"
            name="realName"
            value={realName}
            placeholder="이름을 입력하세요."
            onChange={(e) => setRealName(e.target.value)}
            className="SignUpFormBodyElement"
          />

          {/* 성별 */}
          <div className="GenderDropdown">
            <div
              className="GenderDropdownButton"
              onClick={(e) => {
                setIsGenderActive(!isGenderActive);
              }}
            >
              {gender}
            </div>

            {isGenderActive && (
              <div className="GenderDropdownContent">
                {genderOptions.map((option, key) => (
                  <div
                    key={key}
                    onClick={(e) => {
                      setGender(option);
                      setIsGenderActive(false);
                    }}
                    className="GenderDropdownItem"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 생일 */}
          <DatePicker
            className="SignUpDate"
            renderCustomHeader={({ date, changeYear, changeMonth }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            selected={birthday}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            onChange={(date) => setBirthday(date)}
          />
          <div className="text-lightGray pl-1">생년월일을 선택해 주세요.</div>

          {/* 버튼 */}
          <button className="SignUpButton mb-14">회원 가입</button>
        </form>
      </div>
      <div>
        {/* 아이디(닉네임) 중복 확인 버튼 */}
        <form
          className="NicknameCheckForm"
          method="get"
          onSubmit={nicknameCheckHandler}
        >
          <button>확인</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
