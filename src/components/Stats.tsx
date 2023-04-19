import Link from 'next/link';
import React from 'react';

import { useDaSummaryQuery } from '@/generated';
import formatNumber from '@/utils/formatNumber';
import sanitizeDStorageUrl from '@/utils/sanitizeDStorageUrl';
import truncate from '@/utils/truncate';

import StatsShimmer from './shimmers/StatsShimmer';

const Stats = () => {
  const { data, loading } = useDaSummaryQuery();
  const stats = data?.dataAvailabilitySummary;

  if (loading) {
    return <StatsShimmer />;
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="md:grid-col-2 grid gap-4 lg:grid-cols-4">
      <div className="flex flex-col space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">Transactions</span>
        <span className="text-2xl font-medium">{formatNumber(stats.totalTransactions)}</span>
      </div>
      <div className="flex flex-col space-y-1.5 truncate rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">Last Finalized</span>
        <Link href={sanitizeDStorageUrl(stats.lastFinalisedTransaction)} target="_blank">
          <span className="truncate text-2xl font-medium">
            {truncate(stats.lastFinalisedTransaction, 25)}
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">
          Transactions per second
        </span>
        <span className="text-2xl font-medium">WIP</span>
      </div>
      <div className="flex flex-col space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">All Submitters</span>
        <span className="truncate text-2xl font-medium">WIP</span>
      </div>
    </div>
  );
};

export default Stats;
