import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function ChuckBrain() {
  return <Sphere visible args={[1, 100, 200]} scale={2.5}>
    <MeshDistortMaterial 
      color="#00897B" 
      attach="material" 
      distort={0.5} 
      speed={2} 
      roughness={0} />
  </Sphere>;
}