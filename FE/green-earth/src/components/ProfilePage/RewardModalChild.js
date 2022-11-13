import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { rewardListState, memberInfoState } from "../../store/atoms";

import { useRewardCallback } from "./../../functions/useRewardCallback";

import "animate.css";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

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
} from "./../../Model.js/Child";

const RewardModal = ({ setModalChildOpen, childInfo }) => {
  const [rewardList, setRewardList] = useRecoilState(rewardListState);
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  const { rewardListCallback } = useRewardCallback();

  // 보상 목표와 보상 혜택, 보상정보, 해결한 미션 갯수 저장
  const [rewardInfo, setRewardInfo] = useState();
  const [rewardGoal, setRewardGoal] = useState("");
  const [rewardGift, setRewardGift] = useState("");
  const [mission, setMission] = useState(
    childInfo.clearedMission ? childInfo.clearedMission : 0
  );

  // 보상 정보 Axios 요청 후 useState에 저장
  useEffect(() => {
    rewardListCallback(childInfo.childId);

    if (rewardList[0]) {
      setRewardInfo(rewardList[0]);
      setRewardGoal(parseInt(rewardList[0].rewardCondition));
      setRewardGift(rewardList[0].rewardName);
    }
  }, rewardList);

  return (
    <>
      <div className="ReawardModal">
        <div className="ReawardModalBody">
          <div className="ReawardModalContent">
            <div>
              <div className="ReawardModalTitle">보상 확인</div>
              <div className="ReawardModalHeader">
                {/* 아이 프로필 정보 */}
                <div className="flex flex-col">
                  <div className="canvasProfileNew">
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
                          <Child9 />
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
                  <div className="text-center text-xl text-blackBrown">
                    Lv.{childInfo.earthLevel} {childInfo.realName}
                  </div>
                </div>

                {/* 보상 정보 안내 */}
                <div className="ReawardModalInfo">
                  <div className="text-3xl text-darkBrown">
                    지금까지 {mission}개의 미션을 수행했습니다.
                  </div>
                  {/* 보상정보가 있다면 보상 관련 안내 */}
                  {rewardInfo ? (
                    <div className="text-2xl text-darkBrown mt-6">
                      <div>총 {rewardGoal}개의 미션을 달성하면,</div>
                      <div className="text-center mt-2">
                        보상으로 {rewardGift}이(가) 제공 됩니다.
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl text-darkBrown mt-5">
                      <div>보상이 설정되어 있지 않습니다.</div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
              {/* 보상 정보가 있다면 보상 잔여 갯수 안내 */}
              {rewardInfo ? (
                <div className="ReawardModalChildInfo animate__animated animate__tada">
                  <div className="text-4xl text-[#e8c722] mr-3">
                    😆 '{rewardGift}'
                  </div>
                  <div>보상까지</div>
                  <div className="text-4xl text-[#e8c722] mx-3">
                    '{rewardGoal - mission}개'
                  </div>
                  <div>남았습니다!</div>
                </div>
              ) : (
                <div className="ReawardModalChildInfo">
                  <div>보상이 설정되어 있지 않습니다.</div>
                </div>
              )}

              <hr />
            </div>
            <div className="mt-16">
              <button
                className="ReawardModalButtonClose"
                onClick={() => setModalChildOpen(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardModal;
