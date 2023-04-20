import Link from 'next/link';
import React from 'react';

import { useDaSummaryQuery, useDataAvailabilitySubmittersQuery } from '@/generated';
import useAppStore from '@/store/app';
import formatNumber from '@/utils/formatNumber';
import sanitizeDStorageUrl from '@/utils/sanitizeDStorageUrl';

import StatsShimmer from './shimmers/StatsShimmer';

const Stats = () => {
  const lastFinalizedTransaction = useAppStore((state) => state.lastFinalizedTransaction);

  const { data: submittersData } = useDataAvailabilitySubmittersQuery();
  const { data, loading } = useDaSummaryQuery();
  const stats = data?.dataAvailabilitySummary;

  if (loading) {
    return <StatsShimmer />;
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="flex flex-col space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">Transactions</span>
        <span className="text-2xl font-medium">{formatNumber(stats.totalTransactions)}</span>
      </div>
      <div className="flex flex-col space-y-1.5 truncate rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">Last Finalized</span>
        <Link
          href={`/tx/${sanitizeDStorageUrl(lastFinalizedTransaction)}`}
          className="truncate hover:text-indigo-400"
        >
          <span className="truncate text-2xl font-medium">{lastFinalizedTransaction}</span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5 truncate rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">All Submitters</span>
        <Link href="/submitters" className="truncate hover:text-indigo-400">
          <span className="truncate text-2xl font-medium">
            1. {submittersData?.dataAvailabilitySubmitters?.items[0].address}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Stats;
