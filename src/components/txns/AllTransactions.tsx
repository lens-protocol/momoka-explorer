import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { FC } from 'react';

import { PublicationSortCriteria, usePublicationsQuery } from '@/generated';
import getProfilePicture from '@/utils/getpfp';
import truncate from '@/utils/truncate';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';

type Props = {};

const AllTransactions: FC<Props> = () => {
  const { data, loading } = usePublicationsQuery({
    variables: { request: { sortCriteria: PublicationSortCriteria.Latest, limit: 50 } }
  });

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 md:p-5">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium opacity-80">All Transactions</h1>
          <p className="text-sm opacity-60">More than 1,939,672,686 transactions found</p>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-3">
          <button type="button" className="rounded-lg border p-1 hover:bg-gray-50">
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <span className="text-sm">Page 1</span>
          <button type="button" className="rounded-lg border p-1 hover:bg-gray-50">
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <TransactionsShimmer />
        ) : (
          <table className="min-w-full table-auto border-separate border-spacing-y-3">
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
              {data?.explorePublications.items.map((publication) => (
                <tr key={publication.id} className="overflow-hidden bg-white">
                  <td className="rounded-l-xl px-3 py-2 text-sm text-gray-900">
                    <div className="flex items-center space-x-2">
                      <span className="rounded-xl bg-gray-100 p-2">
                        <ArrowsRightLeftIcon className="h-4 w-4 text-green-700" />
                      </span>
                      <div className="flex flex-col truncate">
                        <Link
                          href={`/tx/CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc`}
                          className="truncate text-indigo-400 text-opacity-80 hover:text-opacity-100"
                        >
                          {truncate('CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc', 30)}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="w-20 whitespace-nowrap rounded-r-xl px-3 py-2 text-sm text-gray-500">
                    <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-lg border bg-gray-50 px-3 py-1.5 text-xs">
                      {publication.__typename}
                    </span>
                  </td>
                  <td className="whitespace-nowrap rounded-r-xl px-3 py-2 text-sm text-gray-500">
                    6 secs ago
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-gray-500">
                    <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 text-sm">
                      <span>
                        <img
                          className="h-4 w-4 rounded-2xl"
                          src={getProfilePicture('0x01d79BcEaEaaDfb8fD2F2f53005289CFcF483464')}
                          alt="pfp"
                          draggable={false}
                        />
                      </span>
                      <Link
                        href={`https://lensfrens.xyz/sasicodes.lens`}
                        target="_blank"
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        sasicodes.lens
                      </Link>
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-gray-500">
                    <Link
                      href={`/submitter/CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc`}
                      className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                    >
                      submitter::lens::CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc
                    </Link>
                  </td>
                  <td className="whitespace-nowrap rounded-r-xl px-3 py-2 text-right text-sm">
                    <Link
                      href={`https://lenster.xyz/posts/0x01-0x01`}
                      target="_blank"
                      className="opacity-60 hover:opacity-100"
                    >
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-xs">
                        <span>View</span>
                        <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-green-700" />
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
