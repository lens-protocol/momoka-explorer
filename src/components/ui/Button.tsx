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
        'rounded-full bg-[#565467] px-3 py-1 text-[#FBEEED] hover:bg-[#565467]/90 focus:outline-none disabled:opacity-50 dark:bg-[#F5D4D2] dark:text-[#2C2B35] dark:hover:bg-[#F5D4D2]/70',
        className
      )}
      type={rest.type}
      {...rest}
    >
      {children}
    </button>
  );
});
