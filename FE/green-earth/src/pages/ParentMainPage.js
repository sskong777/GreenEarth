
import "../style/ParentMain.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
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
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomePage from "./WelcomePage";
// import useAnimations from 'react-useanimations';

import { Model3, Model, Model0, Model00, Model000, EarthLv8} from "../Model.js/Space"

import {Child1, Child2, Child3, Child4, Child5, Child6, Child7, Child8, Child9, Child10, 
  Child11, Child12, Child13, Child14, Child15, Child16, Child17, Child18, Child19, Child20, 
  Child21, Child22, Child23, Child24, Child25, Child26, Child27, Child28, Child29, Child30,
  Child31, Child32, Child33, Child34, Child35, Child36, Child37, Child38, Child39, Child40, 
  Child41, Child42, Child43, Child44, Child45, Child46, Child47, Child48, Child49, Child50,
  Child51, Child52, Child53, Child54, Child55} from "../Model.js/Child"

function ParentMainPage() {

  let relation = {
    parent : 1,
    child : [1,0,0,0,0,0,0,0,0,0]
  }
  
  return (
    // <BrowserRouter>
    //   <div className="ChildMainPage">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div>

    <div className='Earth2'>
      
  
        <div className= "peoplelist"  >
            <div className = "people">
              { relation['child'][0] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person1" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][0] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person1" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][1] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person2" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][1] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person2" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][2] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person3" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][2] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person3" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][3] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person4" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][3] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person4" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][4] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person5" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][4] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person5" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][5] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person6" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][5] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person6" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][6] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person7" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][6] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person7" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][7] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person8" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][7] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person8" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][8] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person9" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][8] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person9" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][9] ===1 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person10" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
              { relation['child'][9] ===0 && <Link to="/profile/1">
              <header>
                  <Card className="PersonCard" >
                      <CardHeader>
                          <Typography >
                          <div className = "canvasPerson">
                            <Canvas  id="person10" >
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={5} angle={0.1} penumbra={1} position={[1000, 100,100]} castShadow />
                                <Child1 />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}  />
                            </Suspense> 
                            </Canvas>
                        </div>
                          </Typography>
                      </CardHeader>   
                  </Card>
              </header>
              </Link>}
            </div>
            
  
            
        </div>
        
        <div className = "canvasEarth">
            <Canvas id="person" >
                <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={5} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />        
                <EarthLv8 />
                <OrbitControls enablePan={true} enableZoom={true} rotateSpeed = {0.2} enableRotate={true} />
                </Suspense> 
            </Canvas>
        </div>
      
    </div>
    </div>
  );
}

export default ParentMainPage;

