import dynamic from 'next/dynamic';
import Head from 'next/head';

const DTransactionNoSSR = dynamic(() => import('@/components/Transaction'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Head>
        <title>DA Transaction</title>
      </Head>
      <div className="mb-10">
        <DTransactionNoSSR />
      </div>
    </>
  );
}
