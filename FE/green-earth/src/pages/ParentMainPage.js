import "../style/ParentMainPage/ParentMain.css";

import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { memberInfoState } from "../store/atoms";
import { useAuthCallback } from "./../functions/useAuthCallback";
import { ParentMain } from "../components/ParentMainPage/ParentMain";
import { useGLTF } from "@react-three/drei";

import { Model0, EarthLv8_2} from "../Model.js/Space"


function ParentMainPage() {
  // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  // 회원정보, 아이정보 Axios 요청
  const { memberInfoCallback } = useAuthCallback();

  // const location = useLocation();
  // const memberInfoProp = location.state.value;
  // 페이지에 접근하면 해당 유저 정보Axios 요청
  useEffect(() => {
    memberInfoCallback();
  }, []);

  return <div>{memberInfo.isParent && <ParentMain data={memberInfo} />}</div>;
}
useGLTF.preload(EarthLv8_2)
export default ParentMainPage;
