import { ArrowsRightLeftIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { FC } from 'react';

import type { DataAvailabilityTransactionUnion, Profile } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import { getRelativeTime } from '@/utils/formatTime';
import getDAActionType from '@/utils/getDAActionType';
import getLensterLink from '@/utils/getLensterLink';
import getProfilePicture from '@/utils/getProfilePicture';
import truncate from '@/utils/truncate';

import Favorite from '../shared/Favorite';

interface Props {
  txn: DataAvailabilityTransactionUnion;
}

const SingleTransaction: FC<Props> = ({ txn }) => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);

  return (
    <tr key={txn.transactionId} className="overflow-hidden bg-white dark:bg-[#16161B]">
      <td className="rounded-l-xl px-3 py-2 text-sm text-gray-900">
        <div className="flex items-center space-x-2">
          <span className="rounded-xl bg-gray-100 p-2 dark:bg-[#1C1B22]">
            <ArrowsRightLeftIcon className="h-4 w-4 text-green-700" />
          </span>
          <div className="flex flex-col truncate">
            <Link
              href={`/tx/${txn.transactionId}`}
              className="truncate text-[#3D794E] opacity-80 hover:opacity-100 dark:text-[#D0DBFF]"
            >
              {truncate(txn.transactionId, 30)}
            </Link>
          </div>
        </div>
      </td>
      <td className="w-20 whitespace-nowrap px-3 py-2 text-sm text-gray-700 dark:text-gray-300">
        <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-lg border bg-gray-50 px-3 py-1.5 text-xs dark:border-[#16161B] dark:bg-[#1C1B22]">
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
            className="text-[#3D794E] opacity-80 hover:opacity-100 dark:text-[#D0DBFF]"
          >
            {txn.profile.handle}
          </Link>
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
        <Link href="/submitters" className="text-[#3D794E] opacity-80 hover:opacity-100 dark:text-[#D0DBFF]">
          {txn.submitter}
        </Link>
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <Link
          href={`/tx/${txn.transactionId}`}
          className="text-sm opacity-60 hover:text-[#3D794E] hover:opacity-100 hover:dark:text-[#D0DBFF]"
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
  );
};

export default SingleTransaction;
