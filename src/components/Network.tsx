import { Listbox, Transition } from '@headlessui/react';
import { BeakerIcon, ChevronUpDownIcon, CubeIcon, WrenchIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';
import { useAccount } from 'wagmi';

import { FEATURE_FLAGS } from '@/constants';
import { useAppPersistStore } from '@/store/app';
import getIsFeatureEnabled from '@/utils/getIsFeatureEnabled';

export const allNetworks = [
  { name: 'Mainnet', id: 'mainnet', icon: <CubeIcon className="h-4 w-4" /> },
  { name: 'Staging', id: 'staging', icon: <BeakerIcon className="h-4 w-4" /> },
  { name: 'Testnet', id: 'testnet', icon: <WrenchIcon className="h-4 w-4" /> }
];

const Network = () => {
  const { address } = useAccount();
  const networks = getIsFeatureEnabled(FEATURE_FLAGS.STAGING_ENVIRONMENT, address as string)
    ? allNetworks
    : allNetworks.filter((n) => n.id !== 'staging');
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const setSelectedEnvironment = useAppPersistStore((state) => state.setSelectedEnvironment);

  const getIcon = (nId: string) => {
    return networks.find((n) => n.id === nId)?.icon;
  };

  return (
    <Listbox
      name="network"
      defaultValue={selectedEnvironment}
      value={selectedEnvironment}
      onChange={(selected) => {
        setSelectedEnvironment(selected);
        setTimeout(() => {
          location.reload();
        }, 100);
      }}
    >
      <div className="relative">
        <Listbox.Button className="relative w-full rounded-lg py-1 pl-3 pr-8 text-left focus:outline-none">
          <span className="block truncate">{selectedEnvironment?.name ?? 'Mainnet'}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 mt-2 w-36 overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#1C1B22] sm:text-sm">
            {networks.map((network, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 ${
                    active
                      ? 'bg-green-100 text-[#3D794E] dark:bg-[#3D794E]/30 dark:text-[#D0DBFF]'
                      : 'text-gray-900 dark:text-gray-100'
                  }`
                }
                value={network}
              >
                <span className="block truncate">{network.name}</span>
                {network.id === selectedEnvironment.id ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 dark:text-green-300">
                    {getIcon(selectedEnvironment.id)}
                  </span>
                ) : null}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Network;
