import type { FC } from 'react';
import { useState } from 'react';
import { useInView } from 'react-cool-inview';

import { useDaSummaryQuery, useDaTransactionsQuery } from '@/generated';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';
import Card from '../ui/Card';
import SingleTransaction from './SingleTransaction';

const AllTransactions: FC = () => {
  const [hasMore, setHasMore] = useState(true);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState<any>(null);

  const { data, loading: loadingSummary } = useDaSummaryQuery();
  const summary = data?.dataAvailabilitySummary;

  const { loading, fetchMore } = useDaTransactionsQuery({
    variables: { request: { cursor: null, limit: 50 } },
    onCompleted: ({ dataAvailabilityTransactions }) => {
      setTransactions(dataAvailabilityTransactions?.items);
      setPageInfo(dataAvailabilityTransactions?.pageInfo);
    }
  });

  const { observe } = useInView({
    rootMargin: '200% 0px',
    onChange: async ({ inView }) => {
      if (!inView || !hasMore) {
        return;
      }

      await fetchMore({
        variables: { request: { limit: 50, cursor: pageInfo?.next } }
      }).then(({ data }) => {
        setTransactions((prev) => [...prev, ...(data?.dataAvailabilityTransactions?.items || [])]);
        setPageInfo(data?.dataAvailabilityTransactions?.pageInfo);
        setHasMore(data?.dataAvailabilityTransactions?.items?.length > 0);
      });
    }
  });

  return (
    <Card className="mt-10">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium md:text-[28px]">Latest transactions</h1>
          <p className="text-sm opacity-70">
            {loadingSummary ? 'Loading...' : `${summary?.totalTransactions} transactions found`}
          </p>
        </div>
      </div>
      <div className="mt-7 overflow-x-auto">
        {loading ? (
          <TransactionsShimmer />
        ) : (
          <table className="min-w-full table-auto border-separate border-spacing-y-3">
            <thead className="text-left">
              <tr className="font-gintoNord">
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Txn Id
                </th>
                <th className="w-20 px-4 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Action
                </th>
                <th className="px-3 text-center text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Age
                </th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Sender
                </th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Submitter
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((txn) => {
                return <SingleTransaction key={txn?.transactionId} txn={txn} />;
              })}
            </tbody>
          </table>
        )}
        {hasMore && transactions.length ? (
          <div className="space-y-1" ref={observe}>
            <div className="h-14 w-full animate-pulse overflow-hidden rounded-xl bg-white dark:bg-[#16161B]" />
            <div className="h-14 w-full animate-pulse overflow-hidden rounded-xl bg-white dark:bg-[#16161B]" />
            <div className="h-14 w-full animate-pulse overflow-hidden rounded-xl bg-white dark:bg-[#16161B]" />
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default AllTransactions;
