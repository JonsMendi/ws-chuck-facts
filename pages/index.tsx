import ChuckHead from './page-components/chuck-head';
import ChuckBody from './page-components/chuck-body';
import ChuckFeets from './page-components/chuck-feets';
import { PrismaClient } from '@prisma/client';
import { useState } from 'react';

const prisma = new PrismaClient();

export async function getStaticProps () {
  const jokes = await prisma.jokes.findMany();
  return {
    props: {
      jokes
    }
  }
}

export default function Home({ jokes }: { jokes: any[] }) {
  const [joke] = useState(jokes);
  return (
    <div className='h-screen flex flex-col'>
      <ChuckHead/>
      <ChuckBody facts={joke}/>
      <ChuckFeets/>
    </div>
  )
}
