import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";


const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
     <primitive 
    //  this controls objects size and rotation
     object={earth.scene}
     scale={2.5}
     position-y={0}
     rotation-y={0}
     
     />
  )
}

const EarthCanvas =()=>{
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov: 45,
      near:0.1,
      far:200,
      position: [-4, 3, 6]
    }}
    >

  <Suspense fallback={CanvasLoader} > {/*This will keep the page busy while the model is loading  */}
     

{/* ModelCanvas function to return Canvas, Suspense=> Orbitals(max and min polar angle) => Earth  */}
    <OrbitControls 
     autoRotate
     enableZoom={false}
     maxPolarAngle={Math.PI/2}
     minPolarAngle={Math.PI/2}
//  this controls moving the model with the mouse, the max and min pol angle shows it can't rotate north and south    
    />

    <Earth />
  </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;