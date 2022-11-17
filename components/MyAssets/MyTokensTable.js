import React from "react";
import { useRouter} from 'next/router';
function MyTokensTable({ tokens, chain }) {
  const router = useRouter();
  const getBalance = (balance,decimals) =>{
    let resultBalance = (balance/Math.pow(10,decimals))
    return (resultBalance).toLocaleString("En-us",{minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  
  return (
    <>
      <div className="w-full sm:px-6">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto rounded-2xl">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Token</th>
                <th className="font-normal text-left pl-12">Token Contract Address</th>
                <th className="font-normal text-left pl-20">Balance</th>
              </tr>
            </thead>
            {tokens?.map((token, i) => (
              <tbody onClick={() => router.push("/token/" + chain + "/" + token?.token_address)} key={i} className="w-full">
                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      {token?.logo !== null &&
                        <div className="w-10 h-10">
                          <img className="w-full h-full" src={token?.logo} />
                        </div>}
                      <div className="pl-4">
                        <p className="font-medium">{token?.name}</p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">{token?.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="text-sm font-medium leading-none text-blue-600 cursor-pointer">{(token?.token_address).slice(0, 7) + '...' + (token?.token_address).slice(-7)}</p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">{getBalance(token?.balance,token?.decimals)} ${token?.symbol}</p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default MyTokensTable;
