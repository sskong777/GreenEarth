import { useNavigate } from "react-router-dom";

import TodayMissionList from "../components/TodayMissionList";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="ProfilePage">
      <section className="ProfileHeader">
        <div>
          <div className="ChildImage">
            <img src="./../assets/images/girl1.svg" />
          </div>
          <div className="ChildImageName">Lv.7 탄소공주</div>
        </div>

        <div className="ProfileInfo">
          <div className="text-2xl">
            <div>이름</div>
            <div>생일</div>
            <div>아이디</div>
            <div>마일리지</div>
          </div>
          <div className="ml-4">
            <div>김싸피 공주님</div>
            <div>2017년 05월 05일</div>
            <div>greenssafy</div>
            <div>890점</div>
          </div>
        </div>
        <button className="ProfileHeaderButton">배지 목록</button>
        <button className="ProfileHeaderButton">뒤로 가기</button>
      </section>

      <section className="ProfileMenu">
        <button className="ProfileMenuButton">과거 미션 목록</button>
        <button className="ProfileMenuButton">보상 설정하러 가기</button>
        <button className="ProfileMenuButton">회원 수정하러 가기</button>
      </section>
      <section>
        <hr />
      </section>

      <section>
        <TodayMissionList />
      </section>
    </div>
  );
};

export default ProfilePage;
