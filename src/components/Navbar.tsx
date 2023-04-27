import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { useAccount } from 'wagmi';

import type { Profile } from '@/generated';
import { useProfilesQuery } from '@/generated';

import FavouriteIcon from './FavouriteIcon';
import MomokaLogo from './MomokaLogo';
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
    <nav className="fixed z-10 mx-auto w-full max-w-full bg-[#FBEEED] px-2 dark:bg-[#565467] sm:px-6 lg:px-14">
      <div className="flex h-16 items-center justify-between">
        <Link href="/">
          <MomokaLogo className="h-10" />
        </Link>
        <div className="flex items-center space-x-2 text-[#383838] dark:text-white md:space-x-5">
          <Link
            href="/favorites"
            className="group hidden items-center space-x-2 hover:text-[#C58C89] hover:dark:text-[#F5D4D2] md:flex"
          >
            <FavouriteIcon className="mb-0.5 h-5 w-5" isFavourite={false} />
            <span>Favorited</span>
          </Link>
          <Network />
          <button
            className="hidden hover:text-[#C58C89] hover:dark:text-[#F5D4D2] md:block"
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
                className="px-5 py-3 text-[13px] font-bold uppercase leading-[13px]"
                onClick={() => {
                  openConnectModal?.();
                }}
              >
                Connect <span className="hidden md:inline">Wallet</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
