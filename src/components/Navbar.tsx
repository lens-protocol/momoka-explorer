import { MoonIcon, StarIcon, SunIcon } from '@heroicons/react/24/outline';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { useAccount } from 'wagmi';

import type { Profile } from '@/generated';
import { useProfilesQuery } from '@/generated';

import LensLogo from './LensLogo';
import Network from './Network';
import { Button } from './ui/Button';
import UserMenu from './UserMenu';

const Navbar: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  const { address } = useAccount();

  const { data } = useProfilesQuery({
    variables: { request: { ownedBy: [address] } },
    skip: !address
  });

  return (
    <nav className="fixed z-10 mx-auto w-full max-w-full bg-white px-2 dark:bg-[#364039] sm:px-6 lg:px-14">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <LensLogo className="h-12 w-12" />
        </Link>
        <div className="flex items-center space-x-5">
          <Link href="/favorites" className="flex items-center space-x-2">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span>Favorites</span>
          </Link>
          <Network />
          <button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {resolvedTheme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <div>
            {isConnected ? (
              <UserMenu profiles={data?.profiles.items as Profile[]} />
            ) : (
              <Button
                className="px-5 py-3 text-[13px] font-bold uppercase leading-[13px] text-black dark:bg-[#FFEBB8]"
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
