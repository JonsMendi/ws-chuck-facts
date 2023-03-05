import ChuckHead from './chuck-head';
import ChuckBody from './chuck-body';
import ChuckFeets from './chuck-feets';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <ChuckHead/>
      <ChuckBody/>
      <ChuckFeets/>
    </div>
  )
}
