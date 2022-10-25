import { useNavigate } from "react-router-dom";

const ParentMainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="ParentMainPage">
      <h1>ParentMainPage</h1>

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default ParentMainPage;
