import React, { useState } from "react";

import { useRecoilState } from "recoil";
import { ChildInfoState } from "./../../store/atoms";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const missionOptionList = [
  { value: 1, name: "분리수거 하기" },
  { value: 2, name: "배달음식 줄이기" },
  { value: 3, name: "텀블러 사용하기" },
];

const ControlMenu = React.memo(({ onChange, optionList }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState({
    value: 0,
    name: "미션을 설정해 주세요.",
  });

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

const TodayMissionItem = () => {
  const [missionItem, setMissionItem] = useState();

  return (
    <>
      <div className="TodayMissionItem">
        <ControlMenu onChange={setMissionItem} optionList={missionOptionList} />

        <button className="TodayItemButtonSingle">미션 설정</button>
      </div>
    </>
  );
};

export default TodayMissionItem;
