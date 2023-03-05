import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

type UpdateFactFunction = (fact: string) => void;

/**
 * ChuckBrain function contains the 3D model provided by Three.js.
 * @param param0 update the quotes
 * @returns 
 */

export default function ChuckBrain({ updateFact }: { updateFact: UpdateFactFunction }) {

  /**
   * Fetch the data from the api and updates the parent element with updateFact
   */
  async function fetchFact() {
    const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
    const data = await response.json();
    updateFact(data.value);
  }

  return (
    <Canvas className="cursor-pointer" >
      <OrbitControls enableZoom={false} /> {/* Provide mouse interaction with canvas */}
      <ambientLight intensity={0.5} /> {/* Light inserted in the canvas */}
      <directionalLight position={[-2, 5, 2]} intensity={1} /> {/* Direction of the light inserted in the canvas */}
      <Suspense fallback={null}>
        <Sphere visible args={[1, 100, 200]} scale={2.5} onClick={fetchFact}> {/* Sphere is the form displayed by the canvas */}
          <MeshDistortMaterial 
            color="#e56520" 
            attach="material" 
            distort={0.5} 
            speed={2} 
            roughness={0} /> {/* Mesh is the Sphere customization */}
        </Sphere>
      </Suspense>
    </Canvas>
  )
}