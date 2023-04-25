import React, { useMemo } from 'react';

import { Meta } from '../Transaction';
import Card from '../ui/Card';

const TransactionShimmer = () => {
  const txns = useMemo(() => Array(8).fill(1), []);

  return (
    <Card className="mt-6">
      <div className="flex flex-wrap items-center justify-between space-y-3 px-4 sm:px-0">
        <div>
          <h3 className="font-medium opacity-80">Transaction Details</h3>
          <p className="text-sm opacity-60">All Transaction related information will be displayed here.</p>
        </div>
        <div className="h-8 w-40 animate-pulse rounded-xl bg-[#F1F8F3] dark:bg-[#272E29]" />
      </div>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-900">
        {txns.map((_, i) => (
          <Meta
            key={i}
            title={<div className="h-4 w-28 animate-pulse rounded-xl bg-[#F1F8F3] dark:bg-[#272E29]" />}
            value={
              <div
                className="h-4 animate-pulse rounded-xl bg-[#F1F8F3] dark:bg-[#272E29]"
                style={{ width: i % 2 === 0 ? '30%' : '50%' }}
              />
            }
          />
        ))}
      </div>
    </Card>
  );
};

export default TransactionShimmer;
