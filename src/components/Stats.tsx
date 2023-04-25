import Link from 'next/link';
import React from 'react';

import { useDaSummaryQuery, useDataAvailabilitySubmittersQuery } from '@/generated';
import { useAppStore } from '@/store/app';
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
      <div className="flex flex-col items-center space-y-0.5 rounded-[20px] bg-[#F1F8F3] px-6 py-6 dark:bg-[#272E29]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Transactions
        </span>
        <span className="font-gintoNord text-2xl font-medium">{formatNumber(stats.totalTransactions)}</span>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#F1F8F3] px-6 py-6 dark:bg-[#272E29]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Last Finalized
        </span>
        <Link
          href={`/tx/${sanitizeDStorageUrl(lastFinalizedTransaction?.transactionId as string)}`}
          className="space-x-2 truncate font-gintoNord hover:text-[#3D794E] dark:hover:text-[#D0DBFF]"
        >
          <span className="truncate text-2xl font-medium">
            {getRelativeTime(lastFinalizedTransaction?.createdAt)}
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#F1F8F3] px-6 py-6 dark:bg-[#272E29]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Top Submitters
        </span>
        <Link
          href="/submitters"
          className="space-x-2 truncate font-gintoNord hover:text-[#3D794E] dark:hover:text-[#D0DBFF]"
        >
          <span className="truncate text-2xl font-medium">
            {submittersData?.dataAvailabilitySubmitters?.items[0].name as string}
            {' | '}
            {formatNumber(submittersData?.dataAvailabilitySubmitters?.items[0].totalTransactions as number)}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Stats;
