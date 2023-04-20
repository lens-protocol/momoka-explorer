import Head from 'next/head';

import Submitters from '@/components/submitters';

const index = () => {
  return (
    <>
      <Head>
        <title>Lens DA Submitters</title>
      </Head>
      <div className="mb-10 space-y-4">
        <Submitters />
      </div>
    </>
  );
};

export default index;
