import React from 'react'
import dynamic from 'next/dynamic'
const Tilty = dynamic(import('react-tilty'), { ssr: false })
import Link from "next/link";

const Hero = () => {
    return (
        <div className="min-h-screen min-w-full bg-primary flex flex-col justify-center p-10">

            <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
                <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-2xl shadow-indigo-700 transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>

                <div className="relative bg-secondary shadow-lg sm:rounded-3xl">

                    <div className="flex items-center justify-start pt-6 pl-6">
                        <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    </div>

                    <div className="px-20 py-6">


                        <div className="flex items-center justify-between">
                            <Tilty max={35}>
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800 cursor-pointer">
                                        <img src='/nft.png' alt='logo' className='w-36 ' />
                                    </div>
                                </div>
                            </Tilty>
                            <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                                <Link href="https://www.leadoftoken.com/" >
                                    <button className="group hover:gap-x-14 transition-all justify-evenly items-center flex gap-x-20 relative">
                                        <svg className="fill-transparent h-12 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px]" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-12 21 500 458">
                                            <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z">
                                            </path>
                                        </svg>
                                        <p className="absolute  text-white text-xl font-medium">Token Voting</p>
                                        <svg className="fill-transparent h-12 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px] " xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="420 21 500 458">
                                            <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z">
                                            </path>
                                        </svg>
                                    </button>
                                </Link>

                            </div>
                        </div>
                        <Tilty max={5}>
                            <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left lg:mb-36">
                                <div className="text-6xl font-semibold text-white leading-none">Manage Your NFTs with Lead Of Token!</div>
                                <div className="mt-6 text-xl font-light text-gray-500 antialiased">a new experience to manage your NFTs!</div>
                                <Link href="/auth" >
                                    <button className="mt-6 translate-z-60 px-8 py-4 rounded-full font-medium tracking-wide bg-gradient-to-b from-indigo-400 to-indigo-600 text-white outline-none focus:outline-none hover:shadow-lg hover:from-indigo-700 transition duration-200 ease-in-out">
                                        Let&apos;s Start
                                    </button>
                                </Link>
                            </div>
                        </Tilty>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero
