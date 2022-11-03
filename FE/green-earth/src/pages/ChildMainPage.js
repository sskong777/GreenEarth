
import "../style/ChildMain.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'; // 액시오스
// import Home from "./pages/Home";
import {useRef} from 'react'
//import {useState} from 'react'
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,useAnimations } from '@react-three/drei'
import Mission from '../components/ChildMainPage/Mission.js'
import rocket from '../image/rocket.png'
import start from '../image/start.png'
import end from '../image/end.png'
import { Color } from "three";
import {useEffect, useState} from "react";

import {Child1, Child2, Child3, Child4, Child5, Child6, Child7, Child8, Child9, Child10, 
  Child11, Child12, Child13, Child14, Child15, Child16, Child17, Child18, Child19, Child20, 
  Child21, Child22, Child23, Child24, Child25, Child26, Child27, Child28, Child29, Child30,
  Child31, Child32, Child33, Child34, Child35, Child36, Child37, Child38, Child39, Child40, 
  Child41, Child42, Child43, Child44, Child45, Child46, Child47, Child48, Child49, Child50,
  Child51, Child52, Child53, Child54, Child55} from "../Model.js/Child"

import {Model9, Model10, Model11, Model12, Model13, Model14, Model15, Model16, Model17, Model18, Model19
, Model90, Model100, Model110, Model120, Model130, Model140, Model150, Model160, Model170, Model180, Model190, Model20} from "../Model.js/Badge"

import { Model3, Model, Model0, Model00, Model000} from "../Model.js/Space"

import {Beluga} from "../Model.js/Animal"

import {Earth1} from "../components/ChildMainPage/Earth1"
import {Earth2} from "../components/ChildMainPage/Earth2"
import {Earth3} from "../components/ChildMainPage/Earth3"
import {Earth4} from "../components/ChildMainPage/Earth4"
import {Earth5} from "../components/ChildMainPage/Earth5"
import {Earth6} from "../components/ChildMainPage/Earth6"
import {Earth7} from "../components/ChildMainPage/Earth7"
import {Earth8} from "../components/ChildMainPage/Earth8"
import {Earth9} from "../components/ChildMainPage/Earth9"
import {Earth10} from "../components/ChildMainPage/Earth10"

function ChildMainPage() {
  
  const level = 10
  const value = level*11.2
  const mileage = level*100+12
  const nickname = '어린왕자'

  if (level ===1 ){
  return (
    <div>
      <Earth1 />
    </div>
    
  );} 
  else if (level === 2) {
    return (
    <div>
      <Earth2 />
    </div>
  
  );}
  else if (level === 3) {
    return (
    <div>
      <Earth3 />
    </div>
      
  );}
  else if (level === 4) {
      return (
      <div>
        <Earth4 />
      </div>
      
  );}
  else if (level === 5) {
  return (
      <div>
        <Earth5 />
      </div>
      
); }
  else if (level === 6) {
  return (
      <div>
        <Earth6 />
      </div>
  );}
  else if (level === 7) {
  return (
    <div>
      <Earth7 />
    </div>
  );}
  else if (level === 8) {
      return (
    <div>
      <Earth8 />
    </div>
  );}
  else if (level === 9) {
      return (
      <div>
        <Earth9 />
      </div>
  );}
  else if (level === 10) {
      return (
      <div>
        <Earth10 />
      </div>
  );}
  }


export default ChildMainPage;
