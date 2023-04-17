import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import client from '@/apollo';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
