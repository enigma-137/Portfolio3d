import React from 'react'
import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from "maath/random/dist/maath-random.esm";


const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  // I too really don't understand, Just know it's the funtions that creates plenty randome sphrical stars 

  useFrame((state, delta) =>{
    ref.current.rotation.x -= delta /10;
    ref.current.rotation.y -= delta /15;
    // this is what makes the stars move
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* Also everything is from Threejs Fiber documentations */}
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}

        />

      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div
      className='w-full h-auto  absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>

        <Suspense fallback={null}>
          <Stars />
        </Suspense>


        <Preload all />

      </Canvas>
    </div>
  )

}



// template_q9j0h9n   
// service_1nyuwpo
// YCUm9fAeK35hme2YR

export default StarsCanvas;


