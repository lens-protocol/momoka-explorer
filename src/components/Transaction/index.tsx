import type { FC } from 'react';

import { PublicationSortCriteria, usePublicationsQuery } from '@/generated';

const Transaction: FC = () => {
  const { data, loading } = usePublicationsQuery({
    variables: { request: { sortCriteria: PublicationSortCriteria.Latest, limit: 10 } }
  });

  return (
    <div className="relative space-y-5 rounded-xl bg-gray-50 px-2 py-4 md:p-5">
      <div>
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Transaction Details</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              All Transaction related information will be displayed here.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">GM</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">GM</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">GM</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">GM</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">GM</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">GM</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">GM</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">GM</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">GM</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">GM</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
