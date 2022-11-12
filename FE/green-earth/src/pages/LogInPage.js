import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginPage/LoginForm";

import "../style/LoginPage/LoginPage.css";

const LogInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="LogInPage">
      <div className="LogInPageHeader">
        <img
          className="w-100 mt-12 mb-10 animate-pulse"
          src={"assets/images/new_logo_main.svg"}
        />
        <div className="mb-1">아이가 스스로 기후행동을 실천하면서</div>
        <div>바뀌는 지구의 모습을 만나보세요.</div>
        <img
          className="w-[22rem] mt-20 ml-10"
          src={"assets/images/earthsmile.png"}
        />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogInPage;
