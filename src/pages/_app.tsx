import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { ApolloProvider } from '@apollo/client';
import { connectorsForWallets, darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';
import {
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  rainbowWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import client from '@/apollo';
import Navbar from '@/components/Navbar';
import MetaTags from '@/components/shared/Metatags';
import { WC_PROJECT_ID } from '@/constants';

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

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);
const connectors = connectorsForWallets([
  {
    groupName: 'Momoka',
    wallets: [
      injectedWallet({ chains, shimDisconnect: true }),
      rainbowWallet({ chains, projectId: WC_PROJECT_ID }),
      ledgerWallet({ chains, projectId: WC_PROJECT_ID }),
      coinbaseWallet({ appName: 'Momoka Explorer', chains }),
      walletConnectWallet({ chains, projectId: WC_PROJECT_ID })
    ]
  }
]);

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) {
    return (
      <div>
        <MetaTags />
      </div>
    );
  }

  const themeOptions: ThemeOptions = {
    fontStack: 'system',
    accentColor: '#2C2B35'
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <WagmiConfig config={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            theme={theme === 'dark' ? darkTheme(themeOptions) : lightTheme(themeOptions)}
          >
            <Navbar />
            <style>{`
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
