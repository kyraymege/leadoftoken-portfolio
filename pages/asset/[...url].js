import Head from "next/head";
import { useEffect, useState } from "react";
import AssetsDetails from "../../components/MyAssets/AssetsDetails";
import axios from 'axios';

export default function Asset({ params }) {
    const { url } = params;
    const [nft, setNft] = useState()
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://deep-index.moralis.io/api/v2/nft/' + url[1] + '/' + url[2],
            params: { chain: url[0], format: 'decimal' },
            headers: { accept: 'application/json', 'X-API-Key': 'test' }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data)
                setNft(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });

    }, [])

    return (
        <div className="min-h-screen bg-primary flex">
            <Head>
                <title>Lead Of Token NFT | {nft?.name}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AssetsDetails nft={nft} blockchain={url[0]} />
        </div>
    )
}

export async function getStaticProps(context) {
    return { props: { params: context.params } };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking' // can also be true or 'blocking'
    }
}
