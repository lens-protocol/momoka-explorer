import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

import Network from './Network';

const Navbar: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <nav className="fixed z-10 mx-auto w-full max-w-full bg-white px-2 dark:bg-gray-800 sm:px-6 lg:px-14">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <img className="h-8 w-auto" src="/logo.svg" alt="Lens" draggable={false} />
        </Link>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {resolvedTheme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <Network />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
