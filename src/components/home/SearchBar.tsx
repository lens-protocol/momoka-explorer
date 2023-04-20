import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { useDataAvailabilityTransactionLazyQuery } from '@/generated';
import useDebounce from '@/utils/useDebounce';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [txn, setTxn] = useState<DataAvailabilityTransactionUnion>();

  const debouncedValue = useDebounce<string>(keyword, 500);
  const inputElement = useRef<HTMLInputElement>(null);

  const [fetchTxn, { loading }] = useDataAvailabilityTransactionLazyQuery();

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const onDebounce = async () => {
    if (keyword.trim().length === 43) {
      const { data } = await fetchTxn({
        variables: { request: { transactionId: keyword.trim() as string } }
      });
      setTxn(data?.dataAvailabilityTransaction as DataAvailabilityTransactionUnion);
    }
  };

  useEffect(() => {
    onDebounce();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="relative flex w-full rounded-xl border bg-white px-2 dark:border-gray-950 dark:bg-gray-800 md:max-w-[50%]">
      <span className="flex select-none items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 opacity-50" />
      </span>
      <input
        ref={inputElement}
        type="text"
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="Search transaction Id"
        autoComplete="off"
        autoCorrect="false"
        className={clsx(
          'flex-1 bg-transparent px-6 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-gray-100 sm:leading-6 md:text-lg',
          loading && 'animate-pulse'
        )}
      />
      {keyword.length && txn?.transactionId ? (
        <div className="absolute left-0 right-0 top-16 flex w-full rounded-xl border bg-white p-2 px-2 dark:border-gray-950 dark:bg-gray-800">
          <Link
            href={`/tx/${txn?.transactionId}`}
            className="flex w-full items-center justify-between rounded-xl px-4 py-2 hover:bg-gray-100 hover:dark:bg-gray-900"
          >
            {txn?.transactionId} <span className="text-xs opacity-50">{txn.publicationId}</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
