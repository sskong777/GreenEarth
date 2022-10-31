import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginPage/LoginForm";

const LogInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="LogInPage">
      <img src={"assets/images/logo_main.png"} />
      <h1>LogInPage</h1>

      <LoginForm />

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default LogInPage;
