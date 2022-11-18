// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // 액시오스
// import Home from "./pages/Home";
import { useRef } from "react";
//import {useState} from 'react'
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

import { Color } from "three";
import { useEffect, useState } from "react";

function Model9(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  //  useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane001"
                  position={[0, 0, -50]}
                  rotation={[0, 0.0, 0.0]}
                  scale={22.69}
                >
                  <mesh
                    name="Plane001_Material002_0"
                    geometry={nodes.Plane001_Material002_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Plane001_Material023_0"
                    geometry={nodes.Plane001_Material023_0.geometry}
                    material={materials["Material.023"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model90(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane001"
                  position={[0, 0, -50]}
                  rotation={[0, 0.0, 0.0]}
                  scale={22.69}
                >
                  <mesh
                    name="Plane001_Material002_0"
                    geometry={nodes.Plane001_Material002_0.geometry}
                    material={materials["Material.002"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane001_Material023_0"
                    geometry={nodes.Plane001_Material023_0.geometry}
                    material={materials["Material.023"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Model10(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane"
                  position={[0, 0, -50]}
                  rotation={[0, 0.0, 0.0]}
                  scale={20.98}
                >
                  <mesh
                    name="Plane_Material015_0"
                    geometry={nodes.Plane_Material015_0.geometry}
                    material={materials["Material.015"]}
                  />
                  <mesh
                    name="Plane_Material016_0"
                    geometry={nodes.Plane_Material016_0.geometry}
                    material={materials["Material.016"]}
                  />
                  <mesh
                    name="Plane_Material004_0"
                    geometry={nodes.Plane_Material004_0.geometry}
                    material={materials["Material.004"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model100(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane"
                  position={[0, 0, -50]}
                  rotation={[0, 0.0, 0.0]}
                  scale={20.98}
                >
                  <mesh
                    name="Plane_Material015_0"
                    geometry={nodes.Plane_Material015_0.geometry}
                    material={materials["Material.015"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane_Material016_0"
                    geometry={nodes.Plane_Material016_0.geometry}
                    material={materials["Material.016"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane_Material004_0"
                    geometry={nodes.Plane_Material004_0.geometry}
                    material={materials["Material.004"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model11(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane002"
                  position={[0, 0, -50]}
                  rotation={[0, 0.0, 0.0]}
                  scale={29.98}
                >
                  <mesh
                    name="Plane002_Material018_0"
                    geometry={nodes.Plane002_Material018_0.geometry}
                    material={materials["Material.018"]}
                  />
                  <mesh
                    name="Plane002_Material023_0"
                    geometry={nodes.Plane002_Material023_0.geometry}
                    material={materials["Material.023"]}
                  />
                  <mesh
                    name="Plane002_Material019_0"
                    geometry={nodes.Plane002_Material019_0.geometry}
                    material={materials["Material.019"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model110(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane002"
                  position={[0, 0, -50]}
                  rotation={[0, 0.0, 0.0]}
                  scale={29.98}
                >
                  <mesh
                    name="Plane002_Material018_0"
                    geometry={nodes.Plane002_Material018_0.geometry}
                    material={materials["Material.018"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane002_Material023_0"
                    geometry={nodes.Plane002_Material023_0.geometry}
                    material={materials["Material.023"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane002_Material019_0"
                    geometry={nodes.Plane002_Material019_0.geometry}
                    material={materials["Material.019"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model12(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder011"
                  position={[0, 0, -80]}
                  rotation={[0, 0.0, 0.0]}
                  scale={[26.99, 26.99, 3.93]}
                >
                  <mesh
                    name="Cylinder011_Material017_0"
                    geometry={nodes.Cylinder011_Material017_0.geometry}
                    material={materials["Material.017"]}
                  />
                  <mesh
                    name="Cylinder011_Material004_0"
                    geometry={nodes.Cylinder011_Material004_0.geometry}
                    material={materials["Material.004"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model120(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder011"
                  position={[0, 0, -80]}
                  rotation={[0, 0.0, 0.0]}
                  scale={[26.99, 26.99, 3.93]}
                >
                  <mesh
                    name="Cylinder011_Material017_0"
                    geometry={nodes.Cylinder011_Material017_0.geometry}
                    material={materials["Material.017"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Cylinder011_Material004_0"
                    geometry={nodes.Cylinder011_Material004_0.geometry}
                    material={materials["Material.004"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Model13(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder013"
                  position={[5, 10, -80]}
                  rotation={[0, -0.05, 0.37]}
                  scale={[34.99, 34.99, 3.93]}
                >
                  <mesh
                    name="Cylinder013_Material024_0"
                    geometry={nodes.Cylinder013_Material024_0.geometry}
                    material={materials["Material.024"]}
                  />
                  <mesh
                    name="Cylinder013_Material003_0"
                    geometry={nodes.Cylinder013_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                  <mesh
                    name="Cylinder013_Material004_0"
                    geometry={nodes.Cylinder013_Material004_0.geometry}
                    material={materials["Material.004"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model130(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder013"
                  position={[5, 10, -80]}
                  rotation={[0, -0.05, 0.37]}
                  scale={[34.99, 34.99, 3.93]}
                >
                  <mesh
                    name="Cylinder013_Material024_0"
                    geometry={nodes.Cylinder013_Material024_0.geometry}
                    material={materials["Material.024"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Cylinder013_Material003_0"
                    geometry={nodes.Cylinder013_Material003_0.geometry}
                    material={materials["Material.003"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Cylinder013_Material004_0"
                    geometry={nodes.Cylinder013_Material004_0.geometry}
                    material={materials["Material.004"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model14(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder008"
                  position={[0, 3, -80]}
                  rotation={[0, -0.05, 0.8]}
                  scale={[25.25, 25.25, 4.15]}
                >
                  <mesh
                    name="Cylinder008_Material021_0"
                    geometry={nodes.Cylinder008_Material021_0.geometry}
                    material={materials["Material.021"]}
                  />
                  <mesh
                    name="Cylinder008_Material022_0"
                    geometry={nodes.Cylinder008_Material022_0.geometry}
                    material={materials["Material.022"]}
                  />
                  <mesh
                    name="Cylinder008_Material023_0"
                    geometry={nodes.Cylinder008_Material023_0.geometry}
                    material={materials["Material.023"]}
                  />
                  <mesh
                    name="Cylinder008_Material020_0"
                    geometry={nodes.Cylinder008_Material020_0.geometry}
                    material={materials["Material.020"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model140(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder008"
                  position={[0, 3, -80]}
                  rotation={[0, -0.05, 0.8]}
                  scale={[25.25, 25.25, 4.15]}
                >
                  <mesh
                    name="Cylinder008_Material021_0"
                    geometry={nodes.Cylinder008_Material021_0.geometry}
                    material={materials["Material.021"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Cylinder008_Material022_0"
                    geometry={nodes.Cylinder008_Material022_0.geometry}
                    material={materials["Material.022"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Cylinder008_Material023_0"
                    geometry={nodes.Cylinder008_Material023_0.geometry}
                    material={materials["Material.023"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Cylinder008_Material020_0"
                    geometry={nodes.Cylinder008_Material020_0.geometry}
                    material={materials["Material.020"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model15(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane021"
                  position={[0, 0, -80]}
                  rotation={[0, -0.05, 0.8]}
                  scale={13.56}
                >
                  <mesh
                    name="Plane021_Material018_0"
                    geometry={nodes.Plane021_Material018_0.geometry}
                    material={materials["Material.018"]}
                  />
                  <mesh
                    name="Plane021_Material009_0"
                    geometry={nodes.Plane021_Material009_0.geometry}
                    material={materials["Material.009"]}
                  />
                  <mesh
                    name="Plane021_Material008_0"
                    geometry={nodes.Plane021_Material008_0.geometry}
                    material={materials["Material.008"]}
                  />
                  <mesh
                    name="Plane021_Material015_0"
                    geometry={nodes.Plane021_Material015_0.geometry}
                    material={materials["Material.015"]}
                  />
                  <mesh
                    name="Plane021_Material010_0"
                    geometry={nodes.Plane021_Material010_0.geometry}
                    material={materials["Material.010"]}
                  />
                  <mesh
                    name="Plane021_Material006_0"
                    geometry={nodes.Plane021_Material006_0.geometry}
                    material={materials["Material.006"]}
                  />
                  <mesh
                    name="Plane021_Material011_0"
                    geometry={nodes.Plane021_Material011_0.geometry}
                    material={materials["Material.011"]}
                  />
                  <mesh
                    name="Plane021_Material007_0"
                    geometry={nodes.Plane021_Material007_0.geometry}
                    material={materials["Material.007"]}
                  />
                  <mesh
                    name="Plane021_Material019_0"
                    geometry={nodes.Plane021_Material019_0.geometry}
                    material={materials["Material.019"]}
                  />
                  <mesh
                    name="Plane021_Material013_0"
                    geometry={nodes.Plane021_Material013_0.geometry}
                    material={materials["Material.013"]}
                  />
                  <mesh
                    name="Plane021_Material004_0"
                    geometry={nodes.Plane021_Material004_0.geometry}
                    material={materials["Material.004"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Model150(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="eeebe696fe144016b54f1646de5f3274fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane021"
                  position={[0, 0, -80]}
                  rotation={[0, -0.05, 0.8]}
                  scale={13.56}
                >
                  <mesh
                    name="Plane021_Material018_0"
                    geometry={nodes.Plane021_Material018_0.geometry}
                    material={materials["Material.018"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material009_0"
                    geometry={nodes.Plane021_Material009_0.geometry}
                    material={materials["Material.009"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material008_0"
                    geometry={nodes.Plane021_Material008_0.geometry}
                    material={materials["Material.008"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material015_0"
                    geometry={nodes.Plane021_Material015_0.geometry}
                    material={materials["Material.015"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material010_0"
                    geometry={nodes.Plane021_Material010_0.geometry}
                    material={materials["Material.010"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material006_0"
                    geometry={nodes.Plane021_Material006_0.geometry}
                    material={materials["Material.006"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material011_0"
                    geometry={nodes.Plane021_Material011_0.geometry}
                    material={materials["Material.011"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material007_0"
                    geometry={nodes.Plane021_Material007_0.geometry}
                    material={materials["Material.007"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material019_0"
                    geometry={nodes.Plane021_Material019_0.geometry}
                    material={materials["Material.019"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material013_0"
                    geometry={nodes.Plane021_Material013_0.geometry}
                    material={materials["Material.013"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                  <mesh
                    name="Plane021_Material004_0"
                    geometry={nodes.Plane021_Material004_0.geometry}
                    material={materials["Material.004"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model16(props) {
  const { nodes, materials } = useGLTF("/model/badge2/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 3, 1.5]} scale={0.4}>
          <group rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              geometry={nodes.BadgeSeason4_Badge_LegendsDiamond_PBR_0.geometry}
              material={materials.Badge_LegendsDiamond_PBR}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
function Model160(props) {
  const { nodes, materials } = useGLTF("/model/badge2/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 3, 1.5]} scale={0.4}>
          <group rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              geometry={nodes.BadgeSeason4_Badge_LegendsDiamond_PBR_0.geometry}
              material={materials.Badge_LegendsDiamond_PBR}
              material-transparent="true"
              material-opacity="0.2"
            />
          </group>
        </group>
      </group>
    </group>
  );
}
function Model17(props) {
  const { nodes, materials } = useGLTF("/model/badge3/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.075}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.DefaultMaterial}
        />
      </group>
    </group>
  );
}
function Model170(props) {
  const { nodes, materials } = useGLTF("/model/badge3/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.075}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.DefaultMaterial}
          material-transparent="true"
          material-opacity="0.2"
        />
      </group>
    </group>
  );
}

function Model18(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge4/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, -4]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.7}
        >
          <group
            name="29a0177e54924335988f7c35f7183ffbfbx"
            rotation={[Math.PI / 7, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Sphere"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sphere_Material001_0"
                    geometry={nodes.Sphere_Material001_0.geometry}
                    material={materials["Material.001"]}
                  />
                </group>
                <group
                  name="Sphere001"
                  rotation={[-Math.PI / 2, 0, -1.07]}
                  scale={100}
                >
                  <mesh
                    name="Sphere001_Material002_0"
                    geometry={nodes.Sphere001_Material002_0.geometry}
                    material={materials["Material.002"]}
                  />
                </group>
                <group
                  name="Sun"
                  position={[-822.36, 294.31, 360.56]}
                  rotation={[-1.73, 1.34, 2.48]}
                  scale={100}
                >
                  <group name="Object_11" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_12" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[-340.34, 76.73, 63.77]}
                  rotation={[0, 0.2, -0.21]}
                  scale={100}
                >
                  <group name="Object_9" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Model180(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/badge4/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, -4]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.7}
        >
          <group
            name="29a0177e54924335988f7c35f7183ffbfbx"
            rotation={[Math.PI / 7, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Sphere"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sphere_Material001_0"
                    geometry={nodes.Sphere_Material001_0.geometry}
                    material={materials["Material.001"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
                <group
                  name="Sphere001"
                  rotation={[-Math.PI / 2, 0, -1.07]}
                  scale={100}
                >
                  <mesh
                    name="Sphere001_Material002_0"
                    geometry={nodes.Sphere001_Material002_0.geometry}
                    material={materials["Material.002"]}
                    material-transparent="true"
                    material-opacity="0.2"
                  />
                </group>
                <group
                  name="Sun"
                  position={[-822.36, 294.31, 360.56]}
                  rotation={[-1.73, 1.34, 2.48]}
                  scale={100}
                >
                  <group name="Object_11" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_12" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[-340.34, 76.73, 63.77]}
                  rotation={[0, 0.2, -0.21]}
                  scale={100}
                >
                  <group name="Object_9" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
function Model19(props) {
  const { nodes, materials } = useGLTF("/model/badge5/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 1]} rotation={[-0.01, -0.01, 0]} scale={46}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Police_Badge}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Police_Badge}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Police_Badge}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Police_Badge}
          />
        </group>
      </group>
    </group>
  );
}
function Model190(props) {
  const { nodes, materials } = useGLTF("/model/badge5/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 1]} rotation={[-0.01, -0.01, 0]} scale={46}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Police_Badge}
            material-transparent="true"
            material-opacity="0.2"
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Police_Badge}
            material-transparent="true"
            material-opacity="0.2"
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Police_Badge}
            material-transparent="true"
            material-opacity="0.2"
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Police_Badge}
            material-transparent="true"
            material-opacity="0.2"
          />
        </group>
      </group>
    </group>
  );
}

function Model20(props) {
  const { nodes, materials } = useGLTF("/model/lock/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[0, -0.9, -2.4]}
          rotation={[Math.PI / 2, 0.02, 0]}
          scale={0.13}
        >
          <group position={[-0.3, 0, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes["Box001_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
            />
          </group>
          <group
            position={[-5.47, 34.38, 0.33]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes["Cylinder001_07_-_Default_0"].geometry}
              material={materials["07_-_Default"]}
            />
          </group>
          <group position={[0.15, 11.19, 0.85]}>
            <mesh
              geometry={nodes["Plane001_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
export {
  Model9,
  Model10,
  Model11,
  Model12,
  Model13,
  Model14,
  Model15,
  Model16,
  Model17,
  Model18,
  Model19,
  Model90,
  Model100,
  Model110,
  Model120,
  Model130,
  Model140,
  Model150,
  Model160,
  Model170,
  Model180,
  Model190,
  Model20,
};
