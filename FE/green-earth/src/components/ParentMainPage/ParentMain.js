import { useState, useEffect, useRef, Suspense } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { memberInfoState } from "../../store/atoms";
import { useAuthCallback } from "./../../functions/useAuthCallback";

import TutorialModal from "./TutorialModal.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

import "../../style/ParentMainPage/ParentMain.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import ChatButton from "../ChattingPage/ChatButton";

import { EarthLv8 } from "../../Model/Space";

import {
  Child1,
  Child2,
  Child3,
  Child4,
  Child5,
  Child6,
  Child7,
  Child8,
  Child10,
  Child15,
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
  Plus,
} from "../../Model/Child";

function ParentMain(props) {
  const navigate = useNavigate();

  // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  // 회원정보, 아이정보 Axios 요청
  const { memberInfoCallback } = useAuthCallback();

  // 로그아웃 버튼
  const { logoutcallback } = useAuthCallback();

  // 모달 전환을 위해 상태 확인
  const [modalOpen, setModalOpen] = useState(false);

  // 아이 회원 프로필 페이지 이동 함수
  const handleClickChildProfile1 = () => {
    navigate(`/profile/${props.data.childList["0"].childId}`);
  };
  const handleClickChildProfile2 = () => {
    navigate(`/profile/${props.data.childList["1"].childId}`);
  };
  const handleClickChildProfile3 = () => {
    navigate(`/profile/${props.data.childList["2"].childId}`);
  };
  const handleClickChildProfile4 = () => {
    navigate(`/profile/${props.data.childList["3"].childId}`);
  };
  const handleClickChildProfile5 = () => {
    navigate(`/profile/${props.data.childList["4"].childId}`);
  };

  // 도움말 이동 함수

  const handleClickTutorialButton = () => {
    setModalOpen(true);
  };

  // const location = useLocation();
  // const memberInfoProp = location.state.value;
  // 페이지에 접근하면 해당 유저 정보Axios 요청

  return (
    <div>
      {/* 튜토리얼 모달 */}
      {modalOpen && <TutorialModal setModalOpen={setModalOpen} />}
      <div className="Earth2">
        <div className="GamePageHeader px-16 pt-3">
          {/* 내가 Green 지구 로고 */}
          <img
            src={"assets/images/new_logo_main.svg"}
            className="w-64 cursor-pointer"
            onClick={() => navigate("/child")}
          />

          <div className="z-10">
            <button
              className="ParentMainLogoutButton text-[#f7e600] animate-pulse mr-10"
              onClick={handleClickTutorialButton}
            >
              도움말
            </button>
            <button
              className="ParentMainLogoutButton text-light"
              onClick={logoutcallback}
            >
              로그아웃
            </button>
          </div>
        </div>
        <div className="peoplelist">
          <div className="people">
            {props.data.childList["0"] && (
              <header>
                <Card className="PersonCard" onClick={handleClickChildProfile1}>
                  <CardHeader>
                    <Typography>
                      <div className="canvasPerson">
                        {props.data.childList["0"].avatar === 1 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 2 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 3 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 4 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 5 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 6 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 7 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 8 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 9 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 10 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 11 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 12 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 13 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 14 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 15 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 16 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 17 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 18 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 19 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["0"].avatar === 20 && (
                          <Canvas id="person" width="10" height="10">
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
                    </Typography>
                  </CardHeader>
                  <CardBody>
                    <div className="childNickName">
                      Lv.{props.data.childList["0"].earthLevel}{" "}
                      {props.data.childList["0"].realName}
                    </div>
                  </CardBody>
                </Card>
              </header>
            )}
            {!props.data.childList["0"] && (
              <Link to="/signup">
                <header>
                  <Card className="PersonCard">
                    <CardHeader>
                      <Typography>
                        <div className="canvasPerson">
                          <Canvas id="person1" width="10" height="10">
                            <Suspense fallback={null}>
                              <ambientLight />
                              <spotLight
                                intensity={5}
                                angle={0.1}
                                penumbra={1}
                                position={[1000, 100, 100]}
                                castShadow
                              />
                              <Plus />
                              <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                enableRotate={false}
                              />
                            </Suspense>
                          </Canvas>
                        </div>
                      </Typography>
                    </CardHeader>
                  </Card>
                </header>
              </Link>
            )}
            {props.data.childList["1"] && (
              <header>
                <Card className="PersonCard" onClick={handleClickChildProfile2}>
                  <CardHeader>
                    <Typography>
                      <div className="canvasPerson">
                        {props.data.childList["1"].avatar === 1 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 2 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 3 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 4 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 5 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 6 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 7 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 8 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 9 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 10 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 11 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 12 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 13 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 14 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 15 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 16 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 17 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 18 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 19 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["1"].avatar === 20 && (
                          <Canvas id="person" width="10" height="10">
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
                    </Typography>
                  </CardHeader>
                  <CardBody>
                    <div className="childNickName">
                      Lv.{props.data.childList["1"].earthLevel}{" "}
                      {props.data.childList["1"].realName}
                    </div>
                  </CardBody>
                </Card>
              </header>
            )}
            {!props.data.childList["1"] && (
              <Link to="/signup">
                <header>
                  <Card className="PersonCard">
                    <CardHeader>
                      <Typography>
                        <div className="canvasPerson">
                          <Canvas id="person2" width="10" height="10">
                            <Suspense fallback={null}>
                              <ambientLight />
                              <spotLight
                                intensity={5}
                                angle={0.1}
                                penumbra={1}
                                position={[1000, 100, 100]}
                                castShadow
                              />
                              <Plus />
                              <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                enableRotate={false}
                              />
                            </Suspense>
                          </Canvas>
                        </div>
                      </Typography>
                    </CardHeader>
                  </Card>
                </header>
              </Link>
            )}
            {props.data.childList["2"] && (
              <header>
                <Card className="PersonCard" onClick={handleClickChildProfile3}>
                  <CardHeader>
                    <Typography>
                      <div className="canvasPerson">
                        {props.data.childList["2"].avatar === 1 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 2 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 3 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 4 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 5 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 6 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 7 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 8 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 9 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 10 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 11 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 12 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 13 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 14 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 15 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 16 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 17 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 18 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 19 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["2"].avatar === 20 && (
                          <Canvas id="person" width="10" height="10">
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
                    </Typography>
                  </CardHeader>
                  <CardBody>
                    <div className="childNickName">
                      Lv.{props.data.childList["2"].earthLevel}{" "}
                      {props.data.childList["2"].realName}
                    </div>
                  </CardBody>
                </Card>
              </header>
            )}
            {!props.data.childList["2"] && (
              <Link to="/signup">
                <header>
                  <Card className="PersonCard">
                    <CardHeader>
                      <Typography>
                        <div className="canvasPerson">
                          <Canvas id="person3" width="10" height="10">
                            <Suspense fallback={null}>
                              <ambientLight />
                              <spotLight
                                intensity={5}
                                angle={0.1}
                                penumbra={1}
                                position={[1000, 100, 100]}
                                castShadow
                              />
                              <Plus />
                              <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                enableRotate={false}
                              />
                            </Suspense>
                          </Canvas>
                        </div>
                      </Typography>
                    </CardHeader>
                  </Card>
                </header>
              </Link>
            )}
            {props.data.childList["3"] && (
              <header>
                <Card className="PersonCard" onClick={handleClickChildProfile4}>
                  <CardHeader>
                    <Typography>
                      <div className="canvasPerson">
                        {props.data.childList["3"].avatar === 1 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 2 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 3 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 4 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 5 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 6 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 7 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 8 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 9 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 10 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 11 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 12 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 13 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 14 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 15 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 16 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 17 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 18 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 19 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["3"].avatar === 20 && (
                          <Canvas id="person" width="10" height="10">
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
                    </Typography>
                  </CardHeader>
                  <CardBody>
                    <div className="childNickName">
                      Lv.{props.data.childList["3"].earthLevel}{" "}
                      {props.data.childList["3"].realName}
                    </div>
                  </CardBody>
                </Card>
              </header>
            )}
            {!props.data.childList["3"] && (
              <Link to="/signup">
                <header>
                  <Card className="PersonCard">
                    <CardHeader>
                      <Typography>
                        <div className="canvasPerson">
                          <Canvas id="person4" width="10" height="10">
                            <Suspense fallback={null}>
                              <ambientLight />
                              <spotLight
                                intensity={5}
                                angle={0.1}
                                penumbra={1}
                                position={[1000, 100, 100]}
                                castShadow
                              />
                              <Plus />
                              <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                enableRotate={false}
                              />
                            </Suspense>
                          </Canvas>
                        </div>
                      </Typography>
                    </CardHeader>
                  </Card>
                </header>
              </Link>
            )}
            {props.data.childList["4"] && (
              <header>
                <Card className="PersonCard" onClick={handleClickChildProfile5}>
                  <CardHeader>
                    <Typography>
                      <div className="canvasPerson">
                        {props.data.childList["4"].avatar === 1 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 2 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 3 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 4 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 5 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 6 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 7 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 8 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 9 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 10 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 11 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 12 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 13 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 14 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 15 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 16 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 17 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 18 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 19 && (
                          <Canvas id="person" width="10" height="10">
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
                        {props.data.childList["4"].avatar === 20 && (
                          <Canvas id="person" width="10" height="10">
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
                    </Typography>
                  </CardHeader>
                  <CardBody>
                    <div className="childNickName">
                      Lv.{props.data.childList["4"].earthLevel}{" "}
                      {props.data.childList["4"].realName}
                    </div>
                  </CardBody>
                </Card>
              </header>
            )}
            {!props.data.childList["4"] && (
              <Link to="/signup">
                <header>
                  <Card className="PersonCard">
                    <CardHeader>
                      <Typography>
                        <div className="canvasPerson">
                          <Canvas id="person5" width="10" height="10">
                            <Suspense fallback={null}>
                              <ambientLight />
                              <spotLight
                                intensity={5}
                                angle={0.1}
                                penumbra={1}
                                position={[1000, 100, 100]}
                                castShadow
                              />
                              <Plus />
                              <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                enableRotate={false}
                              />
                            </Suspense>
                          </Canvas>
                        </div>
                      </Typography>
                    </CardHeader>
                  </Card>
                </header>
              </Link>
            )}
          </div>
        </div>

        <div className="canvasEarth">
          <Canvas id="person" width="10" height="15">
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.1}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <EarthLv8 />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                rotateSpeed={0.2}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
        <ChatButton />
      </div>
    </div>
  );
}
useGLTF.preload(EarthLv8);
export { ParentMain };
