import { useRecoilState } from "recoil";
import { accessTokenState, refreshTokenState } from "../store/LoginStore";
import {
  logInTokenState,
  memberInfoState,
  childInfoState,
} from "../store/atoms";

import { useCommonCallback } from "./useCommonCallback";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuthCallback = () => {
  const navigate = useNavigate();
  const baseUrl = "https://k7d206.p.ssafy.io/api";

  const { reissueAccessTokenCallback } = useCommonCallback();

  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [logInToken, setLogInToken] = useRecoilState(logInTokenState);
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const [childInfo, setChildInfo] = useRecoilState(childInfoState);

  // 임시 코드 (토큰 기능 완료시 삭제)
  useEffect(() => {
    setLogInToken(
      "eyJhbGciOiJIUzI1NiJ9.eyJJZCI6MiwiUm9sZSI6IlJPTEVfUEFSRU5UIiwiaWF0IjoxNjY3NDUxNDYwLCJzdWIiOiJhY2Nlc3NUb2tlbiIsImV4cCI6MTY2NzUzNzg2MH0.kCol2o_xOem1z-1bWGGVjIy18d9sMzm_AOKlkeoym_M"
    );
  }, []);

  const loginCallback = async (id, password) => {
    axios({
      method: "post",
      url: `${baseUrl}/member/login/child`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        crossDomain: true,
        credentials: "include",
        withCredentials: true,
      },
      data: {
        id,
        password,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          console.log("로그인되었습니다.");
          setRefreshToken(response.data.refreshToken);
          setAccessToken(response.data.accessToken);
          // userInfoCallback(response.data.token)
          // profileListCallback(response.data.token)
          navigate("/child");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        // setModalContent(error.response.data?.Messege ? error.response.data?.Messege : '오류가 발생했습니다.')
        // setModalOpen(true)
      });
  };

  const kakaoLoginCallback = async (code) => {
    axios({
      method: "get",
      url: `${baseUrl}/member/login/adult?code=${code}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        crossDomain: true,
        credentials: "include",
        withCredentials: true,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          console.log("로그인되었습니다.");
          setRefreshToken(response.data.refreshToken);
          setAccessToken(response.data.accessToken);
          // userInfoCallback(response.data.token)
          // profileListCallback(response.data.token)
          navigate("/parent");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        // setModalContent(error.response.data?.Messege ? error.response.data?.Messege : '오류가 발생했습니다.')
        // setModalOpen(true)
      });
  };

  const signUpCallback = async (
    nickname,
    password,
    realName,
    gender,
    birthday,
    avatar
  ) => {
    axios({
      method: "post",
      url: `${baseUrl}/member/signup`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        crossDomain: true,
        credentials: "include",
        withCredentials: true,
      },
      data: {
        nickname,
        password,
        realName,
        gender,
        birthday,
        avatar,
      },
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
          reissueAccessTokenCallback(accessToken, refreshToken);
          signUpCallback(
            nickname,
            password,
            realName,
            gender,
            birthday,
            avatar
          );
        }
      });
  };

  const nickNameCheckCallback = async (nickname) => {
    const response = await axios({
      method: "get",
      url: `${baseUrl}/member/check/${nickname}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        crossDomain: true,
        credentials: "include",
        withCredentials: true,
      },
    });
    return response;
  };

  // 회원 정보 콜백 함수
  const memberInfoCallback = async (token) => {
    axios({
      method: "get",
      url: "/api/member",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : `Bearer ${logInToken}`,
      },
    })
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
    axios({
      method: "get",
      url: `/api/member/child/${childId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${logInToken}`,
      },
    })
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
    kakaoLoginCallback,
    signUpCallback,
    nickNameCheckCallback,
    memberInfoCallback,
    childInfoCallback,
  };
};
