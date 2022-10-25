import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="ProfilePage">
      <section className="ProfileHeader">
        <div className="ChildImage">이미지</div>
        <div className="ProfileInfo">
          <div>
            <div>(이름)</div>
            <div>(생일)</div>
            <div>(아이디)</div>
            <div>(마일리지)</div>
          </div>
          <div>
            <div>김싸피 공주님</div>
            <div>2017년 05월 05일</div>
            <div>greenssafy</div>
            <div>890점</div>
          </div>
        </div>
        <button className="ProfileHeaderButton">배지 목록</button>
        <button className="ProfileHeaderButton">뒤로 가기</button>
      </section>
      <section>
        <div>별명</div>
      </section>
      <section className="ProfileMenu">
        <button className="bg-yellow-700">과거 미션 목록</button>
        <button className="bg-yellow-500">보상 설정하러 가기</button>
        <button className="bg-yellow-300">회원 수정하러 가기</button>
      </section>
      <section>
        <hr />
      </section>

      <section>
        <div>컴포넌트</div>
      </section>
    </div>
  );
};

export default ProfilePage;
