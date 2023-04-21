import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { forwardRef, useId } from 'react';

interface InputProps extends Omit<ComponentProps<'input'>, 'prefix'> {
  label?: string;
  className?: string;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, type = 'text', error, className = '', ...props },
  ref
) {
  const id = useId();

  return (
    <label className="w-full" htmlFor={id}>
      {label && (
        <div className="mb-1 flex items-center space-x-1.5">
          <div className="font-medium text-gray-800 dark:text-gray-200">{label}</div>
        </div>
      )}
      <div
        className={clsx(
          { 'bg-gray-500 bg-opacity-20 opacity-60': props.disabled },
          error ? '!border-red-500' : 'focus-within:ring-1',
          'flex w-full items-center rounded-xl border border-gray-300 bg-white focus-within:border-[#3D794E]/50 focus-within:ring-[#3D794E]/50 dark:border-gray-700 dark:bg-gray-900'
        )}
      >
        <input
          id={id}
          className={clsx(
            { 'placeholder-red-500': error },
            'peer w-full rounded-xl border-none bg-transparent outline-none focus:ring-0',
            className
          )}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    </label>
  );
});
