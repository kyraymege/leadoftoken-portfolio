import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react';
import WalletComponent from "./wallet"
const Header = () => {
    const [show, setShow] = useState(false);
    const { data: session, status } = useSession()
    return (
        <nav className="w-full">
            <div className="py-5 md:py-0 mx-auto px-6 flex items-center justify-around">
                {/* Logo Section */}
                <div className='cursor-pointer '>
                    <Link href="/">
                        <img className='lg:w-36 w-24' src='/nft.png' alt='logo' />
                    </Link>
                </div>
                {/* Logo Section End*/}
                <div>
                    <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                        <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={8} x2={20} y2={8} />
                            <line x1={4} y1={16} x2={20} y2={16} />
                        </svg>
                    </button>

                    <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                        <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                            <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </button>
                        <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-primary md:bg-transparent z-20">

                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white  cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0">
                                <Link href="/createnft">
                                    <button className="relative px-5 py-3 overflow-hidden font-medium text-white rounded-xl shadow-inner group">
                                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-tertiary opacity-0 group-hover:opacity-100"></span>
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Create NFT</span>
                                    </button>
                                </Link>
                            </li>
                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <Link href="/marketplace">
                                    <button className="relative px-5 py-3 overflow-hidden font-medium text-white rounded-xl shadow-inner group">
                                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-tertiary opacity-0 group-hover:opacity-100"></span>
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">MarketPlace</span>
                                    </button>
                                </Link>
                            </li>
                            <li className="text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer text-base font-medium lg:text-xl pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                <Link href="/">
                                    <button className="relative px-5 py-3 overflow-hidden font-medium text-white rounded-xl shadow-inner group">
                                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-tertiary opacity-0 group-hover:opacity-100"></span>
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">My Assets</span>
                                    </button>
                                </Link>
                            </li>
                            <WalletComponent user={session?.user} signOut={signOut} />


                        </ul>
                    </div>
                </div>

                {/* {currentUser ?
                    <div className='hidden lg:block'>
                        <UserAvatar />
                    </div>
                    :
                    <button onClick={() => router.push("/auth")} className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-tertiary rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Sign In</button>
                } */}

            </div>
        </nav>
    )
}

export default Header