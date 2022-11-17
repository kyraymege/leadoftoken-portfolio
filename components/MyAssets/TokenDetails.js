import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';

const TokenDetails = ({ token, blockchain }) => {
    const [price, setPrice] = useState()
    useEffect(() => {
        {if(token){
            const options = {
            method: 'GET',
            url: 'https://deep-index.moralis.io/api/v2/erc20/'+token?.address+'/price',
            params: {chain: blockchain},
            headers: {accept: 'application/json', 'X-API-Key': 'bVXKVLnIrArvIiOpvCpL2lnsrVA6vrN8CFMxGHbBPlLz1fnlrZ5sd4OwRmw50X0g'}
          };
          
          axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
              setPrice(response.data)
            })
            .catch(function (error) {
              console.error(error);
            });
        }}
    }, [token])
    
    return (
        <div className='flex flex-col w-full'>
            <Header />
            {token ?
                <div className='flex flex-col w-full'>
                    <div className='text-white container mx-auto py-10'>
                        <div className='p-10 w-full bg-tertiary rounded-2xl flex flex-col lg:flex-row gap-10 items-start shadow-2xl shadow-gray-700'>
                            {token?.image === null ? <img src={token?.image} alt="token" className='w-96 rounded-2xl' /> : <></>}
                            <div className='flex flex-col gap-y-10 bg-secondary p-12 rounded-2xl'>
                                <div className='flex gap-x-16 items-center'>
                                    <p className='text-2xl font-semibold text-gray-500 leading-7'>TOKEN NAME</p>
                                    <p className='text-xl font-semibold text-gray-200'>{token?.name}</p>
                                </div>
                                <div className='flex gap-x-16 items-center'>
                                    <p className='text-2xl font-semibold text-gray-500 leading-7'>TOKEN SYMBOL</p>
                                    <p className='text-xl font-semibold text-gray-200'>{token?.symbol}</p>
                                </div>
                                <div className='flex gap-x-16 items-center'>
                                    <p className='text-2xl font-semibold text-gray-500 leading-7'>TOKEN PRICE</p>
                                    <p className='text-xl font-semibold text-gray-200'>{price?.usdPrice} $</p>
                                </div>
                                

                            </div>
                            <div className='flex flex-col gap-y-10 bg-secondary p-12 rounded-2xl'>
                                <div className='flex gap-x-16 items-center'>
                                    <p className='text-2xl font-semibold text-gray-500 leading-7'>EXCHANGE NAME</p>
                                    <p className='text-xl font-semibold text-gray-200'>{price?.exchangeName}</p>
                                </div>
                                <div className='flex gap-x-16 items-center'>
                                    <p className='text-2xl font-semibold text-gray-500 leading-7'>EXCHANGE ADDRESS</p>
                                    <p className='text-xl font-semibold text-gray-200'>{price?.exchangeAddress}</p>
                                </div>
                                

                            </div>
                        </div>
                        
                    </div>
                </div >
                :
                <div className='text-white'>
                    Loading...
                </div>}
        </div>

    )
}

export default TokenDetails