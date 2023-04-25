import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import type { DataAvailabilityTransactionUnion, Profile } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import { getRelativeTime } from '@/utils/formatTime';
import getDAActionType from '@/utils/getDAActionType';
import getLensterLink from '@/utils/getLensterLink';
import getProfilePicture from '@/utils/getProfilePicture';
import truncate from '@/utils/truncate';

import FavouriteIcon from '../FavouriteIcon';
import Favorite from '../shared/Favorite';

interface Props {
  txn: DataAvailabilityTransactionUnion;
}

const SingleTransaction: FC<Props> = ({ txn }) => {
  const { push } = useRouter();
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);

  return (
    <tr
      key={txn.transactionId}
      onClick={() => push(`/tx/${txn.transactionId}`)}
      className="h-[82px] cursor-pointer overflow-hidden bg-[#F1F8F3] font-medium hover:bg-[#DFEDE3] dark:bg-[#272E29] hover:dark:bg-[#202622]"
    >
      <td className="w-48 whitespace-nowrap rounded-l-[20px] px-7 py-4 text-sm text-[#16161B]">
        <Link
          href={`/tx/${txn.transactionId}`}
          className="flex flex-col truncate text-[#3D4B41] hover:text-[#4C8C5E] dark:text-[#9CA19F] hover:dark:text-[#FFEBB8]"
        >
          {truncate(txn.transactionId, 30)}
        </Link>
      </td>
      <td className="whitespace-nowrap px-1 py-4 text-center text-sm text-[#3D4B41] dark:text-[#C3E4CD80]">
        <span className="inline-flex w-20 items-center justify-center space-x-1 rounded-full border border-[#DBEDE1] px-3 py-1.5 text-[13px] dark:border-[#DBEDE180]">
          {getDAActionType(txn.__typename)}
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-center text-[13px] text-[#383838] dark:text-white">
        {getRelativeTime(txn.createdAt)}
      </td>
      <td className="whitespace-nowrap px-3 py-2">
        <Link
          onClick={(e) => e.stopPropagation()}
          href={`/profile/${txn.profile.id}`}
          className="text-[#3D4B41] dark:text-[#9CA19F]"
        >
          <span className="inline-flex items-center space-x-2 py-0.5">
            <span className="flex-none">
              <img
                className="h-7 w-7 rounded-2xl"
                src={getProfilePicture(txn.profile as Profile)}
                alt="pfp"
                draggable={false}
              />
            </span>
            <span className="truncate hover:text-[#4C8C5E] hover:dark:text-[#FFEBB8]">
              {txn.profile.handle}
            </span>
          </span>
        </Link>
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-sm text-[#383838] dark:text-[#C3E4CD80]">
        <Link
          onClick={(e) => e.stopPropagation()}
          href="submitters"
          className="hover:text-[#4C8C5E] hover:dark:text-[#FFEBB8]"
        >
          {truncate(txn.submitter, 20)}
        </Link>
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <Favorite
          dataAvailabilityTransaction={txn}
          renderItem={(isFavorite) => <FavouriteIcon isFavourite={isFavorite} className="h-6 w-6" />}
        />
      </td>
      <td className="rounded-r-[20px] py-4 pr-5 md:px-2">
        <Link
          className="flex flex-none justify-center md:mb-1.5"
          onClick={(e) => e.stopPropagation()}
          href={`${getLensterLink(selectedEnvironment.id)}/posts/${txn.publicationId}`}
          target="_blank"
        >
          <ArrowTopRightOnSquareIcon className="h-6 w-6 text-[#3D4B41] hover:text-[#4C8C5E] dark:text-[#9CA19F] hover:dark:text-[#FFEBB8]" />
        </Link>
      </td>
    </tr>
  );
};

export default SingleTransaction;
