import AuthComponent from "../components/Auth";
import Head from "next/head";

export default function Auth() {
    return (
        <div className="min-h-screen bg-primary flex items-center justify-center">
            <Head>
                <title>Lead Of Token NFT | Auth </title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AuthComponent />
        </div>
    )
}
