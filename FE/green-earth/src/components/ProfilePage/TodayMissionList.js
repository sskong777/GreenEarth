import { useRecoilState } from "recoil";
import { todayMissionListState } from "./../../store/atoms";

import TodayMissionItem from "./TodayMissionItem";

const TodayMissionList = () => {
  const [todayMissionList, setTodayMissionList] = useRecoilState(
    todayMissionListState
  );

  const createTodayMission = (value) => {
    let answer = [];
    for (let i = 0; i < value; i++) {
      answer.push(<TodayMissionItem key={i} />);
    }
    return answer;
  };

  return (
    <div className="TodayMissionList">
      <div className="TodayHeader">오늘의 미션 목록</div>
      {todayMissionList.map((it, idx) => (
        <TodayMissionItem key={idx} data={it} />
      ))}
      {createTodayMission(3 - todayMissionList.length)}
    </div>
  );
};

export default TodayMissionList;
