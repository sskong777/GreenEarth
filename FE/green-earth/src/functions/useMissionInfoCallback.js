
import { useRecoilState } from "recoil";
import {
  missionInfoState,
  logInTokenState,
} from "./../store/atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useMissionInfoCallback = () => {
  const navigate = useNavigate();

  const [logInToken, setLogInToken] = useRecoilState(logInTokenState);
  const [missionInfo, setMissionInfo] = useRecoilState(missionInfoState);


  const missionInfoCallback = async () => {
    axios({
      method: "get",
      url: '/api/mission/${mission_id}',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setMissionInfo(response.data);
          console.log("missionInfo :", missionInfo);
          console.log("미션 정보가 조회되었습니다..");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };



  return {
    missionInfoCallback,
 

  };
};

