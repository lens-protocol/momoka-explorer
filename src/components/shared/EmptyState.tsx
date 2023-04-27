import React from 'react';

const EmptyState = ({ message = 'No momoka transactions 🌳' }) => {
  return (
    <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#FFFFFF] px-6 py-6 dark:bg-[#2C2B35]">
      <span className="truncate text-xl">{message}</span>
    </div>
  );
};

export default EmptyState;
