import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import client from '@/apollo';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="container mx-auto max-w-[100rem] px-2 pt-16 sm:px-6 lg:px-14">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
