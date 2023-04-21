import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { ApolloProvider } from '@apollo/client';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { configureChains, createClient, mainnet, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import client from '@/apollo';
import Navbar from '@/components/Navbar';

const ginto = localFont({
  src: [
    {
      path: '../../public/fonts/Ginto-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Ginto-Medium.woff',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/fonts/Ginto-Bold.woff',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-ginto',
  fallback: ['sans-serif'],
  preload: true,
  display: 'swap'
});

const gintoNord = localFont({
  src: [
    {
      path: '../../public/fonts/GintoNord-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/GintoNord-Medium.woff',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/fonts/GintoNord-Bold.woff',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-ginto-nord',
  fallback: ['sans-serif'],
  preload: true,
  display: 'swap'
});

const { chains, provider } = configureChains([mainnet], [publicProvider()]);
const { connectors } = getDefaultWallets({
  appName: 'Bonsai Explorer',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div />;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Navbar />
            <style jsx global>{`
              body {
                font-family: ${ginto.style.fontFamily};
              }
            `}</style>
            <main
              className={`${ginto.variable} ${gintoNord.variable} container mx-auto max-w-[100rem] px-2 pt-16 sm:px-6 lg:px-14`}
            >
              <Component {...pageProps} />
            </main>
          </RainbowKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </ApolloProvider>
  );
}
