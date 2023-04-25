import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = '' }) => {
  return <div className={clsx('relative rounded-xl px-2 md:px-0', className)}>{children}</div>;
};

export default Card;
