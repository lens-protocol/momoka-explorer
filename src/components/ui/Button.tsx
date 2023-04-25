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
        'rounded-full border bg-[#C3E4CD] px-3 py-1 shadow-sm ring-offset-0 focus:outline-none disabled:opacity-50',
        className
      )}
      type={rest.type}
      {...rest}
    >
      {children}
    </button>
  );
});
