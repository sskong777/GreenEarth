import { useNavigate } from "react-router-dom";

const GameRecyclePage = () => {
  const navigate = useNavigate();

  return (
    <div className="GameRecyclePage">
      <h1>GameRecyclePage</h1>

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default GameRecyclePage;
