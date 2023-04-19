import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { FC } from 'react';

import type { Profile } from '@/generated';
import { useDaTransactionsQuery } from '@/generated';
import { getRelativeTime } from '@/utils/formatTime';
import getDAActionType from '@/utils/getDAActionType';
import getPostAppLink from '@/utils/getPostAppLink';
import getProfilePicture from '@/utils/getProfilePicture';
import truncate from '@/utils/truncate';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';

type Props = {};

const AllTransactions: FC<Props> = () => {
  const { data, loading } = useDaTransactionsQuery({
    variables: { request: { limit: 50 } }
  });

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:p-5">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium opacity-90">All Transactions</h1>
          <p className="text-sm opacity-60">More than 1,939,672,686 transactions found</p>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-3">
          <button
            type="button"
            className="rounded-lg border p-1 hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-gray-900"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <span className="text-sm">Page 1</span>
          <button
            type="button"
            className="rounded-lg border p-1 hover:bg-gray-50 dark:border-gray-700 hover:dark:bg-gray-900"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
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
              {data?.dataAvailabilityTransactions.items.map((txn) => (
                <tr key={txn.createdAt} className="overflow-hidden bg-white dark:bg-gray-900">
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
                    <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 text-sm">
                      <span>
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
                  <td className="whitespace-nowrap px-3 py-2 text-gray-500">
                    <Link
                      href="/submitters"
                      className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                    >
                      {txn.submitter}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap rounded-r-xl px-3 py-2 text-right text-sm">
                    <Link
                      href={getPostAppLink(txn.publicationId)}
                      target="_blank"
                      className="opacity-70 hover:opacity-100"
                    >
                      <span className="inline-flex items-center space-x-1 text-xs">
                        <span>View</span>
                        <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-gray-700 dark:text-gray-300" />
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllTransactions;
