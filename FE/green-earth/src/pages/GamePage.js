import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { memberInfoState } from "../store/atoms";

import KidsSong from "../components/GamePage/KidsSong";
import CardsPairingTutorial from "../components/GamePage/CardsPairingTutorial";
import GameTutorial from "../components/GamePage/GameTutorial";
import GameRecycle from "../components/GamePage/GameRecycle";
import GamePicture from "../components/GamePage/GamePicture";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import ReactHowler from "react-howler";

import {
  Child1,
  Child2,
  Child3,
  Child4,
  Child5,
  Child6,
  Child7,
  Child8,
  Child9,
  Child10,
  Child11,
  Child12,
  Child13,
  Child14,
  Child15,
  Child16,
  Child17,
  Child18,
  Child19,
  Child20,
  Child21,
  Child22,
  Child23,
  Child24,
  Child25,
  Child26,
  Child27,
  Child28,
  Child29,
  Child30,
  Child31,
  Child32,
  Child33,
  Child34,
  Child35,
  Child36,
  Child37,
  Child38,
  Child39,
  Child40,
  Child41,
  Child42,
  Child43,
  Child44,
  Child45,
  Child46,
  Child47,
  Child48,
  Child49,
  Child50,
  Child51,
  Child52,
  Child53,
  Child54,
  Child55,
} from "./../Model.js/Child";

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
  {
    title: "미스터온실가스",
    url: "https://youtu.be/RDc2qXJS8F4",
  },
];

const GamePage = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  const [isTab, setIsTab] = useState(0);
  const [songValue, setSongValue] = useState(0);

  useEffect(() => {
    if (memberInfo.isParent) {
      alert("아이 회원만 이용 가능합니다.");
      navigate("/parent", { replace: true });
    }
  }, []);

  const handleClickChildProfile = () => {
    navigate(`/profile/${memberInfo.childId}`);
  };

  const handleClickSongButton = () => {
    setIsTab(4);
    window.Howler.mute(true);
  };

  const handleClickHomeButton = () => {
    setIsTab(0);
    window.Howler.mute(false);
  };

  return (
    <div className="GamePage pt-8 pb-5">
      <div className="GamePageHeader">
        {/* 내가 Green 지구 로고 */}
        <img
          src={"assets/images/new_logo_main.svg"}
          className="w-64 cursor-pointer"
          onClick={() => navigate("/child")}
        />
        {/* 뒤로가기 버튼 */}
        {isTab === 4 ? (
          <button
            className="GamePageButtonBack animate__animated animate__fadeIn mr-2"
            onClick={handleClickHomeButton}
          >
            뒤로 가기
          </button>
        ) : (
          <button
            className="GamePageButtonBack"
            onClick={() => navigate("/child")}
          >
            홈 화면
          </button>
        )}
      </div>
      <div className="GamePageBody">
        {/* 게임 페이지 왼쪽 내브바 */}
        <div className="GamePageNavBar">
          {/* 아이 프로필 정보 */}
          <div>
            <div className="canvasProfileNew" onClick={handleClickChildProfile}>
              {memberInfo.avatar === 1 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child1 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 2 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child2 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 3 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child3 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 4 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child4 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 5 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child5 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 6 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child6 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 7 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child7 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 8 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child8 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 9 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child15 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 10 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child10 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 11 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child30 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 12 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child31 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 13 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child32 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 14 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child33 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 15 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child34 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 16 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child35 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 17 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child36 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 18 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child37 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 19 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child38 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
              {memberInfo.avatar === 20 && (
                <Canvas id="person">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={5}
                      angle={0.1}
                      penumbra={5}
                      position={[500, 500, 500]}
                      castShadow
                    />
                    <Child39 />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      enableRotate={false}
                    />
                  </Suspense>
                </Canvas>
              )}
            </div>
            <div className="ChildImageName font-dunggeunmo">
              Lv.{memberInfo.earthLevel} {memberInfo.realName}
            </div>
          </div>

          <div className="flex flex-col">
            {/* 게임 선택하기 */}
            {isTab == 4 ? (
              <>
                <button
                  className="GamePageSongButton animate__animated animate__bounceIn"
                  onClick={() => setSongValue(0)}
                >
                  {videosInfo[0].title}
                </button>
                <button
                  className="GamePageSongButton mt-5 animate__animated animate__bounceIn"
                  onClick={() => setSongValue(1)}
                >
                  {videosInfo[1].title}
                </button>
                <button
                  className="GamePageSongButton mt-5 animate__animated animate__bounceIn"
                  onClick={() => setSongValue(2)}
                >
                  {videosInfo[2].title}
                </button>
                <button
                  className="GamePageSongButton mt-5 animate__animated animate__bounceIn"
                  onClick={() => setSongValue(3)}
                >
                  {videosInfo[3].title}
                </button>
              </>
            ) : (
              <>
                <button className="GamePageButton" onClick={() => setIsTab(1)}>
                  환상의 짝꿍
                </button>
                <button
                  className="GamePageButton mt-5"
                  onClick={() => setIsTab(2)}
                >
                  분리수거 왕
                </button>
                <button
                  className="GamePageButton mt-5"
                  onClick={() => setIsTab(3)}
                >
                  지구 특공대
                </button>
                <button
                  className="GamePageButton mt-5"
                  onClick={handleClickSongButton}
                >
                  동요 세상
                </button>
              </>
            )}
          </div>
        </div>

        {/* 게임 실제 화면 */}
        <div className="flex items-center select-auto">
          {isTab === 0 && (
            <div className="GamePagePlaySpace">
              <GameTutorial />
            </div>
          )}
          {isTab === 1 && (
            <div className="GamePagePlaySpace outline outline-light outline-4">
              <CardsPairingTutorial />
            </div>
          )}
          {isTab === 2 && (
            <div className="GamePagePlaySpace">
              <GameRecycle />
            </div>
          )}
          {isTab === 3 && (
            <div className="GamePagePlaySpace">
              <GamePicture />
            </div>
          )}
          {isTab === 4 && (
            <div className="GamePagePlaySpace">
              <KidsSong songValue={videosInfo[songValue]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
