import Head from 'next/head';

import Transaction from '@/components/Transaction';

export default function Home() {
  return (
    <>
      <Head>
        <title>DA Transaction</title>
      </Head>
      <div className="mb-10">
        <Transaction />
      </div>
    </>
  );
}
