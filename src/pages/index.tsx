import Head from 'next/head';

import SearchBar from '@/components/SearchBar';
import Stats from '@/components/Stats';
import Table from '@/components/Table';

export default function Home() {
  return (
    <div className="container mx-auto mt-5 max-w-[100rem] px-2 sm:px-6 lg:px-14">
      <Head>
        <title>Lens DA Explorer</title>
      </Head>
      <div className="flex justify-center py-10 md:py-20">
        <SearchBar />
      </div>
      <div className="mb-10 space-y-4">
        <Stats />
        <Table />
      </div>
    </div>
  );
}
