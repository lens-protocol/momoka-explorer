import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={clsx(
        'relative space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-[#16161B] dark:bg-[#1C1B22] md:p-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
