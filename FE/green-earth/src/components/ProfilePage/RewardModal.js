import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { rewardListState, memberInfoState } from "../../store/atoms";

import { useRewardCallback } from "./../../functions/useRewardCallback";

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
  Child10,
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
} from "./../../Model/Child";

const RewardModal = ({ setModalOpen, childInfo }) => {
  const [rewardList, setRewardList] = useRecoilState(rewardListState);

  const {
    rewardListCallback,
    rewardSubmitCallback,
    rewardEditCallback,
    rewardPayCallback,
  } = useRewardCallback();

  const [rewardInfo, setRewardInfo] = useState("");
  const [rewardGoal, setRewardGoal] = useState("");
  const [rewardGift, setRewardGift] = useState("");
  const [mission, setMission] = useState(
    childInfo.clearedMission ? childInfo.clearedMission : 0
  );

  useEffect(() => {
    // 보상 목록 Axios 요청
    rewardListCallback(childInfo.childId);

    // 보상리스트가 있다면 아래 조건 실행
    if (rewardList[0]) {
      setRewardInfo(rewardList[0]);
      setRewardGoal(parseInt(rewardList[0].rewardCondition));
      setRewardGift(rewardList[0].rewardName);
    }
  }, [rewardList]);

  // 목표 보상갯수 설정 함수
  const handleClickRewardGoal = (e) => {
    setRewardGoal(e.target.value);
  };

  // 보상 물품 설정 함수
  const handleClickRewardGift = (e) => {
    setRewardGift(e.target.value);
  };

  // 보상 설정 요청 함수
  const handleClickRewardSubmit = () => {
    if (window.confirm("보상을 설정하시겠습니까?")) {
      rewardSubmitCallback(
        rewardGift,
        rewardGoal,
        childInfo.childId,
        childInfo.parent
      );
      setModalOpen(false);
    }
  };

  // 보상 수정 요청 함수
  const handleClickRewardEdit = () => {
    if (window.confirm("보상을 수정하시겠습니까?")) {
      rewardEditCallback(
        rewardList[0].id,
        rewardGift,
        rewardGoal,
        childInfo.childId
      );
      setModalOpen(false);
    }
  };

  // 보상 지급 완료 함수
  const handleClickRewardPay = () => {
    if (window.confirm("보상을 지급하시겠습니까?")) {
      rewardPayCallback(rewardList[0].id);
      setModalOpen(false);
    }
  };

  return (
    <>
      <div className="ReawardModal">
        <div className="ReawardModalBody">
          <div className="ReawardModalContent">
            <div>
              <div className="ReawardModalTitle">보상 설정</div>
              <div className="ReawardModalHeader">
                <div className="flex flex-col">
                  <div className="canvasProfileNew">
                    {childInfo.avatar === 1 && (
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
                    {childInfo.avatar === 2 && (
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
                    {childInfo.avatar === 3 && (
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
                    {childInfo.avatar === 4 && (
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
                    {childInfo.avatar === 5 && (
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
                    {childInfo.avatar === 6 && (
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
                    {childInfo.avatar === 7 && (
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
                    {childInfo.avatar === 8 && (
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
                    {childInfo.avatar === 10 && (
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
                    {childInfo.avatar === 11 && (
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
                    {childInfo.avatar === 12 && (
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
                    {childInfo.avatar === 13 && (
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
                    {childInfo.avatar === 14 && (
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
                    {childInfo.avatar === 15 && (
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
                    {childInfo.avatar === 16 && (
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
                    {childInfo.avatar === 17 && (
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
                    {childInfo.avatar === 18 && (
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
                    {childInfo.avatar === 19 && (
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
                    {childInfo.avatar === 20 && (
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

                <div className="ReawardModalInfo">
                  <div className="text-3xl text-darkBrown">
                    지금까지 {mission}개의 미션을 수행했습니다.
                  </div>
                  {/* 보상 정보가 있다면 보상 정보 안내 */}
                  {rewardInfo ? (
                    <div className="text-2xl text-darkBrown mt-6">
                      <div>
                        총 {rewardInfo.rewardCondition}개의 미션을 달성하면,
                      </div>
                      <div className="text-center mt-2">
                        보상으로 {rewardInfo.rewardName}이(가) 제공 됩니다.
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl text-darkBrown pt-10">
                      <div>보상이 설정되어 있지 않습니다.</div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
              {/* 보상 설정 레이아웃 */}
              <div className="ReawardModalSetting">
                <div className="ReawardModalSettingSection">
                  <div className="text-2xl text-blackBrown">
                    보상 기준 설정 :{" "}
                  </div>
                  <input
                    type="number"
                    value={rewardGoal}
                    min={parseInt(mission) + 1}
                    onChange={handleClickRewardGoal}
                    className="ReawardModalInput"
                  />
                  <div className="text-lg text-blackBrown">
                    ( 최소 {parseInt(mission) + 1}개부터 자유롭게 설정
                    가능합니다. )
                  </div>
                </div>
                <div className="ReawardModalSettingSection">
                  <div className="text-2xl text-blackBrown">
                    보상 내용 설정 :{" "}
                  </div>
                  <input
                    type="text"
                    value={rewardGift}
                    onChange={handleClickRewardGift}
                    className="ReawardModalInputGift"
                  />
                  <div className="text-lg text-blackBrown">
                    ( 우리 아이에게 따뜻한 마음을 전해보세요. )
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="mt-16">
              <button
                className="ReawardModalButtonClose"
                onClick={() => setModalOpen(false)}
              >
                닫기
              </button>

              {/* 보상 정보가 있다면 조건에 따라 보상 지급과 보상 수정 버튼이, 없으면 설정 버튼 출력 */}
              {rewardInfo ? (
                childInfo.clearedMission >= rewardInfo.rewardCondition ? (
                  <button
                    className="ReawardModalButtonPay"
                    onClick={handleClickRewardPay}
                  >
                    보상 지급
                  </button>
                ) : (
                  <button
                    className="ReawardModalButtonPay"
                    onClick={handleClickRewardEdit}
                  >
                    보상 수정
                  </button>
                )
              ) : (
                <button
                  className="ReawardModalButton"
                  onClick={handleClickRewardSubmit}
                >
                  설정
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardModal;
