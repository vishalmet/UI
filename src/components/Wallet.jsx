// "use client";
// import React, { useEffect } from "react";
// import "@rainbow-me/rainbowkit/styles.css";
// import { ethers } from "ethers";
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   ConnectButton as RainbowConnectButton,
// } from "@rainbow-me/rainbowkit";
// import { createClient, WagmiConfig, useAccount, useConnect, useNetwork } from "wagmi";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { chain, configureChains, defaultChains, publicProvider } from 'wagmi';

// const baseLlamaNodes = {
//   id: 84532,
//   name: "Base Sepolia Testnet",
//   network: "base",
//   nativeCurrency: {
//     name: "Ether",
//     symbol: "ETH",
//     decimals: 18,
//   },
//   rpcUrls: {
//     default: "https://sepolia.base.org",
//   },
//   blockExplorers: {
//     default: { name: "Basescan", url: "https://base-sepolia.blockscout.com" },
//   },
//   testnet: true,
// };

// const { chains, provider } = configureChains(
//   [baseLlamaNodes],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

// const switchToBaseChain = async () => {
//   const provider = window.ethereum;
//   if (provider) {
//     try {
//       await provider.request({
//         method: "wallet_addEthereumChain",
//         params: [
//           {
//             chainId: "0x14a34",
//             chainName: "Base Sepolia Testnet",
//             nativeCurrency: {
//               name: "Ether",
//               symbol: "ETH",
//               decimals: 18,
//             },
//             rpcUrls: ["https://sepolia.base.org"],
//             blockExplorerUrls: ["https://base-sepolia.blockscout.com"],
//           },
//         ],
//       });
//     } catch (switchError) {
//       console.error("Failed to switch to Base chain:", switchError);
//     }
//   } else {
//     console.error("Ethereum provider not found");
//   }
// };

// const connectWallet = async (connectors) => {
//   const connector = connectors[0];

//   if (connector) {
//     try {
//       await connector.connect();
//     } catch (error) {
//       console.error("Failed to connect wallet:", error);
//     }
//   }
// };

// export default function UniqueIdPage() {
//   const { isConnected } = useAccount();
//   const { chain } = useNetwork();
//   const { connectors } = useConnect();

//   useEffect(() => {
//     if (!isConnected) {
//       connectWallet(connectors);
//     }
//     if (isConnected && chain?.id !== baseLlamaNodes.id) {
//       switchToBaseChain();
//     }
//   }, [isConnected, chain, connectors]);

//   const queryClient = new QueryClient();

//   return (
//     <WagmiConfig client={wagmiClient}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider chains={chains}>
//           <div className="mt-6 flex justify-center">
//             <RainbowConnectButton className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
//               Connect Wallet
//             </RainbowConnectButton>
//           </div>
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiConfig>
//   );
// }
