import TodayMissionItem from "./TodayMissionItem";

const TodayMissionList = () => {
  const curDate = new Date();
  const today = `${curDate.getMonth() + 1}월 ${curDate.getDate()}일`;
  return (
    <div className="TodayMissionList">
      <div className="TodayHeader">{today}의 미션 목록</div>
      <TodayMissionItem />
    </div>
  );
};

export default TodayMissionList;
