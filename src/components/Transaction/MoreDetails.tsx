import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

import type { MomokaTransaction } from '@/generated';
import { usePublicationQuery } from '@/generated';

import Card from '../ui/Card';
import { Meta } from '.';

interface MoreDetailsProps {
  momokaTransaction: MomokaTransaction;
}

const MoreDetails: FC<MoreDetailsProps> = ({ momokaTransaction }) => {
  const { resolvedTheme } = useTheme();
  const [transactionData, setTransactionData] = useState<any>(null);

  const { data } = usePublicationQuery({
    variables: { request: { forId: momokaTransaction.publication.id } },
    skip: !momokaTransaction.publication.id
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://arweave.net/${momokaTransaction.transactionId}`);
      const dataJson = await data.json();
      setTransactionData(dataJson);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="mt-6 bg-[#FFFFFF] !p-5 dark:bg-[#2C2B35]">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 text-left font-medium tracking-wide opacity-70 hover:opacity-100 focus:outline-none">
              <span>See more details</span>
              <ChevronUpIcon className={`${!open ? 'rotate-180 transform' : ''} h-5 w-5`} />
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2 text-sm">
              {(data?.publication as any)?.metadata?.rawUri ? (
                <Meta title="On-chain Content URI" value={(data?.publication as any)?.metadata.rawUri} />
              ) : null}
              <Meta
                title="Transaction Data"
                value={
                  transactionData ? (
                    <div className="overflow-auto rounded-lg border bg-gray-100 leading-5 dark:border-gray-900 dark:bg-gray-700">
                      <ReactJson
                        style={{ padding: 10 }}
                        theme={resolvedTheme === 'dark' ? 'apathy' : 'rjv-default'}
                        src={transactionData}
                        enableClipboard={false}
                        collapsed={1}
                        indentWidth={2}
                      />
                    </div>
                  ) : null
                }
              />
              {/* <Meta title="Verify with a node" value={<Verify momokaTransaction={momokaTransaction} />} /> */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Card>
  );
};

export default MoreDetails;
