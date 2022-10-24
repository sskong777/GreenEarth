import { useNavigate } from "react-router-dom";

const GamePicturePage = () => {
  const navigate = useNavigate();

  return (
    <div className="GamePicturePage">
      <h1>GamePicturePage</h1>

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default GamePicturePage;
