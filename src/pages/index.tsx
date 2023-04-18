import Head from 'next/head';

import LatestTransactions from '@/components/home/LatestTransactions';
import SearchBar from '@/components/home/SearchBar';
import Stats from '@/components/Stats';

const index = () => {
  return (
    <>
      <Head>
        <title>Lens DA Explorer</title>
      </Head>
      <div className="flex justify-center py-10 md:py-28">
        <SearchBar />
      </div>
      <div className="mb-10 space-y-4">
        <Stats />
        <LatestTransactions />
      </div>
    </>
  );
};

export default index;
