import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { missionListState } from "./../../store/atoms";

import MissionList from "./MissionList";

const MissionComponent = () => {
  const [missionList, setMissionList] = useRecoilState(missionListState);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const getStringDate = (curDate) => {
    let year = curDate.getFullYear();
    let month = curDate.getMonth() + 1;
    let day = curDate.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}년 ${month}월 ${day}일`;
  };

  const today = getStringDate(curDate);

  useEffect(() => {
    if (missionList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        curDate.getDate()
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        curDate.getDate(),
        23,
        59,
        59
      ).getTime();

      setData(
        missionList.filter(
          (mission) =>
            firstDay <= new Date(mission.createdAt).getTime() &&
            new Date(mission.createdAt).getTime() <= lastDay
        )
      );
    }
  }, [missionList, curDate]);

  const increaseDay = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + 1)
    );
  };

  const decreaseDay = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() - 1)
    );
  };

  return (
    <div className="MissionComponent">
      <div className="MissionComponentHeader">
        <button className="MissionComponentButton" onClick={decreaseDay}>
          {"<"}
        </button>
        <div className="MissionComponentToday">{today}의 미션 목록</div>
        <button className="MissionComponentButton" onClick={increaseDay}>
          {">"}
        </button>
      </div>
      <MissionList missionList={data} date={curDate} onChange={setCurDate} />
    </div>
  );
};

export default MissionComponent;
