import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';

export default function ChuckBrain() {

  return <Canvas className="cursor-pointer">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial 
            color="#00897B" 
            attach="material" 
            distort={0.5} 
            speed={2} 
            roughness={0} />
          </Sphere>
          </Suspense>
        </Canvas>
}