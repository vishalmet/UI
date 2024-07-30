// import React, { useEffect } from 'react';
// import { WagmiConfig, createClient, configureChains, chain, useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
// import { RainbowKitProvider, ConnectButton, getDefaultWallets } from '@rainbow-me/rainbowkit';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import '@rainbow-me/rainbowkit/styles.css';
// import '../styles/globals.css';

// const { provider, chains } = configureChains([chain.baseSepolia], [wagmi.providers.public()]);

// const { connectors } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   chains
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider
// });

// const queryClient = new QueryClient();

// const MyApp = ({ Component, pageProps }) => {
//   const { isConnected } = useAccount();
//   const { chain: activeChain } = useNetwork();
//   const { switchNetwork } = useSwitchNetwork();

//   useEffect(() => {
//     if (isConnected && activeChain?.id !== chain.baseSepolia.id) {
//       switchNetwork?.(chain.baseSepolia.id);
//     }
//   }, [isConnected, activeChain, switchNetwork]);

//   return (
//     <WagmiConfig client={wagmiClient}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider chains={chains}>
//           <Component {...pageProps} />
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiConfig>
//   );
// };

// export default MyApp;
