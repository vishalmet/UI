"use client";
import { useState, useEffect } from "react";
import Home from "./Home/Home";
// import Loader from "@/Components/Loader";
import "@/app/globals.css";
// import { Analytics } from "@vercel/analytics/react";

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  baseSepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [ baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function Page() {
  const queryClient = new QueryClient();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };

    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
      return () => window.removeEventListener("load", handleComplete);
    }
  }, []);

  return (
    <>
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
      <main className="">
        {/* <Analytics /> */}
        {/* {loading && <Loader />} */}
        <div className={loading ? "blur-sm" : ""}>
          <Home />
        </div>
      </main>
      </RainbowKitProvider>
      </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
