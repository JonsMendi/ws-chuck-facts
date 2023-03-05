import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

type UpdateFactFunction = (fact: string) => void;

export default function ChuckBrain({ updateFact }: { updateFact: UpdateFactFunction }) {

  /**
   * Fetch the data from the api
   */
  async function fetchFact() {
    const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
    const data = await response.json();
    updateFact(data.value);
  }

  return (
    <Canvas className="cursor-pointer" >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Sphere visible args={[1, 100, 200]} scale={2.5} onClick={fetchFact}>
          <MeshDistortMaterial 
            color="#e56520" 
            attach="material" 
            distort={0.5} 
            speed={2} 
            roughness={0} />
        </Sphere>
      </Suspense>
    </Canvas>
  )
}