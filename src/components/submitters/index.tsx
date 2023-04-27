import React from 'react';

import { useDataAvailabilitySubmittersQuery } from '@/generated';
import formatNumber from '@/utils/formatNumber';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';
import Card from '../ui/Card';

const Submitters = () => {
  const { loading, data } = useDataAvailabilitySubmittersQuery();

  return (
    <Card className="my-6">
      <div className="left-0 right-0">
        <h1 className="font-medium md:text-[28px]">All Submitters</h1>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <TransactionsShimmer />
        ) : (
          <table className="min-w-full table-auto border-separate border-spacing-y-3">
            <thead className="text-left">
              <tr className="font-gintoNord">
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">Name</th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Address
                </th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Total transactions
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.dataAvailabilitySubmitters.items?.map((submitter, i) => (
                <tr key={i} className="h-[82px] overflow-hidden bg-[#F1F8F3] font-medium dark:bg-[#2C2B35]">
                  <td className="whitespace-nowrap rounded-l-[20px] px-7 py-4 text-gray-700 dark:text-gray-300">
                    {submitter.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-700 dark:text-gray-300">
                    {submitter.address}
                  </td>
                  <td className="whitespace-nowrap rounded-r-[20px] px-7 py-4 text-gray-700 dark:text-gray-300">
                    {formatNumber(submitter.totalTransactions)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Card>
  );
};

export default Submitters;
