
import "../../style/ChildMain.css";
import { Link } from "react-router-dom";
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,useAnimations } from '@react-three/drei'
import Mission from '../../components/ChildMainPage/Mission.js'
import rocket from '../../image/rocket.png'
import start from '../../image/start.png'
import end from '../../image/end.png'
import {useEffect, useState} from "react";


import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberInfoState, childInfoState } from "../../store/atoms";
import { useAuthCallback } from "./../../functions/useAuthCallback";

import {Child1, Child2, Child3, Child4, Child5, Child6, Child7, Child8, Child9, Child10, 
  Child11, Child12, Child13, Child14, Child15, Child16, Child17, Child18, Child19, Child20, 
  Child21, Child22, Child23, Child24, Child25, Child26, Child27, Child28, Child29, Child30,
  Child31, Child32, Child33, Child34, Child35, Child36, Child37, Child38, Child39, Child40, 
  Child41, Child42, Child43, Child44, Child45, Child46, Child47, Child48, Child49, Child50,
  Child51, Child52, Child53, Child54, Child55} from "../../Model.js/Child"

import {Model9, Model10, Model11, Model12, Model13, Model14, Model15, Model16, Model17, Model18, Model19
, Model90, Model100, Model110, Model120, Model130, Model140, Model150, Model160, Model170, Model180, Model190, Model20} from "../../Model.js/Badge"

import { Model0, EarthLv8} from "../../Model.js/Space"


function Earth8() {
    const { childId } = useParams();

    // Recoil에 저장되어 있는 아이정보, 회원정보, 로그인토큰 불러오기
    const [childInfo, setChildInfo] = useRecoilState(childInfoState);
    const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

    // 회원정보, 아이정보 Axios 요청
    const { memberInfoCallback, childInfoCallback } = useAuthCallback();

    // 프로필 페이지에 접근하면 해당 아이정보 Axios 요청
    useEffect(() => {
    memberInfoCallback();
    childInfoCallback(childId);
    }, []);


  const level = 8
  const value = level*13.7
  const mileage = level*122+12
  const nickname = '어린왕자'

  return (
   
    <div className='Earth8'>
    <div>
    <div className="start" >
      <img src={start} className='start' alt='React' />
    </div>
    <div className="end" >
      <img src={end} className='end' alt='React' />
    </div>
    <progress className='pgbar' max="110" value={value-2}> 70% </progress>
    </div>
    
    <div className="Rocket" style={{left:mileage}}>
      <img src={rocket} className='gageRocket' alt='React' />
    </div>
    
      <div className= "info8"  >
      <div className= "infogroup8">
          <div className = "canvasProfile8">
              <Canvas   id="person" >
              <Suspense fallback={null}>
                  <ambientLight />
                  <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                  <Child2 />
                  <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
              </Suspense> 
              </Canvas>
          <div className='characterInfo8'>
          <div >Lv.{level}   {nickname}</div>
          </div>
          </div>
          <div className = "badges">
                
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level1.png" />
                </div>
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level2.png" />
                </div>
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level3.png" />
                </div>
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level4.png" />
                </div>
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level5.png" />
                </div>
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level6.png" />
                </div>
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level7.png" />
                </div>
                <div className = "badgeImg_unlock">
                    <img className="badgeImg_unlocked" alt="" src="/assets/badges/level8.png" />
                </div>
            </div>
            
                <div className= "Mission">
                    <Mission />
                    <div className="balloon">
                        지구를 구하러가자
                    </div>
                    <div >
                    
                </div>
                </div>
            </div>    
        </div>
        <Link to="game">
        <div className = "canvasAstronaut">
      
            <Canvas id="astronaut" >
                <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={1} angle={0.1} penumbra={1} position={[100, 100,100]} castShadow />
     
                <Model0 />
                <OrbitControls enablePan={false} enableZoom={false} rotateSpeed = {0.2} enableRotate={false} />
                </Suspense> 
            </Canvas>
        </div>
        </Link>
        <div className = "canvasEarth">
          
            <Canvas id="earth" >
                <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[100, 100,100]} castShadow />
                <EarthLv8 />
              
                <OrbitControls enablePan={true} enableZoom={true} rotateSpeed = {0.2} enableRotate={true} />
                </Suspense> 
            </Canvas>
        </div>
        
      
    </div>
  )
}
export {Earth8}
