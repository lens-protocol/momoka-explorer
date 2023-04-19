import { ArrowRightIcon, ArrowsRightLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

import { useDaTransactionsQuery } from '@/generated';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';

type Props = {};

const LatestTransactions: FC<Props> = () => {
  const { data, loading } = useDaTransactionsQuery({
    variables: { request: { limit: 10 } }
  });

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     refetch().then(({ data }) => {
  //       const newItems = data?.explorePublications.items.filter((item) => {
  //         return (
  //           !previousData?.explorePublications.items.some(
  //             (prevItem: Publication) => prevItem.id === item.id
  //           ) && !newlyAddedItemIds.includes(item.id)
  //         );
  //       });

  //       setNewlyAddedItemIds(newlyAddedItemIds.concat(newItems.map((item) => item.id)));

  //       setTimeout(() => {
  //         setNewlyAddedItemIds([]);
  //       }, 500);

  //       setPreviousData(data);
  //     });
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [newlyAddedItemIds, previousData]);

  return (
    <div className="relative rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:space-y-2 md:p-5">
      <div className="left-0 right-0 flex items-center justify-between gap-y-3">
        <h1 className="text-sm font-medium opacity-90">Latest Transactions</h1>
        <Link
          href="/txns"
          className="flex items-center space-x-2 text-sm opacity-90 hover:text-indigo-400 hover:opacity-100"
        >
          <span>View all</span>
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        {loading && <TransactionsShimmer />}
        <table className="min-w-full table-auto border-separate border-spacing-y-3">
          <tbody>
            {data?.dataAvailabilityTransactions.items.map((txn) => (
              <tr
                key={txn.createdAt}
                className={clsx(
                  'overflow-hidden bg-white dark:bg-gray-900'
                  // newlyAddedItemIds.includes(publication.id) && 'bg-yellow-100'
                )}
              >
                <td className="w-48 whitespace-nowrap rounded-l-xl px-3 py-4 text-sm text-gray-900">
                  <div className="flex items-center space-x-2">
                    <span className="rounded-xl bg-gray-100 p-2 dark:bg-gray-800">
                      <ArrowsRightLeftIcon className="h-4 w-4 text-green-700" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href={`/tx/CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc`}
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc
                      </Link>
                      <span className="text-xs text-gray-600 dark:text-gray-400">6 secs ago</span>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-lg border bg-gray-50 px-3 py-1.5 text-xs dark:border-gray-950 dark:bg-gray-800">
                    {txn.__typename}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                  <div className="flex flex-col">
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-sm">
                      <span className="text-xs text-gray-500">From</span>
                      <Link
                        href={`https://lensfrens.xyz/sasicodes.lens`}
                        target="_blank"
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        sasicodes.lens
                      </Link>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-sm">
                      <span className="text-xs text-gray-500">via</span>
                      <Link href="/" className="text-indigo-400 text-opacity-80 hover:text-opacity-100">
                        submitter::lens::CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc
                      </Link>
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap rounded-r-xl px-3 py-4 text-right text-sm">
                  <Link
                    href={`https://lenster.xyz/posts/0x01-0x01`}
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
      </div>
    </div>
  );
};

export default LatestTransactions;
