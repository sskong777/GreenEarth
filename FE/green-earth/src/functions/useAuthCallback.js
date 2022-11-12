import { useRecoilState } from "recoil";
import { accessTokenState, refreshTokenState } from "../store/LoginStore";

import { useCommonCallback } from "./useCommonCallback";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { memberInfoState, childInfoState } from "../store/atoms";

export const useAuthCallback = () => {
  const navigate = useNavigate();

  const baseURL = "https://내가그린지구.com/api";
  // const baseURL = "http://localhost:8881/api";


  const { api } = useCommonCallback();

  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const [childInfo, setChildInfo] = useRecoilState(childInfoState);

  const loginCallback = (id, password) => {
    api
      .post(`/member/login/child`, {
        nickname: id,
        password: password,
      })
      .then((response) => {
        if (response) {
          console.log(response.data);
          console.log("로그인되었습니다.");
          setRefreshToken(response.data.refreshToken);
          setAccessToken(response.data.accessToken);
          navigate("/child");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const kakaoLoginCallback = async (code) => {
    axios({
      method: "get",
      url: `${baseURL}/member/login/adult?code=${code}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        crossDomain: true,
        credentials: "include",
        withCredentials: true,
      },
    })
      .then( async (response) => {
        if (response.data) {
          console.log(response.data);
          console.log("로그인되었습니다.");
          setRefreshToken(response.data.refreshToken);
          setAccessToken(response.data.accessToken);
          // memberInfoCallback();
          navigate("/parent" );
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const signUpCallback = (nickname, password, realName, gender, birthday) => {
    api
      .post(`/member/signup`, {
        nickname: nickname,
        password: password,
        realName: realName,
        gender: gender,
        birthday: birthday,
      })
      .then((response) => {
        if (response.data) {
          console.log("회원 가입이 완료되었습니다.");
          navigate("/parent");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data.code === "T001") {
          console.log("엑세스 토큰이 만료되었습니다.");
        }
      });
  };

  const logoutcallback = () => {
    api.post(`/member/logout`).then((response) => {
      if (response) {
        window.localStorage.clear();
        console.log("로그아웃 되었습니다.");
        navigate("/");
      }
    });
  };

  const nickNameCheckCallback = async (nickname) => {
    const response = await api.get(`/member/check/${nickname}`);
    return response;
  };

  // 회원 정보 콜백 함수
  const memberInfoCallback = async () => {
    api
      .get(`/member`)
      .then((response) => {
        if (response.data) {
          setMemberInfo(response.data);
          console.log("회원 정보가 조회되었습니다.");
          console.log("memberInfo :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // 아이 정보 콜백 함수
  const childInfoCallback = async (childId) => {
    api
      .get(`/member/child/${childId}`)
      .then((response) => {
        if (response.data) {
          setChildInfo(response.data);
          console.log("아이 정보가 조회되었습니다.");
          console.log("childInfo :", response.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return {
    loginCallback,
    logoutcallback,
    kakaoLoginCallback,
    signUpCallback,
    nickNameCheckCallback,
    memberInfoCallback,
    childInfoCallback,
  };
};
