import { useEffect, useState } from 'react';

export default function ChuckFeets() {
  const [count, setCount] = useState('');

  /**
   * Updates the visitors in the app using countapi
   */
  function updateVisitorCount() {
    fetch('https://api.countapi.xyz/update/chuck/norris/?amount=1')
    .then((res) => res.json())
    .then((res) => { 
      setCount(res.value)
    })
  }

  useEffect(() => {
    updateVisitorCount();
  }, []);

  return (
    <footer className="flex items-center justify-center h-16 fixed bottom-0 w-full">
      <p className="text-gray-500 font-bold text-lg">Number of disciples: {count}</p>
    </footer>
  )
}