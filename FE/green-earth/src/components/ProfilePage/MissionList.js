import React, { useState } from "react";

import MissionItem from "./MissionItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// 최신순, 오래된 순 정렬 리스트
const sortOptionList = [
  { value: "0", name: "최신순" },
  { value: "1", name: "오래된 순" },
];

// 성공, 실패 여부 필터 정렬 리스트
const filterOptionList = [
  { value: "0", name: "전부다" },
  { value: "1", name: "성공한 미션" },
  { value: "2", name: "실패한 미션" },
];

// 드롭다운을 컨트롤 하기 위한 함수
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  // 드롭다운 활성화 여부와 현재 value 값 저장
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(value);

  return (
    <>
      <div className="MissionDropdown">
        <div
          className="MissionDropdownButton"
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          {optionList[parseInt(selected)].name}
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>

        {isActive && (
          <div className="MissionDropdownContent">
            {optionList.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  onChange(option.value);
                  setSelected(option.value);
                  setIsActive(false);
                }}
                className="MissionDropdownItem"
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
});

// 캘린더 사용을 위한 getDate 함수
const getDate = (curDate) => {
  let year = curDate.getFullYear();
  let month = curDate.getMonth() + 1;
  let day = curDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

const MissionList = (data) => {
  const [sortType, setSortType] = useState("0");
  const [filter, setFilter] = useState("0");

  // 최신순 옵션과 미션완료 옵션 필터 적용하여 새로운 data로 출력
  const getProcessedMissionList = () => {
    const filterCallBack = (item) => {
      if (filter === "1") {
        return item.clearedAt !== null;
      } else {
        return item.clearedAt === null;
      }
    };
    const compare = (a, b) => {
      if (sortType === "0") {
        return (
          parseInt(new Date(b.createdAt).getTime()) -
          parseInt(new Date(a.createdAt).getTime())
        );
      } else {
        return (
          parseInt(new Date(a.createdAt).getTime()) -
          parseInt(new Date(b.createdAt).getTime())
        );
      }
    };
    const copyList = JSON.parse(JSON.stringify(data.missionList));

    const filterdList =
      filter === "0" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filterdList.sort(compare);
    return sortedList;
  };

  return (
    <div className="MissionList">
      <div className="MissionListHeader">
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <ControlMenu
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
        {/* 날짜 선택 캘린더 */}
        <input
          className="MissionListDate"
          value={getDate(data.date)}
          onChange={(e) => data.onChange(new Date(e.target.value))}
          type="date"
        />
      </div>
      {/* 반복문 실행하여 MissionItem에 전달 */}
      {getProcessedMissionList().map((it) => (
        <MissionItem key={it.logId} {...it} />
      ))}
    </div>
  );
};

export default MissionList;
