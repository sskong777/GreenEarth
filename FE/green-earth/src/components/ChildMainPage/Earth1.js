import "../../style/ChildMainPage/ChildMain.css";

import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Mission from "../../components/ChildMainPage/Mission.js";
import rocket from "../../image/rocket.png";
import start from "../../image/start.png";
import end from "../../image/end.png";
import { useEffect, useState, Suspense } from "react";
import ChatButton from "../../components/ChattingPage/ChatButton";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberInfoState } from "../../store/atoms";
import { useAuthCallback } from "./../../functions/useAuthCallback";

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
} from "../../Model.js/Child";

import { Model0, Model00 } from "../../Model.js/Space";

function Earth1() {
  const navigate = useNavigate();

  // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  const [isMute, setIsMute] = useState(false);

  // 회원정보, 아이정보 Axios 요청
  const { memberInfoCallback } = useAuthCallback();

  const handleClickChildProfile = () => {
    navigate(`/profile/${memberInfo.childId}`);
  };

  const handleClickMuteButton = () => {
    if (isMute) {
      setIsMute(false);
      window.Howler.mute(false);
    } else {
      setIsMute(true);
      window.Howler.mute(true);
    }
  };

  // 프로필 페이지에 접근하면 해당 아이정보 Axios 요청
  useEffect(() => {
    memberInfoCallback();
    console.log(memberInfo);
  }, []);

  const level = 1;
  const value = level * 14;
  const mileage = level * 119 + 12;

  return (
    <div className="Earth">
      <div>
        <div className="start">
          <img src={start} className="start" alt="React" />
        </div>
        <div className="end">
          <img src={end} className="end" alt="React" />
        </div>
        <progress className="pgbar" max="100" value={value - 3.2}>
          {" "}
          70%{" "}
        </progress>
      </div>

      <div className="Rocket" style={{ left: mileage }}>
        <img src={rocket} className="gageRocket" alt="React" />
      </div>

      <div className="info">
        <div className="infogroup">
          <div className="canvasProfile" onClick={handleClickChildProfile}>
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

            <div className="characterInfo">
              <div>
                Lv.{memberInfo.earthLevel} {memberInfo.realName}{" "}
              </div>
              {/* <div >Lv.{childInfo.earthLevel} {childInfo.realName} </div> */}
            </div>
          </div>
          <div className="badges">
            <div className="badgeImg_unlock">
              <img
                className="badgeImg_unlocked"
                alt=""
                src="/assets/badges/level1.png"
              />
            </div>
            <div className="badgeImg">
              <img
                className="badgeImage"
                alt=""
                src="/assets/badges/level2.png"
              />
              <div className="lockImg">
                <img
                  className="lockImage2"
                  alt=""
                  src="/assets/images/lock.png"
                />
              </div>
            </div>

            <div className="badgeImg">
              <img
                className="badgeImage"
                alt=""
                src="/assets/badges/level3.png"
              />
              <div className="lockImg">
                <img
                  className="lockImage3"
                  alt=""
                  src="/assets/images/lock.png"
                />
              </div>
            </div>
            <div className="badgeImg">
              <img
                className="badgeImage"
                alt=""
                src="/assets/badges/level4.png"
              />
              <div className="lockImg">
                <img
                  className="lockImage4"
                  alt=""
                  src="/assets/images/lock.png"
                />
              </div>
            </div>
            <div className="badgeImg">
              <img
                className="badgeImage"
                alt=""
                src="/assets/badges/level5.png"
              />
              <div className="lockImg">
                <img
                  className="lockImage5"
                  alt=""
                  src="/assets/images/lock.png"
                />
              </div>
            </div>
            <div className="badgeImg">
              <img
                className="badgeImage"
                alt=""
                src="/assets/badges/level6.png"
              />
              <div className="lockImg">
                <img
                  className="lockImage6"
                  alt=""
                  src="/assets/images/lock.png"
                />
              </div>
            </div>
            <div className="badgeImg">
              <img
                className="badgeImage"
                alt=""
                src="/assets/badges/level7.png"
              />
              <div className="lockImg">
                <img
                  className="lockImage7"
                  alt=""
                  src="/assets/images/lock.png"
                />
              </div>
            </div>
            <div className="badgeImg">
              <img
                className="badgeImage"
                alt=""
                src="/assets/badges/level8.png"
              />
              <div className="lockImg">
                <img
                  className="lockImage8"
                  alt=""
                  src="/assets/images/lock.png"
                />
              </div>
            </div>
          </div>

          <div className="Mission">
            <Mission />

            <div></div>
          </div>
        </div>
      </div>
      <Link to="/game">
        <div className="canvasAstronaut">
          <div className="balloon">지구를 구하러가자</div>
          <Canvas id="astronaut">
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={1}
                angle={0.1}
                penumbra={1}
                position={[100, 100, 100]}
                castShadow
              />
              <Model0 />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                rotateSpeed={0.2}
                enableRotate={false}
              />
            </Suspense>
          </Canvas>
        </div>
      </Link>
      <div className="canvasEarth">
        <Canvas id="earth">
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight
              intensity={1}
              angle={0.1}
              penumbra={1}
              position={[100, 100, 100]}
              castShadow
            />
            <Model00 />

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
      {isMute ? (
        <div className="SoundMuteButton" onClick={handleClickMuteButton}>
          <img src="/assets/images/mute.png" />
        </div>
      ) : (
        <div className="SoundMuteButton" onClick={handleClickMuteButton}>
          <img src="/assets/images/volume.png" />
        </div>
      )}
    </div>
  );
}
export { Earth1 };
