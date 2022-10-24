import React from "react";
import { useNavigate } from "react-router-dom";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./../style/style.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="WelcomPage">
      <section>
        <h1>내가 Green 지구</h1>
        <br />
      </section>

      <section>
        <p className="text-3xl font-bold underline">TailWind Style</p>
        <p>Tailwind Install</p>
        <br />
      </section>

      <section>
        <Canvas>
          <OrbitControls autoRotate={true} />
          <mesh>
            <ambientLight intensity={1} />
            <directionalLight position={[-1, 0, 1]} intensity={0.5} />
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={0xa3b18a} />
          </mesh>
        </Canvas>
        <p>Three.js Install</p>
        <br />
      </section>

      <section>
        <button onClick={() => navigate("/login")}>지구 구하러 가기</button>
      </section>
    </div>
  );
};

export default WelcomePage;
