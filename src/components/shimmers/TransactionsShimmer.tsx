import React, { useMemo } from 'react';

const TransactionsShimmer = () => {
  const txns = useMemo(() => Array(10).fill(1), []);

  return (
    <div className="animate-pulse space-y-3 py-3">
      {txns.map((txn) => (
        <div key={txn} className="h-[88px] rounded-xl bg-white" />
      ))}
    </div>
  );
};

export default TransactionsShimmer;
