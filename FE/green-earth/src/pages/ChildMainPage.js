
import "../style/ChildMainPage/ChildMain.css";




import {Earth1} from "../components/ChildMainPage/Earth1"
import {Earth2} from "../components/ChildMainPage/Earth2"
import {Earth3} from "../components/ChildMainPage/Earth3"
import {Earth4} from "../components/ChildMainPage/Earth4"
import {Earth5} from "../components/ChildMainPage/Earth5"
import {Earth6} from "../components/ChildMainPage/Earth6"
import {Earth7} from "../components/ChildMainPage/Earth7"
import {Earth8} from "../components/ChildMainPage/Earth8"


import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { memberInfoState, childInfoState } from "../store/atoms";
import { useAuthCallback } from "./../functions/useAuthCallback";

function ChildMainPage() {
  


    // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
    const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);


    // 회원정보, 아이정보 Axios 요청
    const { memberInfoCallback } = useAuthCallback();

    // 페이지에 접근하면 해당 아이정보 Axios 요청
    useEffect(() => {
    memberInfoCallback();
    console.log(memberInfo)
    }, []);

    const { logoutcallback } = useAuthCallback();

  if (memberInfo.isParent === false && memberInfo.earthLevel ===1 ){
    
  return (
    <div>
      <div className= "btn">
        <button onClick={logoutcallback} >로그아웃임시</button>
        </div>
      <Earth1 />
    </div>
    
  );} 
  else if (memberInfo.isParent === false &&  memberInfo.earthLevel === 2) {
    return (
    <div>
      <Earth2 />
    </div>
  
  );}
  else if ( memberInfo.isParent === false && memberInfo.earthLevel === 3) {
    return (
    <div>
      <Earth3 />
    </div>
      
  );}
  else if (memberInfo.isParent === false &&  memberInfo.earthLevel === 4) {
      return (
      <div>
        <Earth4 />
      </div>
      
  );}
  else if (memberInfo.isParent === false &&  memberInfo.earthLevel === 5) {
  return (
      <div>
        <Earth5 />
      </div>
      
); }
  else if (memberInfo.isParent === false &&  memberInfo.earthLevel === 6) {
  return (
      <div>
        <Earth6 />
      </div>
  );}
  else if (memberInfo.isParent === false &&  memberInfo.earthLevel === 7) {
  return (
    <div>
      <Earth7 />
    </div>
  );}
  else if (memberInfo.isParent === false && memberInfo.earthLevel === 8) {
      return (
    <div>
      <Earth8 />
    </div>
  );}

  }


export default ChildMainPage;
