
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

const navigate = useNavigate();
    // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
    const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

    // 회원정보, 아이정보 Axios 요청
    const { memberInfoCallback } = useAuthCallback();

    // 로그아웃 버튼(임시)
    const { logoutcallback } = useAuthCallback();
    // 페이지에 접근하면 해당 아이정보 Axios 요청

    useEffect(() => {
    memberInfoCallback();
  }, []);

    // 아이 회원 프로필 페이지 이동 함수
    const handleClickChildProfile1 = () => {
        navigate(`/profile/${memberInfo.childList[0].childId}`);
        };
    const handleClickChildProfile2 = () => {
        navigate(`/profile/${memberInfo.childList[1].childId}`);
        };
    const handleClickChildProfile3 = () => {
        navigate(`/profile/${memberInfo.childList[2].childId}`);
        };
    const handleClickChildProfile4 = () => {
        navigate(`/profile/${memberInfo.childList[3].childId}`);
        };
    const handleClickChildProfile5 = () => {
        navigate(`/profile/${memberInfo.childList[4].childId}`);
        };
            
    
       

  
  return (

    <div>
        <div className= "btn">
        <button onClick={logoutcallback} >로그아웃임시</button>
        </div>
    <div className='Earth2'>
      
  
        <div className= "peoplelist"  >
            <div className = "people">
              { memberInfo.childList[0] && 
              <header>
                  <Card className="PersonCard" onClick={handleClickChildProfile1}>
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                          {memberInfo.childList[0].avatar === 1 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 2 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child2 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 3 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 4 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child4 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 5 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child5 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 6 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child6 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 7 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child7 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 8 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child8 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 9 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child9 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 10 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child10 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 11 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child30 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 12 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child31 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 13 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child32 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 14 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child33 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 15 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child34 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 16 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child35 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 17 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child36 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 18 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child37 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 19 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child38 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[0].avatar === 20 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child39 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>}
              { !memberInfo.childList[0] && <Link to="/signup">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person1" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Plus />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { memberInfo.childList[1] &&
              <header>
                  <Card className="PersonCard" onClick={handleClickChildProfile2} >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                          {memberInfo.childList[1].avatar === 1 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 2 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child2 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 3 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 4 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child4 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 5 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child5 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 6 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child6 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 7 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child7 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 8 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child8 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 9 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child9 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 10 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child10 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 11 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child30 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 12 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child31 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 13 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child32 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 14 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child33 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 15 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child34 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 16 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child35 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 17 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child36 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 18 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child37 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 19 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child38 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[1].avatar === 20 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child39 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>}
              { !memberInfo.childList[1]  && <Link to="/signup">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person2" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Plus />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { memberInfo.childList[2] && 
              <header>
                  <Card className="PersonCard"  onClick={handleClickChildProfile3}>
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                          {memberInfo.childList[2].avatar === 1 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 2 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child2 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 3 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 4 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child4 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 5 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child5 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 6 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child6 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 7 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child7 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 8 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child8 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 9 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child9 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 10 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child10 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 11 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child30 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 12 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child31 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 13 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child32 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 14 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child33 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 15 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child34 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 16 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child35 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 17 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child36 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 18 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child37 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 19 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child38 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[2].avatar === 20 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child39 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>}
              { !memberInfo.childList[2] && <Link to="/signup">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person3" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Plus />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { memberInfo.childList[3] && 
              <header>
                  <Card className="PersonCard" onClick={handleClickChildProfile4}>
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                          {memberInfo.childList[3].avatar === 1 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 2 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child2 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 3 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 4 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child4 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 5 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child5 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 6 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child6 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 7 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child7 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 8 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child8 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 9 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child9 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 10 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child10 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 11 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child30 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 12 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child31 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 13 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child32 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 14 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child33 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 15 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child34 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 16 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child35 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 17 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child36 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 18 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child37 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 19 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child38 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[3].avatar === 20 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child39 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>}
              { !memberInfo.childList[3] && <Link to="/signup">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person4" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Plus />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { memberInfo.childList[4] &&
              <header>
                  <Card className="PersonCard" onClick={handleClickChildProfile5} >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                          {memberInfo.childList[4].avatar === 1 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 2 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child2 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 3 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child3 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 4 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child4 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 5 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child5 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 6 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child6 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 7 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child7 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 8 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child8 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 9 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child9 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 10 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child10 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 11 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child30 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 12 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child31 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 13 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child32 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 14 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child33 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 15 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child34 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 16 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child35 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 17 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child36 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 18 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child37 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 19 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child38 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                            {memberInfo.childList[4].avatar === 20 && <Canvas id="person" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                                <Child39 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>}
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>}
              { !memberInfo.childList[4] && <Link to="/signup">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person5" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Plus />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
          
            </div> 
            
  
            
        </div>
        
        <div className = "canvasEarth">
            <Canvas id="person" >
                <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />        
                <EarthLv8 />
                <OrbitControls enablePan={true} enableZoom={true} rotateSpeed = {0.2} enableRotate={true} />
                </Suspense> 
            </Canvas>
        </div>
      
    </div>
    </div>
  );
}

export default ParentMainPage;

