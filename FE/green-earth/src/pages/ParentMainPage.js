
import "../style/ParentMainPage/ParentMain.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
// import Home from "./pages/Home";
import {useRef} from 'react'
//import {useState} from 'react'
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,useAnimations } from '@react-three/drei'
import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { memberInfoState} from "../store/atoms";
import { useAuthCallback } from "./../functions/useAuthCallback";
import { ParentMain } from "../components/ParentMainPage/ParentMain";

import { Model3, Model, Model0, Model00, Model000, EarthLv8} from "../Model.js/Space"

import {Child1, Child2, Child3, Child4, Child5, Child6, Child7, Child8, Child9, Child10, 
  Child11, Child12, Child13, Child14, Child15, Child16, Child17, Child18, Child19, Child20, 
  Child21, Child22, Child23, Child24, Child25, Child26, Child27, Child28, Child29, Child30,
  Child31, Child32, Child33, Child34, Child35, Child36, Child37, Child38, Child39, Child40, 
  Child41, Child42, Child43, Child44, Child45, Child46, Child47, Child48, Child49, Child50,
  Child51, Child52, Child53, Child54, Child55} from "../Model.js/Child"

function Plus(props) {
    const { nodes, materials } = useGLTF('/model/plus/scene.gltf')
    return (
        <group {...props} dispose={null} position={[-0.2, 1, 0]} rotation={[-Math.PI / 1, 0, 0]} scale={0.015}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[11.48, 0, -2.38]} rotation={[-Math.PI / 2, 0, 0]} >
                <mesh geometry={nodes.Box001__0.geometry} material={materials.RootNode} />
            </group>
            </group>
        </group>
        </group>
)
}
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
       

  
  return (

    <div>
      {memberInfo.isParent && <ParentMain data={memberInfo}/>}
    </div>
  );
}

export default ParentMainPage;

