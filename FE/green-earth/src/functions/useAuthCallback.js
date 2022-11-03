import { useRecoilState } from "recoil";
import {
  logInTokenState,
  memberInfoState,
  childInfoState,
} from "../store/atoms";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuthCallback = () => {
  const navigate = useNavigate();

  const [logInToken, setLogInToken] = useRecoilState(logInTokenState);
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const [childInfo, setChildInfo] = useRecoilState(childInfoState);

  // 임시 코드 (토큰 기능 완료시 삭제)
  useEffect(() => {
    setLogInToken(
      "eyJhbGciOiJIUzI1NiJ9.eyJJZCI6MiwiUm9sZSI6IlJPTEVfUEFSRU5UIiwiaWF0IjoxNjY3NDUxNDYwLCJzdWIiOiJhY2Nlc3NUb2tlbiIsImV4cCI6MTY2NzUzNzg2MH0.kCol2o_xOem1z-1bWGGVjIy18d9sMzm_AOKlkeoym_M"
    );
  }, []);

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

  return { memberInfoCallback, childInfoCallback };
};
