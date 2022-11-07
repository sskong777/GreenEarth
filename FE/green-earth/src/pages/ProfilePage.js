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

const ProfilePage = () => {
  const navigate = useNavigate();

  // URL을 통해 childId 획득
  const { childId } = useParams();

  // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
  const [childInfo, setChildInfo] = useRecoilState(childInfoState);
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  // 회원정보, 아이정보 Axios 요청
  const { memberInfoCallback, childInfoCallback } = useAuthCallback();
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
          <div className="ChildImage">
            <img src="./../assets/images/girl1.svg" />
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
                className="ProfileHeaderRewardButton"
                onClick={handleClickRewardChildButton}
              >
                보상 확인하러 가기
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
