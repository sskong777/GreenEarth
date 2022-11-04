import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { missionListState } from "./../../store/atoms";

import { useMissionCallback } from "./../../functions/useMissionCallback";

import MissionList from "./MissionList";

const MissionComponent = ({ childId }) => {
  const [missionList, setMissionList] = useRecoilState(missionListState);

  const { missionListCallback } = useMissionCallback();

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  // 현재 회원의 미션 목록 Axios 요청
  useEffect(() => {
    missionListCallback(childId);
  }, []);

  // curDate(오늘 날짜)를 받아서 년 월 일 형식으로 리턴
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

  // today에 오늘 날짜 저장
  const today = getStringDate(curDate);

  // missionList와 날짜가 변경될 경우 바뀐 날짜의 미션만 필터하여 출력
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

  // 다음날로 변경
  const increaseDay = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + 1)
    );
  };

  // 이전날로 변경
  const decreaseDay = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() - 1)
    );
  };

  return (
    <div className="MissionComponent">
      {/* 미션 컴포넌트 헤더 */}
      <div className="MissionComponentHeader">
        <button className="MissionComponentButton" onClick={decreaseDay}>
          {"<"}
        </button>
        <div className="MissionComponentToday">{today}의 미션 목록</div>
        <button className="MissionComponentButton" onClick={increaseDay}>
          {">"}
        </button>
      </div>
      {/* MissionList 컴포넌트에 필터 된 data와 날짜, 날짜변경 전달 */}
      <MissionList missionList={data} date={curDate} onChange={setCurDate} />
    </div>
  );
};

export default MissionComponent;
