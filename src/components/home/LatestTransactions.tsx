import { ArrowRightIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

import type { DataAvailabilityTransactionUnion, Profile } from '@/generated';
import { useDaTransactionsQuery, useNewTransactionSubscription } from '@/generated';
import useAppStore from '@/store/app';
import { getRelativeTime } from '@/utils/formatTime';
import getDAActionType from '@/utils/getDAActionType';
import getPostAppLink from '@/utils/getPostAppLink';
import getProfilePicture from '@/utils/getProfilePicture';
import getSubmitterName from '@/utils/getSubmitterName';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';

type Props = {};

const LatestTransactions: FC<Props> = () => {
  const setLastFinalizedTransaction = useAppStore((state) => state.setLastFinalizedTransaction);
  const [latestTransactions, setLatestTransactions] = useState<Array<DataAvailabilityTransactionUnion>>();

  const { loading } = useDaTransactionsQuery({
    variables: { request: { limit: 10 } },
    onCompleted: (data) => {
      const txns = data?.dataAvailabilityTransactions.items;
      setLastFinalizedTransaction(txns[0]?.transactionId);
      setLatestTransactions(txns as Array<DataAvailabilityTransactionUnion>);
    }
  });

  const {} = useNewTransactionSubscription();

  useNewTransactionSubscription({
    onError: (data) => {
      console.log('🚀 ~ Socket Error:', data);
    },
    onSubscriptionData: ({ subscriptionData }) => {
      const { data } = subscriptionData;
      if (!data) {
        return;
      }
      const txn = data?.newDataAvailabilityTransaction as DataAvailabilityTransactionUnion;
      setLastFinalizedTransaction(txn?.transactionId);
      let oldTxns = [...(latestTransactions as DataAvailabilityTransactionUnion[])];
      oldTxns.unshift(txn);
      oldTxns.pop();
      setLatestTransactions(oldTxns);
    },
    shouldResubscribe: true
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
            {latestTransactions?.map((txn, i) => (
              <tr
                key={i}
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
                        href={`/tx/${txn.transactionId}`}
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        {txn.transactionId}
                      </Link>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {getRelativeTime(txn.createdAt)}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-lg border bg-gray-50 px-3 py-1.5 text-xs dark:border-gray-950 dark:bg-gray-800">
                    {getDAActionType(txn.__typename)}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                  <div className="flex flex-col">
                    <span className="inline-flex items-center space-x-2 px-2 py-0.5 text-sm">
                      <span className="text-xs text-gray-500">From</span>
                      <span className="inline-flex items-center space-x-1">
                        <img
                          className="h-3 w-3 flex-none rounded-2xl"
                          src={getProfilePicture(txn.profile as Profile)}
                          alt="pfp"
                          draggable={false}
                        />
                        <Link
                          href={`https://lensfrens.xyz/${txn.profile.handle}`}
                          target="_blank"
                          className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                        >
                          {txn.profile.handle}
                        </Link>
                      </span>
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-sm">
                      <span className="text-xs text-gray-500">via</span>
                      <Link
                        href="/submitters"
                        className="text-indigo-400 text-opacity-80 hover:text-opacity-100"
                      >
                        {getSubmitterName(txn.submitter)}
                      </Link>
                    </span>
                  </div>
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
                    className="flex flex-none justify-center opacity-70 hover:opacity-100"
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestTransactions;
