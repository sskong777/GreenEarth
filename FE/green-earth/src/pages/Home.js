import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ChildMainPage from "./ChildMainPage"
import { Link } from "react-router-dom";
import "./../style/style.css";

const Home = ({ history }) => {
  return (
    <div className="Home">
      <h1>내가 Green 지구</h1>
      <br />
      <p className="text-3xl font-bold underline">TailWind Style</p>
      <p>Tailwind Install</p>
      <br />

      <Canvas>
        <OrbitControls autoRotate={true} />
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[-1, 0, 1]} intensity={0.5} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>

      </Canvas>

      <Link to="/child">[child 메인으로 가기 버튼]</Link>
      <Link to="/parent">[parent 메인으로 가기 버튼]</Link>
    </div>
  );
};

export default Home;
