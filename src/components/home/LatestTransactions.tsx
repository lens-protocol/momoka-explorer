import { ArrowRightIcon, ArrowsRightLeftIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

import type { DataAvailabilityTransactionUnion, Profile } from '@/generated';
import { useDaTransactionsQuery, useNewTransactionSubscription } from '@/generated';
import { useAppPersistStore, useAppStore } from '@/store/app';
import { getRelativeTime } from '@/utils/formatTime';
import getDAActionType from '@/utils/getDAActionType';
import getLensterLink from '@/utils/getLensterLink';
import getProfilePicture from '@/utils/getProfilePicture';

import Favorite from '../shared/Favorite';
import TransactionsShimmer from '../shimmers/TransactionsShimmer';

type Props = {};

const LatestTransactions: FC<Props> = () => {
  const setLastFinalizedTransaction = useAppStore((state) => state.setLastFinalizedTransaction);
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const [latestTransactions, setLatestTransactions] = useState<Array<DataAvailabilityTransactionUnion>>();

  const { loading } = useDaTransactionsQuery({
    variables: { request: { limit: 10 } },
    onCompleted: (data) => {
      const txns = data?.dataAvailabilityTransactions.items;
      setLastFinalizedTransaction(txns[0] as DataAvailabilityTransactionUnion);
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
      setLastFinalizedTransaction(txn);
      let oldTxns = [...(latestTransactions as DataAvailabilityTransactionUnion[])];
      oldTxns.unshift(txn);
      oldTxns.pop();
      setLatestTransactions(oldTxns);
    },
    shouldResubscribe: true
  });

  return (
    <div className="relative rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-[#16161B] dark:bg-[#1C1B22] md:space-y-2 md:p-5">
      <div className="left-0 right-0 flex items-center justify-between gap-y-3">
        <h1 className="text-sm font-medium opacity-90">Latest Transactions</h1>
        <Link
          href="/txns"
          className="flex items-center space-x-2 text-sm opacity-90 hover:text-[#3D794E] hover:opacity-100 dark:hover:text-[#D0DBFF]"
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
              <tr key={i} className="overflow-hidden bg-white dark:bg-[#16161B]">
                <td className="w-48 whitespace-nowrap rounded-l-xl px-3 py-4 text-sm text-[#16161B]">
                  <div className="flex items-center space-x-2">
                    <span className="rounded-xl bg-gray-100 p-2 dark:bg-[#1C1B22]">
                      <ArrowsRightLeftIcon className="h-4 w-4 text-[#3D794E] dark:text-[#D0DBFF]" />
                    </span>
                    <div className="flex flex-col">
                      <Link
                        href={`/tx/${txn.transactionId}`}
                        className="text-[#3D794E] opacity-80 hover:opacity-100 dark:text-[#D0DBFF]"
                      >
                        {txn.transactionId}
                      </Link>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {getRelativeTime(txn.createdAt)}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-[#23222A] dark:text-gray-300">
                  <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-lg border bg-gray-50 px-3 py-1.5 text-xs dark:border-[#16161B] dark:bg-[#1C1B22]">
                    {getDAActionType(txn.__typename)}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <div className="flex flex-col">
                    <span className="inline-flex items-center space-x-2 px-2 py-0.5 text-sm">
                      <span className="text-xs opacity-70">From</span>
                      <span className="inline-flex items-center space-x-1">
                        <img
                          className="h-3 w-3 flex-none rounded-2xl"
                          src={getProfilePicture(txn.profile as Profile)}
                          alt="pfp"
                          draggable={false}
                        />
                        <Link
                          href={`/profile/${txn.profile.id}`}
                          className="text-[#3D794E] opacity-80 hover:opacity-100 dark:text-[#D0DBFF]"
                        >
                          {txn.profile.handle}
                        </Link>
                      </span>
                    </span>
                    <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 text-sm">
                      <span className="text-xs opacity-70">via</span>
                      <Link
                        href="/submitters"
                        className="text-[#3D794E] opacity-80 hover:opacity-100 dark:text-[#D0DBFF]"
                      >
                        {txn.submitter}
                      </Link>
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <Link
                    href={`/tx/${txn.transactionId}`}
                    className="text-sm opacity-70 hover:text-[#3D794E] hover:opacity-100 hover:dark:text-[#D0DBFF]"
                  >
                    View
                  </Link>
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  <Favorite
                    dataAvailabilityTransaction={txn}
                    renderItem={(isFavorite) =>
                      isFavorite ? (
                        <StarIconSolid className="h-4 w-4 text-yellow-500" />
                      ) : (
                        <StarIcon className="h-4 w-4 text-yellow-500" />
                      )
                    }
                  />
                </td>
                <td className="rounded-r-xl px-3 py-4">
                  <Link
                    className="flex flex-none justify-center opacity-70 hover:opacity-100"
                    href={`${getLensterLink(selectedEnvironment.id)}/posts/${txn.publicationId}`}
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
