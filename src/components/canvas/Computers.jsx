import React, { useEffect, useState } from 'react'
import { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';
const Computers = ({isMobile}) => {
  const computer = useGLTF('../desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor="black"
      />
      <pointLight intensity={0.5} groundColor="black"/>
      <primitive object={computer.scene}
      scale={isMobile ? 0.095 : 0.15}
      position={isMobile ?[0,-5,-2.2]:[0,-5.55,-1.35]}
      />
    </mesh>
  );
}

function ComputersCanvas() {
  const [isMobile,setIsMobile]=useState(false);

  useEffect(()=>{
const mediaQuery=window.matchMedia('(max-width:500px)')
setIsMobile(mediaQuery.matches)
const handleMediaQueryChange=(e)=>{
  setIsMobile(e.matches);

  mediaQuery.addEventListener('change',handleMediaQueryChange);
  return ()=>{
    mediaQuery.removeEventListener('change',handleMediaQueryChange);
  }
}

  },[])
  return (
    <Canvas frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
