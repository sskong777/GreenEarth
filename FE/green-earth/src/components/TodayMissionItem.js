import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const options = ["분리수거 하기", "배달음식 줄이기", "텀블러 사용하기"];

const TodayMissionItem = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("미션을 설정해 주세요.");

  return (
    <>
      <div className="TodayMissionItem">
        {/* Dropdown */}
        <div className="TodayDropdown">
          <div
            className="TodayDropdownButton"
            onClick={(e) => {
              setIsActive(!isActive);
            }}
          >
            {selected}
            <span>
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>

          {isActive && (
            <div className="TodayDropdownContent">
              {options.map((option, key) => (
                <div
                  key={key}
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="TodayDropdownItem"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="TodayItemButtonSingle">미션 설정</button>
      </div>
    </>
  );
};

export default TodayMissionItem;
