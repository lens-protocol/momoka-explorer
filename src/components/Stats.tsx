import Link from 'next/link';
import React, { useEffect } from 'react';

import { useDaSummaryLazyQuery, useDataAvailabilitySubmittersQuery } from '@/generated';
import { useAppStore } from '@/store/app';
import formatNumber from '@/utils/formatNumber';
import { getRelativeTime } from '@/utils/formatTime';
import sanitizeDStorageUrl from '@/utils/sanitizeDStorageUrl';

import StatsShimmer from './shimmers/StatsShimmer';

const Stats = () => {
  const lastFinalizedTransaction = useAppStore((state) => state.lastFinalizedTransaction);
  const allTransactionsCount = useAppStore((state) => state.allTransactionsCount);
  const setAllTransactionsCount = useAppStore((state) => state.setAllTransactionsCount);

  const { data: submittersData, loading: submittersDataLoading } = useDataAvailabilitySubmittersQuery();
  const [fetchAllCount, { loading }] = useDaSummaryLazyQuery();

  const fetchCounts = async () => {
    const { data: countData } = await fetchAllCount();
    setAllTransactionsCount(countData?.dataAvailabilitySummary.totalTransactions ?? 0);
  };

  useEffect(() => {
    fetchCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || submittersDataLoading) {
    return <StatsShimmer />;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="flex flex-col items-center space-y-0.5 rounded-[20px] bg-[#F1F8F3] px-6 py-6 dark:bg-[#272E29]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Transactions
        </span>
        <span className="font-gintoNord text-2xl font-medium">{formatNumber(allTransactionsCount)}</span>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#F1F8F3] px-6 py-6 dark:bg-[#272E29]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Last Finalized
        </span>
        <Link
          href={`/tx/${sanitizeDStorageUrl(lastFinalizedTransaction?.transactionId as string)}`}
          className="space-x-2 truncate font-gintoNord hover:text-[#4C8C5E] hover:dark:text-[#FFEBB8]"
        >
          <span className="truncate text-2xl font-medium">
            {lastFinalizedTransaction ? getRelativeTime(lastFinalizedTransaction?.createdAt) : '-'}
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#F1F8F3] px-6 py-6 dark:bg-[#272E29]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Top Submitters
        </span>
        <Link
          href="/submitters"
          className="space-x-2 truncate font-gintoNord hover:text-[#4C8C5E] hover:dark:text-[#FFEBB8]"
        >
          {submittersData?.dataAvailabilitySubmitters ? (
            <span className="truncate text-2xl font-medium">
              {submittersData?.dataAvailabilitySubmitters?.items[0].name as string}
              {' | '}
              {formatNumber(submittersData?.dataAvailabilitySubmitters?.items[0].totalTransactions as number)}
            </span>
          ) : null}
        </Link>
      </div>
    </div>
  );
};

export default Stats;
