import {
  ArrowTopRightOnSquareIcon,
  BoltIcon,
  ClockIcon,
  DocumentDuplicateIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon, StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { apps } from '@/data/apps';
import type { DataAvailabilityTransactionUnion, Profile as TProfile } from '@/generated';
import { useDataAvailabilityTransactionQuery } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import capitalizeCase from '@/utils/capitalizeCase';
import { getRelativeTime } from '@/utils/formatTime';
import getLensterLink from '@/utils/getLensterLink';
import getSubmitterName from '@/utils/getSubmitterName';

import Favorite from '../shared/Favorite';
import Profile from '../shared/Profile';
import { Button } from '../ui/Button';
import MoreDetails from './MoreDetails';

interface MetaProps {
  tooltip?: string;
  title: string;
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
        {value}
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
  const { query } = useRouter();
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);

  const { data, loading } = useDataAvailabilityTransactionQuery({
    variables: { request: { transactionId: query.transactionId as string } },
    skip: !query.transactionId
  });

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  const { dataAvailabilityTransaction } = data;

  return (
    <>
      <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:p-5">
        <div className="flex flex-wrap items-center justify-between space-y-3 px-4 sm:px-0">
          <div>
            <h3 className="font-medium opacity-80">Transaction Details</h3>
            <p className="text-sm opacity-60">All Transaction related information will be displayed here.</p>
          </div>
          <Favorite
            dataAvailabilityTransaction={dataAvailabilityTransaction as DataAvailabilityTransactionUnion}
            renderItem={(isFavorite) => {
              return (
                <Button className="flex items-center space-x-2 text-xs sm:text-sm">
                  {isFavorite ? (
                    <StarIconSolid className="h-3 w-3 text-yellow-500 sm:h-4 sm:w-4" />
                  ) : (
                    <StarIcon className="h-3 w-3 text-yellow-500 sm:h-4 sm:w-4" />
                  )}
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
                className="flex items-center space-x-2 break-all underline"
                href={`https://arweave.net/${dataAvailabilityTransaction?.transactionId}`}
                target="_blank"
              >
                <span>ar://{dataAvailabilityTransaction?.transactionId}</span>
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
                  <b>{getRelativeTime(dataAvailabilityTransaction?.createdAt)}</b> (
                  {dayjs(new Date(dataAvailabilityTransaction?.createdAt)).format('MMM-DD-YYYY hh:mm A')})
                </span>
              </div>
            }
          />
          <Meta
            title="Status"
            value={
              <div className="inline-flex items-center space-x-2 rounded-lg border border-green-300 bg-green-400 bg-opacity-25 px-1.5 py-1 text-xs text-green-500 dark:text-green-400">
                <CheckCircleIcon className="w- h-4" />
                <span>Verified</span>
              </div>
            }
          />
          <Meta
            title="Submitter"
            value={
              <div className="flex items-center space-x-2 break-all">
                <BoltIcon className="h-4 w-4" />
                <b>{getSubmitterName(dataAvailabilityTransaction?.submitter)}</b>
              </div>
            }
            copyValue={dataAvailabilityTransaction?.submitter}
          />
          <Meta
            title={`${capitalizeCase(dataAvailabilityTransaction?.__typename as string)?.replace(
              'DataAvailability',
              ''
            )}ed by`}
            value={<Profile profile={dataAvailabilityTransaction?.profile as TProfile} />}
          />
          <Meta
            title="Publication ID"
            value={
              <Link
                className="flex items-center space-x-2 underline"
                href={`${getLensterLink(selectedEnvironment.id)}/posts/${
                  dataAvailabilityTransaction?.publicationId
                }`}
                target="_blank"
              >
                <span>{dataAvailabilityTransaction?.publicationId}</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
            }
          />
          {dataAvailabilityTransaction?.__typename === 'DataAvailabilityMirror' && (
            <>
              <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />
              <Meta
                title="Mirror Parent ID"
                value={
                  <div className="space-y-4">
                    <Link
                      className="flex items-center space-x-2 underline"
                      href={`${getLensterLink(selectedEnvironment.id)}/posts/${
                        dataAvailabilityTransaction?.mirrorOfPublicationId
                      }`}
                      target="_blank"
                    >
                      <span>{dataAvailabilityTransaction?.mirrorOfPublicationId}</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                    <Profile profile={dataAvailabilityTransaction?.mirrorOfProfile as TProfile} />
                  </div>
                }
              />
              <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />
            </>
          )}
          {dataAvailabilityTransaction?.__typename === 'DataAvailabilityComment' && (
            <>
              <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />

              <Meta
                title="Comment Parent ID"
                value={
                  <div className="space-y-4">
                    <Link
                      className="flex items-center space-x-2 underline"
                      href={`${getLensterLink(selectedEnvironment.id)}/posts/${
                        dataAvailabilityTransaction?.commentedOnPublicationId
                      }`}
                      target="_blank"
                    >
                      <span>{dataAvailabilityTransaction?.commentedOnPublicationId}</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                    <Profile profile={dataAvailabilityTransaction?.commentedOnProfile as TProfile} />
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
                {apps.includes(dataAvailabilityTransaction?.appId) && (
                  <img
                    src={`https://static-assets.lenster.xyz/images/source/${dataAvailabilityTransaction?.appId}.jpeg`}
                    className="h-5 w-5 rounded-full"
                    alt={dataAvailabilityTransaction?.appId}
                    draggable={false}
                  />
                )}
                <span>{capitalizeCase(dataAvailabilityTransaction?.appId)}</span>
              </div>
            }
          />
        </div>
      </div>
      <MoreDetails
        dataAvailabilityTransaction={dataAvailabilityTransaction as DataAvailabilityTransactionUnion}
      />
    </>
  );
};

export default Transaction;
