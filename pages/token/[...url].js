import Head from "next/head";
import { useEffect, useState } from "react";
import axios from 'axios';
import TokenDetails from "../../components/MyAssets/TokenDetails";

export default function Token({ params }) {
    const { url } = params;
    const [token, setToken] = useState()
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://deep-index.moralis.io/api/v2/erc20/metadata',
            params: {chain: url[0], addresses: url[1]},
            headers: {accept: 'application/json', 'X-API-Key': 'bVXKVLnIrArvIiOpvCpL2lnsrVA6vrN8CFMxGHbBPlLz1fnlrZ5sd4OwRmw50X0g'}
          };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data)
                setToken(response.data[0])
            })
            .catch(function (error) {
                console.error(error);
            });

    }, [])

    return (
        <div className="min-h-screen bg-primary flex">
            <Head>
                <title>Lead Of Token NFT | {token?.name}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <TokenDetails token={token} blockchain={url[0]} />
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
