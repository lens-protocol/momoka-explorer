import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import type { Profile as TProfile } from '@/generated';
import { useDataAvailabilityTransactionQuery } from '@/generated';
import capitalizeCase from '@/utils/capitalizeCase';
import isDataVerified from '@/utils/isDataVerified';

import Profile from '../shared/Profile';

interface MetaProps {
  tooltip?: string;
  title: string;
  value: ReactNode;
  canCopy?: boolean;
}

const Meta: FC<MetaProps> = ({ tooltip = null, title, value, canCopy = false }) => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
    <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">{title}</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">{value}</dd>
  </div>
);

const Transaction: FC = () => {
  const { query } = useRouter();
  const [daVerified, setDaVerified] = useState(false);

  const { data, loading } = useDataAvailabilityTransactionQuery({
    variables: { request: { transactionId: query.transactionId as string } },
    skip: !query.transactionId
  });

  useEffect(() => {
    const setStatus = async () => {
      const status = await isDataVerified(query.transactionId as string, 'mainnet');
      setDaVerified(status);
    };

    if (query.transactionId) {
      setStatus();
    }
  }, [query.transactionId]);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  const { dataAvailabilityTransaction } = data;

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:p-5">
      <div className="px-4 sm:px-0">
        <h3 className="font-medium opacity-80">Transaction Details</h3>
        <p className="text-sm opacity-60">All Transaction related information will be displayed here.</p>
      </div>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-900">
        <Meta
          title="Transaction ID"
          value={
            <Link
              className="flex items-center space-x-2 underline"
              href={`https://arweave.net/tx/${dataAvailabilityTransaction?.transactionId}`}
              target="_blank"
            >
              <span>ar://{dataAvailabilityTransaction?.transactionId}</span>
              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
            </Link>
          }
        />
        <Meta
          title="Status"
          value={
            <div
              className={clsx(
                { 'border-green-300 bg-green-400 text-green-400': daVerified },
                { 'border-yellow-300 bg-yellow-400 text-yellow-400': !daVerified },
                'inline-flex items-center space-x-2 rounded-lg border bg-opacity-25 px-1.5 py-1 text-xs'
              )}
            >
              {daVerified ? <CheckCircleIcon className="w- h-4" /> : <XCircleIcon className="h-4 w-4" />}
              <span>{daVerified ? 'Verified' : 'Not Verified'}</span>
            </div>
          }
        />
        <Meta
          title={`${capitalizeCase(dataAvailabilityTransaction?.__typename as string).replace(
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
              href={`https://lenster.xyz/posts/${dataAvailabilityTransaction?.publicationId}`}
              target="_blank"
            >
              <span>{dataAvailabilityTransaction?.publicationId}</span>
              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
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
                    href={`https://lenster.xyz/posts/${dataAvailabilityTransaction?.mirrorOfPublicationId}`}
                    target="_blank"
                  >
                    <span>{dataAvailabilityTransaction?.mirrorOfPublicationId}</span>
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
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
                    href={`https://lenster.xyz/posts/${dataAvailabilityTransaction?.commentedOnPublicationId}`}
                    target="_blank"
                  >
                    <span>{dataAvailabilityTransaction?.commentedOnPublicationId}</span>
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </Link>
                  <Profile profile={dataAvailabilityTransaction?.commentedOnProfile as TProfile} />
                </div>
              }
            />
            <div className="border-b-[0.5px] border-b-gray-100 dark:border-gray-950" />
          </>
        )}
      </div>
    </div>
  );
};

export default Transaction;
