import { useRouter } from 'next/router';
import type { FC } from 'react';

const TxnProfile: FC = () => {
  const { query } = useRouter();

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-[#16161B] dark:bg-[#1C1B22] md:p-5">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium opacity-90">All Transactions</h1>
        </div>
      </div>
      <div className="overflow-x-auto">gm</div>
    </div>
  );
};

export default TxnProfile;
