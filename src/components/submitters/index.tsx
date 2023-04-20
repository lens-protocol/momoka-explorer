import React from 'react';

import { useDataAvailabilitySubmittersQuery } from '@/generated';
import getSubmitterName from '@/utils/getSubmitterName';

import TransactionsShimmer from '../shimmers/TransactionsShimmer';

const Submitters = () => {
  const { loading, data } = useDataAvailabilitySubmittersQuery();

  return (
    <div className="relative rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:space-y-2 md:p-5">
      <div className="left-0 right-0 flex items-center justify-between gap-y-3">
        <h1 className="text-sm font-medium opacity-90">All Submitters</h1>
      </div>
      <div className="overflow-x-auto">
        {loading && <TransactionsShimmer />}
        <table className="min-w-full table-auto border-separate border-spacing-y-3">
          <tbody>
            {data?.dataAvailabilitySubmitters.items?.map((submitter, i) => (
              <tr key={i} className="overflow-hidden bg-white dark:bg-gray-900">
                <td className="whitespace-nowrap rounded-xl px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                  {getSubmitterName(submitter.address)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submitters;
