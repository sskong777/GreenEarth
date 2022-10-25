import { useNavigate } from "react-router-dom";

const ChildMainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="ChildMainPage">
      <h1>ChildMainPage</h1>
      <div className="abcdefg">block</div>

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default ChildMainPage;
