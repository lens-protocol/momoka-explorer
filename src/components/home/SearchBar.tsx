import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { useDataAvailabilityTransactionLazyQuery } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import { useRecentsPersistStore } from '@/store/recents';
import useDebounce from '@/utils/useDebounce';
import useOutsideClick from '@/utils/useOutsideClick';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [inputClicked, setInputClicked] = useState(false);
  const [txn, setTxn] = useState<DataAvailabilityTransactionUnion>();

  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const recents = useRecentsPersistStore((state) => state.recents);
  const setRecents = useRecentsPersistStore((state) => state.setRecents);

  const recentsByNetwork = recents.filter((txn) => txn.network === selectedEnvironment.id);

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

  const storeToRecents = (txn: DataAvailabilityTransactionUnion) => {
    const data = {
      network: selectedEnvironment.id,
      ...txn
    };
    setRecents(data, selectedEnvironment.id);
  };

  const resultsRef = useRef(null);
  useOutsideClick(resultsRef, () => {
    setKeyword('');
    setInputClicked(false);
  });

  useEffect(() => {
    onDebounce();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div
      ref={resultsRef}
      className="relative flex w-full rounded-xl border bg-white px-2 dark:border-gray-950 dark:bg-gray-800 md:max-w-[50%]"
    >
      <span className="flex select-none items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 opacity-50" />
      </span>
      <input
        ref={inputElement}
        type="text"
        onChange={(event) => setKeyword(event.target.value)}
        onClick={() => setInputClicked(true)}
        placeholder="Search transaction Id"
        autoComplete="off"
        autoCorrect="false"
        style={{ boxShadow: 'none' }}
        className={clsx(
          'flex-1 border-0 border-none bg-transparent px-6 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-gray-100 sm:leading-6 md:text-lg',
          loading && 'animate-pulse'
        )}
      />
      {keyword.length && txn?.transactionId ? (
        <div className="absolute left-0 right-0 top-16 flex w-full rounded-xl border bg-white p-2 px-2 dark:border-gray-950 dark:bg-gray-800">
          <Link
            href={`/tx/${txn?.transactionId}`}
            onClick={() => storeToRecents(txn)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-2 hover:bg-gray-100 hover:dark:bg-gray-900"
          >
            {txn?.transactionId} <span className="text-xs opacity-50">{txn.publicationId}</span>
          </Link>
        </div>
      ) : recentsByNetwork.length && inputClicked ? (
        <div className="absolute left-0 right-0 top-16 flex w-full rounded-xl border bg-white p-2 px-2 dark:border-gray-950 dark:bg-gray-800">
          {recentsByNetwork.map((recent) => (
            <Link
              key={recent.transactionId}
              href={`/tx/${recent.transactionId}`}
              className="flex w-full items-center justify-between rounded-xl px-4 py-2 hover:bg-gray-100 hover:dark:bg-gray-900"
            >
              {recent.transactionId} <span className="text-xs opacity-50">{recent.publicationId}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
