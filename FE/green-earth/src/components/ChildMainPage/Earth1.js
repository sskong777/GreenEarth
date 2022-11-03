
import "../../style/ChildMain.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'; // 액시오스
// import Home from "./pages/Home";
import {useRef} from 'react'
//import {useState} from 'react'
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,useAnimations } from '@react-three/drei'
import Mission from '../../components/ChildMainPage/Mission.js'
import rocket from '../../image/rocket.png'
import start from '../../image/start.png'
import end from '../../image/end.png'
import { Color } from "three";
import {useEffect, useState} from "react";

import {Child1, Child2, Child3, Child4, Child5, Child6, Child7, Child8, Child9, Child10, 
  Child11, Child12, Child13, Child14, Child15, Child16, Child17, Child18, Child19, Child20, 
  Child21, Child22, Child23, Child24, Child25, Child26, Child27, Child28, Child29, Child30,
  Child31, Child32, Child33, Child34, Child35, Child36, Child37, Child38, Child39, Child40, 
  Child41, Child42, Child43, Child44, Child45, Child46, Child47, Child48, Child49, Child50,
  Child51, Child52, Child53, Child54, Child55} from "../../Model.js/Child"

import {Model9, Model10, Model11, Model12, Model13, Model14, Model15, Model16, Model17, Model18, Model19
, Model90, Model100, Model110, Model120, Model130, Model140, Model150, Model160, Model170, Model180, Model190, Model20} from "../../Model.js/Badge"

import { Model3, Model, Model0, Model00, Model000} from "../../Model.js/Space"

import {Beluga} from "../../Model.js/Animal"

function Earth1() {
  
  const level = 1
  const value = level*11.2
  const mileage = level*100+12
  const nickname = '어린왕자'

  return (

    <div className='Earth'>
      <div>
      <div className="start" >
        <img src={start} className='start' alt='React' />
      </div>
      <div className="end" >
        <img src={end} className='end' alt='React' />
      </div>
      <progress className='pgbar' max="100" value={value-3.2}> 70% </progress>
      </div>
      
      <div className="Rocket" style={{left:mileage}}>
        <img src={rocket} className='gageRocket' alt='React' />
      </div>
      
        <div className= "info"  >
          <div className= "infogroup">
            <div className = "canvasProfile">
                <Canvas   id="person" >
                <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight intensity={5} angle={0.1} penumbra={5} position={[500,500,500]} castShadow />
                    <Model3 />
                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                </Suspense> 
                </Canvas>
            <div className='characterInfo'>
            <div >Lv.{level}   {nickname} </div>

            </div>
            </div>
            <div className = "badges">
                <div className = "canvasBadge">
                    {level<1 && <Canvas  id="badge1" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model100 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=1 && <Canvas  id="badge1" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model10 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<2 && <Canvas  id="badge2" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model110 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=2 && <Canvas  id="badge2" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model11 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<3 && <Canvas  id="badge3" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model120 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=3 && <Canvas  id="badge3" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model12 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<4 && <Canvas  id="badge4" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model130 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=4 && <Canvas  id="badge4" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model13 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<5 && <Canvas  id="badge5" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model140 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=5 && <Canvas  id="badge5" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model14 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
          
                <div className = "canvasBadge">
                    {level<6 && <Canvas  id="badge6" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model150 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=6 && <Canvas  id="badge6" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model15 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<7 && <Canvas  id="badge7" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model90 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=7 && <Canvas  id="badge7" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model9 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<8 && <Canvas  id="badge8" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model170 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=8 && <Canvas  id="badge8" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model17 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<9 && <Canvas  id="badge9" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model190 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=9 && <Canvas  id="badge9" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model19 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
                <div className = "canvasBadge">
                    {level<10 && <Canvas  id="badge10" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model180 />
                        <Model20/>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                    {level>=10 && <Canvas  id="badge10" >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                        <Model18 />
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                    </Suspense> 
                    </Canvas>}
                </div>
            </div>
            
            <div className= "Mission">
              <Mission />
            </div>
            </div>
            <div className= "game">
            <div className = "gameButton blinking">
              <Link to="/game">GAME</Link>
            </div>
            </div>
            
        </div>
        
        <div className = "canvasEarth">
            <Canvas id="earth" >
                <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={5} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />        
                <Model00 />
                <Child2 />
                <Beluga/>
                <Model0 />
                <OrbitControls enablePan={true} enableZoom={true} rotateSpeed = {0.2} enableRotate={true} />
                </Suspense> 
            </Canvas>
        </div>
      
    </div>

  )
}
export {Earth1}
