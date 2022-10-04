import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import Head from "next/head";
import { useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen bg-primary">
      <Head>
        <title>Lead Of Token | NFT </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!session ? <Hero /> : <Dashboard />}      
      {/* <button className="group hover:gap-x-12 transition-all justify-evenly items-center flex gap-x-20 relative">
        <svg className="fill-transparent h-12 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px]" xmlns="http://www.w3.org/2000/svg" version="1.1" class="" viewBox="-12 21 500 458">
          <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z"         >
          </path>
        </svg>
        <p className="absolute  text-white text-2xl font-medium">My assets</p>
        <svg className="fill-transparent h-12 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px] " xmlns="http://www.w3.org/2000/svg" version="1.1" class="" viewBox="420 21 500 458">
          <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z"         >
          </path>
        </svg>
      </button> */}
    </div>
  )
}
