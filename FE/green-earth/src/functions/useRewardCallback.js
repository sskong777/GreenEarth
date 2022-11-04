import { useRecoilState } from "recoil";
<<<<<<< Updated upstream
import { rewardListState, logInTokenState } from "./../store/atoms";
=======
import { rewardListState } from "./../store/atoms";
import { accessTokenState, refreshTokenState } from "../store/LoginStore";

>>>>>>> Stashed changes
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRewardCallback = () => {
  const navigate = useNavigate();

<<<<<<< Updated upstream
  const [logInToken, setLogInToken] = useRecoilState(logInTokenState);
=======
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
>>>>>>> Stashed changes
  const [rewardList, setRewardList] = useRecoilState(rewardListState);

  // 보상 목록 조회 콜백 함수
  const rewardListCallback = async (childId) => {
    axios({
      method: "get",
      url: `/api/reward/child/${childId}`,
      headers: {
        "Content-Type": "application/json",
<<<<<<< Updated upstream
        Authorization: `Bearer ${logInToken}`,
=======
        Authorization: `Bearer ${accessToken}`,
>>>>>>> Stashed changes
      },
    })
      .then((response) => {
        if (response.data) {
          setRewardList(response.data);
          console.log("보상 정보가 조회되었습니다.");
          console.log("rewardList :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 보상 설정 콜백 함수
  const rewardSubmitCallback = async (
    name,
    rewardCondition,
    childId,
    parentNickname
  ) => {
    console.log(name, rewardCondition, childId, parentNickname);
    axios({
      method: "post",
      url: `/api/reward/child/${childId}`,
      headers: {
        "Content-Type": "application/json",
<<<<<<< Updated upstream
        Authorization: `Bearer ${logInToken}`,
=======
        Authorization: `Bearer ${accessToken}`,
>>>>>>> Stashed changes
      },
      data: {
        name: name,
        rewardCondition: rewardCondition,
        childId: childId,
        parentNickname: parentNickname,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("보상이 등록 되었습니다.");
          console.log("reward :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 보상 지급 콜백 함수
  const rewardPayCallback = async (rewardId) => {
    axios({
      method: "delete",
      url: `/api/reward/${rewardId}`,
      headers: {
        "Content-Type": "application/json",
<<<<<<< Updated upstream
        Authorization: `Bearer ${logInToken}`,
=======
        Authorization: `Bearer ${accessToken}`,
>>>>>>> Stashed changes
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("보상이 지급되었습니다.");
          console.log("reward :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return { rewardListCallback, rewardSubmitCallback, rewardPayCallback };
};
