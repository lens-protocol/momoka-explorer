import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import { useInView } from 'react-cool-inview';

import type { Profile } from '@/generated';
import { LimitType, useMomokaTransactionsQuery, useProfileQuery } from '@/generated';

import EmptyState from '../shared/EmptyState';
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
    variables: { request: { forProfileId: query.id } },
    skip: !query.id
  });

  const { loading, fetchMore } = useMomokaTransactionsQuery({
    variables: { request: { cursor: null, limit: LimitType.Fifty, for: query.id } },
    skip: !query.id,
    onCompleted: ({ momokaTransactions }) => {
      setTransactions(momokaTransactions?.items);
      setPageInfo(momokaTransactions?.pageInfo);
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
        setTransactions((prev) => [...prev, ...(data?.momokaTransactions?.items || [])]);
        setPageInfo(data?.momokaTransactions?.pageInfo);
        setHasMore(data?.momokaTransactions?.items?.length > 0);
      });
    }
  });

  return (
    <div>
      <TxnProfile profile={profileData?.profile as Profile} />
      <Card className="mt-10">
        <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
          <div>
            <h1 className="font-medium md:text-[28px]">All transactions</h1>
          </div>
        </div>
        <div className="mt-3 overflow-x-auto">
          {transactions?.length === 0 && !loading ? <EmptyState /> : null}
          {profileLoading || loading ? (
            <TransactionsShimmer />
          ) : transactions?.length ? (
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
                  <th className="px-3 text-center text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                    Client
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
          ) : null}
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
