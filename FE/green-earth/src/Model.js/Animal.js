
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

function Beluga(props) {
    const { nodes, materials } = useGLTF('/model/animal/arctic/Beluga.gltf')
    return (
      <group {...props} dispose={null}>
        <primitive object={nodes.root} />
        <skinnedMesh name="Beluga_LOD0" geometry={nodes.Beluga_LOD0.geometry} material={materials.M_Beluga} skeleton={nodes.Beluga_LOD0.skeleton} morphTargetDictionary={nodes.Beluga_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0.morphTargetInfluences} />
        <skinnedMesh name="Beluga_LOD1" geometry={nodes.Beluga_LOD1.geometry} material={materials.M_Beluga} skeleton={nodes.Beluga_LOD1.skeleton} morphTargetDictionary={nodes.Beluga_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1.morphTargetInfluences} />
        <skinnedMesh name="Beluga_LOD2" geometry={nodes.Beluga_LOD2.geometry} material={materials.M_Beluga} skeleton={nodes.Beluga_LOD2.skeleton} morphTargetDictionary={nodes.Beluga_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2.morphTargetInfluences} />
        <skinnedMesh name="Beluga_LOD3" geometry={nodes.Beluga_LOD3.geometry} material={materials.M_Beluga} skeleton={nodes.Beluga_LOD3.skeleton} morphTargetDictionary={nodes.Beluga_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3.morphTargetInfluences} />
      </group>
    )
  }

function Rabbit(props) {
const { nodes, materials } = useGLTF('/model/animal/arctic/Hare.gltf')
return (
    <group {...props} dispose={null}>
    <primitive object={nodes.root} />
    <skinnedMesh name="Hare_LOD0" geometry={nodes.Hare_LOD0.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD0.skeleton} morphTargetDictionary={nodes.Hare_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0.morphTargetInfluences} />
    <skinnedMesh name="Hare_LOD1" geometry={nodes.Hare_LOD1.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD1.skeleton} morphTargetDictionary={nodes.Hare_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1.morphTargetInfluences} />
    <skinnedMesh name="Hare_LOD2" geometry={nodes.Hare_LOD2.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD2.skeleton} morphTargetDictionary={nodes.Hare_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2.morphTargetInfluences} />
    <skinnedMesh name="Hare_LOD3" geometry={nodes.Hare_LOD3.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD3.skeleton} morphTargetDictionary={nodes.Hare_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3.morphTargetInfluences} />
    </group>
)
}
function Lamb(props) {
    const { nodes, materials } = useGLTF('/model/animal/farm/Lamb.gltf')
    return (
      <group {...props} dispose={null}>
        <primitive object={nodes.root} />
        <skinnedMesh name="Lamb_LOD0" geometry={nodes.Lamb_LOD0.geometry} material={materials.M_Lamb} skeleton={nodes.Lamb_LOD0.skeleton} morphTargetDictionary={nodes.Lamb_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Lamb_LOD0.morphTargetInfluences} />
        <skinnedMesh name="Lamb_LOD1" geometry={nodes.Lamb_LOD1.geometry} material={materials.M_Lamb} skeleton={nodes.Lamb_LOD1.skeleton} morphTargetDictionary={nodes.Lamb_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Lamb_LOD1.morphTargetInfluences} />
        <skinnedMesh name="Lamb_LOD2" geometry={nodes.Lamb_LOD2.geometry} material={materials.M_Lamb} skeleton={nodes.Lamb_LOD2.skeleton} morphTargetDictionary={nodes.Lamb_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Lamb_LOD2.morphTargetInfluences} />
        <skinnedMesh name="Lamb_LOD3" geometry={nodes.Lamb_LOD3.geometry} material={materials.M_Lamb} skeleton={nodes.Lamb_LOD3.skeleton} morphTargetDictionary={nodes.Lamb_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Lamb_LOD3.morphTargetInfluences} />
      </group>
    )
  }
  function Giraffe(props) {
    const { nodes, materials } = useGLTF('/model/animal/safari/Giraffe.gltf')
    return (
      <group {...props} dispose={null}>
        <primitive object={nodes.root} />
        <skinnedMesh name="Giraffe_LOD0" geometry={nodes.Giraffe_LOD0.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD0.skeleton} morphTargetDictionary={nodes.Giraffe_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD0.morphTargetInfluences} />
        <skinnedMesh name="Giraffe_LOD1" geometry={nodes.Giraffe_LOD1.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD1.skeleton} morphTargetDictionary={nodes.Giraffe_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD1.morphTargetInfluences} />
        <skinnedMesh name="Giraffe_LOD2" geometry={nodes.Giraffe_LOD2.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD2.skeleton} morphTargetDictionary={nodes.Giraffe_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD2.morphTargetInfluences} />
        <skinnedMesh name="Giraffe_LOD3" geometry={nodes.Giraffe_LOD3.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD3.skeleton} morphTargetDictionary={nodes.Giraffe_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD3.morphTargetInfluences} />
      </group>
    )
  }
  function Lion(props) {
    const { nodes, materials } = useGLTF('/model/animal/safari/Lion.gltf')
    return (
      <group {...props} dispose={null}>
        <primitive object={nodes.root} />
        <skinnedMesh name="Lion_LOD0" geometry={nodes.Lion_LOD0.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD0.skeleton} morphTargetDictionary={nodes.Lion_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD0.morphTargetInfluences} />
        <skinnedMesh name="Lion_LOD1" geometry={nodes.Lion_LOD1.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD1.skeleton} morphTargetDictionary={nodes.Lion_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD1.morphTargetInfluences} />
        <skinnedMesh name="Lion_LOD2" geometry={nodes.Lion_LOD2.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD2.skeleton} morphTargetDictionary={nodes.Lion_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD2.morphTargetInfluences} />
        <skinnedMesh name="Lion_LOD3" geometry={nodes.Lion_LOD3.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD3.skeleton} morphTargetDictionary={nodes.Lion_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD3.morphTargetInfluences} />
      </group>
    )
  }
export { Beluga, Rabbit, Lamb, Giraffe, Lion}