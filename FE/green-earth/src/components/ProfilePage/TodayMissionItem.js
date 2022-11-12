import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  missionOptionListState,
  missionSelectState,
} from "./../../store/atoms";

import { useMissionCallback } from "./../../functions/useMissionCallback";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// 미션 설정 드롭다운 함수
const ControlMenu = React.memo(({ data, onChange, optionList }) => {
  const [isActive, setIsActive] = useState(false);
  const [isValue, setIsValue] = useState({
    id: 0,
    name: "미션을 설정해 주세요.",
    description: "미션 설명",
    mileage: 0,
  });
  const [selected, setSelected] = useRecoilState(missionSelectState);

  // data가 있다면 isValue에 데이터 저장
  useEffect(() => {
    if (data) {
      setIsValue(data.mission);
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
          {isValue.name}
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>

        {isActive && (
          <div className="TodayDropdownContent">
            {optionList.map((option, idx) => (
              <div
                key={idx}
                // 옵션을 선택하면 드롭다운 창을 닫고 Value와 Selecte에 option 저장
                onClick={(e) => {
                  onChange(option);
                  setSelected(option);
                  setIsValue(option);
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

  const { childId } = useParams();

  const {
    missionOptionListCallback,
    saveMissionCallback,
    editMissionCallback,
    permitMissionCallback,
    rejectMissionCallback,
  } = useMissionCallback();

  const [missionItem, setMissionItem] = useState();
  const [isCleared, setIsCleared] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isPermitted, setIsPermitted] = useState(false);

  // 미션 종류 Axios 요청
  useEffect(() => {
    missionOptionListCallback();
    console.log(data)
  }, []);

  // 만약 data가 있다면 아래 조건문 실행
  useEffect(() => {
    if (data) {
      // 미션을 완료했다면 true로 변경
      if (data.clearedAt) {
        setIsCleared(true);
      }
      // 승인 완료된 미션이라면 true로 변경
      if (data.isPermitted) {
        setIsPermitted(true);
      }
      // data가 없을 경우 IsCreated를 true로 변경
    } else {
      setIsCreated(true);
    }
  }, [data]);

  // 미션 설정 함수
  const handleClickMissionSubmit = () => {
    if (window.confirm("미션을 설정하시겠습니까?")) {
      saveMissionCallback(childId, selected.missionId);
      console.log("미션 설정 완료");
    }
  };

  // 미션 수정 함수
  const handleClickMissionEdit = () => {
    if (window.confirm("미션을 수정하시겠습니까?")) {
      editMissionCallback(data.id, selected.missionId);
      console.log("미션 수정 완료");
    }
  };

  // 미션 승인 함수
  const handleClickMissionPermit = () => {
    if (window.confirm("미션을 승인하시겠습니까?")) {
      permitMissionCallback(data.id);
      console.log("미션 승인 완료");
    }
  };

  // 미션 거절 함수
  const handleClickMissionReject = () => {
    if (window.confirm("미션을 거절하시겠습니까?")) {
      rejectMissionCallback(data.id);
      console.log("미션 거절 완료");
    }
  };

  return (
    <>
      <div className="TodayMissionItem">
        {/* 미션을 완료했고 승인이 되었다면 div태그로 변경 */}
        {isCleared && isPermitted ? (
          <div className="TodayMissionItemComplete">{data.mission.name}</div>
        ) : (
          <ControlMenu
            data={data}
            onChange={setMissionItem}
            optionList={missionOptionList}
          />
        )}

        {/* 미션을 완료했고 승인이 되었다면 승인완료 버튼으로 변경 후 클릭 막기  */}
        {isCleared && isPermitted && (
          <button className="TodayItemButtonSingle">승인 완료</button>
        )}

        {/* 미션을 완료했지만 승인이 안되었지만 데이터는 있을 경우*/}
        {isCleared && !isPermitted && !isCreated && (
          <>
            {/* 승인, 거절 버튼 생성 */}
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

        {/* 미션을 아직 완료 못했지만 미션이 있을 경우  */}
        {!isCleared && !isCreated && (
          // 미션 수정 버튼 생성
          <button
            className="TodayItemButtonSingleEdit"
            onClick={handleClickMissionEdit}
          >
            수정
          </button>
        )}

        {/* 미션이 없어 설정이 안되었을 경우 */}
        {isCreated && (
          // 미션 설정 버튼 생성
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
