import { BellIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="border-b bg-gray-100 shadow-sm">
      <nav className="mx-auto max-w-full px-2 sm:px-6 lg:px-14">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="rounded-full bg-gray-200 p-2">
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
