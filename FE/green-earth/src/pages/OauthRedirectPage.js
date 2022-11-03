import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuthCallback } from "../functions/useAuthCallback";

const OauthRedirectPage = () => {
  const { kakaoLoginCallback } = useAuthCallback();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const code = params.get("code");

  //   useEffect(() => {
  //     console.log(code);
  //     kakaoLoginCallback(code);
  //   }, []);

  const event = () => {
    // console.log(typeof code);
    kakaoLoginCallback(code);
  };

  return (
    <div>
      리아이렉트
      <div>안녕하세요</div>
      <button onClick={event}>{code}</button>
    </div>
  );
};

export default OauthRedirectPage;
