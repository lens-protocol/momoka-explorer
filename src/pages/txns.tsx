import Head from 'next/head';

import AllTransactions from '@/components/txns/AllTransactions';

const index = () => {
  return (
    <>
      <Head>
        <title>Lens DA Explorer</title>
      </Head>
      <div className="mb-10 space-y-4">
        <AllTransactions />
      </div>
    </>
  );
};

export default index;
