import React from 'react';

const StatsShimmer = () => {
  return (
    <div className="grid animate-pulse gap-4 lg:grid-cols-3">
      <div className="flex h-24 flex-col space-y-1.5 rounded-[20px] bg-[#F1F8F3] px-6 py-5 dark:bg-[#2C2B35]" />
      <div className="flex h-24 flex-col space-y-1.5 truncate rounded-[20px] bg-[#F1F8F3] px-6 py-5 dark:bg-[#2C2B35]" />
      <div className="flex h-24 flex-col space-y-1.5 rounded-[20px] bg-[#F1F8F3] px-6 py-5 dark:bg-[#2C2B35]" />
    </div>
  );
};

export default StatsShimmer;
