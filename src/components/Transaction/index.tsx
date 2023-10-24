import { XCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowTopRightOnSquareIcon,
  BoltIcon,
  ClockIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { apps } from '@/data/apps';
import type { MomokaTransaction, Profile as TProfile } from '@/generated';
import { useMomokaTransactionQuery } from '@/generated';
import Custom404 from '@/pages/404';
import { useAppPersistStore } from '@/store/app';
import capitalizeCase from '@/utils/capitalizeCase';
import { getRelativeTime } from '@/utils/formatTime';
import getHeyLink from '@/utils/getHeyLink';

import Favorite from '../shared/Favorite';
import Profile from '../shared/Profile';
import TransactionShimmer from '../shimmers/TransactionShimmer';
import { Button } from '../ui/Button';
import Card from '../ui/Card';
import MoreDetails from './MoreDetails';

interface MetaProps {
  tooltip?: string;
  title: ReactNode;
  value: ReactNode;
  copyValue?: string;
}

export const Meta: FC<MetaProps> = ({ title, value, copyValue = null }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">{title}</dt>
      <dd className="mt-1 flex items-center space-x-2 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-4 sm:mt-0">
        <span className="truncate">{value}</span>
        {copyValue ? (
          <button
            onClick={() => {
              navigator.clipboard.writeText(copyValue);
              setCopied(true);
            }}
          >
            {copied ? (
              <CheckCircleIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
            ) : (
              <DocumentDuplicateIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            )}
          </button>
        ) : null}
      </dd>
    </div>
  );
};

const Transaction: FC = () => {
  const { query, push } = useRouter();
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);

  const { data, loading } = useMomokaTransactionQuery({
    variables: { request: { for: query.transactionId as string } },
    skip: !query.transactionId
  });

  if (loading || !data) {
    return <TransactionShimmer />;
  }

  if (!data?.momokaTransaction) {
    return <Custom404 />;
  }

  const { momokaTransaction } = data;
  const isVerified = momokaTransaction.verificationStatus.__typename === 'MomokaVerificationStatusSuccess';

  return (
    <>
      <Card className="mt-6 bg-[#FFFFFF] !p-5 dark:bg-[#2C2B35]">
        <div className="flex flex-wrap items-center justify-between space-y-3 px-4 sm:px-0">
          <div>
            <h1 className="font-medium md:text-[28px]">Transaction Details</h1>
            <p className="text-sm opacity-60">All Transaction related information will be displayed here.</p>
          </div>
          <Favorite
            momokaTransaction={momokaTransaction as MomokaTransaction}
            renderItem={(isFavorite) => {
              return (
                <Button className="px-5 py-3 text-[13px] font-bold uppercase leading-[13px] text-[#383838]">
                  <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
                </Button>
              );
            }}
          />
        </div>
        <div className="mt-6 border-t border-gray-200 dark:border-gray-900">
          <Meta
            title="Transaction ID"
            value={
              <Link
                className="flex items-center space-x-2 break-all text-[#3D794E] underline dark:text-[#D0DBFF]"
                href={`https://arweave.app/tx/${momokaTransaction?.transactionId}`}
                target="_blank"
              >
                <span>ar://{momokaTransaction?.transactionId}</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
            }
          />
          <Meta
            title="Created At"
            value={
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4" />
                <span>
                  <b>{getRelativeTime(momokaTransaction?.createdAt)}</b> (
                  {dayjs(new Date(momokaTransaction?.createdAt)).format('MMM DD YYYY, hh:mm A')})
                </span>
              </div>
            }
          />
          <Meta
            title="Status"
            value={
              <div className="flex items-center space-x-2">
                <div
                  className={clsx(
                    isVerified
                      ? 'border-green-300 bg-green-400 text-green-500 dark:text-green-400'
                      : 'border-red-300 bg-red-400 text-red-500 dark:text-red-400',
                    'inline-flex items-center space-x-2 rounded-lg border bg-opacity-25 px-1.5 py-1 text-xs text-green-500 dark:text-green-400'
                  )}
                >
                  {isVerified ? <CheckCircleIcon className="w- h-4" /> : <XCircleIcon className="w- h-4" />}
                  <span>{isVerified ? 'Verified' : 'Unverified'}</span>
                </div>
                {momokaTransaction.verificationStatus.__typename === 'MomokaVerificationStatusFailure' && (
                  <div className="truncate text-sm leading-3">
                    <b>Reason: </b>
                    <span>{momokaTransaction.verificationStatus.status}</span>
                  </div>
                )}
              </div>
            }
          />
          <Meta
            title="Submitter"
            value={
              <div className="flex items-center space-x-2 break-all">
                <BoltIcon className="h-4 w-4" />
                <b>{momokaTransaction?.submitter}</b>
              </div>
            }
            copyValue={momokaTransaction?.submitter}
          />
          <Meta
            title={`${capitalizeCase(momokaTransaction?.__typename as string)?.replace(
              'DataAvailability',
              ''
            )}ed by`}
            value={<Profile profile={momokaTransaction?.publication.by as TProfile} />}
          />
          {isVerified && (
            <Meta
              title="Publication ID"
              value={
                <Link
                  className="flex items-center space-x-2 text-[#3D794E] underline dark:text-[#D0DBFF]"
                  href={`${getHeyLink(selectedEnvironment.id)}/posts/${momokaTransaction?.publication.id}`}
                  target="_blank"
                >
                  <span>{momokaTransaction?.publication.id}</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </Link>
              }
            />
          )}
          {momokaTransaction?.__typename === 'MomokaMirrorTransaction' && (
            <>
              <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />
              <Meta
                title="Mirror Parent ID"
                value={
                  <div className="space-y-4">
                    <Link
                      className="flex items-center space-x-2 text-[#3D794E] underline dark:text-[#D0DBFF]"
                      href={`${getHeyLink(selectedEnvironment.id)}/posts/${
                        momokaTransaction?.publication.id
                      }`}
                      onClick={() => push(`/tx/${momokaTransaction?.publication.id}`)}
                      target="_blank"
                    >
                      <span>{momokaTransaction?.publication.id}</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                    <Profile profile={momokaTransaction?.publication.by as TProfile} />
                  </div>
                }
              />
              <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />
            </>
          )}
          {momokaTransaction?.__typename === 'MomokaCommentTransaction' && (
            <>
              <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />

              <Meta
                title="Comment Parent ID"
                value={
                  <div className="space-y-4">
                    <Link
                      className="flex items-center space-x-2 text-[#3D794E] underline dark:text-[#D0DBFF]"
                      href={`${getHeyLink(selectedEnvironment.id)}/posts/${
                        momokaTransaction?.publication.id
                      }`}
                      onClick={() => push(`/tx/${momokaTransaction?.publication.id}`)}
                      target="_blank"
                    >
                      <span>{momokaTransaction?.publication.id}</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                    <Profile profile={momokaTransaction?.publication.by as TProfile} />
                  </div>
                }
              />
              <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />
            </>
          )}
          <Meta
            title="Posted via"
            value={
              <div className="flex items-center space-x-2">
                {apps.includes(momokaTransaction?.app?.id) && (
                  <img
                    src={`https://static-assets.hey.xyz/images/source/${momokaTransaction?.app?.id}.jpeg`}
                    className="h-5 w-5 rounded-full"
                    alt={momokaTransaction?.app?.id}
                    draggable={false}
                  />
                )}
                <span>{capitalizeCase(momokaTransaction?.app?.id)}</span>
              </div>
            }
          />
        </div>
      </Card>
      <MoreDetails momokaTransaction={momokaTransaction as MomokaTransaction} />
    </>
  );
};

export default Transaction;
