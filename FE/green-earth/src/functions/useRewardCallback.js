import { useRecoilState } from "recoil";
import { rewardListState } from "./../store/atoms";
import { useNavigate } from "react-router-dom";

import { useCommonCallback } from "./useCommonCallback";

export const useRewardCallback = () => {
  const navigate = useNavigate();

  const { api } = useCommonCallback();

  const [rewardList, setRewardList] = useRecoilState(rewardListState);

  // 보상 목록 조회 콜백 함수
  const rewardListCallback = async (childId) => {
    api
      .get(`/api/reward/child/${childId}`)
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
    api
      .post(`/api/reward/child/${childId}`, {
        name: name,
        rewardCondition: rewardCondition,
        childId: childId,
        parentNickname: parentNickname,
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
    api
      .delete(`/api/reward/${rewardId}`)
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
