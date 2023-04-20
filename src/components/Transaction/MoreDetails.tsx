import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { usePublicationQuery } from '@/generated';

import { Meta } from '.';

interface MoreDetailsProps {
  dataAvailabilityTransaction: DataAvailabilityTransactionUnion;
}

const MoreDetails: FC<MoreDetailsProps> = ({ dataAvailabilityTransaction }) => {
  const [transactionData, setTransactionData] = useState<any>(null);

  const { data } = usePublicationQuery({
    variables: { request: { publicationId: dataAvailabilityTransaction.publicationId } },
    skip: !dataAvailabilityTransaction.publicationId
  });

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
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-3 dark:border-gray-950 dark:bg-gray-800 md:px-5">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 text-left font-medium tracking-wide opacity-70 hover:opacity-100 focus:outline-none">
              <span>See more details</span>
              <ChevronUpIcon className={`${!open ? 'rotate-180 transform' : ''} h-5 w-5`} />
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2 text-sm">
              <Meta title="On-chain Content URI" value={data?.publication?.onChainContentURI} />
              <Meta
                title="Transaction Data"
                value={
                  transactionData ? (
                    <div className="max-h-[20rem] w-full overflow-auto rounded-lg border bg-gray-100 p-5 leading-5 dark:border-gray-900 dark:bg-gray-700">
                      <ReactJson
                        src={transactionData}
                        enableClipboard={false}
                        collapsed={2}
                        indentWidth={2}
                      />
                    </div>
                  ) : null
                }
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MoreDetails;
