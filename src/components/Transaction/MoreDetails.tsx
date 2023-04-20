import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';

import { Meta } from '.';

interface MoreDetailsProps {
  dataAvailabilityTransaction: DataAvailabilityTransactionUnion;
}

const MoreDetails: FC<MoreDetailsProps> = ({ dataAvailabilityTransaction }) => {
  const [transactionData, setTransactionData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://arweave.net/${dataAvailabilityTransaction.transactionId}`);
      const dataJson = await data.json();
      setTransactionData(dataJson);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-gray-950 dark:bg-gray-800 md:p-5">
      {JSON.stringify(transactionData)}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left font-medium tracking-wide">
              <span>Click to see more details</span>
              <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2 text-sm">
              <Meta title="Transaction Data" value="gm" />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MoreDetails;
