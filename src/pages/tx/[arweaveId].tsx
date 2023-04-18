import Head from 'next/head';

import Transaction from '@/components/Transaction';

export default function Home() {
  return (
    <div className="container mx-auto max-w-[100rem] px-2 sm:px-6 lg:px-14">
      <Head>
        <title>Lens DA Explorer</title>
      </Head>
      <div className="mb-10">
        <Transaction />
      </div>
    </div>
  );
}
