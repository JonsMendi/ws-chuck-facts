import { useState } from 'react';
import { TbArrowBigLeftLinesFilled } from 'react-icons/tb';
import ChuckBrain from '../components/chuck-brain';

interface Joke {
  id: string;
  value: string;
}

interface ChuckBodyProps {
  facts: Joke[];
}

export default function ChuckBody({ facts }: ChuckBodyProps) {
  const [fact, setFact] = useState(facts?.[0].value || '');

  /**
   * Updates the fact value
   * @param newFact the fact comming from DynamicCanvas
   */
  const updateFact = (newFact: string) => {
    setFact(newFact);
  }

  return (
    <main className='flex-col justify-center items-center h-screen bg-black'>
      <div className="flex items-center">
        <div className="relative ml-20 py-10">
          <ChuckBrain updateFact={updateFact}/>{/* 3D Canvas display */}
        </div>
        <div className="text-center mx-auto pt-20 max-w-[800px] min-w-[800px]">
          <div className="flex items-center justify-center text-5xl">
            <span className="text-white animate-pulse"><TbArrowBigLeftLinesFilled /></span>
            <span className="text-white font-bold ml-5">CHUCK META NORRIS</span>
          </div>
            <p className="text-lg text-gray-500 font-bold mt-2">Dare you to click it?</p>
            <p className="text-3xl text-orange-600 font-bold py-5 px-4 leading-14 m-2 mt-2">
              {fact ? <span className="text-white">Fact: </span> : null}
              {fact}
            </p>
        </div>
      </div>
    </main>
  )
}

