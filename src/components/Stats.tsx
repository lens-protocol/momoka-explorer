import Link from 'next/link';
import React from 'react';

import { useDaSummaryQuery, useDataAvailabilitySubmittersQuery } from '@/generated';
import { useAppStore } from '@/store/app';
import formatAddress from '@/utils/formatAddress';
import formatNumber from '@/utils/formatNumber';
import { getRelativeTime } from '@/utils/formatTime';
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
      <div className="flex flex-col space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-[#16161B] dark:bg-[#1C1B22]">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">Transactions</span>
        <span className="font-gintoNord text-2xl font-medium">{formatNumber(stats.totalTransactions)}</span>
      </div>
      <div className="flex flex-col space-y-1.5 truncate rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-[#16161B] dark:bg-[#1C1B22]">
        <span className="text-xs font-medium uppercase tracking-wider opacity-50">Last Finalized</span>
        <Link
          href={`/tx/${sanitizeDStorageUrl(lastFinalizedTransaction?.transactionId as string)}`}
          className="space-x-2 truncate font-gintoNord hover:text-[#3D794E] dark:hover:text-[#D0DBFF]"
        >
          <span className="truncate text-2xl font-medium">
            {formatAddress(lastFinalizedTransaction?.transactionId as string)}
          </span>
          <span className="truncate text-xs opacity-70">
            {getRelativeTime(lastFinalizedTransaction?.createdAt)}
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5 truncate rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-[#16161B] dark:bg-[#1C1B22]">
        <span className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider opacity-50">Top Submitters</span>
          <Link
            href="/submitters"
            className="flex items-center space-x-2 text-sm opacity-90 hover:text-[#3D794E] hover:opacity-100 dark:hover:text-[#D0DBFF]"
          >
            View all
          </Link>
        </span>
        <div className="truncate font-gintoNord">
          <span className="truncate text-2xl font-medium">
            {submittersData?.dataAvailabilitySubmitters?.items[0].name as string}
            {' | '}
            {formatNumber(submittersData?.dataAvailabilitySubmitters?.items[0].totalTransactions as number)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
