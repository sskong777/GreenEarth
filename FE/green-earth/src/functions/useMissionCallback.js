import { useRecoilState } from "recoil";
import {
  missionListState,
  todayMissionListState,
  missionOptionListState,
  missionInfoState,
} from "./../store/atoms";
import { useNavigate } from "react-router-dom";

import { useCommonCallback } from "./useCommonCallback";

export const useMissionCallback = () => {
  const navigate = useNavigate();

  const { api } = useCommonCallback();

  const [missionList, setMissionList] = useRecoilState(missionListState);
  const [missionOptionList, setMissionOptionList] = useRecoilState(
    missionOptionListState
  );
  const [todayMissionList, setTodayMissionList] = useRecoilState(
    todayMissionListState
  );
  const [missionInfo, setMissionInfo] = useRecoilState(missionInfoState);

  // 전체 미션 콜백 함수
  const missionListCallback = async (childId) => {
    api
      .get(`/mission/child/${childId}/log`)
      .then((response) => {
        if (response.data) {
          setMissionList(response.data);
          console.log("미션 리스트가 조회되었습니다.");
          console.log("missionList :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 오늘의 미션 콜백 함수
  const todayMissionListCallback = async (childId) => {
    api
      .get(`/mission/child/${childId}/today`)
      .then((response) => {
        if (response.data) {
          setTodayMissionList(response.data);
          console.log("오늘의 미션 리스트가 조회되었습니다.");
          console.log("todayMissionList :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 종류 콜백 함수
  const missionOptionListCallback = async () => {
    api
      .get(`/mission`)
      .then((response) => {
        if (response.data) {
          setMissionOptionList(response.data);
          console.log("미션 옵션 정보가 조회되었습니다.");
          console.log("missionOptionList :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 설정 콜백 함수
  const saveMissionCallback = async (childId, missionId) => {
    api
      .post(`/mission/child/${childId}`, {
        missionId: missionId,
      })
      .then((response) => {
        if (response.data) {
          console.log("미션 정보가 등록되었습니다.");
          console.log("mission :", response.data);
          navigate(0);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 수정 콜백 함수
  const editMissionCallback = async (logId, missionId) => {
    api
      .put(`/mission/log/${logId}`, {
        missionId: missionId,
      })
      .then((response) => {
        if (response.data) {
          console.log("미션 정보가 수정되었습니다.");
          console.log("mission :", response.data);
          navigate(0);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 승인 콜백 함수
  const permitMissionCallback = async (logId) => {
    api
      .put(`/mission/log/${logId}/permit`)
      .then((response) => {
        if (response.data) {
          console.log("미션이 승인되었습니다.");
          console.log("mission :", response.data);
          navigate(0);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 거절 콜백 함수
  const rejectMissionCallback = async (logId) => {
    api
      .put(`/mission/log/${logId}/reject`)
      .then((response) => {
        if (response.data) {
          console.log("미션이 거절되었습니다.");
          console.log("mission :", response.data);
          navigate(0);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 아이 미션 승인 요청 콜백 함수
  const clearMissionCallback = async (logId) => {
    api
      .put(`/mission/log/${logId}/clear`)
      .then((response) => {
        if (response.data) {
          navigate("/child");
          console.log("미션 승인 요청이 전송되었습니다.");
          console.log("mission :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  //  미션 정보 콜백 함수
  const missionInfoCallback = async (missionId) => {
    api
      .get(`/mission/${missionId}`)
      .then((response) => {
        if (response.data) {
          setMissionInfo(response.data);
          console.log("미션 정보가 조회되었습니다.");
          console.log("MissionInfo :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return {
    missionListCallback,
    todayMissionListCallback,
    missionOptionListCallback,
    saveMissionCallback,
    editMissionCallback,
    permitMissionCallback,
    rejectMissionCallback,
    clearMissionCallback,
    missionInfoCallback,
  };
};
