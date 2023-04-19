import type { FC } from 'react';

import { PublicationSortCriteria, usePublicationsQuery } from '@/generated';

const Meta: FC = () => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
    <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">GM</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">GM</dd>
  </div>
);

const Transaction: FC = () => {
  const { data, loading } = usePublicationsQuery({
    variables: { request: { sortCriteria: PublicationSortCriteria.Latest, limit: 10 } }
  });

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:p-5">
      <div className="px-4 sm:px-0">
        <h3 className="font-medium opacity-80">Transaction Details</h3>
        <p className="text-sm opacity-60">All Transaction related information will be displayed here.</p>
      </div>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-900">
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
      </div>
    </div>
  );
};

export default Transaction;
