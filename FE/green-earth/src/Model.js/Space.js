


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


function Model000(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/model/earth33/Lowpoly_earth_Planet_2.gltf')
    const { actions } = useAnimations(animations, group)
    return (
      <group ref={group} {...props} dispose={null}>
        <group>
          <group name="RootNode">
            <group name="Planet" position={[3.15, 7.2, -3.6]} rotation={[0, 0.27, 0]}>
              <group name="Palms" position={[-68.62, -15.93, 82.82]} rotation={[-2.99, -1.04, 1.24]}>
                <group name="Australia" position={[72.22, -60.74, -105.13]} rotation={[-2.39, 0.13, 0]}>
                  <mesh name="Palm_1" geometry={nodes.Palm_1.geometry} material={materials['World ap']} position={[35.19, -19.61, -8.62]} rotation={[-1.66, 0.03, -2.23]} />
                  <mesh name="Palm_2" geometry={nodes.Palm_2.geometry} material={materials['World ap']} position={[35.81, -23.71, -10.87]} rotation={[-1.56, 0.15, -1.91]} />
                  <mesh name="Palm_4" geometry={nodes.Palm_4.geometry} material={materials['World ap']} position={[35.62, -8.67, -13.87]} rotation={[-1.66, 0.02, -2.25]} />
                  <mesh name="Palm_5" geometry={nodes.Palm_5.geometry} material={materials['World ap']} position={[23.69, 1.41, -11.11]} rotation={[-1.8, -0.58, -2.43]} />
                  <mesh name="Palm_6" geometry={nodes.Palm_6.geometry} material={materials['World ap']} position={[36.18, -15.81, -12.8]} rotation={[-2.24, 0.1, -2.45]} />
                  <mesh name="Palm_7" geometry={nodes.Palm_7.geometry} material={materials['World ap']} position={[37.86, -12.26, -16.43]} rotation={[-1.9, -0.14, -2.04]} />
                  <mesh name="Palm_8" geometry={nodes.Palm_8.geometry} material={materials['World ap']} position={[36.21, -27.71, -8.83]} rotation={[-1.96, 0.39, -2.38]} />
                  <mesh name="Palm_9" geometry={nodes.Palm_9.geometry} material={materials['World ap']} position={[39.65, -17.87, -13.61]} rotation={[-1.54, 0.13, -2.03]} />
                  <mesh name="Palm_10" geometry={nodes.Palm_10.geometry} material={materials['World ap']} position={[34.25, -31.27, -8.73]} rotation={[-1.51, 0.25, -2.32]} />
                  <mesh name="Palm_81" geometry={nodes.Palm_81.geometry} material={materials['World ap']} position={[-1.87, 4.94, 0]} rotation={[0.66, -0.29, -0.03]} />
                  <mesh name="Palm_82" geometry={nodes.Palm_82.geometry} material={materials['World ap']} position={[-3.2, 6.92, -4.07]} rotation={[0.5, -0.28, 0.25]} />
                  <mesh name="Palm_86" geometry={nodes.Palm_86.geometry} material={materials['World ap']} position={[-8.89, -4.87, 4.01]} rotation={[1.18, -0.28, 0.09]} />
                  <mesh name="Palm_87" geometry={nodes.Palm_87.geometry} material={materials['World ap']} position={[-11.1, -10.18, 5.15]} rotation={[1.22, -0.01, -0.11]} />
                  <mesh name="Palm_89" geometry={nodes.Palm_89.geometry} material={materials['World ap']} position={[-6.53, 1.91, 1.42]} rotation={[1.03, -0.78, -0.1]} />
                  <mesh name="Palm_90" geometry={nodes.Palm_90.geometry} material={materials['World ap']} position={[-11.1, -0.26, 3.17]} rotation={[0.96, -0.37, 0.26]} />
                  <mesh name="Palm_91" geometry={nodes.Palm_91.geometry} material={materials['World ap']} position={[-0.99, 10.27, -6.13]} rotation={[0.48, -0.73, -0.34]} />
                  <mesh name="Palm_3" geometry={nodes.Palm_3.geometry} material={materials['World ap']} position={[-8.74, 5.33, 0.74]} rotation={[0.5, -0.25, 0.13]} />
                  <mesh name="Palm" geometry={nodes.Palm.geometry} material={materials['World ap']} position={[4.06, 8.2, -4.7]} rotation={[0.38, -0.29, -0.19]} />
                  <mesh name="Palm_11" geometry={nodes.Palm_11.geometry} material={materials['World ap']} position={[11.38, -34.49, 4.91]} rotation={[-1.33, 0.87, -2.84]} />
                  <mesh name="Palm_12" geometry={nodes.Palm_12.geometry} material={materials['World ap']} position={[8.79, -37.35, 4]} rotation={[-1.1, 0.9, -2.7]} />
                  <mesh name="Palm_13" geometry={nodes.Palm_13.geometry} material={materials['World ap']} position={[20.71, -36.98, -1.13]} rotation={[-1.94, 0.62, -2.44]} />
                  <mesh name="Palm_14" geometry={nodes.Palm_14.geometry} material={materials['World ap']} position={[16.71, -37.35, 2.07]} rotation={[-1.36, 0.51, -2.9]} />
                  <mesh name="Palm_15" geometry={nodes.Palm_15.geometry} material={materials['World ap']} position={[15.22, -32.1, 3.64]} rotation={[-2.33, 1.07, -2.25]} />
                  <mesh name="Palm_16" geometry={nodes.Palm_16.geometry} material={materials['World ap']} position={[20.26, -31.57, 1.91]} rotation={[-1.77, 0.81, -2.31]} />
                  <mesh name="Palm_17" geometry={nodes.Palm_17.geometry} material={materials['World ap']} position={[27.49, 4.41, -12.77]} rotation={[-2.05, -0.42, -2.33]} />
                  <mesh name="Palm_18" geometry={nodes.Palm_18.geometry} material={materials['World ap']} position={[21.85, 7.21, -10.79]} rotation={[-1.8, -0.58, -2.43]} />
                  <mesh name="Palm_19" geometry={nodes.Palm_19.geometry} material={materials['World ap']} position={[18.87, 8.59, -11.37]} rotation={[0.38, -0.29, -0.19]} />
                  <mesh name="Palm_20" geometry={nodes.Palm_20.geometry} material={materials['World ap']} position={[4.18, 13.04, -7.13]} rotation={[0.11, -0.22, -0.28]} />
                  <mesh name="Palm_21" geometry={nodes.Palm_21.geometry} material={materials['World ap']} position={[6.29, 11.9, -9.68]} rotation={[0.11, -0.22, -0.28]} />
                  <mesh name="Palm_22" geometry={nodes.Palm_22.geometry} material={materials['World ap']} position={[-6.87, -11.55, 7.54]} rotation={[0.98, 0.02, -0.36]} />
                  <mesh name="Palm_23" geometry={nodes.Palm_23.geometry} material={materials['World ap']} position={[-7.19, -15.18, 6.73]} rotation={[1.57, 0.01, -0.02]} />
                  <mesh name="Palm_24" geometry={nodes.Palm_24.geometry} material={materials['World ap']} position={[-4.24, -19.8, 7.45]} rotation={[1.57, 0.01, -0.02]} />
                  <mesh name="Palm_25" geometry={nodes.Palm_25.geometry} material={materials['World ap']} position={[-7.28, -25.44, 7.97]} rotation={[1.57, 0.01, 0.26]} />
                  <mesh name="Palm_26" geometry={nodes.Palm_26.geometry} material={materials['World ap']} position={[-5.35, -30.4, 7.76]} rotation={[1.57, 0.01, -0.28]} />
                  <mesh name="Palm_27" geometry={nodes.Palm_27.geometry} material={materials['World ap']} position={[-6.1, -24, 8.93]} rotation={[1.57, 0.01, -0.28]} />
                  <mesh name="Palm_28" geometry={nodes.Palm_28.geometry} material={materials['World ap']} position={[-1.62, -5.98, 2.81]} rotation={[1.03, -0.78, -0.1]} />
                  <mesh name="Palm_29" geometry={nodes.Palm_29.geometry} material={materials['World ap']} position={[22.1, 1.23, -7.33]} rotation={[-1.8, -0.58, -2.87]} />
                  <mesh name="Palm_30" geometry={nodes.Palm_30.geometry} material={materials['World ap']} position={[26.34, -0.57, -8.23]} rotation={[-1.58, -0.51, -2.76]} />
                </group>
                <group name="America" position={[121.64, -118.25, 40.46]} rotation={[1.1, 0.32, -0.95]}>
                  <mesh name="Palm_80" geometry={nodes.Palm_80.geometry} material={materials['World ap']} position={[6.74, 4.84, -9.38]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_81_2" geometry={nodes.Palm_81_2.geometry} material={materials['World ap']} position={[-7.51, 2.06, -3.03]} rotation={[0.62, 0.1, 0.56]} />
                  <mesh name="Palm_82_2" geometry={nodes.Palm_82_2.geometry} material={materials['World ap']} position={[-2, -2.35, 0.7]} rotation={[0.62, 0.1, 0.56]} />
                  <mesh name="Palm_83" geometry={nodes.Palm_83.geometry} material={materials['World ap']} position={[10.41, 3.71, -4.94]} rotation={[0.62, 0.1, -0.15]} />
                  <mesh name="Palm_84" geometry={nodes.Palm_84.geometry} material={materials['World ap']} position={[9.41, 11.59, -10.5]} rotation={[0.23, 0.15, -0.1]} />
                  <mesh name="Palm_85" geometry={nodes.Palm_85.geometry} material={materials['World ap']} position={[4.64, 9.13, -12.14]} rotation={[0.49, 0.09, 0.44]} />
                  <mesh name="Palm_86_2" geometry={nodes.Palm_86_2.geometry} material={materials['World ap']} position={[9.17, 0.09, -1.26]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_87_2" geometry={nodes.Palm_87_2.geometry} material={materials['World ap']} position={[-4.39, -8.33, 9.09]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_88" geometry={nodes.Palm_88.geometry} material={materials['World ap']} position={[3.94, -6.53, 3.61]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_89_2" geometry={nodes.Palm_89_2.geometry} material={materials['World ap']} position={[-11.47, -2.45, 3.02]} rotation={[0.87, 0.13, 0.36]} />
                  <mesh name="Palm_90_2" geometry={nodes.Palm_90_2.geometry} material={materials['World ap']} position={[0.86, 3.88, -7.12]} rotation={[0.43, 0.29, 0.18]} />
                  <mesh name="Palm_91_2" geometry={nodes.Palm_91_2.geometry} material={materials['World ap']} position={[-5.18, 6.53, -4.42]} rotation={[0.64, -0.43, 0.13]} />
                  <mesh name="Palm_2_2" geometry={nodes.Palm_2_2.geometry} material={materials['World ap']} position={[15.13, -1.52, -1.26]} rotation={[0.55, -0.38, -0.16]} />
                  <mesh name="Palm_1_2" geometry={nodes.Palm_1_2.geometry} material={materials['World ap']} position={[15.13, 8.07, -16.44]} rotation={[0.14, -0.65, -0.12]} />
                  <mesh name="Palm_2_3" geometry={nodes.Palm_2_3.geometry} material={materials['World ap']} position={[18.58, 4.65, -12.3]} rotation={[0.17, -0.66, -0.36]} />
                  <mesh name="Palm_3_2" geometry={nodes.Palm_3_2.geometry} material={materials['World ap']} position={[-13.72, -0.67, -1.12]} rotation={[0.28, -0.1, 0.37]} />
                  <mesh name="Palm_4_2" geometry={nodes.Palm_4_2.geometry} material={materials['World ap']} position={[-15.94, -7.85, 3.36]} rotation={[0.83, 0.19, 0.78]} />
                  <mesh name="Palm_5_2" geometry={nodes.Palm_5_2.geometry} material={materials['World ap']} position={[-9.99, -10.14, 0.69]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_6_2" geometry={nodes.Palm_6_2.geometry} material={materials['World ap']} position={[-18.36, -3.4, -1.23]} rotation={[0.45, 0.05, 0.5]} />
                  <mesh name="Palm_7_2" geometry={nodes.Palm_7_2.geometry} material={materials['World ap']} position={[4.02, -13.01, 11.45]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_8_2" geometry={nodes.Palm_8_2.geometry} material={materials['World ap']} position={[-10.94, 3.48, -9.3]} rotation={[0.57, 0.32, 0.55]} />
                  <mesh name="Palm_9_2" geometry={nodes.Palm_9_2.geometry} material={materials['World ap']} position={[-3.77, -11.49, 9.62]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_10_2" geometry={nodes.Palm_10_2.geometry} material={materials['World ap']} position={[1.09, -62.86, 32.77]} rotation={[1.47, 0.41, 0.12]} />
                  <mesh name="Palm_11_2" geometry={nodes.Palm_11_2.geometry} material={materials['World ap']} position={[1.17, -21.54, 16.92]} rotation={[1.26, 0.32, -0.09]} />
                  <mesh name="Palm_12_2" geometry={nodes.Palm_12_2.geometry} material={materials['World ap']} position={[9.47, -22.85, 17.04]} rotation={[1.26, 0.32, -0.09]} />
                  <mesh name="Palm_13_2" geometry={nodes.Palm_13_2.geometry} material={materials['World ap']} position={[20.58, -35.5, 19.69]} rotation={[0.77, 0.39, -0.48]} />
                  <mesh name="Palm_14_2" geometry={nodes.Palm_14_2.geometry} material={materials['World ap']} position={[28.47, -41.66, 20.35]} rotation={[0.77, 0.39, -0.48]} />
                  <mesh name="Palm_15_2" geometry={nodes.Palm_15_2.geometry} material={materials['World ap']} position={[18.66, -23.68, 18.26]} rotation={[1.26, 0.32, -0.86]} />
                  <mesh name="Palm_16_2" geometry={nodes.Palm_16_2.geometry} material={materials['World ap']} position={[9.83, -30.64, 25.46]} rotation={[1.26, 0.32, -0.34]} />
                  <mesh name="Palm_17_2" geometry={nodes.Palm_17_2.geometry} material={materials['World ap']} position={[15.11, -22.96, 14.06]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_18_2" geometry={nodes.Palm_18_2.geometry} material={materials['World ap']} position={[8.44, -14.96, 10.88]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_19_2" geometry={nodes.Palm_19_2.geometry} material={materials['World ap']} position={[14.6, -7.67, 5.34]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_20_2" geometry={nodes.Palm_20_2.geometry} material={materials['World ap']} position={[19.1, -3.92, -0.7]} rotation={[1.36, 0.29, -0.37]} />
                  <mesh name="Palm_21_2" geometry={nodes.Palm_21_2.geometry} material={materials['World ap']} position={[-4.9, 8.22, -7.44]} rotation={[0.57, 0.32, 0.55]} />
                  <mesh name="Palm_22_2" geometry={nodes.Palm_22_2.geometry} material={materials['World ap']} position={[-13.85, 8.66, -15.36]} rotation={[0.14, 0.04, 0.63]} />
                  <mesh name="Palm_23_2" geometry={nodes.Palm_23_2.geometry} material={materials['World ap']} position={[-14.8, 5.25, -9.69]} rotation={[0.14, 0.04, 0.63]} />
                  <mesh name="Palm_24_2" geometry={nodes.Palm_24_2.geometry} material={materials['World ap']} position={[-37.94, -15.28, -4.58]} rotation={[-0.16, 0.58, 1.05]} />
                  <mesh name="Palm_25_2" geometry={nodes.Palm_25_2.geometry} material={materials['World ap']} position={[20.85, -37.95, 21.4]} rotation={[1.19, 0.15, -0.59]} />
                  <mesh name="Palm_26_2" geometry={nodes.Palm_26_2.geometry} material={materials['World ap']} position={[18.25, -1.99, -4.72]} rotation={[0.55, -0.38, -0.83]} />
                  <mesh name="Palm_27_2" geometry={nodes.Palm_27_2.geometry} material={materials['World ap']} position={[19.67, -16.21, 11.83]} rotation={[1.36, 0.29, -0.37]} />
                  <mesh name="Palm_28_2" geometry={nodes.Palm_28_2.geometry} material={materials['World ap']} position={[-1.08, 16.33, -28.79]} rotation={[-0.28, -0.35, 0.12]} />
                  <mesh name="Palm_29_2" geometry={nodes.Palm_29_2.geometry} material={materials['World ap']} position={[10.77, 13.64, -19.68]} rotation={[0.15, 0.1, -0.01]} />
                  <mesh name="Palm_30_2" geometry={nodes.Palm_30_2.geometry} material={materials['World ap']} position={[6.66, 9.32, -16.76]} rotation={[0.15, 0.1, 0.48]} />
                  <mesh name="Palm_31" geometry={nodes.Palm_31.geometry} material={materials['World ap']} position={[7.09, 15.76, -24.83]} rotation={[0.06, -0.01, 0.29]} />
                  <mesh name="Palm_32" geometry={nodes.Palm_32.geometry} material={materials['World ap']} position={[-2.73, -56.84, 30.19]} rotation={[1.24, 0.39, -0.12]} />
                  <mesh name="Palm_33" geometry={nodes.Palm_33.geometry} material={materials['World ap']} position={[-9.88, -52.08, 31.04]} rotation={[1.17, 0.39, 0.31]} />
                  <mesh name="Palm_34" geometry={nodes.Palm_34.geometry} material={materials['World ap']} position={[-19.74, -5.87, -0.58]} rotation={[0.45, 0.05, 0.92]} />
                  <mesh name="Palm_35" geometry={nodes.Palm_35.geometry} material={materials['World ap']} position={[-5.33, -53.11, 31.26]} rotation={[1.49, 0.14, 0.16]} />
                  <mesh name="Palm_36" geometry={nodes.Palm_36.geometry} material={materials['World ap']} position={[-16.15, -57.59, 32.22]} rotation={[0.98, 0.48, 0.1]} />
                  <mesh name="Palm_37" geometry={nodes.Palm_37.geometry} material={materials['World ap']} position={[-16.05, -55.34, 29.53]} rotation={[-0.16, 0.64, 0.7]} />
                  <mesh name="Palm_38" geometry={nodes.Palm_38.geometry} material={materials['World ap']} position={[-21.64, -54.54, 29.25]} rotation={[0.32, 0.86, 0.37]} />
                  <mesh name="Palm_39" geometry={nodes.Palm_39.geometry} material={materials['World ap']} position={[31.58, -90.81, 24.81]} rotation={[1.4, 0.41, 0.08]} />
                  <mesh name="Palm_40" geometry={nodes.Palm_40.geometry} material={materials['World ap']} position={[36.71, -91.51, 26.56]} rotation={[1.4, 0.41, 0.08]} />
                  <mesh name="Palm_41" geometry={nodes.Palm_41.geometry} material={materials['World ap']} position={[31.17, -87.97, 26.2]} rotation={[1.16, 0.38, 0.35]} />
                  <mesh name="Palm_42" geometry={nodes.Palm_42.geometry} material={materials['World ap']} position={[-2, 15.85, -24.98]} rotation={[0.06, -0.01, 0.29]} />
                  <mesh name="Palm_43" geometry={nodes.Palm_43.geometry} material={materials['World ap']} position={[-4.92, 11.27, -21.9]} rotation={[0.06, -0.01, 0.29]} />
                  <mesh name="Palm_44" geometry={nodes.Palm_44.geometry} material={materials['World ap']} position={[0.96, 13.48, -19.03]} rotation={[-0.06, -0.35, -0.2]} />
                  <mesh name="Palm_45" geometry={nodes.Palm_45.geometry} material={materials['World ap']} position={[10.66, 16.24, -26.03]} rotation={[-0.02, -0.37, -0.19]} />
                  <mesh name="Palm_46" geometry={nodes.Palm_46.geometry} material={materials['World ap']} position={[3.2, 13.69, -21.14]} rotation={[-0.22, -0.55, 0.33]} />
                  <mesh name="Palm_47" geometry={nodes.Palm_47.geometry} material={materials['World ap']} position={[6.85, 14.77, -30.22]} rotation={[-0.28, -0.35, 0.12]} />
                  <mesh name="Palm_48" geometry={nodes.Palm_48.geometry} material={materials['World ap']} position={[6.85, -36.91, 23.16]} rotation={[1.57, 0.32, -0.15]} />
                  <mesh name="Palm_49" geometry={nodes.Palm_49.geometry} material={materials['World ap']} position={[15.97, -46.53, 24.78]} rotation={[1.63, 0.04, -0.14]} />
                  <mesh name="Palm_50" geometry={nodes.Palm_50.geometry} material={materials['World ap']} position={[14.38, -38.59, 23.52]} rotation={[1.52, 0.07, 0.06]} />
                  <mesh name="Palm_51" geometry={nodes.Palm_51.geometry} material={materials['World ap']} position={[15.89, -32.79, 21.9]} rotation={[1.52, 0.07, 0.06]} />
                  <mesh name="Palm_52" geometry={nodes.Palm_52.geometry} material={materials['World ap']} position={[2.09, -29.38, 22.27]} rotation={[1.3, 0.31, 0.05]} />
                  <mesh name="Palm_53" geometry={nodes.Palm_53.geometry} material={materials['World ap']} position={[-6.08, -29.79, 22.21]} rotation={[1.3, -0.56, -0.05]} />
                  <mesh name="Palm_54" geometry={nodes.Palm_54.geometry} material={materials['World ap']} position={[1.22, -35.82, 23.25]} rotation={[1.3, -0.56, -0.05]} />
                  <mesh name="Palm_55" geometry={nodes.Palm_55.geometry} material={materials['World ap']} position={[-10.06, -19.6, 12.41]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_56" geometry={nodes.Palm_56.geometry} material={materials['World ap']} position={[30.28, -42.5, 21.12]} rotation={[1.22, 0.29, -0.21]} />
                  <mesh name="Palm_57" geometry={nodes.Palm_57.geometry} material={materials['World ap']} position={[-7.98, -58.25, 31.92]} rotation={[1.48, 0.82, 0.09]} />
                  <mesh name="Palm_58" geometry={nodes.Palm_58.geometry} material={materials['World ap']} position={[42.36, -84.15, 22.15]} rotation={[1.64, 0.39, -0.08]} />
                  <mesh name="Palm_59" geometry={nodes.Palm_59.geometry} material={materials['World ap']} position={[39.86, -78.61, 20.97]} rotation={[1.41, 0.41, -0.31]} />
                  <mesh name="Palm_60" geometry={nodes.Palm_60.geometry} material={materials['World ap']} position={[34.94, -80.08, 23.46]} rotation={[1.76, 0.79, -0.17]} />
                  <mesh name="Palm_61" geometry={nodes.Palm_61.geometry} material={materials['World ap']} position={[57.99, -88.43, 12.01]} rotation={[2.07, 0.15, -0.6]} />
                  <mesh name="Palm_62" geometry={nodes.Palm_62.geometry} material={materials['World ap']} position={[58.58, -94.41, 10.1]} rotation={[2.13, 0.09, -0.67]} />
                  <mesh name="Palm_63" geometry={nodes.Palm_63.geometry} material={materials['World ap']} position={[59.77, -89.69, 6.97]} rotation={[2.28, -0.12, -0.88]} />
                  <mesh name="Palm_64" geometry={nodes.Palm_64.geometry} material={materials['World ap']} position={[60.03, -87.34, 7.69]} rotation={[2.29, 0.34, -1.23]} />
                  <mesh name="Palm_65" geometry={nodes.Palm_65.geometry} material={materials['World ap']} position={[58.57, -78.12, 11.76]} rotation={[1.85, 0.31, -1.2]} />
                  <mesh name="Palm_66" geometry={nodes.Palm_66.geometry} material={materials['World ap']} position={[57.21, -84.55, 11.84]} rotation={[1.85, 0.31, -1.2]} />
                  <mesh name="Palm_67" geometry={nodes.Palm_67.geometry} material={materials['World ap']} position={[56.92, -80.37, 17.16]} rotation={[1.67, 0.06, -0.75]} />
                  <mesh name="Palm_68" geometry={nodes.Palm_68.geometry} material={materials['World ap']} position={[10.78, -3.3, 2.32]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_69" geometry={nodes.Palm_69.geometry} material={materials['World ap']} position={[5.83, -9.37, 9.31]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_70" geometry={nodes.Palm_70.geometry} material={materials['World ap']} position={[-1, 0.09, -3.06]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_71" geometry={nodes.Palm_71.geometry} material={materials['World ap']} position={[14.54, -17.29, 8.87]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_72" geometry={nodes.Palm_72.geometry} material={materials['World ap']} position={[12.31, -25.91, 17.49]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_73" geometry={nodes.Palm_73.geometry} material={materials['World ap']} position={[18.57, -32.36, 21.78]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_74" geometry={nodes.Palm_74.geometry} material={materials['World ap']} position={[23.75, -12.2, 0.25]} rotation={[1.27, 0.27, -0.26]} />
                  <mesh name="Palm_75" geometry={nodes.Palm_75.geometry} material={materials['World ap']} position={[25.34, -6.49, -1.19]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_76" geometry={nodes.Palm_76.geometry} material={materials['World ap']} position={[22.95, -17.72, 8.11]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_77" geometry={nodes.Palm_77.geometry} material={materials['World ap']} position={[29.07, -34.3, 15.54]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_78" geometry={nodes.Palm_78.geometry} material={materials['World ap']} position={[29.64, -30.22, 12.36]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_79" geometry={nodes.Palm_79.geometry} material={materials['World ap']} position={[19.9, -12.73, 6.53]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_92" geometry={nodes.Palm_92.geometry} material={materials['World ap']} position={[28.35, -13.13, 1.38]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_93" geometry={nodes.Palm_93.geometry} material={materials['World ap']} position={[30.5, 7.62, -22.16]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_94" geometry={nodes.Palm_94.geometry} material={materials['World ap']} position={[31.78, -3.43, -11.29]} rotation={[1.13, 0.31, -0.51]} />
                  <mesh name="Palm_95" geometry={nodes.Palm_95.geometry} material={materials['World ap']} position={[29.07, -3.5, -12.05]} rotation={[0.92, -1.03, 0.04]} />
                  <mesh name="Palm_96" geometry={nodes.Palm_96.geometry} material={materials['World ap']} position={[16.82, 0.35, -8.7]} rotation={[0.92, -1.03, 0.04]} />
                  <mesh name="Palm_97" geometry={nodes.Palm_97.geometry} material={materials['World ap']} position={[21.61, 9.52, -20.23]} rotation={[0.17, -0.66, -0.36]} />
                  <mesh name="Palm_98" geometry={nodes.Palm_98.geometry} material={materials['World ap']} position={[10.82, 15.81, -33.15]} rotation={[0.17, -0.66, -0.36]} />
                  <mesh name="Palm_99" geometry={nodes.Palm_99.geometry} material={materials['World ap']} position={[-13.65, -18.63, 12.21]} rotation={[1.25, 0.32, 0.51]} />
                </group>
                <group name="Africa" position={[68.89, -49.11, 73.37]} rotation={[0.26, -0.01, -0.67]}>
                  <mesh name="Palm_80_2" geometry={nodes.Palm_80_2.geometry} material={materials['World ap']} position={[6.68, 5.45, -5.44]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_81_3" geometry={nodes.Palm_81_3.geometry} material={materials['World ap']} position={[-7.51, 2.06, -3.03]} rotation={[0.62, 0.1, 0.56]} />
                  <mesh name="Palm_82_3" geometry={nodes.Palm_82_3.geometry} material={materials['World ap']} position={[-2.09, -1.41, 6.81]} rotation={[0.62, 0.1, 0.56]} />
                  <mesh name="Palm_83_2" geometry={nodes.Palm_83_2.geometry} material={materials['World ap']} position={[10.33, 4.53, 0.38]} rotation={[0.62, 0.1, -0.15]} />
                  <mesh name="Palm_85_2" geometry={nodes.Palm_85_2.geometry} material={materials['World ap']} position={[1.9, 7.88, -12.53]} rotation={[0.49, 0.09, 0.44]} />
                  <mesh name="Palm_86_3" geometry={nodes.Palm_86_3.geometry} material={materials['World ap']} position={[8.57, 0.2, 5.79]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_87_3" geometry={nodes.Palm_87_3.geometry} material={materials['World ap']} position={[-4.39, -8.33, 9.09]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_88_2" geometry={nodes.Palm_88_2.geometry} material={materials['World ap']} position={[3.83, -5.27, 11.71]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_89_3" geometry={nodes.Palm_89_3.geometry} material={materials['World ap']} position={[-10.33, -2.8, 4.11]} rotation={[0.87, 0.13, 0.36]} />
                  <mesh name="Palm_90_3" geometry={nodes.Palm_90_3.geometry} material={materials['World ap']} position={[3.18, 5.68, -0.35]} rotation={[0.87, 0.13, 0.36]} />
                  <mesh name="Palm_91_3" geometry={nodes.Palm_91_3.geometry} material={materials['World ap']} position={[-5.18, 6.53, -4.42]} rotation={[0.64, -0.43, 0.13]} />
                  <mesh name="Palm_3_3" geometry={nodes.Palm_3_3.geometry} material={materials['World ap']} position={[15.01, -0.26, 6.9]} rotation={[0.55, -0.38, -0.16]} />
                  <mesh name="Palm_2_4" geometry={nodes.Palm_2_4.geometry} material={materials['World ap']} position={[23.43, 3.57, -0.6]} rotation={[0.17, -0.66, -0.36]} />
                  <mesh name="Palm_3_4" geometry={nodes.Palm_3_4.geometry} material={materials['World ap']} position={[-14.08, 0.25, -0.89]} rotation={[0.28, -0.1, 0.37]} />
                  <mesh name="Palm_4_3" geometry={nodes.Palm_4_3.geometry} material={materials['World ap']} position={[-15.94, -7.85, 3.36]} rotation={[0.83, 0.19, 0.78]} />
                  <mesh name="Palm_5_3" geometry={nodes.Palm_5_3.geometry} material={materials['World ap']} position={[-10.07, -9.26, 6.41]} rotation={[1.01, 0.2, 0.56]} />
                  <mesh name="Palm_6_3" geometry={nodes.Palm_6_3.geometry} material={materials['World ap']} position={[-18.36, -3.4, -1.23]} rotation={[0.45, 0.05, 0.5]} />
                  <mesh name="Palm_7_3" geometry={nodes.Palm_7_3.geometry} material={materials['World ap']} position={[3.94, -12.13, 17.17]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_8_3" geometry={nodes.Palm_8_3.geometry} material={materials['World ap']} position={[-26.69, -9.89, 0.7]} rotation={[1.06, 0.27, 0.79]} />
                  <mesh name="Palm_9_3" geometry={nodes.Palm_9_3.geometry} material={materials['World ap']} position={[-3.81, -11.07, 12.33]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_10_3" geometry={nodes.Palm_10_3.geometry} material={materials['World ap']} position={[-21.32, -46.56, 22.37]} rotation={[0.83, 0.19, 0.87]} />
                  <mesh name="Palm_11_3" geometry={nodes.Palm_11_3.geometry} material={materials['World ap']} position={[3.38, -18.13, 21.43]} rotation={[1.26, 0.32, -0.09]} />
                  <mesh name="Palm_12_3" geometry={nodes.Palm_12_3.geometry} material={materials['World ap']} position={[9.39, -21.96, 22.77]} rotation={[2.94, 1.48, -1.71]} />
                  <mesh name="Palm_13_3" geometry={nodes.Palm_13_3.geometry} material={materials['World ap']} position={[20.16, -34.32, 26.2]} rotation={[0.77, 0.39, -0.48]} />
                  <mesh name="Palm_14_3" geometry={nodes.Palm_14_3.geometry} material={materials['World ap']} position={[27.71, -40.3, 27.28]} rotation={[0.77, 0.39, -0.48]} />
                  <mesh name="Palm_15_3" geometry={nodes.Palm_15_3.geometry} material={materials['World ap']} position={[17.09, -26.67, 18.71]} rotation={[1.26, 0.32, -0.86]} />
                  <mesh name="Palm_16_3" geometry={nodes.Palm_16_3.geometry} material={materials['World ap']} position={[9.83, -30.64, 25.46]} rotation={[1.26, 0.32, -0.34]} />
                  <mesh name="Palm_17_3" geometry={nodes.Palm_17_3.geometry} material={materials['World ap']} position={[15.03, -22.07, 19.78]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_18_3" geometry={nodes.Palm_18_3.geometry} material={materials['World ap']} position={[6.95, -16.77, 17]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_19_3" geometry={nodes.Palm_19_3.geometry} material={materials['World ap']} position={[12.76, -5.63, 12.63]} rotation={[0.91, 0.41, -0.22]} />
                  <mesh name="Palm_20_3" geometry={nodes.Palm_20_3.geometry} material={materials['World ap']} position={[17.89, -8.13, 13.31]} rotation={[1.36, 0.29, -0.37]} />
                  <mesh name="Palm_21_3" geometry={nodes.Palm_21_3.geometry} material={materials['World ap']} position={[-24.41, -15.37, 5.81]} rotation={[1.06, 0.27, 0.79]} />
                  <mesh name="Palm_22_3" geometry={nodes.Palm_22_3.geometry} material={materials['World ap']} position={[-31.92, -11.2, -2.5]} rotation={[0.71, -0.1, 0.82]} />
                  <mesh name="Palm_23_3" geometry={nodes.Palm_23_3.geometry} material={materials['World ap']} position={[-33.19, -17.17, 0.21]} rotation={[0.71, -0.1, 0.82]} />
                  <mesh name="Palm_24_3" geometry={nodes.Palm_24_3.geometry} material={materials['World ap']} position={[-37.94, -15.28, -4.58]} rotation={[-0.16, 0.58, 1.05]} />
                  <mesh name="Palm_25_3" geometry={nodes.Palm_25_3.geometry} material={materials['World ap']} position={[20.42, -36.77, 27.91]} rotation={[1.19, 0.15, -0.59]} />
                  <mesh name="Palm_26_3" geometry={nodes.Palm_26_3.geometry} material={materials['World ap']} position={[18.13, -0.72, 3.44]} rotation={[0.55, -0.38, -0.83]} />
                  <mesh name="Palm_27_3" geometry={nodes.Palm_27_3.geometry} material={materials['World ap']} position={[19.67, -16.21, 11.83]} rotation={[1.36, 0.29, -0.37]} />
                  <mesh name="Palm_28_3" geometry={nodes.Palm_28_3.geometry} material={materials['World ap']} position={[28.17, 5.95, -9.24]} rotation={[0.21, -0.56, -1.1]} />
                  <mesh name="Palm_30_3" geometry={nodes.Palm_30_3.geometry} material={materials['World ap']} position={[6.66, 9.32, -16.76]} rotation={[0.15, 0.1, 0.48]} />
                  <mesh name="Palm_31_2" geometry={nodes.Palm_31_2.geometry} material={materials['World ap']} position={[10.22, 15.03, -18.66]} rotation={[-0.18, -0.29, 0.85]} />
                  <mesh name="Palm_32_2" geometry={nodes.Palm_32_2.geometry} material={materials['World ap']} position={[-13.49, -47.26, 25.12]} rotation={[0.83, 0.19, 0.37]} />
                  <mesh name="Palm_33_2" geometry={nodes.Palm_33_2.geometry} material={materials['World ap']} position={[-17.55, -49.11, 23.96]} rotation={[1.48, 0.38, 0.52]} />
                  <mesh name="Palm_34_2" geometry={nodes.Palm_34_2.geometry} material={materials['World ap']} position={[-19.74, -5.87, -0.58]} rotation={[0.45, 0.05, 0.92]} />
                  <mesh name="Palm_35_2" geometry={nodes.Palm_35_2.geometry} material={materials['World ap']} position={[-13.45, -53.09, 24.64]} rotation={[1.49, 0.14, 0.16]} />
                  <mesh name="Palm_36_2" geometry={nodes.Palm_36_2.geometry} material={materials['World ap']} position={[-20.51, -49.63, 24.23]} rotation={[1.49, 0.14, 0.75]} />
                  <mesh name="Palm_37_2" geometry={nodes.Palm_37_2.geometry} material={materials['World ap']} position={[-3.36, -51.92, 28.29]} rotation={[1.85, 0.71, 0.22]} />
                  <mesh name="Palm_38_2" geometry={nodes.Palm_38_2.geometry} material={materials['World ap']} position={[-23.26, -43.92, 21.37]} rotation={[0.85, 0.21, 0.71]} />
                  <mesh name="Palm_39_2" geometry={nodes.Palm_39_2.geometry} material={materials['World ap']} position={[-40.85, -39.29, 1.14]} rotation={[0.85, 0.21, 0.71]} />
                  <mesh name="Palm_40_2" geometry={nodes.Palm_40_2.geometry} material={materials['World ap']} position={[-35.7, -38.14, 11.31]} rotation={[0.85, 0.21, 0.71]} />
                  <mesh name="Palm_41_2" geometry={nodes.Palm_41_2.geometry} material={materials['World ap']} position={[-42.85, -35.96, -1]} rotation={[0.68, 0.07, 0.92]} />
                  <mesh name="Palm_42_2" geometry={nodes.Palm_42_2.geometry} material={materials['World ap']} position={[-39.49, -19.19, -1.78]} rotation={[-0.16, 0.58, 1.05]} />
                  <mesh name="Palm_43_2" geometry={nodes.Palm_43_2.geometry} material={materials['World ap']} position={[-42.86, -23, -2.5]} rotation={[-0.16, 0.58, 1.19]} />
                  <mesh name="Palm_44_2" geometry={nodes.Palm_44_2.geometry} material={materials['World ap']} position={[-47.57, -27.07, -6.66]} rotation={[-0.16, 0.58, 1.19]} />
                  <mesh name="Palm_45_2" geometry={nodes.Palm_45_2.geometry} material={materials['World ap']} position={[-49, -24.28, -11.96]} rotation={[0.59, 0.16, 0.91]} />
                  <mesh name="Palm_46_2" geometry={nodes.Palm_46_2.geometry} material={materials['World ap']} position={[4.56, -48.51, 29.69]} rotation={[1.26, 0.32, -0.01]} />
                  <mesh name="Palm_47_2" geometry={nodes.Palm_47_2.geometry} material={materials['World ap']} position={[5.54, -51.83, 30.16]} rotation={[1.64, 0.3, -0.2]} />
                  <mesh name="Palm_48_2" geometry={nodes.Palm_48_2.geometry} material={materials['World ap']} position={[-43.37, -32.08, -1.41]} rotation={[0.68, 0.07, 0.92]} />
                  <mesh name="Palm_49_2" geometry={nodes.Palm_49_2.geometry} material={materials['World ap']} position={[-42.65, -29.47, -2.77]} rotation={[0.52, 0.18, 0.94]} />
                  <mesh name="Palm_1_3" geometry={nodes.Palm_1_3.geometry} material={materials['World ap']} position={[11.41, 14.61, -7.46]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_29_3" geometry={nodes.Palm_29_3.geometry} material={materials['World ap']} position={[18.34, 9.53, -0.34]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_50_2" geometry={nodes.Palm_50_2.geometry} material={materials['World ap']} position={[-0.93, -12.05, 15.13]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_51_2" geometry={nodes.Palm_51_2.geometry} material={materials['World ap']} position={[4.74, -16, 21.9]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_52_2" geometry={nodes.Palm_52_2.geometry} material={materials['World ap']} position={[-15.6, -2.14, -2.2]} rotation={[0.83, 0.19, 0.34]} />
                  <mesh name="Palm_53_2" geometry={nodes.Palm_53_2.geometry} material={materials['World ap']} position={[-8.65, 11.32, -5.18]} rotation={[0.83, 0.19, 0.55]} />
                  <mesh name="Palm_54_2" geometry={nodes.Palm_54_2.geometry} material={materials['World ap']} position={[1.47, -15.56, 20.88]} rotation={[1.03, 0.2, 0.52]} />
                  <mesh name="Palm_55_2" geometry={nodes.Palm_55_2.geometry} material={materials['World ap']} position={[9.27, -27, 25.49]} rotation={[1.03, 0.2, 0.52]} />
                  <mesh name="Palm_56_2" geometry={nodes.Palm_56_2.geometry} material={materials['World ap']} position={[8.67, -23.21, 22.7]} rotation={[1.03, 0.2, 0.52]} />
                  <mesh name="Palm_57_2" geometry={nodes.Palm_57_2.geometry} material={materials['World ap']} position={[-7.07, 5.71, -4.42]} rotation={[0.27, -0.12, 0.78]} />
                </group>
                <group name="Asia" position={[6.96, -32.15, -47.91]}>
                  <mesh name="Palm_1_4" geometry={nodes.Palm_1_4.geometry} material={materials['World ap']} position={[-6.96, 33.67, 35.61]} rotation={[-0.27, -0.13, -0.12]} />
                  <mesh name="Palm_4_4" geometry={nodes.Palm_4_4.geometry} material={materials['World ap']} position={[-6.96, 31, 47.91]} />
                  <mesh name="Palm_2_5" geometry={nodes.Palm_2_5.geometry} material={materials['World ap']} position={[-12.47, 28.34, 42]} rotation={[0.17, -0.05, 0.62]} />
                  <mesh name="Palm_3_5" geometry={nodes.Palm_3_5.geometry} material={materials['World ap']} position={[-2.4, 31.93, 59.91]} rotation={[0.02, 0.68, 0.56]} />
                  <mesh name="Palm_4_5" geometry={nodes.Palm_4_5.geometry} material={materials['World ap']} position={[4.96, 38.01, 18.2]} rotation={[-0.52, 0.28, 0.38]} />
                  <mesh name="Palm_5_4" geometry={nodes.Palm_5_4.geometry} material={materials['World ap']} position={[-10.37, 35.92, 29.78]} rotation={[-0.52, 0.28, 0.54]} />
                  <mesh name="Palm_6_4" geometry={nodes.Palm_6_4.geometry} material={materials['World ap']} position={[16.58, 37.18, 2.77]} rotation={[-0.63, -0.02, -0.07]} />
                  <mesh name="Palm_7_4" geometry={nodes.Palm_7_4.geometry} material={materials['World ap']} position={[-0.29, 29.92, 2.32]} rotation={[-0.24, -0.04, 0.49]} />
                  <mesh name="Palm_8_4" geometry={nodes.Palm_8_4.geometry} material={materials['World ap']} position={[7.44, 32.8, -8.64]} rotation={[-0.6, -0.22, 0.45]} />
                  <mesh name="Palm_9_4" geometry={nodes.Palm_9_4.geometry} material={materials['World ap']} position={[-0.01, 27.17, -3.81]} rotation={[-0.6, -0.22, 0.45]} />
                  <mesh name="Palm_10_4" geometry={nodes.Palm_10_4.geometry} material={materials['World ap']} position={[-22.48, 24.86, 10.47]} rotation={[-0.6, -0.22, 0.45]} />
                  <mesh name="Palm_11_4" geometry={nodes.Palm_11_4.geometry} material={materials['World ap']} position={[-15.51, 27.99, 31.82]} rotation={[-0.17, -0.28, 0.72]} />
                  <mesh name="Palm_12_4" geometry={nodes.Palm_12_4.geometry} material={materials['World ap']} position={[-12.2, 24.81, 5]} rotation={[-0.6, -0.22, 0.54]} />
                  <mesh name="Palm_13_4" geometry={nodes.Palm_13_4.geometry} material={materials['World ap']} position={[-0.3, -3.75, -48.35]} rotation={[-1.02, -0.37, 0.33]} />
                  <mesh name="Palm_14_4" geometry={nodes.Palm_14_4.geometry} material={materials['World ap']} position={[-0.54, -10.49, -53.93]} rotation={[-1.44, -0.46, 0.16]} />
                  <mesh name="Palm_15_4" geometry={nodes.Palm_15_4.geometry} material={materials['World ap']} position={[-12.21, -8.02, -44.5]} rotation={[-1.09, -0.35, 0.4]} />
                  <mesh name="Palm_16_4" geometry={nodes.Palm_16_4.geometry} material={materials['World ap']} position={[-0.63, -2.18, -39.28]} rotation={[-1.09, -0.35, 0.4]} />
                  <mesh name="Palm_17_4" geometry={nodes.Palm_17_4.geometry} material={materials['World ap']} position={[12.99, -24.82, -62]} rotation={[-1.45, -0.47, 0.25]} />
                  <mesh name="Palm_18_4" geometry={nodes.Palm_18_4.geometry} material={materials['World ap']} position={[19.74, -24.24, -57.38]} rotation={[-0.93, -0.28, 0.1]} />
                  <mesh name="Palm_19_4" geometry={nodes.Palm_19_4.geometry} material={materials['World ap']} position={[15.82, -32.12, -61.47]} rotation={[-1.65, -0.28, 0.18]} />
                  <mesh name="Palm_20_4" geometry={nodes.Palm_20_4.geometry} material={materials['World ap']} position={[-9.94, -21.07, -49.99]} rotation={[-1.09, -0.35, 0.4]} />
                  <mesh name="Palm_22_4" geometry={nodes.Palm_22_4.geometry} material={materials['World ap']} position={[12.51, 22.47, -18.38]} rotation={[-0.73, -0.28, 0.41]} />
                  <mesh name="Palm_23_4" geometry={nodes.Palm_23_4.geometry} material={materials['World ap']} position={[0.97, 19.17, -28.53]} rotation={[-0.74, -0.19, 0.29]} />
                  <mesh name="Palm_24_4" geometry={nodes.Palm_24_4.geometry} material={materials['World ap']} position={[-2.8, 16.91, -16.7]} rotation={[-0.67, 0.28, 0.46]} />
                  <mesh name="Palm_25_4" geometry={nodes.Palm_25_4.geometry} material={materials['World ap']} position={[-6.63, 10.66, -25.11]} rotation={[-0.8, 0.21, 0.5]} />
                  <mesh name="Palm_27_4" geometry={nodes.Palm_27_4.geometry} material={materials['World ap']} position={[-12.31, 27.76, 56.29]} rotation={[-0.24, 0.4, 0.97]} />
                  <mesh name="Palm_28_4" geometry={nodes.Palm_28_4.geometry} material={materials['World ap']} position={[1.92, 29.82, 70.39]} rotation={[0.2, 0.81, 0.23]} />
                  <mesh name="Palm_29_4" geometry={nodes.Palm_29_4.geometry} material={materials['World ap']} position={[-8.31, 27.07, 68.83]} rotation={[0.09, 0.73, 0.79]} />
                  <mesh name="Palm_30_4" geometry={nodes.Palm_30_4.geometry} material={materials['World ap']} position={[1.07, 24.54, 81.17]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_31_3" geometry={nodes.Palm_31_3.geometry} material={materials['World ap']} position={[-11.23, 22.14, 84.41]} rotation={[0.62, 0.1, 0.56]} />
                  <mesh name="Palm_32_3" geometry={nodes.Palm_32_3.geometry} material={materials['World ap']} position={[-18.41, 20.15, -13.05]} rotation={[-0.43, 0.38, 0.39]} />
                  <mesh name="Palm_33_3" geometry={nodes.Palm_33_3.geometry} material={materials['World ap']} position={[-11.31, -29.97, -56.66]} rotation={[-1.33, -0.09, 0.53]} />
                  <mesh name="Palm_34_3" geometry={nodes.Palm_34_3.geometry} material={materials['World ap']} position={[-2.82, -22.62, -56.4]} rotation={[-1.33, -0.09, 0.53]} />
                  <mesh name="Palm_35_3" geometry={nodes.Palm_35_3.geometry} material={materials['World ap']} position={[66.35, 16.06, 81.93]} rotation={[0.62, 0.1, -0.41]} />
                  <mesh name="Palm_36_3" geometry={nodes.Palm_36_3.geometry} material={materials['World ap']} position={[64.32, 14.95, 85.82]} rotation={[0.12, 0.39, 0.23]} />
                  <mesh name="Palm_37_3" geometry={nodes.Palm_37_3.geometry} material={materials['World ap']} position={[66.31, 15.02, 89.26]} rotation={[0.84, 0.44, -0.07]} />
                  <mesh name="Palm_38_3" geometry={nodes.Palm_38_3.geometry} material={materials['World ap']} position={[61.91, 14.24, 90.39]} rotation={[-2.53, 1.26, -2.94]} />
                  <mesh name="Palm_39_3" geometry={nodes.Palm_39_3.geometry} material={materials['World ap']} position={[62.55, 11.84, 93.74]} rotation={[-2.53, 1.26, -2.48]} />
                  <mesh name="Palm_40_3" geometry={nodes.Palm_40_3.geometry} material={materials['World ap']} position={[57.6, 13.93, 94.04]} rotation={[-1.96, 0.35, -2.94]} />
                  <mesh name="Palm_41_3" geometry={nodes.Palm_41_3.geometry} material={materials['World ap']} position={[-3.62, 16.9, 91.38]} rotation={[0.62, 0.1, 0.56]} />
                  <mesh name="Palm_42_3" geometry={nodes.Palm_42_3.geometry} material={materials['World ap']} position={[3.51, 18.62, 89.14]} rotation={[0.62, 0.1, -0.15]} />
                  <mesh name="Palm_43_3" geometry={nodes.Palm_43_3.geometry} material={materials['World ap']} position={[4.95, 25.82, 77.69]} rotation={[0.62, 0.1, -0.15]} />
                  <mesh name="Palm_44_3" geometry={nodes.Palm_44_3.geometry} material={materials['World ap']} position={[-5.27, 27.15, 76.29]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_45_3" geometry={nodes.Palm_45_3.geometry} material={materials['World ap']} position={[2.08, 14.92, 94.42]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_46_3" geometry={nodes.Palm_46_3.geometry} material={materials['World ap']} position={[-8.11, 11.75, 96.53]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_47_3" geometry={nodes.Palm_47_3.geometry} material={materials['World ap']} position={[-0.42, 9.39, 101.36]} rotation={[0.62, 0.1, 0.13]} />
                  <mesh name="Palm_48_3" geometry={nodes.Palm_48_3.geometry} material={materials['World ap']} position={[-8.56, 29.52, 62.86]} rotation={[0.33, -0.08, 0.37]} />
                  <mesh name="Palm_49_3" geometry={nodes.Palm_49_3.geometry} material={materials['World ap']} position={[-13.49, 16.26, 88.25]} rotation={[0.87, 0.13, 0.36]} />
                  <mesh name="Palm_50_3" geometry={nodes.Palm_50_3.geometry} material={materials['World ap']} position={[-2.95, 24.93, 86.58]} rotation={[0.87, 0.13, 0.36]} />
                  <mesh name="Palm_51_3" geometry={nodes.Palm_51_3.geometry} material={materials['World ap']} position={[-11.17, 28.5, 82.09]} rotation={[0.87, 0.13, 0.36]} />
                  <mesh name="Palm_52_3" geometry={nodes.Palm_52_3.geometry} material={materials['World ap']} position={[-7.6, 9.91, -32.18]} rotation={[-1.09, -0.35, 0.4]} />
                  <mesh name="Palm_53_3" geometry={nodes.Palm_53_3.geometry} material={materials['World ap']} position={[-17.81, 10.09, -27.9]} rotation={[-1.09, -0.35, 0.4]} />
                  <mesh name="Palm_54_3" geometry={nodes.Palm_54_3.geometry} material={materials['World ap']} position={[-11.72, 0.59, -38.75]} rotation={[-1.09, -0.35, 0.4]} />
                  <mesh name="Palm_55_3" geometry={nodes.Palm_55_3.geometry} material={materials['World ap']} position={[-13.49, -40.07, -59.24]} rotation={[-1.09, -0.35, 0.4]} />
                  <mesh name="Palm_59_2" geometry={nodes.Palm_59_2.geometry} material={materials['World ap']} position={[-11.76, -43.64, -63.36]} rotation={[-1.42, -0.78, 0.37]} />
                  <mesh name="Palm_62_2" geometry={nodes.Palm_62_2.geometry} material={materials['World ap']} position={[-7.15, -30.92, -58.58]} rotation={[-1.46, -0.42, -0.09]} />
                  <mesh name="Palm_63_2" geometry={nodes.Palm_63_2.geometry} material={materials['World ap']} position={[-8.88, -35.78, -58.84]} rotation={[-1.49, -0.43, 0.28]} />
                  <mesh name="Palm_65_2" geometry={nodes.Palm_65_2.geometry} material={materials['World ap']} position={[3.65, -17.16, -57.14]} rotation={[-1.54, -0.46, -0.03]} />
                  <mesh name="Palm_66_2" geometry={nodes.Palm_66_2.geometry} material={materials['World ap']} position={[5.36, -6.74, -51.73]} rotation={[-1.16, -0.32, -0.29]} />
                  <mesh name="Palm_67_2" geometry={nodes.Palm_67_2.geometry} material={materials['World ap']} position={[3.72, 0.92, -44.84]} rotation={[-1.16, -0.32, -0.29]} />
                  <mesh name="Palm_68_2" geometry={nodes.Palm_68_2.geometry} material={materials['World ap']} position={[14.46, 30.21, -13.68]} rotation={[-0.73, -0.28, 0.41]} />
                  <mesh name="Palm_69_2" geometry={nodes.Palm_69_2.geometry} material={materials['World ap']} position={[13.29, 21.49, -28.14]} rotation={[-0.59, -0.27, 0.14]} />
                  <mesh name="Palm_70_2" geometry={nodes.Palm_70_2.geometry} material={materials['World ap']} position={[8.95, 33.66, -4.11]} rotation={[-0.59, -0.27, -0.15]} />
                  <mesh name="Palm_78_2" geometry={nodes.Palm_78_2.geometry} material={materials['World ap']} position={[22.4, -38.59, -68.19]} rotation={[-1.44, -0.3, 0.14]} />
                  <mesh name="Palm_79_2" geometry={nodes.Palm_79_2.geometry} material={materials['World ap']} position={[26.24, -34.23, -67.24]} rotation={[-1.44, -0.3, -0.29]} />
                  <mesh name="Palm_82_4" geometry={nodes.Palm_82_4.geometry} material={materials['World ap']} position={[-13.35, -15.75, -49.14]} rotation={[-1.08, -0.3, 0.39]} />
                  <mesh name="Palm_83_3" geometry={nodes.Palm_83_3.geometry} material={materials['World ap']} position={[-16.47, -7.12, -39.92]} rotation={[-1.08, -0.3, 0.39]} />
                  <mesh name="Palm_84_2" geometry={nodes.Palm_84_2.geometry} material={materials['World ap']} position={[-6.14, -7.92, -49.28]} rotation={[-1.08, -0.3, 0.39]} />
                  <mesh name="Palm_85_3" geometry={nodes.Palm_85_3.geometry} material={materials['World ap']} position={[-16.18, -34.7, -57.1]} rotation={[-1.08, -0.3, 0.39]} />
                  <mesh name="Palm_89_4" geometry={nodes.Palm_89_4.geometry} material={materials['World ap']} position={[26.2, -27, -62.36]} rotation={[-1.09, -0.14, 0.3]} />
                  <mesh name="Palm_90_4" geometry={nodes.Palm_90_4.geometry} material={materials['World ap']} position={[23.02, -28.57, -62.09]} rotation={[-1.65, -0.28, 0.18]} />
                  <mesh name="Palm_91_4" geometry={nodes.Palm_91_4.geometry} material={materials['World ap']} position={[41.93, -39.28, -64.12]} rotation={[-1.44, -0.3, 0.14]} />
                  <mesh name="Palm_92_2" geometry={nodes.Palm_92_2.geometry} material={materials['World ap']} position={[46.45, -43.01, -65.7]} rotation={[-1.76, -0.48, -0.47]} />
                  <mesh name="Palm_93_2" geometry={nodes.Palm_93_2.geometry} material={materials['World ap']} position={[42.95, -42.42, -66.69]} rotation={[-2.01, -0.3, -0.08]} />
                  <mesh name="Palm_94_2" geometry={nodes.Palm_94_2.geometry} material={materials['World ap']} position={[-14.09, -25.68, 115.96]} rotation={[0.97, 0.14, 0.09]} />
                  <mesh name="Palm_95_2" geometry={nodes.Palm_95_2.geometry} material={materials['World ap']} position={[-5.65, -31.65, 123.65]} rotation={[0.38, 0.06, 0.15]} />
                  <mesh name="Palm_96_2" geometry={nodes.Palm_96_2.geometry} material={materials['World ap']} position={[-9.15, -42.91, 121.5]} rotation={[1.25, 0.15, 0.05]} />
                  <mesh name="Palm_97_2" geometry={nodes.Palm_97_2.geometry} material={materials['World ap']} position={[-13.76, -28.38, 119.68]} rotation={[1.25, 0.15, 0.05]} />
                  <mesh name="Palm_98_2" geometry={nodes.Palm_98_2.geometry} material={materials['World ap']} position={[-1.95, -53.49, 127.94]} rotation={[1.58, 0.16, -0.01]} />
                  <mesh name="Palm_99_2" geometry={nodes.Palm_99_2.geometry} material={materials['World ap']} position={[2.88, -57.25, 131.09]} rotation={[1.58, 0.16, -0.01]} />
                  <mesh name="Palm_100" geometry={nodes.Palm_100.geometry} material={materials['World ap']} position={[-6.14, -32.21, 123.21]} rotation={[0.38, 0.06, 0.75]} />
                  <mesh name="Palm_101" geometry={nodes.Palm_101.geometry} material={materials['World ap']} position={[-8.04, -37.37, 125.27]} rotation={[1.45, 0.21, -0.61]} />
                  <mesh name="Palm_102" geometry={nodes.Palm_102.geometry} material={materials['World ap']} position={[-8.88, -37.33, 125.11]} rotation={[1.45, 0.21, -0.01]} />
                  <mesh name="Palm_103" geometry={nodes.Palm_103.geometry} material={materials['World ap']} position={[-7.19, -44.55, 125.18]} rotation={[1.45, 0.21, -0.61]} />
                  <mesh name="Palm_104" geometry={nodes.Palm_104.geometry} material={materials['World ap']} position={[-7.67, -45.68, 125.73]} rotation={[1.45, 0.21, -0.01]} />
                  <mesh name="Palm_105" geometry={nodes.Palm_105.geometry} material={materials['World ap']} position={[-2.09, -29.58, 122.07]} rotation={[1.14, 0.4, 0.44]} />
                  <mesh name="Palm_106" geometry={nodes.Palm_106.geometry} material={materials['World ap']} position={[-2.56, -31.17, 124.41]} rotation={[1.57, 0.54, 0.24]} />
                  <mesh name="Palm_107" geometry={nodes.Palm_107.geometry} material={materials['World ap']} position={[-8.85, -35.69, 124.91]} rotation={[1.18, -0.06, 0.47]} />
                  <mesh name="Palm_108" geometry={nodes.Palm_108.geometry} material={materials['World ap']} position={[-13.92, -32.88, 121.37]} rotation={[1.18, -0.06, 0.47]} />
                  <mesh name="Palm_109" geometry={nodes.Palm_109.geometry} material={materials['World ap']} position={[44.86, 34.66, 15.81]} rotation={[-0.63, -0.02, -0.29]} />
                  <mesh name="Palm_110" geometry={nodes.Palm_110.geometry} material={materials['World ap']} position={[38.25, 36.83, 18.88]} rotation={[-0.26, -0.12, -0.26]} />
                  <mesh name="Palm_111" geometry={nodes.Palm_111.geometry} material={materials['World ap']} position={[25.39, 38.36, 19.94]} rotation={[-0.02, -0.1, 0.13]} />
                  <mesh name="Palm_112" geometry={nodes.Palm_112.geometry} material={materials['World ap']} position={[32.61, 36.51, 18.2]} rotation={[-0.26, -0.12, 0.1]} />
                  <mesh name="Palm_113" geometry={nodes.Palm_113.geometry} material={materials['World ap']} position={[37.33, 36.14, 7.65]} rotation={[-0.63, -0.02, -0.29]} />
                  <mesh name="Palm_114" geometry={nodes.Palm_114.geometry} material={materials['World ap']} position={[29.43, 37.44, 5.41]} rotation={[-0.63, -0.02, -0.29]} />
                  <mesh name="Palm_115" geometry={nodes.Palm_115.geometry} material={materials['World ap']} position={[21.25, 36.35, 3.26]} rotation={[-0.63, -0.02, -0.29]} />
                  <mesh name="Palm_116" geometry={nodes.Palm_116.geometry} material={materials['World ap']} position={[11.3, 39.96, 16.64]} rotation={[-0.52, 0.28, 0.38]} />
                  <mesh name="Palm_117" geometry={nodes.Palm_117.geometry} material={materials['World ap']} position={[13.26, 39.68, 19.18]} rotation={[-0.02, -0.1, -0.18]} />
                  <mesh name="Palm_21_4" geometry={nodes.Palm_21_4.geometry} material={materials['World ap']} position={[56.8, 12.26, 94.76]} rotation={[-1.96, 0.35, 2.39]} />
                </group>
              </group>
              <group name="Firtrees" position={[-31.1, 52.69, 65.19]}>
                <mesh name="Firtree_48" geometry={nodes.Firtree_48.geometry} material={materials['World ap']} position={[-60.73, -7.65, -68.5]} rotation={[2.94, -0.3, 2.3]} />
                <mesh name="Firtree_47" geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-35.47, -9.39, -0.67]} rotation={[2.6, -1.06, 1.69]} />
                <mesh name="Firtree_46" geometry={nodes.Firtree_46.geometry} material={materials['World ap']} position={[-57.99, -5.65, -61.58]} rotation={[2.94, -0.3, 2.3]} />
                <mesh name="Firtree_45" geometry={nodes.Firtree_45.geometry} material={materials['World ap']} position={[-6.21, 6.04, 13.9]} rotation={[0.46, 0.22, 0.59]} />
                <mesh name="Firtree_44" geometry={nodes.Firtree_44.geometry} material={materials['World ap']} position={[-33.65, -2.7, 1.7]} rotation={[2.66, -0.89, 1.94]} />
                <mesh name="Firtree_43" geometry={nodes.Firtree_43.geometry} material={materials['World ap']} position={[-54.57, -8.73, -18.99]} rotation={[2.66, -0.89, 1.94]} />
                <mesh name="Firtree_42" geometry={nodes.Firtree_42.geometry} material={materials['World ap']} position={[-55.56, -5.23, -27.66]} rotation={[2.84, -0.37, 1.99]} />
                <mesh name="Firtree_41" geometry={nodes.Firtree_41.geometry} material={materials['World ap']} position={[-65.79, -15.22, -56.83]} rotation={[2.94, -0.04, 1.89]} />
                <mesh name="Firtree_40" geometry={nodes.Firtree_40.geometry} material={materials['World ap']} position={[-51.97, -1.96, -30.39]} rotation={[2.96, -0.44, 2.3]} />
                <mesh name="Firtree_39" geometry={nodes.Firtree_39.geometry} material={materials['World ap']} position={[-58.73, -10.84, -25.94]} rotation={[2.89, -0.4, 2.13]} />
                <mesh name="Firtree_38" geometry={nodes.Firtree_38.geometry} material={materials['World ap']} position={[-51.65, -3.49, -23.49]} rotation={[2.87, -0.58, 2.07]} />
                <mesh name="Firtree_37" geometry={nodes.Firtree_37.geometry} material={materials['World ap']} position={[-54.15, -13.54, -16.86]} rotation={[2.93, -0.33, 2.02]} />
                <mesh name="Firtree_36" geometry={nodes.Firtree_36.geometry} material={materials['World ap']} position={[26.46, -12.03, 29.17]} rotation={[0.94, 0.46, -0.08]} />
                <mesh name="Firtree_35" geometry={nodes.Firtree_35.geometry} material={materials['World ap']} position={[10.25, 11.14, 16.18]} rotation={[0.59, 0.17, 0.13]} />
                <mesh name="Firtree_34" geometry={nodes.Firtree_34.geometry} material={materials['World ap']} position={[-23.02, -2.18, 2.21]} rotation={[2.94, -0.93, 2.17]} />
                <mesh name="Firtree_33" geometry={nodes.Firtree_33.geometry} material={materials['World ap']} position={[-43.78, -13.1, -4.37]} rotation={[2.8, -0.77, 1.61]} />
                <mesh name="Firtree_32" geometry={nodes.Firtree_32.geometry} material={materials['World ap']} position={[-38.43, -17.1, 1.09]} rotation={[2.86, -0.77, 1.69]} />
                <mesh name="Firtree_31" geometry={nodes.Firtree_31.geometry} material={materials['World ap']} position={[-40.85, -4.78, -8.02]} rotation={[2.99, -0.88, 2.06]} />
                <mesh name="Firtree_30" geometry={nodes.Firtree_30.geometry} material={materials['World ap']} position={[-34.07, -23.04, 8.94]} rotation={[1.66, -0.46, 0.84]} />
                <mesh name="Firtree_29" geometry={nodes.Firtree_29.geometry} material={materials['World ap']} position={[-1.4, 13.11, 1.04]} rotation={[-1, 1.21, 1.74]} />
                <mesh name="Firtree_28" geometry={nodes.Firtree_28.geometry} material={materials['World ap']} position={[-32.26, -14.87, 5.27]} rotation={[2.57, -0.92, 1.67]} />
                <mesh name="Firtree_27" geometry={nodes.Firtree_27.geometry} material={materials['World ap']} position={[-25.26, -6.77, 9.15]} rotation={[1.37, -0.69, 0.68]} />
                <mesh name="Firtree_26" geometry={nodes.Firtree_26.geometry} material={materials['World ap']} position={[-26.46, -13.78, 13.48]} rotation={[1.54, -0.72, 0.95]} />
                <mesh name="Firtree_25" geometry={nodes.Firtree_25.geometry} material={materials['World ap']} position={[75.15, 15.56, -10.88]} rotation={[0.15, -0.72, -0.59]} />
                <mesh name="Firtree_24" geometry={nodes.Firtree_24.geometry} material={materials['World ap']} position={[69, 14.94, -3.88]} rotation={[0.27, -0.75, -0.27]} />
                <mesh name="Firtree_23" geometry={nodes.Firtree_23.geometry} material={materials['World ap']} position={[25.17, -3.4, 20.84]} rotation={[3.06, 1.48, -2.12]} />
                <mesh name="Firtree_22" geometry={nodes.Firtree_22.geometry} material={materials['World ap']} position={[29.08, 14.08, 9.47]} rotation={[-1.47, -1.43, -2.22]} />
                <mesh name="Firtree_21" geometry={nodes.Firtree_21.geometry} material={materials['World ap']} position={[22.88, 17.57, 4.38]} rotation={[-2.54, -0.97, 3.08]} />
                <mesh name="Firtree_20" geometry={nodes.Firtree_20.geometry} material={materials['World ap']} position={[54.38, 7.34, 11.91]} rotation={[-2.22, -0.96, -2.94]} />
                <mesh name="Firtree_19" geometry={nodes.Firtree_19.geometry} material={materials['World ap']} position={[53, 16.73, 2.14]} rotation={[-2.22, -0.96, -2.94]} />
                <mesh name="Firtree_18" geometry={nodes.Firtree_18.geometry} material={materials['World ap']} position={[41.8, 17.81, 2.87]} rotation={[Math.PI / 5, -0.83, -0.17]} />
                <mesh name="Firtree_17" geometry={nodes.Firtree_17.geometry} material={materials['World ap']} position={[-17.22, -5.26, 14.96]} rotation={[3.07, -0.77, 2.23]} />
                <mesh name="Firtree_16" geometry={nodes.Firtree_16.geometry} material={materials['World ap']} position={[-13.86, 1.86, 8.64]} rotation={[2.79, -0.95, 2.06]} />
                <mesh name="Firtree_15" geometry={nodes.Firtree_15.geometry} material={materials['World ap']} position={[-29.06, -21.21, 15.77]} rotation={[1.57, -0.72, 1]} />
                <mesh name="Firtree_14" geometry={nodes.Firtree_14.geometry} material={materials['World ap']} position={[8.41, 15.37, 7.08]} rotation={[1.08, -0.83, 0.49]} />
                <mesh name="Firtree_13" geometry={nodes.Firtree_13.geometry} material={materials['World ap']} position={[0.09, 10.47, 11.87]} rotation={[-1.07, 1.21, 1.74]} />
                <mesh name="Firtree_12" geometry={nodes.Firtree_12.geometry} material={materials['World ap']} position={[35, 9.99, 12.13]} rotation={[0.92, -0.84, 0.1]} />
                <mesh name="Firtree_11" geometry={nodes.Firtree_11.geometry} material={materials['World ap']} position={[18.44, 13.86, 8.04]} rotation={[0.92, -0.84, 0.1]} />
                <mesh name="Firtree_10" geometry={nodes.Firtree_10.geometry} material={materials['World ap']} position={[55.57, -11.04, 25.55]} rotation={[-2.94, 1.48, -2.34]} />
                <mesh name="Firtree_9" geometry={nodes.Firtree_9.geometry} material={materials['World ap']} position={[32.65, 0.61, 17.22]} rotation={[3.06, 1.48, -2.12]} />
                <mesh name="Firtree_8" geometry={nodes.Firtree_8.geometry} material={materials['World ap']} position={[25.41, 9.85, 14.05]} rotation={[0.72, -0.84, -0.1]} />
                <mesh name="Firtree_7" geometry={nodes.Firtree_7.geometry} material={materials['World ap']} position={[59.97, 3.21, 15.62]} rotation={[0.39, -0.79, -0.34]} />
                <mesh name="Firtree_6" geometry={nodes.Firtree_6.geometry} material={materials['World ap']} position={[77.85, 10.09, -3.43]} rotation={[0.26, -0.67, -0.56]} />
                <mesh name="Firtree_5" geometry={nodes.Firtree_5.geometry} material={materials['World ap']} position={[71.71, 0.04, 10.57]} rotation={[0.15, -0.72, -0.59]} />
                <mesh name="Firtree_4" geometry={nodes.Firtree_4.geometry} material={materials['World ap']} position={[61.73, 7.85, 6.88]} rotation={[0.31, -0.76, -0.4]} />
                <mesh name="Firtree_3" geometry={nodes.Firtree_3.geometry} material={materials['World ap']} position={[46.08, 8.93, 7.4]} rotation={[Math.PI / 5, -0.83, -0.17]} />
                <mesh name="Firtree_2" geometry={nodes.Firtree_2.geometry} material={materials['World ap']} position={[30.5, 18.25, -0.09]} rotation={[Math.PI / 5, -0.83, -0.17]} />
                <mesh name="Firtree_1" geometry={nodes.Firtree_1.geometry} material={materials['World ap']} position={[49.08, -1.04, 17.34]} rotation={[0.54, -0.82, -0.23]} />
                <mesh name="Firtree_93" geometry={nodes.Firtree_93.geometry} material={materials['World ap']} position={[60.1, -2.38, -142.32]} rotation={[-0.53, 0.23, -0.5]} />
                <mesh name="Firtree_94" geometry={nodes.Firtree_94.geometry} material={materials['World ap']} position={[100.81, -11.14, -115.34]} rotation={[-0.34, 0.68, -0.86]} />
                <mesh name="Firtree_95" geometry={nodes.Firtree_95.geometry} material={materials['World ap']} position={[57.73, -5.76, -148.83]} rotation={[-0.53, 0.23, -0.5]} />
                <mesh name="Firtree_96" geometry={nodes.Firtree_96.geometry} material={materials['World ap']} position={[58.51, -13.82, -147.99]} rotation={[1.99, -0.04, -2.78]} />
                <mesh name="Firtree_97" geometry={nodes.Firtree_97.geometry} material={materials['World ap']} position={[96.41, -6.79, -119.21]} rotation={[-0.27, 0.51, -0.71]} />
                <mesh name="Firtree_98" geometry={nodes.Firtree_98.geometry} material={materials['World ap']} position={[85.58, -43.14, -146.63]} rotation={[0.51, 1.12, -1.97]} />
                <mesh name="Firtree_99" geometry={nodes.Firtree_99.geometry} material={materials['World ap']} position={[96.56, -36.08, -136.96]} rotation={[-0.15, 0.73, -1.28]} />
                <mesh name="Firtree_100" geometry={nodes.Firtree_100.geometry} material={materials['World ap']} position={[68.64, -13.15, -147.79]} rotation={[-0.61, 0.04, -0.35]} />
                <mesh name="Firtree_101" geometry={nodes.Firtree_101.geometry} material={materials['World ap']} position={[93.15, -31.16, -137.77]} rotation={[-0.27, 0.83, -1.13]} />
                <mesh name="Firtree_102" geometry={nodes.Firtree_102.geometry} material={materials['World ap']} position={[96.3, -42.75, -137.66]} rotation={[-0.2, 0.78, -1.32]} />
                <mesh name="Firtree_103" geometry={nodes.Firtree_103.geometry} material={materials['World ap']} position={[89.76, -35.76, -141.95]} rotation={[-0.07, 0.94, -1.46]} />
                <mesh name="Firtree_104" geometry={nodes.Firtree_104.geometry} material={materials['World ap']} position={[88.03, -47.93, -141.59]} rotation={[-0.27, 0.72, -1.39]} />
                <mesh name="Firtree_105" geometry={nodes.Firtree_105.geometry} material={materials['World ap']} position={[32.48, -49.24, -162.03]} rotation={[1.53, -0.12, 2.97]} />
                <mesh name="Firtree_106" geometry={nodes.Firtree_106.geometry} material={materials['World ap']} position={[32.32, -9.78, -153.21]} rotation={[1.91, 0.11, 3.08]} />
                <mesh name="Firtree_107" geometry={nodes.Firtree_107.geometry} material={materials['World ap']} position={[89.63, -10.73, -124.84]} rotation={[-0.46, 0.48, -0.6]} />
                <mesh name="Firtree_108" geometry={nodes.Firtree_108.geometry} material={materials['World ap']} position={[107.22, -9.91, -108.01]} rotation={[-0.3, 0.37, -1.12]} />
                <mesh name="Firtree_109" geometry={nodes.Firtree_109.geometry} material={materials['World ap']} position={[105.98, -17.17, -112.5]} rotation={[-0.35, 0.35, -1.07]} />
                <mesh name="Firtree_110" geometry={nodes.Firtree_110.geometry} material={materials['World ap']} position={[101.09, -2.74, -109.53]} rotation={[-0.47, 0.42, -0.75]} />
                <mesh name="Firtree_111" geometry={nodes.Firtree_111.geometry} material={materials['World ap']} position={[107.12, -26.45, -117.83]} rotation={[0.76, 0.6, -1.71]} />
                <mesh name="Firtree_112" geometry={nodes.Firtree_112.geometry} material={materials['World ap']} position={[47.47, -1.34, -144.51]} rotation={[2.65, -1.26, -2.47]} />
                <mesh name="Firtree_113" geometry={nodes.Firtree_113.geometry} material={materials['World ap']} position={[103, -18.18, -120.06]} rotation={[-0.34, 0.68, -0.86]} />
                <mesh name="Firtree_114" geometry={nodes.Firtree_114.geometry} material={materials['World ap']} position={[95.74, -15.94, -127.95]} rotation={[0.84, 0.93, -1.76]} />
                <mesh name="Firtree_115" geometry={nodes.Firtree_115.geometry} material={materials['World ap']} position={[99.89, -23.26, -127.72]} rotation={[0.65, 0.86, -1.46]} />
                <mesh name="Firtree_116" geometry={nodes.Firtree_116.geometry} material={materials['World ap']} position={[-27.63, -20.93, -142.42]} rotation={[2.68, 0.84, 2.1]} />
                <mesh name="Firtree_117" geometry={nodes.Firtree_117.geometry} material={materials['World ap']} position={[-20.01, -23.67, -149.08]} rotation={[2.57, 0.91, 2.46]} />
                <mesh name="Firtree_118" geometry={nodes.Firtree_118.geometry} material={materials['World ap']} position={[29.99, -37.55, -160.44]} rotation={[1.04, -1.24, 2.63]} />
                <mesh name="Firtree_119" geometry={nodes.Firtree_119.geometry} material={materials['World ap']} position={[19.47, -19.14, -155.91]} rotation={[-1.99, 1.1, 0.59]} />
                <mesh name="Firtree_120" geometry={nodes.Firtree_120.geometry} material={materials['World ap']} position={[23.48, -17.29, -156.74]} rotation={[-1.42, 0.67, 0.18]} />
                <mesh name="Firtree_121" geometry={nodes.Firtree_121.geometry} material={materials['World ap']} position={[-1.97, -33.77, -156.84]} rotation={[-1.64, 0.63, 0.32]} />
                <mesh name="Firtree_122" geometry={nodes.Firtree_122.geometry} material={materials['World ap']} position={[-4.78, -25.41, -154.54]} rotation={[-1.2, 0.84, 0.43]} />
                <mesh name="Firtree_123" geometry={nodes.Firtree_123.geometry} material={materials['World ap']} position={[8.06, -16.64, -151.6]} rotation={[2.21, 1.08, 2.57]} />
                <mesh name="Firtree_124" geometry={nodes.Firtree_124.geometry} material={materials['World ap']} position={[91.04, -19.61, -136.01]} rotation={[-0.49, 0.3, -0.63]} />
                <mesh name="Firtree_125" geometry={nodes.Firtree_125.geometry} material={materials['World ap']} position={[85.13, -11.9, -132.53]} rotation={[-0.38, 0.54, -0.63]} />
                <mesh name="Firtree_126" geometry={nodes.Firtree_126.geometry} material={materials['World ap']} position={[105.41, -28.96, -125.95]} rotation={[0.63, 0.84, -1.41]} />
                <mesh name="Firtree_127" geometry={nodes.Firtree_127.geometry} material={materials['World ap']} position={[39.82, -5.96, -150.33]} rotation={[1.68, 1.17, -2.76]} />
                <mesh name="Firtree_128" geometry={nodes.Firtree_128.geometry} material={materials['World ap']} position={[47.72, -7.83, -149.66]} rotation={[2.7, -1.28, -2.26]} />
                <mesh name="Firtree_129" geometry={nodes.Firtree_129.geometry} material={materials['World ap']} position={[14.13, -27.2, -158.94]} rotation={[1.79, 1.16, 3]} />
                <mesh name="Firtree_130" geometry={nodes.Firtree_130.geometry} material={materials['World ap']} position={[24.46, -10.97, -155.6]} rotation={[1.79, 1.16, 3]} />
                <mesh name="Firtree_131" geometry={nodes.Firtree_131.geometry} material={materials['World ap']} position={[19.47, -50.91, -161.26]} rotation={[1.05, -1.27, 2.72]} />
                <mesh name="Firtree_132" geometry={nodes.Firtree_132.geometry} material={materials['World ap']} position={[19.86, -38.59, -158.21]} rotation={[1.04, -1.24, 2.63]} />
                <mesh name="Firtree_133" geometry={nodes.Firtree_133.geometry} material={materials['World ap']} position={[24.79, -28.54, -160.56]} rotation={[2.09, 1.12, 2.67]} />
                <mesh name="Firtree_134" geometry={nodes.Firtree_134.geometry} material={materials['World ap']} position={[-5.5, -40.82, -156.92]} rotation={[2.46, 0.98, 2.35]} />
                <mesh name="Firtree_135" geometry={nodes.Firtree_135.geometry} material={materials['World ap']} position={[-17.42, -31.28, -152.15]} rotation={[2.53, 0.83, 2.17]} />
                <mesh name="Firtree_136" geometry={nodes.Firtree_136.geometry} material={materials['World ap']} position={[21.09, -2.5, -148.06]} rotation={[1.83, 1.24, -2.66]} />
                <mesh name="Firtree_137" geometry={nodes.Firtree_137.geometry} material={materials['World ap']} position={[14.87, -4.09, -147.07]} rotation={[2.8, 0.95, 2.49]} />
                <mesh name="Firtree_138" geometry={nodes.Firtree_138.geometry} material={materials['World ap']} position={[4.81, -27.29, -154.88]} rotation={[2.21, 1.08, 2.57]} />
                <mesh name="Firtree_139" geometry={nodes.Firtree_139.geometry} material={materials['World ap']} position={[15.67, -10.95, -151.62]} rotation={[2.21, 1.08, 3]} />
                <mesh name="Firtree_140" geometry={nodes.Firtree_140.geometry} material={materials['World ap']} position={[9.4, -36.74, -156.82]} rotation={[2.31, 1.05, 2.48]} />
                <mesh name="Firtree" geometry={nodes.Firtree.geometry} material={materials['World ap']} position={[81.77, 12.72, -10.24]} rotation={[0.24, -0.56, -0.58]} />
                <mesh name="Firtree_49" geometry={nodes.Firtree_49.geometry} material={materials['World ap']} position={[60.69, -5.39, 19.53]} rotation={[0.54, -0.82, -0.23]} />
                <mesh name="Firtree_50" geometry={nodes.Firtree_50.geometry} material={materials['World ap']} position={[33.77, -12.72, 24.3]} rotation={[0.54, -0.82, -0.6]} />
                <mesh name="Firtree_51" geometry={nodes.Firtree_51.geometry} material={materials['World ap']} position={[-12.09, -3.42, 19.81]} rotation={[1.14, -0.65, 0.87]} />
                <mesh name="Firtree_52" geometry={nodes.Firtree_52.geometry} material={materials['World ap']} position={[-6.36, 8.76, 2.58]} rotation={[1.03, -0.56, 0.67]} />
                <mesh name="Firtree_53" geometry={nodes.Firtree_53.geometry} material={materials['World ap']} position={[-45.76, -2.96, -18.1]} rotation={[0.98, -0.67, 0.58]} />
                <mesh name="Firtree_54" geometry={nodes.Firtree_54.geometry} material={materials['World ap']} position={[-60.97, -11.37, -62.25]} rotation={[1.59, -0.51, 1.52]} />
                <mesh name="Firtree_55" geometry={nodes.Firtree_55.geometry} material={materials['World ap']} position={[-61.92, -13.63, -72.12]} rotation={[1.68, -0.3, 1.69]} />
                <mesh name="Firtree_56" geometry={nodes.Firtree_56.geometry} material={materials['World ap']} position={[-59.43, -8.99, -74.92]} rotation={[1.65, -0.55, 1.59]} />
                <mesh name="Firtree_57" geometry={nodes.Firtree_57.geometry} material={materials['World ap']} position={[-60.61, -11.06, -76.72]} rotation={[3, 0.29, 1.91]} />
                <mesh name="Firtree_58" geometry={nodes.Firtree_58.geometry} material={materials['World ap']} position={[-63.26, -12.84, -66.68]} rotation={[3.04, -0.19, 2]} />
                <mesh name="Firtree_59" geometry={nodes.Firtree_59.geometry} material={materials['World ap']} position={[-61.48, -17.68, -76.24]} rotation={[3.09, 0.2, 1.9]} />
                <mesh name="Firtree_60" geometry={nodes.Firtree_60.geometry} material={materials['World ap']} position={[-61.84, -12.85, -81.68]} rotation={[3.01, 0.29, 1.88]} />
                <mesh name="Firtree_61" geometry={nodes.Firtree_61.geometry} material={materials['World ap']} position={[43.94, -8.05, 25.17]} rotation={[1.16, 0.46, -0.08]} />
                <mesh name="Firtree_62" geometry={nodes.Firtree_62.geometry} material={materials['World ap']} position={[68.44, -2.33, 19.36]} rotation={[0.68, 0.23, -0.42]} />
                <mesh name="Firtree_63" geometry={nodes.Firtree_63.geometry} material={materials['World ap']} position={[83.67, -0.55, 4.75]} rotation={[0.68, 0.23, -0.42]} />
                <mesh name="Firtree_64" geometry={nodes.Firtree_64.geometry} material={materials['World ap']} position={[84.08, 6.41, -9.69]} rotation={[0.71, 0.09, -0.59]} />
                <mesh name="Firtree_65" geometry={nodes.Firtree_65.geometry} material={materials['World ap']} position={[59.05, 15.54, -1.03]} rotation={[0.15, -0.72, -0.59]} />
                <mesh name="Firtree_66" geometry={nodes.Firtree_66.geometry} material={materials['World ap']} position={[15.23, 20.6, 1.7]} rotation={[0.77, -0.76, 0.24]} />
                <mesh name="Firtree_67" geometry={nodes.Firtree_67.geometry} material={materials['World ap']} position={[19.25, 1.46, 10.38]} rotation={[0.95, -0.96, 0.22]} />
                <mesh name="Firtree_68" geometry={nodes.Firtree_68.geometry} material={materials['World ap']} position={[-18.89, -11.39, 16.97]} rotation={[3.02, -0.77, 1.91]} />
                <mesh name="Firtree_69" geometry={nodes.Firtree_69.geometry} material={materials['World ap']} position={[-6.61, 9.28, 9.17]} rotation={[-1.07, 1.21, 1.74]} />
                <mesh name="Firtree_70" geometry={nodes.Firtree_70.geometry} material={materials['World ap']} position={[-65.87, -20.97, -70.71]} rotation={[3, 0.29, 1.91]} />
                <mesh name="Firtree_71" geometry={nodes.Firtree_71.geometry} material={materials['World ap']} position={[-61.21, -9.56, -56.38]} rotation={[2.94, -0.3, 2.3]} />
                <mesh name="Firtree_72" geometry={nodes.Firtree_72.geometry} material={materials['World ap']} position={[-66.63, -18.3, -63.47]} rotation={[2.94, -0.06, 1.98]} />
                <mesh name="Firtree_73" geometry={nodes.Firtree_73.geometry} material={materials['World ap']} position={[-57.86, -4.48, -53.97]} rotation={[2.97, -0.11, 2.25]} />
                <mesh name="Firtree_74" geometry={nodes.Firtree_74.geometry} material={materials['World ap']} position={[-62.99, -14.82, -53.6]} rotation={[2.95, -0.07, 2.02]} />
                <mesh name="Firtree_75" geometry={nodes.Firtree_75.geometry} material={materials['World ap']} position={[-69.89, -20.42, -53.97]} rotation={[-2.19, 0.5, 1.75]} />
                <mesh name="Firtree_76" geometry={nodes.Firtree_76.geometry} material={materials['World ap']} position={[3.91, 16.99, -0.77]} rotation={[-0.93, 1.28, 1.58]} />
                <mesh name="Firtree_77" geometry={nodes.Firtree_77.geometry} material={materials['World ap']} position={[21.46, 22.04, -1.57]} rotation={[-2.67, -0.97, 3.08]} />
                <mesh name="Firtree_78" geometry={nodes.Firtree_78.geometry} material={materials['World ap']} position={[10.21, 19.58, -2.78]} rotation={[0.68, -0.28, 0.25]} />
                <mesh name="Firtree_79" geometry={nodes.Firtree_79.geometry} material={materials['World ap']} position={[40.1, 4.01, 14.43]} rotation={[0.52, -0.53, -0.15]} />
                <mesh name="Firtree_80" geometry={nodes.Firtree_80.geometry} material={materials['World ap']} position={[77.95, 14.51, -19]} rotation={[0.33, -0.19, -0.54]} />
                <mesh name="Firtree_81" geometry={nodes.Firtree_81.geometry} material={materials['World ap']} position={[72.02, 6.63, 4.81]} rotation={[0.59, -0.05, -0.32]} />
                <mesh name="Firtree_82" geometry={nodes.Firtree_82.geometry} material={materials['World ap']} position={[64.53, 1.82, 10.91]} rotation={[0.77, -0.05, -0.32]} />
                <mesh name="Firtree_83" geometry={nodes.Firtree_83.geometry} material={materials['World ap']} position={[52.53, 10.78, 7.31]} rotation={[0.31, -0.76, -0.4]} />
                <mesh name="Firtree_84" geometry={nodes.Firtree_84.geometry} material={materials['World ap']} position={[67.86, 10.31, 0.03]} rotation={[0.31, -0.76, -0.4]} />
                <mesh name="Firtree_85" geometry={nodes.Firtree_85.geometry} material={materials['World ap']} position={[69.72, 17.67, -9.31]} rotation={[0.24, -0.66, -0.08]} />
                <mesh name="Firtree_86" geometry={nodes.Firtree_86.geometry} material={materials['World ap']} position={[66.17, -10.25, 25.68]} rotation={[-3, 1.05, -2.38]} />
                <mesh name="Firtree_87" geometry={nodes.Firtree_87.geometry} material={materials['World ap']} position={[-16.4, -6.13, 21.85]} rotation={[2.97, -0.76, 1.86]} />
                <mesh name="Firtree_88" geometry={nodes.Firtree_88.geometry} material={materials['World ap']} position={[-18.44, -10.74, 25.56]} rotation={[2.97, -0.76, 1.86]} />
                <mesh name="Firtree_89" geometry={nodes.Firtree_89.geometry} material={materials['World ap']} position={[-56.81, -5.84, -49.67]} rotation={[2.94, -0.3, 2.3]} />
                <mesh name="Firtree_90" geometry={nodes.Firtree_90.geometry} material={materials['World ap']} position={[-47.03, 1.51, -26.86]} rotation={[2.94, -0.3, 2.3]} />
                <mesh name="Firtree_91" geometry={nodes.Firtree_91.geometry} material={materials['World ap']} position={[-51.27, -18.84, -8.26]} rotation={[1.48, -0.28, 0.82]} />
                <mesh name="Firtree_92" geometry={nodes.Firtree_92.geometry} material={materials['World ap']} position={[-56.29, -4, -33.98]} rotation={[2.84, -0.37, 1.99]} />
                <mesh name="Firtree_141" geometry={nodes.Firtree_141.geometry} material={materials['World ap']} position={[25.5, -7.87, -149.91]} rotation={[-1.1, 0.69, -0.1]} />
                <mesh name="Firtree_142" geometry={nodes.Firtree_142.geometry} material={materials['World ap']} position={[31.09, -4.08, -149.3]} rotation={[-0.94, 0.68, -0.12]} />
                <mesh name="Firtree_143" geometry={nodes.Firtree_143.geometry} material={materials['World ap']} position={[19.32, 3.53, -144.08]} rotation={[2.94, 1.22, 2.56]} />
                <mesh name="Firtree_144" geometry={nodes.Firtree_144.geometry} material={materials['World ap']} position={[29.29, 4.57, -143.1]} rotation={[-0.94, 0.68, 0.11]} />
                <mesh name="Firtree_145" geometry={nodes.Firtree_145.geometry} material={materials['World ap']} position={[40.04, 4.25, -141.41]} rotation={[-0.62, 0.58, -0.48]} />
                <mesh name="Firtree_146" geometry={nodes.Firtree_146.geometry} material={materials['World ap']} position={[53.46, 1.51, -138.09]} rotation={[-0.38, 0.65, -0.26]} />
                <mesh name="Firtree_147" geometry={nodes.Firtree_147.geometry} material={materials['World ap']} position={[35.63, 7.72, -137.72]} rotation={[-0.46, 0.53, -0.01]} />
                <mesh name="Firtree_148" geometry={nodes.Firtree_148.geometry} material={materials['World ap']} position={[-8.69, -31.28, -154.04]} rotation={[2.19, 0.98, 2.67]} />
                <mesh name="Firtree_149" geometry={nodes.Firtree_149.geometry} material={materials['World ap']} position={[74.1, -4.5, -142.62]} rotation={[-0.59, 0.74, -0.45]} />
                <mesh name="Firtree_150" geometry={nodes.Firtree_150.geometry} material={materials['World ap']} position={[81.94, -0.04, -124.82]} rotation={[-0.59, 0.74, -0.45]} />
                <mesh name="Firtree_151" geometry={nodes.Firtree_151.geometry} material={materials['World ap']} position={[88.86, -1.82, -122.05]} rotation={[-0.37, 0.64, -0.59]} />
                <mesh name="Firtree_152" geometry={nodes.Firtree_152.geometry} material={materials['World ap']} position={[87.97, 4.23, -116.5]} rotation={[-0.37, 0.64, -0.59]} />
                <mesh name="Firtree_153" geometry={nodes.Firtree_153.geometry} material={materials['World ap']} position={[91.87, 0.26, -115.82]} rotation={[-0.37, 0.64, -0.82]} />
                <mesh name="Firtree_154" geometry={nodes.Firtree_154.geometry} material={materials['World ap']} position={[111.09, -16.22, -105.47]} rotation={[-0.05, 0.18, -1.06]} />
                <mesh name="Firtree_155" geometry={nodes.Firtree_155.geometry} material={materials['World ap']} position={[113.33, -15.36, -98.53]} rotation={[-0.05, 0.18, -1.06]} />
                <mesh name="Firtree_156" geometry={nodes.Firtree_156.geometry} material={materials['World ap']} position={[113.74, -28.51, -109.1]} rotation={[-0.25, 0.5, -0.99]} />
                <mesh name="Firtree_157" geometry={nodes.Firtree_157.geometry} material={materials['World ap']} position={[119.16, -25.48, -98.68]} rotation={[-0.11, 0.41, -1.21]} />
                <mesh name="Firtree_158" geometry={nodes.Firtree_158.geometry} material={materials['World ap']} position={[118.91, -33.63, -105.32]} rotation={[-0.11, 0.41, -1.21]} />
                <mesh name="Firtree_159" geometry={nodes.Firtree_159.geometry} material={materials['World ap']} position={[121.23, -29.26, -95.87]} rotation={[-0.02, 0.17, -1.23]} />
                <mesh name="Firtree_160" geometry={nodes.Firtree_160.geometry} material={materials['World ap']} position={[73.64, -9.39, -145.32]} rotation={[-0.59, 0.74, -0.45]} />
                <mesh name="Firtree_161" geometry={nodes.Firtree_161.geometry} material={materials['World ap']} position={[69.49, -5.86, -144.33]} rotation={[-0.59, 0.74, -0.45]} />
                <mesh name="Firtree_162" geometry={nodes.Firtree_162.geometry} material={materials['World ap']} position={[77.42, -7.26, -135.51]} rotation={[-0.29, 0.59, -0.85]} />
                <mesh name="Firtree_163" geometry={nodes.Firtree_163.geometry} material={materials['World ap']} position={[101.74, -35.23, -131.25]} rotation={[-0.15, 0.73, -1.28]} />
                <mesh name="Firtree_164" geometry={nodes.Firtree_164.geometry} material={materials['World ap']} position={[112.9, -32.66, -114.9]} rotation={[-0.11, 0.64, -1.31]} />
                <mesh name="Firtree_165" geometry={nodes.Firtree_165.geometry} material={materials['World ap']} position={[120.95, -33.97, -99.13]} rotation={[-0.01, 0.27, -1.35]} />
                <mesh name="Firtree_166" geometry={nodes.Firtree_166.geometry} material={materials['World ap']} position={[115.84, -20.95, -107.73]} rotation={[-0.01, 0.27, -1.2]} />
                <mesh name="Firtree_167" geometry={nodes.Firtree_167.geometry} material={materials['World ap']} position={[117.99, -21.84, -93.71]} rotation={[-0.05, 0.18, -1.06]} />
                <mesh name="Firtree_168" geometry={nodes.Firtree_168.geometry} material={materials['World ap']} position={[97.62, -30.84, -135.38]} rotation={[-0.34, 0.61, -0.94]} />
                <mesh name="Firtree_169" geometry={nodes.Firtree_169.geometry} material={materials['World ap']} position={[87.75, -22.29, -140.37]} rotation={[0.71, 0.84, -1.83]} />
                <mesh name="Firtree_170" geometry={nodes.Firtree_170.geometry} material={materials['World ap']} position={[84.18, -17.53, -137]} rotation={[0.79, 1.01, -1.89]} />
                <mesh name="Firtree_171" geometry={nodes.Firtree_171.geometry} material={materials['World ap']} position={[9.94, 0.44, -144.77]} rotation={[2.94, 1.22, 2.56]} />
                <mesh name="Firtree_172" geometry={nodes.Firtree_172.geometry} material={materials['World ap']} position={[12.32, 6.15, -139.3]} rotation={[2.94, 1.22, 2.56]} />
                <mesh name="Firtree_173" geometry={nodes.Firtree_173.geometry} material={materials['World ap']} position={[20.1, 8.85, -138.6]} rotation={[2.94, 1.22, 2.56]} />
                <mesh name="Firtree_174" geometry={nodes.Firtree_174.geometry} material={materials['World ap']} position={[7.97, 10.01, -133.94]} rotation={[2.94, 1.22, 2.56]} />
                <mesh name="Firtree_175" geometry={nodes.Firtree_175.geometry} material={materials['World ap']} position={[-22.97, -27.75, -147.12]} rotation={[2.68, 0.84, 2.1]} />
                <mesh name="Firtree_176" geometry={nodes.Firtree_176.geometry} material={materials['World ap']} position={[-48.23, -21.85, -3.82]} rotation={[1.48, -0.28, 0.82]} />
                <mesh name="Firtree_177" geometry={nodes.Firtree_177.geometry} material={materials['World ap']} position={[-49.09, -11.3, -11.11]} rotation={[1.48, -0.28, 0.82]} />
                <mesh name="Firtree_178" geometry={nodes.Firtree_178.geometry} material={materials['World ap']} position={[-35.33, -32.76, 12.22]} rotation={[1.66, -0.46, 0.84]} />
                <mesh name="Firtree_179" geometry={nodes.Firtree_179.geometry} material={materials['World ap']} position={[-31.3, -28.55, 14.65]} rotation={[1.48, -0.28, 0.82]} />
                <mesh name="Firtree_180" geometry={nodes.Firtree_180.geometry} material={materials['World ap']} position={[92.25, -11.26, -1.42]} rotation={[0.68, 0.23, -0.8]} />
                <mesh name="Firtree_181" geometry={nodes.Firtree_181.geometry} material={materials['World ap']} position={[55.57, -22.37, 25.55]} rotation={[2.44, 1.31, -1.24]} />
                <mesh name="Firtree_182" geometry={nodes.Firtree_182.geometry} material={materials['World ap']} position={[30.1, -18.16, 31.71]} rotation={[2.44, 1.31, -1.24]} />
                <mesh name="Firtree_183" geometry={nodes.Firtree_183.geometry} material={materials['World ap']} position={[15.51, -12.72, 36.77]} rotation={[2.17, 1.42, -0.97]} />
                <mesh name="Firtree_184" geometry={nodes.Firtree_184.geometry} material={materials['World ap']} position={[100.35, -11.26, -1.42]} rotation={[0.68, 0.23, -0.8]} />
                <mesh name="Firtree_185" geometry={nodes.Firtree_185.geometry} material={materials['World ap']} position={[-25.34, -16.84, 20.33]} rotation={[3.02, -0.77, 1.91]} />
                <mesh name="Firtree_186" geometry={nodes.Firtree_186.geometry} material={materials['World ap']} position={[-60.25, -10.27, -79.72]} rotation={[3, 0.29, 1.91]} />
                <mesh name="Firtree_187" geometry={nodes.Firtree_187.geometry} material={materials['World ap']} position={[78.33, -30.98, -149.93]} rotation={[-0.07, 0.94, -1.46]} />
                <mesh name="Firtree_188" geometry={nodes.Firtree_188.geometry} material={materials['World ap']} position={[58.25, -28.06, -158.69]} rotation={[-0.07, 0.94, -1.46]} />
                <mesh name="Firtree_189" geometry={nodes.Firtree_189.geometry} material={materials['World ap']} position={[75.76, -41.56, -152.49]} rotation={[-0.07, 0.94, -1.46]} />
                <mesh name="Firtree_190" geometry={nodes.Firtree_190.geometry} material={materials['World ap']} position={[50.34, -40.63, -163.53]} rotation={[1.04, -1.24, 2.63]} />
                <mesh name="Firtree_191" geometry={nodes.Firtree_191.geometry} material={materials['World ap']} position={[87.25, -6.03, -0.98]} rotation={[0.68, 0.23, -0.8]} />
                <mesh name="Firtree_192" geometry={nodes.Firtree_192.geometry} material={materials['World ap']} position={[91.89, -5.22, -5.81]} rotation={[0.68, 0.23, -0.8]} />
              </group>
              <group name="Bushes" position={[-59.56, 11.47, 45.9]}>
                <mesh name="Bushes_20" geometry={nodes.Bushes_20.geometry} material={materials['World ap.502']} position={[105.68, -2.08, 47.23]} rotation={[-1.48, 0, 0]} />
                <mesh name="Bushes_19" geometry={nodes.Bushes_19.geometry} material={materials['World ap.503']} position={[23.11, -77.11, 36.4]} rotation={[-2.75, 0, 0]} />
                <mesh name="Bushes_18" geometry={nodes.Bushes_18.geometry} material={materials['World ap.504']} position={[24.98, -51.04, 55.42]} rotation={[3.07, 0, 0]} />
                <mesh name="Bushes_17" geometry={nodes.Bushes_17.geometry} material={materials['World ap.505']} position={[118.94, 5.98, 37.3]} rotation={[3.14, 0, 0]} />
                <mesh name="Bushes_16" geometry={nodes.Bushes_16.geometry} material={materials['World ap.506']} position={[72.38, -10.63, 58.94]} rotation={[3.14, 0, 0]} />
                <mesh name="Bushes_15" geometry={nodes.Bushes_15.geometry} material={materials['World ap.507']} position={[57.87, -16.27, 63.82]} rotation={[3.13, 0, 0]} />
                <mesh name="Bushes_14" geometry={nodes.Bushes_14.geometry} material={materials['World ap.508']} position={[34.67, -42.06, 59.76]} rotation={[-2.39, 0, 0]} />
                <mesh name="Bushes_13" geometry={nodes.Bushes_13.geometry} material={materials['World ap.509']} position={[4.31, -9.97, 45.97]} rotation={[-2.19, 0, 0]} />
                <mesh name="Bushes_12" geometry={nodes.Bushes_12.geometry} material={materials['World ap.510']} position={[-32.16, -11.09, 12.2]} rotation={[-2.19, 0, 0]} />
                <mesh name="Bushes_11" geometry={nodes.Bushes_11.geometry} material={materials['World ap.511']} position={[-6.6, -13.02, 40.7]} rotation={[-2.98, 0, 0]} />
                <mesh name="Bushes_10" geometry={nodes.Bushes_10.geometry} material={materials['World ap.512']} position={[-30.32, -4.64, 15.49]} rotation={[-2.19, 0, 0]} />
                <mesh name="Bushes_9" geometry={nodes.Bushes_9.geometry} material={materials['World ap.513']} position={[-33.69, 26.31, -8.8]} rotation={[-2.19, 0, 0]} />
                <mesh name="Bushes_8" geometry={nodes.Bushes_8.geometry} material={materials['World ap.514']} position={[-36.13, 25.13, -54.14]} rotation={[-0.89, 0, 0]} />
                <mesh name="Bushes_7" geometry={nodes.Bushes_7.geometry} material={materials['World ap.515']} position={[-37.32, 15.13, -73.79]} rotation={[-2.87, 0, 0]} />
                <mesh name="Bushes_6" geometry={nodes.Bushes_6.geometry} material={materials['World ap.516']} position={[-30.88, 24.71, -77.79]} rotation={[-2.87, 0, 0]} />
                <mesh name="Bushes_5" geometry={nodes.Bushes_5.geometry} material={materials['World ap.517']} position={[-37.28, 19.51, -61.26]} rotation={[-2.7, 0, 0]} />
                <mesh name="Bushes_4" geometry={nodes.Bushes_4.geometry} material={materials['World ap.518']} position={[-38.57, 23.62, -51.09]} rotation={[2.49, 0, 0]} />
                <mesh name="Bushes_3" geometry={nodes.Bushes_3.geometry} material={materials['World ap.519']} position={[-38.39, 24.85, -31.39]} rotation={[-2.19, 0, 0]} />
                <mesh name="Bushes_2" geometry={nodes.Bushes_2.geometry} material={materials['World ap.520']} position={[-41.31, 18.51, -39.94]} rotation={[-Math.PI, 0, 0]} />
                <mesh name="Bushes_1" geometry={nodes.Bushes_1.geometry} material={materials['World ap.521']} position={[-41.31, 18.97, -32.46]} rotation={[-Math.PI, 0, 0]} />
                <mesh name="Bushes_2_2" geometry={nodes.Bushes_2_2.geometry} material={materials['World ap.522']} position={[-41.31, 20.25, -29.01]} rotation={[-2.19, 0, 0]} />
                <mesh name="Bushes_21" geometry={nodes.Bushes_21.geometry} material={materials['World ap.523']} position={[-35.77, 3.31, 1.94]} rotation={[-2.19, 0, 0]} />
                <mesh name="Bushes_22" geometry={nodes.Bushes_22.geometry} material={materials['World ap.524']} position={[127.07, 15.44, 27.12]} rotation={[3.14, 0, 0]} />
                <mesh name="Bushes_23" geometry={nodes.Bushes_23.geometry} material={materials['World ap.525']} position={[-13.92, -25.78, 34.19]} rotation={[-1.99, 0, 0]} />
              </group>
              <group name="Camping" position={[0.24, 16.17, 13.39]}>
                <mesh name="Camping_4" geometry={nodes.Camping_4.geometry} material={materials['World ap']} position={[6.78, -6.59, -113.63]} rotation={[-1.38, 0.5, -0.17]} />
                <mesh name="Camping_3" geometry={nodes.Camping_3.geometry} material={materials['World ap']} position={[76.89, 2.12, -73.44]} rotation={[-1.01, 0.04, -0.87]} />
                <mesh name="Camping_1" geometry={nodes.Camping_1.geometry} material={materials['World ap']} position={[64.23, 4.21, 65.36]} rotation={[-0.15, -0.9, -1.5]} />
                <mesh name="Camping_2" geometry={nodes.Camping_2.geometry} material={materials['World ap']} position={[-61.38, -13.26, 77.24]} rotation={[-0.43, 0.7, 1.8]} />
                <mesh name="Camping_2_2" geometry={nodes.Camping_2_2.geometry} material={materials['World ap']} position={[-86.52, 13.52, 44.47]} rotation={[-0.75, 0.83, 1.86]} />
              </group>
              <group name="City" position={[-25.9, -21.97, 1.93]}>
                <group name="Brazilia_1" position={[9.08, -25.6, -96.25]} rotation={[-2.07, -0.28, -0.18]}>
                  <mesh name="House_7_1" geometry={nodes.House_7_1.geometry} material={materials['World ap']} position={[-0.67, -1.33, 8.05]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_5" geometry={nodes.House_7_5.geometry} material={materials['World ap']} position={[-6.49, -1.43, 4.32]} rotation={[0.2, -0.66, 0.12]} />
                  <mesh name="House_7_6" geometry={nodes.House_7_6.geometry} material={materials['World ap']} position={[-2.36, -2.65, 8.71]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_7" geometry={nodes.House_7_7.geometry} material={materials['World ap']} position={[-4.68, -2.49, 7.35]} rotation={[0.27, -1.16, 0.05]} />
                  <mesh name="House_7_8" geometry={nodes.House_7_8.geometry} material={materials['World ap']} position={[-5.84, -2.16, 5.78]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_9" geometry={nodes.House_7_9.geometry} material={materials['World ap']} position={[-3.98, -0.01, 3.87]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_10" geometry={nodes.House_7_10.geometry} material={materials['World ap']} position={[-2.17, -1.07, 6.89]} rotation={[0.24, -0.53, 0.02]} />
                  <mesh name="House_7_11" geometry={nodes.House_7_11.geometry} material={materials['World ap']} position={[-3.33, -0.73, 5.33]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_2" geometry={nodes.House_7_2.geometry} material={materials['World ap']} position={[2.6, -0.14, 3.78]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_27" geometry={nodes.House_7_27.geometry} material={materials['World ap']} position={[-2.69, -0.23, 0.4]} rotation={[0.2, -0.66, 0.12]} />
                  <mesh name="House_7_29" geometry={nodes.House_7_29.geometry} material={materials['World ap']} position={[0.09, -1.52, 4.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_31" geometry={nodes.House_7_31.geometry} material={materials['World ap']} position={[-1.04, -1.2, 3.14]} rotation={[0.27, -1.16, 0.05]} />
                  <mesh name="House_7_32" geometry={nodes.House_7_32.geometry} material={materials['World ap']} position={[-2.1, -0.89, 1.72]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_3" geometry={nodes.House_7_3.geometry} material={materials['World ap']} position={[1.24, 0.1, 2.73]} rotation={[0.24, -0.53, 0.02]} />
                  <mesh name="House_7_4" geometry={nodes.House_7_4.geometry} material={materials['World ap']} position={[0.18, 0.4, 1.31]} rotation={[0.25, -0.94, 0.03]} />
                </group>
                <group name="Brazilia" position={[-9.83, -60.82, -66.82]} rotation={[-2.38, -0.46, 0.47]}>
                  <mesh name="House_7_1_2" geometry={nodes.House_7_1_2.geometry} material={materials['World ap']} position={[-0.67, -1.33, 8.05]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_5_2" geometry={nodes.House_7_5_2.geometry} material={materials['World ap']} position={[-6.49, -1.43, 4.32]} rotation={[0.2, -0.66, 0.12]} />
                  <mesh name="House_7_6_2" geometry={nodes.House_7_6_2.geometry} material={materials['World ap']} position={[-3.43, -2.85, 9.02]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_7_2" geometry={nodes.House_7_7_2.geometry} material={materials['World ap']} position={[-4.68, -2.49, 7.35]} rotation={[0.27, -1.16, 0.05]} />
                  <mesh name="House_7_8_2" geometry={nodes.House_7_8_2.geometry} material={materials['World ap']} position={[-5.84, -2.16, 5.78]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_9_2" geometry={nodes.House_7_9_2.geometry} material={materials['World ap']} position={[-3.98, -0.01, 3.87]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_10_2" geometry={nodes.House_7_10_2.geometry} material={materials['World ap']} position={[-2.17, -1.07, 6.89]} rotation={[0.24, -0.53, 0.02]} />
                  <mesh name="House_7_11_2" geometry={nodes.House_7_11_2.geometry} material={materials['World ap']} position={[-3.33, -0.73, 5.33]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_2_2" geometry={nodes.House_7_2_2.geometry} material={materials['World ap']} position={[2.6, -0.14, 3.78]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_27_2" geometry={nodes.House_7_27_2.geometry} material={materials['World ap']} position={[-2.69, -0.23, 0.4]} rotation={[0.2, -0.66, 0.12]} />
                  <mesh name="House_7_29_2" geometry={nodes.House_7_29_2.geometry} material={materials['World ap']} position={[0.09, -1.52, 4.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_31_2" geometry={nodes.House_7_31_2.geometry} material={materials['World ap']} position={[-1.04, -1.2, 3.14]} rotation={[0.27, -1.16, 0.05]} />
                  <mesh name="House_7_32_2" geometry={nodes.House_7_32_2.geometry} material={materials['World ap']} position={[-2.1, -0.89, 1.72]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7" geometry={nodes.House_7.geometry} material={materials['World ap']} position={[-0.41, 1.06, -0.02]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_3_2" geometry={nodes.House_7_3_2.geometry} material={materials['World ap']} position={[1.24, 0.1, 2.73]} rotation={[0.24, -0.53, 0.02]} />
                  <mesh name="House_7_4_2" geometry={nodes.House_7_4_2.geometry} material={materials['World ap']} position={[0.18, 0.4, 1.31]} rotation={[0.25, -0.94, 0.03]} />
                </group>
                <group name="Chili" position={[26.93, -68.05, -63.74]} rotation={[-2.81, 0, -0.35]}>
                  <mesh name="House_7_2_3" geometry={nodes.House_7_2_3.geometry} material={materials['World ap']} position={[3.72, -0.2, 5.4]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_27_3" geometry={nodes.House_7_27_3.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.2, -0.66, 0.12]} />
                  <mesh name="House_7_29_3" geometry={nodes.House_7_29_3.geometry} material={materials['World ap']} position={[0.12, -2.18, 6.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_31_3" geometry={nodes.House_7_31_3.geometry} material={materials['World ap']} position={[-1.49, -1.71, 4.49]} rotation={[0.27, -1.16, 0.05]} />
                  <mesh name="House_7_32_3" geometry={nodes.House_7_32_3.geometry} material={materials['World ap']} position={[-3, -1.27, 2.46]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_2_4" geometry={nodes.House_7_2_4.geometry} material={materials['World ap']} position={[-0.58, 1.52, -0.02]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_3_3" geometry={nodes.House_7_3_3.geometry} material={materials['World ap']} position={[1.77, 0.14, 3.9]} rotation={[0.24, -0.53, 0.02]} />
                  <mesh name="House_7_4_3" geometry={nodes.House_7_4_3.geometry} material={materials['World ap']} position={[0.26, 0.58, 1.87]} rotation={[0.25, -0.94, 0.03]} />
                </group>
                <group name="PEru" position={[39.98, -45.17, -84.22]} rotation={[-2.52, -0.11, -0.52]}>
                  <mesh name="House_7_2_5" geometry={nodes.House_7_2_5.geometry} material={materials['World ap']} position={[5.17, -0.29, 5.89]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_10_3" geometry={nodes.House_7_10_3.geometry} material={materials['World ap']} position={[2.37, -2.51, 8.31]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_12" geometry={nodes.House_7_12.geometry} material={materials['World ap']} position={[-6.33, -0.72, -2.86]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_14" geometry={nodes.House_7_14.geometry} material={materials['World ap']} position={[-5.74, -0.4, -0.37]} rotation={[0.06, -0.89, 0.12]} />
                  <mesh name="House_7_27_4" geometry={nodes.House_7_27_4.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_29_4" geometry={nodes.House_7_29_4.geometry} material={materials['World ap']} position={[0.12, -2.18, 6.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_31_4" geometry={nodes.House_7_31_4.geometry} material={materials['World ap']} position={[-1.49, -1.71, 4.49]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_4" geometry={nodes.House_7_32_4.geometry} material={materials['World ap']} position={[-3, -1.27, 2.46]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_3_4" geometry={nodes.House_7_3_4.geometry} material={materials['World ap']} position={[-0.58, 1.52, -0.02]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_3_5" geometry={nodes.House_7_3_5.geometry} material={materials['World ap']} position={[1.77, 0.14, 3.9]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_4_4" geometry={nodes.House_7_4_4.geometry} material={materials['World ap']} position={[0.26, 0.58, 1.87]} rotation={[0.25, -0.94, 0.03]} />
                </group>
                <group name="Milano_1" position={[-77.15, 40.03, -1.53]} rotation={[0.51, 0, 0.45]}>
                  <mesh name="House_7_5_3" geometry={nodes.House_7_5_3.geometry} material={materials['World ap']} position={[-1.66, -1.1, -7]} rotation={[-1.93, 0.52, 1.64]} />
                  <mesh name="House_7_28" geometry={nodes.House_7_28.geometry} material={materials['World ap']} position={[-2.89, -1.59, -5.43]} rotation={[-2.01, 0.54, 1.61]} />
                  <mesh name="House_7_33" geometry={nodes.House_7_33.geometry} material={materials['World ap']} position={[-2.14, -2.12, -6.65]} rotation={[-2.44, 0.29, 1.79]} />
                  <mesh name="House_7_35" geometry={nodes.House_7_35.geometry} material={materials['World ap']} position={[-1.94, -3.3, -5.42]} rotation={[-1.98, 0.26, 1.66]} />
                  <mesh name="House_7_36" geometry={nodes.House_7_36.geometry} material={materials['World ap']} position={[-1.87, -2.6, -3.97]} rotation={[-2.01, 0.54, 1.67]} />
                  <mesh name="House_7_37" geometry={nodes.House_7_37.geometry} material={materials['World ap']} position={[-1.16, -0.87, -5.76]} rotation={[-1.93, 0.52, 1.46]} />
                </group>
                <group name="Tunissia" position={[-85.05, 13.22, -32.19]} rotation={[-1.74, -0.05, 1.56]}>
                  <mesh name="House_7_1_3" geometry={nodes.House_7_1_3.geometry} material={materials['World ap']} position={[-1.35, 0.55, 5.67]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_3_6" geometry={nodes.House_7_3_6.geometry} material={materials['World ap']} position={[-3.79, -1, 8.2]} rotation={[0.29, -1.27, 0.07]} />
                  <mesh name="House_7_4_5" geometry={nodes.House_7_4_5.geometry} material={materials['World ap']} position={[-5.12, -1.15, 4.81]} rotation={[0.35, -0.86, 0.29]} />
                  <mesh name="House_7_5_4" geometry={nodes.House_7_5_4.geometry} material={materials['World ap']} position={[14.53, -11.38, 13.38]} rotation={[-0.03, -0.76, -0.67]} />
                  <mesh name="House_7_9_3" geometry={nodes.House_7_9_3.geometry} material={materials['World ap']} position={[0.06, -3.52, 9.4]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_10_4" geometry={nodes.House_7_10_4.geometry} material={materials['World ap']} position={[-0.77, -2.36, 7.39]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_11_3" geometry={nodes.House_7_11_3.geometry} material={materials['World ap']} position={[-1.76, -3.3, 11.41]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_12_2" geometry={nodes.House_7_12_2.geometry} material={materials['World ap']} position={[-10.04, -2.36, 7.29]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_17" geometry={nodes.House_7_17.geometry} material={materials['World ap']} position={[-10.71, -2.36, 4.64]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18" geometry={nodes.House_7_18.geometry} material={materials['World ap']} position={[-7.93, -1.44, 6.18]} rotation={[0.13, -0.09, 0.1]} />
                  <mesh name="House_7_19" geometry={nodes.House_7_19.geometry} material={materials['World ap']} position={[-7.43, -1.74, 9.01]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_20" geometry={nodes.House_7_20.geometry} material={materials['World ap']} position={[-26.38, -4.15, 6.11]} rotation={[1.9, -1.38, 1.62]} />
                  <mesh name="House_7_21" geometry={nodes.House_7_21.geometry} material={materials['World ap']} position={[13.05, -9.82, 11.93]} rotation={[-0.43, -1, -0.98]} />
                  <mesh name="House_7_22" geometry={nodes.House_7_22.geometry} material={materials['World ap']} position={[14.88, -9.77, 10.13]} rotation={[0.15, -0.56, -0.56]} />
                  <mesh name="House_7_23" geometry={nodes.House_7_23.geometry} material={materials['World ap']} position={[-2.45, -0.11, 3.31]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_25" geometry={nodes.House_7_25.geometry} material={materials['World ap']} position={[-4.78, -2.96, 12.49]} rotation={[0.24, -0.47, 0.19]} />
                  <mesh name="House_7_26" geometry={nodes.House_7_26.geometry} material={materials['World ap']} position={[-9.57, -4.02, 10.48]} rotation={[0.53, -0.84, 0.23]} />
                  <mesh name="House_7_4_6" geometry={nodes.House_7_4_6.geometry} material={materials['World ap']} position={[-27.15, -5.13, 7.64]} rotation={[1.9, -1.38, 1.62]} />
                  <mesh name="House_7_2_6" geometry={nodes.House_7_2_6.geometry} material={materials['World ap']} position={[-24.33, -4.28, 6.1]} rotation={[1.9, -1.38, 1.62]} />
                  <mesh name="House_7_6_3" geometry={nodes.House_7_6_3.geometry} material={materials['World ap']} position={[-24.29, -5.04, 7.7]} rotation={[1.9, -1.38, 1.62]} />
                  <mesh name="House_7_8_3" geometry={nodes.House_7_8_3.geometry} material={materials['World ap']} position={[-29.15, -6.42, 7.68]} rotation={[1, -1.04, 0.89]} />
                  <mesh name="House_7_24" geometry={nodes.House_7_24.geometry} material={materials['World ap']} position={[-28.66, -4.14, 5.28]} rotation={[0.72, -1.12, 0.4]} />
                </group>
                <group name="Cairo" position={[-85.05, 7.99, -6.09]} rotation={[-1.74, -0.05, 1.56]}>
                  <mesh name="House_7_1_4" geometry={nodes.House_7_1_4.geometry} material={materials['World ap']} position={[-1.35, 0.55, 5.67]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_3_7" geometry={nodes.House_7_3_7.geometry} material={materials['World ap']} position={[-3.79, -1, 8.2]} rotation={[0.29, -1.27, 0.07]} />
                  <mesh name="House_7_4_7" geometry={nodes.House_7_4_7.geometry} material={materials['World ap']} position={[-5.12, -1.15, 4.81]} rotation={[0.35, -0.86, 0.29]} />
                  <mesh name="House_7_5_5" geometry={nodes.House_7_5_5.geometry} material={materials['World ap']} position={[11.47, -0.68, 1.79]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_7_3" geometry={nodes.House_7_7_3.geometry} material={materials['World ap']} position={[-5.71, -1.22, 1.98]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_9_4" geometry={nodes.House_7_9_4.geometry} material={materials['World ap']} position={[0.06, -3.52, 9.4]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_10_5" geometry={nodes.House_7_10_5.geometry} material={materials['World ap']} position={[-0.77, -2.36, 7.39]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_11_4" geometry={nodes.House_7_11_4.geometry} material={materials['World ap']} position={[-1.76, -3.3, 11.41]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_12_3" geometry={nodes.House_7_12_3.geometry} material={materials['World ap']} position={[-10.04, -2.36, 7.29]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_13" geometry={nodes.House_7_13.geometry} material={materials['World ap']} position={[-10.03, -0.99, 0.95]} rotation={[0.17, -0.45, 0.11]} />
                  <mesh name="House_7_14_2" geometry={nodes.House_7_14_2.geometry} material={materials['World ap']} position={[-7.29, -0.59, -0.05]} rotation={[0.36, -1.18, 0.26]} />
                  <mesh name="House_7_15" geometry={nodes.House_7_15.geometry} material={materials['World ap']} position={[-8.48, -1.09, 3]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_16" geometry={nodes.House_7_16.geometry} material={materials['World ap']} position={[-5.49, -0.14, -2.24]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_17_2" geometry={nodes.House_7_17_2.geometry} material={materials['World ap']} position={[-10.71, -2.36, 4.64]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18_2" geometry={nodes.House_7_18_2.geometry} material={materials['World ap']} position={[-7.93, -1.44, 6.18]} rotation={[0.13, -0.09, 0.1]} />
                  <mesh name="House_7_19_2" geometry={nodes.House_7_19_2.geometry} material={materials['World ap']} position={[-7.43, -1.74, 9.01]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_20_2" geometry={nodes.House_7_20_2.geometry} material={materials['World ap']} position={[-28.31, -6.83, 9.72]} rotation={[1, -1.04, 0.73]} />
                  <mesh name="House_7_21_2" geometry={nodes.House_7_21_2.geometry} material={materials['World ap']} position={[9.78, -0.24, -0.12]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_22_2" geometry={nodes.House_7_22_2.geometry} material={materials['World ap']} position={[11.72, 0.1, -1.76]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_23_2" geometry={nodes.House_7_23_2.geometry} material={materials['World ap']} position={[-2.45, -0.11, 3.31]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_25_2" geometry={nodes.House_7_25_2.geometry} material={materials['World ap']} position={[-4.78, -2.96, 12.49]} rotation={[0.24, -0.47, 0.19]} />
                  <mesh name="House_7_26_2" geometry={nodes.House_7_26_2.geometry} material={materials['World ap']} position={[-8.77, -3.65, 9.86]} rotation={[0.53, -0.84, 0.23]} />
                  <mesh name="House_7_27_5" geometry={nodes.House_7_27_5.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_5_6" geometry={nodes.House_7_5_6.geometry} material={materials['World ap']} position={[-27.92, -6.44, 11.56]} rotation={[1, -1.04, 0.73]} />
                  <mesh name="House_7_2_7" geometry={nodes.House_7_2_7.geometry} material={materials['World ap']} position={[-26.59, -5.99, 9.18]} rotation={[1, -1.04, 0.73]} />
                  <mesh name="House_7_6_4" geometry={nodes.House_7_6_4.geometry} material={materials['World ap']} position={[-26.2, -5.6, 11.02]} rotation={[1, -1.04, 0.73]} />
                  <mesh name="House_7_8_4" geometry={nodes.House_7_8_4.geometry} material={materials['World ap']} position={[-29.15, -6.42, 7.68]} rotation={[1, -1.04, 0.89]} />
                  <mesh name="House_7_24_2" geometry={nodes.House_7_24_2.geometry} material={materials['World ap']} position={[-29.75, -6.36, 5.87]} rotation={[1, -1.04, 0.89]} />
                </group>
                <group name="UAR" position={[-47.98, -61.72, -19.71]} rotation={[-2.84, -0.68, 0.65]}>
                  <mesh name="House_7_3_8" geometry={nodes.House_7_3_8.geometry} material={materials['World ap']} position={[-3.79, -1, 8.2]} rotation={[0.29, -1.27, 0.07]} />
                  <mesh name="House_7_4_8" geometry={nodes.House_7_4_8.geometry} material={materials['World ap']} position={[-5.12, -1.15, 4.81]} rotation={[0.35, -0.86, 0.29]} />
                  <mesh name="House_7_7_4" geometry={nodes.House_7_7_4.geometry} material={materials['World ap']} position={[-5.71, -1.22, 1.98]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_10_6" geometry={nodes.House_7_10_6.geometry} material={materials['World ap']} position={[-2.52, -2.03, 5.43]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_12_4" geometry={nodes.House_7_12_4.geometry} material={materials['World ap']} position={[-10.04, -2.36, 7.29]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_13_2" geometry={nodes.House_7_13_2.geometry} material={materials['World ap']} position={[-10.03, -0.99, 0.95]} rotation={[0.17, -0.45, 0.11]} />
                  <mesh name="House_7_14_3" geometry={nodes.House_7_14_3.geometry} material={materials['World ap']} position={[-7.29, -0.59, -0.05]} rotation={[0.36, -1.18, 0.26]} />
                  <mesh name="House_7_15_2" geometry={nodes.House_7_15_2.geometry} material={materials['World ap']} position={[-8.48, -1.09, 3]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_16_2" geometry={nodes.House_7_16_2.geometry} material={materials['World ap']} position={[-5.49, -0.14, -2.24]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_17_3" geometry={nodes.House_7_17_3.geometry} material={materials['World ap']} position={[-10.71, -2.36, 4.64]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18_3" geometry={nodes.House_7_18_3.geometry} material={materials['World ap']} position={[-7.93, -1.44, 6.18]} rotation={[0.13, -0.09, 0.1]} />
                  <mesh name="House_7_23_3" geometry={nodes.House_7_23_3.geometry} material={materials['World ap']} position={[-2.45, -0.11, 3.31]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_27_6" geometry={nodes.House_7_27_6.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_6_5" geometry={nodes.House_7_6_5.geometry} material={materials['World ap']} position={[-8.71, -0.85, -1.55]} rotation={[-0.1, -0.89, 0.02]} />
                </group>
                <group name="Milano" position={[-76.71, 48.34, -0.48]} rotation={[0.51, 0, 0.18]}>
                  <mesh name="House_7_5_7" geometry={nodes.House_7_5_7.geometry} material={materials['World ap']} position={[-0.87, -1.36, -4.03]} rotation={[-1.5, 0.47, 1.34]} />
                  <mesh name="House_7_28_2" geometry={nodes.House_7_28_2.geometry} material={materials['World ap']} position={[-1.92, -4.93, -6.93]} rotation={[-2.01, 0.54, 1.61]} />
                  <mesh name="House_7_33_2" geometry={nodes.House_7_33_2.geometry} material={materials['World ap']} position={[-0.92, -2.72, -6.65]} rotation={[-1.93, 0.52, 1.54]} />
                  <mesh name="House_7_35_2" geometry={nodes.House_7_35_2.geometry} material={materials['World ap']} position={[-1.94, -3.3, -5.42]} rotation={[-2.01, 0.54, 1.67]} />
                  <mesh name="House_7_36_2" geometry={nodes.House_7_36_2.geometry} material={materials['World ap']} position={[-2.16, -3.2, -3.6]} rotation={[-2.01, 0.54, 1.67]} />
                  <mesh name="House_7_37_2" geometry={nodes.House_7_37_2.geometry} material={materials['World ap']} position={[-0.1, -0.77, -6.07]} rotation={[-2.32, 0.52, 1.66]} />
                  <mesh name="House_7_7_5" geometry={nodes.House_7_7_5.geometry} material={materials['World ap']} position={[-1, -2.05, -5.26]} rotation={[-2.1, 0.58, 1.67]} />
                </group>
                <group name="Paris" position={[-70.65, 56.6, -26.9]} rotation={[-2.86, 0.31, 1.89]}>
                  <mesh name="House_7_8_5" geometry={nodes.House_7_8_5.geometry} material={materials['World ap']} position={[-5.37, -0.54, -5.4]} rotation={[0.11, -0.91, -0.04]} />
                  <mesh name="House_7_1_5" geometry={nodes.House_7_1_5.geometry} material={materials['World ap']} position={[13.14, -2.19, 9.95]} rotation={[0.19, -0.91, -0.17]} />
                  <mesh name="House_7_2_8" geometry={nodes.House_7_2_8.geometry} material={materials['World ap']} position={[5.83, -0.93, 8.77]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_6_6" geometry={nodes.House_7_6_6.geometry} material={materials['World ap']} position={[4.39, -2.23, 10.21]} rotation={[0.25, -0.81, 0.03]} />
                  <mesh name="House_7_10_7" geometry={nodes.House_7_10_7.geometry} material={materials['World ap']} position={[3.07, -2.61, 8.82]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_12_5" geometry={nodes.House_7_12_5.geometry} material={materials['World ap']} position={[-4.87, -1.53, -3]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_13_3" geometry={nodes.House_7_13_3.geometry} material={materials['World ap']} position={[-0.82, -0.36, -2.77]} rotation={[-0.16, -1.17, -0.23]} />
                  <mesh name="House_7_14_4" geometry={nodes.House_7_14_4.geometry} material={materials['World ap']} position={[-3.46, -0.49, -5.06]} rotation={[0.37, -0.84, 0.07]} />
                  <mesh name="House_7_15_3" geometry={nodes.House_7_15_3.geometry} material={materials['World ap']} position={[0.62, -0.59, -0.65]} rotation={[-0.08, -0.97, -0.16]} />
                  <mesh name="House_7_17_4" geometry={nodes.House_7_17_4.geometry} material={materials['World ap']} position={[-1.38, -0.45, 0.81]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18_4" geometry={nodes.House_7_18_4.geometry} material={materials['World ap']} position={[-3.72, -0.92, 2.79]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_19_3" geometry={nodes.House_7_19_3.geometry} material={materials['World ap']} position={[-7.51, -1.27, -2.48]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_20_3" geometry={nodes.House_7_20_3.geometry} material={materials['World ap']} position={[0.28, -1.15, 2.01]} rotation={[-0.07, -0.84, -0.23]} />
                  <mesh name="House_7_21_3" geometry={nodes.House_7_21_3.geometry} material={materials['World ap']} position={[10.82, -2.4, 7.3]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_24_3" geometry={nodes.House_7_24_3.geometry} material={materials['World ap']} position={[5.4, -3.33, 12.15]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_25_3" geometry={nodes.House_7_25_3.geometry} material={materials['World ap']} position={[2.5, -2.2, 11.78]} rotation={[0.36, -0.88, -0.02]} />
                  <mesh name="House_7_27_7" geometry={nodes.House_7_27_7.geometry} material={materials['World ap']} position={[-7.47, -0.32, 0.48]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_31_5" geometry={nodes.House_7_31_5.geometry} material={materials['World ap']} position={[10.88, -2.11, 4.53]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_5" geometry={nodes.House_7_32_5.geometry} material={materials['World ap']} position={[-6.42, -1.06, 2.71]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_8_6" geometry={nodes.House_7_8_6.geometry} material={materials['World ap']} position={[13.12, -4.29, 13.01]} rotation={[0.27, -1.17, -0.11]} />
                  <mesh name="House_7_26_3" geometry={nodes.House_7_26_3.geometry} material={materials['World ap']} position={[10.79, -4.56, 13.97]} rotation={[0.27, -1.17, -0.11]} />
                  <mesh name="House_7_39" geometry={nodes.House_7_39.geometry} material={materials['World ap']} position={[-4.87, -0.57, 0.74]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_40" geometry={nodes.House_7_40.geometry} material={materials['World ap']} position={[-5.83, -1.84, -1.27]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_41" geometry={nodes.House_7_41.geometry} material={materials['World ap']} position={[-1.8, -1.97, 3.88]} rotation={[0.11, -0.91, -0.04]} />
                </group>
                <group name="Australia_city" position={[64.4, -55.14, 68.19]} rotation={[2.39, 1.14, -1.63]}>
                  <mesh name="House_7_18_5" geometry={nodes.House_7_18_5.geometry} material={materials['World ap']} position={[-0.66, 0.18, -0.6]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_4" geometry={nodes.House_7_19_4.geometry} material={materials['World ap']} position={[-0.95, 1.29, -2.76]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_4" geometry={nodes.House_7_26_4.geometry} material={materials['World ap']} position={[-0.88, 2.88, -0.84]} rotation={[-1.13, 0.37, 1.6]} />
                  <mesh name="House_7_9_5" geometry={nodes.House_7_9_5.geometry} material={materials['World ap']} position={[-0.7, -1.83, -1.32]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_1_6" geometry={nodes.House_7_1_6.geometry} material={materials['World ap']} position={[-0.27, -1.36, -3.42]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_5_8" geometry={nodes.House_7_5_8.geometry} material={materials['World ap']} position={[0.62, 4.45, -2.11]} rotation={[-1.18, 0.22, 1.8]} />
                </group>
                <group name="Australia_city_2" position={[99, -43.63, 43.49]} rotation={[-2.84, 0.76, -2.53]}>
                  <mesh name="House_7_15_4" geometry={nodes.House_7_15_4.geometry} material={materials['World ap']} position={[-0.52, -2.35, 0.86]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_18_6" geometry={nodes.House_7_18_6.geometry} material={materials['World ap']} position={[-0.66, 0.18, -0.6]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_5" geometry={nodes.House_7_19_5.geometry} material={materials['World ap']} position={[-0.51, 1.21, -2.76]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_5" geometry={nodes.House_7_26_5.geometry} material={materials['World ap']} position={[0.91, 2.27, -1.19]} rotation={[-1.13, 0.37, 1.6]} />
                  <mesh name="House_7_10_8" geometry={nodes.House_7_10_8.geometry} material={materials['World ap']} position={[-0.7, -1.83, -1.32]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_1_7" geometry={nodes.House_7_1_7.geometry} material={materials['World ap']} position={[-0.27, -1.36, -3.42]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_3_9" geometry={nodes.House_7_3_9.geometry} material={materials['World ap']} position={[-1.15, -3.65, -2.08]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_4_9" geometry={nodes.House_7_4_9.geometry} material={materials['World ap']} position={[-0.91, -4.5, 0.43]} rotation={[-0.94, 0.27, 1.74]} />
                  <mesh name="House_7_5_9" geometry={nodes.House_7_5_9.geometry} material={materials['World ap']} position={[-0.18, 0.85, -5.1]} rotation={[-1.18, 0.22, 1.8]} />
                </group>
                <group name="Australia_city_3" position={[64.55, -71.37, 47.98]} rotation={[2.56, 0.86, -1.39]}>
                  <mesh name="House_7_13_4" geometry={nodes.House_7_13_4.geometry} material={materials['World ap']} position={[-0.02, -3.32, 2.89]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_15_5" geometry={nodes.House_7_15_5.geometry} material={materials['World ap']} position={[-0.52, -2.35, 0.86]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_17_5" geometry={nodes.House_7_17_5.geometry} material={materials['World ap']} position={[0.07, -0.49, 2.09]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_18_7" geometry={nodes.House_7_18_7.geometry} material={materials['World ap']} position={[-0.66, 0.18, -0.6]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_6" geometry={nodes.House_7_19_6.geometry} material={materials['World ap']} position={[-0.51, 1.21, -2.76]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_6" geometry={nodes.House_7_26_6.geometry} material={materials['World ap']} position={[0.91, 2.27, -1.19]} rotation={[-1.13, 0.37, 1.6]} />
                  <mesh name="House_7_11_5" geometry={nodes.House_7_11_5.geometry} material={materials['World ap']} position={[-0.7, -1.83, -1.32]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_1_8" geometry={nodes.House_7_1_8.geometry} material={materials['World ap']} position={[-0.27, -1.36, -3.42]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_3_10" geometry={nodes.House_7_3_10.geometry} material={materials['World ap']} position={[-1.15, -3.65, -2.08]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_4_10" geometry={nodes.House_7_4_10.geometry} material={materials['World ap']} position={[-0.91, -4.5, 0.43]} rotation={[-0.94, 0.27, 1.74]} />
                  <mesh name="House_7_5_10" geometry={nodes.House_7_5_10.geometry} material={materials['World ap']} position={[0.62, 4.45, -2.11]} rotation={[-1.18, 0.22, 1.8]} />
                </group>
                <group name="Sydney" position={[86.72, -62.49, 30.79]} rotation={[3.06, 0.8, -1.93]}>
                  <mesh name="House_7_13_5" geometry={nodes.House_7_13_5.geometry} material={materials['World ap']} position={[-0.02, -3.32, 2.89]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_15_6" geometry={nodes.House_7_15_6.geometry} material={materials['World ap']} position={[-0.52, -2.35, 0.86]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_16_3" geometry={nodes.House_7_16_3.geometry} material={materials['World ap']} position={[0.59, -0.87, 3.96]} rotation={[-1.23, 0.21, 1.81]} />
                  <mesh name="House_7_17_6" geometry={nodes.House_7_17_6.geometry} material={materials['World ap']} position={[0.07, -0.49, 2.09]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_18_8" geometry={nodes.House_7_18_8.geometry} material={materials['World ap']} position={[-0.66, 0.18, -0.6]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_7" geometry={nodes.House_7_19_7.geometry} material={materials['World ap']} position={[-0.51, 1.21, -2.76]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_20_4" geometry={nodes.House_7_20_4.geometry} material={materials['World ap']} position={[-0.5, 2.84, 0.8]} rotation={[-1.45, 0.35, 1.71]} />
                  <mesh name="House_7_25_4" geometry={nodes.House_7_25_4.geometry} material={materials['World ap']} position={[-0.98, 1.84, 2.68]} rotation={[-1.41, 0.24, 1.87]} />
                  <mesh name="House_7_26_7" geometry={nodes.House_7_26_7.geometry} material={materials['World ap']} position={[0.91, 2.27, -1.19]} rotation={[-1.13, 0.37, 1.6]} />
                  <mesh name="House_7_12_6" geometry={nodes.House_7_12_6.geometry} material={materials['World ap']} position={[-0.7, -1.83, -1.32]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_1_9" geometry={nodes.House_7_1_9.geometry} material={materials['World ap']} position={[-0.27, -1.36, -3.42]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_2_9" geometry={nodes.House_7_2_9.geometry} material={materials['World ap']} position={[0.66, 1.11, 4.69]} rotation={[-1.41, 0.24, 1.87]} />
                  <mesh name="House_7_3_11" geometry={nodes.House_7_3_11.geometry} material={materials['World ap']} position={[-1.15, -3.65, -2.08]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_4_11" geometry={nodes.House_7_4_11.geometry} material={materials['World ap']} position={[-0.91, -4.5, 0.43]} rotation={[-0.94, 0.27, 1.74]} />
                  <mesh name="House_7_5_11" geometry={nodes.House_7_5_11.geometry} material={materials['World ap']} position={[0.62, 4.45, -2.11]} rotation={[-1.18, 0.22, 1.8]} />
                </group>
                <group name="Tokyo" position={[102.35, 78.26, 25.55]} rotation={[1.16, 0.24, 1.05]}>
                  <mesh name="House_7_13_6" geometry={nodes.House_7_13_6.geometry} material={materials['World ap']} position={[0.8, -2.29, 3.49]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_15_7" geometry={nodes.House_7_15_7.geometry} material={materials['World ap']} position={[-1.05, -3.44, 1.07]} rotation={[-1.37, 0.17, 1.56]} />
                  <mesh name="House_7_18_9" geometry={nodes.House_7_18_9.geometry} material={materials['World ap']} position={[0.8, -0.16, -0.85]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_8" geometry={nodes.House_7_19_8.geometry} material={materials['World ap']} position={[-1.21, -2.05, -3.29]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_8" geometry={nodes.House_7_26_8.geometry} material={materials['World ap']} position={[-0.24, 0.75, -2.54]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_13_7" geometry={nodes.House_7_13_7.geometry} material={materials['World ap']} position={[-1.39, -1.69, -1.46]} rotation={[-1.18, 0.22, 1.65]} />
                  <mesh name="House_7_1_10" geometry={nodes.House_7_1_10.geometry} material={materials['World ap']} position={[-1.27, -0.62, -3.06]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_3_12" geometry={nodes.House_7_3_12.geometry} material={materials['World ap']} position={[-0.56, -3.4, 3.85]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_4_12" geometry={nodes.House_7_4_12.geometry} material={materials['World ap']} position={[-0.32, 2.95, 2.17]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_5_12" geometry={nodes.House_7_5_12.geometry} material={materials['World ap']} position={[-1.05, -0.31, -4.68]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_6_7" geometry={nodes.House_7_6_7.geometry} material={materials['World ap']} position={[0.05, 2.21, -4.31]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_7_6" geometry={nodes.House_7_7_6.geometry} material={materials['World ap']} position={[2.23, -1.07, 5.12]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_8_7" geometry={nodes.House_7_8_7.geometry} material={materials['World ap']} position={[-2.46, -1.69, -5.01]} rotation={[-1.48, 0.23, 1.59]} />
                  <mesh name="House_7_2_10" geometry={nodes.House_7_2_10.geometry} material={materials['World ap']} position={[-1.71, -3.01, -2.01]} rotation={[-1.18, 0.22, 1.65]} />
                  <mesh name="House_7_9_6" geometry={nodes.House_7_9_6.geometry} material={materials['World ap']} position={[-1.71, -4.2, 3.35]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_10_9" geometry={nodes.House_7_10_9.geometry} material={materials['World ap']} position={[1.21, -1.48, 1.26]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_11_6" geometry={nodes.House_7_11_6.geometry} material={materials['World ap']} position={[-0.63, 1.29, -6.41]} rotation={[-1.13, 0.32, 1.6]} />
                  <mesh name="House_7_12_7" geometry={nodes.House_7_12_7.geometry} material={materials['World ap']} position={[-1.29, 1.98, -7.37]} rotation={[-1.13, 0.32, 1.6]} />
                </group>
                <group name="Pekin" position={[80.18, 53.44, 85.65]} rotation={[0.4, -0.8, 0.67]}>
                  <mesh name="House_7_13_8" geometry={nodes.House_7_13_8.geometry} material={materials['World ap']} position={[-1.37, -3.61, 6.72]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_15_8" geometry={nodes.House_7_15_8.geometry} material={materials['World ap']} position={[-1.61, -6.88, 2.14]} rotation={[-1.37, 0.17, 1.56]} />
                  <mesh name="House_7_17_7" geometry={nodes.House_7_17_7.geometry} material={materials['World ap']} position={[0.88, 0.11, 4.04]} rotation={[-1.37, 0.17, 1.49]} />
                  <mesh name="House_7_18_10" geometry={nodes.House_7_18_10.geometry} material={materials['World ap']} position={[-1.28, 1.54, -1.16]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_9" geometry={nodes.House_7_19_9.geometry} material={materials['World ap']} position={[-0.98, 2.32, -5.3]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_9" geometry={nodes.House_7_26_9.geometry} material={materials['World ap']} position={[0.38, 7.06, -1.23]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_14_5" geometry={nodes.House_7_14_5.geometry} material={materials['World ap']} position={[-1.92, -2.22, -2.44]} rotation={[-1.18, 0.22, 1.65]} />
                  <mesh name="House_7_1_11" geometry={nodes.House_7_1_11.geometry} material={materials['World ap']} position={[-1.95, -1.24, -6.12]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_2_11" geometry={nodes.House_7_2_11.geometry} material={materials['World ap']} position={[-3.44, -5.3, -3.71]} rotation={[-1.18, 0.22, 1.59]} />
                  <mesh name="House_7_3_13" geometry={nodes.House_7_3_13.geometry} material={materials['World ap']} position={[-2.26, -6.48, 7.48]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_4_13" geometry={nodes.House_7_4_13.geometry} material={materials['World ap']} position={[-0.5, 5.91, 4.34]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_5_13" geometry={nodes.House_7_5_13.geometry} material={materials['World ap']} position={[-3.11, -0.18, -10.35]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_6_8" geometry={nodes.House_7_6_8.geometry} material={materials['World ap']} position={[-1.41, 4.85, -9.6]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_7_7" geometry={nodes.House_7_7_7.geometry} material={materials['World ap']} position={[0.89, -1.19, 9.97]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_8_8" geometry={nodes.House_7_8_8.geometry} material={materials['World ap']} position={[-4.27, -6.02, -10.27]} rotation={[-1.48, 0.23, 1.59]} />
                </group>
                <group name="Hongkong_1" position={[59.44, 39.92, 101.97]} rotation={[-1.63, 1.29, -1.3]}>
                  <mesh name="House_7_13_9" geometry={nodes.House_7_13_9.geometry} material={materials['World ap']} position={[-1.15, -3, 5.6]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_15_9" geometry={nodes.House_7_15_9.geometry} material={materials['World ap']} position={[-1.34, -5.74, 1.79]} rotation={[-1.37, 0.17, 1.56]} />
                  <mesh name="House_7_17_8" geometry={nodes.House_7_17_8.geometry} material={materials['World ap']} position={[0.74, 0.09, 3.37]} rotation={[-1.37, 0.17, 1.49]} />
                  <mesh name="House_7_18_11" geometry={nodes.House_7_18_11.geometry} material={materials['World ap']} position={[-1.06, 1.29, -0.97]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_10" geometry={nodes.House_7_19_10.geometry} material={materials['World ap']} position={[-0.82, 1.94, -4.41]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_10" geometry={nodes.House_7_26_10.geometry} material={materials['World ap']} position={[0.32, 5.88, -1.02]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_15_10" geometry={nodes.House_7_15_10.geometry} material={materials['World ap']} position={[-1.6, -1.85, -2.03]} rotation={[-1.18, 0.22, 1.65]} />
                  <mesh name="House_7_1_12" geometry={nodes.House_7_1_12.geometry} material={materials['World ap']} position={[-1.62, -1.03, -5.1]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_2_12" geometry={nodes.House_7_2_12.geometry} material={materials['World ap']} position={[-2.87, -4.42, -3.09]} rotation={[-1.18, 0.22, 1.59]} />
                  <mesh name="House_7_3_14" geometry={nodes.House_7_3_14.geometry} material={materials['World ap']} position={[-1.88, -5.4, 6.23]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_4_14" geometry={nodes.House_7_4_14.geometry} material={materials['World ap']} position={[-0.41, 4.92, 3.61]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_5_14" geometry={nodes.House_7_5_14.geometry} material={materials['World ap']} position={[-2.59, -0.15, -8.62]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_6_9" geometry={nodes.House_7_6_9.geometry} material={materials['World ap']} position={[-1.18, 4.04, -8]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_7_8" geometry={nodes.House_7_7_8.geometry} material={materials['World ap']} position={[0.74, -0.99, 8.31]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_8_9" geometry={nodes.House_7_8_9.geometry} material={materials['World ap']} position={[-3.56, -5.01, -8.56]} rotation={[-1.48, 0.23, 1.59]} />
                </group>
                <group name="Hongkong" position={[42.91, -2.6, 106.08]} rotation={[1.73, -1.21, 1.71]}>
                  <mesh name="House_7_13_10" geometry={nodes.House_7_13_10.geometry} material={materials['World ap']} position={[-1.15, -3, 5.6]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_15_11" geometry={nodes.House_7_15_11.geometry} material={materials['World ap']} position={[-1.34, -5.74, 1.79]} rotation={[-1.37, 0.17, 1.56]} />
                  <mesh name="House_7_17_9" geometry={nodes.House_7_17_9.geometry} material={materials['World ap']} position={[0.74, 0.09, 3.37]} rotation={[-1.37, 0.17, 1.49]} />
                  <mesh name="House_7_18_12" geometry={nodes.House_7_18_12.geometry} material={materials['World ap']} position={[-1.06, 1.29, -0.97]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_11" geometry={nodes.House_7_19_11.geometry} material={materials['World ap']} position={[-0.82, 1.94, -4.41]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_11" geometry={nodes.House_7_26_11.geometry} material={materials['World ap']} position={[0.32, 5.88, -1.02]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_16_4" geometry={nodes.House_7_16_4.geometry} material={materials['World ap']} position={[-1.6, -1.85, -2.03]} rotation={[-1.18, 0.22, 1.65]} />
                  <mesh name="House_7_1_13" geometry={nodes.House_7_1_13.geometry} material={materials['World ap']} position={[-1.62, -1.03, -5.1]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_2_13" geometry={nodes.House_7_2_13.geometry} material={materials['World ap']} position={[-2.87, -4.42, -3.09]} rotation={[-1.18, 0.22, 1.59]} />
                  <mesh name="House_7_3_15" geometry={nodes.House_7_3_15.geometry} material={materials['World ap']} position={[-1.88, -5.4, 6.23]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_4_15" geometry={nodes.House_7_4_15.geometry} material={materials['World ap']} position={[-0.41, 4.92, 3.61]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_5_15" geometry={nodes.House_7_5_15.geometry} material={materials['World ap']} position={[-2.59, -0.15, -8.62]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_6_10" geometry={nodes.House_7_6_10.geometry} material={materials['World ap']} position={[-1.18, 4.04, -8]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_7_9" geometry={nodes.House_7_7_9.geometry} material={materials['World ap']} position={[0.74, -0.99, 8.31]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_8_10" geometry={nodes.House_7_8_10.geometry} material={materials['World ap']} position={[-3.56, -5.01, -8.56]} rotation={[-1.48, 0.23, 1.59]} />
                </group>
                <group name="Deli_1" position={[-18.48, 12.16, 100.98]} rotation={[2.44, -0.8, 2.62]}>
                  <mesh name="House_7_13_11" geometry={nodes.House_7_13_11.geometry} material={materials['World ap']} position={[-1.15, -3, 5.6]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_15_12" geometry={nodes.House_7_15_12.geometry} material={materials['World ap']} position={[-1.34, -5.74, 1.79]} rotation={[-1.37, 0.17, 1.56]} />
                  <mesh name="House_7_17_10" geometry={nodes.House_7_17_10.geometry} material={materials['World ap']} position={[0.74, 0.09, 3.37]} rotation={[-1.37, 0.17, 1.49]} />
                  <mesh name="House_7_18_13" geometry={nodes.House_7_18_13.geometry} material={materials['World ap']} position={[-1.06, 1.29, -0.97]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_12" geometry={nodes.House_7_19_12.geometry} material={materials['World ap']} position={[-0.82, 1.94, -4.41]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_12" geometry={nodes.House_7_26_12.geometry} material={materials['World ap']} position={[0.32, 5.88, -1.02]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_17_11" geometry={nodes.House_7_17_11.geometry} material={materials['World ap']} position={[-1.6, -1.85, -2.03]} rotation={[-1.18, 0.22, 1.65]} />
                  <mesh name="House_7_1_14" geometry={nodes.House_7_1_14.geometry} material={materials['World ap']} position={[-1.62, -1.03, -5.1]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_2_14" geometry={nodes.House_7_2_14.geometry} material={materials['World ap']} position={[-2.87, -4.42, -3.09]} rotation={[-1.18, 0.22, 1.59]} />
                  <mesh name="House_7_3_16" geometry={nodes.House_7_3_16.geometry} material={materials['World ap']} position={[-1.88, -5.4, 6.23]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_4_16" geometry={nodes.House_7_4_16.geometry} material={materials['World ap']} position={[-0.41, 4.92, 3.61]} rotation={[-1.13, 0.14, 1.6]} />
                </group>
                <group name="Deli" position={[-10.27, -29.4, 94.67]} rotation={[2.6, -0.63, 2.32]}>
                  <mesh name="House_7_13_12" geometry={nodes.House_7_13_12.geometry} material={materials['World ap']} position={[-1.15, -3, 5.6]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_15_13" geometry={nodes.House_7_15_13.geometry} material={materials['World ap']} position={[-1.34, -5.74, 1.79]} rotation={[-1.37, 0.17, 1.56]} />
                  <mesh name="House_7_17_12" geometry={nodes.House_7_17_12.geometry} material={materials['World ap']} position={[0.74, 0.09, 3.37]} rotation={[-1.37, 0.17, 1.49]} />
                  <mesh name="House_7_18_14" geometry={nodes.House_7_18_14.geometry} material={materials['World ap']} position={[-1.06, 1.29, -0.97]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_13" geometry={nodes.House_7_19_13.geometry} material={materials['World ap']} position={[-0.82, 1.94, -4.41]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_13" geometry={nodes.House_7_26_13.geometry} material={materials['World ap']} position={[0.32, 5.88, -1.02]} rotation={[-1.13, 0.14, 1.6]} />
                  <mesh name="House_7_18_15" geometry={nodes.House_7_18_15.geometry} material={materials['World ap']} position={[-1.6, -1.85, -2.03]} rotation={[-1.18, 0.22, 1.65]} />
                  <mesh name="House_7_1_15" geometry={nodes.House_7_1_15.geometry} material={materials['World ap']} position={[-1.62, -1.03, -5.1]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_2_15" geometry={nodes.House_7_2_15.geometry} material={materials['World ap']} position={[-2.87, -4.42, -3.09]} rotation={[-1.18, 0.22, 1.59]} />
                  <mesh name="House_7_3_17" geometry={nodes.House_7_3_17.geometry} material={materials['World ap']} position={[-1.88, -5.4, 6.23]} rotation={[-1.18, 0.23, 1.4]} />
                  <mesh name="House_7_4_17" geometry={nodes.House_7_4_17.geometry} material={materials['World ap']} position={[-0.41, 4.92, 3.61]} rotation={[-1.13, 0.14, 1.6]} />
                </group>
                <group name="Istanbul" position={[-77.37, 46.76, 16.86]} rotation={[0, -0.15, 0]}>
                  <mesh name="House_7_13_13" geometry={nodes.House_7_13_13.geometry} material={materials['World ap']} position={[0.16, -1.97, 3.19]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_15_14" geometry={nodes.House_7_15_14.geometry} material={materials['World ap']} position={[-0.52, -1.73, 0.86]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_17_13" geometry={nodes.House_7_17_13.geometry} material={materials['World ap']} position={[0.07, 0.13, 2.09]} rotation={[-1.37, 0.17, 1.83]} />
                  <mesh name="House_7_18_16" geometry={nodes.House_7_18_16.geometry} material={materials['World ap']} position={[-0.66, 0.8, -0.6]} rotation={[-1.37, 0.17, 1.62]} />
                  <mesh name="House_7_19_14" geometry={nodes.House_7_19_14.geometry} material={materials['World ap']} position={[-0.51, 1.21, -2.76]} rotation={[-1.37, 0.17, 1.52]} />
                  <mesh name="House_7_26_14" geometry={nodes.House_7_26_14.geometry} material={materials['World ap']} position={[0.91, 2.58, -1.19]} rotation={[-1.13, 0.37, 1.6]} />
                  <mesh name="House_7_19_15" geometry={nodes.House_7_19_15.geometry} material={materials['World ap']} position={[-0.7, -1.21, -1.32]} rotation={[-1.18, 0.22, 1.8]} />
                  <mesh name="House_7_1_16" geometry={nodes.House_7_1_16.geometry} material={materials['World ap']} position={[-0.27, -0.73, -3.42]} rotation={[-1.37, 0.17, 1.83]} />
                </group>
                <group name="City_2" position={[-75.22, 33.8, 40.44]} rotation={[-2.58, -0.42, 1.83]}>
                  <mesh name="House_7_8_11" geometry={nodes.House_7_8_11.geometry} material={materials['World ap']} position={[-3.84, -1.26, -11.12]} rotation={[0.35, -0.9, 0.32]} />
                  <mesh name="House_7_1_17" geometry={nodes.House_7_1_17.geometry} material={materials['World ap']} position={[8.65, -1.74, 10.06]} rotation={[0.25, -0.91, -0.2]} />
                  <mesh name="House_7_2_16" geometry={nodes.House_7_2_16.geometry} material={materials['World ap']} position={[6.19, -0.56, 7.18]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_3_18" geometry={nodes.House_7_3_18.geometry} material={materials['World ap']} position={[9.32, -0.38, 5.68]} rotation={[0.24, -0.6, 0.02]} />
                  <mesh name="House_7_4_18" geometry={nodes.House_7_4_18.geometry} material={materials['World ap']} position={[8.36, 0.67, -0.28]} rotation={[0.48, -1.31, 0.38]} />
                  <mesh name="House_7_5_16" geometry={nodes.House_7_5_16.geometry} material={materials['World ap']} position={[13.19, 0.57, 1.07]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_6_11" geometry={nodes.House_7_6_11.geometry} material={materials['World ap']} position={[4.03, -2.96, 10.41]} rotation={[0.25, -0.81, 0.03]} />
                  <mesh name="House_7_7_10" geometry={nodes.House_7_7_10.geometry} material={materials['World ap']} position={[13.93, -0.05, 3.32]} rotation={[0.08, -1.02, -0.41]} />
                  <mesh name="House_7_9_7" geometry={nodes.House_7_9_7.geometry} material={materials['World ap']} position={[12.45, -0.96, -2.16]} rotation={[0.11, -0.9, -0.11]} />
                  <mesh name="House_7_10_10" geometry={nodes.House_7_10_10.geometry} material={materials['World ap']} position={[6.9, -1.51, 3.84]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_11_7" geometry={nodes.House_7_11_7.geometry} material={materials['World ap']} position={[9.64, -0.53, -3.32]} rotation={[0.11, -0.9, -0.11]} />
                  <mesh name="House_7_12_8" geometry={nodes.House_7_12_8.geometry} material={materials['World ap']} position={[0.38, -0.8, -6.62]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_14_6" geometry={nodes.House_7_14_6.geometry} material={materials['World ap']} position={[-2.27, -0.98, -6.52]} rotation={[0.37, -0.84, 0.42]} />
                  <mesh name="House_7_21_4" geometry={nodes.House_7_21_4.geometry} material={materials['World ap']} position={[10.85, -1.68, 7.43]} rotation={[0.12, -0.86, -0.29]} />
                  <mesh name="House_7_22_3" geometry={nodes.House_7_22_3.geometry} material={materials['World ap']} position={[-3.32, -1.6, -8.66]} rotation={[0.12, -0.86, 0.09]} />
                  <mesh name="House_7_23_4" geometry={nodes.House_7_23_4.geometry} material={materials['World ap']} position={[-0.63, 0.85, -8.66]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_24_4" geometry={nodes.House_7_24_4.geometry} material={materials['World ap']} position={[5.4, -3.33, 12.15]} rotation={[0.52, -0.92, 0.07]} />
                  <mesh name="House_7_27_8" geometry={nodes.House_7_27_8.geometry} material={materials['World ap']} position={[-23.32, -5.13, 5.62]} rotation={[0.54, -0.94, 0.43]} />
                  <mesh name="House_7_29_5" geometry={nodes.House_7_29_5.geometry} material={materials['World ap']} position={[12.3, -0.5, 5.45]} rotation={[0.25, -0.94, -0.33]} />
                  <mesh name="House_7_30" geometry={nodes.House_7_30.geometry} material={materials['World ap']} position={[16.9, -0.83, 3.18]} rotation={[0.12, -0.83, -0.56]} />
                  <mesh name="House_7_31_6" geometry={nodes.House_7_31_6.geometry} material={materials['World ap']} position={[10.59, -0.94, 2.77]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_6" geometry={nodes.House_7_32_6.geometry} material={materials['World ap']} position={[-23.98, -5.89, 9.24]} rotation={[0.55, -0.96, 0.31]} />
                  <mesh name="House_7_20_5" geometry={nodes.House_7_20_5.geometry} material={materials['World ap']} position={[-22.08, -5.21, 7.69]} rotation={[0.54, -0.94, 0.3]} />
                  <mesh name="House_7_13_14" geometry={nodes.House_7_13_14.geometry} material={materials['World ap']} position={[-7.58, -1.02, -2.28]} rotation={[0.6, -1.19, 0.54]} />
                  <mesh name="House_7_15_15" geometry={nodes.House_7_15_15.geometry} material={materials['World ap']} position={[-9.47, -1.43, -1.7]} rotation={[1.64, -1.37, 1.54]} />
                  <mesh name="House_7_16_5" geometry={nodes.House_7_16_5.geometry} material={materials['World ap']} position={[-11.37, -1.98, -1.67]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_17_14" geometry={nodes.House_7_17_14.geometry} material={materials['World ap']} position={[-4.7, -0.67, -1.37]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18_17" geometry={nodes.House_7_18_17.geometry} material={materials['World ap']} position={[-8, -5.15, 13.34]} rotation={[2.51, -1.52, 2.45]} />
                  <mesh name="House_7_19_16" geometry={nodes.House_7_19_16.geometry} material={materials['World ap']} position={[-9.84, -5.26, 15.13]} rotation={[2.82, -1.5, 2.63]} />
                  <mesh name="House_7_20_6" geometry={nodes.House_7_20_6.geometry} material={materials['World ap']} position={[-8.1, -5.26, 14.99]} rotation={[2.51, -1.52, 2.32]} />
                </group>
                <group name="Moscow" position={[-68.07, 67.45, 25.2]} rotation={[-2.65, -0.1, 2.15]}>
                  <mesh name="House_7_8_12" geometry={nodes.House_7_8_12.geometry} material={materials['World ap']} position={[2.41, 1.25, -5.72]} rotation={[0.35, -0.9, 0.14]} />
                  <mesh name="House_7_1_18" geometry={nodes.House_7_1_18.geometry} material={materials['World ap']} position={[7.16, -2.08, 8.09]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_2_17" geometry={nodes.House_7_2_17.geometry} material={materials['World ap']} position={[5.77, -2.68, 6.36]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_3_19" geometry={nodes.House_7_3_19.geometry} material={materials['World ap']} position={[7.88, 0.13, 4.33]} rotation={[0.24, -0.6, 0.02]} />
                  <mesh name="House_7_4_19" geometry={nodes.House_7_4_19.geometry} material={materials['World ap']} position={[5.23, 0.35, -7.34]} rotation={[0.48, -1.31, 0.38]} />
                  <mesh name="House_7_5_17" geometry={nodes.House_7_5_17.geometry} material={materials['World ap']} position={[12.86, -1.08, 0.37]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_6_12" geometry={nodes.House_7_6_12.geometry} material={materials['World ap']} position={[5.07, -2.66, 9.22]} rotation={[0.25, -0.81, 0.03]} />
                  <mesh name="House_7_9_8" geometry={nodes.House_7_9_8.geometry} material={materials['World ap']} position={[10.74, -1.1, -0.8]} rotation={[0.11, -0.9, -0.11]} />
                  <mesh name="House_7_10_11" geometry={nodes.House_7_10_11.geometry} material={materials['World ap']} position={[3.34, -2.2, 7.05]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_11_8" geometry={nodes.House_7_11_8.geometry} material={materials['World ap']} position={[9.06, -0.58, -2.86]} rotation={[0.11, -0.9, -0.11]} />
                  <mesh name="House_7_12_9" geometry={nodes.House_7_12_9.geometry} material={materials['World ap']} position={[-3.24, -0.29, -3.89]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_13_15" geometry={nodes.House_7_13_15.geometry} material={materials['World ap']} position={[-13.82, -4.26, 6.16]} rotation={[0.32, -1.11, 0.22]} />
                  <mesh name="House_7_14_7" geometry={nodes.House_7_14_7.geometry} material={materials['World ap']} position={[-0.29, 1.07, -3.99]} rotation={[0.37, -0.84, 0.07]} />
                  <mesh name="House_7_15_16" geometry={nodes.House_7_15_16.geometry} material={materials['World ap']} position={[-11.98, -2.11, -0.2]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_16_6" geometry={nodes.House_7_16_6.geometry} material={materials['World ap']} position={[-12.25, -3.16, 1.99]} rotation={[0.3, -1.05, 0.2]} />
                  <mesh name="House_7_17_15" geometry={nodes.House_7_17_15.geometry} material={materials['World ap']} position={[-10.69, -3.27, 4.04]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18_18" geometry={nodes.House_7_18_18.geometry} material={materials['World ap']} position={[-9.26, -3.14, 5.99]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_19_17" geometry={nodes.House_7_19_17.geometry} material={materials['World ap']} position={[-7.66, -3.47, 8.04]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_20_7" geometry={nodes.House_7_20_7.geometry} material={materials['World ap']} position={[-11.2, -4.58, 7.77]} rotation={[0.53, -0.84, 0.23]} />
                  <mesh name="House_7_21_5" geometry={nodes.House_7_21_5.geometry} material={materials['World ap']} position={[9.7, -1.38, 6.12]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_23_5" geometry={nodes.House_7_23_5.geometry} material={materials['World ap']} position={[7.21, 0.92, -4.98]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_24_5" geometry={nodes.House_7_24_5.geometry} material={materials['World ap']} position={[9.76, -2.49, 8.88]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_25_5" geometry={nodes.House_7_25_5.geometry} material={materials['World ap']} position={[-6.22, -4.56, 10.03]} rotation={[0.36, -0.88, 0.27]} />
                  <mesh name="House_7_26_15" geometry={nodes.House_7_26_15.geometry} material={materials['World ap']} position={[-10.69, -5.71, 10.27]} rotation={[0.68, -1.12, 0.36]} />
                  <mesh name="House_7_27_9" geometry={nodes.House_7_27_9.geometry} material={materials['World ap']} position={[-16.92, -3.89, 2.98]} rotation={[0.25, -0.91, -0.06]} />
                  <mesh name="House_7_31_7" geometry={nodes.House_7_31_7.geometry} material={materials['World ap']} position={[11.4, -0.96, 2.33]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_7" geometry={nodes.House_7_32_7.geometry} material={materials['World ap']} position={[-13.76, -4.86, 4.51]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_21_6" geometry={nodes.House_7_21_6.geometry} material={materials['World ap']} position={[-16.6, -2.56, 0.2]} rotation={[0.25, -0.91, 0.04]} />
                  <mesh name="House_7_28_3" geometry={nodes.House_7_28_3.geometry} material={materials['World ap']} position={[-7.14, -3.07, 5.49]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_33_3" geometry={nodes.House_7_33_3.geometry} material={materials['World ap']} position={[4.76, -2.4, 5.08]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_34" geometry={nodes.House_7_34.geometry} material={materials['World ap']} position={[0.22, -2.96, 6.37]} rotation={[0.35, -0.9, 0.14]} />
                  <mesh name="House_7_35_3" geometry={nodes.House_7_35_3.geometry} material={materials['World ap']} position={[-1.08, -2.7, 4.73]} rotation={[0.35, -0.9, 0.14]} />
                </group>
                <group name="Mexica" position={[88.46, 3.66, -81.16]} rotation={[-1.86, -0.08, -0.8]}>
                  <mesh name="House_7_2_18" geometry={nodes.House_7_2_18.geometry} material={materials['World ap']} position={[5.17, -0.29, 5.89]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_6_13" geometry={nodes.House_7_6_13.geometry} material={materials['World ap']} position={[4.03, -2.96, 10.41]} rotation={[0.25, -0.81, 0.03]} />
                  <mesh name="House_7_7_11" geometry={nodes.House_7_7_11.geometry} material={materials['World ap']} position={[2.13, -3.32, 11.83]} rotation={[0.26, -1.04, 0.04]} />
                  <mesh name="House_7_10_12" geometry={nodes.House_7_10_12.geometry} material={materials['World ap']} position={[2.37, -2.51, 8.31]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_12_10" geometry={nodes.House_7_12_10.geometry} material={materials['World ap']} position={[-6.33, -0.72, -2.86]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_14_8" geometry={nodes.House_7_14_8.geometry} material={materials['World ap']} position={[-5.74, -0.4, -0.37]} rotation={[0.06, -0.89, 0.12]} />
                  <mesh name="House_7_27_10" geometry={nodes.House_7_27_10.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_29_6" geometry={nodes.House_7_29_6.geometry} material={materials['World ap']} position={[0.12, -2.18, 6.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_30_2" geometry={nodes.House_7_30_2.geometry} material={materials['World ap']} position={[-1.47, -2.69, 8.75]} rotation={[0.25, -0.84, 0.03]} />
                  <mesh name="House_7_31_8" geometry={nodes.House_7_31_8.geometry} material={materials['World ap']} position={[-1.49, -1.71, 4.49]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_8" geometry={nodes.House_7_32_8.geometry} material={materials['World ap']} position={[-3, -1.27, 2.46]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_22_4" geometry={nodes.House_7_22_4.geometry} material={materials['World ap']} position={[-0.58, 1.52, -0.02]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_3_20" geometry={nodes.House_7_3_20.geometry} material={materials['World ap']} position={[1.77, 0.14, 3.9]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_4_20" geometry={nodes.House_7_4_20.geometry} material={materials['World ap']} position={[0.26, 0.58, 1.87]} rotation={[0.25, -0.94, 0.03]} />
                </group>
                <group name="Mexica_1" position={[63.77, 37.79, -94.39]} rotation={[3.1, -0.93, -1.86]}>
                  <mesh name="House_7_2_19" geometry={nodes.House_7_2_19.geometry} material={materials['World ap']} position={[5.17, -0.29, 5.89]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_6_14" geometry={nodes.House_7_6_14.geometry} material={materials['World ap']} position={[4.03, -2.96, 10.41]} rotation={[0.25, -0.81, 0.03]} />
                  <mesh name="House_7_7_12" geometry={nodes.House_7_7_12.geometry} material={materials['World ap']} position={[2.13, -3.32, 11.83]} rotation={[0.26, -1.04, 0.04]} />
                  <mesh name="House_7_10_13" geometry={nodes.House_7_10_13.geometry} material={materials['World ap']} position={[2.37, -2.51, 8.31]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_12_11" geometry={nodes.House_7_12_11.geometry} material={materials['World ap']} position={[-6.33, -0.72, -2.86]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_14_9" geometry={nodes.House_7_14_9.geometry} material={materials['World ap']} position={[-5.74, -0.4, -0.37]} rotation={[0.06, -0.89, 0.12]} />
                  <mesh name="House_7_27_11" geometry={nodes.House_7_27_11.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_29_7" geometry={nodes.House_7_29_7.geometry} material={materials['World ap']} position={[0.12, -2.18, 6.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_30_3" geometry={nodes.House_7_30_3.geometry} material={materials['World ap']} position={[-1.47, -2.69, 8.75]} rotation={[0.25, -0.84, 0.03]} />
                  <mesh name="House_7_31_9" geometry={nodes.House_7_31_9.geometry} material={materials['World ap']} position={[-1.49, -1.71, 4.49]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_9" geometry={nodes.House_7_32_9.geometry} material={materials['World ap']} position={[-3, -1.27, 2.46]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_23_6" geometry={nodes.House_7_23_6.geometry} material={materials['World ap']} position={[-0.58, 1.52, -0.02]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_3_21" geometry={nodes.House_7_3_21.geometry} material={materials['World ap']} position={[1.77, 0.14, 3.9]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_4_21" geometry={nodes.House_7_4_21.geometry} material={materials['World ap']} position={[0.26, 0.58, 1.87]} rotation={[0.25, -0.94, 0.03]} />
                </group>
                <group name="NY" position={[-6.07, 24, -101.04]} rotation={[-1.74, -0.05, 0.26]}>
                  <mesh name="House_4" geometry={nodes.House_4.geometry} material={materials['World ap']} position={[-5.22, -3.33, 4.5]} rotation={[-2.77, 0.94, 3]} />
                  <mesh name="House_7_8_13" geometry={nodes.House_7_8_13.geometry} material={materials['World ap']} position={[4.5, 2.71, -2.4]} rotation={[0.35, -0.9, 0.14]} />
                  <mesh name="House_7_24_6" geometry={nodes.House_7_24_6.geometry} material={materials['World ap']} position={[-2.38, 2.05, -3.14]} rotation={[0.36, -0.88, 0.27]} />
                  <mesh name="House_7_1_19" geometry={nodes.House_7_1_19.geometry} material={materials['World ap']} position={[7.15, -0.82, 8.4]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_2_20" geometry={nodes.House_7_2_20.geometry} material={materials['World ap']} position={[4.9, -0.21, 5.55]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_3_22" geometry={nodes.House_7_3_22.geometry} material={materials['World ap']} position={[7.71, 0.32, 3.45]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_4_22" geometry={nodes.House_7_4_22.geometry} material={materials['World ap']} position={[5.57, 2.67, -8.76]} rotation={[0.48, -1.31, 0.38]} />
                  <mesh name="House_7_5_18" geometry={nodes.House_7_5_18.geometry} material={materials['World ap']} position={[11.47, -0.68, 1.79]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_6_15" geometry={nodes.House_7_6_15.geometry} material={materials['World ap']} position={[4.03, -2.96, 10.41]} rotation={[0.25, -0.81, 0.03]} />
                  <mesh name="House_7_7_13" geometry={nodes.House_7_7_13.geometry} material={materials['World ap']} position={[2.13, -3.32, 11.83]} rotation={[0.26, -1.04, 0.04]} />
                  <mesh name="House_7_9_9" geometry={nodes.House_7_9_9.geometry} material={materials['World ap']} position={[-0.11, -3.75, 13.5]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_10_14" geometry={nodes.House_7_10_14.geometry} material={materials['World ap']} position={[2.37, -2.51, 8.31]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_11_9" geometry={nodes.House_7_11_9.geometry} material={materials['World ap']} position={[-1.76, -3.3, 11.41]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_12_12" geometry={nodes.House_7_12_12.geometry} material={materials['World ap']} position={[-6.33, -0.72, -2.86]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_13_16" geometry={nodes.House_7_13_16.geometry} material={materials['World ap']} position={[-10.03, -0.99, 0.95]} rotation={[0.32, -1.11, 0.22]} />
                  <mesh name="House_7_14_10" geometry={nodes.House_7_14_10.geometry} material={materials['World ap']} position={[-5.74, -0.4, -0.37]} rotation={[0.06, -0.89, 0.12]} />
                  <mesh name="House_7_15_17" geometry={nodes.House_7_15_17.geometry} material={materials['World ap']} position={[-8.48, -1.09, 3]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_16_7" geometry={nodes.House_7_16_7.geometry} material={materials['World ap']} position={[-12.27, -1.42, 2.63]} rotation={[0.3, -1.05, 0.2]} />
                  <mesh name="House_7_17_16" geometry={nodes.House_7_17_16.geometry} material={materials['World ap']} position={[-10.72, -1.52, 4.68]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18_19" geometry={nodes.House_7_18_19.geometry} material={materials['World ap']} position={[-8.98, -1.64, 6.96]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_19_18" geometry={nodes.House_7_19_18.geometry} material={materials['World ap']} position={[-7.43, -1.74, 9.01]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_20_8" geometry={nodes.House_7_20_8.geometry} material={materials['World ap']} position={[-11.85, -3.43, 7.9]} rotation={[0.53, -0.84, 0.23]} />
                  <mesh name="House_7_21_7" geometry={nodes.House_7_21_7.geometry} material={materials['World ap']} position={[9.78, -0.24, -0.12]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_22_5" geometry={nodes.House_7_22_5.geometry} material={materials['World ap']} position={[11.72, 0.1, -1.76]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_23_7" geometry={nodes.House_7_23_7.geometry} material={materials['World ap']} position={[8.16, 1.02, -5.8]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_25_6" geometry={nodes.House_7_25_6.geometry} material={materials['World ap']} position={[-4.78, -2.96, 12.49]} rotation={[0.36, -0.88, 0.27]} />
                  <mesh name="House_7_26_16" geometry={nodes.House_7_26_16.geometry} material={materials['World ap']} position={[-9.57, -4.02, 10.48]} rotation={[0.68, -1.12, 0.36]} />
                  <mesh name="House_7_27_12" geometry={nodes.House_7_27_12.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_28_4" geometry={nodes.House_7_28_4.geometry} material={materials['World ap']} position={[1.42, 3.34, -6.28]} rotation={[0.35, -0.9, 0.14]} />
                  <mesh name="House_7_29_8" geometry={nodes.House_7_29_8.geometry} material={materials['World ap']} position={[0.12, -2.18, 6.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_30_4" geometry={nodes.House_7_30_4.geometry} material={materials['World ap']} position={[-1.47, -2.69, 8.75]} rotation={[0.25, -0.84, 0.03]} />
                  <mesh name="House_7_31_10" geometry={nodes.House_7_31_10.geometry} material={materials['World ap']} position={[-1.49, -1.71, 4.49]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_10" geometry={nodes.House_7_32_10.geometry} material={materials['World ap']} position={[-3, -1.27, 2.46]} rotation={[0.25, -0.94, 0.03]} />
                </group>
                <group name="Moscow_2" position={[-6.07, 24, -101.04]} rotation={[-1.74, -0.05, 0.26]}>
                  <mesh name="House_4_2" geometry={nodes.House_4_2.geometry} material={materials['World ap']} position={[-5.22, -3.33, 4.5]} rotation={[-2.77, 0.94, 3]} />
                  <mesh name="House_7_8_14" geometry={nodes.House_7_8_14.geometry} material={materials['World ap']} position={[4.5, 2.71, -2.4]} rotation={[0.35, -0.9, 0.14]} />
                  <mesh name="House_7_25_7" geometry={nodes.House_7_25_7.geometry} material={materials['World ap']} position={[-2.38, 2.05, -3.14]} rotation={[0.36, -0.88, 0.27]} />
                  <mesh name="House_7_1_20" geometry={nodes.House_7_1_20.geometry} material={materials['World ap']} position={[7.15, -0.82, 8.4]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_2_21" geometry={nodes.House_7_2_21.geometry} material={materials['World ap']} position={[4.9, -0.21, 5.55]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_3_23" geometry={nodes.House_7_3_23.geometry} material={materials['World ap']} position={[7.71, 0.32, 3.45]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_4_23" geometry={nodes.House_7_4_23.geometry} material={materials['World ap']} position={[5.57, 2.67, -8.76]} rotation={[0.48, -1.31, 0.38]} />
                  <mesh name="House_7_5_19" geometry={nodes.House_7_5_19.geometry} material={materials['World ap']} position={[11.47, -0.68, 1.79]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_6_16" geometry={nodes.House_7_6_16.geometry} material={materials['World ap']} position={[4.03, -2.96, 10.41]} rotation={[0.25, -0.81, 0.03]} />
                  <mesh name="House_7_7_14" geometry={nodes.House_7_7_14.geometry} material={materials['World ap']} position={[2.13, -3.32, 11.83]} rotation={[0.26, -1.04, 0.04]} />
                  <mesh name="House_7_9_10" geometry={nodes.House_7_9_10.geometry} material={materials['World ap']} position={[-0.11, -3.75, 13.5]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_10_15" geometry={nodes.House_7_10_15.geometry} material={materials['World ap']} position={[2.37, -2.51, 8.31]} rotation={[0.24, -0.64, 0.02]} />
                  <mesh name="House_7_11_10" geometry={nodes.House_7_11_10.geometry} material={materials['World ap']} position={[-1.76, -3.3, 11.41]} rotation={[0.25, -0.91, 0.03]} />
                  <mesh name="House_7_12_13" geometry={nodes.House_7_12_13.geometry} material={materials['World ap']} position={[-6.33, -0.72, -2.86]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_13_17" geometry={nodes.House_7_13_17.geometry} material={materials['World ap']} position={[-10.03, -0.99, 0.95]} rotation={[0.32, -1.11, 0.22]} />
                  <mesh name="House_7_14_11" geometry={nodes.House_7_14_11.geometry} material={materials['World ap']} position={[-5.74, -0.4, -0.37]} rotation={[0.06, -0.89, 0.12]} />
                  <mesh name="House_7_15_18" geometry={nodes.House_7_15_18.geometry} material={materials['World ap']} position={[-8.48, -1.09, 3]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_16_8" geometry={nodes.House_7_16_8.geometry} material={materials['World ap']} position={[-12.27, -1.42, 2.63]} rotation={[0.3, -1.05, 0.2]} />
                  <mesh name="House_7_17_17" geometry={nodes.House_7_17_17.geometry} material={materials['World ap']} position={[-10.72, -1.52, 4.68]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_18_20" geometry={nodes.House_7_18_20.geometry} material={materials['World ap']} position={[-8.98, -1.64, 6.96]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_19_19" geometry={nodes.House_7_19_19.geometry} material={materials['World ap']} position={[-7.43, -1.74, 9.01]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_20_9" geometry={nodes.House_7_20_9.geometry} material={materials['World ap']} position={[-11.85, -3.43, 7.9]} rotation={[0.53, -0.84, 0.23]} />
                  <mesh name="House_7_21_8" geometry={nodes.House_7_21_8.geometry} material={materials['World ap']} position={[9.78, -0.24, -0.12]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_22_6" geometry={nodes.House_7_22_6.geometry} material={materials['World ap']} position={[11.72, 0.1, -1.76]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_23_8" geometry={nodes.House_7_23_8.geometry} material={materials['World ap']} position={[8.16, 1.02, -5.8]} rotation={[0.12, -0.86, -0.08]} />
                  <mesh name="House_7_25_8" geometry={nodes.House_7_25_8.geometry} material={materials['World ap']} position={[-4.78, -2.96, 12.49]} rotation={[0.36, -0.88, 0.27]} />
                  <mesh name="House_7_26_17" geometry={nodes.House_7_26_17.geometry} material={materials['World ap']} position={[-9.57, -4.02, 10.48]} rotation={[0.68, -1.12, 0.36]} />
                  <mesh name="House_7_27_13" geometry={nodes.House_7_27_13.geometry} material={materials['World ap']} position={[-3.84, -0.33, 0.57]} rotation={[0.25, -0.91, 0.16]} />
                  <mesh name="House_7_28_5" geometry={nodes.House_7_28_5.geometry} material={materials['World ap']} position={[1.42, 3.34, -6.28]} rotation={[0.35, -0.9, 0.14]} />
                  <mesh name="House_7_29_9" geometry={nodes.House_7_29_9.geometry} material={materials['World ap']} position={[0.12, -2.18, 6.67]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_30_5" geometry={nodes.House_7_30_5.geometry} material={materials['World ap']} position={[-1.47, -2.69, 8.75]} rotation={[0.25, -0.84, 0.03]} />
                  <mesh name="House_7_31_11" geometry={nodes.House_7_31_11.geometry} material={materials['World ap']} position={[-1.49, -1.71, 4.49]} rotation={[0.25, -0.94, 0.03]} />
                  <mesh name="House_7_32_11" geometry={nodes.House_7_32_11.geometry} material={materials['World ap']} position={[-3, -1.27, 2.46]} rotation={[0.25, -0.94, 0.03]} />
                </group>
              </group>
              <group name="Ships" position={[-9.84, -9.08, -1.38]}>
                <mesh name="Containers_Ship_5" geometry={nodes.Containers_Ship_5.geometry} material={materials['World ap']} position={[-82.22, -38.99, 36.17]} rotation={[2.23, 0.12, 1.16]} />
                <mesh name="Containers_Ship_4" geometry={nodes.Containers_Ship_4.geometry} material={materials['World ap']} position={[-43.44, -80.68, 40.48]} rotation={[-1.07, -0.79, 2.53]} />
                <mesh name="Containers_Ship_2" geometry={nodes.Containers_Ship_2.geometry} material={materials['World ap']} position={[72.58, -74.96, -16.17]} rotation={[0.64, -0.43, -2.39]} />
                <mesh name="Ship_1" geometry={nodes.Ship_1.geometry} material={materials['World ap']} position={[52.31, -48.86, -72.01]} rotation={[-2.64, -0.6, -0.71]} />
                <mesh name="Containers_Ship_1" geometry={nodes.Containers_Ship_1.geometry} material={materials['World ap']} position={[-55.64, -33.26, -69.33]} rotation={[-1.11, -0.84, 1.05]} />
                <mesh name="Yacht_1" geometry={nodes.Yacht_1.geometry} material={materials['World ap']} position={[-45.92, -2.88, -83]} rotation={[1.7, 0.35, 2.66]} />
                <mesh name="Ship_5" geometry={nodes.Ship_5.geometry} material={materials['World ap']} position={[106.07, 1.94, 28.39]} rotation={[2.12, 0.21, -1.38]} />
                <mesh name="Ship_6" geometry={nodes.Ship_6.geometry} material={materials['World ap']} position={[78.75, 71.64, 10.27]} rotation={[-1.68, -0.68, -1.66]} />
                <mesh name="Ship" geometry={nodes.Ship.geometry} material={materials['World ap']} position={[-1.2, -69.27, 76.33]} rotation={[-2.68, -1.49, 1.29]} />
                <mesh name="Containers_Ship" geometry={nodes.Containers_Ship.geometry} material={materials['World ap']} position={[67.62, 83.42, -6.79]} rotation={[-1.98, -0.71, -1.68]} />
                <mesh name="Containers_Ship_3" geometry={nodes.Containers_Ship_3.geometry} material={materials['World ap']} position={[-70.11, 52.52, -42.03]} rotation={[-1.24, 0.4, 0.9]} />
                <mesh name="Yacht" geometry={nodes.Yacht.geometry} material={materials['World ap']} position={[-90.89, -23.38, 19.27]} rotation={[1.95, 0.23, 1.56]} />
                <mesh name="Yacht_2" geometry={nodes.Yacht_2.geometry} material={materials['World ap']} position={[-46.58, 76.94, 54.3]} rotation={[1.45, -0.74, 1.01]} />
                <mesh name="Ship_2" geometry={nodes.Ship_2.geometry} material={materials['World ap']} position={[58.67, 85.82, 24.12]} rotation={[2.32, 0.86, -2.1]} />
              </group>
              <group name="Places" position={[-77.23, 29.04, -84.95]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh name="Pyramid_1" geometry={nodes.Pyramid_1.geometry} material={materials['World ap']} position={[35.11, -54.17, -61.54]} rotation={[0.11, -0.13, -1.64]} />
                <mesh name="Pyramid" geometry={nodes.Pyramid.geometry} material={materials['World ap']} position={[37.78, -43.28, -67.85]} rotation={[-0.35, -0.03, -1.57]} />
                <mesh name="Eiffel_tower" geometry={nodes.Eiffel_tower.geometry} material={materials['World ap.990']} position={[14.24, 6.24, -64.29]} rotation={[0.18, -0.31, -1.08]} />
                <mesh name="Moscow_3" geometry={nodes.Moscow_3.geometry} material={materials['World ap']} position={[19.14, 13.03, -111.33]} rotation={[0.64, 0.6, -1.04]} />
                <mesh name="Statue" geometry={nodes.Statue.geometry} material={materials['World ap.992']} position={[-40.63, -40.56, 5.59]} rotation={[1.49, 0.02, -0.41]} />
              </group>
              <group name="pLANET" position={[-3.15, -7.2, 3.6]}>
                <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['World ap']} position={[-0.96, 9.25, 0.57]} rotation={[0.06, 0.01, 0.1]}>
                  <group name="water" position={[0, -9.32, 0]} rotation={[-0.06, 0, -0.1]}>
                    <mesh name="water_2" geometry={nodes.water_2.geometry} material={materials.Water} />
                  </group>
                  <mesh name="Africa_Green" geometry={nodes.Africa_Green.geometry} material={materials['World ap']} />
                  <mesh name="America_White_1" geometry={nodes.America_White_1.geometry} material={materials['World ap']} position={[0, -9.32, 0]} rotation={[-0.06, 0, -0.1]} />
                  <mesh name="America_White" geometry={nodes.America_White.geometry} material={materials['World ap']} position={[0, -9.32, 0]} rotation={[-0.06, 0, -0.1]} />
                  <mesh name="Continents" geometry={nodes.Continents.geometry} material={materials['World ap']} position={[0, -9.32, 0]} rotation={[-0.06, 0, -0.1]} />
                  <mesh name="Sphere_1_1" geometry={nodes.Sphere_1_1.geometry} material={materials['World ap']} position={[1.41, -9.47, 0.01]} rotation={[-0.06, 0, -0.1]} />
                  <mesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials['World ap']} position={[1.41, -9.47, 0.01]} rotation={[-0.06, 0, -0.1]} />
                  <mesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials['World ap']} position={[0, -9.32, 0]} rotation={[-0.06, 0, -0.1]} />
                </mesh>
              </group>
              <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['World ap']} position={[-1.39, -7.63, 8.5]} rotation={[1.88, 0, 0]} />
              <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['World ap']} position={[-3.9, 1.73, 2.73]} rotation={[-2.93, -1.02, 2.09]} />
              <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['World ap']} position={[-3.9, 1.73, 2.73]} rotation={[-0.26, 0, -1.87]} />
              <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials['World ap']} position={[0.39, -9.94, 3.83]} rotation={[-2.45, 0, -2.05]} scale={[1.01, 1, 1]} />
              <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['World ap']} position={[-29.14, 3.87, -96.51]} rotation={[-1.11, -0.84, 0.48]} />
            </group>
            <group name="Camera" position={[0.86, -325.89, 8.74]} rotation={[0, 0.57, 1.57]} />
            <mesh name="Clouds_1" geometry={nodes.Clouds_1.geometry} material={materials['World ap.1']} position={[1.66, 43.06, -4.58]} rotation={[Math.PI, 0, 0]} />
            <mesh name="Clouds_2" geometry={nodes.Clouds_2.geometry} material={materials['World ap.1']} position={[1.66, 16.68, -4.58]} rotation={[Math.PI, 0, 0]} />
          </group>
        </group>
      </group>
    )
  }
  
  
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
   
  
                <group name="planet_barren_8" position={[-0.2, -3, -3]} scale={5}>
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
          <group name="Sketchfab_model"  position={[4 , -1, -1]}  rotation={[-Math.PI / 2, 0, -0.5]} scale={1.0}>
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
  
  
  function Model(props) {
    const { nodes, materials } = useGLTF('/model/earth/scene.gltf')
    
  
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[0, 150, -140]} rotation={[-Math.PI / 3, 0, 0]} scale={4}>
  
              <mesh geometry={nodes.Object_5.geometry} material={materials['lambert2SG.001']} />
              <mesh geometry={nodes.Object_6.geometry} material={materials['lambert2SG.001']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }
  
  
  
  function Model3(props) {
      const { nodes, materials } = useGLTF('/model/person/scene.gltf')
      return (
        <group {...props} dispose={null}>
          <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3} >
            <mesh geometry={nodes.children_0.geometry} material={materials.child} />
          </group>
        </group>
      )
    }
  
  // function Model4(props) {
  //   const { nodes, materials } = useGLTF('/person/scene.gltf')
  //   return (
  //     <group {...props} dispose={null}>
  //       <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3}>
  //         <mesh geometry={nodes.children_0.geometry} material={materials.child} />
  //         <Canvas   id="person" >
  //             <Suspense fallback={null}>
  //               <ambientLight />
  //               <spotLight intensity={5} angle={0.1} penumbra={1} position={[500,500,500]} castShadow />
  //               <Model3 />
  //               <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
  //           </Suspense> 
  //           </Canvas>
  //       </group>
  //     </group>
  //   )
  // }
  
  
  export { Model3, Model, Model0, Model00, Model000}