import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  logInTokenState,
  memberInfoState,
  childInfoState,
} from "../store/atoms";

import { useAuthCallback } from "./../functions/useAuthCallback";
import { useRewardCallback } from "./../functions/useRewardCallback";

import TodayMissionList from "../components/ProfilePage/TodayMissionList";
import MissionComponent from "../components/ProfilePage/MissionComponent";
import BadgeList from "../components/ProfilePage/BadgeList";
import RewardModal from "../components/ProfilePage/RewardModal";
import RewardModalChild from "../components/ProfilePage/RewardModalChild";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { childId } = useParams();

  const [childInfo, setChildInfo] = useRecoilState(childInfoState);
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const [loginToken, setLoginToken] = useRecoilState(logInTokenState);

  const { memberInfoCallback, childInfoCallback } = useAuthCallback();
  const { rewardListCallback } = useRewardCallback();

  const [isParentState, setIsParentState] = useState(false);
  const [isBadge, setIsBadge] = useState(false);
  const [isMission, setIsMission] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalChildOpen, setModalChildOpen] = useState(false);

  useEffect(() => {
    setIsParentState(true);
  }, []);

  // useEffect(() => {
  //   if (memberInfo.isParent) {
  //     setIsParentState(true);
  //   }
  // }, [memberInfo]);

  useEffect(() => {
    childInfoCallback(childId);
  }, []);

  const handleClickMemberInfo = () => {
    memberInfoCallback(loginToken);
  };

  const handleClickChildProfile = () => {
    navigate(`/account/${childInfo.childId}`);
  };

  const handleClickHeaderButton = () => {
    setIsBadge(!isBadge);
    setIsMission(false);
  };

  const handleClickMenuButton = () => {
    setIsMission(!isMission);
    setIsBadge(false);
  };

  const handleClickRewardButton = () => {
    rewardListCallback(3);
    setModalOpen(true);
  };

  const handleClickRewardChildButton = () => {
    rewardListCallback(childId);
    setModalChildOpen(true);
  };

  return (
    <div className="ProfilePage">
      {modalOpen ? (
        <RewardModal setModalOpen={setModalOpen} childInfo={childInfo} />
      ) : null}
      {modalChildOpen ? (
        <RewardModalChild
          setModalChildOpen={setModalChildOpen}
          childInfo={childInfo}
        />
      ) : null}
      <section className="ProfileHeader">
        <div>
          <div className="ChildImage">
            <img src="./../assets/images/girl1.svg" />
          </div>
          <div className="ChildImageName">
            Lv.{childInfo.earthLevel} {childInfo.realName}
          </div>
        </div>

        <div className="ProfileInfo" onClick={handleClickMemberInfo}>
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
          {!isParentState && (
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

      {isParentState && (
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

      {isParentState && (
        <>
          {!isBadge && !isMission && (
            <section>
              <TodayMissionList />
            </section>
          )}
          {isBadge && !isMission && (
            <section>
              <BadgeList earthLevel={childInfo.earthLevel} />
            </section>
          )}
          {!isBadge && isMission && (
            <section>
              <MissionComponent />
            </section>
          )}
        </>
      )}
      {!isParentState && (
        <>
          {!isBadge && (
            <section className="pt-10">
              <MissionComponent />
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
