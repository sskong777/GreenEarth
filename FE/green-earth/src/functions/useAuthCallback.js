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

  useEffect(() => {
    setLogInToken(
      "eyJhbGciOiJIUzI1NiJ9.eyJJZCI6NSwiUm9sZSI6IlJPTEVfQ0hJTEQiLCJpYXQiOjE2NjczNjY1NTgsInN1YiI6ImFjY2Vzc1Rva2VuIiwiZXhwIjoxNjY3NDUyOTU4fQ.-q9vy9m8ljV3lcK2BoO9oS9sTNfAQ3kdeTmdRLnzvjk"
    );
    console.log("Token :", logInToken);
  }, []);

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
          console.log(response.data);
          setMemberInfo(response.data);
          console.log("memberInfo :", memberInfo);
          console.log("회원 정보가 조회되었습니다.");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

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
          console.log(response.data);
          setChildInfo(response.data);
          console.log("childInfo :", childInfo);
          console.log("아이 정보가 조회되었습니다.");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return { memberInfoCallback, childInfoCallback };
};
