const TodayMissionList = () => {
  const curDate = new Date();
  const today = `${curDate.getMonth() + 1}월 ${curDate.getDate()}일`;
  return (
    <div>
      <div className="TodayHeader">{today}의 미션 목록</div>
      <div className="TodayItem">텀블러 사용하기</div>
    </div>
  );
};

export default TodayMissionList;
