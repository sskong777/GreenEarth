import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { memberInfoState } from "../store/atoms";

const GamePage = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  return (
    <div className="GamePage pt-8 pb-5">
      <div className="pb-10">
        {/* 내가 Green 지구 로고 */}
        <img
          src={"assets/images/new_logo_main.svg"}
          className="w-64 ml-5 cursor-pointer"
          onClick={() => navigate("/child")}
        />
      </div>
      <div className="GamePageBody">
        {/* 게임 페이지 왼쪽 내브바 */}
        <div className="GamePageNavBar">
          {/* 아이 프로필 정보 */}
          <div>
            <div className="ChildImage">
              <img src="./../assets/images/girl1.svg" />
            </div>
            <div className="ChildImageName">
              Lv.{memberInfo.earthLevel} {memberInfo.realName}
            </div>
          </div>

          <div className="flex flex-col">
            {/* 게임 선택하기 */}
            <button className="GamePageButton" onClick={() => navigate("/")}>
              게임 1
            </button>
            <button
              className="GamePageButton my-5"
              onClick={() => navigate("/")}
            >
              게임 2
            </button>
            {/* 뒤로가기 버튼 */}
            <button
              className="GamePageButtonBack"
              onClick={() => navigate("/")}
            >
              뒤로 가기
            </button>
          </div>
        </div>
        {/* 게임 실제 화면 */}
        <div className="GamePagePlaySpace">
          <div>게임 목록 (기능 구현중)</div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
