import Link from 'next/link';
import React, { useEffect } from 'react';

import { useDaSummaryLazyQuery, useDataAvailabilitySubmittersLazyQuery } from '@/generated';
import { useAppStore } from '@/store/app';
import formatNumber from '@/utils/formatNumber';
import { getRelativeTime } from '@/utils/formatTime';
import sanitizeDStorageUrl from '@/utils/sanitizeDStorageUrl';

import StatsShimmer from './shimmers/StatsShimmer';

const Stats = () => {
  const lastFinalizedTransaction = useAppStore((state) => state.lastFinalizedTransaction);
  const allTransactionsCount = useAppStore((state) => state.allTransactionsCount);
  const setAllTransactionsCount = useAppStore((state) => state.setAllTransactionsCount);
  const setTopSubmitter = useAppStore((state) => state.setTopSubmitter);
  const topSubmitter = useAppStore((state) => state.topSubmitter);

  const [fetchTopSubmitter, { loading: submittersDataLoading }] = useDataAvailabilitySubmittersLazyQuery({
    fetchPolicy: 'no-cache'
  });
  const [fetchAllCount, { loading }] = useDaSummaryLazyQuery({ fetchPolicy: 'no-cache' });

  const fetchCounts = async () => {
    const { data: countData } = await fetchAllCount();
    const { data: submittersData } = await fetchTopSubmitter();
    setAllTransactionsCount(countData?.dataAvailabilitySummary.totalTransactions ?? 0);
    if (submittersData?.dataAvailabilitySubmitters?.items[0]) {
      setTopSubmitter(submittersData?.dataAvailabilitySubmitters?.items[0]);
    }
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
      <div className="flex flex-col items-center space-y-0.5 rounded-[20px] bg-[#FFFFFF] px-6 py-6 dark:bg-[#2C2B35]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Transactions
        </span>
        <span className="font-gintoNord text-2xl font-medium">{formatNumber(allTransactionsCount)}</span>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#FFFFFF] px-6 py-6 dark:bg-[#2C2B35]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Last Finalized
        </span>
        <Link
          href={`/tx/${sanitizeDStorageUrl(lastFinalizedTransaction?.transactionId as string)}`}
          className="space-x-2 truncate font-gintoNord hover:text-[#4C8C5E] hover:dark:text-[#F5D4D2]"
        >
          <span className="truncate text-2xl font-medium">
            {lastFinalizedTransaction ? getRelativeTime(lastFinalizedTransaction?.createdAt) : '-'}
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#FFFFFF] px-6 py-6 dark:bg-[#2C2B35]">
        <span className="text-center text-xs font-medium uppercase tracking-wider opacity-50">
          Top Submitters
        </span>
        <Link
          href="/submitters"
          className="space-x-2 truncate font-gintoNord hover:text-[#4C8C5E] hover:dark:text-[#F5D4D2]"
        >
          {topSubmitter ? (
            <span className="truncate text-2xl font-medium">
              {topSubmitter.name as string}
              {' | '}
              {formatNumber(topSubmitter.totalTransactions as number)}
            </span>
          ) : null}
        </Link>
      </div>
    </div>
  );
};

export default Stats;
