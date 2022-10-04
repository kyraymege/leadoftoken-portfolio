import React from 'react'
import { useRouter } from 'next/router';

const MyAssetsCard = ({ nft, chain }) => {
    const router = useRouter();
    const nftCard = JSON.parse(nft.metadata);
    return (
        <>
            {nftCard === null ?
                <div onClick={() => router.push("/asset/" + chain + "/" + nft?.token_address + "/" + nft?.token_id)} className='flex items-end relative cursor-pointer lg:w-96 shadow-2xl shadow-gray-700 rounded-2xl'>
                    <img className="rounded-2xl relative" src={"/nftNotFound.svg"} alt="games" />
                    <h1 className="text-2xl text-white font-semibold absolute py-3 bg-black px-6 bg-opacity-50 rounded-r-full break-words">{nft?.name}</h1>
                </div>
                :
                <div onClick={() => router.push("/asset/" + chain + "/" + nft?.token_address + "/" + nft?.token_id)} className='flex items-end relative cursor-pointer lg:w-96 shadow-2xl shadow-gray-700 rounded-2xl'>
                    <img className="rounded-2xl  relative" src={nftCard?.image} alt="games" />
                    <h1 className="text-2xl text-white font-semibold absolute py-3 bg-black px-6 bg-opacity-50 rounded-r-full break-words">{nftCard?.name}</h1>
                </div>
            }
        </>

    )
}

export default MyAssetsCard