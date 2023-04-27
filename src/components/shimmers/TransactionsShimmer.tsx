import React, { useMemo } from 'react';

const TransactionsShimmer = () => {
  const txns = useMemo(() => Array(10).fill(1), []);

  return (
    <div className="animate-pulse space-y-3 py-3">
      {txns.map((_, i) => (
        <div key={i} className="h-[82px] rounded-[20px] bg-[#F1F8F3] dark:bg-[#2C2B35]" />
      ))}
    </div>
  );
};

export default TransactionsShimmer;
