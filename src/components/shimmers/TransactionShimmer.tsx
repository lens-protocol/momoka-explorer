import React, { useMemo } from 'react';

import { Meta } from '../Transaction';

const TransactionShimmer = () => {
  const txns = useMemo(() => Array(8).fill(1), []);

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-[#16161B] dark:bg-[#1C1B22] md:p-5">
      <div className="flex flex-wrap items-center justify-between space-y-3 px-4 sm:px-0">
        <div>
          <h3 className="font-medium opacity-80">Transaction Details</h3>
          <p className="text-sm opacity-60">All Transaction related information will be displayed here.</p>
        </div>
        <div className="h-8 w-40 animate-pulse rounded-xl dark:bg-[#23222A]" />
      </div>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-900">
        {txns.map((_, i) => (
          <Meta
            key={i}
            title={<div className="h-4 w-28 animate-pulse rounded-xl dark:bg-[#23222A]" />}
            value={
              <div
                className="h-4 animate-pulse rounded-xl dark:bg-[#23222A]"
                style={{ width: i % 2 === 0 ? '30%' : '50%' }}
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionShimmer;
