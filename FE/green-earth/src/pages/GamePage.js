import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { memberInfoState } from "../store/atoms";

import KidsSong from "../components/GamePage/KidsSong";

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

  const [isSong, setIsSong] = useState(false);
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
            {!isSong && (
              <>
                <button
                  className="GamePageButton"
                  onClick={() => setIsSong(true)}
                >
                  동요세상
                </button>
                <button
                  className="GamePageButton mt-5"
                  onClick={() => navigate("/")}
                >
                  분리수거게임
                </button>
                <button
                  className="GamePageButton my-5"
                  onClick={() => navigate("/")}
                >
                  틀린그림찾기
                </button>
              </>
            )}

            {/* 동요 선택하기 */}
            {isSong && (
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
            )}

            {/* 뒤로가기 버튼 */}
            {isSong ? (
              <button
                className="GamePageButtonBack animate__animated animate__fadeIn"
                onClick={() => setIsSong(false)}
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
            {isSong && <KidsSong songValue={videosInfo[songValue]} />}
            {!isSong && (
              <div className="text-light text-5xl">게임 화면 (제작중)</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
