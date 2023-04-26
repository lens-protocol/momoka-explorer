import React from 'react';

const EmptyState = ({ message = 'No bonsai transactions 🌳' }) => {
  return (
    <div className="flex flex-col items-center space-y-0.5 truncate rounded-[20px] bg-[#F1F8F3] px-6 py-6 dark:bg-[#272E29]">
      <span className="truncate text-xl">{message}</span>
    </div>
  );
};

export default EmptyState;
