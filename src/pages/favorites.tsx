import Head from 'next/head';

import AllFavorites from '@/components/txns/AllFavorites';

const index = () => {
  return (
    <>
      <Head>
        <title>All Favorites</title>
      </Head>
      <div className="mb-10 space-y-4">
        <AllFavorites />
      </div>
    </>
  );
};

export default index;
