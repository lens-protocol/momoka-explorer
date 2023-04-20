import React from 'react';

const StatsShimmer = () => {
  return (
    <div className="grid animate-pulse gap-4 lg:grid-cols-3">
      <div className="flex h-24 flex-col space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800" />
      <div className="flex h-24 flex-col space-y-1.5 truncate rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800" />
      <div className="flex h-24 flex-col space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 dark:border-gray-950 dark:bg-gray-800" />
    </div>
  );
};

export default StatsShimmer;
