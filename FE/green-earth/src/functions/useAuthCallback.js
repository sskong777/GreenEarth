import { useRecoilState } from "recoil";
import { jwtTokenState } from "../store/LoginStore";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuthCallback = () => {
  const navigate = useNavigate();

  const [jwtToken, setJwtToken] = useRecoilState(jwtTokenState);

  const loginCallback = async (email, password) => {
    axios({
      method: "post",
      url: "/api/member/login/child",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          console.log("로그인되었습니다.");
          setJwtToken(response.data.token);
          // userInfoCallback(response.data.token)
          // profileListCallback(response.data.token)
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        // setModalContent(error.response.data?.Messege ? error.response.data?.Messege : '오류가 발생했습니다.')
        // setModalOpen(true)
      });
  };

  return { loginCallback };
};
