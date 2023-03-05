import Image from 'next/image'
import logo from '../../public/ws-logo-white.png';

export default function ChuckHead() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black">
      <div>
        <a href="https://www.wus.agency/" target="_blank">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </a>
      </div>
    </header>
  )
}