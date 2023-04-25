import React from 'react';

import { useDataAvailabilitySubmittersQuery } from '@/generated';
import formatNumber from '@/utils/formatNumber';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';
import Card from '../ui/Card';

const Submitters = () => {
  const { loading, data } = useDataAvailabilitySubmittersQuery();

  return (
    <Card className="my-6">
      <div className="left-0 right-0 flex items-center justify-between gap-y-3">
        <h1 className="text-sm font-medium opacity-90">All Submitters</h1>
      </div>
      <div className="overflow-x-auto">
        {loading && <TransactionsShimmer />}
        <table className="min-w-full table-auto border-separate border-spacing-y-3">
          <thead className="text-left">
            <tr>
              <th className="px-3 text-sm font-normal">Name</th>
              <th className="px-3 text-sm font-normal">Address</th>
              <th className="px-3 text-sm font-normal">Total transactions</th>
            </tr>
          </thead>
          <tbody>
            {data?.dataAvailabilitySubmitters.items?.map((submitter, i) => (
              <tr key={i} className="overflow-hidden bg-white dark:bg-[#16161B]">
                <td className="whitespace-nowrap rounded-l-xl px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                  {submitter.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                  {submitter.address}
                </td>
                <td className="whitespace-nowrap rounded-r-xl px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                  {formatNumber(submitter.totalTransactions)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Submitters;
