import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();

  return (
    <div className="GamePage">
      <h1>GamePage</h1>

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default GamePage;
