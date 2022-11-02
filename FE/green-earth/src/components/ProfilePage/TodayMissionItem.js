import React, { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import {
  missionOptionListState,
  missionSelectState,
} from "./../../store/atoms";

import { useMissionCallback } from "./../../functions/useMissionCallback";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ControlMenu = React.memo(({ data, onChange, optionList }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useRecoilState(missionSelectState);

  useEffect(() => {
    if (data) {
      setSelected(data.mission);
    } else {
      setSelected({
        missionId: 1,
        name: "미션을 설정해 주세요.",
        description: "미션 설명",
        mileage: 0,
      });
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
  const [missionOptionList, setmissionOptionList] = useRecoilState(
    missionOptionListState
  );
  const [selected, setSelected] = useRecoilState(missionSelectState);

  const {
    missionOptionListCallback,
    saveMissionCallback,
    editMissionCallback,
    permitMissionCallback,
    rejectMissionCallback,
  } = useMissionCallback();

  console.log("data", data);

  const [missionItem, setMissionItem] = useState();
  const [isCleared, setIsCleared] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isPermitted, setIsPermitted] = useState(false);

  useEffect(() => {
    missionOptionListCallback();
  }, []);

  useEffect(() => {
    if (data) {
      if (data.clearedAt) {
        setIsCleared(true);
      }
      if (data.isPermitted) {
        setIsPermitted(true);
      }
    } else {
      setIsCreated(true);
    }
  }, [data]);

  const handleClickMissionSubmit = () => {
    if (window.confirm("미션을 설정하시겠습니까?")) {
      saveMissionCallback(data.childId);
      console.log("미션 설정 완료");
    }
  };

  const handleClickMissionEdit = () => {
    if (window.confirm("미션을 수정하시겠습니까?")) {
      editMissionCallback(data.childId, selected.missionId);
      console.log("미션 수정 완료");
    }
  };

  const handleClickMissionPermit = () => {
    if (window.confirm("미션을 승인하시겠습니까?")) {
      permitMissionCallback(data.logId);
      console.log("미션 승인 완료");
    }
  };

  const handleClickMissionReject = () => {
    if (window.confirm("미션을 거절하시겠습니까?")) {
      rejectMissionCallback(data.logId);
      console.log("미션 거절 완료");
    }
  };

  return (
    <>
      <div className="TodayMissionItem">
        {isCleared && isPermitted ? (
          <div className="TodayMissionItemComplete">{data.mission.name}</div>
        ) : (
          <ControlMenu
            data={data}
            onChange={setMissionItem}
            optionList={missionOptionList}
          />
        )}

        {isCleared && isPermitted && (
          <button className="TodayItemButtonSingle">승인 완료</button>
        )}

        {isCleared && !isPermitted && !isCreated && (
          <>
            <button
              className="TodayItemButtonDoublePermit"
              onClick={handleClickMissionPermit}
            >
              승인
            </button>
            <button
              className="TodayItemButtonDoubleReject"
              onClick={handleClickMissionReject}
            >
              거절
            </button>
          </>
        )}

        {!isCleared && !isCreated && (
          <button
            className="TodayItemButtonSingleEdit"
            onClick={handleClickMissionEdit}
          >
            수정
          </button>
        )}

        {isCreated && (
          <button
            className="TodayItemButtonSingleSubmit"
            onClick={handleClickMissionSubmit}
          >
            설정
          </button>
        )}
      </div>
    </>
  );
};

export default TodayMissionItem;
