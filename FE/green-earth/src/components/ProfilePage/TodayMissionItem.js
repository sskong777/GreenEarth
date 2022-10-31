import React, { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { ChildInfoState } from "./../../store/atoms";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const missionOptionList = [
  {
    missionId: 1,
    name: "분리수거 하기",
    description: "미션 설명",
    mileage: 10,
  },
  {
    missionId: 2,
    name: "텀블러 사용하기",
    description: "미션 설명",
    mileage: 10,
  },
  {
    missionId: 3,
    name: "음식 남기지 않기",
    description: "미션 설명",
    mileage: 10,
  },
];

const ControlMenu = React.memo(({ data, onChange, optionList }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState({
    missionId: 1,
    name: "미션을 설정해 주세요.",
    description: "미션 설명",
    mileage: 0,
  });

  useEffect(() => {
    if (data) {
      setSelected(data.mission);
    }
  }, [data]);

  return (
    <>
      <div className="TodayDropdown">
        <div
          className="TodayDropdownButton"
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          {selected.name}
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>

        {isActive && (
          <div className="TodayDropdownContent">
            {optionList.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  onChange(option);
                  setSelected(option);
                  setIsActive(false);
                }}
                className="TodayDropdownItem"
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

const TodayMissionItem = ({ data }) => {
  const [missionItem, setMissionItem] = useState();
  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.clearedAt) {
        setIsCleared(true);
      }
    }
  }, [data]);

  return (
    <>
      <div className="TodayMissionItem">
        <ControlMenu
          data={data}
          onChange={setMissionItem}
          optionList={missionOptionList}
        />
        <button className="TodayItemButtonSingle">미션 설정</button>
      </div>
    </>
  );
};

export default TodayMissionItem;
