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

function Plus(props) {
  const { nodes, materials } = useGLTF("/model/plus/scene.gltf");
  return (
    <group
      {...props}
      dispose={null}
      position={[-0.2, 1, 0]}
      rotation={[-Math.PI / 1, 0, 0]}
      scale={0.015}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[11.48, 0, -2.38]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Box001__0.geometry}
              material={materials.RootNode}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

function Child1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/1.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_1"
            geometry={nodes.f_1.geometry}
            material={materials.characters_1_01}
            skeleton={nodes.f_1.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/2.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_2"
            geometry={nodes.f_2.geometry}
            material={materials["characters_1_01.001"]}
            skeleton={nodes.f_2.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child3(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/3.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="characters_f003"
            geometry={nodes.characters_f003.geometry}
            material={materials["characters_1_01.002"]}
            skeleton={nodes.characters_f003.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child4(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/4.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_4"
            geometry={nodes.f_4.geometry}
            material={materials["characters_1_01.003"]}
            skeleton={nodes.f_4.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child5(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/5.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_5"
            geometry={nodes.f_5.geometry}
            material={materials["characters_1_01.005"]}
            skeleton={nodes.f_5.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child6(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/6.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_6"
            geometry={nodes.f_6.geometry}
            material={materials["characters_1_01.006"]}
            skeleton={nodes.f_6.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child7(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/7.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_7"
            geometry={nodes.f_7.geometry}
            material={materials["characters_1_01.007"]}
            skeleton={nodes.f_7.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child8(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/8.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_8"
            geometry={nodes.f_8.geometry}
            material={materials["characters_1_01.008"]}
            skeleton={nodes.f_8.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child9(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/9.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_9"
            geometry={nodes.f_9.geometry}
            material={materials["characters_1_01.009"]}
            skeleton={nodes.f_9.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child10(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/10.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_10"
            geometry={nodes.f_10.geometry}
            material={materials["characters_1_01.010"]}
            skeleton={nodes.f_10.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child11(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/11.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_11"
            geometry={nodes.f_11.geometry}
            material={materials["characters_1_01.011"]}
            skeleton={nodes.f_11.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child12(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/12.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_12"
            geometry={nodes.f_12.geometry}
            material={materials["characters_1_01.012"]}
            skeleton={nodes.f_12.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child13(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/13.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_13"
            geometry={nodes.f_13.geometry}
            material={materials["characters_1_01.013"]}
            skeleton={nodes.f_13.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child14(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/14.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_14"
            geometry={nodes.f_14.geometry}
            material={materials["characters_1_01.014"]}
            skeleton={nodes.f_14.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child15(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/15.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_15"
            geometry={nodes.f_15.geometry}
            material={materials["characters_1_01.015"]}
            skeleton={nodes.f_15.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child16(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/16.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_16"
            geometry={nodes.f_16.geometry}
            material={materials["characters_1_01.016"]}
            skeleton={nodes.f_16.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child17(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/17.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_17"
            geometry={nodes.f_17.geometry}
            material={materials["characters_1_01.017"]}
            skeleton={nodes.f_17.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child18(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/18.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_18"
            geometry={nodes.f_18.geometry}
            material={materials["characters_1_01.018"]}
            skeleton={nodes.f_18.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child19(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/19.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_19"
            geometry={nodes.f_19.geometry}
            material={materials["characters_1_01.019"]}
            skeleton={nodes.f_19.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child20(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/20.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_20"
            geometry={nodes.f_20.geometry}
            material={materials["characters_1_01.020"]}
            skeleton={nodes.f_20.skeleton}
          />
          <skinnedMesh
            name="tennis"
            geometry={nodes.tennis.geometry}
            material={materials["characters_1_01.020"]}
            skeleton={nodes.tennis.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child21(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/21.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="f_21"
            geometry={nodes.f_21.geometry}
            material={materials["characters_1_01.021"]}
            skeleton={nodes.f_21.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="board"
          geometry={nodes.board.geometry}
          material={materials["characters_1_01.021"]}
        />
      </group>
    </group>
  );
}
function Child22(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/22.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <group name="f_22">
            <skinnedMesh
              name="Mesh015"
              geometry={nodes.Mesh015.geometry}
              material={materials["characters_1_01.022"]}
              skeleton={nodes.Mesh015.skeleton}
            />
            <skinnedMesh
              name="Mesh015_1"
              geometry={nodes.Mesh015_1.geometry}
              material={materials["characters_1_01.023"]}
              skeleton={nodes.Mesh015_1.skeleton}
            />
          </group>
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child23(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/23.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_1"
            geometry={nodes.m_1.geometry}
            material={materials["characters_1_01.024"]}
            skeleton={nodes.m_1.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child24(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/24.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_2"
            geometry={nodes.m_2.geometry}
            material={materials["characters_1_01.025"]}
            skeleton={nodes.m_2.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child25(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/25.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_3"
            geometry={nodes.m_3.geometry}
            material={materials["characters_1_01.026"]}
            skeleton={nodes.m_3.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child26(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/26.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_4"
            geometry={nodes.m_4.geometry}
            material={materials["characters_1_01.027"]}
            skeleton={nodes.m_4.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child27(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/27.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_5"
            geometry={nodes.m_5.geometry}
            material={materials["characters_1_01.028"]}
            skeleton={nodes.m_5.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child28(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/28.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_6"
            geometry={nodes.m_6.geometry}
            material={materials["characters_1_01.029"]}
            skeleton={nodes.m_6.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child29(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/29.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_8"
            geometry={nodes.m_8.geometry}
            material={materials["characters_1_01.030"]}
            skeleton={nodes.m_8.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child30(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/30.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_7"
            geometry={nodes.m_7.geometry}
            material={materials.characters_1_01}
            skeleton={nodes.m_7.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child31(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/31.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_9"
            geometry={nodes.m_9.geometry}
            material={materials["characters_1_01.001"]}
            skeleton={nodes.m_9.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child32(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/32.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_10"
            geometry={nodes.m_10.geometry}
            material={materials["characters_1_01.002"]}
            skeleton={nodes.m_10.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child33(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/33.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_11"
            geometry={nodes.m_11.geometry}
            material={materials["characters_1_01.003"]}
            skeleton={nodes.m_11.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child34(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/34.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_12"
            geometry={nodes.m_12.geometry}
            material={materials["characters_1_01.004"]}
            skeleton={nodes.m_12.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child35(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/35.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_14"
            geometry={nodes.m_14.geometry}
            material={materials["characters_1_01.005"]}
            skeleton={nodes.m_14.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child36(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/36.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_15"
            geometry={nodes.m_15.geometry}
            material={materials["characters_1_01.006"]}
            skeleton={nodes.m_15.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child37(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/37.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_16"
            geometry={nodes.m_16.geometry}
            material={materials["characters_1_01.007"]}
            skeleton={nodes.m_16.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child38(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/38.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_17"
            geometry={nodes.m_17.geometry}
            material={materials["characters_1_01.008"]}
            skeleton={nodes.m_17.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child39(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/39.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_18"
            geometry={nodes.m_18.geometry}
            material={materials["characters_1_01.009"]}
            skeleton={nodes.m_18.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child40(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/40.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_19"
            geometry={nodes.m_19.geometry}
            material={materials["characters_1_01.010"]}
            skeleton={nodes.m_19.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child41(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/41.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <group name="m_20">
            <skinnedMesh
              name="Mesh198"
              geometry={nodes.Mesh198.geometry}
              material={materials["characters_1_01.011"]}
              skeleton={nodes.Mesh198.skeleton}
            />
            <skinnedMesh
              name="Mesh198_1"
              geometry={nodes.Mesh198_1.geometry}
              material={materials["characters_1_01.012"]}
              skeleton={nodes.Mesh198_1.skeleton}
            />
          </group>
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child42(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/42.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_21"
            geometry={nodes.m_21.geometry}
            material={materials["characters_1_01.013"]}
            skeleton={nodes.m_21.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child43(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/43.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_22"
            geometry={nodes.m_22.geometry}
            material={materials["characters_1_01.014"]}
            skeleton={nodes.m_22.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child44(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/44.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_23"
            geometry={nodes.m_23.geometry}
            material={materials["characters_1_01.015"]}
            skeleton={nodes.m_23.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child45(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/45.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_24"
            geometry={nodes.m_24.geometry}
            material={materials.characters_1_01}
            skeleton={nodes.m_24.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child46(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/46.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_25"
            geometry={nodes.m_25.geometry}
            material={materials["characters_1_01.001"]}
            skeleton={nodes.m_25.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child47(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/47.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_26"
            geometry={nodes.m_26.geometry}
            material={materials["characters_1_01.002"]}
            skeleton={nodes.m_26.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child48(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/48.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_27"
            geometry={nodes.m_27.geometry}
            material={materials["characters_1_01.003"]}
            skeleton={nodes.m_27.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child49(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/49.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_28"
            geometry={nodes.m_28.geometry}
            material={materials["characters_1_01.004"]}
            skeleton={nodes.m_28.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child50(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/50.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_29"
            geometry={nodes.m_29.geometry}
            material={materials["characters_1_01.005"]}
            skeleton={nodes.m_29.skeleton}
          />
          <skinnedMesh
            name="skis"
            geometry={nodes.skis.geometry}
            material={materials["characters_1_01.005"]}
            skeleton={nodes.skis.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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
function Child51(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/51.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_30"
            geometry={nodes.m_30.geometry}
            material={materials["characters_1_01.006"]}
            skeleton={nodes.m_30.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="skate"
          geometry={nodes.skate.geometry}
          material={materials["characters_1_01.006"]}
        />
      </group>
    </group>
  );
}

function Child52(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/52.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_31"
            geometry={nodes.m_31.geometry}
            material={materials["characters_1_01.007"]}
            skeleton={nodes.m_31.skeleton}
          />
          <skinnedMesh
            name="tennis001"
            geometry={nodes.tennis001.geometry}
            material={materials["characters_1_01.007"]}
            skeleton={nodes.tennis001.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child53(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/53.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_32"
            geometry={nodes.m_32.geometry}
            material={materials["characters_1_01.008"]}
            skeleton={nodes.m_32.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

function Child54(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/54.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <group name="m_33">
            <skinnedMesh
              name="Mesh361"
              geometry={nodes.Mesh361.geometry}
              material={materials["characters_1_01.009"]}
              skeleton={nodes.Mesh361.skeleton}
            />
            <skinnedMesh
              name="Mesh361_1"
              geometry={nodes.Mesh361_1.geometry}
              material={materials["characters_1_01.010"]}
              skeleton={nodes.Mesh361_1.skeleton}
            />
          </group>
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="ball001"
          geometry={nodes.ball001.geometry}
          material={materials["characters_1_01.009"]}
          position={[0.25, 0.08, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
      </group>
    </group>
  );
}

function Child55(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/child/55.gltf");
  const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   Object.keys(actions).forEach((key) => {
  //  actions[key].play();
  //  });
  //  }, []);
  useEffect(() => {
    actions.Idle.play();
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 2]}
      scale={5}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes.root} />
          <skinnedMesh
            name="m_4"
            geometry={nodes.m_4.geometry}
            material={materials["characters_1_01.011"]}
            skeleton={nodes.m_4.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="hair01L"
            position={[0.15, 0.69, -0.11]}
            rotation={[-3.13, -0.53, -0.8]}
          >
            <group
              name="hair02L"
              position={[0, 0.14, 0]}
              rotation={[-0.14, -0.04, 1.27]}
            >
              <group
                name="hair03L"
                position={[0, 0.15, 0]}
                rotation={[0.04, 0.16, -1.17]}
              />
            </group>
          </group>
          <group
            name="spine"
            position={[0, 0.23, -0.01]}
            rotation={[0.23, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.04, 0]}
              rotation={[-0.13, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.04, 0]}
                rotation={[-0.13, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.04, 0]}
                  rotation={[0.01, 0, 0]}
                >
                  <group
                    name="shoulderL"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, -1.04]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.01, 0.06, -0.01]}
                      rotation={[1.51, 1.3, -2.4]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, 0.07, 0]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, 0.17, -0.01]}
                        >
                          <group
                            name="f_index01L"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, 1.01, -1.31]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, -0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01L"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, 1.14, -1.24]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, -0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, 0.84, -1.14]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, -0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, 1.13, -1.23]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, 0.01]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.01, 0.01, 0.01]}
                            rotation={[-2.58, 0.07, -2.78]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, 0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="shoulderR"
                    position={[0, 0.04, 0.02]}
                    rotation={[-1.55, 0, 1.04]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.01, 0.06, -0.01]}
                      rotation={[1.51, -1.3, 2.4]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.21, -0.07, 0]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.1, 0]}
                          rotation={[0.05, -0.17, 0.01]}
                        >
                          <group
                            name="f_index01R"
                            position={[0, 0.04, 0.01]}
                            rotation={[1.31, -1.01, 1.31]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.46, 0, 0.03]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[0, 0.04, 0]}
                            rotation={[1.17, -1.14, 1.24]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.51, 0, 0.04]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[0, 0.03, -0.02]}
                            rotation={[0.93, -0.84, 1.14]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.57, 0, 0.12]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[0, 0.03, -0.01]}
                            rotation={[1.09, -1.13, 1.23]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.01, 0]}
                              rotation={[0.52, 0, -0.01]}
                            />
                          </group>
                          <group
                            name="thumb01R"
                            position={[-0.01, 0.01, 0.01]}
                            rotation={[-2.58, -0.07, 2.78]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.02, 0]}
                              rotation={[0.21, 0, -0.06]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.05, 0]}
                    rotation={[-0.03, 0, 0]}
                  >
                    <group
                      name="pivot"
                      position={[0, 0.34, 0.02]}
                      rotation={[0.05, 0, 0]}
                    >
                      <group
                        name="cap01"
                        position={[0, -0.02, 0.13]}
                        rotation={[1.82, 0, 0]}
                      />
                    </group>
                    <group
                      name="spine006"
                      position={[0, 0.05, 0]}
                      rotation={[0.07, 0, 0]}
                    >
                      <group
                        name="cheekL"
                        position={[0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.07, 0.03, 0.13]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.07, 0.16, 0.15]}
                        rotation={[-0.01, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.07, 0.09, 0.08]}
                        rotation={[-1.58, 0, -Math.PI]}
                      />
                      <group
                        name="hair01"
                        position={[0, 0.24, -0.14]}
                        rotation={[-2.34, Math.PI / 2, 0]}
                      >
                        <group
                          name="hair02"
                          position={[0, 0.14, 0]}
                          rotation={[0, 0, -1.27]}
                        >
                          <group
                            name="hair03"
                            position={[0, 0.15, 0]}
                            rotation={[0, 0, 1.18]}
                          />
                        </group>
                      </group>
                      <group
                        name="hair01R"
                        position={[-0.15, 0.22, -0.11]}
                        rotation={[-3.14, 0.53, 0.8]}
                      >
                        <group
                          name="hair02R"
                          position={[0, 0.14, 0]}
                          rotation={[-0.14, 0.04, -1.27]}
                        >
                          <group
                            name="hair03R"
                            position={[0, 0.15, 0]}
                            rotation={[0.04, -0.16, 1.17]}
                          />
                        </group>
                      </group>
                      <group
                        name="pivot001"
                        position={[0, 0.01, 0.07]}
                        rotation={[1.76, 0, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.04, 0.01, 0.01]}
              rotation={[2.9, 0, -0.03]}
            >
              <group
                name="shinL"
                position={[0, 0.11, 0]}
                rotation={[0.11, 0.02, 0.02]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, -0.01, -0.07]}
                >
                  <group
                    name="heel02L"
                    position={[-0.01, 0, 0.02]}
                    rotation={[2.7, 0.03, -1.63]}
                  />
                  <group
                    name="toeL"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, 0.03, 3.09]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.04, 0.01, 0.01]}
              rotation={[2.9, 0, 0.03]}
            >
              <group
                name="shinR"
                position={[0, 0.11, 0]}
                rotation={[0.11, -0.02, -0.02]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.22, 0.01, 0.07]}
                >
                  <group
                    name="heel02R"
                    position={[0.01, 0, 0.02]}
                    rotation={[2.7, -0.03, 1.63]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.04, 0]}
                    rotation={[2.7, -0.03, -3.09]}
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

export {
  Child1,
  Child2,
  Child3,
  Child4,
  Child5,
  Child6,
  Child7,
  Child8,
  Child9,
  Child10,
  Child11,
  Child12,
  Child13,
  Child14,
  Child15,
  Child16,
  Child17,
  Child18,
  Child19,
  Child20,
  Child21,
  Child22,
  Child23,
  Child24,
  Child25,
  Child26,
  Child27,
  Child28,
  Child29,
  Child30,
  Child31,
  Child32,
  Child33,
  Child34,
  Child35,
  Child36,
  Child37,
  Child38,
  Child39,
  Child40,
  Child41,
  Child42,
  Child43,
  Child44,
  Child45,
  Child46,
  Child47,
  Child48,
  Child49,
  Child50,
  Child51,
  Child52,
  Child53,
  Child54,
  Child55,
  Plus,
};
