import { useRecoilState } from "recoil";
import {
  missionListState,
  todayMissionListState,
  missionOptionListState,
  logInTokenState,
} from "./../store/atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useMissionCallback = () => {
  const navigate = useNavigate();

  const [logInToken, setLogInToken] = useRecoilState(logInTokenState);
  const [missionList, setMissionList] = useRecoilState(missionListState);
  const [missionOptionList, setMissionOptionList] = useRecoilState(
    missionOptionListState
  );
  const [todayMissionList, setTodayMissionList] = useRecoilState(
    todayMissionListState
  );

  // 전체 미션 콜백 함수
  const missionListCallback = async (childId) => {
    axios({
      method: "get",
      url: `/api/mission/child/${childId}/log`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
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
    axios({
      method: "get",
      url: `/api/mission/child/${childId}/today`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
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
    axios({
      method: "get",
      url: "/api/mission",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
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
    axios({
      method: "post",
      url: `/api/mission/child/${childId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
      data: {
        missionId: missionId,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("미션 정보가 등록되었습니다.");
          console.log("mission :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 수정 콜백 함수
  const editMissionCallback = async (childId, missionId) => {
    axios({
      method: "put",
      url: `/api/mission/log/${childId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
      data: {
        missionId: missionId,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("미션 정보가 수정되었습니다.");
          console.log("mission :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 승인 콜백 함수
  const permitMissionCallback = async (logId) => {
    axios({
      method: "put",
      url: `/api/mission/log/${logId}/permit`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("미션이 승인되었습니다.");
          console.log("mission :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 거절 콜백 함수
  const rejectMissionCallback = async (logId) => {
    axios({
      method: "put",
      url: `/api/mission/log/${logId}/reject`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("미션이 거절되었습니다.");
          console.log("mission :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 미션 승인 요청 콜백 함수
  const clearMissionCallback = async (logId) => {
    axios({
      method: "put",
      url: `/api/mission/log/${logId}/clear`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("미션 승인 요청이 전송되었습니다.");
          console.log("mission :", response.data);
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
  };
};
