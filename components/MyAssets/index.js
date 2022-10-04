import React, { useState, useEffect } from 'react'
import { FaEthereum } from "react-icons/fa";
import { BiPolygon } from "react-icons/bi";
import { SiBinance } from "react-icons/si";
import MyAssetsGrid from './MyAssetsGrid';
import axios from 'axios';
import { useSession } from 'next-auth/react';


const MyAssets = () => {
    const [chain, setChain] = useState("eth");
    const { data: session, status } = useSession();
    const [assets, setAssets] = useState({});
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://deep-index.moralis.io/api/v2/' + session?.user?.address + '/nft',
            params: { chain: chain, format: 'decimal', },
            headers: { accept: 'application/json', 'X-API-Key': 'bVXKVLnIrArvIiOpvCpL2lnsrVA6vrN8CFMxGHbBPlLz1fnlrZ5sd4OwRmw50X0g' }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setAssets(response?.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [chain])

    return (
        <div className='flex flex-col container mx-auto py-20'>
            <div className="pb-6 flex w-full px-1">

                <div id="filters" className="bg-transparent rounded-2xl flex items-center">
                    <div onClick={() => setChain("eth")} className={chain == "eth" ? "text-brand bg-quaternary dark:bg-[#212121] rounded-l-2xl w-16 dark:text-gray-500  h-16 flex justify-center items-center " : "w-16 h-16 rounded-l-2xl focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-[#313131]   flex justify-center items-center cursor-pointer focus:bg-tertiary  hover:bg-tertiary "}>
                        <FaEthereum className={chain == "eth" ? "fill-blue-400" : ""} size={40} />
                    </div>
                    <div onClick={() => setChain("bsc")} className={chain == "bsc" ? "text-brand bg-quaternary dark:bg-[#212121]  w-16 h-16 flex justify-center items-center " : "w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-[#313131]  flex justify-center items-center cursor-pointer focus:bg-tertiary  hover:bg-tertiary "}>
                        <SiBinance className={chain == "bsc" ? "fill-yellow-400" : ""} size={40} />
                    </div>
                    <div onClick={() => setChain("avalanche")} className={chain == "avalanche" ? "text-brand bg-quaternary dark:bg-[#212121]  w-16 h-16 flex justify-center items-center " : "w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-[#313131]  flex justify-center items-center cursor-pointer focus:bg-tertiary  hover:bg-tertiary "}>
                        <svg className={chain == "avalanche" ? "fill-red-500 w-10" : "w-10 fill-gray-500"} xmlns="http://www.w3.org/2000/svg" width="1503" height="1504" viewBox="0 0 1503 1504" fill="none">
                            <rect x="287" y="258" width="928" height="844" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z" />
                        </svg>
                    </div>
                    <div onClick={() => setChain("fantom")} className={chain == "fantom" ? "text-brand bg-quaternary dark:bg-[#212121]  w-16 h-16 flex justify-center items-center " : "w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-[#313131]  flex justify-center items-center cursor-pointer focus:bg-tertiary  hover:bg-tertiary "}>
                        <svg className={chain == "fantom" ? "fill-blue-500 w-10" : "w-10 fill-gray-500"} xmlns="http://www.w3.org/2000/svg" width="55.619" height="70.505" viewBox="0 0 55.619 70.505">
                            <g id="Group_69" data-name="Group 69" transform="translate(-521 -926)">
                                <path id="explorer-logo" d="M24.753.675a7.082,7.082,0,0,1,6.032,0l17.479,9.2a2.947,2.947,0,0,1,1.7,2.186h.018V58.238a2.878,2.878,0,0,1-1.719,2.4L30.785,69.831a7.082,7.082,0,0,1-6.032,0l-17.479-9.2a2.847,2.847,0,0,1-1.68-2.4c0-.079,0-.146,0-.2V12.047a2.843,2.843,0,0,1,1.68-2.177ZM47.229,37.818,30.785,46.455a7.07,7.07,0,0,1-6.032,0L8.344,37.837V58.147l16.409,8.581A8.056,8.056,0,0,0,27.4,67.744l.375.023a6.924,6.924,0,0,0,2.9-.962L47.24,58.069V37.818ZM2.752,57.234a8.475,8.475,0,0,0,.617,3.753,4.789,4.789,0,0,0,1.78,1.83l.053.035c.206.137.432.282.705.451l.324.2.992.6L5.8,66.44l-1.11-.67L4.5,65.656c-.323-.2-.589-.367-.837-.529C1.01,63.341.019,61.4,0,57.357v-.123H2.75Zm23.637-31.8a2.9,2.9,0,0,0-.353.15L8.561,34.777l-.053.03H8.493l.028.018.041.021L26.04,44.035a2.585,2.585,0,0,0,.353.15Zm2.759,0V44.192a2.584,2.584,0,0,0,.353-.15l17.479-9.189.053-.03h.016l-.028-.014-.041-.023L29.5,25.6a2.584,2.584,0,0,0-.353-.15Zm18.081-10.1L31.541,23.577l15.688,8.242V15.326Zm-38.885.019V31.8l15.642-8.223ZM29.5,3.1a4.375,4.375,0,0,0-3.462,0L8.56,12.285l-.053.028-.016.009.028.016.041.019,17.479,9.189a4.347,4.347,0,0,0,3.462,0l17.479-9.189.053-.019.016-.009-.028-.016-.041-.021ZM49.81,4.114l1.11.668.2.1c.321.2.587.368.836.529,2.656,1.78,3.645,3.725,3.666,7.766V13.3H52.861a8.484,8.484,0,0,0-.617-3.754,4.78,4.78,0,0,0-1.782-1.828l-.053-.035c-.2-.139-.43-.282-.705-.451l-.323-.185-.992-.6L49.813,4.11Z" transform="translate(521 926)" />
                            </g>
                        </svg>
                    </div>
                    <div onClick={() => setChain("cronos")} className={chain == "cronos" ? "text-brand bg-quaternary dark:bg-[#212121]  w-16 h-16 flex justify-center items-center " : "w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-[#313131]  flex justify-center items-center cursor-pointer focus:bg-tertiary  hover:bg-tertiary "}>
                        <svg className={chain == "cronos" ? "fill-blue-900 w-10" : "w-10 fill-gray-500"} xmlns="http://www.w3.org/2000/svg" width="121" height="139" viewBox="0 0 121 139" fill="none">
                            <path d="M60.093 0L-1.52588e-05 34.7123V104.114L60.093 138.803L120.14 104.114V34.7123L60.093 0ZM102.349 93.8304L60.093 118.236L17.814 93.8304V44.9725L60.093 20.5668L102.349 44.9725V93.8304Z" />
                            <path d="M60.0932 138.803L120.14 104.114V34.7123L60.0932 0V20.5901L102.349 44.9958V93.8536L60.0932 118.236V138.803Z" fill="url(#paint0_linear_304_31)" />
                            <path d="M60.0465 0L0 34.6891V104.091L60.0465 138.803V118.213L17.7907 93.8071V44.9492L60.0465 20.5668V0Z" fill="url(#paint1_linear_304_31)" />
                            <path d="M88.1163 85.6176L60.0698 101.811L32 85.6176V53.2086L60.0698 36.9924L88.1163 53.2086L76.4419 59.9556L60.0698 50.4865L43.6977 59.9556V78.8473L60.0698 88.3165L76.4419 78.8473L88.1163 85.6176Z" />
                        </svg>
                    </div>
                    <div onClick={() => setChain("polygon")} className={chain == "polygon" ? "text-brand bg-quaternary dark:bg-[#212121] rounded-r-2xl w-16 h-16 flex justify-center items-center " : "w-16 h-16 focus:text-brand rounded-r-2xl  dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-500 dark:bg-[#313131]  flex justify-center items-center cursor-pointer focus:bg-tertiary  hover:bg-tertiary "}>
                        <BiPolygon className={chain == "polygon" ? "fill-purple-400" : ""} size={40} />
                    </div>

                </div>
            </div>
            <div className='px-6'>
                <div className='flex items-center gap-x-4'>
                    <h1 className="sm:text-4xl text-5xl font-bold mb-2 text-gray-400">My Assets</h1>
                    <span className='bg-gray-500 rounded-full px-5 py-3'>
                        <p className='text-white font-bold text-lg'>{assets?.total}</p>
                    </span>
                </div>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div>
                <MyAssetsGrid nfts={assets?.result} chain={chain} />
            </div>
        </div>
    )
}

export default MyAssets