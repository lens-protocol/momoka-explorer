import { MoonIcon, StarIcon, SunIcon } from '@heroicons/react/24/outline';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { useAccount } from 'wagmi';

import LensLogo from './LensLogo';
import Network from './Network';
import { Button } from './ui/Button';
import UserMenu from './UserMenu';

const Navbar: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { openConnectModal } = useConnectModal();
  const { connector, isConnected } = useAccount();

  return (
    <nav className="fixed z-10 mx-auto w-full max-w-full bg-white px-2 dark:bg-[#16161B] sm:px-6 lg:px-14">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <LensLogo className="h-12 w-12" />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/favorites" className="flex items-center space-x-2 text-sm">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <span>Favorites</span>
          </Link>
          <Network />
          <button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {resolvedTheme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <div>
            {isConnected ? (
              <UserMenu />
            ) : (
              <Button
                onClick={() => {
                  openConnectModal?.();
                }}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
