import clsx from 'clsx';
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { forwardRef } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = '', children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(
        'rounded-lg border px-3 py-1 shadow-sm ring-offset-0 focus:outline-none focus:ring-2 focus:ring-[#3D794E] focus:ring-opacity-50 disabled:opacity-50 dark:border-gray-700 dark:focus:ring-[#3D794E]',
        className
      )}
      type={rest.type}
      {...rest}
    >
      {children}
    </button>
  );
});
