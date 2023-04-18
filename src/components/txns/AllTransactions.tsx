import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { FC } from 'react';

import { PublicationSortCriteria, usePublicationsQuery } from '@/generated';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';

type Props = {};

const AllTransactions: FC<Props> = () => {
  const { data, loading } = usePublicationsQuery({
    variables: { request: { sortCriteria: PublicationSortCriteria.Latest, limit: 50 } }
  });

  return (
    <div className="relative space-y-8 rounded-xl bg-gray-50 px-2 py-4 md:p-5">
      <div className="absolute left-0 right-0 flex items-center justify-between px-6">
        <h1 className="font-medium opacity-80">All Transactions</h1>
        <div className="flex items-center space-x-3">
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
        {loading && <TransactionsShimmer />}
        <table className="min-w-full table-auto border-separate border-spacing-y-3">
          <tbody>
            {data?.explorePublications.items.map((publication) => (
              <tr key={publication.id} className="overflow-hidden bg-white">
                <td className="w-48 whitespace-nowrap rounded-l-xl px-3 py-5 text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <span className="rounded-xl bg-gray-100 p-2">
                      <ArrowsRightLeftIcon className="h-4 w-4 text-green-700" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href={`/tx/CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc`}
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc
                      </Link>
                      <span className="text-xs opacity-50">6 secs ago</span>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap rounded-r-xl px-3 py-5 text-center text-sm text-gray-500">
                  <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-lg border bg-gray-50 px-3 py-1.5 text-xs">
                    {publication.__typename}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-5 text-gray-500">
                  <div className="flex flex-col">
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-sm">
                      <span className="text-xs">From</span>
                      <Link
                        href={`https://lensfrens.xyz/sasicodes.lens`}
                        target="_blank"
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        sasicodes.lens
                      </Link>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-sm">
                      <span className="text-xs">via</span>
                      <Link
                        href={`/submitter/CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc`}
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        submitter::lens::CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc
                      </Link>
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap rounded-r-xl px-3 py-5 text-right text-sm text-gray-500">
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-xs">
                    <span>View</span>
                    <Link href={`https://lenster.xyz/posts/0x01-0x01`} target="_blank">
                      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-green-700" />
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransactions;
