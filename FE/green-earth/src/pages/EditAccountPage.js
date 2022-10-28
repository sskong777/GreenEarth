import { useNavigate } from "react-router-dom";

const EditAccountPage = () => {
  const navigate = useNavigate();

  return (
    <div className="EditAccountPage">
      <h1>EditAccountPage</h1>

      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default EditAccountPage;
