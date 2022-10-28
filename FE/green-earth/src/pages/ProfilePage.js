import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { ChildInfoState } from "../store/atoms";

import TodayMissionList from "../components/TodayMissionList";
import MissionList from "../components/MissionList";
import BadgeList from "../components/BadgeList";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [childInfo, setChildInfo] = useRecoilState(ChildInfoState);
  const [isBadge, setIsBadge] = useState(false);
  const [isMission, setIsMission] = useState(false);

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

  return (
    <div className="ProfilePage">
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
        <button
          className="ProfileHeaderButton"
          onClick={handleClickHeaderButton}
        >
          {isBadge && !isMission ? "목록 닫기" : "배지 목록"}
        </button>
        <button className="ProfileHeaderButton" onClick={() => navigate(-1)}>
          뒤로 가기
        </button>
      </section>

      <section className="ProfileMenu">
        <button className="ProfileMenuButton" onClick={handleClickMenuButton}>
          {!isBadge && isMission ? "오늘 미션 목록" : "과거 미션 목록"}
        </button>
        <button className="ProfileMenuButton mx-6">보상 설정하러 가기</button>
        <button className="ProfileMenuButton" onClick={handleClickChildProfile}>
          회원 수정하러 가기
        </button>
      </section>
      <section>
        <hr />
      </section>

      {isBadge && !isMission && (
        <section>
          <BadgeList />
        </section>
      )}
      {!isBadge && isMission && (
        <section>
          <MissionList />
        </section>
      )}
      {!isBadge && !isMission && (
        <section>
          <TodayMissionList />
        </section>
      )}
    </div>
  );
};

export default ProfilePage;
