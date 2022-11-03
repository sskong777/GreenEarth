import { useRecoilState } from "recoil";
import { accessTokenState, refreshTokenState } from "../store/LoginStore";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useCommonCallback = () => {
  const navigate = useNavigate();
  const baseUrl = "https://k7d206.p.ssafy.io/api";
  // const baseUrl = "http://localhost:8881/api";

  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const reissueAccessTokenCallback = async (accessToken, refreshToken) => {
    axios({
      method: "post",
      url: `${baseUrl}/member/reissue`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        crossDomain: true,
        credentials: "include",
        withCredentials: true,
      },
      data: {
        accessToken,
        refreshToken,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log("accessToken이 재발급 되었습니다.");
          setAccessToken(response.data.accessToken);
          return;
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.code === "T003") {
          console.log("재로그인이 필요합니다");
          setRefreshToken("");
          setAccessToken("");
          navigate("/login");
        } else {
          console.log(error.response.data);
        }
      });
  };

  return { reissueAccessTokenCallback };
};
