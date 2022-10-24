import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="LogInPage">
      <h1>LogInPage</h1>

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default LogInPage;
