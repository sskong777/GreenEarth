


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


  // import useAnimations from 'react-useanimations';
  
  function Model00(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/model/movingearth/scene.gltf')
    const { actions } = useAnimations(animations, group)
  
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
   
  
                <group name="planet_barren_8" position={[-0.2, -0.6, -3]} scale={2.8}>
                  <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Planet_barren} material-transparent="true" material-opacity="0.9"/>
                </group>
     
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }
  function Model0(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/model/astronaut/scene.gltf')
    const { actions } = useAnimations(animations, group)
     useEffect(() => {
      Object.keys(actions).forEach((key) => {
     actions[key].play();
     });
     }, []);
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model"  position={[-0.3 , -3.7, 0]}  rotation={[-Math.PI / 2.4, -0, 0.2]} scale={2}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="RootNode0_0" scale={0.01}>
                  <group name="skeletal3_6">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <group name="_3_correction">
                        <group name="_3" />
                      </group>
                      <group name="_4_correction">
                        <group name="_4" />
                      </group>
                      <group name="_5_correction">
                        <group name="_5" />
                      </group>
                      <skinnedMesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.material_0} skeleton={nodes.Object_99.skeleton} />
                      <skinnedMesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.material_0} skeleton={nodes.Object_100.skeleton} />
                      <skinnedMesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.material_1} skeleton={nodes.Object_103.skeleton} />
                      <skinnedMesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.material_2} skeleton={nodes.Object_106.skeleton} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }
  
  
  
  

  function EarthLv2(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/model/earth33/final2.gltf')
    const { actions } = useAnimations(animations, group)
    useEffect(() => {
      Object.keys(actions).forEach((key) => {
     actions[key].play();
     });
     }, []);
    return (
      <group ref={group} {...props} dispose={null}>
      <group name="Scene"position={[-0.1, -0.15, -0.5]} rotation={[Math.PI / 0.1, 1.7, -0.2]} scale={1.7}>
        <group name="Planet" position={[0.03, 0.07, -0.04]} rotation={[Math.PI / 2, 0, -0.27]} scale={0.01}>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['World ap.002']} position={[-0.96, 0.57, -9.25]} rotation={[0.06, 0.1, -0.01]}>
              <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap.002']} />
              <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap.002']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap.002']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap.002']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials['World ap.002']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap.002']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap.002']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <group name="water" position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]}>
                <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials['Water.001']} />
              </group>
            </mesh>
          </group>
        </group>
        <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.029']} position={[0.02, 0.17, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}
  


  function EarthLv3(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/model/earth33/final3.gltf')
    const { actions } = useAnimations(animations, group)
    useEffect(() => {
      Object.keys(actions).forEach((key) => {
     actions[key].play();
     });
     }, []);
    return (
      <group ref={group} {...props} dispose={null}>
      <group name="Scene"position={[-0.1, -0.15, -0.5]} rotation={[Math.PI / 0.1, 1.7, -0.2]} scale={1.7}>
        <group name="Planet" position={[0.03, 0.07, -0.04]} rotation={[Math.PI / 2, 0, -0.27]} scale={0.01}>
          <group name="Bushes" position={[-59.56, 45.9, -11.47]}>
            <mesh name="Bushes_11" geometry={nodes.Bushes_11.geometry} material={materials['World ap.511']} position={[-6.6, 40.7, 13.02]} rotation={[-2.98, 0, 0]} />
            <mesh name="Bushes_15" geometry={nodes.Bushes_15.geometry} material={materials['World ap.507']} position={[57.87, 63.82, 16.27]} rotation={[3.13, 0, 0]} />
            <mesh name="Bushes_17" geometry={nodes.Bushes_17.geometry} material={materials['World ap.505']} position={[118.94, 37.3, -5.98]} rotation={[3.14, 0, 0]} />
            <mesh name="Bushes_18" geometry={nodes.Bushes_18.geometry} material={materials['World ap.504']} position={[24.98, 55.42, 51.04]} rotation={[3.07, 0, 0]} />
            <mesh name="Bushes_21" geometry={nodes.Bushes_21.geometry} material={materials['World ap.523']} position={[-35.77, 1.94, -3.31]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_3" geometry={nodes.Bushes_3.geometry} material={materials['World ap.519']} position={[-38.39, -31.39, -24.85]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_7" geometry={nodes.Bushes_7.geometry} material={materials['World ap.515']} position={[-37.32, -73.79, -15.13]} rotation={[-2.87, 0, 0]} />
          </group>
          <group name="Camping" position={[0.24, 13.39, -16.17]} />
          <group name="Firtrees" position={[-31.1, 65.19, -52.69]}>
            <mesh name="Firtree_10" geometry={nodes.Firtree_10.geometry} material={materials['World ap']} position={[55.57, 25.55, 11.04]} rotation={[1.01, -0.06, -1.63]} />
            <mesh name="Firtree_100" geometry={nodes.Firtree_100.geometry} material={materials['World ap']} position={[68.64, -147.79, 13.15]} rotation={[-0.62, -0.35, -0.05]} />
            <mesh name="Firtree_104" geometry={nodes.Firtree_104.geometry} material={materials['World ap']} position={[88.03, -141.59, 47.93]} rotation={[-1.57, -0.83, -1.37]} />
            <mesh name="Firtree_107" geometry={nodes.Firtree_107.geometry} material={materials['World ap']} position={[89.63, -124.84, 10.73]} rotation={[-0.76, -0.52, -0.56]} />
            <mesh name="Firtree_110" geometry={nodes.Firtree_110.geometry} material={materials['World ap']} position={[101.09, -109.53, 2.74]} rotation={[-0.84, -0.67, -0.55]} />
            <mesh name="Firtree_114" geometry={nodes.Firtree_114.geometry} material={materials['World ap']} position={[95.74, -127.95, 15.94]} rotation={[-0.97, -0.63, -1.71]} />
            <mesh name="Firtree_118" geometry={nodes.Firtree_118.geometry} material={materials['World ap']} position={[29.99, -160.44, 37.55]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_121" geometry={nodes.Firtree_121.geometry} material={materials['World ap']} position={[-1.97, -156.84, 33.77]} rotation={[-1.45, 0.26, -0.65]} />
            <mesh name="Firtree_122" geometry={nodes.Firtree_122.geometry} material={materials['World ap']} position={[-4.78, -154.54, 25.41]} rotation={[-0.87, 0.28, -0.89]} />
            <mesh name="Firtree_126" geometry={nodes.Firtree_126.geometry} material={materials['World ap']} position={[105.41, -125.95, 28.96]} rotation={[-0.73, -0.72, -1.43]} />
            <mesh name="Firtree_128" geometry={nodes.Firtree_128.geometry} material={materials['World ap']} position={[47.72, -149.66, 7.83]} rotation={[-1.3, -0.22, 1.76]} />
            <mesh name="Firtree_131" geometry={nodes.Firtree_131.geometry} material={materials['World ap']} position={[19.47, -161.26, 50.91]} rotation={[-1.68, 0.12, 1.85]} />
            <mesh name="Firtree_132" geometry={nodes.Firtree_132.geometry} material={materials['World ap']} position={[19.86, -158.21, 38.59]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_136" geometry={nodes.Firtree_136.geometry} material={materials['World ap']} position={[21.09, -148.06, 2.5]} rotation={[-0.85, -0.15, -1.87]} />
            <mesh name="Firtree_139" geometry={nodes.Firtree_139.geometry} material={materials['World ap']} position={[15.67, -151.62, 10.95]} rotation={[-1.06, 0.07, -2.05]} />
            <mesh name="Firtree_14" geometry={nodes.Firtree_14.geometry} material={materials['World ap']} position={[8.41, 7.08, -15.37]} rotation={[0.71, 0.32, 0.89]} />
            <mesh name="Firtree_141" geometry={nodes.Firtree_141.geometry} material={materials['World ap']} position={[25.5, -149.91, 7.87]} rotation={[-1.16, -0.07, -0.69]} />
            <mesh name="Firtree_143" geometry={nodes.Firtree_143.geometry} material={materials['World ap']} position={[19.32, -144.08, -3.53]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_144" geometry={nodes.Firtree_144.geometry} material={materials['World ap']} position={[29.29, -143.1, -4.57]} rotation={[-0.87, 0.09, -0.69]} />
            <mesh name="Firtree_147" geometry={nodes.Firtree_147.geometry} material={materials['World ap']} position={[35.63, -137.72, -7.72]} rotation={[-0.47, -0.01, -0.53]} />
            <mesh name="Firtree_148" geometry={nodes.Firtree_148.geometry} material={materials['World ap']} position={[-8.69, -154.04, 31.28]} rotation={[-1.35, 0.25, -2.11]} />
            <mesh name="Firtree_15" geometry={nodes.Firtree_15.geometry} material={materials['World ap']} position={[-29.06, 15.77, 21.21]} rotation={[0.78, 0.69, 1.01]} />
            <mesh name="Firtree_151" geometry={nodes.Firtree_151.geometry} material={materials['World ap']} position={[88.86, -122.05, 1.82]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_159" geometry={nodes.Firtree_159.geometry} material={materials['World ap']} position={[121.23, -95.87, 29.26]} rotation={[-0.46, -1.19, -0.47]} />
            <mesh name="Firtree_162" geometry={nodes.Firtree_162.geometry} material={materials['World ap']} position={[77.42, -135.51, 7.26]} rotation={[-0.86, -0.67, -0.8]} />
            <mesh name="Firtree_165" geometry={nodes.Firtree_165.geometry} material={materials['World ap']} position={[120.95, -99.13, 33.97]} rotation={[-0.89, -1.22, -0.91]} />
            <mesh name="Firtree_168" geometry={nodes.Firtree_168.geometry} material={materials['World ap']} position={[97.62, -135.38, 30.84]} rotation={[-1.01, -0.73, -0.87]} />
            <mesh name="Firtree_172" geometry={nodes.Firtree_172.geometry} material={materials['World ap']} position={[12.32, -139.3, -6.15]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_173" geometry={nodes.Firtree_173.geometry} material={materials['World ap']} position={[20.1, -138.6, -8.85]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_18" geometry={nodes.Firtree_18.geometry} material={materials['World ap']} position={[41.8, 2.87, -17.81]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_180" geometry={nodes.Firtree_180.geometry} material={materials['World ap']} position={[92.25, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_183" geometry={nodes.Firtree_183.geometry} material={materials['World ap']} position={[15.51, 36.77, 12.72]} rotation={[1.2, -0.12, -1.49]} />
            <mesh name="Firtree_187" geometry={nodes.Firtree_187.geometry} material={materials['World ap']} position={[78.33, -149.93, 30.98]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_188" geometry={nodes.Firtree_188.geometry} material={materials['World ap']} position={[58.25, -158.69, 28.06]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_19" geometry={nodes.Firtree_19.geometry} material={materials['World ap']} position={[53, 2.14, -16.73]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_190" geometry={nodes.Firtree_190.geometry} material={materials['World ap']} position={[50.34, -163.53, 40.63]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_192" geometry={nodes.Firtree_192.geometry} material={materials['World ap']} position={[91.89, -5.81, 5.22]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_21" geometry={nodes.Firtree_21.geometry} material={materials['World ap']} position={[22.88, 4.38, -17.57]} rotation={[0.65, 0.03, 2.17]} />
            <mesh name="Firtree_25" geometry={nodes.Firtree_25.geometry} material={materials['World ap']} position={[75.15, -10.88, -15.56]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_30" geometry={nodes.Firtree_30.geometry} material={materials['World ap']} position={[-34.07, 8.94, 23.04]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_34" geometry={nodes.Firtree_34.geometry} material={materials['World ap']} position={[-23.02, 2.21, 2.18]} rotation={[0.66, 0.52, 1.97]} />
            <mesh name="Firtree_35" geometry={nodes.Firtree_35.geometry} material={materials['World ap']} position={[10.25, 16.18, -11.14]} rotation={[0.61, 0.13, -0.17]} />
            <mesh name="Firtree_38" geometry={nodes.Firtree_38.geometry} material={materials['World ap']} position={[-51.65, -23.49, 3.49]} rotation={[0.51, 0.82, 2.21]} />
            <mesh name="Firtree_39" geometry={nodes.Firtree_39.geometry} material={materials['World ap']} position={[-58.73, -25.94, 10.84]} rotation={[0.31, 0.9, 2.46]} />
            <mesh name="Firtree_42" geometry={nodes.Firtree_42.geometry} material={materials['World ap']} position={[-55.56, -27.66, 5.23]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_43" geometry={nodes.Firtree_43.geometry} material={materials['World ap']} position={[-54.57, -18.99, 8.73]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_47" geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-35.47, -0.67, 9.39]} rotation={[0.89, 0.51, 1.64]} />
            <mesh name="Firtree_51" geometry={nodes.Firtree_51.geometry} material={materials['World ap']} position={[-12.09, 19.81, 3.42]} rotation={[0.52, 0.65, 0.86]} />
            <mesh name="Firtree_53" geometry={nodes.Firtree_53.geometry} material={materials['World ap']} position={[-45.76, -18.1, 2.96]} rotation={[0.59, 0.44, 0.76]} />
            <mesh name="Firtree_55" geometry={nodes.Firtree_55.geometry} material={materials['World ap']} position={[-61.92, -72.12, 13.63]} rotation={[-0.29, 1.25, 1.95]} />
            <mesh name="Firtree_59" geometry={nodes.Firtree_59.geometry} material={materials['World ap']} position={[-61.48, -76.24, 17.68]} rotation={[-0.58, 1.19, -2.57]} />
            <mesh name="Firtree_6" geometry={nodes.Firtree_6.geometry} material={materials['World ap']} position={[77.85, -3.43, -10.09]} rotation={[0.62, -0.43, 0.75]} />
            <mesh name="Firtree_61" geometry={nodes.Firtree_61.geometry} material={materials['World ap']} position={[43.94, 25.17, 8.05]} rotation={[1.12, -0.08, -0.46]} />
            <mesh name="Firtree_65" geometry={nodes.Firtree_65.geometry} material={materials['World ap']} position={[59.05, -1.03, -15.54]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_69" geometry={nodes.Firtree_69.geometry} material={materials['World ap']} position={[-6.61, 9.17, -9.28]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_72" geometry={nodes.Firtree_72.geometry} material={materials['World ap']} position={[-66.63, -63.47, 18.3]} rotation={[-0.06, 1.16, 2.99]} />
            <mesh name="Firtree_73" geometry={nodes.Firtree_73.geometry} material={materials['World ap']} position={[-57.86, -53.97, 4.48]} rotation={[-0.04, 0.88, 2.97]} />
            <mesh name="Firtree_76" geometry={nodes.Firtree_76.geometry} material={materials['World ap']} position={[3.91, -0.77, -16.99]} rotation={[0.66, 0.29, -1.57]} />
            <mesh name="Firtree_77" geometry={nodes.Firtree_77.geometry} material={materials['World ap']} position={[21.46, -1.57, -22.04]} rotation={[0.53, 0.03, 2.17]} />
            <mesh name="Firtree_80" geometry={nodes.Firtree_80.geometry} material={materials['World ap']} position={[77.95, -19, -14.51]} rotation={[0.44, -0.53, 0.22]} />
            <mesh name="Firtree_81" geometry={nodes.Firtree_81.geometry} material={materials['World ap']} position={[72.02, 4.81, -6.63]} rotation={[0.6, -0.32, 0.05]} />
            <mesh name="Firtree_84" geometry={nodes.Firtree_84.geometry} material={materials['World ap']} position={[67.86, 0.03, -10.31]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_87" geometry={nodes.Firtree_87.geometry} material={materials['World ap']} position={[-16.4, 21.85, 6.13]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_9" geometry={nodes.Firtree_9.geometry} material={materials['World ap']} position={[32.65, 17.22, -0.61]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_90" geometry={nodes.Firtree_90.geometry} material={materials['World ap']} position={[-47.03, -26.86, -1.51]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_92" geometry={nodes.Firtree_92.geometry} material={materials['World ap']} position={[-56.29, -33.98, 4]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_96" geometry={nodes.Firtree_96.geometry} material={materials['World ap']} position={[58.51, -147.99, 13.82]} rotation={[-1.16, -0.36, 3.09]} />
            <mesh name="Firtree_97" geometry={nodes.Firtree_97.geometry} material={materials['World ap']} position={[96.41, -119.21, 6.79]} rotation={[-0.67, -0.6, -0.64]} />
            <mesh name="Firtree_99" geometry={nodes.Firtree_99.geometry} material={materials['World ap']} position={[96.56, -136.96, 36.08]} rotation={[-1.3, -0.79, -1.27]} />
          </group>
          <group name="Palms" position={[-68.62, 82.82, 15.93]} rotation={[2.1, 0.5, 1.38]}>
            <group name="Africa" position={[68.89, 73.37, 49.11]} rotation={[0.26, -0.67, 0.01]}>
              <mesh name="Palm_11_3" geometry={nodes.Palm_11_3.geometry} material={materials['World ap']} position={[3.38, 21.43, 18.13]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_14_3" geometry={nodes.Palm_14_3.geometry} material={materials['World ap']} position={[27.71, 27.28, 40.3]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_3" geometry={nodes.Palm_15_3.geometry} material={materials['World ap']} position={[17.09, 18.71, 26.67]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_17_3" geometry={nodes.Palm_17_3.geometry} material={materials['World ap']} position={[15.03, 19.78, 22.07]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_20_3" geometry={nodes.Palm_20_3.geometry} material={materials['World ap']} position={[17.89, 13.31, 8.13]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_23_3" geometry={nodes.Palm_23_3.geometry} material={materials['World ap']} position={[-33.19, 0.21, 17.17]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_24_3" geometry={nodes.Palm_24_3.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_28_3" geometry={nodes.Palm_28_3.geometry} material={materials['World ap']} position={[28.17, -9.24, -5.95]} rotation={[1.01, -0.86, 0.94]} />
              <mesh name="Palm_30_3" geometry={nodes.Palm_30_3.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_32_2" geometry={nodes.Palm_32_2.geometry} material={materials['World ap']} position={[-13.49, 25.12, 47.26]} rotation={[0.9, 0.36, -0.21]} />
              <mesh name="Palm_33_2" geometry={nodes.Palm_33_2.geometry} material={materials['World ap']} position={[-17.55, 23.96, 49.11]} rotation={[1.68, 0.48, -0.43]} />
              <mesh name="Palm_35_2" geometry={nodes.Palm_35_2.geometry} material={materials['World ap']} position={[-13.45, 24.64, 53.09]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_37_2" geometry={nodes.Palm_37_2.geometry} material={materials['World ap']} position={[-3.36, 28.29, 51.92]} rotation={[2, 0.17, -0.72]} />
              <mesh name="Palm_41_2" geometry={nodes.Palm_41_2.geometry} material={materials['World ap']} position={[-42.85, -1, 35.96]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_42_2" geometry={nodes.Palm_42_2.geometry} material={materials['World ap']} position={[-39.49, -1.78, 19.19]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_45_2" geometry={nodes.Palm_45_2.geometry} material={materials['World ap']} position={[-49, -11.96, 24.28]} rotation={[0.78, 0.89, -0.25]} />
              <mesh name="Palm_46_2" geometry={nodes.Palm_46_2.geometry} material={materials['World ap']} position={[4.56, 29.69, 48.51]} rotation={[1.26, -0.01, -0.32]} />
              <mesh name="Palm_48_2" geometry={nodes.Palm_48_2.geometry} material={materials['World ap']} position={[-43.37, -1.41, 32.08]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_49_2" geometry={nodes.Palm_49_2.geometry} material={materials['World ap']} position={[-42.65, -2.77, 29.47]} rotation={[0.76, 0.91, -0.3]} />
              <mesh name="Palm_4_3" geometry={nodes.Palm_4_3.geometry} material={materials['World ap']} position={[-15.94, 3.36, 7.85]} rotation={[1.01, 0.76, -0.27]} />
              <mesh name="Palm_52_2" geometry={nodes.Palm_52_2.geometry} material={materials['World ap']} position={[-15.6, -2.2, 2.14]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_53_2" geometry={nodes.Palm_53_2.geometry} material={materials['World ap']} position={[-8.65, -5.18, -11.32]} rotation={[0.94, 0.53, -0.23]} />
              <mesh name="Palm_56_2" geometry={nodes.Palm_56_2.geometry} material={materials['World ap']} position={[8.67, 22.7, 23.21]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_57_2" geometry={nodes.Palm_57_2.geometry} material={materials['World ap']} position={[-7.07, -4.42, -5.71]} rotation={[0.15, 0.78, 0.17]} />
              <mesh name="Palm_6_3" geometry={nodes.Palm_6_3.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_82_3" geometry={nodes.Palm_82_3.geometry} material={materials['World ap']} position={[-2.09, 6.81, 1.41]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_86_3" geometry={nodes.Palm_86_3.geometry} material={materials['World ap']} position={[8.57, 5.79, -0.2]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_3" geometry={nodes.Palm_89_3.geometry} material={materials['World ap']} position={[-10.33, 4.11, 2.8]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_8_3" geometry={nodes.Palm_8_3.geometry} material={materials['World ap']} position={[-26.69, 0.7, 9.89]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_9_3" geometry={nodes.Palm_9_3.geometry} material={materials['World ap']} position={[-3.81, 12.33, 11.07]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="America" position={[121.64, 40.46, 118.25]} rotation={[0.68, -0.89, -0.51]}>
              <mesh name="Palm_10_2" geometry={nodes.Palm_10_2.geometry} material={materials['World ap']} position={[1.09, 32.77, 62.86]} rotation={[1.52, 0.11, -0.41]} />
              <mesh name="Palm_11_2" geometry={nodes.Palm_11_2.geometry} material={materials['World ap']} position={[1.17, 16.92, 21.54]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_14_2" geometry={nodes.Palm_14_2.geometry} material={materials['World ap']} position={[28.47, 20.35, 41.66]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_17_2" geometry={nodes.Palm_17_2.geometry} material={materials['World ap']} position={[15.11, 14.06, 22.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_20_2" geometry={nodes.Palm_20_2.geometry} material={materials['World ap']} position={[19.1, -0.7, 3.92]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_24_2" geometry={nodes.Palm_24_2.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_26_2" geometry={nodes.Palm_26_2.geometry} material={materials['World ap']} position={[18.25, -4.72, 1.99]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_28_2" geometry={nodes.Palm_28_2.geometry} material={materials['World ap']} position={[-1.08, -28.79, -16.33]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_29_2" geometry={nodes.Palm_29_2.geometry} material={materials['World ap']} position={[10.77, -19.68, -13.64]} rotation={[0.15, -0.01, -0.1]} />
              <mesh name="Palm_2_3" geometry={nodes.Palm_2_3.geometry} material={materials['World ap']} position={[18.58, -12.3, -4.65]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_31" geometry={nodes.Palm_31.geometry} material={materials['World ap']} position={[7.09, -24.83, -15.76]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_33" geometry={nodes.Palm_33.geometry} material={materials['World ap']} position={[-9.88, 31.04, 52.08]} rotation={[1.29, 0.28, -0.41]} />
              <mesh name="Palm_36" geometry={nodes.Palm_36.geometry} material={materials['World ap']} position={[-16.15, 32.22, 57.59]} rotation={[1.03, 0.09, -0.48]} />
              <mesh name="Palm_37" geometry={nodes.Palm_37.geometry} material={materials['World ap']} position={[-16.05, 29.53, 55.34]} rotation={[0.31, 0.54, -0.78]} />
              <mesh name="Palm_39" geometry={nodes.Palm_39.geometry} material={materials['World ap']} position={[31.58, 24.81, 90.81]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_42" geometry={nodes.Palm_42.geometry} material={materials['World ap']} position={[-2, -24.98, -15.85]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_43" geometry={nodes.Palm_43.geometry} material={materials['World ap']} position={[-4.92, -21.9, -11.27]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_45" geometry={nodes.Palm_45.geometry} material={materials['World ap']} position={[10.66, -26.03, -16.24]} rotation={[0.05, -0.18, 0.37]} />
              <mesh name="Palm_49" geometry={nodes.Palm_49.geometry} material={materials['World ap']} position={[15.97, 24.78, 46.53]} rotation={[1.63, -0.14, -0.05]} />
              <mesh name="Palm_4_2" geometry={nodes.Palm_4_2.geometry} material={materials['World ap']} position={[-15.94, 3.36, 7.85]} rotation={[1.01, 0.76, -0.27]} />
              <mesh name="Palm_51" geometry={nodes.Palm_51.geometry} material={materials['World ap']} position={[15.89, 21.9, 32.79]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_53" geometry={nodes.Palm_53.geometry} material={materials['World ap']} position={[-6.08, 22.21, 29.79]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_54" geometry={nodes.Palm_54.geometry} material={materials['World ap']} position={[1.22, 23.25, 35.82]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_57" geometry={nodes.Palm_57.geometry} material={materials['World ap']} position={[-7.98, 31.92, 58.25]} rotation={[1.54, 0.06, -0.82]} />
              <mesh name="Palm_59" geometry={nodes.Palm_59.geometry} material={materials['World ap']} position={[39.86, 20.97, 78.61]} rotation={[1.28, -0.28, -0.43]} />
              <mesh name="Palm_61" geometry={nodes.Palm_61.geometry} material={materials['World ap']} position={[57.99, 12.01, 88.43]} rotation={[1.97, -0.59, -0.18]} />
              <mesh name="Palm_63" geometry={nodes.Palm_63.geometry} material={materials['World ap']} position={[59.77, 6.97, 89.69]} rotation={[2.42, -0.87, 0.18]} />
              <mesh name="Palm_65" geometry={nodes.Palm_65.geometry} material={materials['World ap']} position={[58.57, 11.76, 78.12]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_69" geometry={nodes.Palm_69.geometry} material={materials['World ap']} position={[5.83, 9.31, 9.37]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_71" geometry={nodes.Palm_71.geometry} material={materials['World ap']} position={[14.54, 8.87, 17.29]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_75" geometry={nodes.Palm_75.geometry} material={materials['World ap']} position={[25.34, -1.19, 6.49]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_76" geometry={nodes.Palm_76.geometry} material={materials['World ap']} position={[22.95, 8.11, 17.72]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_78" geometry={nodes.Palm_78.geometry} material={materials['World ap']} position={[29.64, 12.36, 30.22]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_7_2" geometry={nodes.Palm_7_2.geometry} material={materials['World ap']} position={[4.02, 11.45, 13.01]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_80" geometry={nodes.Palm_80.geometry} material={materials['World ap']} position={[6.74, -9.38, -4.84]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_82_2" geometry={nodes.Palm_82_2.geometry} material={materials['World ap']} position={[-2, 0.7, 2.35]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_83" geometry={nodes.Palm_83.geometry} material={materials['World ap']} position={[10.41, -4.94, -3.71]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_85" geometry={nodes.Palm_85.geometry} material={materials['World ap']} position={[4.64, -12.14, -9.13]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_2" geometry={nodes.Palm_86_2.geometry} material={materials['World ap']} position={[9.17, -1.26, -0.09]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_90_2" geometry={nodes.Palm_90_2.geometry} material={materials['World ap']} position={[0.86, -7.12, -3.88]} rotation={[0.48, 0.17, -0.3]} />
              <mesh name="Palm_92" geometry={nodes.Palm_92.geometry} material={materials['World ap']} position={[28.35, 1.38, 13.13]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_93" geometry={nodes.Palm_93.geometry} material={materials['World ap']} position={[30.5, -22.16, -7.62]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_96" geometry={nodes.Palm_96.geometry} material={materials['World ap']} position={[16.82, -8.7, -0.35]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_99" geometry={nodes.Palm_99.geometry} material={materials['World ap']} position={[-13.65, 12.21, 18.63]} rotation={[1.43, 0.48, -0.37]} />
            </group>
            <group name="Asia" position={[6.96, -47.91, 32.15]}>
              <mesh name="Palm_101" geometry={nodes.Palm_101.geometry} material={materials['World ap']} position={[-8.04, 125.27, 37.37]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_102" geometry={nodes.Palm_102.geometry} material={materials['World ap']} position={[-8.88, 125.11, 37.33]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_104" geometry={nodes.Palm_104.geometry} material={materials['World ap']} position={[-7.67, 125.73, 45.68]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_106" geometry={nodes.Palm_106.geometry} material={materials['World ap']} position={[-2.56, 124.41, 31.17]} rotation={[1.69, 0.21, -0.55]} />
              <mesh name="Palm_108" geometry={nodes.Palm_108.geometry} material={materials['World ap']} position={[-13.92, 121.37, 32.88]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_109" geometry={nodes.Palm_109.geometry} material={materials['World ap']} position={[44.86, 15.81, -34.66]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_10_4" geometry={nodes.Palm_10_4.geometry} material={materials['World ap']} position={[-22.48, 10.47, -24.86]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_111" geometry={nodes.Palm_111.geometry} material={materials['World ap']} position={[25.39, 19.94, -38.36]} rotation={[-0.03, 0.13, 0.1]} />
              <mesh name="Palm_115" geometry={nodes.Palm_115.geometry} material={materials['World ap']} position={[21.25, 3.26, -36.36]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_117" geometry={nodes.Palm_117.geometry} material={materials['World ap']} position={[13.26, 19.18, -39.68]} rotation={[0, -0.18, 0.1]} />
              <mesh name="Palm_14_4" geometry={nodes.Palm_14_4.geometry} material={materials['World ap']} position={[-0.54, -53.93, 10.49]} rotation={[-1.51, 0.14, 0.47]} />
              <mesh name="Palm_15_4" geometry={nodes.Palm_15_4.geometry} material={materials['World ap']} position={[-12.21, -44.5, 8.02]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_17_4" geometry={nodes.Palm_17_4.geometry} material={materials['World ap']} position={[12.99, -62, 24.82]} rotation={[-1.57, 0.23, 0.48]} />
              <mesh name="Palm_1_4" geometry={nodes.Palm_1_4.geometry} material={materials['World ap']} position={[-6.96, 35.61, -33.67]} rotation={[-0.25, -0.12, 0.13]} />
              <mesh name="Palm_20_4" geometry={nodes.Palm_20_4.geometry} material={materials['World ap']} position={[-9.94, -49.99, 21.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_21_4" geometry={nodes.Palm_21_4.geometry} material={materials['World ap']} position={[56.8, 94.76, -12.26]} rotation={[0.87, 0.7, -2.68]} />
              <mesh name="Palm_24_4" geometry={nodes.Palm_24_4.geometry} material={materials['World ap']} position={[-2.8, -16.7, -16.91]} rotation={[-0.53, 0.44, -0.31]} />
              <mesh name="Palm_28_4" geometry={nodes.Palm_28_4.geometry} material={materials['World ap']} position={[1.92, 70.39, -29.82]} rotation={[0.37, 0.16, -0.82]} />
              <mesh name="Palm_31_3" geometry={nodes.Palm_31_3.geometry} material={materials['World ap']} position={[-11.23, 84.41, -22.14]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_32_3" geometry={nodes.Palm_32_3.geometry} material={materials['World ap']} position={[-18.41, -13.05, -20.15]} rotation={[-0.28, 0.36, -0.41]} />
              <mesh name="Palm_35_3" geometry={nodes.Palm_35_3.geometry} material={materials['World ap']} position={[66.35, 81.93, -16.06]} rotation={[0.58, -0.41, -0.11]} />
              <mesh name="Palm_36_3" geometry={nodes.Palm_36_3.geometry} material={materials['World ap']} position={[64.32, 85.82, -14.95]} rotation={[0.21, 0.21, -0.4]} />
              <mesh name="Palm_39_3" geometry={nodes.Palm_39_3.geometry} material={materials['World ap']} position={[62.55, 93.74, -11.84]} rotation={[1.25, -0.19, -1.82]} />
              <mesh name="Palm_3_5" geometry={nodes.Palm_3_5.geometry} material={materials['World ap']} position={[-2.4, 59.91, -31.93]} rotation={[0.4, 0.43, -0.76]} />
              <mesh name="Palm_41_3" geometry={nodes.Palm_41_3.geometry} material={materials['World ap']} position={[-3.62, 91.38, -16.9]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_43_3" geometry={nodes.Palm_43_3.geometry} material={materials['World ap']} position={[4.95, 77.69, -25.82]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_46_3" geometry={nodes.Palm_46_3.geometry} material={materials['World ap']} position={[-8.11, 96.53, -11.75]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_47_3" geometry={nodes.Palm_47_3.geometry} material={materials['World ap']} position={[-0.42, 101.36, -9.39]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_49_3" geometry={nodes.Palm_49_3.geometry} material={materials['World ap']} position={[-13.49, 88.25, -16.26]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_50_3" geometry={nodes.Palm_50_3.geometry} material={materials['World ap']} position={[-2.95, 86.58, -24.93]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_53_3" geometry={nodes.Palm_53_3.geometry} material={materials['World ap']} position={[-17.81, -27.9, -10.09]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_54_3" geometry={nodes.Palm_54_3.geometry} material={materials['World ap']} position={[-11.72, -38.75, -0.59]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_55_3" geometry={nodes.Palm_55_3.geometry} material={materials['World ap']} position={[-13.49, -59.24, 40.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_59_2" geometry={nodes.Palm_59_2.geometry} material={materials['World ap']} position={[-11.76, -63.36, 43.64]} rotation={[-1.69, 0.26, 0.81]} />
              <mesh name="Palm_5_4" geometry={nodes.Palm_5_4.geometry} material={materials['World ap']} position={[-10.37, 29.78, -35.92]} rotation={[-0.36, 0.51, -0.32]} />
              <mesh name="Palm_63_2" geometry={nodes.Palm_63_2.geometry} material={materials['World ap']} position={[-8.88, -58.84, 35.78]} rotation={[-1.61, 0.26, 0.45]} />
              <mesh name="Palm_69_2" geometry={nodes.Palm_69_2.geometry} material={materials['World ap']} position={[13.29, -28.14, -21.49]} rotation={[-0.62, 0.13, 0.27]} />
              <mesh name="Palm_7_4" geometry={nodes.Palm_7_4.geometry} material={materials['World ap']} position={[-0.29, 2.32, -29.92]} rotation={[-0.26, 0.49, 0.05]} />
              <mesh name="Palm_82_4" geometry={nodes.Palm_82_4.geometry} material={materials['World ap']} position={[-13.35, -49.14, 15.75]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_8_4" geometry={nodes.Palm_8_4.geometry} material={materials['World ap']} position={[7.44, -8.64, -32.8]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_90_4" geometry={nodes.Palm_90_4.geometry} material={materials['World ap']} position={[23.02, -62.09, 28.57]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_96_2" geometry={nodes.Palm_96_2.geometry} material={materials['World ap']} position={[-9.15, 121.5, 42.91]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_97_2" geometry={nodes.Palm_97_2.geometry} material={materials['World ap']} position={[-13.76, 119.68, 28.38]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_99_2" geometry={nodes.Palm_99_2.geometry} material={materials['World ap']} position={[2.88, 131.09, 57.25]} rotation={[1.58, -0.01, -0.16]} />
            </group>
            <group name="Australia" position={[72.22, -105.13, 60.74]} rotation={[-2.39, 0, -0.13]}>
              <mesh name="Palm" geometry={nodes.Palm.geometry} material={materials['World ap']} position={[4.06, -4.7, -8.2]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_10" geometry={nodes.Palm_10.geometry} material={materials['World ap']} position={[34.25, -8.73, 31.27]} rotation={[1.88, -0.79, -2.79]} />
              <mesh name="Palm_11" geometry={nodes.Palm_11.geometry} material={materials['World ap']} position={[11.38, 4.91, 34.49]} rotation={[2.04, -0.19, -2.25]} />
              <mesh name="Palm_13" geometry={nodes.Palm_13.geometry} material={materials['World ap']} position={[20.71, -1.13, 36.98]} rotation={[1.66, -0.55, -2.4]} />
              <mesh name="Palm_15" geometry={nodes.Palm_15.geometry} material={materials['World ap']} position={[15.22, 3.64, 32.1]} rotation={[1.64, -0.38, -1.9]} />
              <mesh name="Palm_17" geometry={nodes.Palm_17.geometry} material={materials['World ap']} position={[27.49, -12.77, -4.41]} rotation={[0.69, -0.72, 2.56]} />
              <mesh name="Palm_19" geometry={nodes.Palm_19.geometry} material={materials['World ap']} position={[18.87, -11.37, -8.59]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_20" geometry={nodes.Palm_20.geometry} material={materials['World ap']} position={[4.18, -7.13, -13.04]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_24" geometry={nodes.Palm_24.geometry} material={materials['World ap']} position={[-4.24, 7.45, 19.8]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_25" geometry={nodes.Palm_25.geometry} material={materials['World ap']} position={[-7.28, 7.97, 25.44]} rotation={[1.57, 0.26, -0.01]} />
              <mesh name="Palm_27" geometry={nodes.Palm_27.geometry} material={materials['World ap']} position={[-6.1, 8.93, 24]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_28" geometry={nodes.Palm_28.geometry} material={materials['World ap']} position={[-1.62, 2.81, 5.98]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_3" geometry={nodes.Palm_3.geometry} material={materials['World ap']} position={[-8.74, 0.74, -5.33]} rotation={[0.46, 0.13, 0.26]} />
              <mesh name="Palm_30" geometry={nodes.Palm_30.geometry} material={materials['World ap']} position={[26.34, -8.23, 0.57]} rotation={[1.36, -0.33, 2.59]} />
              <mesh name="Palm_4" geometry={nodes.Palm_4.geometry} material={materials['World ap']} position={[35.62, -13.87, 8.67]} rotation={[1.5, -0.89, -3.12]} />
              <mesh name="Palm_6" geometry={nodes.Palm_6.geometry} material={materials['World ap']} position={[36.18, -12.8, 15.81]} rotation={[0.99, -0.69, -3.02]} />
              <mesh name="Palm_8" geometry={nodes.Palm_8.geometry} material={materials['World ap']} position={[36.21, -8.83, 27.71]} rotation={[1.53, -0.69, -2.62]} />
              <mesh name="Palm_82" geometry={nodes.Palm_82.geometry} material={materials['World ap']} position={[-3.2, -4.07, -6.92]} rotation={[0.43, 0.24, 0.29]} />
              <mesh name="Palm_87" geometry={nodes.Palm_87.geometry} material={materials['World ap']} position={[-11.1, 5.15, 10.18]} rotation={[1.22, -0.11, 0.01]} />
              <mesh name="Palm_90" geometry={nodes.Palm_90.geometry} material={materials['World ap']} position={[-11.1, 3.17, 0.26]} rotation={[0.86, 0.24, 0.38]} />
              <mesh name="Palm_91" geometry={nodes.Palm_91.geometry} material={materials['World ap']} position={[-0.99, -6.13, -10.27]} rotation={[0.71, -0.25, 0.76]} />
            </group>
          </group>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['World ap']} position={[-0.96, 0.57, -9.25]} rotation={[0.06, 0.1, -0.01]}>
              <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap']} />
              <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <group name="water" position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]}>
                <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials.Water} />
              </group>
            </mesh>
          </group>
          <group name="Ships" position={[-9.84, -1.38, 9.08]} />
        </group>
        <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.1']} position={[0.02, 0.17, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}
function EarthLv4(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/earth33/final4.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene"position={[-0.1, -0.15, -0.5]} rotation={[Math.PI / 0.1, 1.7, -0.2]} scale={1.7}>
      <group name="Planet" position={[0.03, 0.07, -0.04]} rotation={[Math.PI / 2, 0, -0.27]} scale={0.01}>
          <group name="Bushes" position={[-59.56, 45.9, -11.47]}>
            <mesh name="Bushes_11" geometry={nodes.Bushes_11.geometry} material={materials['World ap.511']} position={[-6.6, 40.7, 13.02]} rotation={[-2.98, 0, 0]} />
            <mesh name="Bushes_13" geometry={nodes.Bushes_13.geometry} material={materials['World ap.509']} position={[4.31, 45.97, 9.97]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_15" geometry={nodes.Bushes_15.geometry} material={materials['World ap.507']} position={[57.87, 63.82, 16.27]} rotation={[3.13, 0, 0]} />
            <mesh name="Bushes_17" geometry={nodes.Bushes_17.geometry} material={materials['World ap.505']} position={[118.94, 37.3, -5.98]} rotation={[3.14, 0, 0]} />
            <mesh name="Bushes_18" geometry={nodes.Bushes_18.geometry} material={materials['World ap.504']} position={[24.98, 55.42, 51.04]} rotation={[3.07, 0, 0]} />
            <mesh name="Bushes_19" geometry={nodes.Bushes_19.geometry} material={materials['World ap.503']} position={[23.11, 36.4, 77.11]} rotation={[-2.75, 0, 0]} />
            <mesh name="Bushes_2" geometry={nodes.Bushes_2.geometry} material={materials['World ap.520']} position={[-41.31, -39.94, -18.51]} rotation={[-Math.PI, 0, 0]} />
            <mesh name="Bushes_21" geometry={nodes.Bushes_21.geometry} material={materials['World ap.523']} position={[-35.77, 1.94, -3.31]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_23" geometry={nodes.Bushes_23.geometry} material={materials['World ap.525']} position={[-13.92, 34.19, 25.78]} rotation={[-1.99, 0, 0]} />
            <mesh name="Bushes_3" geometry={nodes.Bushes_3.geometry} material={materials['World ap.519']} position={[-38.39, -31.39, -24.85]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_5" geometry={nodes.Bushes_5.geometry} material={materials['World ap.517']} position={[-37.28, -61.26, -19.51]} rotation={[-2.7, 0, 0]} />
            <mesh name="Bushes_7" geometry={nodes.Bushes_7.geometry} material={materials['World ap.515']} position={[-37.32, -73.79, -15.13]} rotation={[-2.87, 0, 0]} />
            <mesh name="Bushes_9" geometry={nodes.Bushes_9.geometry} material={materials['World ap.513']} position={[-33.69, -8.8, -26.31]} rotation={[-2.19, 0, 0]} />
          </group>
          <group name="Camping" position={[0.24, 13.39, -16.17]} />
          <group name="Firtrees" position={[-31.1, 65.19, -52.69]}>
            <mesh name="Firtree_1" geometry={nodes.Firtree_1.geometry} material={materials['World ap']} position={[49.08, 17.34, 1.04]} rotation={[0.71, -0.16, 0.83]} />
            <mesh name="Firtree_10" geometry={nodes.Firtree_10.geometry} material={materials['World ap']} position={[55.57, 25.55, 11.04]} rotation={[1.01, -0.06, -1.63]} />
            <mesh name="Firtree_100" geometry={nodes.Firtree_100.geometry} material={materials['World ap']} position={[68.64, -147.79, 13.15]} rotation={[-0.62, -0.35, -0.05]} />
            <mesh name="Firtree_103" geometry={nodes.Firtree_103.geometry} material={materials['World ap']} position={[89.76, -141.95, 35.76]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_104" geometry={nodes.Firtree_104.geometry} material={materials['World ap']} position={[88.03, -141.59, 47.93]} rotation={[-1.57, -0.83, -1.37]} />
            <mesh name="Firtree_107" geometry={nodes.Firtree_107.geometry} material={materials['World ap']} position={[89.63, -124.84, 10.73]} rotation={[-0.76, -0.52, -0.56]} />
            <mesh name="Firtree_110" geometry={nodes.Firtree_110.geometry} material={materials['World ap']} position={[101.09, -109.53, 2.74]} rotation={[-0.84, -0.67, -0.55]} />
            <mesh name="Firtree_112" geometry={nodes.Firtree_112.geometry} material={materials['World ap']} position={[47.47, -144.51, 1.34]} rotation={[-1.14, -0.2, 1.82]} />
            <mesh name="Firtree_114" geometry={nodes.Firtree_114.geometry} material={materials['World ap']} position={[95.74, -127.95, 15.94]} rotation={[-0.97, -0.63, -1.71]} />
            <mesh name="Firtree_116" geometry={nodes.Firtree_116.geometry} material={materials['World ap']} position={[-27.63, -142.42, 20.93]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_118" geometry={nodes.Firtree_118.geometry} material={materials['World ap']} position={[29.99, -160.44, 37.55]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_12" geometry={nodes.Firtree_12.geometry} material={materials['World ap']} position={[35, 12.13, -9.99]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_121" geometry={nodes.Firtree_121.geometry} material={materials['World ap']} position={[-1.97, -156.84, 33.77]} rotation={[-1.45, 0.26, -0.65]} />
            <mesh name="Firtree_122" geometry={nodes.Firtree_122.geometry} material={materials['World ap']} position={[-4.78, -154.54, 25.41]} rotation={[-0.87, 0.28, -0.89]} />
            <mesh name="Firtree_124" geometry={nodes.Firtree_124.geometry} material={materials['World ap']} position={[91.04, -136.01, 19.61]} rotation={[-0.7, -0.59, -0.36]} />
            <mesh name="Firtree_126" geometry={nodes.Firtree_126.geometry} material={materials['World ap']} position={[105.41, -125.95, 28.96]} rotation={[-0.73, -0.72, -1.43]} />
            <mesh name="Firtree_128" geometry={nodes.Firtree_128.geometry} material={materials['World ap']} position={[47.72, -149.66, 7.83]} rotation={[-1.3, -0.22, 1.76]} />
            <mesh name="Firtree_129" geometry={nodes.Firtree_129.geometry} material={materials['World ap']} position={[14.13, -158.94, 27.2]} rotation={[-1.48, 0.05, -1.98]} />
            <mesh name="Firtree_131" geometry={nodes.Firtree_131.geometry} material={materials['World ap']} position={[19.47, -161.26, 50.91]} rotation={[-1.68, 0.12, 1.85]} />
            <mesh name="Firtree_132" geometry={nodes.Firtree_132.geometry} material={materials['World ap']} position={[19.86, -158.21, 38.59]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_134" geometry={nodes.Firtree_134.geometry} material={materials['World ap']} position={[-5.5, -156.92, 40.82]} rotation={[-1.38, 0.41, -2.01]} />
            <mesh name="Firtree_136" geometry={nodes.Firtree_136.geometry} material={materials['World ap']} position={[21.09, -148.06, 2.5]} rotation={[-0.85, -0.15, -1.87]} />
            <mesh name="Firtree_139" geometry={nodes.Firtree_139.geometry} material={materials['World ap']} position={[15.67, -151.62, 10.95]} rotation={[-1.06, 0.07, -2.05]} />
            <mesh name="Firtree_14" geometry={nodes.Firtree_14.geometry} material={materials['World ap']} position={[8.41, 7.08, -15.37]} rotation={[0.71, 0.32, 0.89]} />
            <mesh name="Firtree_141" geometry={nodes.Firtree_141.geometry} material={materials['World ap']} position={[25.5, -149.91, 7.87]} rotation={[-1.16, -0.07, -0.69]} />
            <mesh name="Firtree_143" geometry={nodes.Firtree_143.geometry} material={materials['World ap']} position={[19.32, -144.08, -3.53]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_144" geometry={nodes.Firtree_144.geometry} material={materials['World ap']} position={[29.29, -143.1, -4.57]} rotation={[-0.87, 0.09, -0.69]} />
            <mesh name="Firtree_147" geometry={nodes.Firtree_147.geometry} material={materials['World ap']} position={[35.63, -137.72, -7.72]} rotation={[-0.47, -0.01, -0.53]} />
            <mesh name="Firtree_148" geometry={nodes.Firtree_148.geometry} material={materials['World ap']} position={[-8.69, -154.04, 31.28]} rotation={[-1.35, 0.25, -2.11]} />
            <mesh name="Firtree_15" geometry={nodes.Firtree_15.geometry} material={materials['World ap']} position={[-29.06, 15.77, 21.21]} rotation={[0.78, 0.69, 1.01]} />
            <mesh name="Firtree_151" geometry={nodes.Firtree_151.geometry} material={materials['World ap']} position={[88.86, -122.05, 1.82]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_159" geometry={nodes.Firtree_159.geometry} material={materials['World ap']} position={[121.23, -95.87, 29.26]} rotation={[-0.46, -1.19, -0.47]} />
            <mesh name="Firtree_162" geometry={nodes.Firtree_162.geometry} material={materials['World ap']} position={[77.42, -135.51, 7.26]} rotation={[-0.86, -0.67, -0.8]} />
            <mesh name="Firtree_165" geometry={nodes.Firtree_165.geometry} material={materials['World ap']} position={[120.95, -99.13, 33.97]} rotation={[-0.89, -1.22, -0.91]} />
            <mesh name="Firtree_168" geometry={nodes.Firtree_168.geometry} material={materials['World ap']} position={[97.62, -135.38, 30.84]} rotation={[-1.01, -0.73, -0.87]} />
            <mesh name="Firtree_17" geometry={nodes.Firtree_17.geometry} material={materials['World ap']} position={[-17.22, 14.96, 5.26]} rotation={[0.66, 0.61, 2.14]} />
            <mesh name="Firtree_170" geometry={nodes.Firtree_170.geometry} material={materials['World ap']} position={[84.18, -137, 17.53]} rotation={[-1.16, -0.53, -1.77]} />
            <mesh name="Firtree_172" geometry={nodes.Firtree_172.geometry} material={materials['World ap']} position={[12.32, -139.3, -6.15]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_173" geometry={nodes.Firtree_173.geometry} material={materials['World ap']} position={[20.1, -138.6, -8.85]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_18" geometry={nodes.Firtree_18.geometry} material={materials['World ap']} position={[41.8, 2.87, -17.81]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_180" geometry={nodes.Firtree_180.geometry} material={materials['World ap']} position={[92.25, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_183" geometry={nodes.Firtree_183.geometry} material={materials['World ap']} position={[15.51, 36.77, 12.72]} rotation={[1.2, -0.12, -1.49]} />
            <mesh name="Firtree_187" geometry={nodes.Firtree_187.geometry} material={materials['World ap']} position={[78.33, -149.93, 30.98]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_188" geometry={nodes.Firtree_188.geometry} material={materials['World ap']} position={[58.25, -158.69, 28.06]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_19" geometry={nodes.Firtree_19.geometry} material={materials['World ap']} position={[53, 2.14, -16.73]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_190" geometry={nodes.Firtree_190.geometry} material={materials['World ap']} position={[50.34, -163.53, 40.63]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_192" geometry={nodes.Firtree_192.geometry} material={materials['World ap']} position={[91.89, -5.81, 5.22]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_21" geometry={nodes.Firtree_21.geometry} material={materials['World ap']} position={[22.88, 4.38, -17.57]} rotation={[0.65, 0.03, 2.17]} />
            <mesh name="Firtree_23" geometry={nodes.Firtree_23.geometry} material={materials['World ap']} position={[25.17, 20.84, 3.4]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_25" geometry={nodes.Firtree_25.geometry} material={materials['World ap']} position={[75.15, -10.88, -15.56]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_28" geometry={nodes.Firtree_28.geometry} material={materials['World ap']} position={[-32.26, 5.27, 14.87]} rotation={[0.88, 0.65, 1.65]} />
            <mesh name="Firtree_3" geometry={nodes.Firtree_3.geometry} material={materials['World ap']} position={[46.08, 7.4, -8.93]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_30" geometry={nodes.Firtree_30.geometry} material={materials['World ap']} position={[-34.07, 8.94, 23.04]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_32" geometry={nodes.Firtree_32.geometry} material={materials['World ap']} position={[-38.43, 1.09, 17.1]} rotation={[1.12, 0.79, 1.69]} />
            <mesh name="Firtree_34" geometry={nodes.Firtree_34.geometry} material={materials['World ap']} position={[-23.02, 2.21, 2.18]} rotation={[0.66, 0.52, 1.97]} />
            <mesh name="Firtree_35" geometry={nodes.Firtree_35.geometry} material={materials['World ap']} position={[10.25, 16.18, -11.14]} rotation={[0.61, 0.13, -0.17]} />
            <mesh name="Firtree_38" geometry={nodes.Firtree_38.geometry} material={materials['World ap']} position={[-51.65, -23.49, 3.49]} rotation={[0.51, 0.82, 2.21]} />
            <mesh name="Firtree_40" geometry={nodes.Firtree_40.geometry} material={materials['World ap']} position={[-51.97, -30.39, 1.96]} rotation={[0.27, 0.74, 2.53]} />
            <mesh name="Firtree_42" geometry={nodes.Firtree_42.geometry} material={materials['World ap']} position={[-55.56, -27.66, 5.23]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_45" geometry={nodes.Firtree_45.geometry} material={materials['World ap']} position={[-6.21, 13.9, -6.04]} rotation={[0.6, 0.58, -0.27]} />
            <mesh name="Firtree_47" geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-35.47, -0.67, 9.39]} rotation={[0.89, 0.51, 1.64]} />
            <mesh name="Firtree_5" geometry={nodes.Firtree_5.geometry} material={materials['World ap']} position={[71.71, 10.57, -0.04]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_50" geometry={nodes.Firtree_50.geometry} material={materials['World ap']} position={[33.77, 24.3, 12.72]} rotation={[1, -0.4, 0.91]} />
            <mesh name="Firtree_51" geometry={nodes.Firtree_51.geometry} material={materials['World ap']} position={[-12.09, 19.81, 3.42]} rotation={[0.52, 0.65, 0.86]} />
            <mesh name="Firtree_53" geometry={nodes.Firtree_53.geometry} material={materials['World ap']} position={[-45.76, -18.1, 2.96]} rotation={[0.59, 0.44, 0.76]} />
            <mesh name="Firtree_54" geometry={nodes.Firtree_54.geometry} material={materials['World ap']} position={[-60.97, -62.25, 11.37]} rotation={[0.11, 1.05, 1.49]} />
            <mesh name="Firtree_55" geometry={nodes.Firtree_55.geometry} material={materials['World ap']} position={[-61.92, -72.12, 13.63]} rotation={[-0.29, 1.25, 1.95]} />
            <mesh name="Firtree_56" geometry={nodes.Firtree_56.geometry} material={materials['World ap']} position={[-59.43, -74.92, 8.99]} rotation={[0.04, 1.02, 1.61]} />
            <mesh name="Firtree_57" geometry={nodes.Firtree_57.geometry} material={materials['World ap']} position={[-60.61, -76.72, 11.06]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_58" geometry={nodes.Firtree_58.geometry} material={materials['World ap']} position={[-63.26, -66.68, 12.84]} rotation={[0.29, 1.11, 2.72]} />
            <mesh name="Firtree_59" geometry={nodes.Firtree_59.geometry} material={materials['World ap']} position={[-61.48, -76.24, 17.68]} rotation={[-0.58, 1.19, -2.57]} />
            <mesh name="Firtree_6" geometry={nodes.Firtree_6.geometry} material={materials['World ap']} position={[77.85, -3.43, -10.09]} rotation={[0.62, -0.43, 0.75]} />
            <mesh name="Firtree_60" geometry={nodes.Firtree_60.geometry} material={materials['World ap']} position={[-61.84, -81.68, 12.85]} rotation={[-0.86, 1.15, -2.37]} />
            <mesh name="Firtree_61" geometry={nodes.Firtree_61.geometry} material={materials['World ap']} position={[43.94, 25.17, 8.05]} rotation={[1.12, -0.08, -0.46]} />
            <mesh name="Firtree_62" geometry={nodes.Firtree_62.geometry} material={materials['World ap']} position={[68.44, 19.36, 2.33]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_64" geometry={nodes.Firtree_64.geometry} material={materials['World ap']} position={[84.08, -9.69, -6.41]} rotation={[0.65, -0.58, -0.11]} />
            <mesh name="Firtree_65" geometry={nodes.Firtree_65.geometry} material={materials['World ap']} position={[59.05, -1.03, -15.54]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_67" geometry={nodes.Firtree_67.geometry} material={materials['World ap']} position={[19.25, 10.38, -1.46]} rotation={[0.76, 0.13, 0.98]} />
            <mesh name="Firtree_69" geometry={nodes.Firtree_69.geometry} material={materials['World ap']} position={[-6.61, 9.17, -9.28]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_72" geometry={nodes.Firtree_72.geometry} material={materials['World ap']} position={[-66.63, -63.47, 18.3]} rotation={[-0.06, 1.16, 2.99]} />
            <mesh name="Firtree_73" geometry={nodes.Firtree_73.geometry} material={materials['World ap']} position={[-57.86, -53.97, 4.48]} rotation={[-0.04, 0.88, 2.97]} />
            <mesh name="Firtree_74" geometry={nodes.Firtree_74.geometry} material={materials['World ap']} position={[-62.99, -53.6, 14.82]} rotation={[-0.06, 1.12, 2.99]} />
            <mesh name="Firtree_75" geometry={nodes.Firtree_75.geometry} material={materials['World ap']} position={[-69.89, -53.97, 20.42]} rotation={[-0.25, 1.04, -1.89]} />
            <mesh name="Firtree_76" geometry={nodes.Firtree_76.geometry} material={materials['World ap']} position={[3.91, -0.77, -16.99]} rotation={[0.66, 0.29, -1.57]} />
            <mesh name="Firtree_77" geometry={nodes.Firtree_77.geometry} material={materials['World ap']} position={[21.46, -1.57, -22.04]} rotation={[0.53, 0.03, 2.17]} />
            <mesh name="Firtree_80" geometry={nodes.Firtree_80.geometry} material={materials['World ap']} position={[77.95, -19, -14.51]} rotation={[0.44, -0.53, 0.22]} />
            <mesh name="Firtree_81" geometry={nodes.Firtree_81.geometry} material={materials['World ap']} position={[72.02, 4.81, -6.63]} rotation={[0.6, -0.32, 0.05]} />
            <mesh name="Firtree_84" geometry={nodes.Firtree_84.geometry} material={materials['World ap']} position={[67.86, 0.03, -10.31]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_85" geometry={nodes.Firtree_85.geometry} material={materials['World ap']} position={[69.72, -9.31, -17.67]} rotation={[0.29, -0.07, 0.66]} />
            <mesh name="Firtree_86" geometry={nodes.Firtree_86.geometry} material={materials['World ap']} position={[66.17, 25.68, 10.25]} rotation={[0.83, -0.35, -1.96]} />
            <mesh name="Firtree_87" geometry={nodes.Firtree_87.geometry} material={materials['World ap']} position={[-16.4, 21.85, 6.13]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_89" geometry={nodes.Firtree_89.geometry} material={materials['World ap']} position={[-56.81, -49.67, 5.84]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_9" geometry={nodes.Firtree_9.geometry} material={materials['World ap']} position={[32.65, 17.22, -0.61]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_90" geometry={nodes.Firtree_90.geometry} material={materials['World ap']} position={[-47.03, -26.86, -1.51]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_92" geometry={nodes.Firtree_92.geometry} material={materials['World ap']} position={[-56.29, -33.98, 4]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_94" geometry={nodes.Firtree_94.geometry} material={materials['World ap']} position={[100.81, -115.34, 11.14]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_96" geometry={nodes.Firtree_96.geometry} material={materials['World ap']} position={[58.51, -147.99, 13.82]} rotation={[-1.16, -0.36, 3.09]} />
            <mesh name="Firtree_97" geometry={nodes.Firtree_97.geometry} material={materials['World ap']} position={[96.41, -119.21, 6.79]} rotation={[-0.67, -0.6, -0.64]} />
            <mesh name="Firtree_99" geometry={nodes.Firtree_99.geometry} material={materials['World ap']} position={[96.56, -136.96, 36.08]} rotation={[-1.3, -0.79, -1.27]} />
          </group>
          <group name="Palms" position={[-68.62, 82.82, 15.93]} rotation={[2.1, 0.5, 1.38]}>
            <group name="Africa" position={[68.89, 73.37, 49.11]} rotation={[0.26, -0.67, 0.01]}>
              <mesh name="Palm_11_3" geometry={nodes.Palm_11_3.geometry} material={materials['World ap']} position={[3.38, 21.43, 18.13]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_3" geometry={nodes.Palm_12_3.geometry} material={materials['World ap']} position={[9.39, 22.77, 21.96]} rotation={[1.23, -0.09, -1.58]} />
              <mesh name="Palm_14_3" geometry={nodes.Palm_14_3.geometry} material={materials['World ap']} position={[27.71, 27.28, 40.3]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_3" geometry={nodes.Palm_15_3.geometry} material={materials['World ap']} position={[17.09, 18.71, 26.67]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_17_3" geometry={nodes.Palm_17_3.geometry} material={materials['World ap']} position={[15.03, 19.78, 22.07]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_20_3" geometry={nodes.Palm_20_3.geometry} material={materials['World ap']} position={[17.89, 13.31, 8.13]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_23_3" geometry={nodes.Palm_23_3.geometry} material={materials['World ap']} position={[-33.19, 0.21, 17.17]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_24_3" geometry={nodes.Palm_24_3.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_26_3" geometry={nodes.Palm_26_3.geometry} material={materials['World ap']} position={[18.13, 3.44, 0.72]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_3" geometry={nodes.Palm_27_3.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_3" geometry={nodes.Palm_28_3.geometry} material={materials['World ap']} position={[28.17, -9.24, -5.95]} rotation={[1.01, -0.86, 0.94]} />
              <mesh name="Palm_30_3" geometry={nodes.Palm_30_3.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_32_2" geometry={nodes.Palm_32_2.geometry} material={materials['World ap']} position={[-13.49, 25.12, 47.26]} rotation={[0.9, 0.36, -0.21]} />
              <mesh name="Palm_33_2" geometry={nodes.Palm_33_2.geometry} material={materials['World ap']} position={[-17.55, 23.96, 49.11]} rotation={[1.68, 0.48, -0.43]} />
              <mesh name="Palm_34_2" geometry={nodes.Palm_34_2.geometry} material={materials['World ap']} position={[-19.74, -0.58, 5.87]} rotation={[0.52, 0.92, -0.08]} />
              <mesh name="Palm_35_2" geometry={nodes.Palm_35_2.geometry} material={materials['World ap']} position={[-13.45, 24.64, 53.09]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36_2" geometry={nodes.Palm_36_2.geometry} material={materials['World ap']} position={[-20.51, 24.23, 49.63]} rotation={[1.62, 0.74, -0.19]} />
              <mesh name="Palm_37_2" geometry={nodes.Palm_37_2.geometry} material={materials['World ap']} position={[-3.36, 28.29, 51.92]} rotation={[2, 0.17, -0.72]} />
              <mesh name="Palm_38_2" geometry={nodes.Palm_38_2.geometry} material={materials['World ap']} position={[-23.26, 21.37, 43.92]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_39_2" geometry={nodes.Palm_39_2.geometry} material={materials['World ap']} position={[-40.85, 1.14, 39.29]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_3_3" geometry={nodes.Palm_3_3.geometry} material={materials['World ap']} position={[15.01, 6.9, 0.26]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_3_4" geometry={nodes.Palm_3_4.geometry} material={materials['World ap']} position={[-14.08, -0.89, -0.25]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40_2" geometry={nodes.Palm_40_2.geometry} material={materials['World ap']} position={[-35.7, 11.31, 38.14]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_41_2" geometry={nodes.Palm_41_2.geometry} material={materials['World ap']} position={[-42.85, -1, 35.96]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_42_2" geometry={nodes.Palm_42_2.geometry} material={materials['World ap']} position={[-39.49, -1.78, 19.19]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_43_2" geometry={nodes.Palm_43_2.geometry} material={materials['World ap']} position={[-42.86, -2.5, 23]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_44_2" geometry={nodes.Palm_44_2.geometry} material={materials['World ap']} position={[-47.57, -6.66, 27.07]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_45_2" geometry={nodes.Palm_45_2.geometry} material={materials['World ap']} position={[-49, -11.96, 24.28]} rotation={[0.78, 0.89, -0.25]} />
              <mesh name="Palm_46_2" geometry={nodes.Palm_46_2.geometry} material={materials['World ap']} position={[4.56, 29.69, 48.51]} rotation={[1.26, -0.01, -0.32]} />
              <mesh name="Palm_48_2" geometry={nodes.Palm_48_2.geometry} material={materials['World ap']} position={[-43.37, -1.41, 32.08]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_49_2" geometry={nodes.Palm_49_2.geometry} material={materials['World ap']} position={[-42.65, -2.77, 29.47]} rotation={[0.76, 0.91, -0.3]} />
              <mesh name="Palm_50_2" geometry={nodes.Palm_50_2.geometry} material={materials['World ap']} position={[-0.93, 15.13, 12.05]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_51_2" geometry={nodes.Palm_51_2.geometry} material={materials['World ap']} position={[4.74, 21.9, 16]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_52_2" geometry={nodes.Palm_52_2.geometry} material={materials['World ap']} position={[-15.6, -2.2, 2.14]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_53_2" geometry={nodes.Palm_53_2.geometry} material={materials['World ap']} position={[-8.65, -5.18, -11.32]} rotation={[0.94, 0.53, -0.23]} />
              <mesh name="Palm_54_2" geometry={nodes.Palm_54_2.geometry} material={materials['World ap']} position={[1.47, 20.88, 15.56]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_55_2" geometry={nodes.Palm_55_2.geometry} material={materials['World ap']} position={[9.27, 25.49, 27]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_56_2" geometry={nodes.Palm_56_2.geometry} material={materials['World ap']} position={[8.67, 22.7, 23.21]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_57_2" geometry={nodes.Palm_57_2.geometry} material={materials['World ap']} position={[-7.07, -4.42, -5.71]} rotation={[0.15, 0.78, 0.17]} />
              <mesh name="Palm_5_3" geometry={nodes.Palm_5_3.geometry} material={materials['World ap']} position={[-10.07, 6.41, 9.26]} rotation={[1.14, 0.55, -0.23]} />
              <mesh name="Palm_6_3" geometry={nodes.Palm_6_3.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_81_3" geometry={nodes.Palm_81_3.geometry} material={materials['World ap']} position={[-7.51, -3.03, -2.06]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_82_3" geometry={nodes.Palm_82_3.geometry} material={materials['World ap']} position={[-2.09, 6.81, 1.41]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_86_3" geometry={nodes.Palm_86_3.geometry} material={materials['World ap']} position={[8.57, 5.79, -0.2]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_88_2" geometry={nodes.Palm_88_2.geometry} material={materials['World ap']} position={[3.83, 11.71, 5.27]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_3" geometry={nodes.Palm_89_3.geometry} material={materials['World ap']} position={[-10.33, 4.11, 2.8]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_8_3" geometry={nodes.Palm_8_3.geometry} material={materials['World ap']} position={[-26.69, 0.7, 9.89]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_9_3" geometry={nodes.Palm_9_3.geometry} material={materials['World ap']} position={[-3.81, 12.33, 11.07]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="America" position={[121.64, 40.46, 118.25]} rotation={[0.68, -0.89, -0.51]}>
              <mesh name="Palm_10_2" geometry={nodes.Palm_10_2.geometry} material={materials['World ap']} position={[1.09, 32.77, 62.86]} rotation={[1.52, 0.11, -0.41]} />
              <mesh name="Palm_11_2" geometry={nodes.Palm_11_2.geometry} material={materials['World ap']} position={[1.17, 16.92, 21.54]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_14_2" geometry={nodes.Palm_14_2.geometry} material={materials['World ap']} position={[28.47, 20.35, 41.66]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_17_2" geometry={nodes.Palm_17_2.geometry} material={materials['World ap']} position={[15.11, 14.06, 22.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_20_2" geometry={nodes.Palm_20_2.geometry} material={materials['World ap']} position={[19.1, -0.7, 3.92]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_24_2" geometry={nodes.Palm_24_2.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_26_2" geometry={nodes.Palm_26_2.geometry} material={materials['World ap']} position={[18.25, -4.72, 1.99]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_28_2" geometry={nodes.Palm_28_2.geometry} material={materials['World ap']} position={[-1.08, -28.79, -16.33]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_29_2" geometry={nodes.Palm_29_2.geometry} material={materials['World ap']} position={[10.77, -19.68, -13.64]} rotation={[0.15, -0.01, -0.1]} />
              <mesh name="Palm_2_2" geometry={nodes.Palm_2_2.geometry} material={materials['World ap']} position={[15.13, -1.26, 1.52]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_2_3" geometry={nodes.Palm_2_3.geometry} material={materials['World ap']} position={[18.58, -12.3, -4.65]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_31" geometry={nodes.Palm_31.geometry} material={materials['World ap']} position={[7.09, -24.83, -15.76]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_33" geometry={nodes.Palm_33.geometry} material={materials['World ap']} position={[-9.88, 31.04, 52.08]} rotation={[1.29, 0.28, -0.41]} />
              <mesh name="Palm_36" geometry={nodes.Palm_36.geometry} material={materials['World ap']} position={[-16.15, 32.22, 57.59]} rotation={[1.03, 0.09, -0.48]} />
              <mesh name="Palm_37" geometry={nodes.Palm_37.geometry} material={materials['World ap']} position={[-16.05, 29.53, 55.34]} rotation={[0.31, 0.54, -0.78]} />
              <mesh name="Palm_39" geometry={nodes.Palm_39.geometry} material={materials['World ap']} position={[31.58, 24.81, 90.81]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_42" geometry={nodes.Palm_42.geometry} material={materials['World ap']} position={[-2, -24.98, -15.85]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_43" geometry={nodes.Palm_43.geometry} material={materials['World ap']} position={[-4.92, -21.9, -11.27]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_45" geometry={nodes.Palm_45.geometry} material={materials['World ap']} position={[10.66, -26.03, -16.24]} rotation={[0.05, -0.18, 0.37]} />
              <mesh name="Palm_49" geometry={nodes.Palm_49.geometry} material={materials['World ap']} position={[15.97, 24.78, 46.53]} rotation={[1.63, -0.14, -0.05]} />
              <mesh name="Palm_4_2" geometry={nodes.Palm_4_2.geometry} material={materials['World ap']} position={[-15.94, 3.36, 7.85]} rotation={[1.01, 0.76, -0.27]} />
              <mesh name="Palm_51" geometry={nodes.Palm_51.geometry} material={materials['World ap']} position={[15.89, 21.9, 32.79]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_53" geometry={nodes.Palm_53.geometry} material={materials['World ap']} position={[-6.08, 22.21, 29.79]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_54" geometry={nodes.Palm_54.geometry} material={materials['World ap']} position={[1.22, 23.25, 35.82]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_57" geometry={nodes.Palm_57.geometry} material={materials['World ap']} position={[-7.98, 31.92, 58.25]} rotation={[1.54, 0.06, -0.82]} />
              <mesh name="Palm_59" geometry={nodes.Palm_59.geometry} material={materials['World ap']} position={[39.86, 20.97, 78.61]} rotation={[1.28, -0.28, -0.43]} />
              <mesh name="Palm_61" geometry={nodes.Palm_61.geometry} material={materials['World ap']} position={[57.99, 12.01, 88.43]} rotation={[1.97, -0.59, -0.18]} />
              <mesh name="Palm_63" geometry={nodes.Palm_63.geometry} material={materials['World ap']} position={[59.77, 6.97, 89.69]} rotation={[2.42, -0.87, 0.18]} />
              <mesh name="Palm_65" geometry={nodes.Palm_65.geometry} material={materials['World ap']} position={[58.57, 11.76, 78.12]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_69" geometry={nodes.Palm_69.geometry} material={materials['World ap']} position={[5.83, 9.31, 9.37]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_71" geometry={nodes.Palm_71.geometry} material={materials['World ap']} position={[14.54, 8.87, 17.29]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_75" geometry={nodes.Palm_75.geometry} material={materials['World ap']} position={[25.34, -1.19, 6.49]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_76" geometry={nodes.Palm_76.geometry} material={materials['World ap']} position={[22.95, 8.11, 17.72]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_78" geometry={nodes.Palm_78.geometry} material={materials['World ap']} position={[29.64, 12.36, 30.22]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_7_2" geometry={nodes.Palm_7_2.geometry} material={materials['World ap']} position={[4.02, 11.45, 13.01]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_80" geometry={nodes.Palm_80.geometry} material={materials['World ap']} position={[6.74, -9.38, -4.84]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_82_2" geometry={nodes.Palm_82_2.geometry} material={materials['World ap']} position={[-2, 0.7, 2.35]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_83" geometry={nodes.Palm_83.geometry} material={materials['World ap']} position={[10.41, -4.94, -3.71]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_85" geometry={nodes.Palm_85.geometry} material={materials['World ap']} position={[4.64, -12.14, -9.13]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_2" geometry={nodes.Palm_86_2.geometry} material={materials['World ap']} position={[9.17, -1.26, -0.09]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_90_2" geometry={nodes.Palm_90_2.geometry} material={materials['World ap']} position={[0.86, -7.12, -3.88]} rotation={[0.48, 0.17, -0.3]} />
              <mesh name="Palm_92" geometry={nodes.Palm_92.geometry} material={materials['World ap']} position={[28.35, 1.38, 13.13]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_93" geometry={nodes.Palm_93.geometry} material={materials['World ap']} position={[30.5, -22.16, -7.62]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_96" geometry={nodes.Palm_96.geometry} material={materials['World ap']} position={[16.82, -8.7, -0.35]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_99" geometry={nodes.Palm_99.geometry} material={materials['World ap']} position={[-13.65, 12.21, 18.63]} rotation={[1.43, 0.48, -0.37]} />
            </group>
            <group name="Asia" position={[6.96, -47.91, 32.15]}>
              <mesh name="Palm_101" geometry={nodes.Palm_101.geometry} material={materials['World ap']} position={[-8.04, 125.27, 37.37]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_102" geometry={nodes.Palm_102.geometry} material={materials['World ap']} position={[-8.88, 125.11, 37.33]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_104" geometry={nodes.Palm_104.geometry} material={materials['World ap']} position={[-7.67, 125.73, 45.68]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_106" geometry={nodes.Palm_106.geometry} material={materials['World ap']} position={[-2.56, 124.41, 31.17]} rotation={[1.69, 0.21, -0.55]} />
              <mesh name="Palm_108" geometry={nodes.Palm_108.geometry} material={materials['World ap']} position={[-13.92, 121.37, 32.88]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_109" geometry={nodes.Palm_109.geometry} material={materials['World ap']} position={[44.86, 15.81, -34.66]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_10_4" geometry={nodes.Palm_10_4.geometry} material={materials['World ap']} position={[-22.48, 10.47, -24.86]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_111" geometry={nodes.Palm_111.geometry} material={materials['World ap']} position={[25.39, 19.94, -38.36]} rotation={[-0.03, 0.13, 0.1]} />
              <mesh name="Palm_115" geometry={nodes.Palm_115.geometry} material={materials['World ap']} position={[21.25, 3.26, -36.36]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_117" geometry={nodes.Palm_117.geometry} material={materials['World ap']} position={[13.26, 19.18, -39.68]} rotation={[0, -0.18, 0.1]} />
              <mesh name="Palm_14_4" geometry={nodes.Palm_14_4.geometry} material={materials['World ap']} position={[-0.54, -53.93, 10.49]} rotation={[-1.51, 0.14, 0.47]} />
              <mesh name="Palm_15_4" geometry={nodes.Palm_15_4.geometry} material={materials['World ap']} position={[-12.21, -44.5, 8.02]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_17_4" geometry={nodes.Palm_17_4.geometry} material={materials['World ap']} position={[12.99, -62, 24.82]} rotation={[-1.57, 0.23, 0.48]} />
              <mesh name="Palm_1_4" geometry={nodes.Palm_1_4.geometry} material={materials['World ap']} position={[-6.96, 35.61, -33.67]} rotation={[-0.25, -0.12, 0.13]} />
              <mesh name="Palm_20_4" geometry={nodes.Palm_20_4.geometry} material={materials['World ap']} position={[-9.94, -49.99, 21.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_21_4" geometry={nodes.Palm_21_4.geometry} material={materials['World ap']} position={[56.8, 94.76, -12.26]} rotation={[0.87, 0.7, -2.68]} />
              <mesh name="Palm_24_4" geometry={nodes.Palm_24_4.geometry} material={materials['World ap']} position={[-2.8, -16.7, -16.91]} rotation={[-0.53, 0.44, -0.31]} />
              <mesh name="Palm_28_4" geometry={nodes.Palm_28_4.geometry} material={materials['World ap']} position={[1.92, 70.39, -29.82]} rotation={[0.37, 0.16, -0.82]} />
              <mesh name="Palm_31_3" geometry={nodes.Palm_31_3.geometry} material={materials['World ap']} position={[-11.23, 84.41, -22.14]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_32_3" geometry={nodes.Palm_32_3.geometry} material={materials['World ap']} position={[-18.41, -13.05, -20.15]} rotation={[-0.28, 0.36, -0.41]} />
              <mesh name="Palm_35_3" geometry={nodes.Palm_35_3.geometry} material={materials['World ap']} position={[66.35, 81.93, -16.06]} rotation={[0.58, -0.41, -0.11]} />
              <mesh name="Palm_36_3" geometry={nodes.Palm_36_3.geometry} material={materials['World ap']} position={[64.32, 85.82, -14.95]} rotation={[0.21, 0.21, -0.4]} />
              <mesh name="Palm_39_3" geometry={nodes.Palm_39_3.geometry} material={materials['World ap']} position={[62.55, 93.74, -11.84]} rotation={[1.25, -0.19, -1.82]} />
              <mesh name="Palm_3_5" geometry={nodes.Palm_3_5.geometry} material={materials['World ap']} position={[-2.4, 59.91, -31.93]} rotation={[0.4, 0.43, -0.76]} />
              <mesh name="Palm_41_3" geometry={nodes.Palm_41_3.geometry} material={materials['World ap']} position={[-3.62, 91.38, -16.9]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_43_3" geometry={nodes.Palm_43_3.geometry} material={materials['World ap']} position={[4.95, 77.69, -25.82]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_46_3" geometry={nodes.Palm_46_3.geometry} material={materials['World ap']} position={[-8.11, 96.53, -11.75]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_47_3" geometry={nodes.Palm_47_3.geometry} material={materials['World ap']} position={[-0.42, 101.36, -9.39]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_49_3" geometry={nodes.Palm_49_3.geometry} material={materials['World ap']} position={[-13.49, 88.25, -16.26]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_50_3" geometry={nodes.Palm_50_3.geometry} material={materials['World ap']} position={[-2.95, 86.58, -24.93]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_53_3" geometry={nodes.Palm_53_3.geometry} material={materials['World ap']} position={[-17.81, -27.9, -10.09]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_54_3" geometry={nodes.Palm_54_3.geometry} material={materials['World ap']} position={[-11.72, -38.75, -0.59]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_55_3" geometry={nodes.Palm_55_3.geometry} material={materials['World ap']} position={[-13.49, -59.24, 40.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_59_2" geometry={nodes.Palm_59_2.geometry} material={materials['World ap']} position={[-11.76, -63.36, 43.64]} rotation={[-1.69, 0.26, 0.81]} />
              <mesh name="Palm_5_4" geometry={nodes.Palm_5_4.geometry} material={materials['World ap']} position={[-10.37, 29.78, -35.92]} rotation={[-0.36, 0.51, -0.32]} />
              <mesh name="Palm_63_2" geometry={nodes.Palm_63_2.geometry} material={materials['World ap']} position={[-8.88, -58.84, 35.78]} rotation={[-1.61, 0.26, 0.45]} />
              <mesh name="Palm_69_2" geometry={nodes.Palm_69_2.geometry} material={materials['World ap']} position={[13.29, -28.14, -21.49]} rotation={[-0.62, 0.13, 0.27]} />
              <mesh name="Palm_7_4" geometry={nodes.Palm_7_4.geometry} material={materials['World ap']} position={[-0.29, 2.32, -29.92]} rotation={[-0.26, 0.49, 0.05]} />
              <mesh name="Palm_82_4" geometry={nodes.Palm_82_4.geometry} material={materials['World ap']} position={[-13.35, -49.14, 15.75]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_8_4" geometry={nodes.Palm_8_4.geometry} material={materials['World ap']} position={[7.44, -8.64, -32.8]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_90_4" geometry={nodes.Palm_90_4.geometry} material={materials['World ap']} position={[23.02, -62.09, 28.57]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_96_2" geometry={nodes.Palm_96_2.geometry} material={materials['World ap']} position={[-9.15, 121.5, 42.91]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_97_2" geometry={nodes.Palm_97_2.geometry} material={materials['World ap']} position={[-13.76, 119.68, 28.38]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_99_2" geometry={nodes.Palm_99_2.geometry} material={materials['World ap']} position={[2.88, 131.09, 57.25]} rotation={[1.58, -0.01, -0.16]} />
            </group>
            <group name="Australia" position={[72.22, -105.13, 60.74]} rotation={[-2.39, 0, -0.13]}>
              <mesh name="Palm" geometry={nodes.Palm.geometry} material={materials['World ap']} position={[4.06, -4.7, -8.2]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_10" geometry={nodes.Palm_10.geometry} material={materials['World ap']} position={[34.25, -8.73, 31.27]} rotation={[1.88, -0.79, -2.79]} />
              <mesh name="Palm_11" geometry={nodes.Palm_11.geometry} material={materials['World ap']} position={[11.38, 4.91, 34.49]} rotation={[2.04, -0.19, -2.25]} />
              <mesh name="Palm_13" geometry={nodes.Palm_13.geometry} material={materials['World ap']} position={[20.71, -1.13, 36.98]} rotation={[1.66, -0.55, -2.4]} />
              <mesh name="Palm_15" geometry={nodes.Palm_15.geometry} material={materials['World ap']} position={[15.22, 3.64, 32.1]} rotation={[1.64, -0.38, -1.9]} />
              <mesh name="Palm_17" geometry={nodes.Palm_17.geometry} material={materials['World ap']} position={[27.49, -12.77, -4.41]} rotation={[0.69, -0.72, 2.56]} />
              <mesh name="Palm_19" geometry={nodes.Palm_19.geometry} material={materials['World ap']} position={[18.87, -11.37, -8.59]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_20" geometry={nodes.Palm_20.geometry} material={materials['World ap']} position={[4.18, -7.13, -13.04]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_24" geometry={nodes.Palm_24.geometry} material={materials['World ap']} position={[-4.24, 7.45, 19.8]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_25" geometry={nodes.Palm_25.geometry} material={materials['World ap']} position={[-7.28, 7.97, 25.44]} rotation={[1.57, 0.26, -0.01]} />
              <mesh name="Palm_27" geometry={nodes.Palm_27.geometry} material={materials['World ap']} position={[-6.1, 8.93, 24]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_28" geometry={nodes.Palm_28.geometry} material={materials['World ap']} position={[-1.62, 2.81, 5.98]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_3" geometry={nodes.Palm_3.geometry} material={materials['World ap']} position={[-8.74, 0.74, -5.33]} rotation={[0.46, 0.13, 0.26]} />
              <mesh name="Palm_30" geometry={nodes.Palm_30.geometry} material={materials['World ap']} position={[26.34, -8.23, 0.57]} rotation={[1.36, -0.33, 2.59]} />
              <mesh name="Palm_4" geometry={nodes.Palm_4.geometry} material={materials['World ap']} position={[35.62, -13.87, 8.67]} rotation={[1.5, -0.89, -3.12]} />
              <mesh name="Palm_6" geometry={nodes.Palm_6.geometry} material={materials['World ap']} position={[36.18, -12.8, 15.81]} rotation={[0.99, -0.69, -3.02]} />
              <mesh name="Palm_8" geometry={nodes.Palm_8.geometry} material={materials['World ap']} position={[36.21, -8.83, 27.71]} rotation={[1.53, -0.69, -2.62]} />
              <mesh name="Palm_82" geometry={nodes.Palm_82.geometry} material={materials['World ap']} position={[-3.2, -4.07, -6.92]} rotation={[0.43, 0.24, 0.29]} />
              <mesh name="Palm_87" geometry={nodes.Palm_87.geometry} material={materials['World ap']} position={[-11.1, 5.15, 10.18]} rotation={[1.22, -0.11, 0.01]} />
              <mesh name="Palm_90" geometry={nodes.Palm_90.geometry} material={materials['World ap']} position={[-11.1, 3.17, 0.26]} rotation={[0.86, 0.24, 0.38]} />
              <mesh name="Palm_91" geometry={nodes.Palm_91.geometry} material={materials['World ap']} position={[-0.99, -6.13, -10.27]} rotation={[0.71, -0.25, 0.76]} />
            </group>
          </group>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['World ap']} position={[-0.96, 0.57, -9.25]} rotation={[0.06, 0.1, -0.01]}>
              <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap']} />
              <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <group name="water" position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]}>
                <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials.Water} />
              </group>
            </mesh>
          </group>
          <group name="Ships" position={[-9.84, -1.38, 9.08]} />
        </group>
        <group name="Rig002" position={[-0.09, 0.16, 1.03]} rotation={[-0.45, 1.22, 2.2]} scale={0.05}>
          <primitive object={nodes.root_7} />
          <skinnedMesh name="Hare_LOD0002" geometry={nodes.Hare_LOD0002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD0002.skeleton} morphTargetDictionary={nodes.Hare_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1002" geometry={nodes.Hare_LOD1002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD1002.skeleton} morphTargetDictionary={nodes.Hare_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2002" geometry={nodes.Hare_LOD2002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD2002.skeleton} morphTargetDictionary={nodes.Hare_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3002" geometry={nodes.Hare_LOD3002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD3002.skeleton} morphTargetDictionary={nodes.Hare_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig004" position={[-1.06, 0.02, -0.26]} rotation={[-0.22, -0.47, 0.71]} scale={0.05}>
          <primitive object={nodes.root} />
          <skinnedMesh name="Hare" geometry={nodes.Hare.geometry} material={materials['M_Hare.003']} skeleton={nodes.Hare.skeleton} morphTargetDictionary={nodes.Hare.morphTargetDictionary} morphTargetInfluences={nodes.Hare.morphTargetInfluences} />
        </group>
        <group name="Rig001" position={[-1.09, -0.01, -0.26]} rotation={[-0.17, -0.47, 0.89]} scale={0.03}>
          <primitive object={nodes.root_1} />
          <skinnedMesh name="Hare001" geometry={nodes.Hare001.geometry} material={materials['M_Hare.001']} skeleton={nodes.Hare001.skeleton} morphTargetDictionary={nodes.Hare001.morphTargetDictionary} morphTargetInfluences={nodes.Hare001.morphTargetInfluences} />
        </group>
        <group name="Rig003" position={[-0.56, 0.12, -0.9]} rotation={[-0.86, -0.58, 0.22]} scale={0.05}>
          <primitive object={nodes.root_8} />
          <skinnedMesh name="Hare_LOD0001" geometry={nodes.Hare_LOD0001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD0001.skeleton} morphTargetDictionary={nodes.Hare_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1001" geometry={nodes.Hare_LOD1001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD1001.skeleton} morphTargetDictionary={nodes.Hare_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2001" geometry={nodes.Hare_LOD2001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD2001.skeleton} morphTargetDictionary={nodes.Hare_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3001" geometry={nodes.Hare_LOD3001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD3001.skeleton} morphTargetDictionary={nodes.Hare_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig007" position={[-1.09, -0.23, 0.12]} rotation={[0.37, 0.28, 1.3]} scale={0.03}>
          <primitive object={nodes.root_2} />
          <skinnedMesh name="Puffin" geometry={nodes.Puffin.geometry} material={materials.M_Puffin} skeleton={nodes.Puffin.skeleton} morphTargetDictionary={nodes.Puffin.morphTargetDictionary} morphTargetInfluences={nodes.Puffin.morphTargetInfluences} />
        </group>
        <group name="Rig008" position={[-1.11, -0.25, 0.09]} rotation={[-2.84, 0.02, 1.7]} scale={0.03}>
          <primitive object={nodes.root_3} />
          <skinnedMesh name="Puffin001" geometry={nodes.Puffin001.geometry} material={materials['M_Puffin.001']} skeleton={nodes.Puffin001.skeleton} morphTargetDictionary={nodes.Puffin001.morphTargetDictionary} morphTargetInfluences={nodes.Puffin001.morphTargetInfluences} />
        </group>
        <group name="Rig009" position={[-1.11, -0.23, 0.05]} rotation={[-0.77, 0.1, 1.81]} scale={0.03}>
          <primitive object={nodes.root_4} />
          <skinnedMesh name="Puffin002" geometry={nodes.Puffin002.geometry} material={materials['M_Puffin.002']} skeleton={nodes.Puffin002.skeleton} morphTargetDictionary={nodes.Puffin002.morphTargetDictionary} morphTargetInfluences={nodes.Puffin002.morphTargetInfluences} />
        </group>
        <group name="Rig010" position={[-1.07, -0.18, 0.15]} rotation={[2.71, 0.25, 1.71]} scale={0.04}>
          <primitive object={nodes.root_9} />
          <skinnedMesh name="Puffin_LOD0" geometry={nodes.Puffin_LOD0.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD0.skeleton} morphTargetDictionary={nodes.Puffin_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD1" geometry={nodes.Puffin_LOD1.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD1.skeleton} morphTargetDictionary={nodes.Puffin_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD2" geometry={nodes.Puffin_LOD2.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD2.skeleton} morphTargetDictionary={nodes.Puffin_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD3" geometry={nodes.Puffin_LOD3.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD3.skeleton} morphTargetDictionary={nodes.Puffin_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig" position={[-0.9, 0.29, 0.43]} rotation={[0, 0, 0.93]} scale={0.05}>
          <primitive object={nodes.root_10} />
          <skinnedMesh name="Hare_LOD0" geometry={nodes.Hare_LOD0.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD0.skeleton} morphTargetDictionary={nodes.Hare_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1" geometry={nodes.Hare_LOD1.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD1.skeleton} morphTargetDictionary={nodes.Hare_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2" geometry={nodes.Hare_LOD2.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD2.skeleton} morphTargetDictionary={nodes.Hare_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3" geometry={nodes.Hare_LOD3.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD3.skeleton} morphTargetDictionary={nodes.Hare_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig013" position={[0.11, 0.3, 1.1]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_11} />
          <skinnedMesh name="Goat_LOD0" geometry={nodes.Goat_LOD0.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD0.skeleton} morphTargetDictionary={nodes.Goat_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1" geometry={nodes.Goat_LOD1.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD1.skeleton} morphTargetDictionary={nodes.Goat_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2" geometry={nodes.Goat_LOD2.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD2.skeleton} morphTargetDictionary={nodes.Goat_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3" geometry={nodes.Goat_LOD3.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD3.skeleton} morphTargetDictionary={nodes.Goat_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig020" position={[-0.43, -0.45, -0.85]} rotation={[-2.45, 0.91, 0.94]} scale={0.1}>
          <primitive object={nodes.root_12} />
          <skinnedMesh name="Marten_LOD0" geometry={nodes.Marten_LOD0.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD0.skeleton} morphTargetDictionary={nodes.Marten_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD1" geometry={nodes.Marten_LOD1.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD1.skeleton} morphTargetDictionary={nodes.Marten_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD2" geometry={nodes.Marten_LOD2.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD2.skeleton} morphTargetDictionary={nodes.Marten_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD3" geometry={nodes.Marten_LOD3.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD3.skeleton} morphTargetDictionary={nodes.Marten_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig012" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_5} />
          <skinnedMesh name="Bull" geometry={nodes.Bull.geometry} material={materials.M_Bull} skeleton={nodes.Bull.skeleton} morphTargetDictionary={nodes.Bull.morphTargetDictionary} morphTargetInfluences={nodes.Bull.morphTargetInfluences} />
        </group>
        <group name="Rig005" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_6} />
          <skinnedMesh name="Bull001" geometry={nodes.Bull001.geometry} material={materials['M_Bull.001']} skeleton={nodes.Bull001.skeleton} morphTargetDictionary={nodes.Bull001.morphTargetDictionary} morphTargetInfluences={nodes.Bull001.morphTargetInfluences} />
        </group>
        <group name="Rig006" position={[-1.06, -0.02, 0.15]} rotation={[2.8, -0.51, 1.88]} scale={0.07}>
          <primitive object={nodes.root_13} />
          <skinnedMesh name="Cougar_LOD0" geometry={nodes.Cougar_LOD0.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD0.skeleton} morphTargetDictionary={nodes.Cougar_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD1" geometry={nodes.Cougar_LOD1.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD1.skeleton} morphTargetDictionary={nodes.Cougar_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD2" geometry={nodes.Cougar_LOD2.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD2.skeleton} morphTargetDictionary={nodes.Cougar_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD3" geometry={nodes.Cougar_LOD3.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD3.skeleton} morphTargetDictionary={nodes.Cougar_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD3.morphTargetInfluences} />
        </group>
        <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.1']} position={[0.02, 0.17, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}
function EarthLv5(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/earth33/final5.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene"position={[-0.1, -0.15, -0.5]} rotation={[Math.PI / 0.1, 1.7, -0.2]} scale={1.7}>
      <group name="Planet" position={[0.03, 0.07, -0.04]} rotation={[Math.PI / 2, 0, -0.27]} scale={0.01}>
          <group name="Bushes" position={[-59.56, 45.9, -11.47]}>
            <mesh name="Bushes_11" geometry={nodes.Bushes_11.geometry} material={materials['World ap.511']} position={[-6.6, 40.7, 13.02]} rotation={[-2.98, 0, 0]} />
            <mesh name="Bushes_13" geometry={nodes.Bushes_13.geometry} material={materials['World ap.509']} position={[4.31, 45.97, 9.97]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_15" geometry={nodes.Bushes_15.geometry} material={materials['World ap.507']} position={[57.87, 63.82, 16.27]} rotation={[3.13, 0, 0]} />
            <mesh name="Bushes_17" geometry={nodes.Bushes_17.geometry} material={materials['World ap.505']} position={[118.94, 37.3, -5.98]} rotation={[3.14, 0, 0]} />
            <mesh name="Bushes_18" geometry={nodes.Bushes_18.geometry} material={materials['World ap.504']} position={[24.98, 55.42, 51.04]} rotation={[3.07, 0, 0]} />
            <mesh name="Bushes_19" geometry={nodes.Bushes_19.geometry} material={materials['World ap.503']} position={[23.11, 36.4, 77.11]} rotation={[-2.75, 0, 0]} />
            <mesh name="Bushes_2" geometry={nodes.Bushes_2.geometry} material={materials['World ap.520']} position={[-41.31, -39.94, -18.51]} rotation={[-Math.PI, 0, 0]} />
            <mesh name="Bushes_21" geometry={nodes.Bushes_21.geometry} material={materials['World ap.523']} position={[-35.77, 1.94, -3.31]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_23" geometry={nodes.Bushes_23.geometry} material={materials['World ap.525']} position={[-13.92, 34.19, 25.78]} rotation={[-1.99, 0, 0]} />
            <mesh name="Bushes_3" geometry={nodes.Bushes_3.geometry} material={materials['World ap.519']} position={[-38.39, -31.39, -24.85]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_5" geometry={nodes.Bushes_5.geometry} material={materials['World ap.517']} position={[-37.28, -61.26, -19.51]} rotation={[-2.7, 0, 0]} />
            <mesh name="Bushes_7" geometry={nodes.Bushes_7.geometry} material={materials['World ap.515']} position={[-37.32, -73.79, -15.13]} rotation={[-2.87, 0, 0]} />
            <mesh name="Bushes_9" geometry={nodes.Bushes_9.geometry} material={materials['World ap.513']} position={[-33.69, -8.8, -26.31]} rotation={[-2.19, 0, 0]} />
          </group>
          <group name="Camping" position={[0.24, 13.39, -16.17]} />
          <group name="Firtrees" position={[-31.1, 65.19, -52.69]}>
            <mesh name="Firtree_1" geometry={nodes.Firtree_1.geometry} material={materials['World ap']} position={[49.08, 17.34, 1.04]} rotation={[0.71, -0.16, 0.83]} />
            <mesh name="Firtree_10" geometry={nodes.Firtree_10.geometry} material={materials['World ap']} position={[55.57, 25.55, 11.04]} rotation={[1.01, -0.06, -1.63]} />
            <mesh name="Firtree_100" geometry={nodes.Firtree_100.geometry} material={materials['World ap']} position={[68.64, -147.79, 13.15]} rotation={[-0.62, -0.35, -0.05]} />
            <mesh name="Firtree_102" geometry={nodes.Firtree_102.geometry} material={materials['World ap']} position={[96.3, -137.66, 42.75]} rotation={[-1.42, -0.76, -1.33]} />
            <mesh name="Firtree_103" geometry={nodes.Firtree_103.geometry} material={materials['World ap']} position={[89.76, -141.95, 35.76]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_104" geometry={nodes.Firtree_104.geometry} material={materials['World ap']} position={[88.03, -141.59, 47.93]} rotation={[-1.57, -0.83, -1.37]} />
            <mesh name="Firtree_107" geometry={nodes.Firtree_107.geometry} material={materials['World ap']} position={[89.63, -124.84, 10.73]} rotation={[-0.76, -0.52, -0.56]} />
            <mesh name="Firtree_109" geometry={nodes.Firtree_109.geometry} material={materials['World ap']} position={[105.98, -112.5, 17.17]} rotation={[-0.9, -0.96, -0.65]} />
            <mesh name="Firtree_11" geometry={nodes.Firtree_11.geometry} material={materials['World ap']} position={[18.44, 8.04, -13.86]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_110" geometry={nodes.Firtree_110.geometry} material={materials['World ap']} position={[101.09, -109.53, 2.74]} rotation={[-0.84, -0.67, -0.55]} />
            <mesh name="Firtree_112" geometry={nodes.Firtree_112.geometry} material={materials['World ap']} position={[47.47, -144.51, 1.34]} rotation={[-1.14, -0.2, 1.82]} />
            <mesh name="Firtree_114" geometry={nodes.Firtree_114.geometry} material={materials['World ap']} position={[95.74, -127.95, 15.94]} rotation={[-0.97, -0.63, -1.71]} />
            <mesh name="Firtree_116" geometry={nodes.Firtree_116.geometry} material={materials['World ap']} position={[-27.63, -142.42, 20.93]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_117" geometry={nodes.Firtree_117.geometry} material={materials['World ap']} position={[-20.01, -149.08, 23.67]} rotation={[-1.14, 0.4, -2.12]} />
            <mesh name="Firtree_118" geometry={nodes.Firtree_118.geometry} material={materials['World ap']} position={[29.99, -160.44, 37.55]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_119" geometry={nodes.Firtree_119.geometry} material={materials['World ap']} position={[19.47, -155.91, 19.14]} rotation={[-1.45, 0.26, -1.17]} />
            <mesh name="Firtree_12" geometry={nodes.Firtree_12.geometry} material={materials['World ap']} position={[35, 12.13, -9.99]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_120" geometry={nodes.Firtree_120.geometry} material={materials['World ap']} position={[23.48, -156.74, 17.29]} rotation={[-1.31, 0.14, -0.68]} />
            <mesh name="Firtree_121" geometry={nodes.Firtree_121.geometry} material={materials['World ap']} position={[-1.97, -156.84, 33.77]} rotation={[-1.45, 0.26, -0.65]} />
            <mesh name="Firtree_122" geometry={nodes.Firtree_122.geometry} material={materials['World ap']} position={[-4.78, -154.54, 25.41]} rotation={[-0.87, 0.28, -0.89]} />
            <mesh name="Firtree_124" geometry={nodes.Firtree_124.geometry} material={materials['World ap']} position={[91.04, -136.01, 19.61]} rotation={[-0.7, -0.59, -0.36]} />
            <mesh name="Firtree_126" geometry={nodes.Firtree_126.geometry} material={materials['World ap']} position={[105.41, -125.95, 28.96]} rotation={[-0.73, -0.72, -1.43]} />
            <mesh name="Firtree_128" geometry={nodes.Firtree_128.geometry} material={materials['World ap']} position={[47.72, -149.66, 7.83]} rotation={[-1.3, -0.22, 1.76]} />
            <mesh name="Firtree_129" geometry={nodes.Firtree_129.geometry} material={materials['World ap']} position={[14.13, -158.94, 27.2]} rotation={[-1.48, 0.05, -1.98]} />
            <mesh name="Firtree_131" geometry={nodes.Firtree_131.geometry} material={materials['World ap']} position={[19.47, -161.26, 50.91]} rotation={[-1.68, 0.12, 1.85]} />
            <mesh name="Firtree_132" geometry={nodes.Firtree_132.geometry} material={materials['World ap']} position={[19.86, -158.21, 38.59]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_134" geometry={nodes.Firtree_134.geometry} material={materials['World ap']} position={[-5.5, -156.92, 40.82]} rotation={[-1.38, 0.41, -2.01]} />
            <mesh name="Firtree_135" geometry={nodes.Firtree_135.geometry} material={materials['World ap']} position={[-17.42, -152.15, 31.28]} rotation={[-1.43, 0.59, -2.05]} />
            <mesh name="Firtree_136" geometry={nodes.Firtree_136.geometry} material={materials['World ap']} position={[21.09, -148.06, 2.5]} rotation={[-0.85, -0.15, -1.87]} />
            <mesh name="Firtree_138" geometry={nodes.Firtree_138.geometry} material={materials['World ap']} position={[4.81, -154.88, 27.29]} rotation={[-1.45, 0.26, -1.99]} />
            <mesh name="Firtree_139" geometry={nodes.Firtree_139.geometry} material={materials['World ap']} position={[15.67, -151.62, 10.95]} rotation={[-1.06, 0.07, -2.05]} />
            <mesh name="Firtree_14" geometry={nodes.Firtree_14.geometry} material={materials['World ap']} position={[8.41, 7.08, -15.37]} rotation={[0.71, 0.32, 0.89]} />
            <mesh name="Firtree_141" geometry={nodes.Firtree_141.geometry} material={materials['World ap']} position={[25.5, -149.91, 7.87]} rotation={[-1.16, -0.07, -0.69]} />
            <mesh name="Firtree_143" geometry={nodes.Firtree_143.geometry} material={materials['World ap']} position={[19.32, -144.08, -3.53]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_144" geometry={nodes.Firtree_144.geometry} material={materials['World ap']} position={[29.29, -143.1, -4.57]} rotation={[-0.87, 0.09, -0.69]} />
            <mesh name="Firtree_146" geometry={nodes.Firtree_146.geometry} material={materials['World ap']} position={[53.46, -138.09, -1.51]} rotation={[-0.53, -0.21, -0.66]} />
            <mesh name="Firtree_147" geometry={nodes.Firtree_147.geometry} material={materials['World ap']} position={[35.63, -137.72, -7.72]} rotation={[-0.47, -0.01, -0.53]} />
            <mesh name="Firtree_148" geometry={nodes.Firtree_148.geometry} material={materials['World ap']} position={[-8.69, -154.04, 31.28]} rotation={[-1.35, 0.25, -2.11]} />
            <mesh name="Firtree_15" geometry={nodes.Firtree_15.geometry} material={materials['World ap']} position={[-29.06, 15.77, 21.21]} rotation={[0.78, 0.69, 1.01]} />
            <mesh name="Firtree_150" geometry={nodes.Firtree_150.geometry} material={materials['World ap']} position={[81.94, -124.82, 0.04]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_151" geometry={nodes.Firtree_151.geometry} material={materials['World ap']} position={[88.86, -122.05, 1.82]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_154" geometry={nodes.Firtree_154.geometry} material={materials['World ap']} position={[111.09, -105.47, 16.22]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_155" geometry={nodes.Firtree_155.geometry} material={materials['World ap']} position={[113.33, -98.53, 15.36]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_157" geometry={nodes.Firtree_157.geometry} material={materials['World ap']} position={[119.16, -98.68, 25.48]} rotation={[-0.92, -1.03, -0.89]} />
            <mesh name="Firtree_159" geometry={nodes.Firtree_159.geometry} material={materials['World ap']} position={[121.23, -95.87, 29.26]} rotation={[-0.46, -1.19, -0.47]} />
            <mesh name="Firtree_160" geometry={nodes.Firtree_160.geometry} material={materials['World ap']} position={[73.64, -145.32, 9.39]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_162" geometry={nodes.Firtree_162.geometry} material={materials['World ap']} position={[77.42, -135.51, 7.26]} rotation={[-0.86, -0.67, -0.8]} />
            <mesh name="Firtree_164" geometry={nodes.Firtree_164.geometry} material={materials['World ap']} position={[112.9, -114.9, 32.66]} rotation={[-1.26, -0.89, -1.23]} />
            <mesh name="Firtree_165" geometry={nodes.Firtree_165.geometry} material={materials['World ap']} position={[120.95, -99.13, 33.97]} rotation={[-0.89, -1.22, -0.91]} />
            <mesh name="Firtree_167" geometry={nodes.Firtree_167.geometry} material={materials['World ap']} position={[117.99, -93.71, 21.84]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_168" geometry={nodes.Firtree_168.geometry} material={materials['World ap']} position={[97.62, -135.38, 30.84]} rotation={[-1.01, -0.73, -0.87]} />
            <mesh name="Firtree_17" geometry={nodes.Firtree_17.geometry} material={materials['World ap']} position={[-17.22, 14.96, 5.26]} rotation={[0.66, 0.61, 2.14]} />
            <mesh name="Firtree_170" geometry={nodes.Firtree_170.geometry} material={materials['World ap']} position={[84.18, -137, 17.53]} rotation={[-1.16, -0.53, -1.77]} />
            <mesh name="Firtree_172" geometry={nodes.Firtree_172.geometry} material={materials['World ap']} position={[12.32, -139.3, -6.15]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_173" geometry={nodes.Firtree_173.geometry} material={materials['World ap']} position={[20.1, -138.6, -8.85]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_175" geometry={nodes.Firtree_175.geometry} material={materials['World ap']} position={[-22.97, -147.12, 27.75]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_177" geometry={nodes.Firtree_177.geometry} material={materials['World ap']} position={[-49.09, -11.11, 11.3]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_179" geometry={nodes.Firtree_179.geometry} material={materials['World ap']} position={[-31.3, 14.65, 28.55]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_18" geometry={nodes.Firtree_18.geometry} material={materials['World ap']} position={[41.8, 2.87, -17.81]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_180" geometry={nodes.Firtree_180.geometry} material={materials['World ap']} position={[92.25, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_182" geometry={nodes.Firtree_182.geometry} material={materials['World ap']} position={[30.1, 31.71, 18.16]} rotation={[1.21, -0.24, -1.49]} />
            <mesh name="Firtree_183" geometry={nodes.Firtree_183.geometry} material={materials['World ap']} position={[15.51, 36.77, 12.72]} rotation={[1.2, -0.12, -1.49]} />
            <mesh name="Firtree_185" geometry={nodes.Firtree_185.geometry} material={materials['World ap']} position={[-25.34, 20.33, 16.84]} rotation={[0.98, 0.75, 1.9]} />
            <mesh name="Firtree_187" geometry={nodes.Firtree_187.geometry} material={materials['World ap']} position={[78.33, -149.93, 30.98]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_188" geometry={nodes.Firtree_188.geometry} material={materials['World ap']} position={[58.25, -158.69, 28.06]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_189" geometry={nodes.Firtree_189.geometry} material={materials['World ap']} position={[75.76, -152.49, 41.56]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_19" geometry={nodes.Firtree_19.geometry} material={materials['World ap']} position={[53, 2.14, -16.73]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_190" geometry={nodes.Firtree_190.geometry} material={materials['World ap']} position={[50.34, -163.53, 40.63]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_192" geometry={nodes.Firtree_192.geometry} material={materials['World ap']} position={[91.89, -5.81, 5.22]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_2" geometry={nodes.Firtree_2.geometry} material={materials['World ap']} position={[30.5, -0.09, -18.25]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_20" geometry={nodes.Firtree_20.geometry} material={materials['World ap']} position={[54.38, 11.91, -7.34]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_21" geometry={nodes.Firtree_21.geometry} material={materials['World ap']} position={[22.88, 4.38, -17.57]} rotation={[0.65, 0.03, 2.17]} />
            <mesh name="Firtree_22" geometry={nodes.Firtree_22.geometry} material={materials['World ap']} position={[29.08, 9.47, -14.07]} rotation={[0.75, -0.11, 1.66]} />
            <mesh name="Firtree_23" geometry={nodes.Firtree_23.geometry} material={materials['World ap']} position={[25.17, 20.84, 3.4]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_25" geometry={nodes.Firtree_25.geometry} material={materials['World ap']} position={[75.15, -10.88, -15.56]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_28" geometry={nodes.Firtree_28.geometry} material={materials['World ap']} position={[-32.26, 5.27, 14.87]} rotation={[0.88, 0.65, 1.65]} />
            <mesh name="Firtree_3" geometry={nodes.Firtree_3.geometry} material={materials['World ap']} position={[46.08, 7.4, -8.93]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_30" geometry={nodes.Firtree_30.geometry} material={materials['World ap']} position={[-34.07, 8.94, 23.04]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_32" geometry={nodes.Firtree_32.geometry} material={materials['World ap']} position={[-38.43, 1.09, 17.1]} rotation={[1.12, 0.79, 1.69]} />
            <mesh name="Firtree_33" geometry={nodes.Firtree_33.geometry} material={materials['World ap']} position={[-43.78, -4.37, 13.1]} rotation={[1.17, 0.8, 1.61]} />
            <mesh name="Firtree_34" geometry={nodes.Firtree_34.geometry} material={materials['World ap']} position={[-23.02, 2.21, 2.18]} rotation={[0.66, 0.52, 1.97]} />
            <mesh name="Firtree_35" geometry={nodes.Firtree_35.geometry} material={materials['World ap']} position={[10.25, 16.18, -11.14]} rotation={[0.61, 0.13, -0.17]} />
            <mesh name="Firtree_38" geometry={nodes.Firtree_38.geometry} material={materials['World ap']} position={[-51.65, -23.49, 3.49]} rotation={[0.51, 0.82, 2.21]} />
            <mesh name="Firtree_40" geometry={nodes.Firtree_40.geometry} material={materials['World ap']} position={[-51.97, -30.39, 1.96]} rotation={[0.27, 0.74, 2.53]} />
            <mesh name="Firtree_42" geometry={nodes.Firtree_42.geometry} material={materials['World ap']} position={[-55.56, -27.66, 5.23]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_43" geometry={nodes.Firtree_43.geometry} material={materials['World ap']} position={[-54.57, -18.99, 8.73]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_45" geometry={nodes.Firtree_45.geometry} material={materials['World ap']} position={[-6.21, 13.9, -6.04]} rotation={[0.6, 0.58, -0.27]} />
            <mesh name="Firtree_46" geometry={nodes.Firtree_46.geometry} material={materials['World ap']} position={[-57.99, -61.58, 5.65]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_47" geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-35.47, -0.67, 9.39]} rotation={[0.89, 0.51, 1.64]} />
            <mesh name="Firtree_5" geometry={nodes.Firtree_5.geometry} material={materials['World ap']} position={[71.71, 10.57, -0.04]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_50" geometry={nodes.Firtree_50.geometry} material={materials['World ap']} position={[33.77, 24.3, 12.72]} rotation={[1, -0.4, 0.91]} />
            <mesh name="Firtree_51" geometry={nodes.Firtree_51.geometry} material={materials['World ap']} position={[-12.09, 19.81, 3.42]} rotation={[0.52, 0.65, 0.86]} />
            <mesh name="Firtree_52" geometry={nodes.Firtree_52.geometry} material={materials['World ap']} position={[-6.36, 2.58, -8.76]} rotation={[0.63, 0.55, 0.67]} />
            <mesh name="Firtree_53" geometry={nodes.Firtree_53.geometry} material={materials['World ap']} position={[-45.76, -18.1, 2.96]} rotation={[0.59, 0.44, 0.76]} />
            <mesh name="Firtree_54" geometry={nodes.Firtree_54.geometry} material={materials['World ap']} position={[-60.97, -62.25, 11.37]} rotation={[0.11, 1.05, 1.49]} />
            <mesh name="Firtree_55" geometry={nodes.Firtree_55.geometry} material={materials['World ap']} position={[-61.92, -72.12, 13.63]} rotation={[-0.29, 1.25, 1.95]} />
            <mesh name="Firtree_56" geometry={nodes.Firtree_56.geometry} material={materials['World ap']} position={[-59.43, -74.92, 8.99]} rotation={[0.04, 1.02, 1.61]} />
            <mesh name="Firtree_57" geometry={nodes.Firtree_57.geometry} material={materials['World ap']} position={[-60.61, -76.72, 11.06]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_58" geometry={nodes.Firtree_58.geometry} material={materials['World ap']} position={[-63.26, -66.68, 12.84]} rotation={[0.29, 1.11, 2.72]} />
            <mesh name="Firtree_59" geometry={nodes.Firtree_59.geometry} material={materials['World ap']} position={[-61.48, -76.24, 17.68]} rotation={[-0.58, 1.19, -2.57]} />
            <mesh name="Firtree_6" geometry={nodes.Firtree_6.geometry} material={materials['World ap']} position={[77.85, -3.43, -10.09]} rotation={[0.62, -0.43, 0.75]} />
            <mesh name="Firtree_60" geometry={nodes.Firtree_60.geometry} material={materials['World ap']} position={[-61.84, -81.68, 12.85]} rotation={[-0.86, 1.15, -2.37]} />
            <mesh name="Firtree_61" geometry={nodes.Firtree_61.geometry} material={materials['World ap']} position={[43.94, 25.17, 8.05]} rotation={[1.12, -0.08, -0.46]} />
            <mesh name="Firtree_62" geometry={nodes.Firtree_62.geometry} material={materials['World ap']} position={[68.44, 19.36, 2.33]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_63" geometry={nodes.Firtree_63.geometry} material={materials['World ap']} position={[83.67, 4.75, 0.55]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_64" geometry={nodes.Firtree_64.geometry} material={materials['World ap']} position={[84.08, -9.69, -6.41]} rotation={[0.65, -0.58, -0.11]} />
            <mesh name="Firtree_65" geometry={nodes.Firtree_65.geometry} material={materials['World ap']} position={[59.05, -1.03, -15.54]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_67" geometry={nodes.Firtree_67.geometry} material={materials['World ap']} position={[19.25, 10.38, -1.46]} rotation={[0.76, 0.13, 0.98]} />
            <mesh name="Firtree_69" geometry={nodes.Firtree_69.geometry} material={materials['World ap']} position={[-6.61, 9.17, -9.28]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_71" geometry={nodes.Firtree_71.geometry} material={materials['World ap']} position={[-61.21, -56.38, 9.56]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_72" geometry={nodes.Firtree_72.geometry} material={materials['World ap']} position={[-66.63, -63.47, 18.3]} rotation={[-0.06, 1.16, 2.99]} />
            <mesh name="Firtree_73" geometry={nodes.Firtree_73.geometry} material={materials['World ap']} position={[-57.86, -53.97, 4.48]} rotation={[-0.04, 0.88, 2.97]} />
            <mesh name="Firtree_74" geometry={nodes.Firtree_74.geometry} material={materials['World ap']} position={[-62.99, -53.6, 14.82]} rotation={[-0.06, 1.12, 2.99]} />
            <mesh name="Firtree_75" geometry={nodes.Firtree_75.geometry} material={materials['World ap']} position={[-69.89, -53.97, 20.42]} rotation={[-0.25, 1.04, -1.89]} />
            <mesh name="Firtree_76" geometry={nodes.Firtree_76.geometry} material={materials['World ap']} position={[3.91, -0.77, -16.99]} rotation={[0.66, 0.29, -1.57]} />
            <mesh name="Firtree_77" geometry={nodes.Firtree_77.geometry} material={materials['World ap']} position={[21.46, -1.57, -22.04]} rotation={[0.53, 0.03, 2.17]} />
            <mesh name="Firtree_80" geometry={nodes.Firtree_80.geometry} material={materials['World ap']} position={[77.95, -19, -14.51]} rotation={[0.44, -0.53, 0.22]} />
            <mesh name="Firtree_81" geometry={nodes.Firtree_81.geometry} material={materials['World ap']} position={[72.02, 4.81, -6.63]} rotation={[0.6, -0.32, 0.05]} />
            <mesh name="Firtree_83" geometry={nodes.Firtree_83.geometry} material={materials['World ap']} position={[52.53, 7.31, -10.78]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_84" geometry={nodes.Firtree_84.geometry} material={materials['World ap']} position={[67.86, 0.03, -10.31]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_85" geometry={nodes.Firtree_85.geometry} material={materials['World ap']} position={[69.72, -9.31, -17.67]} rotation={[0.29, -0.07, 0.66]} />
            <mesh name="Firtree_86" geometry={nodes.Firtree_86.geometry} material={materials['World ap']} position={[66.17, 25.68, 10.25]} rotation={[0.83, -0.35, -1.96]} />
            <mesh name="Firtree_87" geometry={nodes.Firtree_87.geometry} material={materials['World ap']} position={[-16.4, 21.85, 6.13]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_89" geometry={nodes.Firtree_89.geometry} material={materials['World ap']} position={[-56.81, -49.67, 5.84]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_9" geometry={nodes.Firtree_9.geometry} material={materials['World ap']} position={[32.65, 17.22, -0.61]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_90" geometry={nodes.Firtree_90.geometry} material={materials['World ap']} position={[-47.03, -26.86, -1.51]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_91" geometry={nodes.Firtree_91.geometry} material={materials['World ap']} position={[-51.27, -8.26, 18.84]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_92" geometry={nodes.Firtree_92.geometry} material={materials['World ap']} position={[-56.29, -33.98, 4]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_94" geometry={nodes.Firtree_94.geometry} material={materials['World ap']} position={[100.81, -115.34, 11.14]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_96" geometry={nodes.Firtree_96.geometry} material={materials['World ap']} position={[58.51, -147.99, 13.82]} rotation={[-1.16, -0.36, 3.09]} />
            <mesh name="Firtree_97" geometry={nodes.Firtree_97.geometry} material={materials['World ap']} position={[96.41, -119.21, 6.79]} rotation={[-0.67, -0.6, -0.64]} />
            <mesh name="Firtree_99" geometry={nodes.Firtree_99.geometry} material={materials['World ap']} position={[96.56, -136.96, 36.08]} rotation={[-1.3, -0.79, -1.27]} />
          </group>
          <group name="Palms" position={[-68.62, 82.82, 15.93]} rotation={[2.1, 0.5, 1.38]}>
            <group name="Africa" position={[68.89, 73.37, 49.11]} rotation={[0.26, -0.67, 0.01]}>
              <mesh name="Palm_10_3" geometry={nodes.Palm_10_3.geometry} material={materials['World ap']} position={[-21.32, 22.37, 46.56]} rotation={[1.05, 0.85, -0.29]} />
              <mesh name="Palm_11_3" geometry={nodes.Palm_11_3.geometry} material={materials['World ap']} position={[3.38, 21.43, 18.13]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_3" geometry={nodes.Palm_12_3.geometry} material={materials['World ap']} position={[9.39, 22.77, 21.96]} rotation={[1.23, -0.09, -1.58]} />
              <mesh name="Palm_14_3" geometry={nodes.Palm_14_3.geometry} material={materials['World ap']} position={[27.71, 27.28, 40.3]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_3" geometry={nodes.Palm_15_3.geometry} material={materials['World ap']} position={[17.09, 18.71, 26.67]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_16_3" geometry={nodes.Palm_16_3.geometry} material={materials['World ap']} position={[9.83, 25.46, 30.64]} rotation={[1.15, -0.33, -0.34]} />
              <mesh name="Palm_17_3" geometry={nodes.Palm_17_3.geometry} material={materials['World ap']} position={[15.03, 19.78, 22.07]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_20_3" geometry={nodes.Palm_20_3.geometry} material={materials['World ap']} position={[17.89, 13.31, 8.13]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_23_3" geometry={nodes.Palm_23_3.geometry} material={materials['World ap']} position={[-33.19, 0.21, 17.17]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_24_3" geometry={nodes.Palm_24_3.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_3" geometry={nodes.Palm_25_3.geometry} material={materials['World ap']} position={[20.42, 27.91, 36.77]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_3" geometry={nodes.Palm_26_3.geometry} material={materials['World ap']} position={[18.13, 3.44, 0.72]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_3" geometry={nodes.Palm_27_3.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_3" geometry={nodes.Palm_28_3.geometry} material={materials['World ap']} position={[28.17, -9.24, -5.95]} rotation={[1.01, -0.86, 0.94]} />
              <mesh name="Palm_2_4" geometry={nodes.Palm_2_4.geometry} material={materials['World ap']} position={[23.43, -0.6, -3.57]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_3" geometry={nodes.Palm_30_3.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_32_2" geometry={nodes.Palm_32_2.geometry} material={materials['World ap']} position={[-13.49, 25.12, 47.26]} rotation={[0.9, 0.36, -0.21]} />
              <mesh name="Palm_33_2" geometry={nodes.Palm_33_2.geometry} material={materials['World ap']} position={[-17.55, 23.96, 49.11]} rotation={[1.68, 0.48, -0.43]} />
              <mesh name="Palm_34_2" geometry={nodes.Palm_34_2.geometry} material={materials['World ap']} position={[-19.74, -0.58, 5.87]} rotation={[0.52, 0.92, -0.08]} />
              <mesh name="Palm_35_2" geometry={nodes.Palm_35_2.geometry} material={materials['World ap']} position={[-13.45, 24.64, 53.09]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36_2" geometry={nodes.Palm_36_2.geometry} material={materials['World ap']} position={[-20.51, 24.23, 49.63]} rotation={[1.62, 0.74, -0.19]} />
              <mesh name="Palm_37_2" geometry={nodes.Palm_37_2.geometry} material={materials['World ap']} position={[-3.36, 28.29, 51.92]} rotation={[2, 0.17, -0.72]} />
              <mesh name="Palm_38_2" geometry={nodes.Palm_38_2.geometry} material={materials['World ap']} position={[-23.26, 21.37, 43.92]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_39_2" geometry={nodes.Palm_39_2.geometry} material={materials['World ap']} position={[-40.85, 1.14, 39.29]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_3_3" geometry={nodes.Palm_3_3.geometry} material={materials['World ap']} position={[15.01, 6.9, 0.26]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_3_4" geometry={nodes.Palm_3_4.geometry} material={materials['World ap']} position={[-14.08, -0.89, -0.25]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40_2" geometry={nodes.Palm_40_2.geometry} material={materials['World ap']} position={[-35.7, 11.31, 38.14]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_41_2" geometry={nodes.Palm_41_2.geometry} material={materials['World ap']} position={[-42.85, -1, 35.96]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_42_2" geometry={nodes.Palm_42_2.geometry} material={materials['World ap']} position={[-39.49, -1.78, 19.19]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_43_2" geometry={nodes.Palm_43_2.geometry} material={materials['World ap']} position={[-42.86, -2.5, 23]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_44_2" geometry={nodes.Palm_44_2.geometry} material={materials['World ap']} position={[-47.57, -6.66, 27.07]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_45_2" geometry={nodes.Palm_45_2.geometry} material={materials['World ap']} position={[-49, -11.96, 24.28]} rotation={[0.78, 0.89, -0.25]} />
              <mesh name="Palm_46_2" geometry={nodes.Palm_46_2.geometry} material={materials['World ap']} position={[4.56, 29.69, 48.51]} rotation={[1.26, -0.01, -0.32]} />
              <mesh name="Palm_48_2" geometry={nodes.Palm_48_2.geometry} material={materials['World ap']} position={[-43.37, -1.41, 32.08]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_49_2" geometry={nodes.Palm_49_2.geometry} material={materials['World ap']} position={[-42.65, -2.77, 29.47]} rotation={[0.76, 0.91, -0.3]} />
              <mesh name="Palm_50_2" geometry={nodes.Palm_50_2.geometry} material={materials['World ap']} position={[-0.93, 15.13, 12.05]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_51_2" geometry={nodes.Palm_51_2.geometry} material={materials['World ap']} position={[4.74, 21.9, 16]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_52_2" geometry={nodes.Palm_52_2.geometry} material={materials['World ap']} position={[-15.6, -2.2, 2.14]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_53_2" geometry={nodes.Palm_53_2.geometry} material={materials['World ap']} position={[-8.65, -5.18, -11.32]} rotation={[0.94, 0.53, -0.23]} />
              <mesh name="Palm_54_2" geometry={nodes.Palm_54_2.geometry} material={materials['World ap']} position={[1.47, 20.88, 15.56]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_55_2" geometry={nodes.Palm_55_2.geometry} material={materials['World ap']} position={[9.27, 25.49, 27]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_56_2" geometry={nodes.Palm_56_2.geometry} material={materials['World ap']} position={[8.67, 22.7, 23.21]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_57_2" geometry={nodes.Palm_57_2.geometry} material={materials['World ap']} position={[-7.07, -4.42, -5.71]} rotation={[0.15, 0.78, 0.17]} />
              <mesh name="Palm_5_3" geometry={nodes.Palm_5_3.geometry} material={materials['World ap']} position={[-10.07, 6.41, 9.26]} rotation={[1.14, 0.55, -0.23]} />
              <mesh name="Palm_6_3" geometry={nodes.Palm_6_3.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_81_3" geometry={nodes.Palm_81_3.geometry} material={materials['World ap']} position={[-7.51, -3.03, -2.06]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_82_3" geometry={nodes.Palm_82_3.geometry} material={materials['World ap']} position={[-2.09, 6.81, 1.41]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_86_3" geometry={nodes.Palm_86_3.geometry} material={materials['World ap']} position={[8.57, 5.79, -0.2]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_87_3" geometry={nodes.Palm_87_3.geometry} material={materials['World ap']} position={[-4.39, 9.09, 8.33]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_88_2" geometry={nodes.Palm_88_2.geometry} material={materials['World ap']} position={[3.83, 11.71, 5.27]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_3" geometry={nodes.Palm_89_3.geometry} material={materials['World ap']} position={[-10.33, 4.11, 2.8]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_8_3" geometry={nodes.Palm_8_3.geometry} material={materials['World ap']} position={[-26.69, 0.7, 9.89]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_91_3" geometry={nodes.Palm_91_3.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_9_3" geometry={nodes.Palm_9_3.geometry} material={materials['World ap']} position={[-3.81, 12.33, 11.07]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="America" position={[121.64, 40.46, 118.25]} rotation={[0.68, -0.89, -0.51]}>
              <mesh name="Palm_10_2" geometry={nodes.Palm_10_2.geometry} material={materials['World ap']} position={[1.09, 32.77, 62.86]} rotation={[1.52, 0.11, -0.41]} />
              <mesh name="Palm_11_2" geometry={nodes.Palm_11_2.geometry} material={materials['World ap']} position={[1.17, 16.92, 21.54]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_13_2" geometry={nodes.Palm_13_2.geometry} material={materials['World ap']} position={[20.58, 19.69, 35.5]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_14_2" geometry={nodes.Palm_14_2.geometry} material={materials['World ap']} position={[28.47, 20.35, 41.66]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_17_2" geometry={nodes.Palm_17_2.geometry} material={materials['World ap']} position={[15.11, 14.06, 22.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_19_2" geometry={nodes.Palm_19_2.geometry} material={materials['World ap']} position={[14.6, 5.34, 7.67]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_1_2" geometry={nodes.Palm_1_2.geometry} material={materials['World ap']} position={[15.13, -16.44, -8.07]} rotation={[0.21, -0.1, 0.65]} />
              <mesh name="Palm_20_2" geometry={nodes.Palm_20_2.geometry} material={materials['World ap']} position={[19.1, -0.7, 3.92]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_24_2" geometry={nodes.Palm_24_2.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_2" geometry={nodes.Palm_25_2.geometry} material={materials['World ap']} position={[20.85, 21.4, 37.95]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_2" geometry={nodes.Palm_26_2.geometry} material={materials['World ap']} position={[18.25, -4.72, 1.99]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_2" geometry={nodes.Palm_27_2.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_2" geometry={nodes.Palm_28_2.geometry} material={materials['World ap']} position={[-1.08, -28.79, -16.33]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_29_2" geometry={nodes.Palm_29_2.geometry} material={materials['World ap']} position={[10.77, -19.68, -13.64]} rotation={[0.15, -0.01, -0.1]} />
              <mesh name="Palm_2_2" geometry={nodes.Palm_2_2.geometry} material={materials['World ap']} position={[15.13, -1.26, 1.52]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_2_3" geometry={nodes.Palm_2_3.geometry} material={materials['World ap']} position={[18.58, -12.3, -4.65]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_2" geometry={nodes.Palm_30_2.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_31" geometry={nodes.Palm_31.geometry} material={materials['World ap']} position={[7.09, -24.83, -15.76]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_33" geometry={nodes.Palm_33.geometry} material={materials['World ap']} position={[-9.88, 31.04, 52.08]} rotation={[1.29, 0.28, -0.41]} />
              <mesh name="Palm_35" geometry={nodes.Palm_35.geometry} material={materials['World ap']} position={[-5.33, 31.26, 53.11]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36" geometry={nodes.Palm_36.geometry} material={materials['World ap']} position={[-16.15, 32.22, 57.59]} rotation={[1.03, 0.09, -0.48]} />
              <mesh name="Palm_37" geometry={nodes.Palm_37.geometry} material={materials['World ap']} position={[-16.05, 29.53, 55.34]} rotation={[0.31, 0.54, -0.78]} />
              <mesh name="Palm_39" geometry={nodes.Palm_39.geometry} material={materials['World ap']} position={[31.58, 24.81, 90.81]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_42" geometry={nodes.Palm_42.geometry} material={materials['World ap']} position={[-2, -24.98, -15.85]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_43" geometry={nodes.Palm_43.geometry} material={materials['World ap']} position={[-4.92, -21.9, -11.27]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_44" geometry={nodes.Palm_44.geometry} material={materials['World ap']} position={[0.96, -19.03, -13.48]} rotation={[0.01, -0.18, 0.35]} />
              <mesh name="Palm_45" geometry={nodes.Palm_45.geometry} material={materials['World ap']} position={[10.66, -26.03, -16.24]} rotation={[0.05, -0.18, 0.37]} />
              <mesh name="Palm_48" geometry={nodes.Palm_48.geometry} material={materials['World ap']} position={[6.85, 23.16, 36.91]} rotation={[1.52, -0.14, -0.33]} />
              <mesh name="Palm_49" geometry={nodes.Palm_49.geometry} material={materials['World ap']} position={[15.97, 24.78, 46.53]} rotation={[1.63, -0.14, -0.05]} />
              <mesh name="Palm_4_2" geometry={nodes.Palm_4_2.geometry} material={materials['World ap']} position={[-15.94, 3.36, 7.85]} rotation={[1.01, 0.76, -0.27]} />
              <mesh name="Palm_51" geometry={nodes.Palm_51.geometry} material={materials['World ap']} position={[15.89, 21.9, 32.79]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_53" geometry={nodes.Palm_53.geometry} material={materials['World ap']} position={[-6.08, 22.21, 29.79]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_54" geometry={nodes.Palm_54.geometry} material={materials['World ap']} position={[1.22, 23.25, 35.82]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_56" geometry={nodes.Palm_56.geometry} material={materials['World ap']} position={[30.28, 21.12, 42.5]} rotation={[1.15, -0.2, -0.29]} />
              <mesh name="Palm_57" geometry={nodes.Palm_57.geometry} material={materials['World ap']} position={[-7.98, 31.92, 58.25]} rotation={[1.54, 0.06, -0.82]} />
              <mesh name="Palm_59" geometry={nodes.Palm_59.geometry} material={materials['World ap']} position={[39.86, 20.97, 78.61]} rotation={[1.28, -0.28, -0.43]} />
              <mesh name="Palm_61" geometry={nodes.Palm_61.geometry} material={materials['World ap']} position={[57.99, 12.01, 88.43]} rotation={[1.97, -0.59, -0.18]} />
              <mesh name="Palm_63" geometry={nodes.Palm_63.geometry} material={materials['World ap']} position={[59.77, 6.97, 89.69]} rotation={[2.42, -0.87, 0.18]} />
              <mesh name="Palm_64" geometry={nodes.Palm_64.geometry} material={materials['World ap']} position={[60.03, 7.69, 87.34]} rotation={[1.53, -1.09, -0.82]} />
              <mesh name="Palm_65" geometry={nodes.Palm_65.geometry} material={materials['World ap']} position={[58.57, 11.76, 78.12]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_69" geometry={nodes.Palm_69.geometry} material={materials['World ap']} position={[5.83, 9.31, 9.37]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_6_2" geometry={nodes.Palm_6_2.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_71" geometry={nodes.Palm_71.geometry} material={materials['World ap']} position={[14.54, 8.87, 17.29]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_72" geometry={nodes.Palm_72.geometry} material={materials['World ap']} position={[12.31, 17.49, 25.91]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_75" geometry={nodes.Palm_75.geometry} material={materials['World ap']} position={[25.34, -1.19, 6.49]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_76" geometry={nodes.Palm_76.geometry} material={materials['World ap']} position={[22.95, 8.11, 17.72]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_77" geometry={nodes.Palm_77.geometry} material={materials['World ap']} position={[29.07, 15.54, 34.3]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_78" geometry={nodes.Palm_78.geometry} material={materials['World ap']} position={[29.64, 12.36, 30.22]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_7_2" geometry={nodes.Palm_7_2.geometry} material={materials['World ap']} position={[4.02, 11.45, 13.01]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_80" geometry={nodes.Palm_80.geometry} material={materials['World ap']} position={[6.74, -9.38, -4.84]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_82_2" geometry={nodes.Palm_82_2.geometry} material={materials['World ap']} position={[-2, 0.7, 2.35]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_83" geometry={nodes.Palm_83.geometry} material={materials['World ap']} position={[10.41, -4.94, -3.71]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_84" geometry={nodes.Palm_84.geometry} material={materials['World ap']} position={[9.41, -10.5, -11.59]} rotation={[0.21, -0.1, -0.15]} />
              <mesh name="Palm_85" geometry={nodes.Palm_85.geometry} material={materials['World ap']} position={[4.64, -12.14, -9.13]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_2" geometry={nodes.Palm_86_2.geometry} material={materials['World ap']} position={[9.17, -1.26, -0.09]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_2" geometry={nodes.Palm_89_2.geometry} material={materials['World ap']} position={[-11.47, 3.02, 2.45]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_90_2" geometry={nodes.Palm_90_2.geometry} material={materials['World ap']} position={[0.86, -7.12, -3.88]} rotation={[0.48, 0.17, -0.3]} />
              <mesh name="Palm_91_2" geometry={nodes.Palm_91_2.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_92" geometry={nodes.Palm_92.geometry} material={materials['World ap']} position={[28.35, 1.38, 13.13]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_93" geometry={nodes.Palm_93.geometry} material={materials['World ap']} position={[30.5, -22.16, -7.62]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_96" geometry={nodes.Palm_96.geometry} material={materials['World ap']} position={[16.82, -8.7, -0.35]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_97" geometry={nodes.Palm_97.geometry} material={materials['World ap']} position={[21.61, -20.23, -9.52]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_99" geometry={nodes.Palm_99.geometry} material={materials['World ap']} position={[-13.65, 12.21, 18.63]} rotation={[1.43, 0.48, -0.37]} />
            </group>
            <group name="Asia" position={[6.96, -47.91, 32.15]}>
              <mesh name="Palm_101" geometry={nodes.Palm_101.geometry} material={materials['World ap']} position={[-8.04, 125.27, 37.37]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_102" geometry={nodes.Palm_102.geometry} material={materials['World ap']} position={[-8.88, 125.11, 37.33]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_104" geometry={nodes.Palm_104.geometry} material={materials['World ap']} position={[-7.67, 125.73, 45.68]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_105" geometry={nodes.Palm_105.geometry} material={materials['World ap']} position={[-2.09, 122.07, 29.58]} rotation={[1.32, 0.4, -0.44]} />
              <mesh name="Palm_106" geometry={nodes.Palm_106.geometry} material={materials['World ap']} position={[-2.56, 124.41, 31.17]} rotation={[1.69, 0.21, -0.55]} />
              <mesh name="Palm_108" geometry={nodes.Palm_108.geometry} material={materials['World ap']} position={[-13.92, 121.37, 32.88]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_109" geometry={nodes.Palm_109.geometry} material={materials['World ap']} position={[44.86, 15.81, -34.66]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_10_4" geometry={nodes.Palm_10_4.geometry} material={materials['World ap']} position={[-22.48, 10.47, -24.86]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_111" geometry={nodes.Palm_111.geometry} material={materials['World ap']} position={[25.39, 19.94, -38.36]} rotation={[-0.03, 0.13, 0.1]} />
              <mesh name="Palm_113" geometry={nodes.Palm_113.geometry} material={materials['World ap']} position={[37.33, 7.65, -36.14]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_115" geometry={nodes.Palm_115.geometry} material={materials['World ap']} position={[21.25, 3.26, -36.36]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_117" geometry={nodes.Palm_117.geometry} material={materials['World ap']} position={[13.26, 19.18, -39.68]} rotation={[0, -0.18, 0.1]} />
              <mesh name="Palm_11_4" geometry={nodes.Palm_11_4.geometry} material={materials['World ap']} position={[-15.51, 31.82, -27.99]} rotation={[-0.41, 0.68, 0.36]} />
              <mesh name="Palm_12_4" geometry={nodes.Palm_12_4.geometry} material={materials['World ap']} position={[-12.2, 5, -24.81]} rotation={[-0.73, 0.53, 0.26]} />
              <mesh name="Palm_14_4" geometry={nodes.Palm_14_4.geometry} material={materials['World ap']} position={[-0.54, -53.93, 10.49]} rotation={[-1.51, 0.14, 0.47]} />
              <mesh name="Palm_15_4" geometry={nodes.Palm_15_4.geometry} material={materials['World ap']} position={[-12.21, -44.5, 8.02]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_17_4" geometry={nodes.Palm_17_4.geometry} material={materials['World ap']} position={[12.99, -62, 24.82]} rotation={[-1.57, 0.23, 0.48]} />
              <mesh name="Palm_18_4" geometry={nodes.Palm_18_4.geometry} material={materials['World ap']} position={[19.74, -57.38, 24.24]} rotation={[-0.96, 0.1, 0.29]} />
              <mesh name="Palm_19_4" geometry={nodes.Palm_19_4.geometry} material={materials['World ap']} position={[15.82, -61.47, 32.12]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_1_4" geometry={nodes.Palm_1_4.geometry} material={materials['World ap']} position={[-6.96, 35.61, -33.67]} rotation={[-0.25, -0.12, 0.13]} />
              <mesh name="Palm_20_4" geometry={nodes.Palm_20_4.geometry} material={materials['World ap']} position={[-9.94, -49.99, 21.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_21_4" geometry={nodes.Palm_21_4.geometry} material={materials['World ap']} position={[56.8, 94.76, -12.26]} rotation={[0.87, 0.7, -2.68]} />
              <mesh name="Palm_22_4" geometry={nodes.Palm_22_4.geometry} material={materials['World ap']} position={[12.51, -18.38, -22.47]} rotation={[-0.85, 0.4, 0.31]} />
              <mesh name="Palm_24_4" geometry={nodes.Palm_24_4.geometry} material={materials['World ap']} position={[-2.8, -16.7, -16.91]} rotation={[-0.53, 0.44, -0.31]} />
              <mesh name="Palm_27_4" geometry={nodes.Palm_27_4.geometry} material={materials['World ap']} position={[-12.31, 56.29, -27.76]} rotation={[0.28, 0.86, -0.64]} />
              <mesh name="Palm_28_4" geometry={nodes.Palm_28_4.geometry} material={materials['World ap']} position={[1.92, 70.39, -29.82]} rotation={[0.37, 0.16, -0.82]} />
              <mesh name="Palm_30_4" geometry={nodes.Palm_30_4.geometry} material={materials['World ap']} position={[1.07, 81.17, -24.54]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_31_3" geometry={nodes.Palm_31_3.geometry} material={materials['World ap']} position={[-11.23, 84.41, -22.14]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_32_3" geometry={nodes.Palm_32_3.geometry} material={materials['World ap']} position={[-18.41, -13.05, -20.15]} rotation={[-0.28, 0.36, -0.41]} />
              <mesh name="Palm_34_3" geometry={nodes.Palm_34_3.geometry} material={materials['World ap']} position={[-2.82, -56.4, 22.62]} rotation={[-1.38, 0.53, 0.11]} />
              <mesh name="Palm_35_3" geometry={nodes.Palm_35_3.geometry} material={materials['World ap']} position={[66.35, 81.93, -16.06]} rotation={[0.58, -0.41, -0.11]} />
              <mesh name="Palm_36_3" geometry={nodes.Palm_36_3.geometry} material={materials['World ap']} position={[64.32, 85.82, -14.95]} rotation={[0.21, 0.21, -0.4]} />
              <mesh name="Palm_38_3" geometry={nodes.Palm_38_3.geometry} material={materials['World ap']} position={[61.91, 90.39, -14.24]} rotation={[0.81, -0.06, -1.88]} />
              <mesh name="Palm_39_3" geometry={nodes.Palm_39_3.geometry} material={materials['World ap']} position={[62.55, 93.74, -11.84]} rotation={[1.25, -0.19, -1.82]} />
              <mesh name="Palm_3_5" geometry={nodes.Palm_3_5.geometry} material={materials['World ap']} position={[-2.4, 59.91, -31.93]} rotation={[0.4, 0.43, -0.76]} />
              <mesh name="Palm_40_3" geometry={nodes.Palm_40_3.geometry} material={materials['World ap']} position={[57.6, 94.04, -13.93]} rotation={[1.25, -0.19, -2.79]} />
              <mesh name="Palm_41_3" geometry={nodes.Palm_41_3.geometry} material={materials['World ap']} position={[-3.62, 91.38, -16.9]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_43_3" geometry={nodes.Palm_43_3.geometry} material={materials['World ap']} position={[4.95, 77.69, -25.82]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_45_3" geometry={nodes.Palm_45_3.geometry} material={materials['World ap']} position={[2.08, 94.42, -14.92]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_46_3" geometry={nodes.Palm_46_3.geometry} material={materials['World ap']} position={[-8.11, 96.53, -11.75]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_47_3" geometry={nodes.Palm_47_3.geometry} material={materials['World ap']} position={[-0.42, 101.36, -9.39]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_49_3" geometry={nodes.Palm_49_3.geometry} material={materials['World ap']} position={[-13.49, 88.25, -16.26]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_4_5" geometry={nodes.Palm_4_5.geometry} material={materials['World ap']} position={[4.96, 18.2, -38.01]} rotation={[-0.41, 0.36, -0.29]} />
              <mesh name="Palm_50_3" geometry={nodes.Palm_50_3.geometry} material={materials['World ap']} position={[-2.95, 86.58, -24.93]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_52_3" geometry={nodes.Palm_52_3.geometry} material={materials['World ap']} position={[-7.6, -32.18, -9.91]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_53_3" geometry={nodes.Palm_53_3.geometry} material={materials['World ap']} position={[-17.81, -27.9, -10.09]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_54_3" geometry={nodes.Palm_54_3.geometry} material={materials['World ap']} position={[-11.72, -38.75, -0.59]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_55_3" geometry={nodes.Palm_55_3.geometry} material={materials['World ap']} position={[-13.49, -59.24, 40.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_59_2" geometry={nodes.Palm_59_2.geometry} material={materials['World ap']} position={[-11.76, -63.36, 43.64]} rotation={[-1.69, 0.26, 0.81]} />
              <mesh name="Palm_5_4" geometry={nodes.Palm_5_4.geometry} material={materials['World ap']} position={[-10.37, 29.78, -35.92]} rotation={[-0.36, 0.51, -0.32]} />
              <mesh name="Palm_62_2" geometry={nodes.Palm_62_2.geometry} material={materials['World ap']} position={[-7.15, -58.58, 30.92]} rotation={[-1.42, -0.09, 0.42]} />
              <mesh name="Palm_63_2" geometry={nodes.Palm_63_2.geometry} material={materials['World ap']} position={[-8.88, -58.84, 35.78]} rotation={[-1.61, 0.26, 0.45]} />
              <mesh name="Palm_66_2" geometry={nodes.Palm_66_2.geometry} material={materials['World ap']} position={[5.36, -51.73, 6.74]} rotation={[-1.06, -0.28, 0.34]} />
              <mesh name="Palm_69_2" geometry={nodes.Palm_69_2.geometry} material={materials['World ap']} position={[13.29, -28.14, -21.49]} rotation={[-0.62, 0.13, 0.27]} />
              <mesh name="Palm_78_2" geometry={nodes.Palm_78_2.geometry} material={materials['World ap']} position={[22.4, -68.19, 38.59]} rotation={[-1.48, 0.13, 0.3]} />
              <mesh name="Palm_7_4" geometry={nodes.Palm_7_4.geometry} material={materials['World ap']} position={[-0.29, 2.32, -29.92]} rotation={[-0.26, 0.49, 0.05]} />
              <mesh name="Palm_82_4" geometry={nodes.Palm_82_4.geometry} material={materials['World ap']} position={[-13.35, -49.14, 15.75]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_84_2" geometry={nodes.Palm_84_2.geometry} material={materials['World ap']} position={[-6.14, -49.28, 7.92]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_8_4" geometry={nodes.Palm_8_4.geometry} material={materials['World ap']} position={[7.44, -8.64, -32.8]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_90_4" geometry={nodes.Palm_90_4.geometry} material={materials['World ap']} position={[23.02, -62.09, 28.57]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_92_2" geometry={nodes.Palm_92_2.geometry} material={materials['World ap']} position={[46.45, -65.7, 43.01]} rotation={[-1.53, -0.41, 0.53]} />
              <mesh name="Palm_94_2" geometry={nodes.Palm_94_2.geometry} material={materials['World ap']} position={[-14.09, 115.96, 25.68]} rotation={[0.98, 0.09, -0.14]} />
              <mesh name="Palm_95_2" geometry={nodes.Palm_95_2.geometry} material={materials['World ap']} position={[-5.65, 123.65, 31.65]} rotation={[0.38, 0.15, -0.06]} />
              <mesh name="Palm_96_2" geometry={nodes.Palm_96_2.geometry} material={materials['World ap']} position={[-9.15, 121.5, 42.91]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_97_2" geometry={nodes.Palm_97_2.geometry} material={materials['World ap']} position={[-13.76, 119.68, 28.38]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_98_2" geometry={nodes.Palm_98_2.geometry} material={materials['World ap']} position={[-1.95, 127.94, 53.49]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_99_2" geometry={nodes.Palm_99_2.geometry} material={materials['World ap']} position={[2.88, 131.09, 57.25]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_9_4" geometry={nodes.Palm_9_4.geometry} material={materials['World ap']} position={[-0.01, -3.81, -27.17]} rotation={[-0.7, 0.44, 0.25]} />
            </group>
            <group name="Australia" position={[72.22, -105.13, 60.74]} rotation={[-2.39, 0, -0.13]}>
              <mesh name="Palm" geometry={nodes.Palm.geometry} material={materials['World ap']} position={[4.06, -4.7, -8.2]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_1" geometry={nodes.Palm_1.geometry} material={materials['World ap']} position={[35.19, -8.62, 19.61]} rotation={[1.52, -0.91, -3.09]} />
              <mesh name="Palm_10" geometry={nodes.Palm_10.geometry} material={materials['World ap']} position={[34.25, -8.73, 31.27]} rotation={[1.88, -0.79, -2.79]} />
              <mesh name="Palm_11" geometry={nodes.Palm_11.geometry} material={materials['World ap']} position={[11.38, 4.91, 34.49]} rotation={[2.04, -0.19, -2.25]} />
              <mesh name="Palm_13" geometry={nodes.Palm_13.geometry} material={materials['World ap']} position={[20.71, -1.13, 36.98]} rotation={[1.66, -0.55, -2.4]} />
              <mesh name="Palm_14" geometry={nodes.Palm_14.geometry} material={materials['World ap']} position={[16.71, 2.07, 37.35]} rotation={[1.9, -0.21, -2.62]} />
              <mesh name="Palm_15" geometry={nodes.Palm_15.geometry} material={materials['World ap']} position={[15.22, 3.64, 32.1]} rotation={[1.64, -0.38, -1.9]} />
              <mesh name="Palm_16" geometry={nodes.Palm_16.geometry} material={materials['World ap']} position={[20.26, 1.91, 31.57]} rotation={[2.04, -0.53, -2.14]} />
              <mesh name="Palm_17" geometry={nodes.Palm_17.geometry} material={materials['World ap']} position={[27.49, -12.77, -4.41]} rotation={[0.69, -0.72, 2.56]} />
              <mesh name="Palm_19" geometry={nodes.Palm_19.geometry} material={materials['World ap']} position={[18.87, -11.37, -8.59]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_20" geometry={nodes.Palm_20.geometry} material={materials['World ap']} position={[4.18, -7.13, -13.04]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_21" geometry={nodes.Palm_21.geometry} material={materials['World ap']} position={[6.29, -9.68, -11.9]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_23" geometry={nodes.Palm_23.geometry} material={materials['World ap']} position={[-7.19, 6.73, 15.18]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_24" geometry={nodes.Palm_24.geometry} material={materials['World ap']} position={[-4.24, 7.45, 19.8]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_25" geometry={nodes.Palm_25.geometry} material={materials['World ap']} position={[-7.28, 7.97, 25.44]} rotation={[1.57, 0.26, -0.01]} />
              <mesh name="Palm_26" geometry={nodes.Palm_26.geometry} material={materials['World ap']} position={[-5.35, 7.76, 30.4]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_27" geometry={nodes.Palm_27.geometry} material={materials['World ap']} position={[-6.1, 8.93, 24]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_28" geometry={nodes.Palm_28.geometry} material={materials['World ap']} position={[-1.62, 2.81, 5.98]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_29" geometry={nodes.Palm_29.geometry} material={materials['World ap']} position={[22.1, -7.33, -1.23]} rotation={[1.19, -0.22, 2.55]} />
              <mesh name="Palm_3" geometry={nodes.Palm_3.geometry} material={materials['World ap']} position={[-8.74, 0.74, -5.33]} rotation={[0.46, 0.13, 0.26]} />
              <mesh name="Palm_30" geometry={nodes.Palm_30.geometry} material={materials['World ap']} position={[26.34, -8.23, 0.57]} rotation={[1.36, -0.33, 2.59]} />
              <mesh name="Palm_4" geometry={nodes.Palm_4.geometry} material={materials['World ap']} position={[35.62, -13.87, 8.67]} rotation={[1.5, -0.89, -3.12]} />
              <mesh name="Palm_5" geometry={nodes.Palm_5.geometry} material={materials['World ap']} position={[23.69, -11.11, -1.41]} rotation={[0.9, -0.58, 2.43]} />
              <mesh name="Palm_6" geometry={nodes.Palm_6.geometry} material={materials['World ap']} position={[36.18, -12.8, 15.81]} rotation={[0.99, -0.69, -3.02]} />
              <mesh name="Palm_7" geometry={nodes.Palm_7.geometry} material={materials['World ap']} position={[37.86, -16.43, 12.26]} rotation={[0.97, -1.08, 2.84]} />
              <mesh name="Palm_8" geometry={nodes.Palm_8.geometry} material={materials['World ap']} position={[36.21, -8.83, 27.71]} rotation={[1.53, -0.69, -2.62]} />
              <mesh name="Palm_82" geometry={nodes.Palm_82.geometry} material={materials['World ap']} position={[-3.2, -4.07, -6.92]} rotation={[0.43, 0.24, 0.29]} />
              <mesh name="Palm_86" geometry={nodes.Palm_86.geometry} material={materials['World ap']} position={[-8.89, 4.01, 4.87]} rotation={[1.16, 0.09, 0.28]} />
              <mesh name="Palm_87" geometry={nodes.Palm_87.geometry} material={materials['World ap']} position={[-11.1, 5.15, 10.18]} rotation={[1.22, -0.11, 0.01]} />
              <mesh name="Palm_89" geometry={nodes.Palm_89.geometry} material={materials['World ap']} position={[-6.53, 1.42, -1.91]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_90" geometry={nodes.Palm_90.geometry} material={materials['World ap']} position={[-11.1, 3.17, 0.26]} rotation={[0.86, 0.24, 0.38]} />
              <mesh name="Palm_91" geometry={nodes.Palm_91.geometry} material={materials['World ap']} position={[-0.99, -6.13, -10.27]} rotation={[0.71, -0.25, 0.76]} />
            </group>
          </group>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['World ap']} position={[-0.96, 0.57, -9.25]} rotation={[0.06, 0.1, -0.01]}>
              <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap']} />
              <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <group name="water" position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]}>
                <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials.Water} />
              </group>
            </mesh>
          </group>
          <group name="Ships" position={[-9.84, -1.38, 9.08]} />
        </group>
        <group name="Rig002" position={[-0.09, 0.16, 1.03]} rotation={[-0.45, 1.22, 2.2]} scale={0.05}>
          <primitive object={nodes.root_13} />
          <skinnedMesh name="Hare_LOD0002" geometry={nodes.Hare_LOD0002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD0002.skeleton} morphTargetDictionary={nodes.Hare_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1002" geometry={nodes.Hare_LOD1002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD1002.skeleton} morphTargetDictionary={nodes.Hare_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2002" geometry={nodes.Hare_LOD2002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD2002.skeleton} morphTargetDictionary={nodes.Hare_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3002" geometry={nodes.Hare_LOD3002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD3002.skeleton} morphTargetDictionary={nodes.Hare_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig004" position={[-1.06, 0.02, -0.26]} rotation={[-0.22, -0.47, 0.71]} scale={0.05}>
          <primitive object={nodes.root} />
          <skinnedMesh name="Hare" geometry={nodes.Hare.geometry} material={materials['M_Hare.003']} skeleton={nodes.Hare.skeleton} morphTargetDictionary={nodes.Hare.morphTargetDictionary} morphTargetInfluences={nodes.Hare.morphTargetInfluences} />
        </group>
        <group name="Rig001" position={[-1.09, -0.01, -0.26]} rotation={[-0.17, -0.47, 0.89]} scale={0.03}>
          <primitive object={nodes.root_1} />
          <skinnedMesh name="Hare001" geometry={nodes.Hare001.geometry} material={materials['M_Hare.001']} skeleton={nodes.Hare001.skeleton} morphTargetDictionary={nodes.Hare001.morphTargetDictionary} morphTargetInfluences={nodes.Hare001.morphTargetInfluences} />
        </group>
        <group name="Rig003" position={[-0.56, 0.12, -0.9]} rotation={[-0.86, -0.58, 0.22]} scale={0.05}>
          <primitive object={nodes.root_14} />
          <skinnedMesh name="Hare_LOD0001" geometry={nodes.Hare_LOD0001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD0001.skeleton} morphTargetDictionary={nodes.Hare_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1001" geometry={nodes.Hare_LOD1001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD1001.skeleton} morphTargetDictionary={nodes.Hare_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2001" geometry={nodes.Hare_LOD2001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD2001.skeleton} morphTargetDictionary={nodes.Hare_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3001" geometry={nodes.Hare_LOD3001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD3001.skeleton} morphTargetDictionary={nodes.Hare_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig007" position={[-1.09, -0.23, 0.12]} rotation={[0.37, 0.28, 1.3]} scale={0.03}>
          <primitive object={nodes.root_2} />
          <skinnedMesh name="Puffin" geometry={nodes.Puffin.geometry} material={materials.M_Puffin} skeleton={nodes.Puffin.skeleton} morphTargetDictionary={nodes.Puffin.morphTargetDictionary} morphTargetInfluences={nodes.Puffin.morphTargetInfluences} />
        </group>
        <group name="Rig008" position={[-1.11, -0.25, 0.09]} rotation={[-2.84, 0.02, 1.7]} scale={0.03}>
          <primitive object={nodes.root_3} />
          <skinnedMesh name="Puffin001" geometry={nodes.Puffin001.geometry} material={materials['M_Puffin.001']} skeleton={nodes.Puffin001.skeleton} morphTargetDictionary={nodes.Puffin001.morphTargetDictionary} morphTargetInfluences={nodes.Puffin001.morphTargetInfluences} />
        </group>
        <group name="Rig009" position={[-1.11, -0.23, 0.05]} rotation={[-0.77, 0.1, 1.81]} scale={0.03}>
          <primitive object={nodes.root_4} />
          <skinnedMesh name="Puffin002" geometry={nodes.Puffin002.geometry} material={materials['M_Puffin.002']} skeleton={nodes.Puffin002.skeleton} morphTargetDictionary={nodes.Puffin002.morphTargetDictionary} morphTargetInfluences={nodes.Puffin002.morphTargetInfluences} />
        </group>
        <group name="Rig010" position={[-1.07, -0.18, 0.15]} rotation={[2.71, 0.25, 1.71]} scale={0.04}>
          <primitive object={nodes.root_15} />
          <skinnedMesh name="Puffin_LOD0" geometry={nodes.Puffin_LOD0.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD0.skeleton} morphTargetDictionary={nodes.Puffin_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD1" geometry={nodes.Puffin_LOD1.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD1.skeleton} morphTargetDictionary={nodes.Puffin_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD2" geometry={nodes.Puffin_LOD2.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD2.skeleton} morphTargetDictionary={nodes.Puffin_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD3" geometry={nodes.Puffin_LOD3.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD3.skeleton} morphTargetDictionary={nodes.Puffin_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig" position={[-0.9, 0.29, 0.43]} rotation={[0, 0, 0.93]} scale={0.05}>
          <primitive object={nodes.root_16} />
          <skinnedMesh name="Hare_LOD0" geometry={nodes.Hare_LOD0.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD0.skeleton} morphTargetDictionary={nodes.Hare_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1" geometry={nodes.Hare_LOD1.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD1.skeleton} morphTargetDictionary={nodes.Hare_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2" geometry={nodes.Hare_LOD2.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD2.skeleton} morphTargetDictionary={nodes.Hare_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3" geometry={nodes.Hare_LOD3.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD3.skeleton} morphTargetDictionary={nodes.Hare_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig013" position={[0.11, 0.3, 1.1]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_17} />
          <skinnedMesh name="Goat_LOD0" geometry={nodes.Goat_LOD0.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD0.skeleton} morphTargetDictionary={nodes.Goat_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1" geometry={nodes.Goat_LOD1.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD1.skeleton} morphTargetDictionary={nodes.Goat_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2" geometry={nodes.Goat_LOD2.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD2.skeleton} morphTargetDictionary={nodes.Goat_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3" geometry={nodes.Goat_LOD3.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD3.skeleton} morphTargetDictionary={nodes.Goat_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig020" position={[-0.43, -0.45, -0.85]} rotation={[-2.45, 0.91, 0.94]} scale={0.1}>
          <primitive object={nodes.root_18} />
          <skinnedMesh name="Marten_LOD0" geometry={nodes.Marten_LOD0.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD0.skeleton} morphTargetDictionary={nodes.Marten_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD1" geometry={nodes.Marten_LOD1.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD1.skeleton} morphTargetDictionary={nodes.Marten_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD2" geometry={nodes.Marten_LOD2.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD2.skeleton} morphTargetDictionary={nodes.Marten_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD3" geometry={nodes.Marten_LOD3.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD3.skeleton} morphTargetDictionary={nodes.Marten_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig012" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_5} />
          <skinnedMesh name="Bull" geometry={nodes.Bull.geometry} material={materials.M_Bull} skeleton={nodes.Bull.skeleton} morphTargetDictionary={nodes.Bull.morphTargetDictionary} morphTargetInfluences={nodes.Bull.morphTargetInfluences} />
        </group>
        <group name="Rig005" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_6} />
          <skinnedMesh name="Bull001" geometry={nodes.Bull001.geometry} material={materials['M_Bull.001']} skeleton={nodes.Bull001.skeleton} morphTargetDictionary={nodes.Bull001.morphTargetDictionary} morphTargetInfluences={nodes.Bull001.morphTargetInfluences} />
        </group>
        <group name="Rig006" position={[-1.06, -0.02, 0.15]} rotation={[2.8, -0.51, 1.88]} scale={0.07}>
          <primitive object={nodes.root_19} />
          <skinnedMesh name="Cougar_LOD0" geometry={nodes.Cougar_LOD0.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD0.skeleton} morphTargetDictionary={nodes.Cougar_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD1" geometry={nodes.Cougar_LOD1.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD1.skeleton} morphTargetDictionary={nodes.Cougar_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD2" geometry={nodes.Cougar_LOD2.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD2.skeleton} morphTargetDictionary={nodes.Cougar_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD3" geometry={nodes.Cougar_LOD3.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD3.skeleton} morphTargetDictionary={nodes.Cougar_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig011" position={[-0.75, 0.57, -0.05]} rotation={[-0.51, -0.19, 0.71]} scale={0.1}>
          <primitive object={nodes.root_7} />
          <skinnedMesh name="Beluga" geometry={nodes.Beluga.geometry} material={materials['M_Beluga.001']} skeleton={nodes.Beluga.skeleton} morphTargetDictionary={nodes.Beluga.morphTargetDictionary} morphTargetInfluences={nodes.Beluga.morphTargetInfluences} />
        </group>
        <group name="Rig014" position={[-0.83, 0.05, 0.59]} rotation={[-2.32, -0.35, 1.88]} scale={0.1}>
          <primitive object={nodes.root_8} />
          <skinnedMesh name="Llama" geometry={nodes.Llama.geometry} material={materials.M_Llama} skeleton={nodes.Llama.skeleton} morphTargetDictionary={nodes.Llama.morphTargetDictionary} morphTargetInfluences={nodes.Llama.morphTargetInfluences} />
        </group>
        <group name="Rig038" position={[-0.31, 0.19, 1]} rotation={[1.39, 0.15, 0.18]} scale={0.05}>
          <primitive object={nodes.root_20} />
          <skinnedMesh name="Jackal_LOD0" geometry={nodes.Jackal_LOD0.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD0.skeleton} morphTargetDictionary={nodes.Jackal_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1" geometry={nodes.Jackal_LOD1.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD1.skeleton} morphTargetDictionary={nodes.Jackal_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2" geometry={nodes.Jackal_LOD2.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD2.skeleton} morphTargetDictionary={nodes.Jackal_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3" geometry={nodes.Jackal_LOD3.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD3.skeleton} morphTargetDictionary={nodes.Jackal_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig015" position={[-0.4, 0.2, 0.95]} rotation={[1.3, 0.93, 0.37]} scale={0.05}>
          <primitive object={nodes.root_21} />
          <skinnedMesh name="Jackal_LOD0001" geometry={nodes.Jackal_LOD0001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD0001.skeleton} morphTargetDictionary={nodes.Jackal_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1001" geometry={nodes.Jackal_LOD1001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD1001.skeleton} morphTargetDictionary={nodes.Jackal_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2001" geometry={nodes.Jackal_LOD2001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD2001.skeleton} morphTargetDictionary={nodes.Jackal_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3001" geometry={nodes.Jackal_LOD3001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD3001.skeleton} morphTargetDictionary={nodes.Jackal_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig018" position={[0.75, 0.37, 0.66]} rotation={[1.68, 0.62, -1.26]} scale={0.1}>
          <primitive object={nodes.root_9} />
          <skinnedMesh name="Badger001" geometry={nodes.Badger001.geometry} material={materials['M_Badger.001']} skeleton={nodes.Badger001.skeleton} morphTargetDictionary={nodes.Badger001.morphTargetDictionary} morphTargetInfluences={nodes.Badger001.morphTargetInfluences} />
        </group>
        <group name="Rig021" position={[-1.04, -0.44, 0.04]} rotation={[1.66, 0.38, 1.33]} scale={0.05}>
          <primitive object={nodes.root_22} />
          <skinnedMesh name="Hedgehog_LOD0" geometry={nodes.Hedgehog_LOD0.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD0.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD1" geometry={nodes.Hedgehog_LOD1.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD1.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD2" geometry={nodes.Hedgehog_LOD2.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD2.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD3" geometry={nodes.Hedgehog_LOD3.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD3.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig022" position={[-0.97, -0.5, 0.01]} rotation={[-0.22, -0.74, 2.43]} scale={0.05}>
          <primitive object={nodes.root_10} />
          <skinnedMesh name="Hedgehog" geometry={nodes.Hedgehog.geometry} material={materials['M_Hedgehog.001']} skeleton={nodes.Hedgehog.skeleton} morphTargetDictionary={nodes.Hedgehog.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog.morphTargetInfluences} />
        </group>
        <group name="Rig028" position={[-0.71, -0.43, 0.54]} rotation={[0.2, 0.2, 1.55]} scale={0.03}>
          <primitive object={nodes.root_11} />
          <skinnedMesh name="Beluga002" geometry={nodes.Beluga002.geometry} material={materials['M_Beluga.006']} skeleton={nodes.Beluga002.skeleton} morphTargetDictionary={nodes.Beluga002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga002.morphTargetInfluences} />
        </group>
        <group name="Rig029" position={[-0.76, -0.39, 0.48]} rotation={[-0.24, 0.08, 1.55]} scale={0.03}>
          <primitive object={nodes.root_12} />
          <skinnedMesh name="Beluga003" geometry={nodes.Beluga003.geometry} material={materials['M_Beluga.007']} skeleton={nodes.Beluga003.skeleton} morphTargetDictionary={nodes.Beluga003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga003.morphTargetInfluences} />
        </group>
        <group name="Rig030" position={[-0.65, -0.39, 0.62]} rotation={[0.4, 0.66, 1.45]} scale={0.04}>
          <primitive object={nodes.root_23} />
          <skinnedMesh name="Beluga_LOD0003" geometry={nodes.Beluga_LOD0003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD0003.skeleton} morphTargetDictionary={nodes.Beluga_LOD0003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1003" geometry={nodes.Beluga_LOD1003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD1003.skeleton} morphTargetDictionary={nodes.Beluga_LOD1003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2003" geometry={nodes.Beluga_LOD2003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD2003.skeleton} morphTargetDictionary={nodes.Beluga_LOD2003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3003" geometry={nodes.Beluga_LOD3003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD3003.skeleton} morphTargetDictionary={nodes.Beluga_LOD3003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3003.morphTargetInfluences} />
        </group>
        <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.1']} position={[0.02, 0.17, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}

function EarthLv6(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/earth33/final6.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene"position={[-0.1, -0.15, -0.5]} rotation={[Math.PI / 0.1, 1.7, -0.2]} scale={1.7}>
      <group name="Planet" position={[0.03, 0.07, -0.04]} rotation={[Math.PI / 2, 0, -0.27]} scale={0.01}>
          <group name="Bushes" position={[-59.56, 45.9, -11.47]}>
            <mesh name="Bushes_11" geometry={nodes.Bushes_11.geometry} material={materials['World ap.511']} position={[-6.6, 40.7, 13.02]} rotation={[-2.98, 0, 0]} />
            <mesh name="Bushes_13" geometry={nodes.Bushes_13.geometry} material={materials['World ap.509']} position={[4.31, 45.97, 9.97]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_15" geometry={nodes.Bushes_15.geometry} material={materials['World ap.507']} position={[57.87, 63.82, 16.27]} rotation={[3.13, 0, 0]} />
            <mesh name="Bushes_17" geometry={nodes.Bushes_17.geometry} material={materials['World ap.505']} position={[118.94, 37.3, -5.98]} rotation={[3.14, 0, 0]} />
            <mesh name="Bushes_18" geometry={nodes.Bushes_18.geometry} material={materials['World ap.504']} position={[24.98, 55.42, 51.04]} rotation={[3.07, 0, 0]} />
            <mesh name="Bushes_19" geometry={nodes.Bushes_19.geometry} material={materials['World ap.503']} position={[23.11, 36.4, 77.11]} rotation={[-2.75, 0, 0]} />
            <mesh name="Bushes_2" geometry={nodes.Bushes_2.geometry} material={materials['World ap.520']} position={[-41.31, -39.94, -18.51]} rotation={[-Math.PI, 0, 0]} />
            <mesh name="Bushes_21" geometry={nodes.Bushes_21.geometry} material={materials['World ap.523']} position={[-35.77, 1.94, -3.31]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_23" geometry={nodes.Bushes_23.geometry} material={materials['World ap.525']} position={[-13.92, 34.19, 25.78]} rotation={[-1.99, 0, 0]} />
            <mesh name="Bushes_3" geometry={nodes.Bushes_3.geometry} material={materials['World ap.519']} position={[-38.39, -31.39, -24.85]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_5" geometry={nodes.Bushes_5.geometry} material={materials['World ap.517']} position={[-37.28, -61.26, -19.51]} rotation={[-2.7, 0, 0]} />
            <mesh name="Bushes_7" geometry={nodes.Bushes_7.geometry} material={materials['World ap.515']} position={[-37.32, -73.79, -15.13]} rotation={[-2.87, 0, 0]} />
            <mesh name="Bushes_9" geometry={nodes.Bushes_9.geometry} material={materials['World ap.513']} position={[-33.69, -8.8, -26.31]} rotation={[-2.19, 0, 0]} />
          </group>
          <group name="Camping" position={[0.24, 13.39, -16.17]} />
          <group name="Firtrees" position={[-31.1, 65.19, -52.69]}>
            <mesh name="Firtree" geometry={nodes.Firtree.geometry} material={materials['World ap']} position={[81.77, -10.24, -12.72]} rotation={[0.58, -0.49, 0.64]} />
            <mesh name="Firtree_1" geometry={nodes.Firtree_1.geometry} material={materials['World ap']} position={[49.08, 17.34, 1.04]} rotation={[0.71, -0.16, 0.83]} />
            <mesh name="Firtree_10" geometry={nodes.Firtree_10.geometry} material={materials['World ap']} position={[55.57, 25.55, 11.04]} rotation={[1.01, -0.06, -1.63]} />
            <mesh name="Firtree_100" geometry={nodes.Firtree_100.geometry} material={materials['World ap']} position={[68.64, -147.79, 13.15]} rotation={[-0.62, -0.35, -0.05]} />
            <mesh name="Firtree_102" geometry={nodes.Firtree_102.geometry} material={materials['World ap']} position={[96.3, -137.66, 42.75]} rotation={[-1.42, -0.76, -1.33]} />
            <mesh name="Firtree_103" geometry={nodes.Firtree_103.geometry} material={materials['World ap']} position={[89.76, -141.95, 35.76]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_104" geometry={nodes.Firtree_104.geometry} material={materials['World ap']} position={[88.03, -141.59, 47.93]} rotation={[-1.57, -0.83, -1.37]} />
            <mesh name="Firtree_107" geometry={nodes.Firtree_107.geometry} material={materials['World ap']} position={[89.63, -124.84, 10.73]} rotation={[-0.76, -0.52, -0.56]} />
            <mesh name="Firtree_109" geometry={nodes.Firtree_109.geometry} material={materials['World ap']} position={[105.98, -112.5, 17.17]} rotation={[-0.9, -0.96, -0.65]} />
            <mesh name="Firtree_11" geometry={nodes.Firtree_11.geometry} material={materials['World ap']} position={[18.44, 8.04, -13.86]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_110" geometry={nodes.Firtree_110.geometry} material={materials['World ap']} position={[101.09, -109.53, 2.74]} rotation={[-0.84, -0.67, -0.55]} />
            <mesh name="Firtree_112" geometry={nodes.Firtree_112.geometry} material={materials['World ap']} position={[47.47, -144.51, 1.34]} rotation={[-1.14, -0.2, 1.82]} />
            <mesh name="Firtree_113" geometry={nodes.Firtree_113.geometry} material={materials['World ap']} position={[103, -120.06, 18.18]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_114" geometry={nodes.Firtree_114.geometry} material={materials['World ap']} position={[95.74, -127.95, 15.94]} rotation={[-0.97, -0.63, -1.71]} />
            <mesh name="Firtree_115" geometry={nodes.Firtree_115.geometry} material={materials['World ap']} position={[99.89, -127.72, 23.26]} rotation={[-0.77, -0.71, -1.47]} />
            <mesh name="Firtree_116" geometry={nodes.Firtree_116.geometry} material={materials['World ap']} position={[-27.63, -142.42, 20.93]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_117" geometry={nodes.Firtree_117.geometry} material={materials['World ap']} position={[-20.01, -149.08, 23.67]} rotation={[-1.14, 0.4, -2.12]} />
            <mesh name="Firtree_118" geometry={nodes.Firtree_118.geometry} material={materials['World ap']} position={[29.99, -160.44, 37.55]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_119" geometry={nodes.Firtree_119.geometry} material={materials['World ap']} position={[19.47, -155.91, 19.14]} rotation={[-1.45, 0.26, -1.17]} />
            <mesh name="Firtree_12" geometry={nodes.Firtree_12.geometry} material={materials['World ap']} position={[35, 12.13, -9.99]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_120" geometry={nodes.Firtree_120.geometry} material={materials['World ap']} position={[23.48, -156.74, 17.29]} rotation={[-1.31, 0.14, -0.68]} />
            <mesh name="Firtree_121" geometry={nodes.Firtree_121.geometry} material={materials['World ap']} position={[-1.97, -156.84, 33.77]} rotation={[-1.45, 0.26, -0.65]} />
            <mesh name="Firtree_124" geometry={nodes.Firtree_124.geometry} material={materials['World ap']} position={[91.04, -136.01, 19.61]} rotation={[-0.7, -0.59, -0.36]} />
            <mesh name="Firtree_126" geometry={nodes.Firtree_126.geometry} material={materials['World ap']} position={[105.41, -125.95, 28.96]} rotation={[-0.73, -0.72, -1.43]} />
            <mesh name="Firtree_127" geometry={nodes.Firtree_127.geometry} material={materials['World ap']} position={[39.82, -150.33, 5.96]} rotation={[-1.11, -0.15, -1.95]} />
            <mesh name="Firtree_128" geometry={nodes.Firtree_128.geometry} material={materials['World ap']} position={[47.72, -149.66, 7.83]} rotation={[-1.3, -0.22, 1.76]} />
            <mesh name="Firtree_129" geometry={nodes.Firtree_129.geometry} material={materials['World ap']} position={[14.13, -158.94, 27.2]} rotation={[-1.48, 0.05, -1.98]} />
            <mesh name="Firtree_13" geometry={nodes.Firtree_13.geometry} material={materials['World ap']} position={[0.09, 11.87, -10.47]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_131" geometry={nodes.Firtree_131.geometry} material={materials['World ap']} position={[19.47, -161.26, 50.91]} rotation={[-1.68, 0.12, 1.85]} />
            <mesh name="Firtree_132" geometry={nodes.Firtree_132.geometry} material={materials['World ap']} position={[19.86, -158.21, 38.59]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_133" geometry={nodes.Firtree_133.geometry} material={materials['World ap']} position={[24.79, -160.56, 28.54]} rotation={[-1.48, 0.2, -1.98]} />
            <mesh name="Firtree_134" geometry={nodes.Firtree_134.geometry} material={materials['World ap']} position={[-5.5, -156.92, 40.82]} rotation={[-1.38, 0.41, -2.01]} />
            <mesh name="Firtree_136" geometry={nodes.Firtree_136.geometry} material={materials['World ap']} position={[21.09, -148.06, 2.5]} rotation={[-0.85, -0.15, -1.87]} />
            <mesh name="Firtree_137" geometry={nodes.Firtree_137.geometry} material={materials['World ap']} position={[14.87, -147.07, 4.09]} rotation={[-0.9, 0.36, -2.09]} />
            <mesh name="Firtree_138" geometry={nodes.Firtree_138.geometry} material={materials['World ap']} position={[4.81, -154.88, 27.29]} rotation={[-1.45, 0.26, -1.99]} />
            <mesh name="Firtree_139" geometry={nodes.Firtree_139.geometry} material={materials['World ap']} position={[15.67, -151.62, 10.95]} rotation={[-1.06, 0.07, -2.05]} />
            <mesh name="Firtree_14" geometry={nodes.Firtree_14.geometry} material={materials['World ap']} position={[8.41, 7.08, -15.37]} rotation={[0.71, 0.32, 0.89]} />
            <mesh name="Firtree_141" geometry={nodes.Firtree_141.geometry} material={materials['World ap']} position={[25.5, -149.91, 7.87]} rotation={[-1.16, -0.07, -0.69]} />
            <mesh name="Firtree_144" geometry={nodes.Firtree_144.geometry} material={materials['World ap']} position={[29.29, -143.1, -4.57]} rotation={[-0.87, 0.09, -0.69]} />
            <mesh name="Firtree_146" geometry={nodes.Firtree_146.geometry} material={materials['World ap']} position={[53.46, -138.09, -1.51]} rotation={[-0.53, -0.21, -0.66]} />
            <mesh name="Firtree_147" geometry={nodes.Firtree_147.geometry} material={materials['World ap']} position={[35.63, -137.72, -7.72]} rotation={[-0.47, -0.01, -0.53]} />
            <mesh name="Firtree_149" geometry={nodes.Firtree_149.geometry} material={materials['World ap']} position={[74.1, -142.62, 4.5]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_15" geometry={nodes.Firtree_15.geometry} material={materials['World ap']} position={[-29.06, 15.77, 21.21]} rotation={[0.78, 0.69, 1.01]} />
            <mesh name="Firtree_150" geometry={nodes.Firtree_150.geometry} material={materials['World ap']} position={[81.94, -124.82, 0.04]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_151" geometry={nodes.Firtree_151.geometry} material={materials['World ap']} position={[88.86, -122.05, 1.82]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_152" geometry={nodes.Firtree_152.geometry} material={materials['World ap']} position={[87.97, -116.5, -4.23]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_154" geometry={nodes.Firtree_154.geometry} material={materials['World ap']} position={[111.09, -105.47, 16.22]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_155" geometry={nodes.Firtree_155.geometry} material={materials['World ap']} position={[113.33, -98.53, 15.36]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_157" geometry={nodes.Firtree_157.geometry} material={materials['World ap']} position={[119.16, -98.68, 25.48]} rotation={[-0.92, -1.03, -0.89]} />
            <mesh name="Firtree_158" geometry={nodes.Firtree_158.geometry} material={materials['World ap']} position={[118.91, -105.32, 33.63]} rotation={[-0.92, -1.03, -0.89]} />
            <mesh name="Firtree_159" geometry={nodes.Firtree_159.geometry} material={materials['World ap']} position={[121.23, -95.87, 29.26]} rotation={[-0.46, -1.19, -0.47]} />
            <mesh name="Firtree_160" geometry={nodes.Firtree_160.geometry} material={materials['World ap']} position={[73.64, -145.32, 9.39]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_161" geometry={nodes.Firtree_161.geometry} material={materials['World ap']} position={[69.49, -144.33, 5.86]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_162" geometry={nodes.Firtree_162.geometry} material={materials['World ap']} position={[77.42, -135.51, 7.26]} rotation={[-0.86, -0.67, -0.8]} />
            <mesh name="Firtree_164" geometry={nodes.Firtree_164.geometry} material={materials['World ap']} position={[112.9, -114.9, 32.66]} rotation={[-1.26, -0.89, -1.23]} />
            <mesh name="Firtree_165" geometry={nodes.Firtree_165.geometry} material={materials['World ap']} position={[120.95, -99.13, 33.97]} rotation={[-0.89, -1.22, -0.91]} />
            <mesh name="Firtree_167" geometry={nodes.Firtree_167.geometry} material={materials['World ap']} position={[117.99, -93.71, 21.84]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_168" geometry={nodes.Firtree_168.geometry} material={materials['World ap']} position={[97.62, -135.38, 30.84]} rotation={[-1.01, -0.73, -0.87]} />
            <mesh name="Firtree_17" geometry={nodes.Firtree_17.geometry} material={materials['World ap']} position={[-17.22, 14.96, 5.26]} rotation={[0.66, 0.61, 2.14]} />
            <mesh name="Firtree_170" geometry={nodes.Firtree_170.geometry} material={materials['World ap']} position={[84.18, -137, 17.53]} rotation={[-1.16, -0.53, -1.77]} />
            <mesh name="Firtree_172" geometry={nodes.Firtree_172.geometry} material={materials['World ap']} position={[12.32, -139.3, -6.15]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_173" geometry={nodes.Firtree_173.geometry} material={materials['World ap']} position={[20.1, -138.6, -8.85]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_175" geometry={nodes.Firtree_175.geometry} material={materials['World ap']} position={[-22.97, -147.12, 27.75]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_177" geometry={nodes.Firtree_177.geometry} material={materials['World ap']} position={[-49.09, -11.11, 11.3]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_179" geometry={nodes.Firtree_179.geometry} material={materials['World ap']} position={[-31.3, 14.65, 28.55]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_18" geometry={nodes.Firtree_18.geometry} material={materials['World ap']} position={[41.8, 2.87, -17.81]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_180" geometry={nodes.Firtree_180.geometry} material={materials['World ap']} position={[92.25, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_182" geometry={nodes.Firtree_182.geometry} material={materials['World ap']} position={[30.1, 31.71, 18.16]} rotation={[1.21, -0.24, -1.49]} />
            <mesh name="Firtree_183" geometry={nodes.Firtree_183.geometry} material={materials['World ap']} position={[15.51, 36.77, 12.72]} rotation={[1.2, -0.12, -1.49]} />
            <mesh name="Firtree_185" geometry={nodes.Firtree_185.geometry} material={materials['World ap']} position={[-25.34, 20.33, 16.84]} rotation={[0.98, 0.75, 1.9]} />
            <mesh name="Firtree_189" geometry={nodes.Firtree_189.geometry} material={materials['World ap']} position={[75.76, -152.49, 41.56]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_19" geometry={nodes.Firtree_19.geometry} material={materials['World ap']} position={[53, 2.14, -16.73]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_190" geometry={nodes.Firtree_190.geometry} material={materials['World ap']} position={[50.34, -163.53, 40.63]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_192" geometry={nodes.Firtree_192.geometry} material={materials['World ap']} position={[91.89, -5.81, 5.22]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_2" geometry={nodes.Firtree_2.geometry} material={materials['World ap']} position={[30.5, -0.09, -18.25]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_20" geometry={nodes.Firtree_20.geometry} material={materials['World ap']} position={[54.38, 11.91, -7.34]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_21" geometry={nodes.Firtree_21.geometry} material={materials['World ap']} position={[22.88, 4.38, -17.57]} rotation={[0.65, 0.03, 2.17]} />
            <mesh name="Firtree_22" geometry={nodes.Firtree_22.geometry} material={materials['World ap']} position={[29.08, 9.47, -14.07]} rotation={[0.75, -0.11, 1.66]} />
            <mesh name="Firtree_23" geometry={nodes.Firtree_23.geometry} material={materials['World ap']} position={[25.17, 20.84, 3.4]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_24" geometry={nodes.Firtree_24.geometry} material={materials['World ap']} position={[69, -3.88, -14.94]} rotation={[0.46, -0.2, 0.77]} />
            <mesh name="Firtree_25" geometry={nodes.Firtree_25.geometry} material={materials['World ap']} position={[75.15, -10.88, -15.56]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_28" geometry={nodes.Firtree_28.geometry} material={materials['World ap']} position={[-32.26, 5.27, 14.87]} rotation={[0.88, 0.65, 1.65]} />
            <mesh name="Firtree_29" geometry={nodes.Firtree_29.geometry} material={materials['World ap']} position={[-1.4, 1.04, -13.11]} rotation={[0.75, 0.36, -1.63]} />
            <mesh name="Firtree_3" geometry={nodes.Firtree_3.geometry} material={materials['World ap']} position={[46.08, 7.4, -8.93]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_30" geometry={nodes.Firtree_30.geometry} material={materials['World ap']} position={[-34.07, 8.94, 23.04]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_31" geometry={nodes.Firtree_31.geometry} material={materials['World ap']} position={[-40.85, -8.02, 4.78]} rotation={[0.82, 0.6, 1.94]} />
            <mesh name="Firtree_32" geometry={nodes.Firtree_32.geometry} material={materials['World ap']} position={[-38.43, 1.09, 17.1]} rotation={[1.12, 0.79, 1.69]} />
            <mesh name="Firtree_33" geometry={nodes.Firtree_33.geometry} material={materials['World ap']} position={[-43.78, -4.37, 13.1]} rotation={[1.17, 0.8, 1.61]} />
            <mesh name="Firtree_34" geometry={nodes.Firtree_34.geometry} material={materials['World ap']} position={[-23.02, 2.21, 2.18]} rotation={[0.66, 0.52, 1.97]} />
            <mesh name="Firtree_35" geometry={nodes.Firtree_35.geometry} material={materials['World ap']} position={[10.25, 16.18, -11.14]} rotation={[0.61, 0.13, -0.17]} />
            <mesh name="Firtree_37" geometry={nodes.Firtree_37.geometry} material={materials['World ap']} position={[-54.15, -16.86, 13.54]} rotation={[0.38, 1.02, 2.48]} />
            <mesh name="Firtree_38" geometry={nodes.Firtree_38.geometry} material={materials['World ap']} position={[-51.65, -23.49, 3.49]} rotation={[0.51, 0.82, 2.21]} />
            <mesh name="Firtree_39" geometry={nodes.Firtree_39.geometry} material={materials['World ap']} position={[-58.73, -25.94, 10.84]} rotation={[0.31, 0.9, 2.46]} />
            <mesh name="Firtree_4" geometry={nodes.Firtree_4.geometry} material={materials['World ap']} position={[61.73, 6.88, -7.85]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_40" geometry={nodes.Firtree_40.geometry} material={materials['World ap']} position={[-51.97, -30.39, 1.96]} rotation={[0.27, 0.74, 2.53]} />
            <mesh name="Firtree_42" geometry={nodes.Firtree_42.geometry} material={materials['World ap']} position={[-55.56, -27.66, 5.23]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_43" geometry={nodes.Firtree_43.geometry} material={materials['World ap']} position={[-54.57, -18.99, 8.73]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_44" geometry={nodes.Firtree_44.geometry} material={materials['World ap']} position={[-33.65, 1.7, 2.7]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_45" geometry={nodes.Firtree_45.geometry} material={materials['World ap']} position={[-6.21, 13.9, -6.04]} rotation={[0.6, 0.58, -0.27]} />
            <mesh name="Firtree_46" geometry={nodes.Firtree_46.geometry} material={materials['World ap']} position={[-57.99, -61.58, 5.65]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_47" geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-35.47, -0.67, 9.39]} rotation={[0.89, 0.51, 1.64]} />
            <mesh name="Firtree_48" geometry={nodes.Firtree_48.geometry} material={materials['World ap']} position={[-60.73, -68.5, 7.65]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_5" geometry={nodes.Firtree_5.geometry} material={materials['World ap']} position={[71.71, 10.57, -0.04]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_50" geometry={nodes.Firtree_50.geometry} material={materials['World ap']} position={[33.77, 24.3, 12.72]} rotation={[1, -0.4, 0.91]} />
            <mesh name="Firtree_51" geometry={nodes.Firtree_51.geometry} material={materials['World ap']} position={[-12.09, 19.81, 3.42]} rotation={[0.52, 0.65, 0.86]} />
            <mesh name="Firtree_52" geometry={nodes.Firtree_52.geometry} material={materials['World ap']} position={[-6.36, 2.58, -8.76]} rotation={[0.63, 0.55, 0.67]} />
            <mesh name="Firtree_53" geometry={nodes.Firtree_53.geometry} material={materials['World ap']} position={[-45.76, -18.1, 2.96]} rotation={[0.59, 0.44, 0.76]} />
            <mesh name="Firtree_54" geometry={nodes.Firtree_54.geometry} material={materials['World ap']} position={[-60.97, -62.25, 11.37]} rotation={[0.11, 1.05, 1.49]} />
            <mesh name="Firtree_55" geometry={nodes.Firtree_55.geometry} material={materials['World ap']} position={[-61.92, -72.12, 13.63]} rotation={[-0.29, 1.25, 1.95]} />
            <mesh name="Firtree_56" geometry={nodes.Firtree_56.geometry} material={materials['World ap']} position={[-59.43, -74.92, 8.99]} rotation={[0.04, 1.02, 1.61]} />
            <mesh name="Firtree_57" geometry={nodes.Firtree_57.geometry} material={materials['World ap']} position={[-60.61, -76.72, 11.06]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_58" geometry={nodes.Firtree_58.geometry} material={materials['World ap']} position={[-63.26, -66.68, 12.84]} rotation={[0.29, 1.11, 2.72]} />
            <mesh name="Firtree_59" geometry={nodes.Firtree_59.geometry} material={materials['World ap']} position={[-61.48, -76.24, 17.68]} rotation={[-0.58, 1.19, -2.57]} />
            <mesh name="Firtree_6" geometry={nodes.Firtree_6.geometry} material={materials['World ap']} position={[77.85, -3.43, -10.09]} rotation={[0.62, -0.43, 0.75]} />
            <mesh name="Firtree_60" geometry={nodes.Firtree_60.geometry} material={materials['World ap']} position={[-61.84, -81.68, 12.85]} rotation={[-0.86, 1.15, -2.37]} />
            <mesh name="Firtree_61" geometry={nodes.Firtree_61.geometry} material={materials['World ap']} position={[43.94, 25.17, 8.05]} rotation={[1.12, -0.08, -0.46]} />
            <mesh name="Firtree_62" geometry={nodes.Firtree_62.geometry} material={materials['World ap']} position={[68.44, 19.36, 2.33]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_63" geometry={nodes.Firtree_63.geometry} material={materials['World ap']} position={[83.67, 4.75, 0.55]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_64" geometry={nodes.Firtree_64.geometry} material={materials['World ap']} position={[84.08, -9.69, -6.41]} rotation={[0.65, -0.58, -0.11]} />
            <mesh name="Firtree_65" geometry={nodes.Firtree_65.geometry} material={materials['World ap']} position={[59.05, -1.03, -15.54]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_67" geometry={nodes.Firtree_67.geometry} material={materials['World ap']} position={[19.25, 10.38, -1.46]} rotation={[0.76, 0.13, 0.98]} />
            <mesh name="Firtree_69" geometry={nodes.Firtree_69.geometry} material={materials['World ap']} position={[-6.61, 9.17, -9.28]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_7" geometry={nodes.Firtree_7.geometry} material={materials['World ap']} position={[59.97, 15.62, -3.21]} rotation={[0.64, -0.24, 0.81]} />
            <mesh name="Firtree_70" geometry={nodes.Firtree_70.geometry} material={materials['World ap']} position={[-65.87, -70.71, 20.97]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_71" geometry={nodes.Firtree_71.geometry} material={materials['World ap']} position={[-61.21, -56.38, 9.56]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_72" geometry={nodes.Firtree_72.geometry} material={materials['World ap']} position={[-66.63, -63.47, 18.3]} rotation={[-0.06, 1.16, 2.99]} />
            <mesh name="Firtree_73" geometry={nodes.Firtree_73.geometry} material={materials['World ap']} position={[-57.86, -53.97, 4.48]} rotation={[-0.04, 0.88, 2.97]} />
            <mesh name="Firtree_74" geometry={nodes.Firtree_74.geometry} material={materials['World ap']} position={[-62.99, -53.6, 14.82]} rotation={[-0.06, 1.12, 2.99]} />
            <mesh name="Firtree_75" geometry={nodes.Firtree_75.geometry} material={materials['World ap']} position={[-69.89, -53.97, 20.42]} rotation={[-0.25, 1.04, -1.89]} />
            <mesh name="Firtree_76" geometry={nodes.Firtree_76.geometry} material={materials['World ap']} position={[3.91, -0.77, -16.99]} rotation={[0.66, 0.29, -1.57]} />
            <mesh name="Firtree_77" geometry={nodes.Firtree_77.geometry} material={materials['World ap']} position={[21.46, -1.57, -22.04]} rotation={[0.53, 0.03, 2.17]} />
            <mesh name="Firtree_78" geometry={nodes.Firtree_78.geometry} material={materials['World ap']} position={[10.21, -2.78, -19.58]} rotation={[0.61, 0.24, 0.28]} />
            <mesh name="Firtree_80" geometry={nodes.Firtree_80.geometry} material={materials['World ap']} position={[77.95, -19, -14.51]} rotation={[0.44, -0.53, 0.22]} />
            <mesh name="Firtree_81" geometry={nodes.Firtree_81.geometry} material={materials['World ap']} position={[72.02, 4.81, -6.63]} rotation={[0.6, -0.32, 0.05]} />
            <mesh name="Firtree_83" geometry={nodes.Firtree_83.geometry} material={materials['World ap']} position={[52.53, 7.31, -10.78]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_84" geometry={nodes.Firtree_84.geometry} material={materials['World ap']} position={[67.86, 0.03, -10.31]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_85" geometry={nodes.Firtree_85.geometry} material={materials['World ap']} position={[69.72, -9.31, -17.67]} rotation={[0.29, -0.07, 0.66]} />
            <mesh name="Firtree_86" geometry={nodes.Firtree_86.geometry} material={materials['World ap']} position={[66.17, 25.68, 10.25]} rotation={[0.83, -0.35, -1.96]} />
            <mesh name="Firtree_87" geometry={nodes.Firtree_87.geometry} material={materials['World ap']} position={[-16.4, 21.85, 6.13]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_88" geometry={nodes.Firtree_88.geometry} material={materials['World ap']} position={[-18.44, 25.56, 10.74]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_89" geometry={nodes.Firtree_89.geometry} material={materials['World ap']} position={[-56.81, -49.67, 5.84]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_9" geometry={nodes.Firtree_9.geometry} material={materials['World ap']} position={[32.65, 17.22, -0.61]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_90" geometry={nodes.Firtree_90.geometry} material={materials['World ap']} position={[-47.03, -26.86, -1.51]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_91" geometry={nodes.Firtree_91.geometry} material={materials['World ap']} position={[-51.27, -8.26, 18.84]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_92" geometry={nodes.Firtree_92.geometry} material={materials['World ap']} position={[-56.29, -33.98, 4]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_94" geometry={nodes.Firtree_94.geometry} material={materials['World ap']} position={[100.81, -115.34, 11.14]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_96" geometry={nodes.Firtree_96.geometry} material={materials['World ap']} position={[58.51, -147.99, 13.82]} rotation={[-1.16, -0.36, 3.09]} />
            <mesh name="Firtree_97" geometry={nodes.Firtree_97.geometry} material={materials['World ap']} position={[96.41, -119.21, 6.79]} rotation={[-0.67, -0.6, -0.64]} />
            <mesh name="Firtree_98" geometry={nodes.Firtree_98.geometry} material={materials['World ap']} position={[85.58, -146.63, 43.14]} rotation={[-1.49, -0.41, -1.75]} />
            <mesh name="Firtree_99" geometry={nodes.Firtree_99.geometry} material={materials['World ap']} position={[96.56, -136.96, 36.08]} rotation={[-1.3, -0.79, -1.27]} />
          </group>
          <group name="Palms" position={[-68.62, 82.82, 15.93]} rotation={[2.1, 0.5, 1.38]}>
            <group name="Africa" position={[68.89, 73.37, 49.11]} rotation={[0.26, -0.67, 0.01]}>
              <mesh name="Palm_10_3" geometry={nodes.Palm_10_3.geometry} material={materials['World ap']} position={[-21.32, 22.37, 46.56]} rotation={[1.05, 0.85, -0.29]} />
              <mesh name="Palm_11_3" geometry={nodes.Palm_11_3.geometry} material={materials['World ap']} position={[3.38, 21.43, 18.13]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_3" geometry={nodes.Palm_12_3.geometry} material={materials['World ap']} position={[9.39, 22.77, 21.96]} rotation={[1.23, -0.09, -1.58]} />
              <mesh name="Palm_14_3" geometry={nodes.Palm_14_3.geometry} material={materials['World ap']} position={[27.71, 27.28, 40.3]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_3" geometry={nodes.Palm_15_3.geometry} material={materials['World ap']} position={[17.09, 18.71, 26.67]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_16_3" geometry={nodes.Palm_16_3.geometry} material={materials['World ap']} position={[9.83, 25.46, 30.64]} rotation={[1.15, -0.33, -0.34]} />
              <mesh name="Palm_17_3" geometry={nodes.Palm_17_3.geometry} material={materials['World ap']} position={[15.03, 19.78, 22.07]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_18_3" geometry={nodes.Palm_18_3.geometry} material={materials['World ap']} position={[6.95, 17, 16.77]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_19_3" geometry={nodes.Palm_19_3.geometry} material={materials['World ap']} position={[12.76, 12.63, 5.63]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_1_3" geometry={nodes.Palm_1_3.geometry} material={materials['World ap']} position={[11.41, -7.46, -14.61]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_20_3" geometry={nodes.Palm_20_3.geometry} material={materials['World ap']} position={[17.89, 13.31, 8.13]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_23_3" geometry={nodes.Palm_23_3.geometry} material={materials['World ap']} position={[-33.19, 0.21, 17.17]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_24_3" geometry={nodes.Palm_24_3.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_3" geometry={nodes.Palm_25_3.geometry} material={materials['World ap']} position={[20.42, 27.91, 36.77]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_3" geometry={nodes.Palm_26_3.geometry} material={materials['World ap']} position={[18.13, 3.44, 0.72]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_3" geometry={nodes.Palm_27_3.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_3" geometry={nodes.Palm_28_3.geometry} material={materials['World ap']} position={[28.17, -9.24, -5.95]} rotation={[1.01, -0.86, 0.94]} />
              <mesh name="Palm_29_3" geometry={nodes.Palm_29_3.geometry} material={materials['World ap']} position={[18.34, -0.34, -9.53]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_2_4" geometry={nodes.Palm_2_4.geometry} material={materials['World ap']} position={[23.43, -0.6, -3.57]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_3" geometry={nodes.Palm_30_3.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_32_2" geometry={nodes.Palm_32_2.geometry} material={materials['World ap']} position={[-13.49, 25.12, 47.26]} rotation={[0.9, 0.36, -0.21]} />
              <mesh name="Palm_33_2" geometry={nodes.Palm_33_2.geometry} material={materials['World ap']} position={[-17.55, 23.96, 49.11]} rotation={[1.68, 0.48, -0.43]} />
              <mesh name="Palm_34_2" geometry={nodes.Palm_34_2.geometry} material={materials['World ap']} position={[-19.74, -0.58, 5.87]} rotation={[0.52, 0.92, -0.08]} />
              <mesh name="Palm_35_2" geometry={nodes.Palm_35_2.geometry} material={materials['World ap']} position={[-13.45, 24.64, 53.09]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36_2" geometry={nodes.Palm_36_2.geometry} material={materials['World ap']} position={[-20.51, 24.23, 49.63]} rotation={[1.62, 0.74, -0.19]} />
              <mesh name="Palm_37_2" geometry={nodes.Palm_37_2.geometry} material={materials['World ap']} position={[-3.36, 28.29, 51.92]} rotation={[2, 0.17, -0.72]} />
              <mesh name="Palm_38_2" geometry={nodes.Palm_38_2.geometry} material={materials['World ap']} position={[-23.26, 21.37, 43.92]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_39_2" geometry={nodes.Palm_39_2.geometry} material={materials['World ap']} position={[-40.85, 1.14, 39.29]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_3_3" geometry={nodes.Palm_3_3.geometry} material={materials['World ap']} position={[15.01, 6.9, 0.26]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_3_4" geometry={nodes.Palm_3_4.geometry} material={materials['World ap']} position={[-14.08, -0.89, -0.25]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40_2" geometry={nodes.Palm_40_2.geometry} material={materials['World ap']} position={[-35.7, 11.31, 38.14]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_41_2" geometry={nodes.Palm_41_2.geometry} material={materials['World ap']} position={[-42.85, -1, 35.96]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_42_2" geometry={nodes.Palm_42_2.geometry} material={materials['World ap']} position={[-39.49, -1.78, 19.19]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_43_2" geometry={nodes.Palm_43_2.geometry} material={materials['World ap']} position={[-42.86, -2.5, 23]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_44_2" geometry={nodes.Palm_44_2.geometry} material={materials['World ap']} position={[-47.57, -6.66, 27.07]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_45_2" geometry={nodes.Palm_45_2.geometry} material={materials['World ap']} position={[-49, -11.96, 24.28]} rotation={[0.78, 0.89, -0.25]} />
              <mesh name="Palm_46_2" geometry={nodes.Palm_46_2.geometry} material={materials['World ap']} position={[4.56, 29.69, 48.51]} rotation={[1.26, -0.01, -0.32]} />
              <mesh name="Palm_48_2" geometry={nodes.Palm_48_2.geometry} material={materials['World ap']} position={[-43.37, -1.41, 32.08]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_49_2" geometry={nodes.Palm_49_2.geometry} material={materials['World ap']} position={[-42.65, -2.77, 29.47]} rotation={[0.76, 0.91, -0.3]} />
              <mesh name="Palm_50_2" geometry={nodes.Palm_50_2.geometry} material={materials['World ap']} position={[-0.93, 15.13, 12.05]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_51_2" geometry={nodes.Palm_51_2.geometry} material={materials['World ap']} position={[4.74, 21.9, 16]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_52_2" geometry={nodes.Palm_52_2.geometry} material={materials['World ap']} position={[-15.6, -2.2, 2.14]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_53_2" geometry={nodes.Palm_53_2.geometry} material={materials['World ap']} position={[-8.65, -5.18, -11.32]} rotation={[0.94, 0.53, -0.23]} />
              <mesh name="Palm_54_2" geometry={nodes.Palm_54_2.geometry} material={materials['World ap']} position={[1.47, 20.88, 15.56]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_55_2" geometry={nodes.Palm_55_2.geometry} material={materials['World ap']} position={[9.27, 25.49, 27]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_56_2" geometry={nodes.Palm_56_2.geometry} material={materials['World ap']} position={[8.67, 22.7, 23.21]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_57_2" geometry={nodes.Palm_57_2.geometry} material={materials['World ap']} position={[-7.07, -4.42, -5.71]} rotation={[0.15, 0.78, 0.17]} />
              <mesh name="Palm_5_3" geometry={nodes.Palm_5_3.geometry} material={materials['World ap']} position={[-10.07, 6.41, 9.26]} rotation={[1.14, 0.55, -0.23]} />
              <mesh name="Palm_6_3" geometry={nodes.Palm_6_3.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_7_3" geometry={nodes.Palm_7_3.geometry} material={materials['World ap']} position={[3.94, 17.17, 12.13]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_81_3" geometry={nodes.Palm_81_3.geometry} material={materials['World ap']} position={[-7.51, -3.03, -2.06]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_82_3" geometry={nodes.Palm_82_3.geometry} material={materials['World ap']} position={[-2.09, 6.81, 1.41]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_85_2" geometry={nodes.Palm_85_2.geometry} material={materials['World ap']} position={[1.9, -12.53, -7.88]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_3" geometry={nodes.Palm_86_3.geometry} material={materials['World ap']} position={[8.57, 5.79, -0.2]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_87_3" geometry={nodes.Palm_87_3.geometry} material={materials['World ap']} position={[-4.39, 9.09, 8.33]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_88_2" geometry={nodes.Palm_88_2.geometry} material={materials['World ap']} position={[3.83, 11.71, 5.27]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_3" geometry={nodes.Palm_89_3.geometry} material={materials['World ap']} position={[-10.33, 4.11, 2.8]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_8_3" geometry={nodes.Palm_8_3.geometry} material={materials['World ap']} position={[-26.69, 0.7, 9.89]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_91_3" geometry={nodes.Palm_91_3.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_9_3" geometry={nodes.Palm_9_3.geometry} material={materials['World ap']} position={[-3.81, 12.33, 11.07]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="America" position={[121.64, 40.46, 118.25]} rotation={[0.68, -0.89, -0.51]}>
              <mesh name="Palm_10_2" geometry={nodes.Palm_10_2.geometry} material={materials['World ap']} position={[1.09, 32.77, 62.86]} rotation={[1.52, 0.11, -0.41]} />
              <mesh name="Palm_11_2" geometry={nodes.Palm_11_2.geometry} material={materials['World ap']} position={[1.17, 16.92, 21.54]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_2" geometry={nodes.Palm_12_2.geometry} material={materials['World ap']} position={[9.47, 17.04, 22.85]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_13_2" geometry={nodes.Palm_13_2.geometry} material={materials['World ap']} position={[20.58, 19.69, 35.5]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_14_2" geometry={nodes.Palm_14_2.geometry} material={materials['World ap']} position={[28.47, 20.35, 41.66]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_2" geometry={nodes.Palm_15_2.geometry} material={materials['World ap']} position={[18.66, 18.26, 23.68]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_16_2" geometry={nodes.Palm_16_2.geometry} material={materials['World ap']} position={[9.83, 25.46, 30.64]} rotation={[1.15, -0.33, -0.34]} />
              <mesh name="Palm_17_2" geometry={nodes.Palm_17_2.geometry} material={materials['World ap']} position={[15.11, 14.06, 22.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_18_2" geometry={nodes.Palm_18_2.geometry} material={materials['World ap']} position={[8.44, 10.88, 14.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_19_2" geometry={nodes.Palm_19_2.geometry} material={materials['World ap']} position={[14.6, 5.34, 7.67]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_1_2" geometry={nodes.Palm_1_2.geometry} material={materials['World ap']} position={[15.13, -16.44, -8.07]} rotation={[0.21, -0.1, 0.65]} />
              <mesh name="Palm_20_2" geometry={nodes.Palm_20_2.geometry} material={materials['World ap']} position={[19.1, -0.7, 3.92]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_21_2" geometry={nodes.Palm_21_2.geometry} material={materials['World ap']} position={[-4.9, -7.44, -8.22]} rotation={[0.76, 0.52, -0.38]} />
              <mesh name="Palm_22_2" geometry={nodes.Palm_22_2.geometry} material={materials['World ap']} position={[-13.85, -15.36, -8.66]} rotation={[0.16, 0.63, -0.04]} />
              <mesh name="Palm_23_2" geometry={nodes.Palm_23_2.geometry} material={materials['World ap']} position={[-14.8, -9.69, -5.25]} rotation={[0.16, 0.63, -0.04]} />
              <mesh name="Palm_24_2" geometry={nodes.Palm_24_2.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_2" geometry={nodes.Palm_25_2.geometry} material={materials['World ap']} position={[20.85, 21.4, 37.95]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_2" geometry={nodes.Palm_26_2.geometry} material={materials['World ap']} position={[18.25, -4.72, 1.99]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_2" geometry={nodes.Palm_27_2.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_2" geometry={nodes.Palm_28_2.geometry} material={materials['World ap']} position={[-1.08, -28.79, -16.33]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_29_2" geometry={nodes.Palm_29_2.geometry} material={materials['World ap']} position={[10.77, -19.68, -13.64]} rotation={[0.15, -0.01, -0.1]} />
              <mesh name="Palm_2_2" geometry={nodes.Palm_2_2.geometry} material={materials['World ap']} position={[15.13, -1.26, 1.52]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_2_3" geometry={nodes.Palm_2_3.geometry} material={materials['World ap']} position={[18.58, -12.3, -4.65]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_2" geometry={nodes.Palm_30_2.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_31" geometry={nodes.Palm_31.geometry} material={materials['World ap']} position={[7.09, -24.83, -15.76]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_33" geometry={nodes.Palm_33.geometry} material={materials['World ap']} position={[-9.88, 31.04, 52.08]} rotation={[1.29, 0.28, -0.41]} />
              <mesh name="Palm_35" geometry={nodes.Palm_35.geometry} material={materials['World ap']} position={[-5.33, 31.26, 53.11]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36" geometry={nodes.Palm_36.geometry} material={materials['World ap']} position={[-16.15, 32.22, 57.59]} rotation={[1.03, 0.09, -0.48]} />
              <mesh name="Palm_37" geometry={nodes.Palm_37.geometry} material={materials['World ap']} position={[-16.05, 29.53, 55.34]} rotation={[0.31, 0.54, -0.78]} />
              <mesh name="Palm_38" geometry={nodes.Palm_38.geometry} material={materials['World ap']} position={[-21.64, 29.25, 54.54]} rotation={[0.6, 0.24, -0.89]} />
              <mesh name="Palm_39" geometry={nodes.Palm_39.geometry} material={materials['World ap']} position={[31.58, 24.81, 90.81]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_3_2" geometry={nodes.Palm_3_2.geometry} material={materials['World ap']} position={[-13.72, -1.12, 0.67]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40" geometry={nodes.Palm_40.geometry} material={materials['World ap']} position={[36.71, 26.56, 91.51]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_42" geometry={nodes.Palm_42.geometry} material={materials['World ap']} position={[-2, -24.98, -15.85]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_43" geometry={nodes.Palm_43.geometry} material={materials['World ap']} position={[-4.92, -21.9, -11.27]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_44" geometry={nodes.Palm_44.geometry} material={materials['World ap']} position={[0.96, -19.03, -13.48]} rotation={[0.01, -0.18, 0.35]} />
              <mesh name="Palm_45" geometry={nodes.Palm_45.geometry} material={materials['World ap']} position={[10.66, -26.03, -16.24]} rotation={[0.05, -0.18, 0.37]} />
              <mesh name="Palm_47" geometry={nodes.Palm_47.geometry} material={materials['World ap']} position={[6.85, -30.22, -14.77]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_48" geometry={nodes.Palm_48.geometry} material={materials['World ap']} position={[6.85, 23.16, 36.91]} rotation={[1.52, -0.14, -0.33]} />
              <mesh name="Palm_49" geometry={nodes.Palm_49.geometry} material={materials['World ap']} position={[15.97, 24.78, 46.53]} rotation={[1.63, -0.14, -0.05]} />
              <mesh name="Palm_4_2" geometry={nodes.Palm_4_2.geometry} material={materials['World ap']} position={[-15.94, 3.36, 7.85]} rotation={[1.01, 0.76, -0.27]} />
              <mesh name="Palm_50" geometry={nodes.Palm_50.geometry} material={materials['World ap']} position={[14.38, 23.52, 38.59]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_51" geometry={nodes.Palm_51.geometry} material={materials['World ap']} position={[15.89, 21.9, 32.79]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_53" geometry={nodes.Palm_53.geometry} material={materials['World ap']} position={[-6.08, 22.21, 29.79]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_54" geometry={nodes.Palm_54.geometry} material={materials['World ap']} position={[1.22, 23.25, 35.82]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_56" geometry={nodes.Palm_56.geometry} material={materials['World ap']} position={[30.28, 21.12, 42.5]} rotation={[1.15, -0.2, -0.29]} />
              <mesh name="Palm_57" geometry={nodes.Palm_57.geometry} material={materials['World ap']} position={[-7.98, 31.92, 58.25]} rotation={[1.54, 0.06, -0.82]} />
              <mesh name="Palm_58" geometry={nodes.Palm_58.geometry} material={materials['World ap']} position={[42.36, 22.15, 84.15]} rotation={[1.61, -0.07, -0.39]} />
              <mesh name="Palm_59" geometry={nodes.Palm_59.geometry} material={materials['World ap']} position={[39.86, 20.97, 78.61]} rotation={[1.28, -0.28, -0.43]} />
              <mesh name="Palm_60" geometry={nodes.Palm_60.geometry} material={materials['World ap']} position={[34.94, 23.46, 80.08]} rotation={[1.64, -0.12, -0.79]} />
              <mesh name="Palm_61" geometry={nodes.Palm_61.geometry} material={materials['World ap']} position={[57.99, 12.01, 88.43]} rotation={[1.97, -0.59, -0.18]} />
              <mesh name="Palm_63" geometry={nodes.Palm_63.geometry} material={materials['World ap']} position={[59.77, 6.97, 89.69]} rotation={[2.42, -0.87, 0.18]} />
              <mesh name="Palm_64" geometry={nodes.Palm_64.geometry} material={materials['World ap']} position={[60.03, 7.69, 87.34]} rotation={[1.53, -1.09, -0.82]} />
              <mesh name="Palm_65" geometry={nodes.Palm_65.geometry} material={materials['World ap']} position={[58.57, 11.76, 78.12]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_68" geometry={nodes.Palm_68.geometry} material={materials['World ap']} position={[10.78, 2.32, 3.3]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_69" geometry={nodes.Palm_69.geometry} material={materials['World ap']} position={[5.83, 9.31, 9.37]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_6_2" geometry={nodes.Palm_6_2.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_70" geometry={nodes.Palm_70.geometry} material={materials['World ap']} position={[-1, -3.06, -0.09]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_71" geometry={nodes.Palm_71.geometry} material={materials['World ap']} position={[14.54, 8.87, 17.29]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_72" geometry={nodes.Palm_72.geometry} material={materials['World ap']} position={[12.31, 17.49, 25.91]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_73" geometry={nodes.Palm_73.geometry} material={materials['World ap']} position={[18.57, 21.78, 32.36]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_74" geometry={nodes.Palm_74.geometry} material={materials['World ap']} position={[23.75, 0.25, 12.2]} rotation={[1.2, -0.25, -0.28]} />
              <mesh name="Palm_75" geometry={nodes.Palm_75.geometry} material={materials['World ap']} position={[25.34, -1.19, 6.49]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_76" geometry={nodes.Palm_76.geometry} material={materials['World ap']} position={[22.95, 8.11, 17.72]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_77" geometry={nodes.Palm_77.geometry} material={materials['World ap']} position={[29.07, 15.54, 34.3]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_78" geometry={nodes.Palm_78.geometry} material={materials['World ap']} position={[29.64, 12.36, 30.22]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_79" geometry={nodes.Palm_79.geometry} material={materials['World ap']} position={[19.9, 6.53, 12.73]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_7_2" geometry={nodes.Palm_7_2.geometry} material={materials['World ap']} position={[4.02, 11.45, 13.01]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_80" geometry={nodes.Palm_80.geometry} material={materials['World ap']} position={[6.74, -9.38, -4.84]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_81_2" geometry={nodes.Palm_81_2.geometry} material={materials['World ap']} position={[-7.51, -3.03, -2.06]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_82_2" geometry={nodes.Palm_82_2.geometry} material={materials['World ap']} position={[-2, 0.7, 2.35]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_83" geometry={nodes.Palm_83.geometry} material={materials['World ap']} position={[10.41, -4.94, -3.71]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_84" geometry={nodes.Palm_84.geometry} material={materials['World ap']} position={[9.41, -10.5, -11.59]} rotation={[0.21, -0.1, -0.15]} />
              <mesh name="Palm_85" geometry={nodes.Palm_85.geometry} material={materials['World ap']} position={[4.64, -12.14, -9.13]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_2" geometry={nodes.Palm_86_2.geometry} material={materials['World ap']} position={[9.17, -1.26, -0.09]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_2" geometry={nodes.Palm_89_2.geometry} material={materials['World ap']} position={[-11.47, 3.02, 2.45]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_90_2" geometry={nodes.Palm_90_2.geometry} material={materials['World ap']} position={[0.86, -7.12, -3.88]} rotation={[0.48, 0.17, -0.3]} />
              <mesh name="Palm_91_2" geometry={nodes.Palm_91_2.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_92" geometry={nodes.Palm_92.geometry} material={materials['World ap']} position={[28.35, 1.38, 13.13]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_93" geometry={nodes.Palm_93.geometry} material={materials['World ap']} position={[30.5, -22.16, -7.62]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_94" geometry={nodes.Palm_94.geometry} material={materials['World ap']} position={[31.78, -11.29, 3.43]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_96" geometry={nodes.Palm_96.geometry} material={materials['World ap']} position={[16.82, -8.7, -0.35]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_97" geometry={nodes.Palm_97.geometry} material={materials['World ap']} position={[21.61, -20.23, -9.52]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_98" geometry={nodes.Palm_98.geometry} material={materials['World ap']} position={[10.82, -33.15, -15.81]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_99" geometry={nodes.Palm_99.geometry} material={materials['World ap']} position={[-13.65, 12.21, 18.63]} rotation={[1.43, 0.48, -0.37]} />
              <mesh name="Palm_9_2" geometry={nodes.Palm_9_2.geometry} material={materials['World ap']} position={[-3.77, 9.62, 11.49]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="Asia" position={[6.96, -47.91, 32.15]}>
              <mesh name="Palm_100" geometry={nodes.Palm_100.geometry} material={materials['World ap']} position={[-6.14, 123.21, 32.21]} rotation={[0.43, 0.75, -0.08]} />
              <mesh name="Palm_101" geometry={nodes.Palm_101.geometry} material={materials['World ap']} position={[-8.04, 125.27, 37.37]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_102" geometry={nodes.Palm_102.geometry} material={materials['World ap']} position={[-8.88, 125.11, 37.33]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_104" geometry={nodes.Palm_104.geometry} material={materials['World ap']} position={[-7.67, 125.73, 45.68]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_105" geometry={nodes.Palm_105.geometry} material={materials['World ap']} position={[-2.09, 122.07, 29.58]} rotation={[1.32, 0.4, -0.44]} />
              <mesh name="Palm_106" geometry={nodes.Palm_106.geometry} material={materials['World ap']} position={[-2.56, 124.41, 31.17]} rotation={[1.69, 0.21, -0.55]} />
              <mesh name="Palm_108" geometry={nodes.Palm_108.geometry} material={materials['World ap']} position={[-13.92, 121.37, 32.88]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_109" geometry={nodes.Palm_109.geometry} material={materials['World ap']} position={[44.86, 15.81, -34.66]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_10_4" geometry={nodes.Palm_10_4.geometry} material={materials['World ap']} position={[-22.48, 10.47, -24.86]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_110" geometry={nodes.Palm_110.geometry} material={materials['World ap']} position={[38.25, 18.88, -36.83]} rotation={[-0.23, -0.26, 0.13]} />
              <mesh name="Palm_111" geometry={nodes.Palm_111.geometry} material={materials['World ap']} position={[25.39, 19.94, -38.36]} rotation={[-0.03, 0.13, 0.1]} />
              <mesh name="Palm_112" geometry={nodes.Palm_112.geometry} material={materials['World ap']} position={[32.61, 18.2, -36.51]} rotation={[-0.28, 0.1, 0.12]} />
              <mesh name="Palm_113" geometry={nodes.Palm_113.geometry} material={materials['World ap']} position={[37.33, 7.65, -36.14]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_115" geometry={nodes.Palm_115.geometry} material={materials['World ap']} position={[21.25, 3.26, -36.36]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_117" geometry={nodes.Palm_117.geometry} material={materials['World ap']} position={[13.26, 19.18, -39.68]} rotation={[0, -0.18, 0.1]} />
              <mesh name="Palm_11_4" geometry={nodes.Palm_11_4.geometry} material={materials['World ap']} position={[-15.51, 31.82, -27.99]} rotation={[-0.41, 0.68, 0.36]} />
              <mesh name="Palm_12_4" geometry={nodes.Palm_12_4.geometry} material={materials['World ap']} position={[-12.2, 5, -24.81]} rotation={[-0.73, 0.53, 0.26]} />
              <mesh name="Palm_13_4" geometry={nodes.Palm_13_4.geometry} material={materials['World ap']} position={[-0.3, -48.35, 3.75]} rotation={[-1.14, 0.31, 0.39]} />
              <mesh name="Palm_14_4" geometry={nodes.Palm_14_4.geometry} material={materials['World ap']} position={[-0.54, -53.93, 10.49]} rotation={[-1.51, 0.14, 0.47]} />
              <mesh name="Palm_15_4" geometry={nodes.Palm_15_4.geometry} material={materials['World ap']} position={[-12.21, -44.5, 8.02]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_17_4" geometry={nodes.Palm_17_4.geometry} material={materials['World ap']} position={[12.99, -62, 24.82]} rotation={[-1.57, 0.23, 0.48]} />
              <mesh name="Palm_18_4" geometry={nodes.Palm_18_4.geometry} material={materials['World ap']} position={[19.74, -57.38, 24.24]} rotation={[-0.96, 0.1, 0.29]} />
              <mesh name="Palm_19_4" geometry={nodes.Palm_19_4.geometry} material={materials['World ap']} position={[15.82, -61.47, 32.12]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_1_4" geometry={nodes.Palm_1_4.geometry} material={materials['World ap']} position={[-6.96, 35.61, -33.67]} rotation={[-0.25, -0.12, 0.13]} />
              <mesh name="Palm_20_4" geometry={nodes.Palm_20_4.geometry} material={materials['World ap']} position={[-9.94, -49.99, 21.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_21_4" geometry={nodes.Palm_21_4.geometry} material={materials['World ap']} position={[56.8, 94.76, -12.26]} rotation={[0.87, 0.7, -2.68]} />
              <mesh name="Palm_22_4" geometry={nodes.Palm_22_4.geometry} material={materials['World ap']} position={[12.51, -18.38, -22.47]} rotation={[-0.85, 0.4, 0.31]} />
              <mesh name="Palm_23_4" geometry={nodes.Palm_23_4.geometry} material={materials['World ap']} position={[0.97, -28.53, -19.17]} rotation={[-0.79, 0.28, 0.2]} />
              <mesh name="Palm_24_4" geometry={nodes.Palm_24_4.geometry} material={materials['World ap']} position={[-2.8, -16.7, -16.91]} rotation={[-0.53, 0.44, -0.31]} />
              <mesh name="Palm_25_4" geometry={nodes.Palm_25_4.geometry} material={materials['World ap']} position={[-6.63, -25.11, -10.66]} rotation={[-0.69, 0.48, -0.24]} />
              <mesh name="Palm_27_4" geometry={nodes.Palm_27_4.geometry} material={materials['World ap']} position={[-12.31, 56.29, -27.76]} rotation={[0.28, 0.86, -0.64]} />
              <mesh name="Palm_28_4" geometry={nodes.Palm_28_4.geometry} material={materials['World ap']} position={[1.92, 70.39, -29.82]} rotation={[0.37, 0.16, -0.82]} />
              <mesh name="Palm_2_5" geometry={nodes.Palm_2_5.geometry} material={materials['World ap']} position={[-12.47, 42, -28.34]} rotation={[0.13, 0.62, 0.06]} />
              <mesh name="Palm_30_4" geometry={nodes.Palm_30_4.geometry} material={materials['World ap']} position={[1.07, 81.17, -24.54]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_31_3" geometry={nodes.Palm_31_3.geometry} material={materials['World ap']} position={[-11.23, 84.41, -22.14]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_32_3" geometry={nodes.Palm_32_3.geometry} material={materials['World ap']} position={[-18.41, -13.05, -20.15]} rotation={[-0.28, 0.36, -0.41]} />
              <mesh name="Palm_33_3" geometry={nodes.Palm_33_3.geometry} material={materials['World ap']} position={[-11.31, -56.66, 29.97]} rotation={[-1.38, 0.53, 0.11]} />
              <mesh name="Palm_34_3" geometry={nodes.Palm_34_3.geometry} material={materials['World ap']} position={[-2.82, -56.4, 22.62]} rotation={[-1.38, 0.53, 0.11]} />
              <mesh name="Palm_35_3" geometry={nodes.Palm_35_3.geometry} material={materials['World ap']} position={[66.35, 81.93, -16.06]} rotation={[0.58, -0.41, -0.11]} />
              <mesh name="Palm_36_3" geometry={nodes.Palm_36_3.geometry} material={materials['World ap']} position={[64.32, 85.82, -14.95]} rotation={[0.21, 0.21, -0.4]} />
              <mesh name="Palm_37_3" geometry={nodes.Palm_37_3.geometry} material={materials['World ap']} position={[66.31, 89.26, -15.02]} rotation={[0.81, -0.06, -0.44]} />
              <mesh name="Palm_38_3" geometry={nodes.Palm_38_3.geometry} material={materials['World ap']} position={[61.91, 90.39, -14.24]} rotation={[0.81, -0.06, -1.88]} />
              <mesh name="Palm_39_3" geometry={nodes.Palm_39_3.geometry} material={materials['World ap']} position={[62.55, 93.74, -11.84]} rotation={[1.25, -0.19, -1.82]} />
              <mesh name="Palm_3_5" geometry={nodes.Palm_3_5.geometry} material={materials['World ap']} position={[-2.4, 59.91, -31.93]} rotation={[0.4, 0.43, -0.76]} />
              <mesh name="Palm_40_3" geometry={nodes.Palm_40_3.geometry} material={materials['World ap']} position={[57.6, 94.04, -13.93]} rotation={[1.25, -0.19, -2.79]} />
              <mesh name="Palm_41_3" geometry={nodes.Palm_41_3.geometry} material={materials['World ap']} position={[-3.62, 91.38, -16.9]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_43_3" geometry={nodes.Palm_43_3.geometry} material={materials['World ap']} position={[4.95, 77.69, -25.82]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_45_3" geometry={nodes.Palm_45_3.geometry} material={materials['World ap']} position={[2.08, 94.42, -14.92]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_46_3" geometry={nodes.Palm_46_3.geometry} material={materials['World ap']} position={[-8.11, 96.53, -11.75]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_47_3" geometry={nodes.Palm_47_3.geometry} material={materials['World ap']} position={[-0.42, 101.36, -9.39]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_48_3" geometry={nodes.Palm_48_3.geometry} material={materials['World ap']} position={[-8.56, 62.86, -29.52]} rotation={[0.3, 0.37, 0.09]} />
              <mesh name="Palm_49_3" geometry={nodes.Palm_49_3.geometry} material={materials['World ap']} position={[-13.49, 88.25, -16.26]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_4_4" geometry={nodes.Palm_4_4.geometry} material={materials['World ap']} position={[-6.96, 47.91, -31]} />
              <mesh name="Palm_4_5" geometry={nodes.Palm_4_5.geometry} material={materials['World ap']} position={[4.96, 18.2, -38.01]} rotation={[-0.41, 0.36, -0.29]} />
              <mesh name="Palm_50_3" geometry={nodes.Palm_50_3.geometry} material={materials['World ap']} position={[-2.95, 86.58, -24.93]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_51_3" geometry={nodes.Palm_51_3.geometry} material={materials['World ap']} position={[-11.17, 82.09, -28.5]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_52_3" geometry={nodes.Palm_52_3.geometry} material={materials['World ap']} position={[-7.6, -32.18, -9.91]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_53_3" geometry={nodes.Palm_53_3.geometry} material={materials['World ap']} position={[-17.81, -27.9, -10.09]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_54_3" geometry={nodes.Palm_54_3.geometry} material={materials['World ap']} position={[-11.72, -38.75, -0.59]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_55_3" geometry={nodes.Palm_55_3.geometry} material={materials['World ap']} position={[-13.49, -59.24, 40.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_59_2" geometry={nodes.Palm_59_2.geometry} material={materials['World ap']} position={[-11.76, -63.36, 43.64]} rotation={[-1.69, 0.26, 0.81]} />
              <mesh name="Palm_5_4" geometry={nodes.Palm_5_4.geometry} material={materials['World ap']} position={[-10.37, 29.78, -35.92]} rotation={[-0.36, 0.51, -0.32]} />
              <mesh name="Palm_62_2" geometry={nodes.Palm_62_2.geometry} material={materials['World ap']} position={[-7.15, -58.58, 30.92]} rotation={[-1.42, -0.09, 0.42]} />
              <mesh name="Palm_63_2" geometry={nodes.Palm_63_2.geometry} material={materials['World ap']} position={[-8.88, -58.84, 35.78]} rotation={[-1.61, 0.26, 0.45]} />
              <mesh name="Palm_66_2" geometry={nodes.Palm_66_2.geometry} material={materials['World ap']} position={[5.36, -51.73, 6.74]} rotation={[-1.06, -0.28, 0.34]} />
              <mesh name="Palm_67_2" geometry={nodes.Palm_67_2.geometry} material={materials['World ap']} position={[3.72, -44.84, -0.92]} rotation={[-1.06, -0.28, 0.34]} />
              <mesh name="Palm_69_2" geometry={nodes.Palm_69_2.geometry} material={materials['World ap']} position={[13.29, -28.14, -21.49]} rotation={[-0.62, 0.13, 0.27]} />
              <mesh name="Palm_78_2" geometry={nodes.Palm_78_2.geometry} material={materials['World ap']} position={[22.4, -68.19, 38.59]} rotation={[-1.48, 0.13, 0.3]} />
              <mesh name="Palm_7_4" geometry={nodes.Palm_7_4.geometry} material={materials['World ap']} position={[-0.29, 2.32, -29.92]} rotation={[-0.26, 0.49, 0.05]} />
              <mesh name="Palm_82_4" geometry={nodes.Palm_82_4.geometry} material={materials['World ap']} position={[-13.35, -49.14, 15.75]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_83_3" geometry={nodes.Palm_83_3.geometry} material={materials['World ap']} position={[-16.47, -39.92, 7.12]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_84_2" geometry={nodes.Palm_84_2.geometry} material={materials['World ap']} position={[-6.14, -49.28, 7.92]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_89_4" geometry={nodes.Palm_89_4.geometry} material={materials['World ap']} position={[26.2, -62.36, 27]} rotation={[-1.14, 0.3, 0.15]} />
              <mesh name="Palm_8_4" geometry={nodes.Palm_8_4.geometry} material={materials['World ap']} position={[7.44, -8.64, -32.8]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_90_4" geometry={nodes.Palm_90_4.geometry} material={materials['World ap']} position={[23.02, -62.09, 28.57]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_92_2" geometry={nodes.Palm_92_2.geometry} material={materials['World ap']} position={[46.45, -65.7, 43.01]} rotation={[-1.53, -0.41, 0.53]} />
              <mesh name="Palm_94_2" geometry={nodes.Palm_94_2.geometry} material={materials['World ap']} position={[-14.09, 115.96, 25.68]} rotation={[0.98, 0.09, -0.14]} />
              <mesh name="Palm_95_2" geometry={nodes.Palm_95_2.geometry} material={materials['World ap']} position={[-5.65, 123.65, 31.65]} rotation={[0.38, 0.15, -0.06]} />
              <mesh name="Palm_96_2" geometry={nodes.Palm_96_2.geometry} material={materials['World ap']} position={[-9.15, 121.5, 42.91]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_97_2" geometry={nodes.Palm_97_2.geometry} material={materials['World ap']} position={[-13.76, 119.68, 28.38]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_98_2" geometry={nodes.Palm_98_2.geometry} material={materials['World ap']} position={[-1.95, 127.94, 53.49]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_99_2" geometry={nodes.Palm_99_2.geometry} material={materials['World ap']} position={[2.88, 131.09, 57.25]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_9_4" geometry={nodes.Palm_9_4.geometry} material={materials['World ap']} position={[-0.01, -3.81, -27.17]} rotation={[-0.7, 0.44, 0.25]} />
            </group>
            <group name="Australia" position={[72.22, -105.13, 60.74]} rotation={[-2.39, 0, -0.13]}>
              <mesh name="Palm" geometry={nodes.Palm.geometry} material={materials['World ap']} position={[4.06, -4.7, -8.2]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_1" geometry={nodes.Palm_1.geometry} material={materials['World ap']} position={[35.19, -8.62, 19.61]} rotation={[1.52, -0.91, -3.09]} />
              <mesh name="Palm_10" geometry={nodes.Palm_10.geometry} material={materials['World ap']} position={[34.25, -8.73, 31.27]} rotation={[1.88, -0.79, -2.79]} />
              <mesh name="Palm_11" geometry={nodes.Palm_11.geometry} material={materials['World ap']} position={[11.38, 4.91, 34.49]} rotation={[2.04, -0.19, -2.25]} />
              <mesh name="Palm_12" geometry={nodes.Palm_12.geometry} material={materials['World ap']} position={[8.79, 4, 37.35]} rotation={[2.4, -0.27, -2.19]} />
              <mesh name="Palm_13" geometry={nodes.Palm_13.geometry} material={materials['World ap']} position={[20.71, -1.13, 36.98]} rotation={[1.66, -0.55, -2.4]} />
              <mesh name="Palm_14" geometry={nodes.Palm_14.geometry} material={materials['World ap']} position={[16.71, 2.07, 37.35]} rotation={[1.9, -0.21, -2.62]} />
              <mesh name="Palm_15" geometry={nodes.Palm_15.geometry} material={materials['World ap']} position={[15.22, 3.64, 32.1]} rotation={[1.64, -0.38, -1.9]} />
              <mesh name="Palm_16" geometry={nodes.Palm_16.geometry} material={materials['World ap']} position={[20.26, 1.91, 31.57]} rotation={[2.04, -0.53, -2.14]} />
              <mesh name="Palm_17" geometry={nodes.Palm_17.geometry} material={materials['World ap']} position={[27.49, -12.77, -4.41]} rotation={[0.69, -0.72, 2.56]} />
              <mesh name="Palm_18" geometry={nodes.Palm_18.geometry} material={materials['World ap']} position={[21.85, -10.79, -7.21]} rotation={[0.9, -0.58, 2.43]} />
              <mesh name="Palm_19" geometry={nodes.Palm_19.geometry} material={materials['World ap']} position={[18.87, -11.37, -8.59]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_2" geometry={nodes.Palm_2.geometry} material={materials['World ap']} position={[35.81, -10.87, 23.71]} rotation={[1.98, -1.2, -2.72]} />
              <mesh name="Palm_20" geometry={nodes.Palm_20.geometry} material={materials['World ap']} position={[4.18, -7.13, -13.04]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_21" geometry={nodes.Palm_21.geometry} material={materials['World ap']} position={[6.29, -9.68, -11.9]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_23" geometry={nodes.Palm_23.geometry} material={materials['World ap']} position={[-7.19, 6.73, 15.18]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_24" geometry={nodes.Palm_24.geometry} material={materials['World ap']} position={[-4.24, 7.45, 19.8]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_25" geometry={nodes.Palm_25.geometry} material={materials['World ap']} position={[-7.28, 7.97, 25.44]} rotation={[1.57, 0.26, -0.01]} />
              <mesh name="Palm_26" geometry={nodes.Palm_26.geometry} material={materials['World ap']} position={[-5.35, 7.76, 30.4]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_27" geometry={nodes.Palm_27.geometry} material={materials['World ap']} position={[-6.1, 8.93, 24]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_28" geometry={nodes.Palm_28.geometry} material={materials['World ap']} position={[-1.62, 2.81, 5.98]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_29" geometry={nodes.Palm_29.geometry} material={materials['World ap']} position={[22.1, -7.33, -1.23]} rotation={[1.19, -0.22, 2.55]} />
              <mesh name="Palm_3" geometry={nodes.Palm_3.geometry} material={materials['World ap']} position={[-8.74, 0.74, -5.33]} rotation={[0.46, 0.13, 0.26]} />
              <mesh name="Palm_30" geometry={nodes.Palm_30.geometry} material={materials['World ap']} position={[26.34, -8.23, 0.57]} rotation={[1.36, -0.33, 2.59]} />
              <mesh name="Palm_4" geometry={nodes.Palm_4.geometry} material={materials['World ap']} position={[35.62, -13.87, 8.67]} rotation={[1.5, -0.89, -3.12]} />
              <mesh name="Palm_5" geometry={nodes.Palm_5.geometry} material={materials['World ap']} position={[23.69, -11.11, -1.41]} rotation={[0.9, -0.58, 2.43]} />
              <mesh name="Palm_6" geometry={nodes.Palm_6.geometry} material={materials['World ap']} position={[36.18, -12.8, 15.81]} rotation={[0.99, -0.69, -3.02]} />
              <mesh name="Palm_7" geometry={nodes.Palm_7.geometry} material={materials['World ap']} position={[37.86, -16.43, 12.26]} rotation={[0.97, -1.08, 2.84]} />
              <mesh name="Palm_8" geometry={nodes.Palm_8.geometry} material={materials['World ap']} position={[36.21, -8.83, 27.71]} rotation={[1.53, -0.69, -2.62]} />
              <mesh name="Palm_81" geometry={nodes.Palm_81.geometry} material={materials['World ap']} position={[-1.87, 0, -4.94]} rotation={[0.67, -0.03, 0.29]} />
              <mesh name="Palm_82" geometry={nodes.Palm_82.geometry} material={materials['World ap']} position={[-3.2, -4.07, -6.92]} rotation={[0.43, 0.24, 0.29]} />
              <mesh name="Palm_86" geometry={nodes.Palm_86.geometry} material={materials['World ap']} position={[-8.89, 4.01, 4.87]} rotation={[1.16, 0.09, 0.28]} />
              <mesh name="Palm_87" geometry={nodes.Palm_87.geometry} material={materials['World ap']} position={[-11.1, 5.15, 10.18]} rotation={[1.22, -0.11, 0.01]} />
              <mesh name="Palm_89" geometry={nodes.Palm_89.geometry} material={materials['World ap']} position={[-6.53, 1.42, -1.91]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_90" geometry={nodes.Palm_90.geometry} material={materials['World ap']} position={[-11.1, 3.17, 0.26]} rotation={[0.86, 0.24, 0.38]} />
              <mesh name="Palm_91" geometry={nodes.Palm_91.geometry} material={materials['World ap']} position={[-0.99, -6.13, -10.27]} rotation={[0.71, -0.25, 0.76]} />
            </group>
          </group>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['World ap']} position={[-0.96, 0.57, -9.25]} rotation={[0.06, 0.1, -0.01]}>
              <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap']} />
              <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <group name="water" position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]}>
                <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials.Water} />
              </group>
            </mesh>
          </group>
          <group name="Ships" position={[-9.84, -1.38, 9.08]} />
        </group>
        <group name="Rig002" position={[-0.09, 0.16, 1.03]} rotation={[-0.45, 1.22, 2.2]} scale={0.05}>
          <primitive object={nodes.root_16} />
          <skinnedMesh name="Hare_LOD0002" geometry={nodes.Hare_LOD0002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD0002.skeleton} morphTargetDictionary={nodes.Hare_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1002" geometry={nodes.Hare_LOD1002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD1002.skeleton} morphTargetDictionary={nodes.Hare_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2002" geometry={nodes.Hare_LOD2002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD2002.skeleton} morphTargetDictionary={nodes.Hare_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3002" geometry={nodes.Hare_LOD3002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD3002.skeleton} morphTargetDictionary={nodes.Hare_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig004" position={[-1.06, 0.02, -0.26]} rotation={[-0.22, -0.47, 0.71]} scale={0.05}>
          <primitive object={nodes.root} />
          <skinnedMesh name="Hare" geometry={nodes.Hare.geometry} material={materials['M_Hare.003']} skeleton={nodes.Hare.skeleton} morphTargetDictionary={nodes.Hare.morphTargetDictionary} morphTargetInfluences={nodes.Hare.morphTargetInfluences} />
        </group>
        <group name="Rig001" position={[-1.09, -0.01, -0.26]} rotation={[-0.17, -0.47, 0.89]} scale={0.03}>
          <primitive object={nodes.root_1} />
          <skinnedMesh name="Hare001" geometry={nodes.Hare001.geometry} material={materials['M_Hare.001']} skeleton={nodes.Hare001.skeleton} morphTargetDictionary={nodes.Hare001.morphTargetDictionary} morphTargetInfluences={nodes.Hare001.morphTargetInfluences} />
        </group>
        <group name="Rig003" position={[-0.56, 0.12, -0.9]} rotation={[-0.86, -0.58, 0.22]} scale={0.05}>
          <primitive object={nodes.root_17} />
          <skinnedMesh name="Hare_LOD0001" geometry={nodes.Hare_LOD0001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD0001.skeleton} morphTargetDictionary={nodes.Hare_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1001" geometry={nodes.Hare_LOD1001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD1001.skeleton} morphTargetDictionary={nodes.Hare_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2001" geometry={nodes.Hare_LOD2001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD2001.skeleton} morphTargetDictionary={nodes.Hare_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3001" geometry={nodes.Hare_LOD3001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD3001.skeleton} morphTargetDictionary={nodes.Hare_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig007" position={[-1.09, -0.23, 0.12]} rotation={[0.37, 0.28, 1.3]} scale={0.03}>
          <primitive object={nodes.root_2} />
          <skinnedMesh name="Puffin" geometry={nodes.Puffin.geometry} material={materials.M_Puffin} skeleton={nodes.Puffin.skeleton} morphTargetDictionary={nodes.Puffin.morphTargetDictionary} morphTargetInfluences={nodes.Puffin.morphTargetInfluences} />
        </group>
        <group name="Rig008" position={[-1.11, -0.25, 0.09]} rotation={[-2.84, 0.02, 1.7]} scale={0.03}>
          <primitive object={nodes.root_3} />
          <skinnedMesh name="Puffin001" geometry={nodes.Puffin001.geometry} material={materials['M_Puffin.001']} skeleton={nodes.Puffin001.skeleton} morphTargetDictionary={nodes.Puffin001.morphTargetDictionary} morphTargetInfluences={nodes.Puffin001.morphTargetInfluences} />
        </group>
        <group name="Rig009" position={[-1.11, -0.23, 0.05]} rotation={[-0.77, 0.1, 1.81]} scale={0.03}>
          <primitive object={nodes.root_4} />
          <skinnedMesh name="Puffin002" geometry={nodes.Puffin002.geometry} material={materials['M_Puffin.002']} skeleton={nodes.Puffin002.skeleton} morphTargetDictionary={nodes.Puffin002.morphTargetDictionary} morphTargetInfluences={nodes.Puffin002.morphTargetInfluences} />
        </group>
        <group name="Rig010" position={[-1.07, -0.18, 0.15]} rotation={[2.71, 0.25, 1.71]} scale={0.04}>
          <primitive object={nodes.root_18} />
          <skinnedMesh name="Puffin_LOD0" geometry={nodes.Puffin_LOD0.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD0.skeleton} morphTargetDictionary={nodes.Puffin_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD1" geometry={nodes.Puffin_LOD1.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD1.skeleton} morphTargetDictionary={nodes.Puffin_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD2" geometry={nodes.Puffin_LOD2.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD2.skeleton} morphTargetDictionary={nodes.Puffin_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD3" geometry={nodes.Puffin_LOD3.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD3.skeleton} morphTargetDictionary={nodes.Puffin_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig" position={[-0.9, 0.29, 0.43]} rotation={[0, 0, 0.93]} scale={0.05}>
          <primitive object={nodes.root_19} />
          <skinnedMesh name="Hare_LOD0" geometry={nodes.Hare_LOD0.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD0.skeleton} morphTargetDictionary={nodes.Hare_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1" geometry={nodes.Hare_LOD1.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD1.skeleton} morphTargetDictionary={nodes.Hare_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2" geometry={nodes.Hare_LOD2.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD2.skeleton} morphTargetDictionary={nodes.Hare_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3" geometry={nodes.Hare_LOD3.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD3.skeleton} morphTargetDictionary={nodes.Hare_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig013" position={[0.11, 0.3, 1.1]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_20} />
          <skinnedMesh name="Goat_LOD0" geometry={nodes.Goat_LOD0.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD0.skeleton} morphTargetDictionary={nodes.Goat_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1" geometry={nodes.Goat_LOD1.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD1.skeleton} morphTargetDictionary={nodes.Goat_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2" geometry={nodes.Goat_LOD2.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD2.skeleton} morphTargetDictionary={nodes.Goat_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3" geometry={nodes.Goat_LOD3.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD3.skeleton} morphTargetDictionary={nodes.Goat_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig020" position={[-0.55, -0.45, -0.85]} rotation={[-2.71, 0.52, 0.85]} scale={0.1}>
          <primitive object={nodes.root_21} />
          <skinnedMesh name="Marten_LOD0" geometry={nodes.Marten_LOD0.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD0.skeleton} morphTargetDictionary={nodes.Marten_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD1" geometry={nodes.Marten_LOD1.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD1.skeleton} morphTargetDictionary={nodes.Marten_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD2" geometry={nodes.Marten_LOD2.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD2.skeleton} morphTargetDictionary={nodes.Marten_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD3" geometry={nodes.Marten_LOD3.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD3.skeleton} morphTargetDictionary={nodes.Marten_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig012" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_5} />
          <skinnedMesh name="Bull" geometry={nodes.Bull.geometry} material={materials.M_Bull} skeleton={nodes.Bull.skeleton} morphTargetDictionary={nodes.Bull.morphTargetDictionary} morphTargetInfluences={nodes.Bull.morphTargetInfluences} />
        </group>
        <group name="Rig005" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_6} />
          <skinnedMesh name="Bull001" geometry={nodes.Bull001.geometry} material={materials['M_Bull.001']} skeleton={nodes.Bull001.skeleton} morphTargetDictionary={nodes.Bull001.morphTargetDictionary} morphTargetInfluences={nodes.Bull001.morphTargetInfluences} />
        </group>
        <group name="Rig006" position={[-1.06, -0.02, 0.15]} rotation={[2.8, -0.51, 1.88]} scale={0.07}>
          <primitive object={nodes.root_22} />
          <skinnedMesh name="Cougar_LOD0" geometry={nodes.Cougar_LOD0.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD0.skeleton} morphTargetDictionary={nodes.Cougar_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD1" geometry={nodes.Cougar_LOD1.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD1.skeleton} morphTargetDictionary={nodes.Cougar_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD2" geometry={nodes.Cougar_LOD2.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD2.skeleton} morphTargetDictionary={nodes.Cougar_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD3" geometry={nodes.Cougar_LOD3.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD3.skeleton} morphTargetDictionary={nodes.Cougar_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig011" position={[-0.75, 0.57, -0.05]} rotation={[-0.51, -0.19, 0.71]} scale={0.1}>
          <primitive object={nodes.root_7} />
          <skinnedMesh name="Beluga" geometry={nodes.Beluga.geometry} material={materials['M_Beluga.001']} skeleton={nodes.Beluga.skeleton} morphTargetDictionary={nodes.Beluga.morphTargetDictionary} morphTargetInfluences={nodes.Beluga.morphTargetInfluences} />
        </group>
        <group name="Rig014" position={[-0.83, 0.05, 0.59]} rotation={[-2.32, -0.35, 1.88]} scale={0.1}>
          <primitive object={nodes.root_8} />
          <skinnedMesh name="Llama" geometry={nodes.Llama.geometry} material={materials.M_Llama} skeleton={nodes.Llama.skeleton} morphTargetDictionary={nodes.Llama.morphTargetDictionary} morphTargetInfluences={nodes.Llama.morphTargetInfluences} />
        </group>
        <group name="Rig038" position={[-0.31, 0.19, 1]} rotation={[1.39, 0.15, 0.18]} scale={0.05}>
          <primitive object={nodes.root_23} />
          <skinnedMesh name="Jackal_LOD0" geometry={nodes.Jackal_LOD0.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD0.skeleton} morphTargetDictionary={nodes.Jackal_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1" geometry={nodes.Jackal_LOD1.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD1.skeleton} morphTargetDictionary={nodes.Jackal_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2" geometry={nodes.Jackal_LOD2.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD2.skeleton} morphTargetDictionary={nodes.Jackal_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3" geometry={nodes.Jackal_LOD3.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD3.skeleton} morphTargetDictionary={nodes.Jackal_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig015" position={[-0.4, 0.2, 0.95]} rotation={[1.3, 0.93, 0.37]} scale={0.05}>
          <primitive object={nodes.root_24} />
          <skinnedMesh name="Jackal_LOD0001" geometry={nodes.Jackal_LOD0001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD0001.skeleton} morphTargetDictionary={nodes.Jackal_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1001" geometry={nodes.Jackal_LOD1001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD1001.skeleton} morphTargetDictionary={nodes.Jackal_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2001" geometry={nodes.Jackal_LOD2001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD2001.skeleton} morphTargetDictionary={nodes.Jackal_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3001" geometry={nodes.Jackal_LOD3001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD3001.skeleton} morphTargetDictionary={nodes.Jackal_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig018" position={[0.75, 0.37, 0.66]} rotation={[1.68, 0.62, -1.26]} scale={0.1}>
          <primitive object={nodes.root_9} />
          <skinnedMesh name="Badger001" geometry={nodes.Badger001.geometry} material={materials['M_Badger.001']} skeleton={nodes.Badger001.skeleton} morphTargetDictionary={nodes.Badger001.morphTargetDictionary} morphTargetInfluences={nodes.Badger001.morphTargetInfluences} />
        </group>
        <group name="Rig021" position={[-1.04, -0.44, 0.04]} rotation={[1.66, 0.38, 1.33]} scale={0.05}>
          <primitive object={nodes.root_25} />
          <skinnedMesh name="Hedgehog_LOD0" geometry={nodes.Hedgehog_LOD0.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD0.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD1" geometry={nodes.Hedgehog_LOD1.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD1.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD2" geometry={nodes.Hedgehog_LOD2.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD2.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD3" geometry={nodes.Hedgehog_LOD3.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD3.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig022" position={[-0.97, -0.5, 0.01]} rotation={[-0.22, -0.74, 2.43]} scale={0.05}>
          <primitive object={nodes.root_10} />
          <skinnedMesh name="Hedgehog" geometry={nodes.Hedgehog.geometry} material={materials['M_Hedgehog.001']} skeleton={nodes.Hedgehog.skeleton} morphTargetDictionary={nodes.Hedgehog.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog.morphTargetInfluences} />
        </group>
        <group name="Rig028" position={[-0.71, -0.43, 0.54]} rotation={[0.2, 0.2, 1.55]} scale={0.03}>
          <primitive object={nodes.root_11} />
          <skinnedMesh name="Beluga002" geometry={nodes.Beluga002.geometry} material={materials['M_Beluga.006']} skeleton={nodes.Beluga002.skeleton} morphTargetDictionary={nodes.Beluga002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga002.morphTargetInfluences} />
        </group>
        <group name="Rig029" position={[-0.76, -0.39, 0.48]} rotation={[-0.24, 0.08, 1.55]} scale={0.03}>
          <primitive object={nodes.root_12} />
          <skinnedMesh name="Beluga003" geometry={nodes.Beluga003.geometry} material={materials['M_Beluga.007']} skeleton={nodes.Beluga003.skeleton} morphTargetDictionary={nodes.Beluga003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga003.morphTargetInfluences} />
        </group>
        <group name="Rig030" position={[-0.65, -0.39, 0.62]} rotation={[0.4, 0.66, 1.45]} scale={0.04}>
          <primitive object={nodes.root_26} />
          <skinnedMesh name="Beluga_LOD0003" geometry={nodes.Beluga_LOD0003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD0003.skeleton} morphTargetDictionary={nodes.Beluga_LOD0003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1003" geometry={nodes.Beluga_LOD1003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD1003.skeleton} morphTargetDictionary={nodes.Beluga_LOD1003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2003" geometry={nodes.Beluga_LOD2003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD2003.skeleton} morphTargetDictionary={nodes.Beluga_LOD2003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3003" geometry={nodes.Beluga_LOD3003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD3003.skeleton} morphTargetDictionary={nodes.Beluga_LOD3003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3003.morphTargetInfluences} />
        </group>
        <group name="Rig033" position={[-1.16, -0.06, -0.03]} rotation={[0.97, -0.05, 1.25]} scale={0.08}>
          <primitive object={nodes.root_27} />
          <skinnedMesh name="Antelope_LOD0" geometry={nodes.Antelope_LOD0.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD0.skeleton} morphTargetDictionary={nodes.Antelope_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD1" geometry={nodes.Antelope_LOD1.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD1.skeleton} morphTargetDictionary={nodes.Antelope_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD2" geometry={nodes.Antelope_LOD2.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD2.skeleton} morphTargetDictionary={nodes.Antelope_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD3" geometry={nodes.Antelope_LOD3.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD3.skeleton} morphTargetDictionary={nodes.Antelope_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig043" position={[-0.61, 0.29, -0.79]} rotation={[-1.59, 0.46, 0.47]} scale={0.07}>
          <primitive object={nodes.root_28} />
          <skinnedMesh name="Bison_LOD0" geometry={nodes.Bison_LOD0.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD0.skeleton} morphTargetDictionary={nodes.Bison_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD1" geometry={nodes.Bison_LOD1.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD1.skeleton} morphTargetDictionary={nodes.Bison_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD2" geometry={nodes.Bison_LOD2.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD2.skeleton} morphTargetDictionary={nodes.Bison_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD3" geometry={nodes.Bison_LOD3.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD3.skeleton} morphTargetDictionary={nodes.Bison_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig025" position={[1.01, 0.04, -0.16]} rotation={[0, 0, -0.93]} scale={0.03}>
          <primitive object={nodes.root_29} />
          <skinnedMesh name="Beluga_LOD0001" geometry={nodes.Beluga_LOD0001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD0001.skeleton} morphTargetDictionary={nodes.Beluga_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1001" geometry={nodes.Beluga_LOD1001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD1001.skeleton} morphTargetDictionary={nodes.Beluga_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2001" geometry={nodes.Beluga_LOD2001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD2001.skeleton} morphTargetDictionary={nodes.Beluga_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3001" geometry={nodes.Beluga_LOD3001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD3001.skeleton} morphTargetDictionary={nodes.Beluga_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig024" position={[0.98, 0, 0]} rotation={[0, 0, -1.08]} scale={0.05}>
          <primitive object={nodes.root_30} />
          <skinnedMesh name="Beluga_LOD0" geometry={nodes.Beluga_LOD0.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD0.skeleton} morphTargetDictionary={nodes.Beluga_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1" geometry={nodes.Beluga_LOD1.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD1.skeleton} morphTargetDictionary={nodes.Beluga_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2" geometry={nodes.Beluga_LOD2.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD2.skeleton} morphTargetDictionary={nodes.Beluga_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3" geometry={nodes.Beluga_LOD3.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD3.skeleton} morphTargetDictionary={nodes.Beluga_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig026" position={[0.98, 0.08, -0.08]} rotation={[0, 0, -1.22]} scale={0.04}>
          <primitive object={nodes.root_31} />
          <skinnedMesh name="Beluga_LOD0002" geometry={nodes.Beluga_LOD0002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD0002.skeleton} morphTargetDictionary={nodes.Beluga_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1002" geometry={nodes.Beluga_LOD1002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD1002.skeleton} morphTargetDictionary={nodes.Beluga_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2002" geometry={nodes.Beluga_LOD2002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD2002.skeleton} morphTargetDictionary={nodes.Beluga_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3002" geometry={nodes.Beluga_LOD3002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD3002.skeleton} morphTargetDictionary={nodes.Beluga_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig027" position={[0.98, -0.01, -0.17]} rotation={[0, 0, -0.93]} scale={0.03}>
          <primitive object={nodes.root_13} />
          <skinnedMesh name="Beluga001" geometry={nodes.Beluga001.geometry} material={materials['M_Beluga.005']} skeleton={nodes.Beluga001.skeleton} morphTargetDictionary={nodes.Beluga001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga001.morphTargetInfluences} />
        </group>
        <group name="Rig016" position={[0.38, 0.18, 1.01]} rotation={[-0.22, -0.58, -1.56]} scale={0.07}>
          <primitive object={nodes.root_14} />
          <skinnedMesh name="Cougar" geometry={nodes.Cougar.geometry} material={materials['M_Cougar.001']} skeleton={nodes.Cougar.skeleton} morphTargetDictionary={nodes.Cougar.morphTargetDictionary} morphTargetInfluences={nodes.Cougar.morphTargetInfluences} />
        </group>
        <group name="Rig017" position={[-0.05, -0.07, 1.1]} rotation={[-0.29, -1.39, -1.92]} scale={0.1}>
          <primitive object={nodes.root_15} />
          <skinnedMesh name="Badger" geometry={nodes.Badger.geometry} material={materials.M_Badger} skeleton={nodes.Badger.skeleton} morphTargetDictionary={nodes.Badger.morphTargetDictionary} morphTargetInfluences={nodes.Badger.morphTargetInfluences} />
        </group>
        <group name="Rig034" position={[-0.84, 0.4, 0.47]} rotation={[-2.43, -0.08, 2.16]} scale={0.07}>
          <primitive object={nodes.root_32} />
          <skinnedMesh name="Baboon_LOD0" geometry={nodes.Baboon_LOD0.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD0.skeleton} morphTargetDictionary={nodes.Baboon_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD1" geometry={nodes.Baboon_LOD1.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD1.skeleton} morphTargetDictionary={nodes.Baboon_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD2" geometry={nodes.Baboon_LOD2.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD2.skeleton} morphTargetDictionary={nodes.Baboon_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD3" geometry={nodes.Baboon_LOD3.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD3.skeleton} morphTargetDictionary={nodes.Baboon_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig037" position={[-0.33, -0.63, -0.75]} rotation={[-1.95, 0.06, 0.11]} scale={0.08}>
          <primitive object={nodes.root_33} />
          <skinnedMesh name="Baboon_LOD0001" geometry={nodes.Baboon_LOD0001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD0001.skeleton} morphTargetDictionary={nodes.Baboon_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD1001" geometry={nodes.Baboon_LOD1001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD1001.skeleton} morphTargetDictionary={nodes.Baboon_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD2001" geometry={nodes.Baboon_LOD2001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD2001.skeleton} morphTargetDictionary={nodes.Baboon_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD3001" geometry={nodes.Baboon_LOD3001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD3001.skeleton} morphTargetDictionary={nodes.Baboon_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD3001.morphTargetInfluences} />
        </group>
        <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.1']} position={[0.02, 0.17, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}


function EarthLv7(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/earth33/final7.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene"position={[-0.1, -0.15, -0.5]} rotation={[Math.PI / 0.1, 1.7, -0.2]} scale={1.7}>
      <group name="Planet" position={[0.03, 0.07, -0.04]} rotation={[Math.PI / 2, 0, -0.27]} scale={0.01}>
          <group name="Bushes" position={[-59.56, 45.9, -11.47]}>
            <mesh name="Bushes_11" geometry={nodes.Bushes_11.geometry} material={materials['World ap.511']} position={[-6.6, 40.7, 13.02]} rotation={[-2.98, 0, 0]} />
            <mesh name="Bushes_13" geometry={nodes.Bushes_13.geometry} material={materials['World ap.509']} position={[4.31, 45.97, 9.97]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_15" geometry={nodes.Bushes_15.geometry} material={materials['World ap.507']} position={[57.87, 63.82, 16.27]} rotation={[3.13, 0, 0]} />
            <mesh name="Bushes_17" geometry={nodes.Bushes_17.geometry} material={materials['World ap.505']} position={[118.94, 37.3, -5.98]} rotation={[3.14, 0, 0]} />
            <mesh name="Bushes_18" geometry={nodes.Bushes_18.geometry} material={materials['World ap.504']} position={[24.98, 55.42, 51.04]} rotation={[3.07, 0, 0]} />
            <mesh name="Bushes_19" geometry={nodes.Bushes_19.geometry} material={materials['World ap.503']} position={[23.11, 36.4, 77.11]} rotation={[-2.75, 0, 0]} />
            <mesh name="Bushes_2" geometry={nodes.Bushes_2.geometry} material={materials['World ap.520']} position={[-41.31, -39.94, -18.51]} rotation={[-Math.PI, 0, 0]} />
            <mesh name="Bushes_21" geometry={nodes.Bushes_21.geometry} material={materials['World ap.523']} position={[-35.77, 1.94, -3.31]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_23" geometry={nodes.Bushes_23.geometry} material={materials['World ap.525']} position={[-13.92, 34.19, 25.78]} rotation={[-1.99, 0, 0]} />
            <mesh name="Bushes_3" geometry={nodes.Bushes_3.geometry} material={materials['World ap.519']} position={[-38.39, -31.39, -24.85]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_5" geometry={nodes.Bushes_5.geometry} material={materials['World ap.517']} position={[-37.28, -61.26, -19.51]} rotation={[-2.7, 0, 0]} />
            <mesh name="Bushes_7" geometry={nodes.Bushes_7.geometry} material={materials['World ap.515']} position={[-37.32, -73.79, -15.13]} rotation={[-2.87, 0, 0]} />
            <mesh name="Bushes_9" geometry={nodes.Bushes_9.geometry} material={materials['World ap.513']} position={[-33.69, -8.8, -26.31]} rotation={[-2.19, 0, 0]} />
          </group>
          <group name="Camping" position={[0.24, 13.39, -16.17]} />
          <group name="Firtrees" position={[-31.1, 65.19, -52.69]}>
            <mesh name="Firtree" geometry={nodes.Firtree.geometry} material={materials['World ap']} position={[81.77, -10.24, -12.72]} rotation={[0.58, -0.49, 0.64]} />
            <mesh name="Firtree_1" geometry={nodes.Firtree_1.geometry} material={materials['World ap']} position={[49.08, 17.34, 1.04]} rotation={[0.71, -0.16, 0.83]} />
            <mesh name="Firtree_10" geometry={nodes.Firtree_10.geometry} material={materials['World ap']} position={[55.57, 25.55, 11.04]} rotation={[1.01, -0.06, -1.63]} />
            <mesh name="Firtree_100" geometry={nodes.Firtree_100.geometry} material={materials['World ap']} position={[68.64, -147.79, 13.15]} rotation={[-0.62, -0.35, -0.05]} />
            <mesh name="Firtree_101" geometry={nodes.Firtree_101.geometry} material={materials['World ap']} position={[93.15, -137.77, 31.16]} rotation={[-1.27, -0.65, -1.2]} />
            <mesh name="Firtree_102" geometry={nodes.Firtree_102.geometry} material={materials['World ap']} position={[96.3, -137.66, 42.75]} rotation={[-1.42, -0.76, -1.33]} />
            <mesh name="Firtree_103" geometry={nodes.Firtree_103.geometry} material={materials['World ap']} position={[89.76, -141.95, 35.76]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_104" geometry={nodes.Firtree_104.geometry} material={materials['World ap']} position={[88.03, -141.59, 47.93]} rotation={[-1.57, -0.83, -1.37]} />
            <mesh name="Firtree_105" geometry={nodes.Firtree_105.geometry} material={materials['World ap']} position={[32.48, -162.03, 49.24]} rotation={[-1.59, 0.17, 3.02]} />
            <mesh name="Firtree_106" geometry={nodes.Firtree_106.geometry} material={materials['World ap']} position={[32.32, -153.21, 9.78]} rotation={[-1.24, 0.06, -3.03]} />
            <mesh name="Firtree_107" geometry={nodes.Firtree_107.geometry} material={materials['World ap']} position={[89.63, -124.84, 10.73]} rotation={[-0.76, -0.52, -0.56]} />
            <mesh name="Firtree_108" geometry={nodes.Firtree_108.geometry} material={materials['World ap']} position={[107.22, -108.01, 9.91]} rotation={[-0.94, -0.99, -0.72]} />
            <mesh name="Firtree_109" geometry={nodes.Firtree_109.geometry} material={materials['World ap']} position={[105.98, -112.5, 17.17]} rotation={[-0.9, -0.96, -0.65]} />
            <mesh name="Firtree_11" geometry={nodes.Firtree_11.geometry} material={materials['World ap']} position={[18.44, 8.04, -13.86]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_110" geometry={nodes.Firtree_110.geometry} material={materials['World ap']} position={[101.09, -109.53, 2.74]} rotation={[-0.84, -0.67, -0.55]} />
            <mesh name="Firtree_111" geometry={nodes.Firtree_111.geometry} material={materials['World ap']} position={[107.12, -117.83, 26.45]} rotation={[-1.05, -0.96, -1.77]} />
            <mesh name="Firtree_112" geometry={nodes.Firtree_112.geometry} material={materials['World ap']} position={[47.47, -144.51, 1.34]} rotation={[-1.14, -0.2, 1.82]} />
            <mesh name="Firtree_113" geometry={nodes.Firtree_113.geometry} material={materials['World ap']} position={[103, -120.06, 18.18]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_114" geometry={nodes.Firtree_114.geometry} material={materials['World ap']} position={[95.74, -127.95, 15.94]} rotation={[-0.97, -0.63, -1.71]} />
            <mesh name="Firtree_115" geometry={nodes.Firtree_115.geometry} material={materials['World ap']} position={[99.89, -127.72, 23.26]} rotation={[-0.77, -0.71, -1.47]} />
            <mesh name="Firtree_116" geometry={nodes.Firtree_116.geometry} material={materials['World ap']} position={[-27.63, -142.42, 20.93]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_117" geometry={nodes.Firtree_117.geometry} material={materials['World ap']} position={[-20.01, -149.08, 23.67]} rotation={[-1.14, 0.4, -2.12]} />
            <mesh name="Firtree_118" geometry={nodes.Firtree_118.geometry} material={materials['World ap']} position={[29.99, -160.44, 37.55]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_119" geometry={nodes.Firtree_119.geometry} material={materials['World ap']} position={[19.47, -155.91, 19.14]} rotation={[-1.45, 0.26, -1.17]} />
            <mesh name="Firtree_12" geometry={nodes.Firtree_12.geometry} material={materials['World ap']} position={[35, 12.13, -9.99]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_120" geometry={nodes.Firtree_120.geometry} material={materials['World ap']} position={[23.48, -156.74, 17.29]} rotation={[-1.31, 0.14, -0.68]} />
            <mesh name="Firtree_121" geometry={nodes.Firtree_121.geometry} material={materials['World ap']} position={[-1.97, -156.84, 33.77]} rotation={[-1.45, 0.26, -0.65]} />
            <mesh name="Firtree_123" geometry={nodes.Firtree_123.geometry} material={materials['World ap']} position={[8.06, -151.6, 16.64]} rotation={[-1.45, 0.26, -1.99]} />
            <mesh name="Firtree_124" geometry={nodes.Firtree_124.geometry} material={materials['World ap']} position={[91.04, -136.01, 19.61]} rotation={[-0.7, -0.59, -0.36]} />
            <mesh name="Firtree_125" geometry={nodes.Firtree_125.geometry} material={materials['World ap']} position={[85.13, -132.53, 11.9]} rotation={[-0.73, -0.53, -0.63]} />
            <mesh name="Firtree_126" geometry={nodes.Firtree_126.geometry} material={materials['World ap']} position={[105.41, -125.95, 28.96]} rotation={[-0.73, -0.72, -1.43]} />
            <mesh name="Firtree_127" geometry={nodes.Firtree_127.geometry} material={materials['World ap']} position={[39.82, -150.33, 5.96]} rotation={[-1.11, -0.15, -1.95]} />
            <mesh name="Firtree_128" geometry={nodes.Firtree_128.geometry} material={materials['World ap']} position={[47.72, -149.66, 7.83]} rotation={[-1.3, -0.22, 1.76]} />
            <mesh name="Firtree_13" geometry={nodes.Firtree_13.geometry} material={materials['World ap']} position={[0.09, 11.87, -10.47]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_131" geometry={nodes.Firtree_131.geometry} material={materials['World ap']} position={[19.47, -161.26, 50.91]} rotation={[-1.68, 0.12, 1.85]} />
            <mesh name="Firtree_134" geometry={nodes.Firtree_134.geometry} material={materials['World ap']} position={[-5.5, -156.92, 40.82]} rotation={[-1.38, 0.41, -2.01]} />
            <mesh name="Firtree_136" geometry={nodes.Firtree_136.geometry} material={materials['World ap']} position={[21.09, -148.06, 2.5]} rotation={[-0.85, -0.15, -1.87]} />
            <mesh name="Firtree_137" geometry={nodes.Firtree_137.geometry} material={materials['World ap']} position={[14.87, -147.07, 4.09]} rotation={[-0.9, 0.36, -2.09]} />
            <mesh name="Firtree_138" geometry={nodes.Firtree_138.geometry} material={materials['World ap']} position={[4.81, -154.88, 27.29]} rotation={[-1.45, 0.26, -1.99]} />
            <mesh name="Firtree_139" geometry={nodes.Firtree_139.geometry} material={materials['World ap']} position={[15.67, -151.62, 10.95]} rotation={[-1.06, 0.07, -2.05]} />
            <mesh name="Firtree_14" geometry={nodes.Firtree_14.geometry} material={materials['World ap']} position={[8.41, 7.08, -15.37]} rotation={[0.71, 0.32, 0.89]} />
            <mesh name="Firtree_140" geometry={nodes.Firtree_140.geometry} material={materials['World ap']} position={[9.4, -156.82, 36.74]} rotation={[-1.43, 0.31, -2]} />
            <mesh name="Firtree_141" geometry={nodes.Firtree_141.geometry} material={materials['World ap']} position={[25.5, -149.91, 7.87]} rotation={[-1.16, -0.07, -0.69]} />
            <mesh name="Firtree_142" geometry={nodes.Firtree_142.geometry} material={materials['World ap']} position={[31.09, -149.3, 4.08]} rotation={[-1.02, -0.09, -0.69]} />
            <mesh name="Firtree_143" geometry={nodes.Firtree_143.geometry} material={materials['World ap']} position={[19.32, -144.08, -3.53]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_144" geometry={nodes.Firtree_144.geometry} material={materials['World ap']} position={[29.29, -143.1, -4.57]} rotation={[-0.87, 0.09, -0.69]} />
            <mesh name="Firtree_145" geometry={nodes.Firtree_145.geometry} material={materials['World ap']} position={[40.04, -141.41, -4.25]} rotation={[-0.9, -0.4, -0.63]} />
            <mesh name="Firtree_146" geometry={nodes.Firtree_146.geometry} material={materials['World ap']} position={[53.46, -138.09, -1.51]} rotation={[-0.53, -0.21, -0.66]} />
            <mesh name="Firtree_147" geometry={nodes.Firtree_147.geometry} material={materials['World ap']} position={[35.63, -137.72, -7.72]} rotation={[-0.47, -0.01, -0.53]} />
            <mesh name="Firtree_149" geometry={nodes.Firtree_149.geometry} material={materials['World ap']} position={[74.1, -142.62, 4.5]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_15" geometry={nodes.Firtree_15.geometry} material={materials['World ap']} position={[-29.06, 15.77, 21.21]} rotation={[0.78, 0.69, 1.01]} />
            <mesh name="Firtree_150" geometry={nodes.Firtree_150.geometry} material={materials['World ap']} position={[81.94, -124.82, 0.04]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_151" geometry={nodes.Firtree_151.geometry} material={materials['World ap']} position={[88.86, -122.05, 1.82]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_152" geometry={nodes.Firtree_152.geometry} material={materials['World ap']} position={[87.97, -116.5, -4.23]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_153" geometry={nodes.Firtree_153.geometry} material={materials['World ap']} position={[91.87, -115.82, -0.26]} rotation={[-0.94, -0.63, -0.83]} />
            <mesh name="Firtree_154" geometry={nodes.Firtree_154.geometry} material={materials['World ap']} position={[111.09, -105.47, 16.22]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_155" geometry={nodes.Firtree_155.geometry} material={materials['World ap']} position={[113.33, -98.53, 15.36]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_156" geometry={nodes.Firtree_156.geometry} material={materials['World ap']} position={[113.74, -109.1, 28.51]} rotation={[-0.88, -0.83, -0.78]} />
            <mesh name="Firtree_157" geometry={nodes.Firtree_157.geometry} material={materials['World ap']} position={[119.16, -98.68, 25.48]} rotation={[-0.92, -1.03, -0.89]} />
            <mesh name="Firtree_158" geometry={nodes.Firtree_158.geometry} material={materials['World ap']} position={[118.91, -105.32, 33.63]} rotation={[-0.92, -1.03, -0.89]} />
            <mesh name="Firtree_159" geometry={nodes.Firtree_159.geometry} material={materials['World ap']} position={[121.23, -95.87, 29.26]} rotation={[-0.46, -1.19, -0.47]} />
            <mesh name="Firtree_16" geometry={nodes.Firtree_16.geometry} material={materials['World ap']} position={[-13.86, 8.64, -1.86]} rotation={[0.64, 0.54, 1.89]} />
            <mesh name="Firtree_160" geometry={nodes.Firtree_160.geometry} material={materials['World ap']} position={[73.64, -145.32, 9.39]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_161" geometry={nodes.Firtree_161.geometry} material={materials['World ap']} position={[69.49, -144.33, 5.86]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_162" geometry={nodes.Firtree_162.geometry} material={materials['World ap']} position={[77.42, -135.51, 7.26]} rotation={[-0.86, -0.67, -0.8]} />
            <mesh name="Firtree_163" geometry={nodes.Firtree_163.geometry} material={materials['World ap']} position={[101.74, -131.25, 35.23]} rotation={[-1.3, -0.79, -1.27]} />
            <mesh name="Firtree_164" geometry={nodes.Firtree_164.geometry} material={materials['World ap']} position={[112.9, -114.9, 32.66]} rotation={[-1.26, -0.89, -1.23]} />
            <mesh name="Firtree_165" geometry={nodes.Firtree_165.geometry} material={materials['World ap']} position={[120.95, -99.13, 33.97]} rotation={[-0.89, -1.22, -0.91]} />
            <mesh name="Firtree_166" geometry={nodes.Firtree_166.geometry} material={materials['World ap']} position={[115.84, -107.73, 20.95]} rotation={[-0.62, -1.11, -0.66]} />
            <mesh name="Firtree_167" geometry={nodes.Firtree_167.geometry} material={materials['World ap']} position={[117.99, -93.71, 21.84]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_168" geometry={nodes.Firtree_168.geometry} material={materials['World ap']} position={[97.62, -135.38, 30.84]} rotation={[-1.01, -0.73, -0.87]} />
            <mesh name="Firtree_169" geometry={nodes.Firtree_169.geometry} material={materials['World ap']} position={[87.75, -140.37, 22.29]} rotation={[-1.2, -0.7, -1.79]} />
            <mesh name="Firtree_17" geometry={nodes.Firtree_17.geometry} material={materials['World ap']} position={[-17.22, 14.96, 5.26]} rotation={[0.66, 0.61, 2.14]} />
            <mesh name="Firtree_170" geometry={nodes.Firtree_170.geometry} material={materials['World ap']} position={[84.18, -137, 17.53]} rotation={[-1.16, -0.53, -1.77]} />
            <mesh name="Firtree_171" geometry={nodes.Firtree_171.geometry} material={materials['World ap']} position={[9.94, -144.77, -0.44]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_172" geometry={nodes.Firtree_172.geometry} material={materials['World ap']} position={[12.32, -139.3, -6.15]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_173" geometry={nodes.Firtree_173.geometry} material={materials['World ap']} position={[20.1, -138.6, -8.85]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_174" geometry={nodes.Firtree_174.geometry} material={materials['World ap']} position={[7.97, -133.94, -10.01]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_175" geometry={nodes.Firtree_175.geometry} material={materials['World ap']} position={[-22.97, -147.12, 27.75]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_177" geometry={nodes.Firtree_177.geometry} material={materials['World ap']} position={[-49.09, -11.11, 11.3]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_178" geometry={nodes.Firtree_178.geometry} material={materials['World ap']} position={[-35.33, 12.22, 32.76]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_179" geometry={nodes.Firtree_179.geometry} material={materials['World ap']} position={[-31.3, 14.65, 28.55]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_18" geometry={nodes.Firtree_18.geometry} material={materials['World ap']} position={[41.8, 2.87, -17.81]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_180" geometry={nodes.Firtree_180.geometry} material={materials['World ap']} position={[92.25, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_181" geometry={nodes.Firtree_181.geometry} material={materials['World ap']} position={[55.57, 25.55, 22.37]} rotation={[1.21, -0.24, -1.49]} />
            <mesh name="Firtree_182" geometry={nodes.Firtree_182.geometry} material={materials['World ap']} position={[30.1, 31.71, 18.16]} rotation={[1.21, -0.24, -1.49]} />
            <mesh name="Firtree_183" geometry={nodes.Firtree_183.geometry} material={materials['World ap']} position={[15.51, 36.77, 12.72]} rotation={[1.2, -0.12, -1.49]} />
            <mesh name="Firtree_184" geometry={nodes.Firtree_184.geometry} material={materials['World ap']} position={[100.35, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_185" geometry={nodes.Firtree_185.geometry} material={materials['World ap']} position={[-25.34, 20.33, 16.84]} rotation={[0.98, 0.75, 1.9]} />
            <mesh name="Firtree_186" geometry={nodes.Firtree_186.geometry} material={materials['World ap']} position={[-60.25, -79.72, 10.27]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_189" geometry={nodes.Firtree_189.geometry} material={materials['World ap']} position={[75.76, -152.49, 41.56]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_19" geometry={nodes.Firtree_19.geometry} material={materials['World ap']} position={[53, 2.14, -16.73]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_190" geometry={nodes.Firtree_190.geometry} material={materials['World ap']} position={[50.34, -163.53, 40.63]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_192" geometry={nodes.Firtree_192.geometry} material={materials['World ap']} position={[91.89, -5.81, 5.22]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_2" geometry={nodes.Firtree_2.geometry} material={materials['World ap']} position={[30.5, -0.09, -18.25]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_20" geometry={nodes.Firtree_20.geometry} material={materials['World ap']} position={[54.38, 11.91, -7.34]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_21" geometry={nodes.Firtree_21.geometry} material={materials['World ap']} position={[22.88, 4.38, -17.57]} rotation={[0.65, 0.03, 2.17]} />
            <mesh name="Firtree_22" geometry={nodes.Firtree_22.geometry} material={materials['World ap']} position={[29.08, 9.47, -14.07]} rotation={[0.75, -0.11, 1.66]} />
            <mesh name="Firtree_23" geometry={nodes.Firtree_23.geometry} material={materials['World ap']} position={[25.17, 20.84, 3.4]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_24" geometry={nodes.Firtree_24.geometry} material={materials['World ap']} position={[69, -3.88, -14.94]} rotation={[0.46, -0.2, 0.77]} />
            <mesh name="Firtree_25" geometry={nodes.Firtree_25.geometry} material={materials['World ap']} position={[75.15, -10.88, -15.56]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_26" geometry={nodes.Firtree_26.geometry} material={materials['World ap']} position={[-26.46, 13.48, 13.78]} rotation={[0.8, 0.66, 0.98]} />
            <mesh name="Firtree_27" geometry={nodes.Firtree_27.geometry} material={materials['World ap']} position={[-25.26, 9.15, 6.77]} rotation={[0.89, 0.51, 0.82]} />
            <mesh name="Firtree_28" geometry={nodes.Firtree_28.geometry} material={materials['World ap']} position={[-32.26, 5.27, 14.87]} rotation={[0.88, 0.65, 1.65]} />
            <mesh name="Firtree_29" geometry={nodes.Firtree_29.geometry} material={materials['World ap']} position={[-1.4, 1.04, -13.11]} rotation={[0.75, 0.36, -1.63]} />
            <mesh name="Firtree_3" geometry={nodes.Firtree_3.geometry} material={materials['World ap']} position={[46.08, 7.4, -8.93]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_30" geometry={nodes.Firtree_30.geometry} material={materials['World ap']} position={[-34.07, 8.94, 23.04]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_31" geometry={nodes.Firtree_31.geometry} material={materials['World ap']} position={[-40.85, -8.02, 4.78]} rotation={[0.82, 0.6, 1.94]} />
            <mesh name="Firtree_32" geometry={nodes.Firtree_32.geometry} material={materials['World ap']} position={[-38.43, 1.09, 17.1]} rotation={[1.12, 0.79, 1.69]} />
            <mesh name="Firtree_33" geometry={nodes.Firtree_33.geometry} material={materials['World ap']} position={[-43.78, -4.37, 13.1]} rotation={[1.17, 0.8, 1.61]} />
            <mesh name="Firtree_34" geometry={nodes.Firtree_34.geometry} material={materials['World ap']} position={[-23.02, 2.21, 2.18]} rotation={[0.66, 0.52, 1.97]} />
            <mesh name="Firtree_35" geometry={nodes.Firtree_35.geometry} material={materials['World ap']} position={[10.25, 16.18, -11.14]} rotation={[0.61, 0.13, -0.17]} />
            <mesh name="Firtree_36" geometry={nodes.Firtree_36.geometry} material={materials['World ap']} position={[26.46, 29.17, 12.03]} rotation={[0.91, -0.08, -0.46]} />
            <mesh name="Firtree_37" geometry={nodes.Firtree_37.geometry} material={materials['World ap']} position={[-54.15, -16.86, 13.54]} rotation={[0.38, 1.02, 2.48]} />
            <mesh name="Firtree_38" geometry={nodes.Firtree_38.geometry} material={materials['World ap']} position={[-51.65, -23.49, 3.49]} rotation={[0.51, 0.82, 2.21]} />
            <mesh name="Firtree_39" geometry={nodes.Firtree_39.geometry} material={materials['World ap']} position={[-58.73, -25.94, 10.84]} rotation={[0.31, 0.9, 2.46]} />
            <mesh name="Firtree_4" geometry={nodes.Firtree_4.geometry} material={materials['World ap']} position={[61.73, 6.88, -7.85]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_40" geometry={nodes.Firtree_40.geometry} material={materials['World ap']} position={[-51.97, -30.39, 1.96]} rotation={[0.27, 0.74, 2.53]} />
            <mesh name="Firtree_41" geometry={nodes.Firtree_41.geometry} material={materials['World ap']} position={[-65.79, -56.83, 15.22]} rotation={[-0.08, 1.25, 3.01]} />
            <mesh name="Firtree_42" geometry={nodes.Firtree_42.geometry} material={materials['World ap']} position={[-55.56, -27.66, 5.23]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_43" geometry={nodes.Firtree_43.geometry} material={materials['World ap']} position={[-54.57, -18.99, 8.73]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_44" geometry={nodes.Firtree_44.geometry} material={materials['World ap']} position={[-33.65, 1.7, 2.7]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_45" geometry={nodes.Firtree_45.geometry} material={materials['World ap']} position={[-6.21, 13.9, -6.04]} rotation={[0.6, 0.58, -0.27]} />
            <mesh name="Firtree_46" geometry={nodes.Firtree_46.geometry} material={materials['World ap']} position={[-57.99, -61.58, 5.65]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_47" geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-35.47, -0.67, 9.39]} rotation={[0.89, 0.51, 1.64]} />
            <mesh name="Firtree_48" geometry={nodes.Firtree_48.geometry} material={materials['World ap']} position={[-60.73, -68.5, 7.65]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_49" geometry={nodes.Firtree_49.geometry} material={materials['World ap']} position={[60.69, 19.53, 5.39]} rotation={[0.71, -0.16, 0.83]} />
            <mesh name="Firtree_5" geometry={nodes.Firtree_5.geometry} material={materials['World ap']} position={[71.71, 10.57, -0.04]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_50" geometry={nodes.Firtree_50.geometry} material={materials['World ap']} position={[33.77, 24.3, 12.72]} rotation={[1, -0.4, 0.91]} />
            <mesh name="Firtree_51" geometry={nodes.Firtree_51.geometry} material={materials['World ap']} position={[-12.09, 19.81, 3.42]} rotation={[0.52, 0.65, 0.86]} />
            <mesh name="Firtree_52" geometry={nodes.Firtree_52.geometry} material={materials['World ap']} position={[-6.36, 2.58, -8.76]} rotation={[0.63, 0.55, 0.67]} />
            <mesh name="Firtree_53" geometry={nodes.Firtree_53.geometry} material={materials['World ap']} position={[-45.76, -18.1, 2.96]} rotation={[0.59, 0.44, 0.76]} />
            <mesh name="Firtree_54" geometry={nodes.Firtree_54.geometry} material={materials['World ap']} position={[-60.97, -62.25, 11.37]} rotation={[0.11, 1.05, 1.49]} />
            <mesh name="Firtree_55" geometry={nodes.Firtree_55.geometry} material={materials['World ap']} position={[-61.92, -72.12, 13.63]} rotation={[-0.29, 1.25, 1.95]} />
            <mesh name="Firtree_56" geometry={nodes.Firtree_56.geometry} material={materials['World ap']} position={[-59.43, -74.92, 8.99]} rotation={[0.04, 1.02, 1.61]} />
            <mesh name="Firtree_57" geometry={nodes.Firtree_57.geometry} material={materials['World ap']} position={[-60.61, -76.72, 11.06]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_58" geometry={nodes.Firtree_58.geometry} material={materials['World ap']} position={[-63.26, -66.68, 12.84]} rotation={[0.29, 1.11, 2.72]} />
            <mesh name="Firtree_59" geometry={nodes.Firtree_59.geometry} material={materials['World ap']} position={[-61.48, -76.24, 17.68]} rotation={[-0.58, 1.19, -2.57]} />
            <mesh name="Firtree_6" geometry={nodes.Firtree_6.geometry} material={materials['World ap']} position={[77.85, -3.43, -10.09]} rotation={[0.62, -0.43, 0.75]} />
            <mesh name="Firtree_60" geometry={nodes.Firtree_60.geometry} material={materials['World ap']} position={[-61.84, -81.68, 12.85]} rotation={[-0.86, 1.15, -2.37]} />
            <mesh name="Firtree_61" geometry={nodes.Firtree_61.geometry} material={materials['World ap']} position={[43.94, 25.17, 8.05]} rotation={[1.12, -0.08, -0.46]} />
            <mesh name="Firtree_62" geometry={nodes.Firtree_62.geometry} material={materials['World ap']} position={[68.44, 19.36, 2.33]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_63" geometry={nodes.Firtree_63.geometry} material={materials['World ap']} position={[83.67, 4.75, 0.55]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_64" geometry={nodes.Firtree_64.geometry} material={materials['World ap']} position={[84.08, -9.69, -6.41]} rotation={[0.65, -0.58, -0.11]} />
            <mesh name="Firtree_65" geometry={nodes.Firtree_65.geometry} material={materials['World ap']} position={[59.05, -1.03, -15.54]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_66" geometry={nodes.Firtree_66.geometry} material={materials['World ap']} position={[15.23, 1.7, -20.6]} rotation={[0.61, 0.17, 0.77]} />
            <mesh name="Firtree_67" geometry={nodes.Firtree_67.geometry} material={materials['World ap']} position={[19.25, 10.38, -1.46]} rotation={[0.76, 0.13, 0.98]} />
            <mesh name="Firtree_68" geometry={nodes.Firtree_68.geometry} material={materials['World ap']} position={[-18.89, 16.97, 11.39]} rotation={[0.98, 0.75, 1.9]} />
            <mesh name="Firtree_69" geometry={nodes.Firtree_69.geometry} material={materials['World ap']} position={[-6.61, 9.17, -9.28]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_7" geometry={nodes.Firtree_7.geometry} material={materials['World ap']} position={[59.97, 15.62, -3.21]} rotation={[0.64, -0.24, 0.81]} />
            <mesh name="Firtree_70" geometry={nodes.Firtree_70.geometry} material={materials['World ap']} position={[-65.87, -70.71, 20.97]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_71" geometry={nodes.Firtree_71.geometry} material={materials['World ap']} position={[-61.21, -56.38, 9.56]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_72" geometry={nodes.Firtree_72.geometry} material={materials['World ap']} position={[-66.63, -63.47, 18.3]} rotation={[-0.06, 1.16, 2.99]} />
            <mesh name="Firtree_73" geometry={nodes.Firtree_73.geometry} material={materials['World ap']} position={[-57.86, -53.97, 4.48]} rotation={[-0.04, 0.88, 2.97]} />
            <mesh name="Firtree_74" geometry={nodes.Firtree_74.geometry} material={materials['World ap']} position={[-62.99, -53.6, 14.82]} rotation={[-0.06, 1.12, 2.99]} />
            <mesh name="Firtree_75" geometry={nodes.Firtree_75.geometry} material={materials['World ap']} position={[-69.89, -53.97, 20.42]} rotation={[-0.25, 1.04, -1.89]} />
            <mesh name="Firtree_76" geometry={nodes.Firtree_76.geometry} material={materials['World ap']} position={[3.91, -0.77, -16.99]} rotation={[0.66, 0.29, -1.57]} />
            <mesh name="Firtree_77" geometry={nodes.Firtree_77.geometry} material={materials['World ap']} position={[21.46, -1.57, -22.04]} rotation={[0.53, 0.03, 2.17]} />
            <mesh name="Firtree_78" geometry={nodes.Firtree_78.geometry} material={materials['World ap']} position={[10.21, -2.78, -19.58]} rotation={[0.61, 0.24, 0.28]} />
            <mesh name="Firtree_79" geometry={nodes.Firtree_79.geometry} material={materials['World ap']} position={[40.1, 14.43, -4.01]} rotation={[0.6, -0.13, 0.53]} />
            <mesh name="Firtree_8" geometry={nodes.Firtree_8.geometry} material={materials['World ap']} position={[25.41, 14.05, -9.85]} rotation={[0.79, -0.07, 0.84]} />
            <mesh name="Firtree_80" geometry={nodes.Firtree_80.geometry} material={materials['World ap']} position={[77.95, -19, -14.51]} rotation={[0.44, -0.53, 0.22]} />
            <mesh name="Firtree_81" geometry={nodes.Firtree_81.geometry} material={materials['World ap']} position={[72.02, 4.81, -6.63]} rotation={[0.6, -0.32, 0.05]} />
            <mesh name="Firtree_82" geometry={nodes.Firtree_82.geometry} material={materials['World ap']} position={[64.53, 10.91, -1.82]} rotation={[0.78, -0.32, 0.05]} />
            <mesh name="Firtree_83" geometry={nodes.Firtree_83.geometry} material={materials['World ap']} position={[52.53, 7.31, -10.78]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_84" geometry={nodes.Firtree_84.geometry} material={materials['World ap']} position={[67.86, 0.03, -10.31]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_85" geometry={nodes.Firtree_85.geometry} material={materials['World ap']} position={[69.72, -9.31, -17.67]} rotation={[0.29, -0.07, 0.66]} />
            <mesh name="Firtree_86" geometry={nodes.Firtree_86.geometry} material={materials['World ap']} position={[66.17, 25.68, 10.25]} rotation={[0.83, -0.35, -1.96]} />
            <mesh name="Firtree_87" geometry={nodes.Firtree_87.geometry} material={materials['World ap']} position={[-16.4, 21.85, 6.13]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_88" geometry={nodes.Firtree_88.geometry} material={materials['World ap']} position={[-18.44, 25.56, 10.74]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_89" geometry={nodes.Firtree_89.geometry} material={materials['World ap']} position={[-56.81, -49.67, 5.84]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_9" geometry={nodes.Firtree_9.geometry} material={materials['World ap']} position={[32.65, 17.22, -0.61]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_90" geometry={nodes.Firtree_90.geometry} material={materials['World ap']} position={[-47.03, -26.86, -1.51]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_91" geometry={nodes.Firtree_91.geometry} material={materials['World ap']} position={[-51.27, -8.26, 18.84]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_92" geometry={nodes.Firtree_92.geometry} material={materials['World ap']} position={[-56.29, -33.98, 4]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_93" geometry={nodes.Firtree_93.geometry} material={materials['World ap']} position={[60.1, -142.32, 2.38]} rotation={[-0.65, -0.48, -0.26]} />
            <mesh name="Firtree_94" geometry={nodes.Firtree_94.geometry} material={materials['World ap']} position={[100.81, -115.34, 11.14]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_95" geometry={nodes.Firtree_95.geometry} material={materials['World ap']} position={[57.73, -148.83, 5.76]} rotation={[-0.65, -0.48, -0.26]} />
            <mesh name="Firtree_96" geometry={nodes.Firtree_96.geometry} material={materials['World ap']} position={[58.51, -147.99, 13.82]} rotation={[-1.16, -0.36, 3.09]} />
            <mesh name="Firtree_97" geometry={nodes.Firtree_97.geometry} material={materials['World ap']} position={[96.41, -119.21, 6.79]} rotation={[-0.67, -0.6, -0.64]} />
            <mesh name="Firtree_98" geometry={nodes.Firtree_98.geometry} material={materials['World ap']} position={[85.58, -146.63, 43.14]} rotation={[-1.49, -0.41, -1.75]} />
            <mesh name="Firtree_99" geometry={nodes.Firtree_99.geometry} material={materials['World ap']} position={[96.56, -136.96, 36.08]} rotation={[-1.3, -0.79, -1.27]} />
          </group>
          <group name="Palms" position={[-68.62, 82.82, 15.93]} rotation={[2.1, 0.5, 1.38]}>
            <group name="Africa" position={[68.89, 73.37, 49.11]} rotation={[0.26, -0.67, 0.01]}>
              <mesh name="Palm_10_3" geometry={nodes.Palm_10_3.geometry} material={materials['World ap']} position={[-21.32, 22.37, 46.56]} rotation={[1.05, 0.85, -0.29]} />
              <mesh name="Palm_11_3" geometry={nodes.Palm_11_3.geometry} material={materials['World ap']} position={[3.38, 21.43, 18.13]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_3" geometry={nodes.Palm_12_3.geometry} material={materials['World ap']} position={[9.39, 22.77, 21.96]} rotation={[1.23, -0.09, -1.58]} />
              <mesh name="Palm_13_3" geometry={nodes.Palm_13_3.geometry} material={materials['World ap']} position={[20.16, 26.2, 34.32]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_14_3" geometry={nodes.Palm_14_3.geometry} material={materials['World ap']} position={[27.71, 27.28, 40.3]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_3" geometry={nodes.Palm_15_3.geometry} material={materials['World ap']} position={[17.09, 18.71, 26.67]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_16_3" geometry={nodes.Palm_16_3.geometry} material={materials['World ap']} position={[9.83, 25.46, 30.64]} rotation={[1.15, -0.33, -0.34]} />
              <mesh name="Palm_17_3" geometry={nodes.Palm_17_3.geometry} material={materials['World ap']} position={[15.03, 19.78, 22.07]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_18_3" geometry={nodes.Palm_18_3.geometry} material={materials['World ap']} position={[6.95, 17, 16.77]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_19_3" geometry={nodes.Palm_19_3.geometry} material={materials['World ap']} position={[12.76, 12.63, 5.63]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_1_3" geometry={nodes.Palm_1_3.geometry} material={materials['World ap']} position={[11.41, -7.46, -14.61]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_20_3" geometry={nodes.Palm_20_3.geometry} material={materials['World ap']} position={[17.89, 13.31, 8.13]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_21_3" geometry={nodes.Palm_21_3.geometry} material={materials['World ap']} position={[-24.41, 5.81, 15.37]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_22_3" geometry={nodes.Palm_22_3.geometry} material={materials['World ap']} position={[-31.92, -2.5, 11.2]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_23_3" geometry={nodes.Palm_23_3.geometry} material={materials['World ap']} position={[-33.19, 0.21, 17.17]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_24_3" geometry={nodes.Palm_24_3.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_3" geometry={nodes.Palm_25_3.geometry} material={materials['World ap']} position={[20.42, 27.91, 36.77]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_3" geometry={nodes.Palm_26_3.geometry} material={materials['World ap']} position={[18.13, 3.44, 0.72]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_3" geometry={nodes.Palm_27_3.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_3" geometry={nodes.Palm_28_3.geometry} material={materials['World ap']} position={[28.17, -9.24, -5.95]} rotation={[1.01, -0.86, 0.94]} />
              <mesh name="Palm_29_3" geometry={nodes.Palm_29_3.geometry} material={materials['World ap']} position={[18.34, -0.34, -9.53]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_2_4" geometry={nodes.Palm_2_4.geometry} material={materials['World ap']} position={[23.43, -0.6, -3.57]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_3" geometry={nodes.Palm_30_3.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_32_2" geometry={nodes.Palm_32_2.geometry} material={materials['World ap']} position={[-13.49, 25.12, 47.26]} rotation={[0.9, 0.36, -0.21]} />
              <mesh name="Palm_33_2" geometry={nodes.Palm_33_2.geometry} material={materials['World ap']} position={[-17.55, 23.96, 49.11]} rotation={[1.68, 0.48, -0.43]} />
              <mesh name="Palm_34_2" geometry={nodes.Palm_34_2.geometry} material={materials['World ap']} position={[-19.74, -0.58, 5.87]} rotation={[0.52, 0.92, -0.08]} />
              <mesh name="Palm_35_2" geometry={nodes.Palm_35_2.geometry} material={materials['World ap']} position={[-13.45, 24.64, 53.09]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36_2" geometry={nodes.Palm_36_2.geometry} material={materials['World ap']} position={[-20.51, 24.23, 49.63]} rotation={[1.62, 0.74, -0.19]} />
              <mesh name="Palm_37_2" geometry={nodes.Palm_37_2.geometry} material={materials['World ap']} position={[-3.36, 28.29, 51.92]} rotation={[2, 0.17, -0.72]} />
              <mesh name="Palm_38_2" geometry={nodes.Palm_38_2.geometry} material={materials['World ap']} position={[-23.26, 21.37, 43.92]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_39_2" geometry={nodes.Palm_39_2.geometry} material={materials['World ap']} position={[-40.85, 1.14, 39.29]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_3_3" geometry={nodes.Palm_3_3.geometry} material={materials['World ap']} position={[15.01, 6.9, 0.26]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_3_4" geometry={nodes.Palm_3_4.geometry} material={materials['World ap']} position={[-14.08, -0.89, -0.25]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40_2" geometry={nodes.Palm_40_2.geometry} material={materials['World ap']} position={[-35.7, 11.31, 38.14]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_41_2" geometry={nodes.Palm_41_2.geometry} material={materials['World ap']} position={[-42.85, -1, 35.96]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_42_2" geometry={nodes.Palm_42_2.geometry} material={materials['World ap']} position={[-39.49, -1.78, 19.19]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_43_2" geometry={nodes.Palm_43_2.geometry} material={materials['World ap']} position={[-42.86, -2.5, 23]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_44_2" geometry={nodes.Palm_44_2.geometry} material={materials['World ap']} position={[-47.57, -6.66, 27.07]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_45_2" geometry={nodes.Palm_45_2.geometry} material={materials['World ap']} position={[-49, -11.96, 24.28]} rotation={[0.78, 0.89, -0.25]} />
              <mesh name="Palm_46_2" geometry={nodes.Palm_46_2.geometry} material={materials['World ap']} position={[4.56, 29.69, 48.51]} rotation={[1.26, -0.01, -0.32]} />
              <mesh name="Palm_47_2" geometry={nodes.Palm_47_2.geometry} material={materials['World ap']} position={[5.54, 30.16, 51.83]} rotation={[1.58, -0.19, -0.3]} />
              <mesh name="Palm_48_2" geometry={nodes.Palm_48_2.geometry} material={materials['World ap']} position={[-43.37, -1.41, 32.08]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_49_2" geometry={nodes.Palm_49_2.geometry} material={materials['World ap']} position={[-42.65, -2.77, 29.47]} rotation={[0.76, 0.91, -0.3]} />
              <mesh name="Palm_50_2" geometry={nodes.Palm_50_2.geometry} material={materials['World ap']} position={[-0.93, 15.13, 12.05]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_51_2" geometry={nodes.Palm_51_2.geometry} material={materials['World ap']} position={[4.74, 21.9, 16]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_52_2" geometry={nodes.Palm_52_2.geometry} material={materials['World ap']} position={[-15.6, -2.2, 2.14]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_53_2" geometry={nodes.Palm_53_2.geometry} material={materials['World ap']} position={[-8.65, -5.18, -11.32]} rotation={[0.94, 0.53, -0.23]} />
              <mesh name="Palm_54_2" geometry={nodes.Palm_54_2.geometry} material={materials['World ap']} position={[1.47, 20.88, 15.56]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_55_2" geometry={nodes.Palm_55_2.geometry} material={materials['World ap']} position={[9.27, 25.49, 27]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_56_2" geometry={nodes.Palm_56_2.geometry} material={materials['World ap']} position={[8.67, 22.7, 23.21]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_57_2" geometry={nodes.Palm_57_2.geometry} material={materials['World ap']} position={[-7.07, -4.42, -5.71]} rotation={[0.15, 0.78, 0.17]} />
              <mesh name="Palm_5_3" geometry={nodes.Palm_5_3.geometry} material={materials['World ap']} position={[-10.07, 6.41, 9.26]} rotation={[1.14, 0.55, -0.23]} />
              <mesh name="Palm_6_3" geometry={nodes.Palm_6_3.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_7_3" geometry={nodes.Palm_7_3.geometry} material={materials['World ap']} position={[3.94, 17.17, 12.13]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_81_3" geometry={nodes.Palm_81_3.geometry} material={materials['World ap']} position={[-7.51, -3.03, -2.06]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_82_3" geometry={nodes.Palm_82_3.geometry} material={materials['World ap']} position={[-2.09, 6.81, 1.41]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_85_2" geometry={nodes.Palm_85_2.geometry} material={materials['World ap']} position={[1.9, -12.53, -7.88]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_3" geometry={nodes.Palm_86_3.geometry} material={materials['World ap']} position={[8.57, 5.79, -0.2]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_87_3" geometry={nodes.Palm_87_3.geometry} material={materials['World ap']} position={[-4.39, 9.09, 8.33]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_88_2" geometry={nodes.Palm_88_2.geometry} material={materials['World ap']} position={[3.83, 11.71, 5.27]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_3" geometry={nodes.Palm_89_3.geometry} material={materials['World ap']} position={[-10.33, 4.11, 2.8]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_8_3" geometry={nodes.Palm_8_3.geometry} material={materials['World ap']} position={[-26.69, 0.7, 9.89]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_91_3" geometry={nodes.Palm_91_3.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_9_3" geometry={nodes.Palm_9_3.geometry} material={materials['World ap']} position={[-3.81, 12.33, 11.07]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="America" position={[121.64, 40.46, 118.25]} rotation={[0.68, -0.89, -0.51]}>
              <mesh name="Palm_10_2" geometry={nodes.Palm_10_2.geometry} material={materials['World ap']} position={[1.09, 32.77, 62.86]} rotation={[1.52, 0.11, -0.41]} />
              <mesh name="Palm_11_2" geometry={nodes.Palm_11_2.geometry} material={materials['World ap']} position={[1.17, 16.92, 21.54]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_2" geometry={nodes.Palm_12_2.geometry} material={materials['World ap']} position={[9.47, 17.04, 22.85]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_13_2" geometry={nodes.Palm_13_2.geometry} material={materials['World ap']} position={[20.58, 19.69, 35.5]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_14_2" geometry={nodes.Palm_14_2.geometry} material={materials['World ap']} position={[28.47, 20.35, 41.66]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_2" geometry={nodes.Palm_15_2.geometry} material={materials['World ap']} position={[18.66, 18.26, 23.68]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_16_2" geometry={nodes.Palm_16_2.geometry} material={materials['World ap']} position={[9.83, 25.46, 30.64]} rotation={[1.15, -0.33, -0.34]} />
              <mesh name="Palm_17_2" geometry={nodes.Palm_17_2.geometry} material={materials['World ap']} position={[15.11, 14.06, 22.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_18_2" geometry={nodes.Palm_18_2.geometry} material={materials['World ap']} position={[8.44, 10.88, 14.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_19_2" geometry={nodes.Palm_19_2.geometry} material={materials['World ap']} position={[14.6, 5.34, 7.67]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_1_2" geometry={nodes.Palm_1_2.geometry} material={materials['World ap']} position={[15.13, -16.44, -8.07]} rotation={[0.21, -0.1, 0.65]} />
              <mesh name="Palm_20_2" geometry={nodes.Palm_20_2.geometry} material={materials['World ap']} position={[19.1, -0.7, 3.92]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_21_2" geometry={nodes.Palm_21_2.geometry} material={materials['World ap']} position={[-4.9, -7.44, -8.22]} rotation={[0.76, 0.52, -0.38]} />
              <mesh name="Palm_22_2" geometry={nodes.Palm_22_2.geometry} material={materials['World ap']} position={[-13.85, -15.36, -8.66]} rotation={[0.16, 0.63, -0.04]} />
              <mesh name="Palm_23_2" geometry={nodes.Palm_23_2.geometry} material={materials['World ap']} position={[-14.8, -9.69, -5.25]} rotation={[0.16, 0.63, -0.04]} />
              <mesh name="Palm_24_2" geometry={nodes.Palm_24_2.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_2" geometry={nodes.Palm_25_2.geometry} material={materials['World ap']} position={[20.85, 21.4, 37.95]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_2" geometry={nodes.Palm_26_2.geometry} material={materials['World ap']} position={[18.25, -4.72, 1.99]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_2" geometry={nodes.Palm_27_2.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_2" geometry={nodes.Palm_28_2.geometry} material={materials['World ap']} position={[-1.08, -28.79, -16.33]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_29_2" geometry={nodes.Palm_29_2.geometry} material={materials['World ap']} position={[10.77, -19.68, -13.64]} rotation={[0.15, -0.01, -0.1]} />
              <mesh name="Palm_2_2" geometry={nodes.Palm_2_2.geometry} material={materials['World ap']} position={[15.13, -1.26, 1.52]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_2_3" geometry={nodes.Palm_2_3.geometry} material={materials['World ap']} position={[18.58, -12.3, -4.65]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_2" geometry={nodes.Palm_30_2.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_31" geometry={nodes.Palm_31.geometry} material={materials['World ap']} position={[7.09, -24.83, -15.76]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_32" geometry={nodes.Palm_32.geometry} material={materials['World ap']} position={[-2.73, 30.19, 56.84]} rotation={[1.2, -0.11, -0.39]} />
              <mesh name="Palm_33" geometry={nodes.Palm_33.geometry} material={materials['World ap']} position={[-9.88, 31.04, 52.08]} rotation={[1.29, 0.28, -0.41]} />
              <mesh name="Palm_35" geometry={nodes.Palm_35.geometry} material={materials['World ap']} position={[-5.33, 31.26, 53.11]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36" geometry={nodes.Palm_36.geometry} material={materials['World ap']} position={[-16.15, 32.22, 57.59]} rotation={[1.03, 0.09, -0.48]} />
              <mesh name="Palm_37" geometry={nodes.Palm_37.geometry} material={materials['World ap']} position={[-16.05, 29.53, 55.34]} rotation={[0.31, 0.54, -0.78]} />
              <mesh name="Palm_38" geometry={nodes.Palm_38.geometry} material={materials['World ap']} position={[-21.64, 29.25, 54.54]} rotation={[0.6, 0.24, -0.89]} />
              <mesh name="Palm_39" geometry={nodes.Palm_39.geometry} material={materials['World ap']} position={[31.58, 24.81, 90.81]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_3_2" geometry={nodes.Palm_3_2.geometry} material={materials['World ap']} position={[-13.72, -1.12, 0.67]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40" geometry={nodes.Palm_40.geometry} material={materials['World ap']} position={[36.71, 26.56, 91.51]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_41" geometry={nodes.Palm_41.geometry} material={materials['World ap']} position={[31.17, 26.2, 87.97]} rotation={[1.29, 0.32, -0.4]} />
              <mesh name="Palm_42" geometry={nodes.Palm_42.geometry} material={materials['World ap']} position={[-2, -24.98, -15.85]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_43" geometry={nodes.Palm_43.geometry} material={materials['World ap']} position={[-4.92, -21.9, -11.27]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_44" geometry={nodes.Palm_44.geometry} material={materials['World ap']} position={[0.96, -19.03, -13.48]} rotation={[0.01, -0.18, 0.35]} />
              <mesh name="Palm_45" geometry={nodes.Palm_45.geometry} material={materials['World ap']} position={[10.66, -26.03, -16.24]} rotation={[0.05, -0.18, 0.37]} />
              <mesh name="Palm_46" geometry={nodes.Palm_46.geometry} material={materials['World ap']} position={[3.2, -21.14, -13.69]} rotation={[-0.39, 0.28, 0.57]} />
              <mesh name="Palm_47" geometry={nodes.Palm_47.geometry} material={materials['World ap']} position={[6.85, -30.22, -14.77]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_48" geometry={nodes.Palm_48.geometry} material={materials['World ap']} position={[6.85, 23.16, 36.91]} rotation={[1.52, -0.14, -0.33]} />
              <mesh name="Palm_49" geometry={nodes.Palm_49.geometry} material={materials['World ap']} position={[15.97, 24.78, 46.53]} rotation={[1.63, -0.14, -0.05]} />
              <mesh name="Palm_4_2" geometry={nodes.Palm_4_2.geometry} material={materials['World ap']} position={[-15.94, 3.36, 7.85]} rotation={[1.01, 0.76, -0.27]} />
              <mesh name="Palm_50" geometry={nodes.Palm_50.geometry} material={materials['World ap']} position={[14.38, 23.52, 38.59]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_51" geometry={nodes.Palm_51.geometry} material={materials['World ap']} position={[15.89, 21.9, 32.79]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_52" geometry={nodes.Palm_52.geometry} material={materials['World ap']} position={[2.09, 22.27, 29.38]} rotation={[1.32, 0.05, -0.31]} />
              <mesh name="Palm_53" geometry={nodes.Palm_53.geometry} material={materials['World ap']} position={[-6.08, 22.21, 29.79]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_54" geometry={nodes.Palm_54.geometry} material={materials['World ap']} position={[1.22, 23.25, 35.82]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_55" geometry={nodes.Palm_55.geometry} material={materials['World ap']} position={[-10.06, 12.41, 19.6]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_56" geometry={nodes.Palm_56.geometry} material={materials['World ap']} position={[30.28, 21.12, 42.5]} rotation={[1.15, -0.2, -0.29]} />
              <mesh name="Palm_57" geometry={nodes.Palm_57.geometry} material={materials['World ap']} position={[-7.98, 31.92, 58.25]} rotation={[1.54, 0.06, -0.82]} />
              <mesh name="Palm_58" geometry={nodes.Palm_58.geometry} material={materials['World ap']} position={[42.36, 22.15, 84.15]} rotation={[1.61, -0.07, -0.39]} />
              <mesh name="Palm_59" geometry={nodes.Palm_59.geometry} material={materials['World ap']} position={[39.86, 20.97, 78.61]} rotation={[1.28, -0.28, -0.43]} />
              <mesh name="Palm_5_2" geometry={nodes.Palm_5_2.geometry} material={materials['World ap']} position={[-9.99, 0.69, 10.14]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_60" geometry={nodes.Palm_60.geometry} material={materials['World ap']} position={[34.94, 23.46, 80.08]} rotation={[1.64, -0.12, -0.79]} />
              <mesh name="Palm_61" geometry={nodes.Palm_61.geometry} material={materials['World ap']} position={[57.99, 12.01, 88.43]} rotation={[1.97, -0.59, -0.18]} />
              <mesh name="Palm_62" geometry={nodes.Palm_62.geometry} material={materials['World ap']} position={[58.58, 10.1, 94.41]} rotation={[2.06, -0.67, -0.11]} />
              <mesh name="Palm_63" geometry={nodes.Palm_63.geometry} material={materials['World ap']} position={[59.77, 6.97, 89.69]} rotation={[2.42, -0.87, 0.18]} />
              <mesh name="Palm_64" geometry={nodes.Palm_64.geometry} material={materials['World ap']} position={[60.03, 7.69, 87.34]} rotation={[1.53, -1.09, -0.82]} />
              <mesh name="Palm_65" geometry={nodes.Palm_65.geometry} material={materials['World ap']} position={[58.57, 11.76, 78.12]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_66" geometry={nodes.Palm_66.geometry} material={materials['World ap']} position={[57.21, 11.84, 84.55]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_67" geometry={nodes.Palm_67.geometry} material={materials['World ap']} position={[56.92, 17.16, 80.37]} rotation={[1.62, -0.75, -0.08]} />
              <mesh name="Palm_68" geometry={nodes.Palm_68.geometry} material={materials['World ap']} position={[10.78, 2.32, 3.3]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_69" geometry={nodes.Palm_69.geometry} material={materials['World ap']} position={[5.83, 9.31, 9.37]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_6_2" geometry={nodes.Palm_6_2.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_70" geometry={nodes.Palm_70.geometry} material={materials['World ap']} position={[-1, -3.06, -0.09]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_71" geometry={nodes.Palm_71.geometry} material={materials['World ap']} position={[14.54, 8.87, 17.29]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_72" geometry={nodes.Palm_72.geometry} material={materials['World ap']} position={[12.31, 17.49, 25.91]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_73" geometry={nodes.Palm_73.geometry} material={materials['World ap']} position={[18.57, 21.78, 32.36]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_74" geometry={nodes.Palm_74.geometry} material={materials['World ap']} position={[23.75, 0.25, 12.2]} rotation={[1.2, -0.25, -0.28]} />
              <mesh name="Palm_75" geometry={nodes.Palm_75.geometry} material={materials['World ap']} position={[25.34, -1.19, 6.49]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_76" geometry={nodes.Palm_76.geometry} material={materials['World ap']} position={[22.95, 8.11, 17.72]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_77" geometry={nodes.Palm_77.geometry} material={materials['World ap']} position={[29.07, 15.54, 34.3]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_78" geometry={nodes.Palm_78.geometry} material={materials['World ap']} position={[29.64, 12.36, 30.22]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_79" geometry={nodes.Palm_79.geometry} material={materials['World ap']} position={[19.9, 6.53, 12.73]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_7_2" geometry={nodes.Palm_7_2.geometry} material={materials['World ap']} position={[4.02, 11.45, 13.01]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_80" geometry={nodes.Palm_80.geometry} material={materials['World ap']} position={[6.74, -9.38, -4.84]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_81_2" geometry={nodes.Palm_81_2.geometry} material={materials['World ap']} position={[-7.51, -3.03, -2.06]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_82_2" geometry={nodes.Palm_82_2.geometry} material={materials['World ap']} position={[-2, 0.7, 2.35]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_83" geometry={nodes.Palm_83.geometry} material={materials['World ap']} position={[10.41, -4.94, -3.71]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_84" geometry={nodes.Palm_84.geometry} material={materials['World ap']} position={[9.41, -10.5, -11.59]} rotation={[0.21, -0.1, -0.15]} />
              <mesh name="Palm_85" geometry={nodes.Palm_85.geometry} material={materials['World ap']} position={[4.64, -12.14, -9.13]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_2" geometry={nodes.Palm_86_2.geometry} material={materials['World ap']} position={[9.17, -1.26, -0.09]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_87_2" geometry={nodes.Palm_87_2.geometry} material={materials['World ap']} position={[-4.39, 9.09, 8.33]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_88" geometry={nodes.Palm_88.geometry} material={materials['World ap']} position={[3.94, 3.61, 6.53]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_2" geometry={nodes.Palm_89_2.geometry} material={materials['World ap']} position={[-11.47, 3.02, 2.45]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_90_2" geometry={nodes.Palm_90_2.geometry} material={materials['World ap']} position={[0.86, -7.12, -3.88]} rotation={[0.48, 0.17, -0.3]} />
              <mesh name="Palm_91_2" geometry={nodes.Palm_91_2.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_92" geometry={nodes.Palm_92.geometry} material={materials['World ap']} position={[28.35, 1.38, 13.13]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_93" geometry={nodes.Palm_93.geometry} material={materials['World ap']} position={[30.5, -22.16, -7.62]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_94" geometry={nodes.Palm_94.geometry} material={materials['World ap']} position={[31.78, -11.29, 3.43]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_95" geometry={nodes.Palm_95.geometry} material={materials['World ap']} position={[29.07, -12.05, 3.5]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_96" geometry={nodes.Palm_96.geometry} material={materials['World ap']} position={[16.82, -8.7, -0.35]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_97" geometry={nodes.Palm_97.geometry} material={materials['World ap']} position={[21.61, -20.23, -9.52]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_98" geometry={nodes.Palm_98.geometry} material={materials['World ap']} position={[10.82, -33.15, -15.81]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_99" geometry={nodes.Palm_99.geometry} material={materials['World ap']} position={[-13.65, 12.21, 18.63]} rotation={[1.43, 0.48, -0.37]} />
              <mesh name="Palm_9_2" geometry={nodes.Palm_9_2.geometry} material={materials['World ap']} position={[-3.77, 9.62, 11.49]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="Asia" position={[6.96, -47.91, 32.15]}>
              <mesh name="Palm_100" geometry={nodes.Palm_100.geometry} material={materials['World ap']} position={[-6.14, 123.21, 32.21]} rotation={[0.43, 0.75, -0.08]} />
              <mesh name="Palm_101" geometry={nodes.Palm_101.geometry} material={materials['World ap']} position={[-8.04, 125.27, 37.37]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_102" geometry={nodes.Palm_102.geometry} material={materials['World ap']} position={[-8.88, 125.11, 37.33]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_103" geometry={nodes.Palm_103.geometry} material={materials['World ap']} position={[-7.19, 125.18, 44.55]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_104" geometry={nodes.Palm_104.geometry} material={materials['World ap']} position={[-7.67, 125.73, 45.68]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_105" geometry={nodes.Palm_105.geometry} material={materials['World ap']} position={[-2.09, 122.07, 29.58]} rotation={[1.32, 0.4, -0.44]} />
              <mesh name="Palm_106" geometry={nodes.Palm_106.geometry} material={materials['World ap']} position={[-2.56, 124.41, 31.17]} rotation={[1.69, 0.21, -0.55]} />
              <mesh name="Palm_107" geometry={nodes.Palm_107.geometry} material={materials['World ap']} position={[-8.85, 124.91, 35.69]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_108" geometry={nodes.Palm_108.geometry} material={materials['World ap']} position={[-13.92, 121.37, 32.88]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_109" geometry={nodes.Palm_109.geometry} material={materials['World ap']} position={[44.86, 15.81, -34.66]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_10_4" geometry={nodes.Palm_10_4.geometry} material={materials['World ap']} position={[-22.48, 10.47, -24.86]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_110" geometry={nodes.Palm_110.geometry} material={materials['World ap']} position={[38.25, 18.88, -36.83]} rotation={[-0.23, -0.26, 0.13]} />
              <mesh name="Palm_111" geometry={nodes.Palm_111.geometry} material={materials['World ap']} position={[25.39, 19.94, -38.36]} rotation={[-0.03, 0.13, 0.1]} />
              <mesh name="Palm_112" geometry={nodes.Palm_112.geometry} material={materials['World ap']} position={[32.61, 18.2, -36.51]} rotation={[-0.28, 0.1, 0.12]} />
              <mesh name="Palm_113" geometry={nodes.Palm_113.geometry} material={materials['World ap']} position={[37.33, 7.65, -36.14]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_114" geometry={nodes.Palm_114.geometry} material={materials['World ap']} position={[29.43, 5.41, -37.44]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_115" geometry={nodes.Palm_115.geometry} material={materials['World ap']} position={[21.25, 3.26, -36.36]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_116" geometry={nodes.Palm_116.geometry} material={materials['World ap']} position={[11.3, 16.64, -39.96]} rotation={[-0.41, 0.36, -0.29]} />
              <mesh name="Palm_117" geometry={nodes.Palm_117.geometry} material={materials['World ap']} position={[13.26, 19.18, -39.68]} rotation={[0, -0.18, 0.1]} />
              <mesh name="Palm_11_4" geometry={nodes.Palm_11_4.geometry} material={materials['World ap']} position={[-15.51, 31.82, -27.99]} rotation={[-0.41, 0.68, 0.36]} />
              <mesh name="Palm_12_4" geometry={nodes.Palm_12_4.geometry} material={materials['World ap']} position={[-12.2, 5, -24.81]} rotation={[-0.73, 0.53, 0.26]} />
              <mesh name="Palm_13_4" geometry={nodes.Palm_13_4.geometry} material={materials['World ap']} position={[-0.3, -48.35, 3.75]} rotation={[-1.14, 0.31, 0.39]} />
              <mesh name="Palm_14_4" geometry={nodes.Palm_14_4.geometry} material={materials['World ap']} position={[-0.54, -53.93, 10.49]} rotation={[-1.51, 0.14, 0.47]} />
              <mesh name="Palm_15_4" geometry={nodes.Palm_15_4.geometry} material={materials['World ap']} position={[-12.21, -44.5, 8.02]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_16_4" geometry={nodes.Palm_16_4.geometry} material={materials['World ap']} position={[-0.63, -39.28, 2.18]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_17_4" geometry={nodes.Palm_17_4.geometry} material={materials['World ap']} position={[12.99, -62, 24.82]} rotation={[-1.57, 0.23, 0.48]} />
              <mesh name="Palm_18_4" geometry={nodes.Palm_18_4.geometry} material={materials['World ap']} position={[19.74, -57.38, 24.24]} rotation={[-0.96, 0.1, 0.29]} />
              <mesh name="Palm_19_4" geometry={nodes.Palm_19_4.geometry} material={materials['World ap']} position={[15.82, -61.47, 32.12]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_1_4" geometry={nodes.Palm_1_4.geometry} material={materials['World ap']} position={[-6.96, 35.61, -33.67]} rotation={[-0.25, -0.12, 0.13]} />
              <mesh name="Palm_20_4" geometry={nodes.Palm_20_4.geometry} material={materials['World ap']} position={[-9.94, -49.99, 21.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_21_4" geometry={nodes.Palm_21_4.geometry} material={materials['World ap']} position={[56.8, 94.76, -12.26]} rotation={[0.87, 0.7, -2.68]} />
              <mesh name="Palm_22_4" geometry={nodes.Palm_22_4.geometry} material={materials['World ap']} position={[12.51, -18.38, -22.47]} rotation={[-0.85, 0.4, 0.31]} />
              <mesh name="Palm_23_4" geometry={nodes.Palm_23_4.geometry} material={materials['World ap']} position={[0.97, -28.53, -19.17]} rotation={[-0.79, 0.28, 0.2]} />
              <mesh name="Palm_24_4" geometry={nodes.Palm_24_4.geometry} material={materials['World ap']} position={[-2.8, -16.7, -16.91]} rotation={[-0.53, 0.44, -0.31]} />
              <mesh name="Palm_25_4" geometry={nodes.Palm_25_4.geometry} material={materials['World ap']} position={[-6.63, -25.11, -10.66]} rotation={[-0.69, 0.48, -0.24]} />
              <mesh name="Palm_27_4" geometry={nodes.Palm_27_4.geometry} material={materials['World ap']} position={[-12.31, 56.29, -27.76]} rotation={[0.28, 0.86, -0.64]} />
              <mesh name="Palm_28_4" geometry={nodes.Palm_28_4.geometry} material={materials['World ap']} position={[1.92, 70.39, -29.82]} rotation={[0.37, 0.16, -0.82]} />
              <mesh name="Palm_29_4" geometry={nodes.Palm_29_4.geometry} material={materials['World ap']} position={[-8.31, 68.83, -27.07]} rotation={[0.69, 0.56, -0.91]} />
              <mesh name="Palm_2_5" geometry={nodes.Palm_2_5.geometry} material={materials['World ap']} position={[-12.47, 42, -28.34]} rotation={[0.13, 0.62, 0.06]} />
              <mesh name="Palm_30_4" geometry={nodes.Palm_30_4.geometry} material={materials['World ap']} position={[1.07, 81.17, -24.54]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_31_3" geometry={nodes.Palm_31_3.geometry} material={materials['World ap']} position={[-11.23, 84.41, -22.14]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_32_3" geometry={nodes.Palm_32_3.geometry} material={materials['World ap']} position={[-18.41, -13.05, -20.15]} rotation={[-0.28, 0.36, -0.41]} />
              <mesh name="Palm_33_3" geometry={nodes.Palm_33_3.geometry} material={materials['World ap']} position={[-11.31, -56.66, 29.97]} rotation={[-1.38, 0.53, 0.11]} />
              <mesh name="Palm_34_3" geometry={nodes.Palm_34_3.geometry} material={materials['World ap']} position={[-2.82, -56.4, 22.62]} rotation={[-1.38, 0.53, 0.11]} />
              <mesh name="Palm_35_3" geometry={nodes.Palm_35_3.geometry} material={materials['World ap']} position={[66.35, 81.93, -16.06]} rotation={[0.58, -0.41, -0.11]} />
              <mesh name="Palm_36_3" geometry={nodes.Palm_36_3.geometry} material={materials['World ap']} position={[64.32, 85.82, -14.95]} rotation={[0.21, 0.21, -0.4]} />
              <mesh name="Palm_37_3" geometry={nodes.Palm_37_3.geometry} material={materials['World ap']} position={[66.31, 89.26, -15.02]} rotation={[0.81, -0.06, -0.44]} />
              <mesh name="Palm_38_3" geometry={nodes.Palm_38_3.geometry} material={materials['World ap']} position={[61.91, 90.39, -14.24]} rotation={[0.81, -0.06, -1.88]} />
              <mesh name="Palm_39_3" geometry={nodes.Palm_39_3.geometry} material={materials['World ap']} position={[62.55, 93.74, -11.84]} rotation={[1.25, -0.19, -1.82]} />
              <mesh name="Palm_3_5" geometry={nodes.Palm_3_5.geometry} material={materials['World ap']} position={[-2.4, 59.91, -31.93]} rotation={[0.4, 0.43, -0.76]} />
              <mesh name="Palm_40_3" geometry={nodes.Palm_40_3.geometry} material={materials['World ap']} position={[57.6, 94.04, -13.93]} rotation={[1.25, -0.19, -2.79]} />
              <mesh name="Palm_41_3" geometry={nodes.Palm_41_3.geometry} material={materials['World ap']} position={[-3.62, 91.38, -16.9]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_42_3" geometry={nodes.Palm_42_3.geometry} material={materials['World ap']} position={[3.51, 89.14, -18.62]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_43_3" geometry={nodes.Palm_43_3.geometry} material={materials['World ap']} position={[4.95, 77.69, -25.82]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_45_3" geometry={nodes.Palm_45_3.geometry} material={materials['World ap']} position={[2.08, 94.42, -14.92]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_46_3" geometry={nodes.Palm_46_3.geometry} material={materials['World ap']} position={[-8.11, 96.53, -11.75]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_47_3" geometry={nodes.Palm_47_3.geometry} material={materials['World ap']} position={[-0.42, 101.36, -9.39]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_48_3" geometry={nodes.Palm_48_3.geometry} material={materials['World ap']} position={[-8.56, 62.86, -29.52]} rotation={[0.3, 0.37, 0.09]} />
              <mesh name="Palm_49_3" geometry={nodes.Palm_49_3.geometry} material={materials['World ap']} position={[-13.49, 88.25, -16.26]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_4_4" geometry={nodes.Palm_4_4.geometry} material={materials['World ap']} position={[-6.96, 47.91, -31]} />
              <mesh name="Palm_4_5" geometry={nodes.Palm_4_5.geometry} material={materials['World ap']} position={[4.96, 18.2, -38.01]} rotation={[-0.41, 0.36, -0.29]} />
              <mesh name="Palm_50_3" geometry={nodes.Palm_50_3.geometry} material={materials['World ap']} position={[-2.95, 86.58, -24.93]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_51_3" geometry={nodes.Palm_51_3.geometry} material={materials['World ap']} position={[-11.17, 82.09, -28.5]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_52_3" geometry={nodes.Palm_52_3.geometry} material={materials['World ap']} position={[-7.6, -32.18, -9.91]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_53_3" geometry={nodes.Palm_53_3.geometry} material={materials['World ap']} position={[-17.81, -27.9, -10.09]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_54_3" geometry={nodes.Palm_54_3.geometry} material={materials['World ap']} position={[-11.72, -38.75, -0.59]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_55_3" geometry={nodes.Palm_55_3.geometry} material={materials['World ap']} position={[-13.49, -59.24, 40.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_59_2" geometry={nodes.Palm_59_2.geometry} material={materials['World ap']} position={[-11.76, -63.36, 43.64]} rotation={[-1.69, 0.26, 0.81]} />
              <mesh name="Palm_5_4" geometry={nodes.Palm_5_4.geometry} material={materials['World ap']} position={[-10.37, 29.78, -35.92]} rotation={[-0.36, 0.51, -0.32]} />
              <mesh name="Palm_62_2" geometry={nodes.Palm_62_2.geometry} material={materials['World ap']} position={[-7.15, -58.58, 30.92]} rotation={[-1.42, -0.09, 0.42]} />
              <mesh name="Palm_63_2" geometry={nodes.Palm_63_2.geometry} material={materials['World ap']} position={[-8.88, -58.84, 35.78]} rotation={[-1.61, 0.26, 0.45]} />
              <mesh name="Palm_65_2" geometry={nodes.Palm_65_2.geometry} material={materials['World ap']} position={[3.65, -57.14, 17.16]} rotation={[-1.53, -0.03, 0.46]} />
              <mesh name="Palm_66_2" geometry={nodes.Palm_66_2.geometry} material={materials['World ap']} position={[5.36, -51.73, 6.74]} rotation={[-1.06, -0.28, 0.34]} />
              <mesh name="Palm_67_2" geometry={nodes.Palm_67_2.geometry} material={materials['World ap']} position={[3.72, -44.84, -0.92]} rotation={[-1.06, -0.28, 0.34]} />
              <mesh name="Palm_68_2" geometry={nodes.Palm_68_2.geometry} material={materials['World ap']} position={[14.46, -13.68, -30.21]} rotation={[-0.85, 0.4, 0.31]} />
              <mesh name="Palm_69_2" geometry={nodes.Palm_69_2.geometry} material={materials['World ap']} position={[13.29, -28.14, -21.49]} rotation={[-0.62, 0.13, 0.27]} />
              <mesh name="Palm_6_4" geometry={nodes.Palm_6_4.geometry} material={materials['World ap']} position={[16.58, 2.77, -37.18]} rotation={[-0.63, -0.07, 0.02]} />
              <mesh name="Palm_78_2" geometry={nodes.Palm_78_2.geometry} material={materials['World ap']} position={[22.4, -68.19, 38.59]} rotation={[-1.48, 0.13, 0.3]} />
              <mesh name="Palm_79_2" geometry={nodes.Palm_79_2.geometry} material={materials['World ap']} position={[26.24, -67.24, 34.23]} rotation={[-1.35, -0.28, 0.31]} />
              <mesh name="Palm_7_4" geometry={nodes.Palm_7_4.geometry} material={materials['World ap']} position={[-0.29, 2.32, -29.92]} rotation={[-0.26, 0.49, 0.05]} />
              <mesh name="Palm_82_4" geometry={nodes.Palm_82_4.geometry} material={materials['World ap']} position={[-13.35, -49.14, 15.75]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_83_3" geometry={nodes.Palm_83_3.geometry} material={materials['World ap']} position={[-16.47, -39.92, 7.12]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_84_2" geometry={nodes.Palm_84_2.geometry} material={materials['World ap']} position={[-6.14, -49.28, 7.92]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_85_3" geometry={nodes.Palm_85_3.geometry} material={materials['World ap']} position={[-16.18, -57.1, 34.7]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_89_4" geometry={nodes.Palm_89_4.geometry} material={materials['World ap']} position={[26.2, -62.36, 27]} rotation={[-1.14, 0.3, 0.15]} />
              <mesh name="Palm_8_4" geometry={nodes.Palm_8_4.geometry} material={materials['World ap']} position={[7.44, -8.64, -32.8]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_90_4" geometry={nodes.Palm_90_4.geometry} material={materials['World ap']} position={[23.02, -62.09, 28.57]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_91_4" geometry={nodes.Palm_91_4.geometry} material={materials['World ap']} position={[41.93, -64.12, 39.28]} rotation={[-1.48, 0.13, 0.3]} />
              <mesh name="Palm_92_2" geometry={nodes.Palm_92_2.geometry} material={materials['World ap']} position={[46.45, -65.7, 43.01]} rotation={[-1.53, -0.41, 0.53]} />
              <mesh name="Palm_93_2" geometry={nodes.Palm_93_2.geometry} material={materials['World ap']} position={[42.95, -66.69, 42.42]} rotation={[-1.99, -0.07, 0.3]} />
              <mesh name="Palm_94_2" geometry={nodes.Palm_94_2.geometry} material={materials['World ap']} position={[-14.09, 115.96, 25.68]} rotation={[0.98, 0.09, -0.14]} />
              <mesh name="Palm_95_2" geometry={nodes.Palm_95_2.geometry} material={materials['World ap']} position={[-5.65, 123.65, 31.65]} rotation={[0.38, 0.15, -0.06]} />
              <mesh name="Palm_96_2" geometry={nodes.Palm_96_2.geometry} material={materials['World ap']} position={[-9.15, 121.5, 42.91]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_97_2" geometry={nodes.Palm_97_2.geometry} material={materials['World ap']} position={[-13.76, 119.68, 28.38]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_98_2" geometry={nodes.Palm_98_2.geometry} material={materials['World ap']} position={[-1.95, 127.94, 53.49]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_99_2" geometry={nodes.Palm_99_2.geometry} material={materials['World ap']} position={[2.88, 131.09, 57.25]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_9_4" geometry={nodes.Palm_9_4.geometry} material={materials['World ap']} position={[-0.01, -3.81, -27.17]} rotation={[-0.7, 0.44, 0.25]} />
            </group>
            <group name="Australia" position={[72.22, -105.13, 60.74]} rotation={[-2.39, 0, -0.13]}>
              <mesh name="Palm" geometry={nodes.Palm.geometry} material={materials['World ap']} position={[4.06, -4.7, -8.2]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_1" geometry={nodes.Palm_1.geometry} material={materials['World ap']} position={[35.19, -8.62, 19.61]} rotation={[1.52, -0.91, -3.09]} />
              <mesh name="Palm_10" geometry={nodes.Palm_10.geometry} material={materials['World ap']} position={[34.25, -8.73, 31.27]} rotation={[1.88, -0.79, -2.79]} />
              <mesh name="Palm_11" geometry={nodes.Palm_11.geometry} material={materials['World ap']} position={[11.38, 4.91, 34.49]} rotation={[2.04, -0.19, -2.25]} />
              <mesh name="Palm_12" geometry={nodes.Palm_12.geometry} material={materials['World ap']} position={[8.79, 4, 37.35]} rotation={[2.4, -0.27, -2.19]} />
              <mesh name="Palm_13" geometry={nodes.Palm_13.geometry} material={materials['World ap']} position={[20.71, -1.13, 36.98]} rotation={[1.66, -0.55, -2.4]} />
              <mesh name="Palm_14" geometry={nodes.Palm_14.geometry} material={materials['World ap']} position={[16.71, 2.07, 37.35]} rotation={[1.9, -0.21, -2.62]} />
              <mesh name="Palm_15" geometry={nodes.Palm_15.geometry} material={materials['World ap']} position={[15.22, 3.64, 32.1]} rotation={[1.64, -0.38, -1.9]} />
              <mesh name="Palm_16" geometry={nodes.Palm_16.geometry} material={materials['World ap']} position={[20.26, 1.91, 31.57]} rotation={[2.04, -0.53, -2.14]} />
              <mesh name="Palm_17" geometry={nodes.Palm_17.geometry} material={materials['World ap']} position={[27.49, -12.77, -4.41]} rotation={[0.69, -0.72, 2.56]} />
              <mesh name="Palm_18" geometry={nodes.Palm_18.geometry} material={materials['World ap']} position={[21.85, -10.79, -7.21]} rotation={[0.9, -0.58, 2.43]} />
              <mesh name="Palm_19" geometry={nodes.Palm_19.geometry} material={materials['World ap']} position={[18.87, -11.37, -8.59]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_2" geometry={nodes.Palm_2.geometry} material={materials['World ap']} position={[35.81, -10.87, 23.71]} rotation={[1.98, -1.2, -2.72]} />
              <mesh name="Palm_20" geometry={nodes.Palm_20.geometry} material={materials['World ap']} position={[4.18, -7.13, -13.04]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_21" geometry={nodes.Palm_21.geometry} material={materials['World ap']} position={[6.29, -9.68, -11.9]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_22" geometry={nodes.Palm_22.geometry} material={materials['World ap']} position={[-6.87, 7.54, 11.55]} rotation={[0.97, -0.36, -0.02]} />
              <mesh name="Palm_23" geometry={nodes.Palm_23.geometry} material={materials['World ap']} position={[-7.19, 6.73, 15.18]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_24" geometry={nodes.Palm_24.geometry} material={materials['World ap']} position={[-4.24, 7.45, 19.8]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_25" geometry={nodes.Palm_25.geometry} material={materials['World ap']} position={[-7.28, 7.97, 25.44]} rotation={[1.57, 0.26, -0.01]} />
              <mesh name="Palm_26" geometry={nodes.Palm_26.geometry} material={materials['World ap']} position={[-5.35, 7.76, 30.4]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_27" geometry={nodes.Palm_27.geometry} material={materials['World ap']} position={[-6.1, 8.93, 24]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_28" geometry={nodes.Palm_28.geometry} material={materials['World ap']} position={[-1.62, 2.81, 5.98]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_29" geometry={nodes.Palm_29.geometry} material={materials['World ap']} position={[22.1, -7.33, -1.23]} rotation={[1.19, -0.22, 2.55]} />
              <mesh name="Palm_3" geometry={nodes.Palm_3.geometry} material={materials['World ap']} position={[-8.74, 0.74, -5.33]} rotation={[0.46, 0.13, 0.26]} />
              <mesh name="Palm_30" geometry={nodes.Palm_30.geometry} material={materials['World ap']} position={[26.34, -8.23, 0.57]} rotation={[1.36, -0.33, 2.59]} />
              <mesh name="Palm_4" geometry={nodes.Palm_4.geometry} material={materials['World ap']} position={[35.62, -13.87, 8.67]} rotation={[1.5, -0.89, -3.12]} />
              <mesh name="Palm_5" geometry={nodes.Palm_5.geometry} material={materials['World ap']} position={[23.69, -11.11, -1.41]} rotation={[0.9, -0.58, 2.43]} />
              <mesh name="Palm_6" geometry={nodes.Palm_6.geometry} material={materials['World ap']} position={[36.18, -12.8, 15.81]} rotation={[0.99, -0.69, -3.02]} />
              <mesh name="Palm_7" geometry={nodes.Palm_7.geometry} material={materials['World ap']} position={[37.86, -16.43, 12.26]} rotation={[0.97, -1.08, 2.84]} />
              <mesh name="Palm_8" geometry={nodes.Palm_8.geometry} material={materials['World ap']} position={[36.21, -8.83, 27.71]} rotation={[1.53, -0.69, -2.62]} />
              <mesh name="Palm_81" geometry={nodes.Palm_81.geometry} material={materials['World ap']} position={[-1.87, 0, -4.94]} rotation={[0.67, -0.03, 0.29]} />
              <mesh name="Palm_82" geometry={nodes.Palm_82.geometry} material={materials['World ap']} position={[-3.2, -4.07, -6.92]} rotation={[0.43, 0.24, 0.29]} />
              <mesh name="Palm_86" geometry={nodes.Palm_86.geometry} material={materials['World ap']} position={[-8.89, 4.01, 4.87]} rotation={[1.16, 0.09, 0.28]} />
              <mesh name="Palm_87" geometry={nodes.Palm_87.geometry} material={materials['World ap']} position={[-11.1, 5.15, 10.18]} rotation={[1.22, -0.11, 0.01]} />
              <mesh name="Palm_89" geometry={nodes.Palm_89.geometry} material={materials['World ap']} position={[-6.53, 1.42, -1.91]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_9" geometry={nodes.Palm_9.geometry} material={materials['World ap']} position={[39.65, -13.61, 17.87]} rotation={[1.87, -1.1, -2.84]} />
              <mesh name="Palm_90" geometry={nodes.Palm_90.geometry} material={materials['World ap']} position={[-11.1, 3.17, 0.26]} rotation={[0.86, 0.24, 0.38]} />
              <mesh name="Palm_91" geometry={nodes.Palm_91.geometry} material={materials['World ap']} position={[-0.99, -6.13, -10.27]} rotation={[0.71, -0.25, 0.76]} />
            </group>
          </group>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['World ap']} position={[-0.96, 0.57, -9.25]} rotation={[0.06, 0.1, -0.01]}>
              <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap']} />
              <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <group name="water" position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]}>
                <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials.Water} />
              </group>
            </mesh>
          </group>
          <group name="Ships" position={[-9.84, -1.38, 9.08]} />
        </group>
        <group name="Rig002" position={[-0.09, 0.16, 1.03]} rotation={[-0.45, 1.22, 2.2]} scale={0.05}>
          <primitive object={nodes.root_18} />
          <skinnedMesh name="Hare_LOD0002" geometry={nodes.Hare_LOD0002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD0002.skeleton} morphTargetDictionary={nodes.Hare_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1002" geometry={nodes.Hare_LOD1002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD1002.skeleton} morphTargetDictionary={nodes.Hare_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2002" geometry={nodes.Hare_LOD2002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD2002.skeleton} morphTargetDictionary={nodes.Hare_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3002" geometry={nodes.Hare_LOD3002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD3002.skeleton} morphTargetDictionary={nodes.Hare_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig004" position={[-1.06, 0.02, -0.26]} rotation={[-0.22, -0.47, 0.71]} scale={0.05}>
          <primitive object={nodes.root} />
          <skinnedMesh name="Hare" geometry={nodes.Hare.geometry} material={materials['M_Hare.003']} skeleton={nodes.Hare.skeleton} morphTargetDictionary={nodes.Hare.morphTargetDictionary} morphTargetInfluences={nodes.Hare.morphTargetInfluences} />
        </group>
        <group name="Rig001" position={[-1.09, -0.01, -0.26]} rotation={[-0.17, -0.47, 0.89]} scale={0.03}>
          <primitive object={nodes.root_1} />
          <skinnedMesh name="Hare001" geometry={nodes.Hare001.geometry} material={materials['M_Hare.001']} skeleton={nodes.Hare001.skeleton} morphTargetDictionary={nodes.Hare001.morphTargetDictionary} morphTargetInfluences={nodes.Hare001.morphTargetInfluences} />
        </group>
        <group name="Rig003" position={[-0.56, 0.12, -0.9]} rotation={[-0.86, -0.58, 0.22]} scale={0.05}>
          <primitive object={nodes.root_19} />
          <skinnedMesh name="Hare_LOD0001" geometry={nodes.Hare_LOD0001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD0001.skeleton} morphTargetDictionary={nodes.Hare_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1001" geometry={nodes.Hare_LOD1001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD1001.skeleton} morphTargetDictionary={nodes.Hare_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2001" geometry={nodes.Hare_LOD2001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD2001.skeleton} morphTargetDictionary={nodes.Hare_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3001" geometry={nodes.Hare_LOD3001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD3001.skeleton} morphTargetDictionary={nodes.Hare_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig007" position={[-1.09, -0.23, 0.12]} rotation={[0.37, 0.28, 1.3]} scale={0.03}>
          <primitive object={nodes.root_2} />
          <skinnedMesh name="Puffin" geometry={nodes.Puffin.geometry} material={materials.M_Puffin} skeleton={nodes.Puffin.skeleton} morphTargetDictionary={nodes.Puffin.morphTargetDictionary} morphTargetInfluences={nodes.Puffin.morphTargetInfluences} />
        </group>
        <group name="Rig008" position={[-1.11, -0.25, 0.09]} rotation={[-2.84, 0.02, 1.7]} scale={0.03}>
          <primitive object={nodes.root_3} />
          <skinnedMesh name="Puffin001" geometry={nodes.Puffin001.geometry} material={materials['M_Puffin.001']} skeleton={nodes.Puffin001.skeleton} morphTargetDictionary={nodes.Puffin001.morphTargetDictionary} morphTargetInfluences={nodes.Puffin001.morphTargetInfluences} />
        </group>
        <group name="Rig009" position={[-1.11, -0.23, 0.05]} rotation={[-0.77, 0.1, 1.81]} scale={0.03}>
          <primitive object={nodes.root_4} />
          <skinnedMesh name="Puffin002" geometry={nodes.Puffin002.geometry} material={materials['M_Puffin.002']} skeleton={nodes.Puffin002.skeleton} morphTargetDictionary={nodes.Puffin002.morphTargetDictionary} morphTargetInfluences={nodes.Puffin002.morphTargetInfluences} />
        </group>
        <group name="Rig010" position={[-1.07, -0.18, 0.15]} rotation={[2.71, 0.25, 1.71]} scale={0.04}>
          <primitive object={nodes.root_20} />
          <skinnedMesh name="Puffin_LOD0" geometry={nodes.Puffin_LOD0.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD0.skeleton} morphTargetDictionary={nodes.Puffin_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD1" geometry={nodes.Puffin_LOD1.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD1.skeleton} morphTargetDictionary={nodes.Puffin_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD2" geometry={nodes.Puffin_LOD2.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD2.skeleton} morphTargetDictionary={nodes.Puffin_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD3" geometry={nodes.Puffin_LOD3.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD3.skeleton} morphTargetDictionary={nodes.Puffin_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig" position={[-0.9, 0.29, 0.43]} rotation={[0, 0, 0.93]} scale={0.05}>
          <primitive object={nodes.root_21} />
          <skinnedMesh name="Hare_LOD0" geometry={nodes.Hare_LOD0.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD0.skeleton} morphTargetDictionary={nodes.Hare_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1" geometry={nodes.Hare_LOD1.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD1.skeleton} morphTargetDictionary={nodes.Hare_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2" geometry={nodes.Hare_LOD2.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD2.skeleton} morphTargetDictionary={nodes.Hare_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3" geometry={nodes.Hare_LOD3.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD3.skeleton} morphTargetDictionary={nodes.Hare_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig013" position={[0.11, 0.3, 1.1]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_22} />
          <skinnedMesh name="Goat_LOD0" geometry={nodes.Goat_LOD0.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD0.skeleton} morphTargetDictionary={nodes.Goat_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1" geometry={nodes.Goat_LOD1.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD1.skeleton} morphTargetDictionary={nodes.Goat_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2" geometry={nodes.Goat_LOD2.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD2.skeleton} morphTargetDictionary={nodes.Goat_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3" geometry={nodes.Goat_LOD3.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD3.skeleton} morphTargetDictionary={nodes.Goat_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig020" position={[-0.55, -0.45, -0.73]} rotation={[-2.71, 0.52, 0.85]} scale={0.1}>
          <primitive object={nodes.root_23} />
          <skinnedMesh name="Marten_LOD0" geometry={nodes.Marten_LOD0.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD0.skeleton} morphTargetDictionary={nodes.Marten_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD1" geometry={nodes.Marten_LOD1.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD1.skeleton} morphTargetDictionary={nodes.Marten_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD2" geometry={nodes.Marten_LOD2.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD2.skeleton} morphTargetDictionary={nodes.Marten_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD3" geometry={nodes.Marten_LOD3.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD3.skeleton} morphTargetDictionary={nodes.Marten_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig012" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_5} />
          <skinnedMesh name="Bull" geometry={nodes.Bull.geometry} material={materials.M_Bull} skeleton={nodes.Bull.skeleton} morphTargetDictionary={nodes.Bull.morphTargetDictionary} morphTargetInfluences={nodes.Bull.morphTargetInfluences} />
        </group>
        <group name="Rig005" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_6} />
          <skinnedMesh name="Bull001" geometry={nodes.Bull001.geometry} material={materials['M_Bull.001']} skeleton={nodes.Bull001.skeleton} morphTargetDictionary={nodes.Bull001.morphTargetDictionary} morphTargetInfluences={nodes.Bull001.morphTargetInfluences} />
        </group>
        <group name="Rig006" position={[-1.06, -0.02, 0.15]} rotation={[2.8, -0.51, 1.88]} scale={0.07}>
          <primitive object={nodes.root_24} />
          <skinnedMesh name="Cougar_LOD0" geometry={nodes.Cougar_LOD0.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD0.skeleton} morphTargetDictionary={nodes.Cougar_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD1" geometry={nodes.Cougar_LOD1.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD1.skeleton} morphTargetDictionary={nodes.Cougar_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD2" geometry={nodes.Cougar_LOD2.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD2.skeleton} morphTargetDictionary={nodes.Cougar_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD3" geometry={nodes.Cougar_LOD3.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD3.skeleton} morphTargetDictionary={nodes.Cougar_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig011" position={[-0.75, 0.57, -0.05]} rotation={[-0.51, -0.19, 0.71]} scale={0.1}>
          <primitive object={nodes.root_7} />
          <skinnedMesh name="Beluga" geometry={nodes.Beluga.geometry} material={materials['M_Beluga.001']} skeleton={nodes.Beluga.skeleton} morphTargetDictionary={nodes.Beluga.morphTargetDictionary} morphTargetInfluences={nodes.Beluga.morphTargetInfluences} />
        </group>
        <group name="Rig014" position={[-0.83, 0.05, 0.59]} rotation={[-2.32, -0.35, 1.88]} scale={0.1}>
          <primitive object={nodes.root_8} />
          <skinnedMesh name="Llama" geometry={nodes.Llama.geometry} material={materials.M_Llama} skeleton={nodes.Llama.skeleton} morphTargetDictionary={nodes.Llama.morphTargetDictionary} morphTargetInfluences={nodes.Llama.morphTargetInfluences} />
        </group>
        <group name="Rig038" position={[-0.31, 0.19, 1]} rotation={[1.39, 0.15, 0.18]} scale={0.05}>
          <primitive object={nodes.root_25} />
          <skinnedMesh name="Jackal_LOD0" geometry={nodes.Jackal_LOD0.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD0.skeleton} morphTargetDictionary={nodes.Jackal_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1" geometry={nodes.Jackal_LOD1.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD1.skeleton} morphTargetDictionary={nodes.Jackal_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2" geometry={nodes.Jackal_LOD2.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD2.skeleton} morphTargetDictionary={nodes.Jackal_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3" geometry={nodes.Jackal_LOD3.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD3.skeleton} morphTargetDictionary={nodes.Jackal_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig015" position={[-0.4, 0.2, 0.95]} rotation={[1.3, 0.93, 0.37]} scale={0.05}>
          <primitive object={nodes.root_26} />
          <skinnedMesh name="Jackal_LOD0001" geometry={nodes.Jackal_LOD0001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD0001.skeleton} morphTargetDictionary={nodes.Jackal_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1001" geometry={nodes.Jackal_LOD1001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD1001.skeleton} morphTargetDictionary={nodes.Jackal_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2001" geometry={nodes.Jackal_LOD2001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD2001.skeleton} morphTargetDictionary={nodes.Jackal_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3001" geometry={nodes.Jackal_LOD3001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD3001.skeleton} morphTargetDictionary={nodes.Jackal_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig018" position={[0.75, 0.37, 0.66]} rotation={[1.68, 0.62, -1.26]} scale={0.1}>
          <primitive object={nodes.root_9} />
          <skinnedMesh name="Badger001" geometry={nodes.Badger001.geometry} material={materials['M_Badger.001']} skeleton={nodes.Badger001.skeleton} morphTargetDictionary={nodes.Badger001.morphTargetDictionary} morphTargetInfluences={nodes.Badger001.morphTargetInfluences} />
        </group>
        <group name="Rig021" position={[-1.04, -0.44, 0.04]} rotation={[1.66, 0.38, 1.33]} scale={0.05}>
          <primitive object={nodes.root_27} />
          <skinnedMesh name="Hedgehog_LOD0" geometry={nodes.Hedgehog_LOD0.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD0.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD1" geometry={nodes.Hedgehog_LOD1.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD1.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD2" geometry={nodes.Hedgehog_LOD2.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD2.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD3" geometry={nodes.Hedgehog_LOD3.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD3.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig022" position={[-0.97, -0.5, 0.01]} rotation={[-0.22, -0.74, 2.43]} scale={0.05}>
          <primitive object={nodes.root_10} />
          <skinnedMesh name="Hedgehog" geometry={nodes.Hedgehog.geometry} material={materials['M_Hedgehog.001']} skeleton={nodes.Hedgehog.skeleton} morphTargetDictionary={nodes.Hedgehog.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog.morphTargetInfluences} />
        </group>
        <group name="Rig028" position={[-0.71, -0.43, 0.54]} rotation={[0.2, 0.2, 1.55]} scale={0.03}>
          <primitive object={nodes.root_11} />
          <skinnedMesh name="Beluga002" geometry={nodes.Beluga002.geometry} material={materials['M_Beluga.006']} skeleton={nodes.Beluga002.skeleton} morphTargetDictionary={nodes.Beluga002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga002.morphTargetInfluences} />
        </group>
        <group name="Rig029" position={[-0.76, -0.39, 0.48]} rotation={[-0.24, 0.08, 1.55]} scale={0.03}>
          <primitive object={nodes.root_12} />
          <skinnedMesh name="Beluga003" geometry={nodes.Beluga003.geometry} material={materials['M_Beluga.007']} skeleton={nodes.Beluga003.skeleton} morphTargetDictionary={nodes.Beluga003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga003.morphTargetInfluences} />
        </group>
        <group name="Rig030" position={[-0.65, -0.39, 0.62]} rotation={[0.4, 0.66, 1.45]} scale={0.04}>
          <primitive object={nodes.root_28} />
          <skinnedMesh name="Beluga_LOD0003" geometry={nodes.Beluga_LOD0003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD0003.skeleton} morphTargetDictionary={nodes.Beluga_LOD0003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1003" geometry={nodes.Beluga_LOD1003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD1003.skeleton} morphTargetDictionary={nodes.Beluga_LOD1003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2003" geometry={nodes.Beluga_LOD2003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD2003.skeleton} morphTargetDictionary={nodes.Beluga_LOD2003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3003" geometry={nodes.Beluga_LOD3003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD3003.skeleton} morphTargetDictionary={nodes.Beluga_LOD3003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3003.morphTargetInfluences} />
        </group>
        <group name="Rig033" position={[-1.16, -0.06, -0.03]} rotation={[0.97, -0.05, 1.25]} scale={0.08}>
          <primitive object={nodes.root_29} />
          <skinnedMesh name="Antelope_LOD0" geometry={nodes.Antelope_LOD0.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD0.skeleton} morphTargetDictionary={nodes.Antelope_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD1" geometry={nodes.Antelope_LOD1.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD1.skeleton} morphTargetDictionary={nodes.Antelope_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD2" geometry={nodes.Antelope_LOD2.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD2.skeleton} morphTargetDictionary={nodes.Antelope_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD3" geometry={nodes.Antelope_LOD3.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD3.skeleton} morphTargetDictionary={nodes.Antelope_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig043" position={[-0.61, 0.29, -0.79]} rotation={[-1.59, 0.46, 0.47]} scale={0.07}>
          <primitive object={nodes.root_30} />
          <skinnedMesh name="Bison_LOD0" geometry={nodes.Bison_LOD0.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD0.skeleton} morphTargetDictionary={nodes.Bison_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD1" geometry={nodes.Bison_LOD1.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD1.skeleton} morphTargetDictionary={nodes.Bison_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD2" geometry={nodes.Bison_LOD2.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD2.skeleton} morphTargetDictionary={nodes.Bison_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD3" geometry={nodes.Bison_LOD3.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD3.skeleton} morphTargetDictionary={nodes.Bison_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig025" position={[1.01, 0.04, -0.16]} rotation={[0, 0, -0.93]} scale={0.03}>
          <primitive object={nodes.root_31} />
          <skinnedMesh name="Beluga_LOD0001" geometry={nodes.Beluga_LOD0001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD0001.skeleton} morphTargetDictionary={nodes.Beluga_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1001" geometry={nodes.Beluga_LOD1001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD1001.skeleton} morphTargetDictionary={nodes.Beluga_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2001" geometry={nodes.Beluga_LOD2001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD2001.skeleton} morphTargetDictionary={nodes.Beluga_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3001" geometry={nodes.Beluga_LOD3001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD3001.skeleton} morphTargetDictionary={nodes.Beluga_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig024" position={[0.98, 0, 0]} rotation={[0, 0, -1.08]} scale={0.05}>
          <primitive object={nodes.root_32} />
          <skinnedMesh name="Beluga_LOD0" geometry={nodes.Beluga_LOD0.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD0.skeleton} morphTargetDictionary={nodes.Beluga_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1" geometry={nodes.Beluga_LOD1.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD1.skeleton} morphTargetDictionary={nodes.Beluga_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2" geometry={nodes.Beluga_LOD2.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD2.skeleton} morphTargetDictionary={nodes.Beluga_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3" geometry={nodes.Beluga_LOD3.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD3.skeleton} morphTargetDictionary={nodes.Beluga_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig026" position={[0.98, 0.08, -0.08]} rotation={[0, 0, -1.22]} scale={0.04}>
          <primitive object={nodes.root_33} />
          <skinnedMesh name="Beluga_LOD0002" geometry={nodes.Beluga_LOD0002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD0002.skeleton} morphTargetDictionary={nodes.Beluga_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1002" geometry={nodes.Beluga_LOD1002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD1002.skeleton} morphTargetDictionary={nodes.Beluga_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2002" geometry={nodes.Beluga_LOD2002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD2002.skeleton} morphTargetDictionary={nodes.Beluga_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3002" geometry={nodes.Beluga_LOD3002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD3002.skeleton} morphTargetDictionary={nodes.Beluga_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig027" position={[0.98, -0.01, -0.17]} rotation={[0, 0, -0.93]} scale={0.03}>
          <primitive object={nodes.root_13} />
          <skinnedMesh name="Beluga001" geometry={nodes.Beluga001.geometry} material={materials['M_Beluga.005']} skeleton={nodes.Beluga001.skeleton} morphTargetDictionary={nodes.Beluga001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga001.morphTargetInfluences} />
        </group>
        <group name="Rig016" position={[0.38, 0.18, 1.01]} rotation={[-0.22, -0.58, -1.56]} scale={0.07}>
          <primitive object={nodes.root_14} />
          <skinnedMesh name="Cougar" geometry={nodes.Cougar.geometry} material={materials['M_Cougar.001']} skeleton={nodes.Cougar.skeleton} morphTargetDictionary={nodes.Cougar.morphTargetDictionary} morphTargetInfluences={nodes.Cougar.morphTargetInfluences} />
        </group>
        <group name="Rig017" position={[-0.05, -0.07, 1.1]} rotation={[-0.29, -1.39, -1.92]} scale={0.1}>
          <primitive object={nodes.root_15} />
          <skinnedMesh name="Badger" geometry={nodes.Badger.geometry} material={materials.M_Badger} skeleton={nodes.Badger.skeleton} morphTargetDictionary={nodes.Badger.morphTargetDictionary} morphTargetInfluences={nodes.Badger.morphTargetInfluences} />
        </group>
        <group name="Rig034" position={[-0.84, 0.4, 0.47]} rotation={[-2.43, -0.08, 2.16]} scale={0.07}>
          <primitive object={nodes.root_34} />
          <skinnedMesh name="Baboon_LOD0" geometry={nodes.Baboon_LOD0.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD0.skeleton} morphTargetDictionary={nodes.Baboon_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD1" geometry={nodes.Baboon_LOD1.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD1.skeleton} morphTargetDictionary={nodes.Baboon_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD2" geometry={nodes.Baboon_LOD2.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD2.skeleton} morphTargetDictionary={nodes.Baboon_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD3" geometry={nodes.Baboon_LOD3.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD3.skeleton} morphTargetDictionary={nodes.Baboon_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig037" position={[-0.33, -0.63, -0.75]} rotation={[-1.95, 0.06, 0.11]} scale={0.08}>
          <primitive object={nodes.root_35} />
          <skinnedMesh name="Baboon_LOD0001" geometry={nodes.Baboon_LOD0001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD0001.skeleton} morphTargetDictionary={nodes.Baboon_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD1001" geometry={nodes.Baboon_LOD1001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD1001.skeleton} morphTargetDictionary={nodes.Baboon_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD2001" geometry={nodes.Baboon_LOD2001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD2001.skeleton} morphTargetDictionary={nodes.Baboon_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD3001" geometry={nodes.Baboon_LOD3001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD3001.skeleton} morphTargetDictionary={nodes.Baboon_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig046" position={[-0.69, -0.42, -0.52]} rotation={[-2.38, -0.01, 0.68]} scale={0.06}>
          <primitive object={nodes.root_36} />
          <skinnedMesh name="Narwhal_LOD0002" geometry={nodes.Narwhal_LOD0002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD0002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD1002" geometry={nodes.Narwhal_LOD1002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD1002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD2002" geometry={nodes.Narwhal_LOD2002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD2002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD3002" geometry={nodes.Narwhal_LOD3002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD3002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig045" position={[-0.67, -0.53, -0.41]} rotation={[-2, -0.43, 0.92]} scale={0.05}>
          <primitive object={nodes.root_37} />
          <skinnedMesh name="Narwhal_LOD0001" geometry={nodes.Narwhal_LOD0001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD0001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD1001" geometry={nodes.Narwhal_LOD1001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD1001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD2001" geometry={nodes.Narwhal_LOD2001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD2001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD3001" geometry={nodes.Narwhal_LOD3001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD3001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig044" position={[-0.78, -0.36, -0.47]} rotation={[-2.09, -0.18, 1.29]} scale={0.05}>
          <primitive object={nodes.root_38} />
          <skinnedMesh name="Narwhal_LOD0" geometry={nodes.Narwhal_LOD0.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD0.skeleton} morphTargetDictionary={nodes.Narwhal_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD1" geometry={nodes.Narwhal_LOD1.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD1.skeleton} morphTargetDictionary={nodes.Narwhal_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD2" geometry={nodes.Narwhal_LOD2.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD2.skeleton} morphTargetDictionary={nodes.Narwhal_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD3" geometry={nodes.Narwhal_LOD3.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD3.skeleton} morphTargetDictionary={nodes.Narwhal_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig040" position={[-0.94, 0.38, -0.07]} rotation={[-0.24, 0, 0.91]} scale={0.1}>
          <primitive object={nodes.root_39} />
          <skinnedMesh name="Lion_LOD0" geometry={nodes.Lion_LOD0.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD0.skeleton} morphTargetDictionary={nodes.Lion_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Lion_LOD1" geometry={nodes.Lion_LOD1.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD1.skeleton} morphTargetDictionary={nodes.Lion_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Lion_LOD2" geometry={nodes.Lion_LOD2.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD2.skeleton} morphTargetDictionary={nodes.Lion_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Lion_LOD3" geometry={nodes.Lion_LOD3.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD3.skeleton} morphTargetDictionary={nodes.Lion_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig041" position={[-1, -0.12, -0.38]} rotation={[0, 0, 1.35]} scale={0.05}>
          <primitive object={nodes.root_40} />
          <skinnedMesh name="Serval_LOD0" geometry={nodes.Serval_LOD0.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD0.skeleton} morphTargetDictionary={nodes.Serval_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD1" geometry={nodes.Serval_LOD1.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD1.skeleton} morphTargetDictionary={nodes.Serval_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD2" geometry={nodes.Serval_LOD2.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD2.skeleton} morphTargetDictionary={nodes.Serval_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD3" geometry={nodes.Serval_LOD3.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD3.skeleton} morphTargetDictionary={nodes.Serval_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig042" position={[-1, -0.03, -0.41]} rotation={[0.29, -0.28, 1.61]} scale={0.05}>
          <primitive object={nodes.root_41} />
          <skinnedMesh name="Serval_LOD0001" geometry={nodes.Serval_LOD0001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD0001.skeleton} morphTargetDictionary={nodes.Serval_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD1001" geometry={nodes.Serval_LOD1001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD1001.skeleton} morphTargetDictionary={nodes.Serval_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD2001" geometry={nodes.Serval_LOD2001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD2001.skeleton} morphTargetDictionary={nodes.Serval_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD3001" geometry={nodes.Serval_LOD3001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD3001.skeleton} morphTargetDictionary={nodes.Serval_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig031" position={[-0.37, 0.29, -0.94]} rotation={[-1.88, 0.8, 0.57]} scale={0.1}>
          <primitive object={nodes.root_42} />
          <skinnedMesh name="Llama_LOD0" geometry={nodes.Llama_LOD0.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD0.skeleton} morphTargetDictionary={nodes.Llama_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Llama_LOD1" geometry={nodes.Llama_LOD1.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD1.skeleton} morphTargetDictionary={nodes.Llama_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Llama_LOD2" geometry={nodes.Llama_LOD2.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD2.skeleton} morphTargetDictionary={nodes.Llama_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Llama_LOD3" geometry={nodes.Llama_LOD3.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD3.skeleton} morphTargetDictionary={nodes.Llama_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig047" position={[0.19, -0.05, 1.08]} rotation={[0.57, -1.1, -1.37]} scale={0.04}>
          <primitive object={nodes.root_43} />
          <skinnedMesh name="Cougar_LOD0001" geometry={nodes.Cougar_LOD0001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD0001.skeleton} morphTargetDictionary={nodes.Cougar_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD1001" geometry={nodes.Cougar_LOD1001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD1001.skeleton} morphTargetDictionary={nodes.Cougar_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD2001" geometry={nodes.Cougar_LOD2001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD2001.skeleton} morphTargetDictionary={nodes.Cougar_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD3001" geometry={nodes.Cougar_LOD3001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD3001.skeleton} morphTargetDictionary={nodes.Cougar_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig035" position={[0.4, -0.04, -0.98]} rotation={[1.72, 0.92, -2.71]} scale={0.1}>
          <primitive object={nodes.root_44} />
          <skinnedMesh name="Giraffe_LOD0" geometry={nodes.Giraffe_LOD0.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD0.skeleton} morphTargetDictionary={nodes.Giraffe_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Giraffe_LOD1" geometry={nodes.Giraffe_LOD1.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD1.skeleton} morphTargetDictionary={nodes.Giraffe_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Giraffe_LOD2" geometry={nodes.Giraffe_LOD2.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD2.skeleton} morphTargetDictionary={nodes.Giraffe_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Giraffe_LOD3" geometry={nodes.Giraffe_LOD3.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD3.skeleton} morphTargetDictionary={nodes.Giraffe_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig036" position={[0.34, -0.18, -0.97]} rotation={[-0.07, 1.31, -1.25]} scale={0.07}>
          <primitive object={nodes.root_16} />
          <skinnedMesh name="Giraffe" geometry={nodes.Giraffe.geometry} material={materials['M_Giraffe.001']} skeleton={nodes.Giraffe.skeleton} morphTargetDictionary={nodes.Giraffe.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe.morphTargetInfluences} />
        </group>
        <group name="Rig023" position={[-0.32, 0.2, -0.99]} rotation={[-1.3, -0.72, 0.91]} scale={0.03}>
          <primitive object={nodes.root_17} />
          <skinnedMesh name="Iguana" geometry={nodes.Iguana.geometry} material={materials.M_Iguana} skeleton={nodes.Iguana.skeleton} morphTargetDictionary={nodes.Iguana.morphTargetDictionary} morphTargetInfluences={nodes.Iguana.morphTargetInfluences} />
        </group>
        <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.1']} position={[0.02, 0.17, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    </group>
  )
}


function EarthLv8(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/earth33/final6666.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Scene"position={[-0.1, -0.15, -0.5]} rotation={[Math.PI / 0.1, 1.7, -0.2]} scale={1.7}>
      <group name="Planet" position={[0.03, 0.07, -0.04]} rotation={[Math.PI / 2, 0, -0.27]} scale={0.01}>
      <group name="Bushes" position={[-59.56, 45.9, -11.47]}>
            <mesh name="Bushes_11" geometry={nodes.Bushes_11.geometry} material={materials['World ap.511']} position={[-6.6, 40.7, 13.02]} rotation={[-2.98, 0, 0]} />
            <mesh name="Bushes_13" geometry={nodes.Bushes_13.geometry} material={materials['World ap.509']} position={[4.31, 45.97, 9.97]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_15" geometry={nodes.Bushes_15.geometry} material={materials['World ap.507']} position={[57.87, 63.82, 16.27]} rotation={[3.13, 0, 0]} />
            <mesh name="Bushes_17" geometry={nodes.Bushes_17.geometry} material={materials['World ap.505']} position={[118.94, 37.3, -5.98]} rotation={[3.14, 0, 0]} />
            <mesh name="Bushes_18" geometry={nodes.Bushes_18.geometry} material={materials['World ap.504']} position={[24.98, 55.42, 51.04]} rotation={[3.07, 0, 0]} />
            <mesh name="Bushes_19" geometry={nodes.Bushes_19.geometry} material={materials['World ap.503']} position={[23.11, 36.4, 77.11]} rotation={[-2.75, 0, 0]} />
            <mesh name="Bushes_2" geometry={nodes.Bushes_2.geometry} material={materials['World ap.520']} position={[-41.31, -39.94, -18.51]} rotation={[-Math.PI, 0, 0]} />
            <mesh name="Bushes_21" geometry={nodes.Bushes_21.geometry} material={materials['World ap.523']} position={[-35.77, 1.94, -3.31]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_23" geometry={nodes.Bushes_23.geometry} material={materials['World ap.525']} position={[-13.92, 34.19, 25.78]} rotation={[-1.99, 0, 0]} />
            <mesh name="Bushes_3" geometry={nodes.Bushes_3.geometry} material={materials['World ap.519']} position={[-38.39, -31.39, -24.85]} rotation={[-2.19, 0, 0]} />
            <mesh name="Bushes_5" geometry={nodes.Bushes_5.geometry} material={materials['World ap.517']} position={[-37.28, -61.26, -19.51]} rotation={[-2.7, 0, 0]} />
            <mesh name="Bushes_7" geometry={nodes.Bushes_7.geometry} material={materials['World ap.515']} position={[-37.32, -73.79, -15.13]} rotation={[-2.87, 0, 0]} />
            <mesh name="Bushes_9" geometry={nodes.Bushes_9.geometry} material={materials['World ap.513']} position={[-33.69, -8.8, -26.31]} rotation={[-2.19, 0, 0]} />
          </group>
          <group name="Camping" position={[0.24, 13.39, -16.17]} />
          <group name="Firtrees" position={[-31.1, 65.19, -52.69]}>
            <mesh name="Firtree" geometry={nodes.Firtree.geometry} material={materials['World ap']} position={[81.77, -10.24, -12.72]} rotation={[0.58, -0.49, 0.64]} />
            <mesh name="Firtree_1" geometry={nodes.Firtree_1.geometry} material={materials['World ap']} position={[49.08, 17.34, 1.04]} rotation={[0.71, -0.16, 0.83]} />
            <mesh name="Firtree_10" geometry={nodes.Firtree_10.geometry} material={materials['World ap']} position={[55.57, 25.55, 11.04]} rotation={[1.01, -0.06, -1.63]} />
            <mesh name="Firtree_100" geometry={nodes.Firtree_100.geometry} material={materials['World ap']} position={[68.64, -147.79, 13.15]} rotation={[-0.62, -0.35, -0.05]} />
            <mesh name="Firtree_101" geometry={nodes.Firtree_101.geometry} material={materials['World ap']} position={[93.15, -137.77, 31.16]} rotation={[-1.27, -0.65, -1.2]} />
            <mesh name="Firtree_102" geometry={nodes.Firtree_102.geometry} material={materials['World ap']} position={[96.3, -137.66, 42.75]} rotation={[-1.42, -0.76, -1.33]} />
            <mesh name="Firtree_103" geometry={nodes.Firtree_103.geometry} material={materials['World ap']} position={[89.76, -141.95, 35.76]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_104" geometry={nodes.Firtree_104.geometry} material={materials['World ap']} position={[88.03, -141.59, 47.93]} rotation={[-1.57, -0.83, -1.37]} />
            <mesh name="Firtree_105" geometry={nodes.Firtree_105.geometry} material={materials['World ap']} position={[32.48, -162.03, 49.24]} rotation={[-1.59, 0.17, 3.02]} />
            <mesh name="Firtree_106" geometry={nodes.Firtree_106.geometry} material={materials['World ap']} position={[32.32, -153.21, 9.78]} rotation={[-1.24, 0.06, -3.03]} />
            <mesh name="Firtree_107" geometry={nodes.Firtree_107.geometry} material={materials['World ap']} position={[89.63, -124.84, 10.73]} rotation={[-0.76, -0.52, -0.56]} />
            <mesh name="Firtree_108" geometry={nodes.Firtree_108.geometry} material={materials['World ap']} position={[107.22, -108.01, 9.91]} rotation={[-0.94, -0.99, -0.72]} />
            <mesh name="Firtree_109" geometry={nodes.Firtree_109.geometry} material={materials['World ap']} position={[105.98, -112.5, 17.17]} rotation={[-0.9, -0.96, -0.65]} />
            <mesh name="Firtree_11" geometry={nodes.Firtree_11.geometry} material={materials['World ap']} position={[18.44, 8.04, -13.86]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_110" geometry={nodes.Firtree_110.geometry} material={materials['World ap']} position={[101.09, -109.53, 2.74]} rotation={[-0.84, -0.67, -0.55]} />
            <mesh name="Firtree_111" geometry={nodes.Firtree_111.geometry} material={materials['World ap']} position={[107.12, -117.83, 26.45]} rotation={[-1.05, -0.96, -1.77]} />
            <mesh name="Firtree_112" geometry={nodes.Firtree_112.geometry} material={materials['World ap']} position={[47.47, -144.51, 1.34]} rotation={[-1.14, -0.2, 1.82]} />
            <mesh name="Firtree_113" geometry={nodes.Firtree_113.geometry} material={materials['World ap']} position={[103, -120.06, 18.18]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_114" geometry={nodes.Firtree_114.geometry} material={materials['World ap']} position={[95.74, -127.95, 15.94]} rotation={[-0.97, -0.63, -1.71]} />
            <mesh name="Firtree_115" geometry={nodes.Firtree_115.geometry} material={materials['World ap']} position={[99.89, -127.72, 23.26]} rotation={[-0.77, -0.71, -1.47]} />
            <mesh name="Firtree_116" geometry={nodes.Firtree_116.geometry} material={materials['World ap']} position={[-27.63, -142.42, 20.93]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_117" geometry={nodes.Firtree_117.geometry} material={materials['World ap']} position={[-20.01, -149.08, 23.67]} rotation={[-1.14, 0.4, -2.12]} />
            <mesh name="Firtree_118" geometry={nodes.Firtree_118.geometry} material={materials['World ap']} position={[29.99, -160.44, 37.55]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_119" geometry={nodes.Firtree_119.geometry} material={materials['World ap']} position={[19.47, -155.91, 19.14]} rotation={[-1.45, 0.26, -1.17]} />
            <mesh name="Firtree_12" geometry={nodes.Firtree_12.geometry} material={materials['World ap']} position={[35, 12.13, -9.99]} rotation={[0.84, 0.07, 0.84]} />
            <mesh name="Firtree_120" geometry={nodes.Firtree_120.geometry} material={materials['World ap']} position={[23.48, -156.74, 17.29]} rotation={[-1.31, 0.14, -0.68]} />
            <mesh name="Firtree_121" geometry={nodes.Firtree_121.geometry} material={materials['World ap']} position={[-1.97, -156.84, 33.77]} rotation={[-1.45, 0.26, -0.65]} />
            <mesh name="Firtree_123" geometry={nodes.Firtree_123.geometry} material={materials['World ap']} position={[8.06, -151.6, 16.64]} rotation={[-1.45, 0.26, -1.99]} />
            <mesh name="Firtree_124" geometry={nodes.Firtree_124.geometry} material={materials['World ap']} position={[91.04, -136.01, 19.61]} rotation={[-0.7, -0.59, -0.36]} />
            <mesh name="Firtree_125" geometry={nodes.Firtree_125.geometry} material={materials['World ap']} position={[85.13, -132.53, 11.9]} rotation={[-0.73, -0.53, -0.63]} />
            <mesh name="Firtree_126" geometry={nodes.Firtree_126.geometry} material={materials['World ap']} position={[105.41, -125.95, 28.96]} rotation={[-0.73, -0.72, -1.43]} />
            <mesh name="Firtree_127" geometry={nodes.Firtree_127.geometry} material={materials['World ap']} position={[39.82, -150.33, 5.96]} rotation={[-1.11, -0.15, -1.95]} />
            <mesh name="Firtree_128" geometry={nodes.Firtree_128.geometry} material={materials['World ap']} position={[47.72, -149.66, 7.83]} rotation={[-1.3, -0.22, 1.76]} />
            <mesh name="Firtree_13" geometry={nodes.Firtree_13.geometry} material={materials['World ap']} position={[0.09, 11.87, -10.47]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_131" geometry={nodes.Firtree_131.geometry} material={materials['World ap']} position={[19.47, -161.26, 50.91]} rotation={[-1.68, 0.12, 1.85]} />
            <mesh name="Firtree_134" geometry={nodes.Firtree_134.geometry} material={materials['World ap']} position={[-5.5, -156.92, 40.82]} rotation={[-1.38, 0.41, -2.01]} />
            <mesh name="Firtree_136" geometry={nodes.Firtree_136.geometry} material={materials['World ap']} position={[21.09, -148.06, 2.5]} rotation={[-0.85, -0.15, -1.87]} />
            <mesh name="Firtree_137" geometry={nodes.Firtree_137.geometry} material={materials['World ap']} position={[14.87, -147.07, 4.09]} rotation={[-0.9, 0.36, -2.09]} />
            <mesh name="Firtree_138" geometry={nodes.Firtree_138.geometry} material={materials['World ap']} position={[4.81, -154.88, 27.29]} rotation={[-1.45, 0.26, -1.99]} />
            <mesh name="Firtree_139" geometry={nodes.Firtree_139.geometry} material={materials['World ap']} position={[15.67, -151.62, 10.95]} rotation={[-1.06, 0.07, -2.05]} />
            <mesh name="Firtree_14" geometry={nodes.Firtree_14.geometry} material={materials['World ap']} position={[8.41, 7.08, -15.37]} rotation={[0.71, 0.32, 0.89]} />
            <mesh name="Firtree_140" geometry={nodes.Firtree_140.geometry} material={materials['World ap']} position={[9.4, -156.82, 36.74]} rotation={[-1.43, 0.31, -2]} />
            <mesh name="Firtree_141" geometry={nodes.Firtree_141.geometry} material={materials['World ap']} position={[25.5, -149.91, 7.87]} rotation={[-1.16, -0.07, -0.69]} />
            <mesh name="Firtree_142" geometry={nodes.Firtree_142.geometry} material={materials['World ap']} position={[31.09, -149.3, 4.08]} rotation={[-1.02, -0.09, -0.69]} />
            <mesh name="Firtree_143" geometry={nodes.Firtree_143.geometry} material={materials['World ap']} position={[19.32, -144.08, -3.53]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_144" geometry={nodes.Firtree_144.geometry} material={materials['World ap']} position={[29.29, -143.1, -4.57]} rotation={[-0.87, 0.09, -0.69]} />
            <mesh name="Firtree_145" geometry={nodes.Firtree_145.geometry} material={materials['World ap']} position={[40.04, -141.41, -4.25]} rotation={[-0.9, -0.4, -0.63]} />
            <mesh name="Firtree_146" geometry={nodes.Firtree_146.geometry} material={materials['World ap']} position={[53.46, -138.09, -1.51]} rotation={[-0.53, -0.21, -0.66]} />
            <mesh name="Firtree_147" geometry={nodes.Firtree_147.geometry} material={materials['World ap']} position={[35.63, -137.72, -7.72]} rotation={[-0.47, -0.01, -0.53]} />
            <mesh name="Firtree_149" geometry={nodes.Firtree_149.geometry} material={materials['World ap']} position={[74.1, -142.62, 4.5]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_15" geometry={nodes.Firtree_15.geometry} material={materials['World ap']} position={[-29.06, 15.77, 21.21]} rotation={[0.78, 0.69, 1.01]} />
            <mesh name="Firtree_150" geometry={nodes.Firtree_150.geometry} material={materials['World ap']} position={[81.94, -124.82, 0.04]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_151" geometry={nodes.Firtree_151.geometry} material={materials['World ap']} position={[88.86, -122.05, 1.82]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_152" geometry={nodes.Firtree_152.geometry} material={materials['World ap']} position={[87.97, -116.5, -4.23]} rotation={[-0.75, -0.46, -0.73]} />
            <mesh name="Firtree_153" geometry={nodes.Firtree_153.geometry} material={materials['World ap']} position={[91.87, -115.82, -0.26]} rotation={[-0.94, -0.63, -0.83]} />
            <mesh name="Firtree_154" geometry={nodes.Firtree_154.geometry} material={materials['World ap']} position={[111.09, -105.47, 16.22]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_155" geometry={nodes.Firtree_155.geometry} material={materials['World ap']} position={[113.33, -98.53, 15.36]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_156" geometry={nodes.Firtree_156.geometry} material={materials['World ap']} position={[113.74, -109.1, 28.51]} rotation={[-0.88, -0.83, -0.78]} />
            <mesh name="Firtree_157" geometry={nodes.Firtree_157.geometry} material={materials['World ap']} position={[119.16, -98.68, 25.48]} rotation={[-0.92, -1.03, -0.89]} />
            <mesh name="Firtree_158" geometry={nodes.Firtree_158.geometry} material={materials['World ap']} position={[118.91, -105.32, 33.63]} rotation={[-0.92, -1.03, -0.89]} />
            <mesh name="Firtree_159" geometry={nodes.Firtree_159.geometry} material={materials['World ap']} position={[121.23, -95.87, 29.26]} rotation={[-0.46, -1.19, -0.47]} />
            <mesh name="Firtree_16" geometry={nodes.Firtree_16.geometry} material={materials['World ap']} position={[-13.86, 8.64, -1.86]} rotation={[0.64, 0.54, 1.89]} />
            <mesh name="Firtree_160" geometry={nodes.Firtree_160.geometry} material={materials['World ap']} position={[73.64, -145.32, 9.39]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_161" geometry={nodes.Firtree_161.geometry} material={materials['World ap']} position={[69.49, -144.33, 5.86]} rotation={[-0.91, -0.33, -0.79]} />
            <mesh name="Firtree_162" geometry={nodes.Firtree_162.geometry} material={materials['World ap']} position={[77.42, -135.51, 7.26]} rotation={[-0.86, -0.67, -0.8]} />
            <mesh name="Firtree_163" geometry={nodes.Firtree_163.geometry} material={materials['World ap']} position={[101.74, -131.25, 35.23]} rotation={[-1.3, -0.79, -1.27]} />
            <mesh name="Firtree_164" geometry={nodes.Firtree_164.geometry} material={materials['World ap']} position={[112.9, -114.9, 32.66]} rotation={[-1.26, -0.89, -1.23]} />
            <mesh name="Firtree_165" geometry={nodes.Firtree_165.geometry} material={materials['World ap']} position={[120.95, -99.13, 33.97]} rotation={[-0.89, -1.22, -0.91]} />
            <mesh name="Firtree_166" geometry={nodes.Firtree_166.geometry} material={materials['World ap']} position={[115.84, -107.73, 20.95]} rotation={[-0.62, -1.11, -0.66]} />
            <mesh name="Firtree_167" geometry={nodes.Firtree_167.geometry} material={materials['World ap']} position={[117.99, -93.71, 21.84]} rotation={[-0.37, -1.03, -0.36]} />
            <mesh name="Firtree_168" geometry={nodes.Firtree_168.geometry} material={materials['World ap']} position={[97.62, -135.38, 30.84]} rotation={[-1.01, -0.73, -0.87]} />
            <mesh name="Firtree_169" geometry={nodes.Firtree_169.geometry} material={materials['World ap']} position={[87.75, -140.37, 22.29]} rotation={[-1.2, -0.7, -1.79]} />
            <mesh name="Firtree_17" geometry={nodes.Firtree_17.geometry} material={materials['World ap']} position={[-17.22, 14.96, 5.26]} rotation={[0.66, 0.61, 2.14]} />
            <mesh name="Firtree_170" geometry={nodes.Firtree_170.geometry} material={materials['World ap']} position={[84.18, -137, 17.53]} rotation={[-1.16, -0.53, -1.77]} />
            <mesh name="Firtree_171" geometry={nodes.Firtree_171.geometry} material={materials['World ap']} position={[9.94, -144.77, -0.44]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_172" geometry={nodes.Firtree_172.geometry} material={materials['World ap']} position={[12.32, -139.3, -6.15]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_173" geometry={nodes.Firtree_173.geometry} material={materials['World ap']} position={[20.1, -138.6, -8.85]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_174" geometry={nodes.Firtree_174.geometry} material={materials['World ap']} position={[7.97, -133.94, -10.01]} rotation={[-0.75, 0.19, -1.87]} />
            <mesh name="Firtree_175" geometry={nodes.Firtree_175.geometry} material={materials['World ap']} position={[-22.97, -147.12, 27.75]} rotation={[-1.37, 0.61, -1.99]} />
            <mesh name="Firtree_177" geometry={nodes.Firtree_177.geometry} material={materials['World ap']} position={[-49.09, -11.11, 11.3]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_178" geometry={nodes.Firtree_178.geometry} material={materials['World ap']} position={[-35.33, 12.22, 32.76]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_179" geometry={nodes.Firtree_179.geometry} material={materials['World ap']} position={[-31.3, 14.65, 28.55]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_18" geometry={nodes.Firtree_18.geometry} material={materials['World ap']} position={[41.8, 2.87, -17.81]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_180" geometry={nodes.Firtree_180.geometry} material={materials['World ap']} position={[92.25, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_181" geometry={nodes.Firtree_181.geometry} material={materials['World ap']} position={[55.57, 25.55, 22.37]} rotation={[1.21, -0.24, -1.49]} />
            <mesh name="Firtree_182" geometry={nodes.Firtree_182.geometry} material={materials['World ap']} position={[30.1, 31.71, 18.16]} rotation={[1.21, -0.24, -1.49]} />
            <mesh name="Firtree_183" geometry={nodes.Firtree_183.geometry} material={materials['World ap']} position={[15.51, 36.77, 12.72]} rotation={[1.2, -0.12, -1.49]} />
            <mesh name="Firtree_184" geometry={nodes.Firtree_184.geometry} material={materials['World ap']} position={[100.35, -1.42, 11.26]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_185" geometry={nodes.Firtree_185.geometry} material={materials['World ap']} position={[-25.34, 20.33, 16.84]} rotation={[0.98, 0.75, 1.9]} />
            <mesh name="Firtree_186" geometry={nodes.Firtree_186.geometry} material={materials['World ap']} position={[-60.25, -79.72, 10.27]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_189" geometry={nodes.Firtree_189.geometry} material={materials['World ap']} position={[75.76, -152.49, 41.56]} rotation={[-1.51, -0.63, -1.49]} />
            <mesh name="Firtree_19" geometry={nodes.Firtree_19.geometry} material={materials['World ap']} position={[53, 2.14, -16.73]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_190" geometry={nodes.Firtree_190.geometry} material={materials['World ap']} position={[50.34, -163.53, 40.63]} rotation={[-1.62, 0.16, 1.86]} />
            <mesh name="Firtree_192" geometry={nodes.Firtree_192.geometry} material={materials['World ap']} position={[91.89, -5.81, 5.22]} rotation={[0.45, -0.78, -0.32]} />
            <mesh name="Firtree_2" geometry={nodes.Firtree_2.geometry} material={materials['World ap']} position={[30.5, -0.09, -18.25]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_20" geometry={nodes.Firtree_20.geometry} material={materials['World ap']} position={[54.38, 11.91, -7.34]} rotation={[0.75, -0.11, 2.17]} />
            <mesh name="Firtree_21" geometry={nodes.Firtree_21.geometry} material={materials['World ap']} position={[22.88, 4.38, -17.57]} rotation={[0.65, 0.03, 2.17]} />
            <mesh name="Firtree_22" geometry={nodes.Firtree_22.geometry} material={materials['World ap']} position={[29.08, 9.47, -14.07]} rotation={[0.75, -0.11, 1.66]} />
            <mesh name="Firtree_23" geometry={nodes.Firtree_23.geometry} material={materials['World ap']} position={[25.17, 20.84, 3.4]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_24" geometry={nodes.Firtree_24.geometry} material={materials['World ap']} position={[69, -3.88, -14.94]} rotation={[0.46, -0.2, 0.77]} />
            <mesh name="Firtree_25" geometry={nodes.Firtree_25.geometry} material={materials['World ap']} position={[75.15, -10.88, -15.56]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_26" geometry={nodes.Firtree_26.geometry} material={materials['World ap']} position={[-26.46, 13.48, 13.78]} rotation={[0.8, 0.66, 0.98]} />
            <mesh name="Firtree_27" geometry={nodes.Firtree_27.geometry} material={materials['World ap']} position={[-25.26, 9.15, 6.77]} rotation={[0.89, 0.51, 0.82]} />
            <mesh name="Firtree_28" geometry={nodes.Firtree_28.geometry} material={materials['World ap']} position={[-32.26, 5.27, 14.87]} rotation={[0.88, 0.65, 1.65]} />
            <mesh name="Firtree_29" geometry={nodes.Firtree_29.geometry} material={materials['World ap']} position={[-1.4, 1.04, -13.11]} rotation={[0.75, 0.36, -1.63]} />
            <mesh name="Firtree_3" geometry={nodes.Firtree_3.geometry} material={materials['World ap']} position={[46.08, 7.4, -8.93]} rotation={[0.75, -0.11, 0.84]} />
            <mesh name="Firtree_30" geometry={nodes.Firtree_30.geometry} material={materials['World ap']} position={[-34.07, 8.94, 23.04]} rotation={[1.2, 0.73, 0.64]} />
            <mesh name="Firtree_31" geometry={nodes.Firtree_31.geometry} material={materials['World ap']} position={[-40.85, -8.02, 4.78]} rotation={[0.82, 0.6, 1.94]} />
            <mesh name="Firtree_32" geometry={nodes.Firtree_32.geometry} material={materials['World ap']} position={[-38.43, 1.09, 17.1]} rotation={[1.12, 0.79, 1.69]} />
            <mesh name="Firtree_33" geometry={nodes.Firtree_33.geometry} material={materials['World ap']} position={[-43.78, -4.37, 13.1]} rotation={[1.17, 0.8, 1.61]} />
            <mesh name="Firtree_34" geometry={nodes.Firtree_34.geometry} material={materials['World ap']} position={[-23.02, 2.21, 2.18]} rotation={[0.66, 0.52, 1.97]} />
            <mesh name="Firtree_35" geometry={nodes.Firtree_35.geometry} material={materials['World ap']} position={[10.25, 16.18, -11.14]} rotation={[0.61, 0.13, -0.17]} />
            <mesh name="Firtree_36" geometry={nodes.Firtree_36.geometry} material={materials['World ap']} position={[26.46, 29.17, 12.03]} rotation={[0.91, -0.08, -0.46]} />
            <mesh name="Firtree_37" geometry={nodes.Firtree_37.geometry} material={materials['World ap']} position={[-54.15, -16.86, 13.54]} rotation={[0.38, 1.02, 2.48]} />
            <mesh name="Firtree_38" geometry={nodes.Firtree_38.geometry} material={materials['World ap']} position={[-51.65, -23.49, 3.49]} rotation={[0.51, 0.82, 2.21]} />
            <mesh name="Firtree_39" geometry={nodes.Firtree_39.geometry} material={materials['World ap']} position={[-58.73, -25.94, 10.84]} rotation={[0.31, 0.9, 2.46]} />
            <mesh name="Firtree_4" geometry={nodes.Firtree_4.geometry} material={materials['World ap']} position={[61.73, 6.88, -7.85]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_40" geometry={nodes.Firtree_40.geometry} material={materials['World ap']} position={[-51.97, -30.39, 1.96]} rotation={[0.27, 0.74, 2.53]} />
            <mesh name="Firtree_41" geometry={nodes.Firtree_41.geometry} material={materials['World ap']} position={[-65.79, -56.83, 15.22]} rotation={[-0.08, 1.25, 3.01]} />
            <mesh name="Firtree_42" geometry={nodes.Firtree_42.geometry} material={materials['World ap']} position={[-55.56, -27.66, 5.23]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_43" geometry={nodes.Firtree_43.geometry} material={materials['World ap']} position={[-54.57, -18.99, 8.73]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_44" geometry={nodes.Firtree_44.geometry} material={materials['World ap']} position={[-33.65, 1.7, 2.7]} rotation={[0.64, 0.63, 1.85]} />
            <mesh name="Firtree_45" geometry={nodes.Firtree_45.geometry} material={materials['World ap']} position={[-6.21, 13.9, -6.04]} rotation={[0.6, 0.58, -0.27]} />
            <mesh name="Firtree_46" geometry={nodes.Firtree_46.geometry} material={materials['World ap']} position={[-57.99, -61.58, 5.65]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_47" geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-35.47, -0.67, 9.39]} rotation={[0.89, 0.51, 1.64]} />
            <mesh name="Firtree_48" geometry={nodes.Firtree_48.geometry} material={materials['World ap']} position={[-60.73, -68.5, 7.65]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_49" geometry={nodes.Firtree_49.geometry} material={materials['World ap']} position={[60.69, 19.53, 5.39]} rotation={[0.71, -0.16, 0.83]} />
            <mesh name="Firtree_5" geometry={nodes.Firtree_5.geometry} material={materials['World ap']} position={[71.71, 10.57, -0.04]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_50" geometry={nodes.Firtree_50.geometry} material={materials['World ap']} position={[33.77, 24.3, 12.72]} rotation={[1, -0.4, 0.91]} />
            <mesh name="Firtree_51" geometry={nodes.Firtree_51.geometry} material={materials['World ap']} position={[-12.09, 19.81, 3.42]} rotation={[0.52, 0.65, 0.86]} />
            <mesh name="Firtree_52" geometry={nodes.Firtree_52.geometry} material={materials['World ap']} position={[-6.36, 2.58, -8.76]} rotation={[0.63, 0.55, 0.67]} />
            <mesh name="Firtree_53" geometry={nodes.Firtree_53.geometry} material={materials['World ap']} position={[-45.76, -18.1, 2.96]} rotation={[0.59, 0.44, 0.76]} />
            <mesh name="Firtree_54" geometry={nodes.Firtree_54.geometry} material={materials['World ap']} position={[-60.97, -62.25, 11.37]} rotation={[0.11, 1.05, 1.49]} />
            <mesh name="Firtree_55" geometry={nodes.Firtree_55.geometry} material={materials['World ap']} position={[-61.92, -72.12, 13.63]} rotation={[-0.29, 1.25, 1.95]} />
            <mesh name="Firtree_56" geometry={nodes.Firtree_56.geometry} material={materials['World ap']} position={[-59.43, -74.92, 8.99]} rotation={[0.04, 1.02, 1.61]} />
            <mesh name="Firtree_57" geometry={nodes.Firtree_57.geometry} material={materials['World ap']} position={[-60.61, -76.72, 11.06]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_58" geometry={nodes.Firtree_58.geometry} material={materials['World ap']} position={[-63.26, -66.68, 12.84]} rotation={[0.29, 1.11, 2.72]} />
            <mesh name="Firtree_59" geometry={nodes.Firtree_59.geometry} material={materials['World ap']} position={[-61.48, -76.24, 17.68]} rotation={[-0.58, 1.19, -2.57]} />
            <mesh name="Firtree_6" geometry={nodes.Firtree_6.geometry} material={materials['World ap']} position={[77.85, -3.43, -10.09]} rotation={[0.62, -0.43, 0.75]} />
            <mesh name="Firtree_60" geometry={nodes.Firtree_60.geometry} material={materials['World ap']} position={[-61.84, -81.68, 12.85]} rotation={[-0.86, 1.15, -2.37]} />
            <mesh name="Firtree_61" geometry={nodes.Firtree_61.geometry} material={materials['World ap']} position={[43.94, 25.17, 8.05]} rotation={[1.12, -0.08, -0.46]} />
            <mesh name="Firtree_62" geometry={nodes.Firtree_62.geometry} material={materials['World ap']} position={[68.44, 19.36, 2.33]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_63" geometry={nodes.Firtree_63.geometry} material={materials['World ap']} position={[83.67, 4.75, 0.55]} rotation={[0.58, -0.4, -0.25]} />
            <mesh name="Firtree_64" geometry={nodes.Firtree_64.geometry} material={materials['World ap']} position={[84.08, -9.69, -6.41]} rotation={[0.65, -0.58, -0.11]} />
            <mesh name="Firtree_65" geometry={nodes.Firtree_65.geometry} material={materials['World ap']} position={[59.05, -1.03, -15.54]} rotation={[0.56, -0.43, 0.82]} />
            <mesh name="Firtree_66" geometry={nodes.Firtree_66.geometry} material={materials['World ap']} position={[15.23, 1.7, -20.6]} rotation={[0.61, 0.17, 0.77]} />
            <mesh name="Firtree_67" geometry={nodes.Firtree_67.geometry} material={materials['World ap']} position={[19.25, 10.38, -1.46]} rotation={[0.76, 0.13, 0.98]} />
            <mesh name="Firtree_68" geometry={nodes.Firtree_68.geometry} material={materials['World ap']} position={[-18.89, 16.97, 11.39]} rotation={[0.98, 0.75, 1.9]} />
            <mesh name="Firtree_69" geometry={nodes.Firtree_69.geometry} material={materials['World ap']} position={[-6.61, 9.17, -9.28]} rotation={[0.68, 0.36, -1.63]} />
            <mesh name="Firtree_7" geometry={nodes.Firtree_7.geometry} material={materials['World ap']} position={[59.97, 15.62, -3.21]} rotation={[0.64, -0.24, 0.81]} />
            <mesh name="Firtree_70" geometry={nodes.Firtree_70.geometry} material={materials['World ap']} position={[-65.87, -70.71, 20.97]} rotation={[-0.82, 1.13, -2.41]} />
            <mesh name="Firtree_71" geometry={nodes.Firtree_71.geometry} material={materials['World ap']} position={[-61.21, -56.38, 9.56]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_72" geometry={nodes.Firtree_72.geometry} material={materials['World ap']} position={[-66.63, -63.47, 18.3]} rotation={[-0.06, 1.16, 2.99]} />
            <mesh name="Firtree_73" geometry={nodes.Firtree_73.geometry} material={materials['World ap']} position={[-57.86, -53.97, 4.48]} rotation={[-0.04, 0.88, 2.97]} />
            <mesh name="Firtree_74" geometry={nodes.Firtree_74.geometry} material={materials['World ap']} position={[-62.99, -53.6, 14.82]} rotation={[-0.06, 1.12, 2.99]} />
            <mesh name="Firtree_75" geometry={nodes.Firtree_75.geometry} material={materials['World ap']} position={[-69.89, -53.97, 20.42]} rotation={[-0.25, 1.04, -1.89]} />
            <mesh name="Firtree_76" geometry={nodes.Firtree_76.geometry} material={materials['World ap']} position={[3.91, -0.77, -16.99]} rotation={[0.66, 0.29, -1.57]} />
            <mesh name="Firtree_77" geometry={nodes.Firtree_77.geometry} material={materials['World ap']} position={[21.46, -1.57, -22.04]} rotation={[0.53, 0.03, 2.17]} />
            <mesh name="Firtree_78" geometry={nodes.Firtree_78.geometry} material={materials['World ap']} position={[10.21, -2.78, -19.58]} rotation={[0.61, 0.24, 0.28]} />
            <mesh name="Firtree_79" geometry={nodes.Firtree_79.geometry} material={materials['World ap']} position={[40.1, 14.43, -4.01]} rotation={[0.6, -0.13, 0.53]} />
            <mesh name="Firtree_8" geometry={nodes.Firtree_8.geometry} material={materials['World ap']} position={[25.41, 14.05, -9.85]} rotation={[0.79, -0.07, 0.84]} />
            <mesh name="Firtree_80" geometry={nodes.Firtree_80.geometry} material={materials['World ap']} position={[77.95, -19, -14.51]} rotation={[0.44, -0.53, 0.22]} />
            <mesh name="Firtree_81" geometry={nodes.Firtree_81.geometry} material={materials['World ap']} position={[72.02, 4.81, -6.63]} rotation={[0.6, -0.32, 0.05]} />
            <mesh name="Firtree_82" geometry={nodes.Firtree_82.geometry} material={materials['World ap']} position={[64.53, 10.91, -1.82]} rotation={[0.78, -0.32, 0.05]} />
            <mesh name="Firtree_83" geometry={nodes.Firtree_83.geometry} material={materials['World ap']} position={[52.53, 7.31, -10.78]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_84" geometry={nodes.Firtree_84.geometry} material={materials['World ap']} position={[67.86, 0.03, -10.31]} rotation={[0.59, -0.28, 0.8]} />
            <mesh name="Firtree_85" geometry={nodes.Firtree_85.geometry} material={materials['World ap']} position={[69.72, -9.31, -17.67]} rotation={[0.29, -0.07, 0.66]} />
            <mesh name="Firtree_86" geometry={nodes.Firtree_86.geometry} material={materials['World ap']} position={[66.17, 25.68, 10.25]} rotation={[0.83, -0.35, -1.96]} />
            <mesh name="Firtree_87" geometry={nodes.Firtree_87.geometry} material={materials['World ap']} position={[-16.4, 21.85, 6.13]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_88" geometry={nodes.Firtree_88.geometry} material={materials['World ap']} position={[-18.44, 25.56, 10.74]} rotation={[0.99, 0.77, 1.86]} />
            <mesh name="Firtree_89" geometry={nodes.Firtree_89.geometry} material={materials['World ap']} position={[-56.81, -49.67, 5.84]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_9" geometry={nodes.Firtree_9.geometry} material={materials['World ap']} position={[32.65, 17.22, -0.61]} rotation={[0.94, -0.07, -1.62]} />
            <mesh name="Firtree_90" geometry={nodes.Firtree_90.geometry} material={materials['World ap']} position={[-47.03, -26.86, -1.51]} rotation={[0.12, 0.8, 2.7]} />
            <mesh name="Firtree_91" geometry={nodes.Firtree_91.geometry} material={materials['World ap']} position={[-51.27, -8.26, 18.84]} rotation={[1.19, 0.78, 0.4]} />
            <mesh name="Firtree_92" geometry={nodes.Firtree_92.geometry} material={materials['World ap']} position={[-56.29, -33.98, 4]} rotation={[0.38, 1.02, 2.38]} />
            <mesh name="Firtree_93" geometry={nodes.Firtree_93.geometry} material={materials['World ap']} position={[60.1, -142.32, 2.38]} rotation={[-0.65, -0.48, -0.26]} />
            <mesh name="Firtree_94" geometry={nodes.Firtree_94.geometry} material={materials['World ap']} position={[100.81, -115.34, 11.14]} rotation={[-0.97, -0.63, -0.89]} />
            <mesh name="Firtree_95" geometry={nodes.Firtree_95.geometry} material={materials['World ap']} position={[57.73, -148.83, 5.76]} rotation={[-0.65, -0.48, -0.26]} />
            <mesh name="Firtree_96" geometry={nodes.Firtree_96.geometry} material={materials['World ap']} position={[58.51, -147.99, 13.82]} rotation={[-1.16, -0.36, 3.09]} />
            <mesh name="Firtree_97" geometry={nodes.Firtree_97.geometry} material={materials['World ap']} position={[96.41, -119.21, 6.79]} rotation={[-0.67, -0.6, -0.64]} />
            <mesh name="Firtree_98" geometry={nodes.Firtree_98.geometry} material={materials['World ap']} position={[85.58, -146.63, 43.14]} rotation={[-1.49, -0.41, -1.75]} />
            <mesh name="Firtree_99" geometry={nodes.Firtree_99.geometry} material={materials['World ap']} position={[96.56, -136.96, 36.08]} rotation={[-1.3, -0.79, -1.27]} />
          </group>
          <group name="Palms" position={[-68.62, 82.82, 15.93]} rotation={[2.1, 0.5, 1.38]}>
            <group name="Africa" position={[68.89, 73.37, 49.11]} rotation={[0.26, -0.67, 0.01]}>
              <mesh name="Palm_10_3" geometry={nodes.Palm_10_3.geometry} material={materials['World ap']} position={[-21.32, 22.37, 46.56]} rotation={[1.05, 0.85, -0.29]} />
              <mesh name="Palm_11_3" geometry={nodes.Palm_11_3.geometry} material={materials['World ap']} position={[3.38, 21.43, 18.13]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_3" geometry={nodes.Palm_12_3.geometry} material={materials['World ap']} position={[9.39, 22.77, 21.96]} rotation={[1.23, -0.09, -1.58]} />
              <mesh name="Palm_13_3" geometry={nodes.Palm_13_3.geometry} material={materials['World ap']} position={[20.16, 26.2, 34.32]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_14_3" geometry={nodes.Palm_14_3.geometry} material={materials['World ap']} position={[27.71, 27.28, 40.3]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_15_3" geometry={nodes.Palm_15_3.geometry} material={materials['World ap']} position={[17.09, 18.71, 26.67]} rotation={[0.91, -0.8, -0.47]} />
              <mesh name="Palm_16_3" geometry={nodes.Palm_16_3.geometry} material={materials['World ap']} position={[9.83, 25.46, 30.64]} rotation={[1.15, -0.33, -0.34]} />
              <mesh name="Palm_17_3" geometry={nodes.Palm_17_3.geometry} material={materials['World ap']} position={[15.03, 19.78, 22.07]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_19_3" geometry={nodes.Palm_19_3.geometry} material={materials['World ap']} position={[12.76, 12.63, 5.63]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_1_3" geometry={nodes.Palm_1_3.geometry} material={materials['World ap']} position={[11.41, -7.46, -14.61]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_20_3" geometry={nodes.Palm_20_3.geometry} material={materials['World ap']} position={[17.89, 13.31, 8.13]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_21_3" geometry={nodes.Palm_21_3.geometry} material={materials['World ap']} position={[-24.41, 5.81, 15.37]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_22_3" geometry={nodes.Palm_22_3.geometry} material={materials['World ap']} position={[-31.92, -2.5, 11.2]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_23_3" geometry={nodes.Palm_23_3.geometry} material={materials['World ap']} position={[-33.19, 0.21, 17.17]} rotation={[0.6, 0.81, 0.15]} />
              <mesh name="Palm_24_3" geometry={nodes.Palm_24_3.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_3" geometry={nodes.Palm_25_3.geometry} material={materials['World ap']} position={[20.42, 27.91, 36.77]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_3" geometry={nodes.Palm_26_3.geometry} material={materials['World ap']} position={[18.13, 3.44, 0.72]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_3" geometry={nodes.Palm_27_3.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_3" geometry={nodes.Palm_28_3.geometry} material={materials['World ap']} position={[28.17, -9.24, -5.95]} rotation={[1.01, -0.86, 0.94]} />
              <mesh name="Palm_29_3" geometry={nodes.Palm_29_3.geometry} material={materials['World ap']} position={[18.34, -0.34, -9.53]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_2_4" geometry={nodes.Palm_2_4.geometry} material={materials['World ap']} position={[23.43, -0.6, -3.57]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_3" geometry={nodes.Palm_30_3.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_32_2" geometry={nodes.Palm_32_2.geometry} material={materials['World ap']} position={[-13.49, 25.12, 47.26]} rotation={[0.9, 0.36, -0.21]} />
              <mesh name="Palm_33_2" geometry={nodes.Palm_33_2.geometry} material={materials['World ap']} position={[-17.55, 23.96, 49.11]} rotation={[1.68, 0.48, -0.43]} />
              <mesh name="Palm_34_2" geometry={nodes.Palm_34_2.geometry} material={materials['World ap']} position={[-19.74, -0.58, 5.87]} rotation={[0.52, 0.92, -0.08]} />
              <mesh name="Palm_35_2" geometry={nodes.Palm_35_2.geometry} material={materials['World ap']} position={[-13.45, 24.64, 53.09]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36_2" geometry={nodes.Palm_36_2.geometry} material={materials['World ap']} position={[-20.51, 24.23, 49.63]} rotation={[1.62, 0.74, -0.19]} />
              <mesh name="Palm_37_2" geometry={nodes.Palm_37_2.geometry} material={materials['World ap']} position={[-3.36, 28.29, 51.92]} rotation={[2, 0.17, -0.72]} />
              <mesh name="Palm_38_2" geometry={nodes.Palm_38_2.geometry} material={materials['World ap']} position={[-23.26, 21.37, 43.92]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_39_2" geometry={nodes.Palm_39_2.geometry} material={materials['World ap']} position={[-40.85, 1.14, 39.29]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_3_3" geometry={nodes.Palm_3_3.geometry} material={materials['World ap']} position={[15.01, 6.9, 0.26]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_3_4" geometry={nodes.Palm_3_4.geometry} material={materials['World ap']} position={[-14.08, -0.89, -0.25]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40_2" geometry={nodes.Palm_40_2.geometry} material={materials['World ap']} position={[-35.7, 11.31, 38.14]} rotation={[1.03, 0.69, -0.28]} />
              <mesh name="Palm_41_2" geometry={nodes.Palm_41_2.geometry} material={materials['World ap']} position={[-42.85, -1, 35.96]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_42_2" geometry={nodes.Palm_42_2.geometry} material={materials['World ap']} position={[-39.49, -1.78, 19.19]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_43_2" geometry={nodes.Palm_43_2.geometry} material={materials['World ap']} position={[-42.86, -2.5, 23]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_44_2" geometry={nodes.Palm_44_2.geometry} material={materials['World ap']} position={[-47.57, -6.66, 27.07]} rotation={[0.78, 0.89, -1.05]} />
              <mesh name="Palm_45_2" geometry={nodes.Palm_45_2.geometry} material={materials['World ap']} position={[-49, -11.96, 24.28]} rotation={[0.78, 0.89, -0.25]} />
              <mesh name="Palm_46_2" geometry={nodes.Palm_46_2.geometry} material={materials['World ap']} position={[4.56, 29.69, 48.51]} rotation={[1.26, -0.01, -0.32]} />
              <mesh name="Palm_47_2" geometry={nodes.Palm_47_2.geometry} material={materials['World ap']} position={[5.54, 30.16, 51.83]} rotation={[1.58, -0.19, -0.3]} />
              <mesh name="Palm_48_2" geometry={nodes.Palm_48_2.geometry} material={materials['World ap']} position={[-43.37, -1.41, 32.08]} rotation={[0.77, 0.91, -0.11]} />
              <mesh name="Palm_49_2" geometry={nodes.Palm_49_2.geometry} material={materials['World ap']} position={[-42.65, -2.77, 29.47]} rotation={[0.76, 0.91, -0.3]} />
              <mesh name="Palm_50_2" geometry={nodes.Palm_50_2.geometry} material={materials['World ap']} position={[-0.93, 15.13, 12.05]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_51_2" geometry={nodes.Palm_51_2.geometry} material={materials['World ap']} position={[4.74, 21.9, 16]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_52_2" geometry={nodes.Palm_52_2.geometry} material={materials['World ap']} position={[-15.6, -2.2, 2.14]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_53_2" geometry={nodes.Palm_53_2.geometry} material={materials['World ap']} position={[-8.65, -5.18, -11.32]} rotation={[0.94, 0.53, -0.23]} />
              <mesh name="Palm_54_2" geometry={nodes.Palm_54_2.geometry} material={materials['World ap']} position={[1.47, 20.88, 15.56]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_55_2" geometry={nodes.Palm_55_2.geometry} material={materials['World ap']} position={[9.27, 25.49, 27]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_56_2" geometry={nodes.Palm_56_2.geometry} material={materials['World ap']} position={[8.67, 22.7, 23.21]} rotation={[1.15, 0.51, -0.23]} />
              <mesh name="Palm_57_2" geometry={nodes.Palm_57_2.geometry} material={materials['World ap']} position={[-7.07, -4.42, -5.71]} rotation={[0.15, 0.78, 0.17]} />
              <mesh name="Palm_5_3" geometry={nodes.Palm_5_3.geometry} material={materials['World ap']} position={[-10.07, 6.41, 9.26]} rotation={[1.14, 0.55, -0.23]} />
              <mesh name="Palm_6_3" geometry={nodes.Palm_6_3.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_7_3" geometry={nodes.Palm_7_3.geometry} material={materials['World ap']} position={[3.94, 17.17, 12.13]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_81_3" geometry={nodes.Palm_81_3.geometry} material={materials['World ap']} position={[-7.51, -3.03, -2.06]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_82_3" geometry={nodes.Palm_82_3.geometry} material={materials['World ap']} position={[-2.09, 6.81, 1.41]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_85_2" geometry={nodes.Palm_85_2.geometry} material={materials['World ap']} position={[1.9, -12.53, -7.88]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_3" geometry={nodes.Palm_86_3.geometry} material={materials['World ap']} position={[8.57, 5.79, -0.2]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_87_3" geometry={nodes.Palm_87_3.geometry} material={materials['World ap']} position={[-4.39, 9.09, 8.33]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_88_2" geometry={nodes.Palm_88_2.geometry} material={materials['World ap']} position={[3.83, 11.71, 5.27]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_89_3" geometry={nodes.Palm_89_3.geometry} material={materials['World ap']} position={[-10.33, 4.11, 2.8]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_8_3" geometry={nodes.Palm_8_3.geometry} material={materials['World ap']} position={[-26.69, 0.7, 9.89]} rotation={[1.32, 0.75, -0.37]} />
              <mesh name="Palm_91_3" geometry={nodes.Palm_91_3.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_9_3" geometry={nodes.Palm_9_3.geometry} material={materials['World ap']} position={[-3.81, 12.33, 11.07]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="America" position={[121.64, 40.46, 118.25]} rotation={[0.68, -0.89, -0.51]}>
              <mesh name="Palm_10_2" geometry={nodes.Palm_10_2.geometry} material={materials['World ap']} position={[1.09, 32.77, 62.86]} rotation={[1.52, 0.11, -0.41]} />
              <mesh name="Palm_11_2" geometry={nodes.Palm_11_2.geometry} material={materials['World ap']} position={[1.17, 16.92, 21.54]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_12_2" geometry={nodes.Palm_12_2.geometry} material={materials['World ap']} position={[9.47, 17.04, 22.85]} rotation={[1.23, -0.09, -0.32]} />
              <mesh name="Palm_13_2" geometry={nodes.Palm_13_2.geometry} material={materials['World ap']} position={[20.58, 19.69, 35.5]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_14_2" geometry={nodes.Palm_14_2.geometry} material={materials['World ap']} position={[28.47, 20.35, 41.66]} rotation={[0.58, -0.44, -0.44]} />
              <mesh name="Palm_16_2" geometry={nodes.Palm_16_2.geometry} material={materials['World ap']} position={[9.83, 25.46, 30.64]} rotation={[1.15, -0.33, -0.34]} />
              <mesh name="Palm_17_2" geometry={nodes.Palm_17_2.geometry} material={materials['World ap']} position={[15.11, 14.06, 22.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_18_2" geometry={nodes.Palm_18_2.geometry} material={materials['World ap']} position={[8.44, 10.88, 14.96]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_19_2" geometry={nodes.Palm_19_2.geometry} material={materials['World ap']} position={[14.6, 5.34, 7.67]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_1_2" geometry={nodes.Palm_1_2.geometry} material={materials['World ap']} position={[15.13, -16.44, -8.07]} rotation={[0.21, -0.1, 0.65]} />
              <mesh name="Palm_20_2" geometry={nodes.Palm_20_2.geometry} material={materials['World ap']} position={[19.1, -0.7, 3.92]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_21_2" geometry={nodes.Palm_21_2.geometry} material={materials['World ap']} position={[-4.9, -7.44, -8.22]} rotation={[0.76, 0.52, -0.38]} />
              <mesh name="Palm_22_2" geometry={nodes.Palm_22_2.geometry} material={materials['World ap']} position={[-13.85, -15.36, -8.66]} rotation={[0.16, 0.63, -0.04]} />
              <mesh name="Palm_23_2" geometry={nodes.Palm_23_2.geometry} material={materials['World ap']} position={[-14.8, -9.69, -5.25]} rotation={[0.16, 0.63, -0.04]} />
              <mesh name="Palm_24_2" geometry={nodes.Palm_24_2.geometry} material={materials['World ap']} position={[-37.94, -4.58, 15.28]} rotation={[0.6, 0.81, -0.92]} />
              <mesh name="Palm_25_2" geometry={nodes.Palm_25_2.geometry} material={materials['World ap']} position={[20.85, 21.4, 37.95]} rotation={[1.09, -0.58, -0.18]} />
              <mesh name="Palm_26_2" geometry={nodes.Palm_26_2.geometry} material={materials['World ap']} position={[18.25, -4.72, 1.99]} rotation={[0.93, -0.75, 0.54]} />
              <mesh name="Palm_27_2" geometry={nodes.Palm_27_2.geometry} material={materials['World ap']} position={[19.67, 11.83, 16.21]} rotation={[1.25, -0.36, -0.31]} />
              <mesh name="Palm_28_2" geometry={nodes.Palm_28_2.geometry} material={materials['World ap']} position={[-1.08, -28.79, -16.33]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_29_2" geometry={nodes.Palm_29_2.geometry} material={materials['World ap']} position={[10.77, -19.68, -13.64]} rotation={[0.15, -0.01, -0.1]} />
              <mesh name="Palm_2_2" geometry={nodes.Palm_2_2.geometry} material={materials['World ap']} position={[15.13, -1.26, 1.52]} rotation={[0.61, -0.15, 0.39]} />
              <mesh name="Palm_2_3" geometry={nodes.Palm_2_3.geometry} material={materials['World ap']} position={[18.58, -12.3, -4.65]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_30_2" geometry={nodes.Palm_30_2.geometry} material={materials['World ap']} position={[6.66, -16.76, -9.32]} rotation={[0.2, 0.48, -0.11]} />
              <mesh name="Palm_31" geometry={nodes.Palm_31.geometry} material={materials['World ap']} position={[7.09, -24.83, -15.76]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_32" geometry={nodes.Palm_32.geometry} material={materials['World ap']} position={[-2.73, 30.19, 56.84]} rotation={[1.2, -0.11, -0.39]} />
              <mesh name="Palm_33" geometry={nodes.Palm_33.geometry} material={materials['World ap']} position={[-9.88, 31.04, 52.08]} rotation={[1.29, 0.28, -0.41]} />
              <mesh name="Palm_35" geometry={nodes.Palm_35.geometry} material={materials['World ap']} position={[-5.33, 31.26, 53.11]} rotation={[1.51, 0.16, -0.14]} />
              <mesh name="Palm_36" geometry={nodes.Palm_36.geometry} material={materials['World ap']} position={[-16.15, 32.22, 57.59]} rotation={[1.03, 0.09, -0.48]} />
              <mesh name="Palm_37" geometry={nodes.Palm_37.geometry} material={materials['World ap']} position={[-16.05, 29.53, 55.34]} rotation={[0.31, 0.54, -0.78]} />
              <mesh name="Palm_38" geometry={nodes.Palm_38.geometry} material={materials['World ap']} position={[-21.64, 29.25, 54.54]} rotation={[0.6, 0.24, -0.89]} />
              <mesh name="Palm_39" geometry={nodes.Palm_39.geometry} material={materials['World ap']} position={[31.58, 24.81, 90.81]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_3_2" geometry={nodes.Palm_3_2.geometry} material={materials['World ap']} position={[-13.72, -1.12, 0.67]} rotation={[0.24, 0.37, 0.11]} />
              <mesh name="Palm_40" geometry={nodes.Palm_40.geometry} material={materials['World ap']} position={[36.71, 26.56, 91.51]} rotation={[1.43, 0.07, -0.41]} />
              <mesh name="Palm_41" geometry={nodes.Palm_41.geometry} material={materials['World ap']} position={[31.17, 26.2, 87.97]} rotation={[1.29, 0.32, -0.4]} />
              <mesh name="Palm_42" geometry={nodes.Palm_42.geometry} material={materials['World ap']} position={[-2, -24.98, -15.85]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_43" geometry={nodes.Palm_43.geometry} material={materials['World ap']} position={[-4.92, -21.9, -11.27]} rotation={[0.06, 0.29, 0.01]} />
              <mesh name="Palm_44" geometry={nodes.Palm_44.geometry} material={materials['World ap']} position={[0.96, -19.03, -13.48]} rotation={[0.01, -0.18, 0.35]} />
              <mesh name="Palm_45" geometry={nodes.Palm_45.geometry} material={materials['World ap']} position={[10.66, -26.03, -16.24]} rotation={[0.05, -0.18, 0.37]} />
              <mesh name="Palm_46" geometry={nodes.Palm_46.geometry} material={materials['World ap']} position={[3.2, -21.14, -13.69]} rotation={[-0.39, 0.28, 0.57]} />
              <mesh name="Palm_47" geometry={nodes.Palm_47.geometry} material={materials['World ap']} position={[6.85, -30.22, -14.77]} rotation={[-0.33, 0.11, 0.35]} />
              <mesh name="Palm_48" geometry={nodes.Palm_48.geometry} material={materials['World ap']} position={[6.85, 23.16, 36.91]} rotation={[1.52, -0.14, -0.33]} />
              <mesh name="Palm_49" geometry={nodes.Palm_49.geometry} material={materials['World ap']} position={[15.97, 24.78, 46.53]} rotation={[1.63, -0.14, -0.05]} />
              <mesh name="Palm_4_2" geometry={nodes.Palm_4_2.geometry} material={materials['World ap']} position={[-15.94, 3.36, 7.85]} rotation={[1.01, 0.76, -0.27]} />
              <mesh name="Palm_50" geometry={nodes.Palm_50.geometry} material={materials['World ap']} position={[14.38, 23.52, 38.59]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_51" geometry={nodes.Palm_51.geometry} material={materials['World ap']} position={[15.89, 21.9, 32.79]} rotation={[1.52, 0.06, -0.07]} />
              <mesh name="Palm_52" geometry={nodes.Palm_52.geometry} material={materials['World ap']} position={[2.09, 22.27, 29.38]} rotation={[1.32, 0.05, -0.31]} />
              <mesh name="Palm_53" geometry={nodes.Palm_53.geometry} material={materials['World ap']} position={[-6.08, 22.21, 29.79]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_54" geometry={nodes.Palm_54.geometry} material={materials['World ap']} position={[1.22, 23.25, 35.82]} rotation={[1.33, -0.04, 0.56]} />
              <mesh name="Palm_55" geometry={nodes.Palm_55.geometry} material={materials['World ap']} position={[-10.06, 12.41, 19.6]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_56" geometry={nodes.Palm_56.geometry} material={materials['World ap']} position={[30.28, 21.12, 42.5]} rotation={[1.15, -0.2, -0.29]} />
              <mesh name="Palm_57" geometry={nodes.Palm_57.geometry} material={materials['World ap']} position={[-7.98, 31.92, 58.25]} rotation={[1.54, 0.06, -0.82]} />
              <mesh name="Palm_58" geometry={nodes.Palm_58.geometry} material={materials['World ap']} position={[42.36, 22.15, 84.15]} rotation={[1.61, -0.07, -0.39]} />
              <mesh name="Palm_59" geometry={nodes.Palm_59.geometry} material={materials['World ap']} position={[39.86, 20.97, 78.61]} rotation={[1.28, -0.28, -0.43]} />
              <mesh name="Palm_60" geometry={nodes.Palm_60.geometry} material={materials['World ap']} position={[34.94, 23.46, 80.08]} rotation={[1.64, -0.12, -0.79]} />
              <mesh name="Palm_61" geometry={nodes.Palm_61.geometry} material={materials['World ap']} position={[57.99, 12.01, 88.43]} rotation={[1.97, -0.59, -0.18]} />
              <mesh name="Palm_62" geometry={nodes.Palm_62.geometry} material={materials['World ap']} position={[58.58, 10.1, 94.41]} rotation={[2.06, -0.67, -0.11]} />
              <mesh name="Palm_63" geometry={nodes.Palm_63.geometry} material={materials['World ap']} position={[59.77, 6.97, 89.69]} rotation={[2.42, -0.87, 0.18]} />
              <mesh name="Palm_64" geometry={nodes.Palm_64.geometry} material={materials['World ap']} position={[60.03, 7.69, 87.34]} rotation={[1.53, -1.09, -0.82]} />
              <mesh name="Palm_65" geometry={nodes.Palm_65.geometry} material={materials['World ap']} position={[58.57, 11.76, 78.12]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_66" geometry={nodes.Palm_66.geometry} material={materials['World ap']} position={[57.21, 11.84, 84.55]} rotation={[1.19, -1.1, -0.72]} />
              <mesh name="Palm_67" geometry={nodes.Palm_67.geometry} material={materials['World ap']} position={[56.92, 17.16, 80.37]} rotation={[1.62, -0.75, -0.08]} />
              <mesh name="Palm_68" geometry={nodes.Palm_68.geometry} material={materials['World ap']} position={[10.78, 2.32, 3.3]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_69" geometry={nodes.Palm_69.geometry} material={materials['World ap']} position={[5.83, 9.31, 9.37]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_6_2" geometry={nodes.Palm_6_2.geometry} material={materials['World ap']} position={[-18.36, -1.23, 3.4]} rotation={[0.48, 0.5, -0.06]} />
              <mesh name="Palm_70" geometry={nodes.Palm_70.geometry} material={materials['World ap']} position={[-1, -3.06, -0.09]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_71" geometry={nodes.Palm_71.geometry} material={materials['World ap']} position={[14.54, 8.87, 17.29]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_72" geometry={nodes.Palm_72.geometry} material={materials['World ap']} position={[12.31, 17.49, 25.91]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_73" geometry={nodes.Palm_73.geometry} material={materials['World ap']} position={[18.57, 21.78, 32.36]} rotation={[0.82, -0.2, -0.42]} />
              <mesh name="Palm_74" geometry={nodes.Palm_74.geometry} material={materials['World ap']} position={[23.75, 0.25, 12.2]} rotation={[1.2, -0.25, -0.28]} />
              <mesh name="Palm_75" geometry={nodes.Palm_75.geometry} material={materials['World ap']} position={[25.34, -1.19, 6.49]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_76" geometry={nodes.Palm_76.geometry} material={materials['World ap']} position={[22.95, 8.11, 17.72]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_77" geometry={nodes.Palm_77.geometry} material={materials['World ap']} position={[29.07, 15.54, 34.3]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_78" geometry={nodes.Palm_78.geometry} material={materials['World ap']} position={[29.64, 12.36, 30.22]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_79" geometry={nodes.Palm_79.geometry} material={materials['World ap']} position={[19.9, 6.53, 12.73]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_7_2" geometry={nodes.Palm_7_2.geometry} material={materials['World ap']} position={[4.02, 11.45, 13.01]} rotation={[0.89, 0.34, -0.2]} />
              <mesh name="Palm_80" geometry={nodes.Palm_80.geometry} material={materials['World ap']} position={[6.74, -9.38, -4.84]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_83" geometry={nodes.Palm_83.geometry} material={materials['World ap']} position={[10.41, -4.94, -3.71]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_84" geometry={nodes.Palm_84.geometry} material={materials['World ap']} position={[9.41, -10.5, -11.59]} rotation={[0.21, -0.1, -0.15]} />
              <mesh name="Palm_85" geometry={nodes.Palm_85.geometry} material={materials['World ap']} position={[4.64, -12.14, -9.13]} rotation={[0.53, 0.44, -0.1]} />
              <mesh name="Palm_86_2" geometry={nodes.Palm_86_2.geometry} material={materials['World ap']} position={[9.17, -1.26, -0.09]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_88" geometry={nodes.Palm_88.geometry} material={materials['World ap']} position={[3.94, 3.61, 6.53]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_90_2" geometry={nodes.Palm_90_2.geometry} material={materials['World ap']} position={[0.86, -7.12, -3.88]} rotation={[0.48, 0.17, -0.3]} />
              <mesh name="Palm_91_2" geometry={nodes.Palm_91_2.geometry} material={materials['World ap']} position={[-5.18, -4.42, -6.53]} rotation={[0.58, 0.12, 0.44]} />
              <mesh name="Palm_92" geometry={nodes.Palm_92.geometry} material={materials['World ap']} position={[28.35, 1.38, 13.13]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_93" geometry={nodes.Palm_93.geometry} material={materials['World ap']} position={[30.5, -22.16, -7.62]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_94" geometry={nodes.Palm_94.geometry} material={materials['World ap']} position={[31.78, -11.29, 3.43]} rotation={[0.97, -0.49, -0.35]} />
              <mesh name="Palm_95" geometry={nodes.Palm_95.geometry} material={materials['World ap']} position={[29.07, -12.05, 3.5]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_96" geometry={nodes.Palm_96.geometry} material={materials['World ap']} position={[16.82, -8.7, -0.35]} rotation={[0.89, 0.02, 1.03]} />
              <mesh name="Palm_97" geometry={nodes.Palm_97.geometry} material={materials['World ap']} position={[21.61, -20.23, -9.52]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_98" geometry={nodes.Palm_98.geometry} material={materials['World ap']} position={[10.82, -33.15, -15.81]} rotation={[0.4, -0.28, 0.69]} />
              <mesh name="Palm_99" geometry={nodes.Palm_99.geometry} material={materials['World ap']} position={[-13.65, 12.21, 18.63]} rotation={[1.43, 0.48, -0.37]} />
              <mesh name="Palm_9_2" geometry={nodes.Palm_9_2.geometry} material={materials['World ap']} position={[-3.77, 9.62, 11.49]} rotation={[0.89, 0.34, -0.2]} />
            </group>
            <group name="Asia" position={[6.96, -47.91, 32.15]}>
              <mesh name="Palm_100" geometry={nodes.Palm_100.geometry} material={materials['World ap']} position={[-6.14, 123.21, 32.21]} rotation={[0.43, 0.75, -0.08]} />
              <mesh name="Palm_101" geometry={nodes.Palm_101.geometry} material={materials['World ap']} position={[-8.04, 125.27, 37.37]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_102" geometry={nodes.Palm_102.geometry} material={materials['World ap']} position={[-8.88, 125.11, 37.33]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_103" geometry={nodes.Palm_103.geometry} material={materials['World ap']} position={[-7.19, 125.18, 44.55]} rotation={[1.3, -0.6, -0.25]} />
              <mesh name="Palm_104" geometry={nodes.Palm_104.geometry} material={materials['World ap']} position={[-7.67, 125.73, 45.68]} rotation={[1.44, -0.01, -0.21]} />
              <mesh name="Palm_105" geometry={nodes.Palm_105.geometry} material={materials['World ap']} position={[-2.09, 122.07, 29.58]} rotation={[1.32, 0.4, -0.44]} />
              <mesh name="Palm_106" geometry={nodes.Palm_106.geometry} material={materials['World ap']} position={[-2.56, 124.41, 31.17]} rotation={[1.69, 0.21, -0.55]} />
              <mesh name="Palm_107" geometry={nodes.Palm_107.geometry} material={materials['World ap']} position={[-8.85, 124.91, 35.69]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_108" geometry={nodes.Palm_108.geometry} material={materials['World ap']} position={[-13.92, 121.37, 32.88]} rotation={[1.15, 0.47, 0.07]} />
              <mesh name="Palm_109" geometry={nodes.Palm_109.geometry} material={materials['World ap']} position={[44.86, 15.81, -34.66]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_10_4" geometry={nodes.Palm_10_4.geometry} material={materials['World ap']} position={[-22.48, 10.47, -24.86]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_110" geometry={nodes.Palm_110.geometry} material={materials['World ap']} position={[38.25, 18.88, -36.83]} rotation={[-0.23, -0.26, 0.13]} />
              <mesh name="Palm_111" geometry={nodes.Palm_111.geometry} material={materials['World ap']} position={[25.39, 19.94, -38.36]} rotation={[-0.03, 0.13, 0.1]} />
              <mesh name="Palm_112" geometry={nodes.Palm_112.geometry} material={materials['World ap']} position={[32.61, 18.2, -36.51]} rotation={[-0.28, 0.1, 0.12]} />
              <mesh name="Palm_113" geometry={nodes.Palm_113.geometry} material={materials['World ap']} position={[37.33, 7.65, -36.14]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_114" geometry={nodes.Palm_114.geometry} material={materials['World ap']} position={[29.43, 5.41, -37.44]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_115" geometry={nodes.Palm_115.geometry} material={materials['World ap']} position={[21.25, 3.26, -36.36]} rotation={[-0.63, -0.29, 0.02]} />
              <mesh name="Palm_116" geometry={nodes.Palm_116.geometry} material={materials['World ap']} position={[11.3, 16.64, -39.96]} rotation={[-0.41, 0.36, -0.29]} />
              <mesh name="Palm_117" geometry={nodes.Palm_117.geometry} material={materials['World ap']} position={[13.26, 19.18, -39.68]} rotation={[0, -0.18, 0.1]} />
              <mesh name="Palm_11_4" geometry={nodes.Palm_11_4.geometry} material={materials['World ap']} position={[-15.51, 31.82, -27.99]} rotation={[-0.41, 0.68, 0.36]} />
              <mesh name="Palm_12_4" geometry={nodes.Palm_12_4.geometry} material={materials['World ap']} position={[-12.2, 5, -24.81]} rotation={[-0.73, 0.53, 0.26]} />
              <mesh name="Palm_13_4" geometry={nodes.Palm_13_4.geometry} material={materials['World ap']} position={[-0.3, -48.35, 3.75]} rotation={[-1.14, 0.31, 0.39]} />
              <mesh name="Palm_14_4" geometry={nodes.Palm_14_4.geometry} material={materials['World ap']} position={[-0.54, -53.93, 10.49]} rotation={[-1.51, 0.14, 0.47]} />
              <mesh name="Palm_15_4" geometry={nodes.Palm_15_4.geometry} material={materials['World ap']} position={[-12.21, -44.5, 8.02]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_16_4" geometry={nodes.Palm_16_4.geometry} material={materials['World ap']} position={[-0.63, -39.28, 2.18]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_17_4" geometry={nodes.Palm_17_4.geometry} material={materials['World ap']} position={[12.99, -62, 24.82]} rotation={[-1.57, 0.23, 0.48]} />
              <mesh name="Palm_18_4" geometry={nodes.Palm_18_4.geometry} material={materials['World ap']} position={[19.74, -57.38, 24.24]} rotation={[-0.96, 0.1, 0.29]} />
              <mesh name="Palm_19_4" geometry={nodes.Palm_19_4.geometry} material={materials['World ap']} position={[15.82, -61.47, 32.12]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_1_4" geometry={nodes.Palm_1_4.geometry} material={materials['World ap']} position={[-6.96, 35.61, -33.67]} rotation={[-0.25, -0.12, 0.13]} />
              <mesh name="Palm_20_4" geometry={nodes.Palm_20_4.geometry} material={materials['World ap']} position={[-9.94, -49.99, 21.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_21_4" geometry={nodes.Palm_21_4.geometry} material={materials['World ap']} position={[56.8, 94.76, -12.26]} rotation={[0.87, 0.7, -2.68]} />
              <mesh name="Palm_22_4" geometry={nodes.Palm_22_4.geometry} material={materials['World ap']} position={[12.51, -18.38, -22.47]} rotation={[-0.85, 0.4, 0.31]} />
              <mesh name="Palm_23_4" geometry={nodes.Palm_23_4.geometry} material={materials['World ap']} position={[0.97, -28.53, -19.17]} rotation={[-0.79, 0.28, 0.2]} />
              <mesh name="Palm_24_4" geometry={nodes.Palm_24_4.geometry} material={materials['World ap']} position={[-2.8, -16.7, -16.91]} rotation={[-0.53, 0.44, -0.31]} />
              <mesh name="Palm_25_4" geometry={nodes.Palm_25_4.geometry} material={materials['World ap']} position={[-6.63, -25.11, -10.66]} rotation={[-0.69, 0.48, -0.24]} />
              <mesh name="Palm_27_4" geometry={nodes.Palm_27_4.geometry} material={materials['World ap']} position={[-12.31, 56.29, -27.76]} rotation={[0.28, 0.86, -0.64]} />
              <mesh name="Palm_28_4" geometry={nodes.Palm_28_4.geometry} material={materials['World ap']} position={[1.92, 70.39, -29.82]} rotation={[0.37, 0.16, -0.82]} />
              <mesh name="Palm_29_4" geometry={nodes.Palm_29_4.geometry} material={materials['World ap']} position={[-8.31, 68.83, -27.07]} rotation={[0.69, 0.56, -0.91]} />
              <mesh name="Palm_2_5" geometry={nodes.Palm_2_5.geometry} material={materials['World ap']} position={[-12.47, 42, -28.34]} rotation={[0.13, 0.62, 0.06]} />
              <mesh name="Palm_30_4" geometry={nodes.Palm_30_4.geometry} material={materials['World ap']} position={[1.07, 81.17, -24.54]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_31_3" geometry={nodes.Palm_31_3.geometry} material={materials['World ap']} position={[-11.23, 84.41, -22.14]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_32_3" geometry={nodes.Palm_32_3.geometry} material={materials['World ap']} position={[-18.41, -13.05, -20.15]} rotation={[-0.28, 0.36, -0.41]} />
              <mesh name="Palm_33_3" geometry={nodes.Palm_33_3.geometry} material={materials['World ap']} position={[-11.31, -56.66, 29.97]} rotation={[-1.38, 0.53, 0.11]} />
              <mesh name="Palm_34_3" geometry={nodes.Palm_34_3.geometry} material={materials['World ap']} position={[-2.82, -56.4, 22.62]} rotation={[-1.38, 0.53, 0.11]} />
              <mesh name="Palm_35_3" geometry={nodes.Palm_35_3.geometry} material={materials['World ap']} position={[66.35, 81.93, -16.06]} rotation={[0.58, -0.41, -0.11]} />
              <mesh name="Palm_36_3" geometry={nodes.Palm_36_3.geometry} material={materials['World ap']} position={[64.32, 85.82, -14.95]} rotation={[0.21, 0.21, -0.4]} />
              <mesh name="Palm_37_3" geometry={nodes.Palm_37_3.geometry} material={materials['World ap']} position={[66.31, 89.26, -15.02]} rotation={[0.81, -0.06, -0.44]} />
              <mesh name="Palm_38_3" geometry={nodes.Palm_38_3.geometry} material={materials['World ap']} position={[61.91, 90.39, -14.24]} rotation={[0.81, -0.06, -1.88]} />
              <mesh name="Palm_39_3" geometry={nodes.Palm_39_3.geometry} material={materials['World ap']} position={[62.55, 93.74, -11.84]} rotation={[1.25, -0.19, -1.82]} />
              <mesh name="Palm_3_5" geometry={nodes.Palm_3_5.geometry} material={materials['World ap']} position={[-2.4, 59.91, -31.93]} rotation={[0.4, 0.43, -0.76]} />
              <mesh name="Palm_40_3" geometry={nodes.Palm_40_3.geometry} material={materials['World ap']} position={[57.6, 94.04, -13.93]} rotation={[1.25, -0.19, -2.79]} />
              <mesh name="Palm_41_3" geometry={nodes.Palm_41_3.geometry} material={materials['World ap']} position={[-3.62, 91.38, -16.9]} rotation={[0.69, 0.56, -0.12]} />
              <mesh name="Palm_42_3" geometry={nodes.Palm_42_3.geometry} material={materials['World ap']} position={[3.51, 89.14, -18.62]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_43_3" geometry={nodes.Palm_43_3.geometry} material={materials['World ap']} position={[4.95, 77.69, -25.82]} rotation={[0.61, -0.15, -0.1]} />
              <mesh name="Palm_45_3" geometry={nodes.Palm_45_3.geometry} material={materials['World ap']} position={[2.08, 94.42, -14.92]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_46_3" geometry={nodes.Palm_46_3.geometry} material={materials['World ap']} position={[-8.11, 96.53, -11.75]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_47_3" geometry={nodes.Palm_47_3.geometry} material={materials['World ap']} position={[-0.42, 101.36, -9.39]} rotation={[0.64, 0.13, -0.1]} />
              <mesh name="Palm_48_3" geometry={nodes.Palm_48_3.geometry} material={materials['World ap']} position={[-8.56, 62.86, -29.52]} rotation={[0.3, 0.37, 0.09]} />
              <mesh name="Palm_49_3" geometry={nodes.Palm_49_3.geometry} material={materials['World ap']} position={[-13.49, 88.25, -16.26]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_4_4" geometry={nodes.Palm_4_4.geometry} material={materials['World ap']} position={[-6.96, 47.91, -31]} />
              <mesh name="Palm_4_5" geometry={nodes.Palm_4_5.geometry} material={materials['World ap']} position={[4.96, 18.2, -38.01]} rotation={[-0.41, 0.36, -0.29]} />
              <mesh name="Palm_50_3" geometry={nodes.Palm_50_3.geometry} material={materials['World ap']} position={[-2.95, 86.58, -24.93]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_51_3" geometry={nodes.Palm_51_3.geometry} material={materials['World ap']} position={[-11.17, 82.09, -28.5]} rotation={[0.91, 0.36, -0.14]} />
              <mesh name="Palm_52_3" geometry={nodes.Palm_52_3.geometry} material={materials['World ap']} position={[-7.6, -32.18, -9.91]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_53_3" geometry={nodes.Palm_53_3.geometry} material={materials['World ap']} position={[-17.81, -27.9, -10.09]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_54_3" geometry={nodes.Palm_54_3.geometry} material={materials['World ap']} position={[-11.72, -38.75, -0.59]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_55_3" geometry={nodes.Palm_55_3.geometry} material={materials['World ap']} position={[-13.49, -59.24, 40.07]} rotation={[-1.24, 0.37, 0.38]} />
              <mesh name="Palm_59_2" geometry={nodes.Palm_59_2.geometry} material={materials['World ap']} position={[-11.76, -63.36, 43.64]} rotation={[-1.69, 0.26, 0.81]} />
              <mesh name="Palm_5_4" geometry={nodes.Palm_5_4.geometry} material={materials['World ap']} position={[-10.37, 29.78, -35.92]} rotation={[-0.36, 0.51, -0.32]} />
              <mesh name="Palm_62_2" geometry={nodes.Palm_62_2.geometry} material={materials['World ap']} position={[-7.15, -58.58, 30.92]} rotation={[-1.42, -0.09, 0.42]} />
              <mesh name="Palm_63_2" geometry={nodes.Palm_63_2.geometry} material={materials['World ap']} position={[-8.88, -58.84, 35.78]} rotation={[-1.61, 0.26, 0.45]} />
              <mesh name="Palm_65_2" geometry={nodes.Palm_65_2.geometry} material={materials['World ap']} position={[3.65, -57.14, 17.16]} rotation={[-1.53, -0.03, 0.46]} />
              <mesh name="Palm_66_2" geometry={nodes.Palm_66_2.geometry} material={materials['World ap']} position={[5.36, -51.73, 6.74]} rotation={[-1.06, -0.28, 0.34]} />
              <mesh name="Palm_67_2" geometry={nodes.Palm_67_2.geometry} material={materials['World ap']} position={[3.72, -44.84, -0.92]} rotation={[-1.06, -0.28, 0.34]} />
              <mesh name="Palm_68_2" geometry={nodes.Palm_68_2.geometry} material={materials['World ap']} position={[14.46, -13.68, -30.21]} rotation={[-0.85, 0.4, 0.31]} />
              <mesh name="Palm_69_2" geometry={nodes.Palm_69_2.geometry} material={materials['World ap']} position={[13.29, -28.14, -21.49]} rotation={[-0.62, 0.13, 0.27]} />
              <mesh name="Palm_6_4" geometry={nodes.Palm_6_4.geometry} material={materials['World ap']} position={[16.58, 2.77, -37.18]} rotation={[-0.63, -0.07, 0.02]} />
              <mesh name="Palm_78_2" geometry={nodes.Palm_78_2.geometry} material={materials['World ap']} position={[22.4, -68.19, 38.59]} rotation={[-1.48, 0.13, 0.3]} />
              <mesh name="Palm_79_2" geometry={nodes.Palm_79_2.geometry} material={materials['World ap']} position={[26.24, -67.24, 34.23]} rotation={[-1.35, -0.28, 0.31]} />
              <mesh name="Palm_7_4" geometry={nodes.Palm_7_4.geometry} material={materials['World ap']} position={[-0.29, 2.32, -29.92]} rotation={[-0.26, 0.49, 0.05]} />
              <mesh name="Palm_82_4" geometry={nodes.Palm_82_4.geometry} material={materials['World ap']} position={[-13.35, -49.14, 15.75]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_83_3" geometry={nodes.Palm_83_3.geometry} material={materials['World ap']} position={[-16.47, -39.92, 7.12]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_84_2" geometry={nodes.Palm_84_2.geometry} material={materials['World ap']} position={[-6.14, -49.28, 7.92]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_85_3" geometry={nodes.Palm_85_3.geometry} material={materials['World ap']} position={[-16.18, -57.1, 34.7]} rotation={[-1.2, 0.37, 0.32]} />
              <mesh name="Palm_89_4" geometry={nodes.Palm_89_4.geometry} material={materials['World ap']} position={[26.2, -62.36, 27]} rotation={[-1.14, 0.3, 0.15]} />
              <mesh name="Palm_8_4" geometry={nodes.Palm_8_4.geometry} material={materials['World ap']} position={[7.44, -8.64, -32.8]} rotation={[-0.7, 0.44, 0.25]} />
              <mesh name="Palm_90_4" geometry={nodes.Palm_90_4.geometry} material={materials['World ap']} position={[23.02, -62.09, 28.57]} rotation={[-1.71, 0.18, 0.28]} />
              <mesh name="Palm_91_4" geometry={nodes.Palm_91_4.geometry} material={materials['World ap']} position={[41.93, -64.12, 39.28]} rotation={[-1.48, 0.13, 0.3]} />
              <mesh name="Palm_92_2" geometry={nodes.Palm_92_2.geometry} material={materials['World ap']} position={[46.45, -65.7, 43.01]} rotation={[-1.53, -0.41, 0.53]} />
              <mesh name="Palm_93_2" geometry={nodes.Palm_93_2.geometry} material={materials['World ap']} position={[42.95, -66.69, 42.42]} rotation={[-1.99, -0.07, 0.3]} />
              <mesh name="Palm_94_2" geometry={nodes.Palm_94_2.geometry} material={materials['World ap']} position={[-14.09, 115.96, 25.68]} rotation={[0.98, 0.09, -0.14]} />
              <mesh name="Palm_95_2" geometry={nodes.Palm_95_2.geometry} material={materials['World ap']} position={[-5.65, 123.65, 31.65]} rotation={[0.38, 0.15, -0.06]} />
              <mesh name="Palm_96_2" geometry={nodes.Palm_96_2.geometry} material={materials['World ap']} position={[-9.15, 121.5, 42.91]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_97_2" geometry={nodes.Palm_97_2.geometry} material={materials['World ap']} position={[-13.76, 119.68, 28.38]} rotation={[1.26, 0.05, -0.15]} />
              <mesh name="Palm_98_2" geometry={nodes.Palm_98_2.geometry} material={materials['World ap']} position={[-1.95, 127.94, 53.49]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_99_2" geometry={nodes.Palm_99_2.geometry} material={materials['World ap']} position={[2.88, 131.09, 57.25]} rotation={[1.58, -0.01, -0.16]} />
              <mesh name="Palm_9_4" geometry={nodes.Palm_9_4.geometry} material={materials['World ap']} position={[-0.01, -3.81, -27.17]} rotation={[-0.7, 0.44, 0.25]} />
            </group>
            <group name="Australia" position={[72.22, -105.13, 60.74]} rotation={[-2.39, 0, -0.13]}>
              <mesh name="Palm" geometry={nodes.Palm.geometry} material={materials['World ap']} position={[4.06, -4.7, -8.2]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_1" geometry={nodes.Palm_1.geometry} material={materials['World ap']} position={[35.19, -8.62, 19.61]} rotation={[1.52, -0.91, -3.09]} />
              <mesh name="Palm_10" geometry={nodes.Palm_10.geometry} material={materials['World ap']} position={[34.25, -8.73, 31.27]} rotation={[1.88, -0.79, -2.79]} />
              <mesh name="Palm_11" geometry={nodes.Palm_11.geometry} material={materials['World ap']} position={[11.38, 4.91, 34.49]} rotation={[2.04, -0.19, -2.25]} />
              <mesh name="Palm_12" geometry={nodes.Palm_12.geometry} material={materials['World ap']} position={[8.79, 4, 37.35]} rotation={[2.4, -0.27, -2.19]} />
              <mesh name="Palm_13" geometry={nodes.Palm_13.geometry} material={materials['World ap']} position={[20.71, -1.13, 36.98]} rotation={[1.66, -0.55, -2.4]} />
              <mesh name="Palm_14" geometry={nodes.Palm_14.geometry} material={materials['World ap']} position={[16.71, 2.07, 37.35]} rotation={[1.9, -0.21, -2.62]} />
              <mesh name="Palm_15" geometry={nodes.Palm_15.geometry} material={materials['World ap']} position={[15.22, 3.64, 32.1]} rotation={[1.64, -0.38, -1.9]} />
              <mesh name="Palm_16" geometry={nodes.Palm_16.geometry} material={materials['World ap']} position={[20.26, 1.91, 31.57]} rotation={[2.04, -0.53, -2.14]} />
              <mesh name="Palm_17" geometry={nodes.Palm_17.geometry} material={materials['World ap']} position={[27.49, -12.77, -4.41]} rotation={[0.69, -0.72, 2.56]} />
              <mesh name="Palm_18" geometry={nodes.Palm_18.geometry} material={materials['World ap']} position={[21.85, -10.79, -7.21]} rotation={[0.9, -0.58, 2.43]} />
              <mesh name="Palm_19" geometry={nodes.Palm_19.geometry} material={materials['World ap']} position={[18.87, -11.37, -8.59]} rotation={[0.44, -0.18, 0.29]} />
              <mesh name="Palm_2" geometry={nodes.Palm_2.geometry} material={materials['World ap']} position={[35.81, -10.87, 23.71]} rotation={[1.98, -1.2, -2.72]} />
              <mesh name="Palm_20" geometry={nodes.Palm_20.geometry} material={materials['World ap']} position={[4.18, -7.13, -13.04]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_21" geometry={nodes.Palm_21.geometry} material={materials['World ap']} position={[6.29, -9.68, -11.9]} rotation={[0.17, -0.28, 0.23]} />
              <mesh name="Palm_22" geometry={nodes.Palm_22.geometry} material={materials['World ap']} position={[-6.87, 7.54, 11.55]} rotation={[0.97, -0.36, -0.02]} />
              <mesh name="Palm_23" geometry={nodes.Palm_23.geometry} material={materials['World ap']} position={[-7.19, 6.73, 15.18]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_24" geometry={nodes.Palm_24.geometry} material={materials['World ap']} position={[-4.24, 7.45, 19.8]} rotation={[1.57, -0.02, -0.01]} />
              <mesh name="Palm_25" geometry={nodes.Palm_25.geometry} material={materials['World ap']} position={[-7.28, 7.97, 25.44]} rotation={[1.57, 0.26, -0.01]} />
              <mesh name="Palm_26" geometry={nodes.Palm_26.geometry} material={materials['World ap']} position={[-5.35, 7.76, 30.4]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_27" geometry={nodes.Palm_27.geometry} material={materials['World ap']} position={[-6.1, 8.93, 24]} rotation={[1.56, -0.28, -0.01]} />
              <mesh name="Palm_28" geometry={nodes.Palm_28.geometry} material={materials['World ap']} position={[-1.62, 2.81, 5.98]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_29" geometry={nodes.Palm_29.geometry} material={materials['World ap']} position={[22.1, -7.33, -1.23]} rotation={[1.19, -0.22, 2.55]} />
              <mesh name="Palm_3" geometry={nodes.Palm_3.geometry} material={materials['World ap']} position={[-8.74, 0.74, -5.33]} rotation={[0.46, 0.13, 0.26]} />
              <mesh name="Palm_30" geometry={nodes.Palm_30.geometry} material={materials['World ap']} position={[26.34, -8.23, 0.57]} rotation={[1.36, -0.33, 2.59]} />
              <mesh name="Palm_4" geometry={nodes.Palm_4.geometry} material={materials['World ap']} position={[35.62, -13.87, 8.67]} rotation={[1.5, -0.89, -3.12]} />
              <mesh name="Palm_5" geometry={nodes.Palm_5.geometry} material={materials['World ap']} position={[23.69, -11.11, -1.41]} rotation={[0.9, -0.58, 2.43]} />
              <mesh name="Palm_6" geometry={nodes.Palm_6.geometry} material={materials['World ap']} position={[36.18, -12.8, 15.81]} rotation={[0.99, -0.69, -3.02]} />
              <mesh name="Palm_7" geometry={nodes.Palm_7.geometry} material={materials['World ap']} position={[37.86, -16.43, 12.26]} rotation={[0.97, -1.08, 2.84]} />
              <mesh name="Palm_8" geometry={nodes.Palm_8.geometry} material={materials['World ap']} position={[36.21, -8.83, 27.71]} rotation={[1.53, -0.69, -2.62]} />
              <mesh name="Palm_81" geometry={nodes.Palm_81.geometry} material={materials['World ap']} position={[-1.87, 0, -4.94]} rotation={[0.67, -0.03, 0.29]} />
              <mesh name="Palm_82" geometry={nodes.Palm_82.geometry} material={materials['World ap']} position={[-3.2, -4.07, -6.92]} rotation={[0.43, 0.24, 0.29]} />
              <mesh name="Palm_86" geometry={nodes.Palm_86.geometry} material={materials['World ap']} position={[-8.89, 4.01, 4.87]} rotation={[1.16, 0.09, 0.28]} />
              <mesh name="Palm_87" geometry={nodes.Palm_87.geometry} material={materials['World ap']} position={[-11.1, 5.15, 10.18]} rotation={[1.22, -0.11, 0.01]} />
              <mesh name="Palm_89" geometry={nodes.Palm_89.geometry} material={materials['World ap']} position={[-6.53, 1.42, -1.91]} rotation={[1.1, -0.07, 0.78]} />
              <mesh name="Palm_9" geometry={nodes.Palm_9.geometry} material={materials['World ap']} position={[39.65, -13.61, 17.87]} rotation={[1.87, -1.1, -2.84]} />
              <mesh name="Palm_90" geometry={nodes.Palm_90.geometry} material={materials['World ap']} position={[-11.1, 3.17, 0.26]} rotation={[0.86, 0.24, 0.38]} />
              <mesh name="Palm_91" geometry={nodes.Palm_91.geometry} material={materials['World ap']} position={[-0.99, -6.13, -10.27]} rotation={[0.71, -0.25, 0.76]} />
            </group>
          </group>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['World ap']} position={[-0.96, 0.57, -9.25]} rotation={[0.06, 0.1, -0.01]}>
              <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap']} />
              <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap']} position={[1.41, 0.01, 9.47]} rotation={[-0.06, -0.1, 0]} />
              <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap']} position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]} />
              <group name="water" position={[0, 0, 9.32]} rotation={[-0.06, -0.1, 0]}>
                <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials.Water} position={[0, -0.41, 0]} />
              </group>
            </mesh>
          </group>
          <group name="Ships" position={[-9.84, -1.38, 9.08]}>
            <mesh name="Containers_Ship" geometry={nodes.Containers_Ship.geometry} material={materials['World ap']} position={[67.62, -6.79, -83.42]} rotation={[-0.24, -0.86, 1.7]} />
            <mesh name="Containers_Ship_1" geometry={nodes.Containers_Ship_1.geometry} material={materials['World ap']} position={[-54.71, -74.43, 18.18]} rotation={[-2.02, 0.61, 1.15]} />
            <mesh name="Containers_Ship_2" geometry={nodes.Containers_Ship_2.geometry} material={materials['World ap']} position={[72.58, -16.17, 74.96]} rotation={[-2.86, -0.67, 2.59]} />
            <mesh name="Containers_Ship_3" geometry={nodes.Containers_Ship_3.geometry} material={materials['World ap']} position={[-70.11, -42.03, -52.52]} rotation={[-0.79, 0.8, -0.6]} />
            <mesh name="Containers_Ship_4" geometry={nodes.Containers_Ship_4.geometry} material={materials['World ap']} position={[-43.44, 40.48, 80.68]} rotation={[2.53, 0.42, 2.25]} />
            <mesh name="Ship" geometry={nodes.Ship.geometry} material={materials['World ap']} position={[-1.2, 76.33, 69.27]} rotation={[2.31, 0.07, 1.55]} />
            <mesh name="Ship_1" geometry={nodes.Ship_1.geometry} material={materials['World ap']} position={[52.31, -72.01, 48.86]} rotation={[-2.19, -0.57, 0.73]} />
            <mesh name="Ship_2" geometry={nodes.Ship_2.geometry} material={materials['World ap']} position={[58.67, 24.12, -85.82]} rotation={[0.09, -0.6, -1.98]} />
            <mesh name="Ship_6" geometry={nodes.Ship_6.geometry} material={materials['World ap']} position={[78.75, 10.27, -71.64]} rotation={[0.03, -0.88, 1.68]} />
            <mesh name="Yacht" geometry={nodes.Yacht.geometry} material={materials['World ap']} position={[-90.89, 19.27, 23.38]} rotation={[-2.82, 1.34, -1.51]} />
            <mesh name="Yacht_1" geometry={nodes.Yacht_1.geometry} material={materials['World ap']} position={[-45.92, -83, 2.88]} rotation={[-1.62, 0.45, -2.75]} />
            <mesh name="Yacht_2" geometry={nodes.Yacht_2.geometry} material={materials['World ap']} position={[-46.58, 54.3, -76.94]} rotation={[0.64, 0.68, 1.04]} />
          </group>
          <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['World ap']} position={[-1.39, 8.5, 7.63]} rotation={[1.88, 0, 0]} />
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['World ap']} position={[-3.9, 2.73, -1.73]} rotation={[1.19, 0.47, 1.87]} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['World ap']} position={[-3.9, 2.73, -1.73]} rotation={[2.88, -1.27, -Math.PI]} />
          <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials['World ap']} position={[0.39, 3.83, 9.94]} rotation={[0.7, -1.09, Math.PI]} scale={[1.01, 1, 1]} />
        </group>
        <group name="Rig002" position={[-0.09, 0.16, 1.03]} rotation={[-0.45, 1.22, 2.2]} scale={0.05}>
          <primitive object={nodes.root_21} />
          <skinnedMesh name="Hare_LOD0002" geometry={nodes.Hare_LOD0002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD0002.skeleton} morphTargetDictionary={nodes.Hare_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1002" geometry={nodes.Hare_LOD1002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD1002.skeleton} morphTargetDictionary={nodes.Hare_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2002" geometry={nodes.Hare_LOD2002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD2002.skeleton} morphTargetDictionary={nodes.Hare_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3002" geometry={nodes.Hare_LOD3002.geometry} material={materials['M_Hare.002']} skeleton={nodes.Hare_LOD3002.skeleton} morphTargetDictionary={nodes.Hare_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig004" position={[-1.06, 0.02, -0.26]} rotation={[-0.22, -0.47, 0.71]} scale={0.05}>
          <primitive object={nodes.root} />
          <skinnedMesh name="Hare" geometry={nodes.Hare.geometry} material={materials['M_Hare.003']} skeleton={nodes.Hare.skeleton} morphTargetDictionary={nodes.Hare.morphTargetDictionary} morphTargetInfluences={nodes.Hare.morphTargetInfluences} />
        </group>
        <group name="Rig001" position={[-1.09, -0.01, -0.26]} rotation={[-0.17, -0.47, 0.89]} scale={0.03}>
          <primitive object={nodes.root_1} />
          <skinnedMesh name="Hare001" geometry={nodes.Hare001.geometry} material={materials['M_Hare.001']} skeleton={nodes.Hare001.skeleton} morphTargetDictionary={nodes.Hare001.morphTargetDictionary} morphTargetInfluences={nodes.Hare001.morphTargetInfluences} />
        </group>
        <group name="Rig003" position={[-0.56, 0.12, -0.9]} rotation={[-0.86, -0.58, 0.22]} scale={0.05}>
          <primitive object={nodes.root_22} />
          <skinnedMesh name="Hare_LOD0001" geometry={nodes.Hare_LOD0001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD0001.skeleton} morphTargetDictionary={nodes.Hare_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1001" geometry={nodes.Hare_LOD1001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD1001.skeleton} morphTargetDictionary={nodes.Hare_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2001" geometry={nodes.Hare_LOD2001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD2001.skeleton} morphTargetDictionary={nodes.Hare_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3001" geometry={nodes.Hare_LOD3001.geometry} material={materials['M_Hare.004']} skeleton={nodes.Hare_LOD3001.skeleton} morphTargetDictionary={nodes.Hare_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig007" position={[-1.09, -0.23, 0.12]} rotation={[0.37, 0.28, 1.3]} scale={0.03}>
          <primitive object={nodes.root_2} />
          <skinnedMesh name="Puffin" geometry={nodes.Puffin.geometry} material={materials.M_Puffin} skeleton={nodes.Puffin.skeleton} morphTargetDictionary={nodes.Puffin.morphTargetDictionary} morphTargetInfluences={nodes.Puffin.morphTargetInfluences} />
        </group>
        <group name="Rig008" position={[-1.11, -0.25, 0.09]} rotation={[-2.84, 0.02, 1.7]} scale={0.03}>
          <primitive object={nodes.root_3} />
          <skinnedMesh name="Puffin001" geometry={nodes.Puffin001.geometry} material={materials['M_Puffin.001']} skeleton={nodes.Puffin001.skeleton} morphTargetDictionary={nodes.Puffin001.morphTargetDictionary} morphTargetInfluences={nodes.Puffin001.morphTargetInfluences} />
        </group>
        <group name="Rig009" position={[-1.11, -0.23, 0.05]} rotation={[-0.77, 0.1, 1.81]} scale={0.03}>
          <primitive object={nodes.root_4} />
          <skinnedMesh name="Puffin002" geometry={nodes.Puffin002.geometry} material={materials['M_Puffin.002']} skeleton={nodes.Puffin002.skeleton} morphTargetDictionary={nodes.Puffin002.morphTargetDictionary} morphTargetInfluences={nodes.Puffin002.morphTargetInfluences} />
        </group>
        <group name="Rig010" position={[-1.07, -0.18, 0.15]} rotation={[2.71, 0.25, 1.71]} scale={0.04}>
          <primitive object={nodes.root_23} />
          <skinnedMesh name="Puffin_LOD0" geometry={nodes.Puffin_LOD0.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD0.skeleton} morphTargetDictionary={nodes.Puffin_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD1" geometry={nodes.Puffin_LOD1.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD1.skeleton} morphTargetDictionary={nodes.Puffin_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD2" geometry={nodes.Puffin_LOD2.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD2.skeleton} morphTargetDictionary={nodes.Puffin_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Puffin_LOD3" geometry={nodes.Puffin_LOD3.geometry} material={materials['M_Puffin.003']} skeleton={nodes.Puffin_LOD3.skeleton} morphTargetDictionary={nodes.Puffin_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Puffin_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig" position={[-0.9, 0.29, 0.43]} rotation={[0, 0, 0.93]} scale={0.05}>
          <primitive object={nodes.root_24} />
          <skinnedMesh name="Hare_LOD0" geometry={nodes.Hare_LOD0.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD0.skeleton} morphTargetDictionary={nodes.Hare_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1" geometry={nodes.Hare_LOD1.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD1.skeleton} morphTargetDictionary={nodes.Hare_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2" geometry={nodes.Hare_LOD2.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD2.skeleton} morphTargetDictionary={nodes.Hare_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3" geometry={nodes.Hare_LOD3.geometry} material={materials.M_Hare} skeleton={nodes.Hare_LOD3.skeleton} morphTargetDictionary={nodes.Hare_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig013" position={[0.11, 0.3, 1.1]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_25} />
          <skinnedMesh name="Goat_LOD0" geometry={nodes.Goat_LOD0.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD0.skeleton} morphTargetDictionary={nodes.Goat_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1" geometry={nodes.Goat_LOD1.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD1.skeleton} morphTargetDictionary={nodes.Goat_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2" geometry={nodes.Goat_LOD2.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD2.skeleton} morphTargetDictionary={nodes.Goat_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3" geometry={nodes.Goat_LOD3.geometry} material={materials.M_Goat} skeleton={nodes.Goat_LOD3.skeleton} morphTargetDictionary={nodes.Goat_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig020" position={[-0.55, -0.45, -0.73]} rotation={[-2.71, 0.52, 0.85]} scale={0.1}>
          <primitive object={nodes.root_26} />
          <skinnedMesh name="Marten_LOD0" geometry={nodes.Marten_LOD0.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD0.skeleton} morphTargetDictionary={nodes.Marten_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD1" geometry={nodes.Marten_LOD1.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD1.skeleton} morphTargetDictionary={nodes.Marten_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD2" geometry={nodes.Marten_LOD2.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD2.skeleton} morphTargetDictionary={nodes.Marten_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD3" geometry={nodes.Marten_LOD3.geometry} material={materials.M_Marten} skeleton={nodes.Marten_LOD3.skeleton} morphTargetDictionary={nodes.Marten_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig012" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_5} />
          <skinnedMesh name="Bull" geometry={nodes.Bull.geometry} material={materials.M_Bull} skeleton={nodes.Bull.skeleton} morphTargetDictionary={nodes.Bull.morphTargetDictionary} morphTargetInfluences={nodes.Bull.morphTargetInfluences} />
        </group>
        <group name="Rig005" position={[0.17, 0.27, -0.97]} rotation={[-0.89, 1.24, -0.4]} scale={0.09}>
          <primitive object={nodes.root_6} />
          <skinnedMesh name="Bull001" geometry={nodes.Bull001.geometry} material={materials['M_Bull.001']} skeleton={nodes.Bull001.skeleton} morphTargetDictionary={nodes.Bull001.morphTargetDictionary} morphTargetInfluences={nodes.Bull001.morphTargetInfluences} />
        </group>
        <group name="Rig006" position={[-1.06, -0.02, 0.15]} rotation={[2.8, -0.51, 1.88]} scale={0.07}>
          <primitive object={nodes.root_27} />
          <skinnedMesh name="Cougar_LOD0" geometry={nodes.Cougar_LOD0.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD0.skeleton} morphTargetDictionary={nodes.Cougar_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD1" geometry={nodes.Cougar_LOD1.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD1.skeleton} morphTargetDictionary={nodes.Cougar_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD2" geometry={nodes.Cougar_LOD2.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD2.skeleton} morphTargetDictionary={nodes.Cougar_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD3" geometry={nodes.Cougar_LOD3.geometry} material={materials.M_Cougar} skeleton={nodes.Cougar_LOD3.skeleton} morphTargetDictionary={nodes.Cougar_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig011" position={[-0.75, 0.57, -0.05]} rotation={[-0.51, -0.19, 0.71]} scale={0.1}>
          <primitive object={nodes.root_7} />
          <skinnedMesh name="Beluga" geometry={nodes.Beluga.geometry} material={materials['M_Beluga.001']} skeleton={nodes.Beluga.skeleton} morphTargetDictionary={nodes.Beluga.morphTargetDictionary} morphTargetInfluences={nodes.Beluga.morphTargetInfluences} />
        </group>
        <group name="Rig014" position={[-0.83, 0.05, 0.59]} rotation={[-2.32, -0.35, 1.88]} scale={0.1}>
          <primitive object={nodes.root_8} />
          <skinnedMesh name="Llama" geometry={nodes.Llama.geometry} material={materials.M_Llama} skeleton={nodes.Llama.skeleton} morphTargetDictionary={nodes.Llama.morphTargetDictionary} morphTargetInfluences={nodes.Llama.morphTargetInfluences} />
        </group>
        <group name="Rig038" position={[-0.31, 0.19, 1]} rotation={[1.39, 0.15, 0.18]} scale={0.05}>
          <primitive object={nodes.root_28} />
          <skinnedMesh name="Jackal_LOD0" geometry={nodes.Jackal_LOD0.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD0.skeleton} morphTargetDictionary={nodes.Jackal_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1" geometry={nodes.Jackal_LOD1.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD1.skeleton} morphTargetDictionary={nodes.Jackal_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2" geometry={nodes.Jackal_LOD2.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD2.skeleton} morphTargetDictionary={nodes.Jackal_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3" geometry={nodes.Jackal_LOD3.geometry} material={materials.M_Jackal} skeleton={nodes.Jackal_LOD3.skeleton} morphTargetDictionary={nodes.Jackal_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig015" position={[-0.4, 0.2, 0.95]} rotation={[1.3, 0.93, 0.37]} scale={0.05}>
          <primitive object={nodes.root_29} />
          <skinnedMesh name="Jackal_LOD0001" geometry={nodes.Jackal_LOD0001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD0001.skeleton} morphTargetDictionary={nodes.Jackal_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD1001" geometry={nodes.Jackal_LOD1001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD1001.skeleton} morphTargetDictionary={nodes.Jackal_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD2001" geometry={nodes.Jackal_LOD2001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD2001.skeleton} morphTargetDictionary={nodes.Jackal_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Jackal_LOD3001" geometry={nodes.Jackal_LOD3001.geometry} material={materials['M_Jackal.001']} skeleton={nodes.Jackal_LOD3001.skeleton} morphTargetDictionary={nodes.Jackal_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Jackal_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig018" position={[0.75, 0.37, 0.66]} rotation={[1.68, 0.62, -1.26]} scale={0.1}>
          <primitive object={nodes.root_9} />
          <skinnedMesh name="Badger001" geometry={nodes.Badger001.geometry} material={materials['M_Badger.001']} skeleton={nodes.Badger001.skeleton} morphTargetDictionary={nodes.Badger001.morphTargetDictionary} morphTargetInfluences={nodes.Badger001.morphTargetInfluences} />
        </group>
        <group name="Rig021" position={[-1.04, -0.44, 0.04]} rotation={[1.66, 0.38, 1.33]} scale={0.05}>
          <primitive object={nodes.root_30} />
          <skinnedMesh name="Hedgehog_LOD0" geometry={nodes.Hedgehog_LOD0.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD0.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD1" geometry={nodes.Hedgehog_LOD1.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD1.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD2" geometry={nodes.Hedgehog_LOD2.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD2.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Hedgehog_LOD3" geometry={nodes.Hedgehog_LOD3.geometry} material={materials.M_Hedgehog} skeleton={nodes.Hedgehog_LOD3.skeleton} morphTargetDictionary={nodes.Hedgehog_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig022" position={[-0.97, -0.5, 0.01]} rotation={[-0.22, -0.74, 2.43]} scale={0.05}>
          <primitive object={nodes.root_10} />
          <skinnedMesh name="Hedgehog" geometry={nodes.Hedgehog.geometry} material={materials['M_Hedgehog.001']} skeleton={nodes.Hedgehog.skeleton} morphTargetDictionary={nodes.Hedgehog.morphTargetDictionary} morphTargetInfluences={nodes.Hedgehog.morphTargetInfluences} />
        </group>
        <group name="Rig028" position={[-0.71, -0.43, 0.54]} rotation={[0.2, 0.2, 1.55]} scale={0.03}>
          <primitive object={nodes.root_11} />
          <skinnedMesh name="Beluga002" geometry={nodes.Beluga002.geometry} material={materials['M_Beluga.006']} skeleton={nodes.Beluga002.skeleton} morphTargetDictionary={nodes.Beluga002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga002.morphTargetInfluences} />
        </group>
        <group name="Rig029" position={[-0.76, -0.39, 0.48]} rotation={[-0.24, 0.08, 1.55]} scale={0.03}>
          <primitive object={nodes.root_12} />
          <skinnedMesh name="Beluga003" geometry={nodes.Beluga003.geometry} material={materials['M_Beluga.007']} skeleton={nodes.Beluga003.skeleton} morphTargetDictionary={nodes.Beluga003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga003.morphTargetInfluences} />
        </group>
        <group name="Rig030" position={[-0.65, -0.39, 0.62]} rotation={[0.4, 0.66, 1.45]} scale={0.04}>
          <primitive object={nodes.root_31} />
          <skinnedMesh name="Beluga_LOD0003" geometry={nodes.Beluga_LOD0003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD0003.skeleton} morphTargetDictionary={nodes.Beluga_LOD0003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1003" geometry={nodes.Beluga_LOD1003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD1003.skeleton} morphTargetDictionary={nodes.Beluga_LOD1003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2003" geometry={nodes.Beluga_LOD2003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD2003.skeleton} morphTargetDictionary={nodes.Beluga_LOD2003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2003.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3003" geometry={nodes.Beluga_LOD3003.geometry} material={materials['M_Beluga.008']} skeleton={nodes.Beluga_LOD3003.skeleton} morphTargetDictionary={nodes.Beluga_LOD3003.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3003.morphTargetInfluences} />
        </group>
        <group name="Rig033" position={[-1.16, -0.06, -0.03]} rotation={[0.97, -0.05, 1.25]} scale={0.08}>
          <primitive object={nodes.root_32} />
          <skinnedMesh name="Antelope_LOD0" geometry={nodes.Antelope_LOD0.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD0.skeleton} morphTargetDictionary={nodes.Antelope_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD1" geometry={nodes.Antelope_LOD1.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD1.skeleton} morphTargetDictionary={nodes.Antelope_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD2" geometry={nodes.Antelope_LOD2.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD2.skeleton} morphTargetDictionary={nodes.Antelope_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD3" geometry={nodes.Antelope_LOD3.geometry} material={materials.M_Antelope} skeleton={nodes.Antelope_LOD3.skeleton} morphTargetDictionary={nodes.Antelope_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig043" position={[-0.61, 0.29, -0.79]} rotation={[-1.59, 0.46, 0.47]} scale={0.07}>
          <primitive object={nodes.root_33} />
          <skinnedMesh name="Bison_LOD0" geometry={nodes.Bison_LOD0.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD0.skeleton} morphTargetDictionary={nodes.Bison_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD1" geometry={nodes.Bison_LOD1.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD1.skeleton} morphTargetDictionary={nodes.Bison_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD2" geometry={nodes.Bison_LOD2.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD2.skeleton} morphTargetDictionary={nodes.Bison_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Bison_LOD3" geometry={nodes.Bison_LOD3.geometry} material={materials.M_Bison} skeleton={nodes.Bison_LOD3.skeleton} morphTargetDictionary={nodes.Bison_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Bison_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig025" position={[1.01, 0.04, -0.16]} rotation={[0, 0, -0.93]} scale={0.03}>
          <primitive object={nodes.root_34} />
          <skinnedMesh name="Beluga_LOD0001" geometry={nodes.Beluga_LOD0001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD0001.skeleton} morphTargetDictionary={nodes.Beluga_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1001" geometry={nodes.Beluga_LOD1001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD1001.skeleton} morphTargetDictionary={nodes.Beluga_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2001" geometry={nodes.Beluga_LOD2001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD2001.skeleton} morphTargetDictionary={nodes.Beluga_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3001" geometry={nodes.Beluga_LOD3001.geometry} material={materials['M_Beluga.003']} skeleton={nodes.Beluga_LOD3001.skeleton} morphTargetDictionary={nodes.Beluga_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig024" position={[0.98, 0, 0]} rotation={[0, 0, -1.08]} scale={0.05}>
          <primitive object={nodes.root_35} />
          <skinnedMesh name="Beluga_LOD0" geometry={nodes.Beluga_LOD0.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD0.skeleton} morphTargetDictionary={nodes.Beluga_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1" geometry={nodes.Beluga_LOD1.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD1.skeleton} morphTargetDictionary={nodes.Beluga_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2" geometry={nodes.Beluga_LOD2.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD2.skeleton} morphTargetDictionary={nodes.Beluga_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3" geometry={nodes.Beluga_LOD3.geometry} material={materials['M_Beluga.002']} skeleton={nodes.Beluga_LOD3.skeleton} morphTargetDictionary={nodes.Beluga_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig026" position={[0.98, 0.08, -0.08]} rotation={[0, 0, -1.22]} scale={0.04}>
          <primitive object={nodes.root_36} />
          <skinnedMesh name="Beluga_LOD0002" geometry={nodes.Beluga_LOD0002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD0002.skeleton} morphTargetDictionary={nodes.Beluga_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD1002" geometry={nodes.Beluga_LOD1002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD1002.skeleton} morphTargetDictionary={nodes.Beluga_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD2002" geometry={nodes.Beluga_LOD2002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD2002.skeleton} morphTargetDictionary={nodes.Beluga_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Beluga_LOD3002" geometry={nodes.Beluga_LOD3002.geometry} material={materials['M_Beluga.004']} skeleton={nodes.Beluga_LOD3002.skeleton} morphTargetDictionary={nodes.Beluga_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Beluga_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig027" position={[0.98, -0.01, -0.17]} rotation={[0, 0, -0.93]} scale={0.03}>
          <primitive object={nodes.root_13} />
          <skinnedMesh name="Beluga001" geometry={nodes.Beluga001.geometry} material={materials['M_Beluga.005']} skeleton={nodes.Beluga001.skeleton} morphTargetDictionary={nodes.Beluga001.morphTargetDictionary} morphTargetInfluences={nodes.Beluga001.morphTargetInfluences} />
        </group>
        <group name="Rig016" position={[0.38, 0.18, 1.01]} rotation={[-0.22, -0.58, -1.56]} scale={0.07}>
          <primitive object={nodes.root_14} />
          <skinnedMesh name="Cougar" geometry={nodes.Cougar.geometry} material={materials['M_Cougar.001']} skeleton={nodes.Cougar.skeleton} morphTargetDictionary={nodes.Cougar.morphTargetDictionary} morphTargetInfluences={nodes.Cougar.morphTargetInfluences} />
        </group>
        <group name="Rig017" position={[-0.05, -0.07, 1.1]} rotation={[-0.29, -1.39, -1.92]} scale={0.1}>
          <primitive object={nodes.root_15} />
          <skinnedMesh name="Badger" geometry={nodes.Badger.geometry} material={materials.M_Badger} skeleton={nodes.Badger.skeleton} morphTargetDictionary={nodes.Badger.morphTargetDictionary} morphTargetInfluences={nodes.Badger.morphTargetInfluences} />
        </group>
        <group name="Rig034" position={[-0.84, 0.4, 0.47]} rotation={[-2.43, -0.08, 2.16]} scale={0.07}>
          <primitive object={nodes.root_37} />
          <skinnedMesh name="Baboon_LOD0" geometry={nodes.Baboon_LOD0.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD0.skeleton} morphTargetDictionary={nodes.Baboon_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD1" geometry={nodes.Baboon_LOD1.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD1.skeleton} morphTargetDictionary={nodes.Baboon_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD2" geometry={nodes.Baboon_LOD2.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD2.skeleton} morphTargetDictionary={nodes.Baboon_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD3" geometry={nodes.Baboon_LOD3.geometry} material={materials.M_Baboon} skeleton={nodes.Baboon_LOD3.skeleton} morphTargetDictionary={nodes.Baboon_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig037" position={[-0.33, -0.63, -0.75]} rotation={[-1.95, 0.06, 0.11]} scale={0.08}>
          <primitive object={nodes.root_38} />
          <skinnedMesh name="Baboon_LOD0001" geometry={nodes.Baboon_LOD0001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD0001.skeleton} morphTargetDictionary={nodes.Baboon_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD1001" geometry={nodes.Baboon_LOD1001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD1001.skeleton} morphTargetDictionary={nodes.Baboon_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD2001" geometry={nodes.Baboon_LOD2001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD2001.skeleton} morphTargetDictionary={nodes.Baboon_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Baboon_LOD3001" geometry={nodes.Baboon_LOD3001.geometry} material={materials['M_Baboon.001']} skeleton={nodes.Baboon_LOD3001.skeleton} morphTargetDictionary={nodes.Baboon_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Baboon_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig046" position={[-0.69, -0.42, -0.52]} rotation={[-2.38, -0.01, 0.68]} scale={0.06}>
          <primitive object={nodes.root_39} />
          <skinnedMesh name="Narwhal_LOD0002" geometry={nodes.Narwhal_LOD0002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD0002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD1002" geometry={nodes.Narwhal_LOD1002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD1002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD2002" geometry={nodes.Narwhal_LOD2002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD2002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD3002" geometry={nodes.Narwhal_LOD3002.geometry} material={materials['M_Narwhal.002']} skeleton={nodes.Narwhal_LOD3002.skeleton} morphTargetDictionary={nodes.Narwhal_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig045" position={[-0.67, -0.53, -0.41]} rotation={[-2, -0.43, 0.92]} scale={0.05}>
          <primitive object={nodes.root_40} />
          <skinnedMesh name="Narwhal_LOD0001" geometry={nodes.Narwhal_LOD0001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD0001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD1001" geometry={nodes.Narwhal_LOD1001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD1001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD2001" geometry={nodes.Narwhal_LOD2001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD2001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD3001" geometry={nodes.Narwhal_LOD3001.geometry} material={materials['M_Narwhal.001']} skeleton={nodes.Narwhal_LOD3001.skeleton} morphTargetDictionary={nodes.Narwhal_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig044" position={[-0.78, -0.36, -0.47]} rotation={[-2.09, -0.18, 1.29]} scale={0.05}>
          <primitive object={nodes.root_41} />
          <skinnedMesh name="Narwhal_LOD0" geometry={nodes.Narwhal_LOD0.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD0.skeleton} morphTargetDictionary={nodes.Narwhal_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD1" geometry={nodes.Narwhal_LOD1.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD1.skeleton} morphTargetDictionary={nodes.Narwhal_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD2" geometry={nodes.Narwhal_LOD2.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD2.skeleton} morphTargetDictionary={nodes.Narwhal_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Narwhal_LOD3" geometry={nodes.Narwhal_LOD3.geometry} material={materials.M_Narwhal} skeleton={nodes.Narwhal_LOD3.skeleton} morphTargetDictionary={nodes.Narwhal_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Narwhal_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig040" position={[-0.94, 0.38, -0.07]} rotation={[-0.24, 0, 0.91]} scale={0.1}>
          <primitive object={nodes.root_42} />
          <skinnedMesh name="Lion_LOD0" geometry={nodes.Lion_LOD0.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD0.skeleton} morphTargetDictionary={nodes.Lion_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Lion_LOD1" geometry={nodes.Lion_LOD1.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD1.skeleton} morphTargetDictionary={nodes.Lion_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Lion_LOD2" geometry={nodes.Lion_LOD2.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD2.skeleton} morphTargetDictionary={nodes.Lion_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Lion_LOD3" geometry={nodes.Lion_LOD3.geometry} material={materials.M_Lion} skeleton={nodes.Lion_LOD3.skeleton} morphTargetDictionary={nodes.Lion_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Lion_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig041" position={[-1, -0.12, -0.38]} rotation={[0, 0, 1.35]} scale={0.05}>
          <primitive object={nodes.root_43} />
          <skinnedMesh name="Serval_LOD0" geometry={nodes.Serval_LOD0.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD0.skeleton} morphTargetDictionary={nodes.Serval_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD1" geometry={nodes.Serval_LOD1.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD1.skeleton} morphTargetDictionary={nodes.Serval_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD2" geometry={nodes.Serval_LOD2.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD2.skeleton} morphTargetDictionary={nodes.Serval_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD3" geometry={nodes.Serval_LOD3.geometry} material={materials.M_Serval} skeleton={nodes.Serval_LOD3.skeleton} morphTargetDictionary={nodes.Serval_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig042" position={[-1, -0.03, -0.41]} rotation={[0.29, -0.28, 1.61]} scale={0.05}>
          <primitive object={nodes.root_44} />
          <skinnedMesh name="Serval_LOD0001" geometry={nodes.Serval_LOD0001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD0001.skeleton} morphTargetDictionary={nodes.Serval_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD1001" geometry={nodes.Serval_LOD1001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD1001.skeleton} morphTargetDictionary={nodes.Serval_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD2001" geometry={nodes.Serval_LOD2001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD2001.skeleton} morphTargetDictionary={nodes.Serval_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Serval_LOD3001" geometry={nodes.Serval_LOD3001.geometry} material={materials['M_Serval.001']} skeleton={nodes.Serval_LOD3001.skeleton} morphTargetDictionary={nodes.Serval_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Serval_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig031" position={[-0.37, 0.29, -0.94]} rotation={[-1.88, 0.8, 0.57]} scale={0.1}>
          <primitive object={nodes.root_45} />
          <skinnedMesh name="Llama_LOD0" geometry={nodes.Llama_LOD0.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD0.skeleton} morphTargetDictionary={nodes.Llama_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Llama_LOD1" geometry={nodes.Llama_LOD1.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD1.skeleton} morphTargetDictionary={nodes.Llama_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Llama_LOD2" geometry={nodes.Llama_LOD2.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD2.skeleton} morphTargetDictionary={nodes.Llama_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Llama_LOD3" geometry={nodes.Llama_LOD3.geometry} material={materials['M_Llama.001']} skeleton={nodes.Llama_LOD3.skeleton} morphTargetDictionary={nodes.Llama_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Llama_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig047" position={[0.19, -0.05, 1.08]} rotation={[0.57, -1.1, -1.37]} scale={0.04}>
          <primitive object={nodes.root_46} />
          <skinnedMesh name="Cougar_LOD0001" geometry={nodes.Cougar_LOD0001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD0001.skeleton} morphTargetDictionary={nodes.Cougar_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD1001" geometry={nodes.Cougar_LOD1001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD1001.skeleton} morphTargetDictionary={nodes.Cougar_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD2001" geometry={nodes.Cougar_LOD2001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD2001.skeleton} morphTargetDictionary={nodes.Cougar_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Cougar_LOD3001" geometry={nodes.Cougar_LOD3001.geometry} material={materials['M_Cougar.002']} skeleton={nodes.Cougar_LOD3001.skeleton} morphTargetDictionary={nodes.Cougar_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig035" position={[0.4, -0.04, -0.98]} rotation={[1.72, 0.92, -2.71]} scale={0.1}>
          <primitive object={nodes.root_47} />
          <skinnedMesh name="Giraffe_LOD0" geometry={nodes.Giraffe_LOD0.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD0.skeleton} morphTargetDictionary={nodes.Giraffe_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Giraffe_LOD1" geometry={nodes.Giraffe_LOD1.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD1.skeleton} morphTargetDictionary={nodes.Giraffe_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Giraffe_LOD2" geometry={nodes.Giraffe_LOD2.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD2.skeleton} morphTargetDictionary={nodes.Giraffe_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Giraffe_LOD3" geometry={nodes.Giraffe_LOD3.geometry} material={materials.M_Giraffe} skeleton={nodes.Giraffe_LOD3.skeleton} morphTargetDictionary={nodes.Giraffe_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig036" position={[0.34, -0.18, -0.97]} rotation={[-0.07, 1.31, -1.25]} scale={0.07}>
          <primitive object={nodes.root_16} />
          <skinnedMesh name="Giraffe" geometry={nodes.Giraffe.geometry} material={materials['M_Giraffe.001']} skeleton={nodes.Giraffe.skeleton} morphTargetDictionary={nodes.Giraffe.morphTargetDictionary} morphTargetInfluences={nodes.Giraffe.morphTargetInfluences} />
        </group>
        <group name="Rig023" position={[-0.32, 0.2, -0.99]} rotation={[-1.3, -0.72, 0.91]} scale={0.03}>
          <primitive object={nodes.root_17} />
          <skinnedMesh name="Iguana" geometry={nodes.Iguana.geometry} material={materials.M_Iguana} skeleton={nodes.Iguana.skeleton} morphTargetDictionary={nodes.Iguana.morphTargetDictionary} morphTargetInfluences={nodes.Iguana.morphTargetInfluences} />
        </group>
        <group name="Rig032" position={[-0.98, -0.31, -0.13]} rotation={[-1.91, -0.82, 0.72]} scale={0.1}>
          <primitive object={nodes.root_48} />
          <skinnedMesh name="Bear_LOD0" geometry={nodes.Bear_LOD0.geometry} material={materials['M_Bear.001']} skeleton={nodes.Bear_LOD0.skeleton} morphTargetDictionary={nodes.Bear_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Bear_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Bear_LOD1" geometry={nodes.Bear_LOD1.geometry} material={materials['M_Bear.001']} skeleton={nodes.Bear_LOD1.skeleton} morphTargetDictionary={nodes.Bear_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Bear_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Bear_LOD2" geometry={nodes.Bear_LOD2.geometry} material={materials['M_Bear.001']} skeleton={nodes.Bear_LOD2.skeleton} morphTargetDictionary={nodes.Bear_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Bear_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Bear_LOD3" geometry={nodes.Bear_LOD3.geometry} material={materials['M_Bear.001']} skeleton={nodes.Bear_LOD3.skeleton} morphTargetDictionary={nodes.Bear_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Bear_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig019" position={[-0.79, 0.52, 0.51]} rotation={[2.84, -0.3, 2.51]} scale={0.03}>
          <primitive object={nodes.root_49} />
          <skinnedMesh name="Toucan_LOD0" geometry={nodes.Toucan_LOD0.geometry} material={materials.M_Toucan} skeleton={nodes.Toucan_LOD0.skeleton} morphTargetDictionary={nodes.Toucan_LOD0.morphTargetDictionary} morphTargetInfluences={nodes.Toucan_LOD0.morphTargetInfluences} />
          <skinnedMesh name="Toucan_LOD1" geometry={nodes.Toucan_LOD1.geometry} material={materials.M_Toucan} skeleton={nodes.Toucan_LOD1.skeleton} morphTargetDictionary={nodes.Toucan_LOD1.morphTargetDictionary} morphTargetInfluences={nodes.Toucan_LOD1.morphTargetInfluences} />
          <skinnedMesh name="Toucan_LOD2" geometry={nodes.Toucan_LOD2.geometry} material={materials.M_Toucan} skeleton={nodes.Toucan_LOD2.skeleton} morphTargetDictionary={nodes.Toucan_LOD2.morphTargetDictionary} morphTargetInfluences={nodes.Toucan_LOD2.morphTargetInfluences} />
          <skinnedMesh name="Toucan_LOD3" geometry={nodes.Toucan_LOD3.geometry} material={materials.M_Toucan} skeleton={nodes.Toucan_LOD3.skeleton} morphTargetDictionary={nodes.Toucan_LOD3.morphTargetDictionary} morphTargetInfluences={nodes.Toucan_LOD3.morphTargetInfluences} />
        </group>
        <group name="Rig039" position={[-0.78, 0.55, 0.45]} rotation={[0.5, -0.11, 0.67]} scale={0.03}>
          <primitive object={nodes.root_18} />
          <skinnedMesh name="Toucan" geometry={nodes.Toucan.geometry} material={materials['M_Toucan.001']} skeleton={nodes.Toucan.skeleton} morphTargetDictionary={nodes.Toucan.morphTargetDictionary} morphTargetInfluences={nodes.Toucan.morphTargetInfluences} />
        </group>
        <group name="Rig051" position={[0.1, 0.2, 1.09]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_50} />
          <skinnedMesh name="Goat_LOD0003" geometry={nodes.Goat_LOD0003.geometry} material={materials['M_Goat.003']} skeleton={nodes.Goat_LOD0003.skeleton} morphTargetDictionary={nodes.Goat_LOD0003.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0003.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1003" geometry={nodes.Goat_LOD1003.geometry} material={materials['M_Goat.003']} skeleton={nodes.Goat_LOD1003.skeleton} morphTargetDictionary={nodes.Goat_LOD1003.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1003.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2003" geometry={nodes.Goat_LOD2003.geometry} material={materials['M_Goat.003']} skeleton={nodes.Goat_LOD2003.skeleton} morphTargetDictionary={nodes.Goat_LOD2003.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2003.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3003" geometry={nodes.Goat_LOD3003.geometry} material={materials['M_Goat.003']} skeleton={nodes.Goat_LOD3003.skeleton} morphTargetDictionary={nodes.Goat_LOD3003.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3003.morphTargetInfluences} />
        </group>
        <group name="Rig050" position={[0.04, 0.24, 1.08]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_51} />
          <skinnedMesh name="Goat_LOD0002" geometry={nodes.Goat_LOD0002.geometry} material={materials['M_Goat.002']} skeleton={nodes.Goat_LOD0002.skeleton} morphTargetDictionary={nodes.Goat_LOD0002.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0002.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1002" geometry={nodes.Goat_LOD1002.geometry} material={materials['M_Goat.002']} skeleton={nodes.Goat_LOD1002.skeleton} morphTargetDictionary={nodes.Goat_LOD1002.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1002.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2002" geometry={nodes.Goat_LOD2002.geometry} material={materials['M_Goat.002']} skeleton={nodes.Goat_LOD2002.skeleton} morphTargetDictionary={nodes.Goat_LOD2002.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2002.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3002" geometry={nodes.Goat_LOD3002.geometry} material={materials['M_Goat.002']} skeleton={nodes.Goat_LOD3002.skeleton} morphTargetDictionary={nodes.Goat_LOD3002.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3002.morphTargetInfluences} />
        </group>
        <group name="Rig049" position={[-0.01, 0.3, 1.08]} rotation={[1.5, 0.04, 0.04]} scale={[0.05, 0.05, 0.04]}>
          <primitive object={nodes.root_52} />
          <skinnedMesh name="Goat_LOD0001" geometry={nodes.Goat_LOD0001.geometry} material={materials['M_Goat.001']} skeleton={nodes.Goat_LOD0001.skeleton} morphTargetDictionary={nodes.Goat_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD1001" geometry={nodes.Goat_LOD1001.geometry} material={materials['M_Goat.001']} skeleton={nodes.Goat_LOD1001.skeleton} morphTargetDictionary={nodes.Goat_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD2001" geometry={nodes.Goat_LOD2001.geometry} material={materials['M_Goat.001']} skeleton={nodes.Goat_LOD2001.skeleton} morphTargetDictionary={nodes.Goat_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Goat_LOD3001" geometry={nodes.Goat_LOD3001.geometry} material={materials['M_Goat.001']} skeleton={nodes.Goat_LOD3001.skeleton} morphTargetDictionary={nodes.Goat_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Goat_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig048" position={[0.24, 0.18, 1.06]} rotation={[-0.79, -0.71, -2.16]} scale={0.07}>
          <primitive object={nodes.root_19} />
          <skinnedMesh name="Cougar001" geometry={nodes.Cougar001.geometry} material={materials['M_Cougar.003']} skeleton={nodes.Cougar001.skeleton} morphTargetDictionary={nodes.Cougar001.morphTargetDictionary} morphTargetInfluences={nodes.Cougar001.morphTargetInfluences} />
        </group>
        <group name="Rig052" position={[-1.08, -0.06, -0.13]} rotation={[0.83, -0.08, 1.39]} scale={0.08}>
          <primitive object={nodes.root_53} />
          <skinnedMesh name="Antelope_LOD0001" geometry={nodes.Antelope_LOD0001.geometry} material={materials['M_Antelope.001']} skeleton={nodes.Antelope_LOD0001.skeleton} morphTargetDictionary={nodes.Antelope_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD1001" geometry={nodes.Antelope_LOD1001.geometry} material={materials['M_Antelope.001']} skeleton={nodes.Antelope_LOD1001.skeleton} morphTargetDictionary={nodes.Antelope_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD2001" geometry={nodes.Antelope_LOD2001.geometry} material={materials['M_Antelope.001']} skeleton={nodes.Antelope_LOD2001.skeleton} morphTargetDictionary={nodes.Antelope_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Antelope_LOD3001" geometry={nodes.Antelope_LOD3001.geometry} material={materials['M_Antelope.001']} skeleton={nodes.Antelope_LOD3001.skeleton} morphTargetDictionary={nodes.Antelope_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Antelope_LOD3001.morphTargetInfluences} />
        </group>
        <group name="Rig053" position={[-0.9, 0.29, 0.43]} rotation={[0, 0, 0.93]} scale={0.05}>
          <primitive object={nodes.root_54} />
        </group>
        <group name="Rig054" position={[-0.9, 0.34, 0.45]} rotation={[0.62, 0.12, 0.36]} scale={0.03}>
          <primitive object={nodes.root_55} />
          <skinnedMesh name="Hare_LOD0003" geometry={nodes.Hare_LOD0003.geometry} material={materials['M_Hare.005']} skeleton={nodes.Hare_LOD0003.skeleton} morphTargetDictionary={nodes.Hare_LOD0003.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0003.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1003" geometry={nodes.Hare_LOD1003.geometry} material={materials['M_Hare.005']} skeleton={nodes.Hare_LOD1003.skeleton} morphTargetDictionary={nodes.Hare_LOD1003.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1003.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2003" geometry={nodes.Hare_LOD2003.geometry} material={materials['M_Hare.005']} skeleton={nodes.Hare_LOD2003.skeleton} morphTargetDictionary={nodes.Hare_LOD2003.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2003.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3003" geometry={nodes.Hare_LOD3003.geometry} material={materials['M_Hare.005']} skeleton={nodes.Hare_LOD3003.skeleton} morphTargetDictionary={nodes.Hare_LOD3003.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3003.morphTargetInfluences} />
        </group>
        <group name="Rig055" position={[-0.9, 0.34, 0.37]} rotation={[0, 0, 0.93]} scale={0.03}>
          <primitive object={nodes.root_56} />
          <skinnedMesh name="Hare_LOD0004" geometry={nodes.Hare_LOD0004.geometry} material={materials['M_Hare.006']} skeleton={nodes.Hare_LOD0004.skeleton} morphTargetDictionary={nodes.Hare_LOD0004.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD0004.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD1004" geometry={nodes.Hare_LOD1004.geometry} material={materials['M_Hare.006']} skeleton={nodes.Hare_LOD1004.skeleton} morphTargetDictionary={nodes.Hare_LOD1004.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD1004.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD2004" geometry={nodes.Hare_LOD2004.geometry} material={materials['M_Hare.006']} skeleton={nodes.Hare_LOD2004.skeleton} morphTargetDictionary={nodes.Hare_LOD2004.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD2004.morphTargetInfluences} />
          <skinnedMesh name="Hare_LOD3004" geometry={nodes.Hare_LOD3004.geometry} material={materials['M_Hare.006']} skeleton={nodes.Hare_LOD3004.skeleton} morphTargetDictionary={nodes.Hare_LOD3004.morphTargetDictionary} morphTargetInfluences={nodes.Hare_LOD3004.morphTargetInfluences} />
        </group>
        <group name="Rig056" position={[0.78, 0.43, 0.51]} rotation={[1.35, 0.58, -0.37]} scale={0.08}>
          <primitive object={nodes.root_20} />
          <skinnedMesh name="Badger002" geometry={nodes.Badger002.geometry} material={materials['M_Badger.002']} skeleton={nodes.Badger002.skeleton} morphTargetDictionary={nodes.Badger002.morphTargetDictionary} morphTargetInfluences={nodes.Badger002.morphTargetInfluences} />
        </group>
        <group name="Rig057" position={[-0.48, -0.54, -0.76]} rotation={[-2.71, 0.52, 0.85]} scale={0.07}>
          <primitive object={nodes.root_57} />
          <skinnedMesh name="Marten_LOD0001" geometry={nodes.Marten_LOD0001.geometry} material={materials['M_Marten.001']} skeleton={nodes.Marten_LOD0001.skeleton} morphTargetDictionary={nodes.Marten_LOD0001.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD0001.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD1001" geometry={nodes.Marten_LOD1001.geometry} material={materials['M_Marten.001']} skeleton={nodes.Marten_LOD1001.skeleton} morphTargetDictionary={nodes.Marten_LOD1001.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD1001.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD2001" geometry={nodes.Marten_LOD2001.geometry} material={materials['M_Marten.001']} skeleton={nodes.Marten_LOD2001.skeleton} morphTargetDictionary={nodes.Marten_LOD2001.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD2001.morphTargetInfluences} />
          <skinnedMesh name="Marten_LOD3001" geometry={nodes.Marten_LOD3001.geometry} material={materials['M_Marten.001']} skeleton={nodes.Marten_LOD3001.skeleton} morphTargetDictionary={nodes.Marten_LOD3001.morphTargetDictionary} morphTargetInfluences={nodes.Marten_LOD3001.morphTargetInfluences} />
        </group>
        <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.1']} position={[0.02, 0.17, -0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
        <group name="Mushroom5_3001" position={[-1.01, -0.05, 0.26]} rotation={[-0.03, 0.5, 1.32]} scale={0}>
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Mushroom5_1.001']} />
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['Mushroom5_2.001']} />
        </group>
        <group name="Mushroom5_3002" position={[-1.01, -0.05, 0.23]} rotation={[-0.03, 0.5, 1.32]} scale={0}>
          <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials['Mushroom5_1.003']} />
          <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials['Mushroom5_2.003']} />
        </group>
        <group name="Mushroom5_3003" position={[-1.01, -0.08, 0.23]} rotation={[-0.03, 0.5, 1.32]} scale={0}>
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials['Mushroom5_1.004']} />
          <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials['Mushroom5_2.004']} />
        </group>
        <group name="Mushroom5_3004" position={[-0.88, -0.61, -0.08]} rotation={[0.3, -0.28, -1.26]} scale={0}>
          <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials['Mushroom5_1.005']} />
          <mesh name="Cylinder005_1" geometry={nodes.Cylinder005_1.geometry} material={materials['Mushroom5_2.005']} />
        </group>
        <group name="Mushrooms_grass3" position={[-0.12, 0, 1.05]} rotation={[1.6, -1.06, 0.33]} scale={0.05}>
          <mesh name="Cylinder071" geometry={nodes.Cylinder071.geometry} material={materials['Rock1_1.001']} />
          <mesh name="Cylinder071_1" geometry={nodes.Cylinder071_1.geometry} material={materials['Mushroom5_1.006']} />
          <mesh name="Cylinder071_2" geometry={nodes.Cylinder071_2.geometry} material={materials['Mushroom5_2.006']} />
          <mesh name="Cylinder071_3" geometry={nodes.Cylinder071_3.geometry} material={materials['Grass1_1.001']} />
          <mesh name="Cylinder071_4" geometry={nodes.Cylinder071_4.geometry} material={materials.Reeds1_2} />
          <mesh name="Cylinder071_5" geometry={nodes.Cylinder071_5.geometry} material={materials.Reeds1_1} />
        </group>
        <group name="Mushrooms_grass3001" position={[0.64, 0.23, 0.81]} rotation={[0.29, -0.91, -0.92]} scale={0.05}>
          <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials['Rock1_1.002']} />
          <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials['Mushroom5_1.007']} />
          <mesh name="Cylinder006_2" geometry={nodes.Cylinder006_2.geometry} material={materials['Mushroom5_2.007']} />
          <mesh name="Cylinder006_3" geometry={nodes.Cylinder006_3.geometry} material={materials['Grass1_1.002']} />
          <mesh name="Cylinder006_4" geometry={nodes.Cylinder006_4.geometry} material={materials['Reeds1_2.001']} />
          <mesh name="Cylinder006_5" geometry={nodes.Cylinder006_5.geometry} material={materials['Reeds1_1.001']} />
        </group>
        <group name="Mushrooms_grass3002" position={[0.64, 0.3, 0.8]} rotation={[0.29, -0.91, -0.92]} scale={0.05}>
          <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials['Rock1_1.003']} />
          <mesh name="Cylinder007_1" geometry={nodes.Cylinder007_1.geometry} material={materials['Mushroom5_1.008']} />
          <mesh name="Cylinder007_2" geometry={nodes.Cylinder007_2.geometry} material={materials['Mushroom5_2.008']} />
          <mesh name="Cylinder007_3" geometry={nodes.Cylinder007_3.geometry} material={materials['Grass1_1.003']} />
          <mesh name="Cylinder007_4" geometry={nodes.Cylinder007_4.geometry} material={materials['Reeds1_2.002']} />
          <mesh name="Cylinder007_5" geometry={nodes.Cylinder007_5.geometry} material={materials['Reeds1_1.002']} />
        </group>
        <group name="Mushrooms_grass3003" position={[1.64, 0.3, 0.76]} rotation={[0.29, -0.91, -0.92]} scale={0.05}>
          <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials['Rock1_1.004']} />
          <mesh name="Cylinder008_1" geometry={nodes.Cylinder008_1.geometry} material={materials['Mushroom5_1.009']} />
          <mesh name="Cylinder008_2" geometry={nodes.Cylinder008_2.geometry} material={materials['Mushroom5_2.009']} />
          <mesh name="Cylinder008_3" geometry={nodes.Cylinder008_3.geometry} material={materials['Grass1_1.004']} />
          <mesh name="Cylinder008_4" geometry={nodes.Cylinder008_4.geometry} material={materials['Reeds1_2.003']} />
          <mesh name="Cylinder008_5" geometry={nodes.Cylinder008_5.geometry} material={materials['Reeds1_1.003']} />
        </group>
        <group name="Mushroom4_2" position={[-1.02, 0.09, 0.07]} rotation={[-1.58, 0.33, 1.58]} scale={0.01}>
          <mesh name="Cylinder055" geometry={nodes.Cylinder055.geometry} material={materials.Mushroom4_1} />
          <mesh name="Cylinder055_1" geometry={nodes.Cylinder055_1.geometry} material={materials.Mushroom4_2} />
        </group>
        <group name="Mushroom4_2001" position={[-1.03, 0.06, 0.07]} rotation={[-1.58, 0.33, 1.58]} scale={0.01}>
          <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials['Mushroom4_1.001']} />
          <mesh name="Cylinder009_1" geometry={nodes.Cylinder009_1.geometry} material={materials['Mushroom4_2.001']} />
        </group>
        <group name="Mushroom4_2002" position={[-1.02, 0.08, 0.1]} rotation={[-1.58, 0.33, 1.58]} scale={0}>
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials['Mushroom4_1.002']} />
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials['Mushroom4_2.002']} />
        </group>
        <group name="Mushroom4_2003" position={[-1.01, 0.08, 0.04]} rotation={[-1.58, 0.33, 1.58]} scale={0.01}>
          <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials['Mushroom4_1.003']} />
          <mesh name="Cylinder011_1" geometry={nodes.Cylinder011_1.geometry} material={materials['Mushroom4_2.003']} />
        </group>
        <mesh name="Tree5_1" geometry={nodes.Tree5_1.geometry} material={materials.Tree5_1} position={[-0.69, 0.17, 0.6]} rotation={[0.53, 0.81, 0.89]} scale={0.03} />
        <mesh name="Tree5_1001" geometry={nodes.Tree5_1001.geometry} material={materials['Tree5_1.001']} position={[-1.01, -0.07, -0.28]} rotation={[-0.09, -0.2, 1.13]} scale={0.02} />
        <mesh name="Tree5_1002" geometry={nodes.Tree5_1002.geometry} material={materials['Tree5_1.002']} position={[0.25, 0.36, 0.96]} rotation={[1.26, 0.29, -0.73]} scale={0.02} />
        <mesh name="Tree5_1003" geometry={nodes.Tree5_1003.geometry} material={materials['Tree5_1.003']} position={[0.22, 0.46, -0.89]} rotation={[-1.15, -1.34, -0.1]} scale={0.03} />
        <mesh name="Tree5_1004" geometry={nodes.Tree5_1004.geometry} material={materials['Tree5_1.004']} position={[-0.15, -0.51, -0.9]} rotation={[-1.37, 0.63, -0.12]} scale={0.02} />
        <group name="Mushroom5_3005" position={[-1.02, -0.14, 0.22]} rotation={[-0.12, 0.14, -1.79]} scale={0}>
          <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={materials['Mushroom5_1.010']} />
          <mesh name="Cylinder012_1" geometry={nodes.Cylinder012_1.geometry} material={materials['Mushroom5_2.010']} />
        </group>
        <group name="Mushroom5_3006" position={[-0.8, -0.66, -0.08]} rotation={[0.3, -0.28, -1.26]} scale={0}>
          <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={materials['Mushroom5_1.011']} />
          <mesh name="Cylinder013_1" geometry={nodes.Cylinder013_1.geometry} material={materials['Mushroom5_2.011']} />
        </group>
        <group name="Mushroom5_3007" position={[-0.83, -0.64, -0.04]} rotation={[0.3, -0.28, 1.89]} scale={0}>
          <mesh name="Cylinder014" geometry={nodes.Cylinder014.geometry} material={materials['Mushroom5_1.012']} />
          <mesh name="Cylinder014_1" geometry={nodes.Cylinder014_1.geometry} material={materials['Mushroom5_2.012']} />
        </group>
        <group name="Mushroom5_3008" position={[-0.84, -0.61, -0.05]} rotation={[0.3, -0.28, 1.89]} scale={0}>
          <mesh name="Cylinder015" geometry={nodes.Cylinder015.geometry} material={materials['Mushroom5_1.013']} />
          <mesh name="Cylinder015_1" geometry={nodes.Cylinder015_1.geometry} material={materials['Mushroom5_2.013']} />
        </group>
      </group>
    </group>
  )
}
  

  export { Model0, Model00, EarthLv2, EarthLv3, EarthLv4, EarthLv5, EarthLv6, EarthLv7, EarthLv8}