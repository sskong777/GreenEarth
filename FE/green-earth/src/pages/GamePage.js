import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { memberInfoState } from "../store/atoms";

import KidsSong from "../components/GamePage/KidsSong";
import CardsPairing from "../components/GamePage/CardsPairing";

import "animate.css";

const videosInfo = [
  {
    title: "지글지글지구",
    url: "https://youtu.be/feyn89XAq3c",
  },
  {
    title: "우리집을돌려줘",
    url: "https://youtu.be/fP5bq44Jn8w",
  },
  {
    title: "쓰레기차송",
    url: "https://youtu.be/ygS3kbFhhQ8",
  },
];

const GamePage = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  const [isTab, setIsTab] = useState(0);
  const [songValue, setSongValue] = useState(0);

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
            {isTab == 3 ? (
              <>
                <button
                  className="GamePageButton animate__animated animate__bounceIn"
                  onClick={() => setSongValue(0)}
                >
                  {videosInfo[0].title}
                </button>
                <button
                  className="GamePageButton mt-5 animate__animated animate__bounceIn"
                  onClick={() => setSongValue(1)}
                >
                  {videosInfo[1].title}
                </button>
                <button
                  className="GamePageButton my-5 animate__animated animate__bounceIn"
                  onClick={() => setSongValue(2)}
                >
                  {videosInfo[2].title}
                </button>
              </>
            ) : (
              <>
                <button className="GamePageButton" onClick={() => setIsTab(1)}>
                  같은그림찾기
                </button>
                <button
                  className="GamePageButton mt-5"
                  onClick={() => setIsTab(2)}
                >
                  분리수거게임
                </button>
                <button
                  className="GamePageButton my-5"
                  onClick={() => setIsTab(3)}
                >
                  동요세상
                </button>
              </>
            )}

            {/* 뒤로가기 버튼 */}
            {isTab === 3 ? (
              <button
                className="GamePageButtonBack animate__animated animate__fadeIn"
                onClick={() => setIsTab(0)}
              >
                뒤로 가기
              </button>
            ) : (
              <button
                className="GamePageButtonBack"
                onClick={() => navigate("/")}
              >
                홈 화면
              </button>
            )}
          </div>
        </div>

        {/* 게임 실제 화면 */}
        <div className="flex items-center">
          <div className="GamePagePlaySpace">
            {isTab === 0 && (
              <div className="text-3xl text-light text-center">
                게임튜토리얼 (제작중)
              </div>
            )}
            {isTab === 1 && <CardsPairing />}
            {isTab === 2 && (
              <div className="text-3xl text-light text-center">
                분리수거게임 (제작중)
              </div>
            )}
            {isTab === 3 && <KidsSong songValue={videosInfo[songValue]} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
