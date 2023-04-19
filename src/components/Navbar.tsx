import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

import LensLogo from './LensLogo';
import Network from './Network';

const Navbar: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <nav className="fixed z-10 mx-auto w-full max-w-full bg-white px-2 dark:bg-gray-900 sm:px-6 lg:px-14">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <LensLogo className="h-12 w-12" />
        </Link>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {resolvedTheme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <Network />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
