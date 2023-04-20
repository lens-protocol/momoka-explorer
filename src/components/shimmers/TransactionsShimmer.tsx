import React, { useMemo } from 'react';

const TransactionsShimmer = () => {
  const txns = useMemo(() => Array(10).fill(1), []);

  return (
    <div className="animate-pulse space-y-3 py-3">
      {txns.map((_, i) => (
        <div key={i} className="h-[80px] rounded-xl bg-white dark:bg-gray-900" />
      ))}
    </div>
  );
};

export default TransactionsShimmer;
