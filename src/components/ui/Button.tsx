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
        'bg-brand-500 hover:bg-brand-600 border-brand-600 focus:ring-brand-400 rounded-lg border px-3 py-1 font-bold shadow-sm outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 disabled:opacity-50',
        className
      )}
      type={rest.type}
      {...rest}
    >
      {children}
    </button>
  );
});
