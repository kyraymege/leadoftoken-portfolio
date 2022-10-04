import React from 'react'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import axios from 'axios';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const Auth = () => {
    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { push } = useRouter();

    const handleAuthMetamask = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

        const userData = { address: account, chain: chain.id, network: 'evm' };

        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'content-type': 'application/json',
            },
        });

        const message = data.message;

        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/' });
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url);
    };

    const handleAuthWalletConnect = async () => {
        if (isConnected) {
            await disconnectAsync();
        }
        // added WalletConnectConnector
        const { account, chain } = await connectAsync({
            connector: new WalletConnectConnector({
                options: {
                    qrcode: true,
                },
            }),
        });

        const userData = { address: account, chain: chain.id, network: 'evm' };

        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'content-type': 'application/json',
            },
        });

        const message = data.message;

        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url);
    };

    return (
        <div className="min-h-screen lg:w-1/3 w-full bg-primary flex flex-col justify-center p-10">
            <img src='/nft.png' alt='logo' className='w-36 lg:mb-6' />
            <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">

                <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-2xl shadow-indigo-700 transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
                <div className="relative bg-secondary shadow-lg sm:rounded-3xl">


                    <div className="flex items-center justify-start pt-6 pl-6">
                        <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    </div>

                    <div className="p-20 flex flex-col justify-center items-center gap-y-10">
                        {/* MetaMask Login */}
                        <div onClick={() => handleAuthMetamask()}>
                            <button className="group hover:gap-x-16 transition-all justify-evenly items-center flex gap-x-20 relative">
                                <svg className="fill-transparent h-20 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px]" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-12 21 500 458">
                                    <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z"         >
                                    </path>
                                </svg>
                                <span className='absolute flex items-center gap-x-4'>
                                    <img src="/metaMaskLogo.png" alt='MetaMask Logo' className='w-12' />
                                    <p className="text-white text-xl font-medium">Metamask Login</p>
                                </span>
                                <svg className="fill-transparent h-20 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px] " xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="420 21 500 458">
                                    <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z"         >
                                    </path>
                                </svg>
                            </button>
                        </div>
                        {/* WalletConnect Login */}
                        <div onClick={()=> handleAuthWalletConnect()}>
                            <button className="group hover:gap-x-28 transition-all justify-evenly items-center flex gap-x-32 relative">
                                <svg className="fill-transparent h-20 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px]" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-12 21 500 458">
                                    <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z"         >
                                    </path>
                                </svg>
                                <span className='absolute flex items-center gap-x-4'>
                                    <img src="/walletConnect.svg" alt='Wallet Connet Logo' className='w-12' />
                                    <p className="text-white text-xl font-medium">Wallet Connect Login</p>
                                </span>
                                <svg className="fill-transparent h-20 stroke-indigo-700 group-hover:stroke-indigo-500 stroke-[24px] " xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="420 21 500 458">
                                    <path d="M100,33.494 800,33.494 900,250 800,466.506 100,466.506 0,250z"         >
                                    </path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth