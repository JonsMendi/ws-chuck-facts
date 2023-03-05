import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { TbArrowBigLeftLinesFilled } from 'react-icons/tb';
import ChuckBrain from './components/chuck-brain';


export default function ChuckBody() {
  const [fact, setFact] = useState('');

  async function fetchFact() {
    const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
    const data = await response.json();
    setFact(data.value);
  }
  return (
    <main className='flex-col justify-center items-center h-screen bg-black'>
      <div className="flex items-center">
        <div className="relative ml-20 py-10">
          <Canvas className="cursor-pointer" onClick={fetchFact}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Suspense fallback={null} />
              <ChuckBrain />
          </Canvas>
        </div>
        <div className="text-center mx-auto pt-20 max-w-[800px] min-w-[800px]">
          <div className="flex items-center justify-center text-5xl">
            <span className="text-white"><TbArrowBigLeftLinesFilled /></span>
            <span className="text-white font-bold ml-5">Chuck Meta Norris</span>
          </div>
            <p className="text-gray-600 font-bold mt-2 text-lg">Dare you to click it?</p>
            <p className="text-4xl py-5 px-4 leading-14 text-teal-600 m-2 font-bold mt-2">
              {fact ? <span className="text-white">Fact: </span> : null}
              {fact}
            </p>
        </div>
      </div>
    </main>
  )
}

