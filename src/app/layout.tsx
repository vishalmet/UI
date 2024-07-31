import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thiru testing",
  description: "testing the winks please work",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://x.com/ultimatedigits",
    siteName: "Registry of Slinks",
    title: "thiru testing",
    description: "testing the winks please work",
    images: [
      {
        url: "https://cryptologos.cc/logos/starknet-token-strk-logo.png?v=032",
        width: 360,
        height: 560,
        alt: "Starknet Logo",
      },
    ],
  },
  twitter: {
    card: "player",
    site: "@ultimatedigits",
    title: "thiru testing",
    description: "testing the winks please work",
    players: [
      {
        playerUrl: "https://winktest.vercel.app/",
        width: 360,
        height: 560,

      streamUrl:""
      },
    ],
    images: [
      {
        url: "https://cryptologos.cc/logos/starknet-token-strk-logo.png?v=032",
        alt: "Starknet Logo",
      },
    ],
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/logo192.png",
    },
  ],
  manifest: "/manifest.json",
  themeColor: "#000000",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Registry of Slinks. Use Starknet applications directly from Twitter as embed cards in tweets." />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="https://x.com/ultimatedigits" />
        <meta name="twitter:title" content="thiru testing" />
        <meta name="twitter:description" content="testing the winks please work" />
        <meta name="twitter:player" content="https://winktest.vercel.app/" />
        <meta name="twitter:player:width" content="360" />
        <meta name="twitter:player:height" content="560" />
        <meta name="twitter:image" content="https://cryptologos.cc/logos/starknet-token-strk-logo.png?v=032" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>React App</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
