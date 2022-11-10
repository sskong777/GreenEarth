import { useRecoilState } from "recoil";
import {
  isRetryState,
  accessTokenState,
  refreshTokenState,
} from "../store/LoginStore";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useCommonCallback = () => {
  const navigate = useNavigate();
  const baseURL = "https://내가그린지구.com/api";
  // const baseURL = "http://localhost:8881/api";

  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [isRetry, setIsRetry] = useRecoilState(isRetryState);

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true,
    credentials: "include",
    withCredentials: true,
  };

  const api = axios.create({
    baseURL,
    headers: headers,
  });

  api.interceptors.request.use(
    (config) => {
      // const local = JSON.parse(window.localStorage.getItem("recoil-persist"));
      // console.log("1", local.accessTokenState);
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      console.log("response", accessToken);
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      const code = error.response.status;

      if (isRetry) {
        setIsRetry(false);
        console.log("isRetry1", isRetry);
        return Promise.reject(error);
      }

      if (code === 401 && !isRetry) {
        console.log("isRetry2", isRetry);

        const access = await reissueAccessTokenCallback(
          accessToken,
          refreshToken
        );
        setAccessToken(access);

        const local = JSON.parse(window.localStorage.getItem("recoil-persist"));
        local.accessTokenState = access;
        window.localStorage.setItem("recoil-persist", JSON.stringify(local));

        originalRequest.headers["Authorization"] = `Bearer ${access}`;

        return axios.request(originalRequest);
      }
    }
  );

  const reissueAccessTokenCallback = async (accessToken, refreshToken) => {
    console.log("액세스 토큰 재발급");
    const res = await axios({
      method: "post",
      url: `${baseURL}/member/token/reissue`,
      headers: headers,
      data: {
        accessToken,
        refreshToken,
      },
    });
    setIsRetry(true);
    return res.data.accessToken;
  };

  return { api, reissueAccessTokenCallback };
};
