import { useNavigate } from "react-router-dom";

const EditAccountPage = () => {
  const navigate = useNavigate();

  return (
    <div className="EditAccountPage">
      <h1>EditAccountPage</h1>

      <button onClick={() => navigate("/")}>웰컴페이지로 이동</button>
    </div>
  );
};

export default EditAccountPage;
