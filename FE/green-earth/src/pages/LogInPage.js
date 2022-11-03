import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginPage/LoginForm";

import "../style/LoginPage/LoginPage.css";

const LogInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="LogInPage">
      <img className="LogoImage" src={"assets/images/logo_main.png"} />

      <LoginForm />

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default LogInPage;
