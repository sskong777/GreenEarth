import { useRecoilState } from "recoil";
import { missionListState } from "./../store/atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useMissonCallback = () => {
  const navigate = useNavigate();

  const [missionList, setMissionList] = useRecoilState(missionListState);

  const saveMissonCallback = async ({ id }) => {
    axios({
      method: "post",
      url: "/api/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token",
      },
      data: {
        id: id,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return { saveMissonCallback };
};
