import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilState } from "recoil";
import { childInfoState } from "../store/atoms";

import { useAuthCallback } from "./../functions/useAuthCallback";

import EditAccountForm from "../components/EditAccountPage/EditAccountForm";

import "../style/SignUpPage/SignUpPage.css";

const EditAccountPage = () => {
  const navigate = useNavigate();

  // URL을 통해 childId 획득
  const { childId } = useParams();

  // Recoil에 저장되어 있는 아이정보 불러오기
  const [childInfo, setChildInfo] = useRecoilState(childInfoState);

  // 회원정보, 아이정보 Axios 요청
  const { childInfoCallback } = useAuthCallback();

  // 회원수정 페이지에 접근하면 해당 아이정보 Axios 요청
  useEffect(() => {
    childInfoCallback(childId);
  }, []);

  return (
    <div className="SignUpPage">
      <div className="SignUpPageHeader">
        <img
          className="w-100 mt-12 mb-6 animate-pulse"
          src={"/assets/images/new_logo_main.svg"}
        />
        <div className="text-5xl text-light mb-6">회원 수정</div>

        <div className="mb-1">아이 계정의 아이디를</div>
        <div>자유롭게 변경하실 수 있습니다.</div>
        <img
          className="w-[22rem] mt-12 ml-10"
          src={"/assets/images/signupkids.png"}
        />
      </div>
      <div>
        <EditAccountForm childInfo={childInfo} />
      </div>
    </div>
  );
};

export default EditAccountPage;
