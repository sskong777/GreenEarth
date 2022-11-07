import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuthCallback } from "../functions/useAuthCallback";

const OauthRedirectPage = () => {
  const { kakaoLoginCallback } = useAuthCallback();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const code = params.get("code");

  useEffect(() => {
    console.log(code);
    kakaoLoginCallback(code);
  }, []);

  return <div>카카오 회원 가입 중입니다...</div>;
};

export default OauthRedirectPage;
