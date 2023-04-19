import { Listbox, Transition } from '@headlessui/react';
import { BeakerIcon, ChevronUpDownIcon, CubeIcon, WrenchIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useState } from 'react';

const networks = [
  { name: 'Mainnet', icon: <CubeIcon className="h-4 w-4" /> },
  { name: 'Staging', icon: <BeakerIcon className="h-4 w-4" /> },
  { name: 'Testnet', icon: <WrenchIcon className="h-4 w-4" /> }
];

const Network = () => {
  const [selected, setSelected] = useState(networks[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button className="relative w-full rounded-lg py-2 pl-3 pr-8 text-left text-sm focus:outline-none">
          <span className="block truncate">{selected.name}</span>
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
          <Listbox.Options className="absolute right-0 mt-2 w-36 overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 sm:text-sm">
            {networks.map((network, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 ${
                    active
                      ? 'bg-green-50 text-green-900 dark:bg-green-900 dark:text-green-100'
                      : 'text-gray-900 dark:text-gray-100'
                  }`
                }
                value={network}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {network.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 dark:text-green-300">
                        {network.icon}
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Network;
