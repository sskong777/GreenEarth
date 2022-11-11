import { useNavigate } from "react-router-dom";

import SignUpForm from "../components/SignUpPage/SignUpForm";

import "../style/SignUpPage/SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="SignUpPage">
      <div className="SignUpPageHeader">
        <img
          className="w-100 mt-12 mb-6 animate-pulse"
          src={"assets/images/new_logo_main.svg"}
        />
        <div className="text-5xl text-light mb-6">회원 가입</div>

        <div className="mb-1">지금 아이 계정을 생성하시면</div>
        <div>다양한 서비스를 경험하실 수 있습니다.</div>
        <img
          className="w-[22rem] mt-12 ml-10"
          src={"assets/images/signupkids.png"}
        />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
