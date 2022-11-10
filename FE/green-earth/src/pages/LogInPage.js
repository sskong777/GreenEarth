import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginPage/LoginForm";

import "../style/LoginPage/LoginPage.css";

const LogInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="LogInPage">
      <img className="LogoImage" src={"assets/images/new_logo_main.svg"} />
      <LoginForm />
    </div>
  );
};

export default LogInPage;
