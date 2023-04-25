import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import { useInView } from 'react-cool-inview';

import type { Profile } from '@/generated';
import { useDaTransactionsQuery, useProfileQuery } from '@/generated';

import TxnProfile from '../shared/TxnProfile';
import TransactionsShimmer from '../shimmers/TransactionsShimmer';
import Card from '../ui/Card';
import SingleTransaction from './SingleTransaction';

const ProfileTransactions: FC = () => {
  const { query } = useRouter();
  const [hasMore, setHasMore] = useState(true);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState<any>(null);

  const { data: profileData, loading: profileLoading } = useProfileQuery({
    variables: { request: { profileId: query.id } },
    skip: !query.id
  });

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
    <div>
      <TxnProfile profile={profileData?.profile as Profile} />
      <Card className="mt-6">
        <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
          <div>
            <h1 className="font-medium opacity-90">All Transactions</h1>
          </div>
        </div>
        <div className="overflow-x-auto">
          {profileLoading || loading ? (
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
      </Card>
    </div>
  );
};

export default ProfileTransactions;
