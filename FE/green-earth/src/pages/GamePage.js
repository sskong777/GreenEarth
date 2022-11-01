import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { MemberInfoState } from "../store/atoms";

const GamePage = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useRecoilState(MemberInfoState);

  console.log(memberInfo);

  return (
    <div className="GamePage mt-8 mb-5">
      <div className="mb-10">
        <img
          src={"assets/images/new_logo_main.svg"}
          className="w-64 ml-5 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="flex w-full h-[35rem]">
        <div className="flex flex-col justify-between ml-3">
          <div>
            <div className="ChildImage">
              <img src="./../assets/images/girl1.svg" />
            </div>
            <div className="ChildImageName">
              Lv.{memberInfo.earth_level} {memberInfo.nickname}
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="h-16 w-40 bg-light rounded-md"
              onClick={() => navigate("/")}
            >
              게임 1
            </button>
            <button
              className="h-16 w-40 bg-light rounded-md my-5"
              onClick={() => navigate("/")}
            >
              게임 2
            </button>
            <button
              className="GamePageButtonBack"
              onClick={() => navigate("/")}
            >
              뒤로 가기
            </button>
          </div>
        </div>
        <div className="w-[62rem] ml-10 bg-light rounded-md">
          <div>게임 목록</div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
