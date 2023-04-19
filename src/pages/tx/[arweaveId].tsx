import Head from 'next/head';

import Transaction from '@/components/Transaction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lens DA Explorer</title>
      </Head>
      <div className="mb-10">
        <Transaction />
      </div>
    </>
  );
}
