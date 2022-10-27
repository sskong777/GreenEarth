import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = ["React", "Vue", "Angular"];

const TodayMissionItem = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("미션을 설정해 주세요.");

  return (
    <>
      <div className="TodayMissionItem">
        {/* Dropdown */}
        <div className="TodayItem">미션을 설정해 주세요.</div>

        <button className="TodayItemButtonSingle">미션 설정</button>
      </div>
      <div className="dropdown">
        <div
          className="dropdown-btn"
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          {selected}
        </div>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-caret-down" />
        </span>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option, key) => (
              <div
                key={key}
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TodayMissionItem;
