import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import type { MomokaTransaction, Profile } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import { getRelativeTime } from '@/utils/formatTime';
import getHeyLink from '@/utils/getHeyLink';
import getProfilePicture from '@/utils/getProfilePicture';
import truncate from '@/utils/truncate';

import FavouriteIcon from '../FavouriteIcon';
import Favorite from '../shared/Favorite';

interface Props {
  txn: MomokaTransaction;
}

const SingleTransaction: FC<Props> = ({ txn }) => {
  const { push } = useRouter();
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);

  return (
    <tr
      key={txn.transactionId}
      onClick={() => push(`/tx/${txn.transactionId}`)}
      className="border- h-[82px] cursor-pointer overflow-hidden border bg-[#FFFFFF] font-medium hover:bg-[#E8C7C5] dark:bg-[#2C2B35] hover:dark:bg-[#2C2B35]/80"
    >
      <td className="w-48 whitespace-nowrap rounded-l-[20px] px-7 py-4">
        <Link
          href={`/tx/${txn.transactionId}`}
          className="flex flex-col truncate text-[#49454D] hover:text-[#C58C89] dark:text-[#E9E9E9] hover:dark:text-[#F5D4D2]"
        >
          {truncate(txn.transactionId, 30)}
        </Link>
      </td>
      <td className="whitespace-nowrap px-1 py-4 text-center font-gintoNord text-[#565467] dark:text-[#F5D4D280]">
        <span className="inline-flex items-center justify-center space-x-1 rounded-full border-2 border-[#FBEEED] bg-[#FBEEED] px-3 py-1.5 text-[13px] dark:border-[#F5D4D230] dark:bg-transparent">
          {txn.__typename?.replace('Momoka', '').replace('Transaction', '')}
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-center text-[#383838] dark:text-white">
        {getRelativeTime(txn.createdAt)}
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-center text-[#383838] dark:text-[#E9E9E9]">
        {txn.app?.id}
      </td>
      <td className="whitespace-nowrap px-3 py-2">
        <Link
          onClick={(e) => e.stopPropagation()}
          href={`/profile/${txn.publication.by.id}`}
          className="text-[#565467] dark:text-[#E9E9E9]"
        >
          <span className="inline-flex items-center space-x-2 py-0.5">
            <span className="flex-none">
              <img
                className="h-7 w-7 rounded-2xl"
                src={getProfilePicture(txn.publication.by as Profile)}
                alt="pfp"
                draggable={false}
              />
            </span>
            <span className="truncate hover:text-[#C58C89] hover:dark:text-[#F5D4D2]">
              {txn.publication.by.handle || txn.publication.by.id}
            </span>
          </span>
        </Link>
      </td>
      <td className="whitespace-nowrap px-3 py-2 text-[#383838] dark:text-[#E9E9E9]">
        <Link
          onClick={(e) => e.stopPropagation()}
          href="submitters"
          className="hover:text-[#C58C89] hover:dark:text-[#F5D4D2]"
        >
          {truncate(txn.submitter, 20)}
        </Link>
      </td>
      <td className="whitespace-nowrap px-3 py-4">
        <Favorite
          momokaTransaction={txn}
          renderItem={(isFavorite) => <FavouriteIcon isFavourite={isFavorite} className="h-6 w-6" />}
        />
      </td>
      <td className="rounded-r-[20px] py-4 pr-5 md:px-2">
        <Link
          className="flex flex-none justify-center md:mb-0.5"
          onClick={(e) => e.stopPropagation()}
          href={`${getHeyLink(selectedEnvironment.id)}/posts/${txn.publication.id}`}
          target="_blank"
        >
          <ArrowTopRightOnSquareIcon className="h-7 w-7 text-[#565467] hover:text-[#C58C89] dark:text-[#E9E9E9] hover:dark:text-[#F5D4D2]" />
        </Link>
      </td>
    </tr>
  );
};

export default SingleTransaction;
