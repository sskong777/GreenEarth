import TodayMissionItem from "./TodayMissionItem";

const TodayMissionList = () => {
  return (
    <div className="TodayMissionList">
      <div className="TodayHeader">오늘의 미션 목록</div>
      <TodayMissionItem />
    </div>
  );
};

export default TodayMissionList;
