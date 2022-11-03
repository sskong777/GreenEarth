import { useNavigate } from "react-router-dom";

import SignUpForm from "../components/SignUpPage/SignUpForm";

import "../style/SignUpPage/SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="SignUpPage">
      <img className="LogoImage" src={"assets/images/logo_main.png"} />

      <SignUpForm />

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default SignUpPage;
