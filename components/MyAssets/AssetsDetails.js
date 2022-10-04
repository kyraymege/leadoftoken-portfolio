import React, { useEffect, useState } from 'react'
import Header from "../Header/index"
import { FcViewDetails } from "react-icons/fc";
import { MdDescription } from "react-icons/md";
import Link from 'next/link';
const AssetsDetails = ({ nft, blockchain }) => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [nftMetaData, setNftMetaData] = useState()
    useEffect(() => {
        if (nft) {
            const data = JSON.parse(nft?.metadata);
            setNftMetaData(data);
        }
    }, [nft])


    return (
        <div className='flex flex-col w-full'>
            <Header />
            <div className='text-white container mx-auto py-10'>
                <div className='p-6 w-full bg-tertiary rounded-2xl flex flex-col lg:flex-row gap-10 items-start shadow-2xl shadow-gray-700'>
                    <img src={nftMetaData?.image} alt="nft" className='w-96 rounded-2xl' />
                    <div className='flex flex-col gap-y-10'>
                        <h1 className='text-5xl font-semibold '>{nftMetaData?.name}</h1>
                        <div className='flex gap-x-3' >
                            <MdDescription size={36} />
                            <h1 className='text-3xl font-bold text-gray-200'>Description</h1>
                        </div>
                        <div className='flex '>
                            <span className='flex gap-x-32 text-gray-300 text-lg font-normal'>
                                <p>{nftMetaData?.description}</p>
                            </span>
                        </div>

                    </div>
                </div>
                <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full py-10">
                    <div className="bg-tertiary shadow rounded p-8">
                        <div onClick={() => setBox1(!box1)} className="flex items-center justify-between cursor-pointer">
                            <div className='flex items-center gap-x-4'>
                                <FcViewDetails size={24} />
                                <h2 className="text-lg font-semibold leading-none text-gray-300">Details</h2>
                            </div>
                            <div className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                {box1 ? (
                                    <svg aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="10" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>

                        {box1 && (
                            <div className='flex flex-col mt-10 gap-y-6'>
                                <span className='flex justify-between px-6'>
                                    <p className='text-lg font-medium text-gray-200'>
                                        Contract Address
                                    </p>
                                    <a href={"https://blockscan.com/address/" + nft?.token_address} rel="noreferrer" target="_blank" className='text-indigo-500'>
                                        {(nft?.token_address).slice(0, 7) + '...' + (nft?.token_address).slice(-7)}
                                    </a>
                                </span>
                                <span className='flex justify-between px-6'>
                                    <p className='text-lg font-medium text-gray-200 '>
                                        Token ID
                                    </p>
                                    <p className='text-indigo-500 cursor-pointer'>
                                        {(nft?.token_id).slice(0, 7) + '...' + (nft?.token_id).slice(-7)}
                                    </p>
                                </span>
                                <span className='flex justify-between px-6'>
                                    <p className='text-lg font-medium text-gray-200 '>
                                        Token Standart
                                    </p>
                                    <p className='text-gray-400'>
                                        {nft?.contract_type}
                                    </p>
                                </span>
                                <span className='flex justify-between px-6'>
                                    <p className='text-lg font-medium text-gray-200 '>
                                        Blockchain
                                    </p>
                                    <p className='text-gray-400'>
                                        {blockchain}
                                    </p>
                                </span>
                            </div>
                        )}
                    </div>
                    {/* <div className="bg-tertiary shadow rounded p-8 mt-1">
                        <div onClick={() => { setBox2(!box2); }} className="flex items-center justify-between cursor-pointer">
                            <div>
                                <h2 className="text-base font-semibold leading-none text-gray-300">Is your service safe to use?</h2>
                            </div>
                            <div
                                data-menu
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                            >
                                {box2 ? (
                                    <svg aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="10" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        {box2 && (
                            <ul>
                                <li>
                                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="bg-tertiary shadow rounded p-8 mt-1">
                        <div onClick={() => { setBox3(!box3); }} className="flex items-center justify-between cursor-pointer">
                            <div>
                                <h2 className="text-base font-semibold leading-none text-gray-300">Is your service safe to use?</h2>
                            </div>
                            <div
                                data-menu
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                            >
                                {box3 ? (
                                    <svg aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="10" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        {box3 && (
                            <ul>
                                <li>
                                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="bg-tertiary shadow rounded p-8 mt-1">
                        <div onClick={() => setBox4(!box4)} className="flex items-center justify-between cursor-pointer">
                            <div>
                                <h2 className="text-base font-semibold leading-none text-gray-300">How to recover password?</h2>
                            </div>
                            <div data-menu className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                {box4 ? (
                                    <svg aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="10" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        {box4 && (
                            <ul>
                                <li>
                                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                                </li>
                            </ul>
                        )}
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default AssetsDetails