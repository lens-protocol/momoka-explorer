import Link from 'next/link';
import React, { useEffect } from 'react';

import { useDaSummaryLazyQuery, useDataAvailabilitySubmittersLazyQuery } from '@/generated';
import useSubmitterSpent from '@/hooks/useSubmitterSpent';
import { useAppStore } from '@/store/app';
import formatNumber from '@/utils/formatNumber';
import { getRelativeTime } from '@/utils/formatTime';
import sanitizeDStorageUrl from '@/utils/sanitizeDStorageUrl';
import weiToEth from '@/utils/weiToEth';

import StatsShimmer from './shimmers/StatsShimmer';

const Stats = () => {
  const lastFinalizedTransaction = useAppStore((state) => state.lastFinalizedTransaction);
  const allTransactionsCount = useAppStore((state) => state.allTransactionsCount);
  const setAllTransactionsCount = useAppStore((state) => state.setAllTransactionsCount);
  const setTopSubmitter = useAppStore((state) => state.setTopSubmitter);
  const topSubmitter = useAppStore((state) => state.topSubmitter);
  const totalSpent = useAppStore((state) => state.totalSpent);
  const maticMarketPrice = useAppStore((state) => state.maticMarketPrice);

  const [fetchTopSubmitter, { loading: submittersDataLoading }] = useDataAvailabilitySubmittersLazyQuery({
    fetchPolicy: 'no-cache'
  });
  const [fetchAllCount, { loading }] = useDaSummaryLazyQuery({ fetchPolicy: 'no-cache' });
  const { fetchData: fetchSpentAmount, loading: fetchingSpentAmount } = useSubmitterSpent();

  const fetchCounts = async () => {
    const { data: countData } = await fetchAllCount();
    const { data: submittersData } = await fetchTopSubmitter();
    setAllTransactionsCount(countData?.dataAvailabilitySummary.totalTransactions ?? 0);
    if (submittersData?.dataAvailabilitySubmitters?.items[0]) {
      const submitters = submittersData?.dataAvailabilitySubmitters.items.map((el) => el.address);
      fetchSpentAmount(submitters);
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

  const getTotalSpentInUsd = () => {
    return totalSpent ? weiToEth(totalSpent.toString()) * maticMarketPrice : 0;
  };

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <div className="flex flex-col items-center space-y-0.5 rounded-[20px] bg-[#FFFFFF] p-6 dark:bg-[#2C2B35]">
        <span className="text-center font-medium uppercase tracking-wider opacity-50">Transactions</span>
        <span className="font-gintoNord text-2xl font-medium">{formatNumber(allTransactionsCount)}</span>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#FFFFFF] p-6 dark:bg-[#2C2B35]">
        <span className="text-center font-medium uppercase tracking-wider opacity-50">Total Spent</span>
        {fetchingSpentAmount ? (
          <span className="h-[26px] w-3/4 animate-pulse rounded-lg bg-[#FBEEED] font-medium dark:bg-[#565467]" />
        ) : (
          <div className="space-x-2 truncate font-gintoNord">
            {totalSpent && topSubmitter ? (
              <span className="truncate text-2xl font-medium">
                $ {getTotalSpentInUsd().toFixed(2)} {' | '}${' '}
                {(getTotalSpentInUsd() / topSubmitter.totalTransactions).toFixed(4)}{' '}
                <span className="text-xs">/txn</span>
              </span>
            ) : fetchingSpentAmount ? (
              <span className="h-[12px] truncate bg-[#FFFFFF] font-medium dark:bg-[#2C2B35]" />
            ) : null}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#FFFFFF] p-6 dark:bg-[#2C2B35]">
        <span className="text-center font-medium uppercase tracking-wider opacity-50">Last Finalized</span>
        <Link
          href={`/tx/${sanitizeDStorageUrl(lastFinalizedTransaction?.transactionId as string)}`}
          className="space-x-2 truncate font-gintoNord hover:text-[#C58C89] hover:dark:text-[#F5D4D2]"
        >
          <span className="truncate text-2xl font-medium">
            {lastFinalizedTransaction ? getRelativeTime(lastFinalizedTransaction?.createdAt) : '-'}
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#FFFFFF] p-6 dark:bg-[#2C2B35]">
        <span className="text-center font-medium uppercase tracking-wider opacity-50">Top Submitters</span>
        <Link
          href="/submitters"
          className="space-x-2 truncate font-gintoNord hover:text-[#C58C89] hover:dark:text-[#F5D4D2]"
        >
          {topSubmitter ? (
            <span className="truncate text-2xl font-medium">{topSubmitter.name as string}</span>
          ) : null}
        </Link>
      </div>
    </div>
  );
};

export default Stats;
