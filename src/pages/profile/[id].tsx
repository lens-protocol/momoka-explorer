import Head from 'next/head';

import ProfileTransactions from '@/components/txns/ProfileTransactions';

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile Transaction</title>
      </Head>
      <div className="mb-10">
        <ProfileTransactions />
      </div>
    </>
  );
}
