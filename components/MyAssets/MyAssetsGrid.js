import React, { useState } from 'react'
import { FcViewDetails, FcMoneyTransfer, FcEditImage } from "react-icons/fc";

import MyAssetsCard from './MyAssetsCard'
import MyTokensTable from './MyTokensTable';

const MyAssetsGrid = ({ nfts, chain, tokens, totalNft, totalToken }) => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    return (
        <div className='py-10 flex flex-col gap-y-10 w-10/12 mx-auto'>
            <div className="bg-tertiary shadow rounded p-8">
                <div onClick={() => setBox1(!box1)} className="flex items-center justify-between cursor-pointer">
                    <div className='flex items-center gap-x-4'>
                        <FcMoneyTransfer size={24} />
                        <h2 className="text-lg font-semibold leading-none text-gray-300">Tokens</h2>
                        <span className=' flex  gap-x-2 items-center bg-quaternary px-4 py-2 rounded-full'>
                            <p className='text-white text-lg font-medium'>{totalToken}</p>
                        </span>
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
                    <div className='py-10'>                        
                    <MyTokensTable tokens={tokens} chain={chain}/>
                    </div>
                )}
            </div>
            <div className="bg-tertiary shadow rounded p-8">
                <div onClick={() => setBox2(!box2)} className="flex items-center justify-between cursor-pointer">
                    <div className='flex items-center gap-x-4'>
                        <FcEditImage size={24} />
                        <h2 className="text-lg font-semibold leading-none text-gray-300">NFTs</h2>
                        <span className=' flex  gap-x-2 items-center bg-quaternary px-4 py-2 rounded-full'>
                            <p className='text-white text-lg font-medium'>{totalNft}</p>
                        </span>
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

                {box2 && (
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 py-10'>                        
                    {nfts?.map((nft, i) => (
                        <MyAssetsCard key={i} nft={nft} chain={chain} />
                    ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyAssetsGrid