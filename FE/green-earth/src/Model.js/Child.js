

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'; // 액시오스
// import Home from "./pages/Home";
import {useRef} from 'react'
//import {useState} from 'react'
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF,useAnimations } from '@react-three/drei'

import { Color } from "three";
import {useEffect, useState} from "react";

function Child1(props) {
    const { nodes, materials } = useGLTF('/model/child/f_1.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_1.geometry} material={materials.characters_1_01} />
      </group>
    )
  }

function Child2(props) {
const { nodes, materials } = useGLTF('/model/child/f_2.gltf')
return (
    <group {...props} dispose={null}  position={[0,0,2]} scale={2}>
    <mesh geometry={nodes.f_2.geometry} material={materials.characters_1_01} />
    </group>
)
}

function Child3(props) {
    const { nodes, materials } = useGLTF('/model/child/f_3.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.characters_f003.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
function Child4(props) {
    const { nodes, materials } = useGLTF('/model/child/f_4.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_4.geometry} material={materials.characters_1_01} />
      </group>
    )
  }


  function Child5(props) {
    const { nodes, materials } = useGLTF('/model/child/f_5.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_5.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child6(props) {
    const { nodes, materials } = useGLTF('/model/child/f_6.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_6.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child7(props) {
    const { nodes, materials } = useGLTF('/model/child/f_7.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_7.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child8(props) {
    const { nodes, materials } = useGLTF('/model/child/f_8.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_8.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child9(props) {
    const { nodes, materials } = useGLTF('/model/child/f_9.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_9.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child10(props) {
    const { nodes, materials } = useGLTF('/model/child/f_10.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_10.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child11(props) {
    const { nodes, materials } = useGLTF('/model/child/f_11.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_11.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child12(props) {
    const { nodes, materials } = useGLTF('/model/child/f_12.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_12.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child13(props) {
    const { nodes, materials } = useGLTF('/model/child/f_13.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_13.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child14(props) {
    const { nodes, materials } = useGLTF('/model/child/f_14.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_14.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child15(props) {
    const { nodes, materials } = useGLTF('/model/child/f_15.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_15.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child16(props) {
    const { nodes, materials } = useGLTF('/model/child/f_16.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_16.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child17(props) {
    const { nodes, materials } = useGLTF('/model/child/f_17.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_17.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child18(props) {
    const { nodes, materials } = useGLTF('/model/child/f_18.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_18.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child19(props) {
    const { nodes, materials } = useGLTF('/model/child/f_19.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_19.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child20(props) {
    const { nodes, materials } = useGLTF('/model/child/f_20.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_20.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.tennis.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child21(props) {
    const { nodes, materials } = useGLTF('/model/child/f_21.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.f_21.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.board.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child22(props) {
    const { nodes, materials } = useGLTF('/model/child/f_22.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials['characters_1_01.001']} />
      </group>
    )
  }
  function Child23(props) {
    const { nodes, materials } = useGLTF('/model/child/m_1.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_1.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child24(props) {
    const { nodes, materials } = useGLTF('/model/child/m_2.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_2.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child25(props) {
    const { nodes, materials } = useGLTF('/model/child/m_3.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_3.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child26(props) {
    const { nodes, materials } = useGLTF('/model/child/m_4.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_4.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child27(props) {
    const { nodes, materials } = useGLTF('/model/child/m_5.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_5.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child28(props) {
    const { nodes, materials } = useGLTF('/model/child/m_6.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_6.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child29(props) {
    const { nodes, materials } = useGLTF('/model/child/m_7.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_7.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child30(props) {
    const { nodes, materials } = useGLTF('/model/child/m_8.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_8.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child31(props) {
    const { nodes, materials } = useGLTF('/model/child/m_9.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_9.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child32(props) {
    const { nodes, materials } = useGLTF('/model/child/m_10.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_10.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child33(props) {
    const { nodes, materials } = useGLTF('/model/child/m_11.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_11.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child34(props) {
    const { nodes, materials } = useGLTF('/model/child/m_12.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_12.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child35(props) {
    const { nodes, materials } = useGLTF('/model/child/m_13.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_13.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child36(props) {
    const { nodes, materials } = useGLTF('/model/child/m_14.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_14.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child37(props) {
    const { nodes, materials } = useGLTF('/model/child/m_15.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_15.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child38(props) {
    const { nodes, materials } = useGLTF('/model/child/m_16.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_16.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child39(props) {
    const { nodes, materials } = useGLTF('/model/child/m_17.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_17.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child40(props) {
    const { nodes, materials } = useGLTF('/model/child/m_18.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_18.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child41(props) {
    const { nodes, materials } = useGLTF('/model/child/m_19.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_19.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child42(props) {
    const { nodes, materials } = useGLTF('/model/child/m_20.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials['characters_1_01.001']} />
      </group>
    )
  }
  function Child43(props) {
    const { nodes, materials } = useGLTF('/model/child/m_21.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_21.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child44(props) {
    const { nodes, materials } = useGLTF('/model/child/m_22.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_22.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child45(props) {
    const { nodes, materials } = useGLTF('/model/child/m_23.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_23.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child46(props) {
    const { nodes, materials } = useGLTF('/model/child/m_24.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_24.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child47(props) {
    const { nodes, materials } = useGLTF('/model/child/m_25.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_25.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child48(props) {
    const { nodes, materials } = useGLTF('/model/child/m_26.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_26.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child49(props) {
    const { nodes, materials } = useGLTF('/model/child/m_27.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_27.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child50(props) {
    const { nodes, materials } = useGLTF('/model/child/m_28.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_28.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child51(props) {
    const { nodes, materials } = useGLTF('/model/child/m_29.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_29.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.skis.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child52(props) {
    const { nodes, materials } = useGLTF('/model/child/m_30.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_30.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.skate.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child53(props) {
    const { nodes, materials } = useGLTF('/model/child/m_31.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_31.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.tennis001.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child54(props) {
    const { nodes, materials } = useGLTF('/model/child/m_32.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.m_32.geometry} material={materials.characters_1_01} />
      </group>
    )
  }
  function Child55(props) {
    const { nodes, materials } = useGLTF('/model/child/m_33.gltf')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.characters_1_01} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials['characters_1_01.001']} />
        <mesh geometry={nodes.ball001.geometry} material={materials.characters_1_01} position={[0.25, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0} />
      </group>
    )
  }

export {Child1, Child2, Child3, Child4, Child5, Child6, Child7, Child8, Child9, Child10, 
    Child11, Child12, Child13, Child14, Child15, Child16, Child17, Child18, Child19, Child20, 
    Child21, Child22, Child23, Child24, Child25, Child26, Child27, Child28, Child29, Child30,
    Child31, Child32, Child33, Child34, Child35, Child36, Child37, Child38, Child39, Child40, 
    Child41, Child42, Child43, Child44, Child45, Child46, Child47, Child48, Child49, Child50,
    Child51, Child52, Child53, Child54, Child55}