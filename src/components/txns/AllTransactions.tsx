import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import { useInView } from 'react-cool-inview';

import type { Profile } from '@/generated';
import { useDaSummaryQuery, useDaTransactionsQuery } from '@/generated';
import { getRelativeTime } from '@/utils/formatTime';
import getDAActionType from '@/utils/getDAActionType';
import getPostAppLink from '@/utils/getPostAppLink';
import getProfilePicture from '@/utils/getProfilePicture';
import getSubmitterName from '@/utils/getSubmitterName';
import truncate from '@/utils/truncate';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';

type Props = {};

const AllTransactions: FC<Props> = () => {
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
    rootMargin: '60% 0px',
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
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:p-5">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium opacity-90">All Transactions</h1>
          <p className="text-sm opacity-60">
            {loadingSummary ? 'Loading...' : `${summary?.totalTransactions} transactions found`}
          </p>
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
              {transactions?.map((txn, index, items) => {
                const isLast = index === items.length - 1;

                return (
                  <tr
                    key={txn.transactionId}
                    className="overflow-hidden bg-white dark:bg-gray-900"
                    ref={isLast ? observe : undefined}
                  >
                    <td className="rounded-l-xl px-3 py-2 text-sm text-gray-900">
                      <div className="flex items-center space-x-2">
                        <span className="rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
                          <ArrowsRightLeftIcon className="h-4 w-4 text-green-700" />
                        </span>
                        <div className="flex flex-col truncate">
                          <Link
                            href={`/tx/${txn.transactionId}`}
                            className="truncate text-indigo-400 text-opacity-80 hover:text-opacity-100"
                          >
                            {truncate(txn.transactionId, 30)}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="w-20 whitespace-nowrap px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-lg border bg-gray-50 px-3 py-1.5 text-xs dark:border-gray-950 dark:bg-gray-800">
                        {getDAActionType(txn.__typename)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                      {getRelativeTime(txn.createdAt)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-gray-500">
                      <span className="inline-flex items-center space-x-1.5 py-0.5 text-sm">
                        <span className="flex-none">
                          <img
                            className="h-4 w-4 rounded-2xl"
                            src={getProfilePicture(txn.profile as Profile)}
                            alt="pfp"
                            draggable={false}
                          />
                        </span>
                        <Link
                          href={`https://lensfrens.xyz/${txn.profile.handle}`}
                          target="_blank"
                          className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                        >
                          {txn.profile.handle}
                        </Link>
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                      <Link
                        href="/submitters"
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        {getSubmitterName(txn.submitter)}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <Link
                        href={`/tx/${txn.transactionId}`}
                        className="opacity-60 hover:text-indigo-400 hover:opacity-100"
                      >
                        View
                      </Link>
                    </td>
                    <td className="rounded-r-xl px-3 py-4">
                      <Link
                        className="flex flex-none justify-center opacity-70  hover:opacity-100"
                        href={getPostAppLink(txn.publicationId)}
                        target="_blank"
                      >
                        <img
                          src={`https://static-assets.lenster.xyz/images/source/lenster.jpeg`}
                          className="h-5 w-5 rounded-full"
                          alt="lenster"
                          draggable={false}
                        />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllTransactions;
