import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import { useInView } from 'react-cool-inview';

import { useDaTransactionsQuery } from '@/generated';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';
import SingleTransaction from './SingleTransaction';

const ProfileTransactions: FC = () => {
  const { query } = useRouter();
  const [hasMore, setHasMore] = useState(true);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState<any>(null);

  const { loading, fetchMore } = useDaTransactionsQuery({
    variables: { request: { cursor: null, limit: 50, profileId: query.id } },
    skip: !query.id,
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
        variables: { request: { limit: 50, cursor: pageInfo?.next, profileId: query.id } }
      }).then(({ data }) => {
        setTransactions((prev) => [...prev, ...(data?.dataAvailabilityTransactions?.items || [])]);
        setPageInfo(data?.dataAvailabilityTransactions?.pageInfo);
        setHasMore(data?.dataAvailabilityTransactions?.items?.length > 0);
      });
    }
  });

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-[#16161B] dark:bg-[#1C1B22] md:p-5">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium opacity-90">All Transactions</h1>
        </div>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <TransactionsShimmer />
        ) : (
          <table className="min-w-full table-auto border-separate border-spacing-y-1">
            <thead className="text-left">
              <tr>
                <th className="px-3 text-sm font-normal">Txn Id</th>
                <th className="w-20 px-4 text-sm font-normal">Action</th>
                <th className="px-3 text-sm font-normal">Age</th>
                <th className="px-3 text-sm font-normal">From</th>
                <th className="px-3 text-sm font-normal">Via</th>
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
    </div>
  );
};

export default ProfileTransactions;
