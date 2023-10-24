import { Menu, Transition } from '@headlessui/react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';
import { Fragment } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

import { type Profile, useProfilesManagedQuery } from '@/generated';
import formatAddress from '@/utils/formatAddress';
import getProfilePicture from '@/utils/getProfilePicture';

import { Button } from './ui/Button';

const UserMenu: FC = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const { data, loading } = useProfilesManagedQuery({
    variables: { request: { for: [address] } },
    skip: !address
  });
  const profiles = data?.profilesManaged.items as Profile[];

  if (loading) {
    return <div className="animate pulse ml-3 h-8 w-8 rounded-full bg-gray-100 dark:bg-[#2C2B35]" />;
  }

  if (!profiles?.length) {
    return (
      <Button
        className="px-5 py-3 text-[13px] font-bold uppercase leading-[13px]"
        onClick={() => disconnect?.()}
      >
        {address ? formatAddress(address, 4) : ''}
      </Button>
    );
  }

  const defaultProfile = profiles[0];

  return (
    <Menu as="div" className="relative ml-3 text-left">
      <div>
        <Menu.Button className="flex">
          <img
            className="mb-1 h-8 w-8 rounded-full"
            src={getProfilePicture(defaultProfile as Profile)}
            alt={defaultProfile?.handle}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#2C2B35]">
          <div className="px-1 py-1">
            {profiles?.map((profile: Profile) => (
              <Menu.Item key={profile.id}>
                {({ active }) => (
                  <Link
                    href={`/profile/${profile.id}`}
                    className={clsx(
                      'group flex w-full items-center space-x-1.5 rounded-lg px-4 py-2 text-sm',
                      active
                        ? 'bg-[#FBEEED] text-[#2C2B35] dark:bg-[#565467]/30 dark:text-[#D0DBFF]'
                        : 'text-gray-900 dark:text-gray-100'
                    )}
                  >
                    <img
                      className="h-4 w-4 rounded-full"
                      src={getProfilePicture(profile)}
                      alt={profile.handle}
                    />
                    <span className="truncate">{profile.handle}</span>
                  </Link>
                )}
              </Menu.Item>
            ))}
            <div className="mt-1 border-b border-b-gray-100 dark:border-gray-950" />
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(
                    'group mt-1 flex w-full items-center space-x-1.5 rounded-lg px-4 py-2 text-sm',
                    active ? 'bg-red-100 dark:bg-red-900/50' : 'text-gray-900 dark:text-gray-100'
                  )}
                  onClick={() => {
                    disconnect?.();
                  }}
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  <span>Disconnect</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
