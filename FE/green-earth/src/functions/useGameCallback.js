import { useNavigate } from "react-router-dom";

import { useCommonCallback } from "./useCommonCallback";

export const useGameCallback = () => {
  const navigate = useNavigate();

  const { api } = useCommonCallback();

  // 게임 완료 마일리지 적립 콜백 함수
  const gameSuccessCallback = async (mileage) => {
    api
      .put(`/game/success`, {
        mileage: mileage,
      })
      .then((response) => {
        if (response.data) {
          console.log("게임 마일리지가 적립되었습니다.");
          // console.log("mileage :", response.data);
        }
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  };

  return {
    gameSuccessCallback,
  };
};
