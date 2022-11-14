import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilState } from "recoil";
import { memberInfoState, childInfoState } from "../store/atoms";

import { useAuthCallback } from "./../functions/useAuthCallback";
import { useRewardCallback } from "./../functions/useRewardCallback";

import TodayMissionList from "../components/ProfilePage/TodayMissionList";
import MissionComponent from "../components/ProfilePage/MissionComponent";
import BadgeList from "../components/ProfilePage/BadgeList";
import RewardModal from "../components/ProfilePage/RewardModal";
import RewardModalChild from "../components/ProfilePage/RewardModalChild";

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
} from "./../Model.js/Child";

const ProfilePage = () => {
  const navigate = useNavigate();

  // URL을 통해 childId 획득
  const { childId } = useParams();

  // Recoil에 저장되어 있는 아이정보, 회원정보, 보상정보 불러오기
  const [childInfo, setChildInfo] = useRecoilState(childInfoState);
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  // 회원정보, 아이정보 Axios 요청
  const { memberInfoCallback, childInfoCallback, logoutcallback } =
    useAuthCallback();
  const { rewardListCallback } = useRewardCallback();

  // 컴포넌트 전환을 위해 배지버튼과 과거미션버튼 상태 확인
  const [isBadge, setIsBadge] = useState(false);
  const [isMission, setIsMission] = useState(false);

  // 모달 전환을 위해 보호자 보상 모달과 아이 보상 모달 상태 확인
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChildOpen, setModalChildOpen] = useState(false);

  // 프로필 페이지에 접근하면 해당 아이정보 Axios 요청
  useEffect(() => {
    memberInfoCallback();
    childInfoCallback(childId);
    rewardListCallback(childId);
  }, []);

  // 아이 회원 수정 페이지 이동 함수
  const handleClickChildProfile = () => {
    navigate(`/account/${childInfo.childId}`);
  };

  // 배지 목록 확인 컴포넌트 이동 함수
  const handleClickHeaderButton = () => {
    setIsBadge(!isBadge);
    setIsMission(false);
  };

  // 과거 미션 목록 확인 컴포넌트 이동 함수
  const handleClickMenuButton = () => {
    setIsMission(!isMission);
    setIsBadge(false);
  };

  // 보상 목록 설정 모달 이동 함수
  const handleClickRewardButton = () => {
    rewardListCallback(childId);
    setModalOpen(true);
  };

  // 보상 목록 확인 모달 이동 함수
  const handleClickRewardChildButton = () => {
    rewardListCallback(childId);
    setModalChildOpen(true);
  };

  // 로그아웃 함수
  const handleClickLogoutButton = () => {
    logoutcallback();
    navigate("/", { replace: true });
  };

  return (
    <div className="ProfilePage">
      {/* 보상 설정 모달 */}
      {modalOpen && (
        <RewardModal setModalOpen={setModalOpen} childInfo={childInfo} />
      )}

      {/* 보상 확인 모달 */}
      {modalChildOpen && (
        <RewardModalChild
          setModalChildOpen={setModalChildOpen}
          childInfo={childInfo}
        />
      )}

      <section className="ProfileHeader">
        {/* 아이 프로필 사진과 이름 */}
        <div>
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
            {childInfo.avatar === 9 && (
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
          <div className="ChildImageName">
            Lv.{childInfo.earthLevel} {childInfo.realName}
          </div>
        </div>

        {/* 아이 프로필 정보 */}
        <div className="ProfileInfo">
          <div className="text-2xl">
            <div>이름</div>
            <div>닉네임</div>
            <div>생년월일</div>
            <div>마일리지</div>
          </div>
          <div className="ml-4">
            <div>
              {childInfo.realName}
              <span>{childInfo.gender === "MALE" ? " 왕자님" : " 공주님"}</span>
            </div>
            <div>{childInfo.nickname}</div>
            <div>{childInfo.birthday}</div>
            <div>{childInfo.mileage}점</div>
          </div>
        </div>
        <div>
          {/* 배지 목록과 뒤로 가기 버튼 */}
          <div className="flex">
            <button
              className="ProfileHeaderButton"
              onClick={handleClickHeaderButton}
            >
              {isBadge && !isMission ? "목록 닫기" : "배지 목록"}
            </button>
            <button
              className="ProfileHeaderButton"
              onClick={() => navigate(-1)}
            >
              뒤로 가기
            </button>
          </div>

          {/* 아이라면 보상 확인 버튼 추가 */}
          {!memberInfo.isParent && (
            <div>
              <button
                className="ProfileHeaderButton mt-4"
                onClick={handleClickRewardChildButton}
              >
                보상 확인
              </button>
              <button
                className="ProfileHeaderLogoutButton"
                onClick={handleClickLogoutButton}
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 보호자라면 프로필 메뉴 버튼 추카 */}
      {memberInfo.isParent && (
        <section className="ProfileMenu">
          <button className="ProfileMenuButton" onClick={handleClickMenuButton}>
            {!isBadge && isMission ? "오늘 미션 목록" : "과거 미션 목록"}
          </button>
          <button
            className="ProfileMenuButton mx-6"
            onClick={handleClickRewardButton}
          >
            보상 설정하러 가기
          </button>
          <button
            className="ProfileMenuButton"
            onClick={handleClickChildProfile}
          >
            회원 수정하러 가기
          </button>
        </section>
      )}

      <section>
        <hr />
      </section>

      {/* 보호자라면 오늘 미션, 배지목록, 과거 미션 컴포넌트 이용 */}
      {memberInfo.isParent && (
        <>
          {!isBadge && !isMission && (
            <section>
              <TodayMissionList childId={childId} />
            </section>
          )}
          {isBadge && !isMission && (
            <section>
              <BadgeList earthLevel={childInfo.earthLevel} />
            </section>
          )}
          {!isBadge && isMission && (
            <section>
              <MissionComponent childId={childId} />
            </section>
          )}
        </>
      )}

      {/* 아이라면 과거 미션, 배지 목록 컴포넌트 이용 */}
      {!memberInfo.isParent && (
        <>
          {!isBadge && (
            <section className="pt-10">
              <MissionComponent childId={childId} />
            </section>
          )}
          {isBadge && (
            <section className="pt-10">
              <BadgeList earthLevel={childInfo.earthLevel} />
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
