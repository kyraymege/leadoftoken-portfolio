import React from 'react'
import MyAssetsCard from './MyAssetsCard'

const MyAssetsGrid = ({ nfts, chain }) => {
    return (
        <div className='grid grid-cols-1 px-6 lg:grid-cols-3 py-10 gap-10'>
            {
                nfts?.map((nft, i) => (
                    <MyAssetsCard key={i} nft={nft} chain={chain} />
                ))
            }
        </div>
    )
}

export default MyAssetsGrid