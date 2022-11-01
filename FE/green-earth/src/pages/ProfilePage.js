import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { MemberInfoState, ChildInfoState } from "../store/atoms";

import TodayMissionList from "../components/ProfilePage/TodayMissionList";
import MissionComponent from "../components/ProfilePage/MissionComponent";
import BadgeList from "../components/ProfilePage/BadgeList";
import RewardModal from "../components/ProfilePage/RewardModal";
import RewardModalChild from "../components/ProfilePage/RewardModalChild";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [childInfo, setChildInfo] = useRecoilState(ChildInfoState);
  const [memberInfo, setMemberInfo] = useRecoilState(MemberInfoState);
  const [isParent, setIsParent] = useState(false);
  const [isBadge, setIsBadge] = useState(false);
  const [isMission, setIsMission] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChildOpen, setModalChildOpen] = useState(false);

  useEffect(() => {
    if (memberInfo.parentId) {
      setIsParent(true);
    }
  }, [memberInfo]);

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
    setModalOpen(true);
  };

  const handleClickRewardChildButton = () => {
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
            Lv.{childInfo.earthLevel} {childInfo.nickName}
          </div>
        </div>

        <div className="ProfileInfo">
          <div className="text-2xl">
            <div>이름</div>
            <div>생일</div>
            <div>아이디</div>
            <div>마일리지</div>
          </div>
          <div className="ml-4">
            <div>
              {childInfo.realName}
              <span>{childInfo.gender === "남" ? " 왕자님" : " 공주님"}</span>
            </div>
            <div>2017년 05월 05일</div>
            <div>{childInfo.email}</div>
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
          {!isParent && (
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

      {isParent && (
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
      {isParent && (
        <>
          {isBadge && !isMission && (
            <section>
              <BadgeList />
            </section>
          )}
          {!isBadge && isMission && (
            <section>
              <MissionComponent />
            </section>
          )}
          {!isBadge && !isMission && (
            <section>
              <TodayMissionList />
            </section>
          )}
        </>
      )}
      {!isParent && (
        <section>
          <MissionComponent />
        </section>
      )}
    </div>
  );
};

export default ProfilePage;
