import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id :", id);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit 입니다.</p>
      <button onClick={() => setSearchParams({ who: "winterlood" })}>
        qs 바꾸기
      </button>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 가기
      </button>
    </div>
  );
};

export default Edit;
