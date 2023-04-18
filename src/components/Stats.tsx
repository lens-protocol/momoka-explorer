import React from 'react';

import formatNumber from '@/utils/formatNumber';

const Stats = () => {
  return (
    <div className="md:grid-col-2 grid gap-4 lg:grid-cols-4">
      <div className="flex flex-col space-y-1.5 rounded-xl bg-gray-50 px-6 py-5">
        <span className="text-xs font-medium uppercase opacity-50">Transactions</span>
        <span className="text-2xl font-medium">{formatNumber(435999)}</span>
      </div>
      <div className="flex flex-col space-y-1.5 rounded-xl bg-gray-50 px-6 py-5">
        <span className="text-xs font-medium uppercase opacity-50">Transactions per second</span>
        <span className="text-2xl font-medium">38994</span>
      </div>
      <div className="flex flex-col space-y-1.5 truncate rounded-xl bg-gray-50 px-6 py-5">
        <span className="text-xs font-medium uppercase opacity-50">Last Finalized</span>
        <span className="truncate text-2xl font-medium">CHqdhv_rIp4iJZnWRkQ6Vua4tGAMWvWxCt9v1asD5Kc</span>
      </div>
      <div className="flex flex-col space-y-1.5 rounded-xl bg-gray-50 px-6 py-5">
        <span className="text-xs font-medium uppercase opacity-50">All Submitters</span>
        <span className="truncate text-2xl font-medium">Submitter:Lens 1</span>
      </div>
    </div>
  );
};

export default Stats;
