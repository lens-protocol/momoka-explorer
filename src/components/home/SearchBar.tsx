import { ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { useDataAvailabilityTransactionLazyQuery } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import { useRecentsPersistStore } from '@/store/recents';
import useDebounce from '@/utils/useDebounce';
import useOutsideClick from '@/utils/useOutsideClick';

import { Loader } from '../ui/Loader';

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
    if (keyword.trim().length) {
      const { data } = await fetchTxn({
        variables: { request: { id: keyword.trim() as string } }
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
      className="relative flex w-full rounded-xl border bg-white px-2 dark:border-[#16161B] dark:bg-[#1C1B22] md:max-w-[50%]"
    >
      <span className="flex select-none items-center pl-3">
        {loading ? <Loader /> : <MagnifyingGlassIcon className="h-5 w-5 opacity-50" />}
      </span>
      <input
        ref={inputElement}
        type="text"
        onChange={(event) => setKeyword(event.target.value)}
        onClick={() => setInputClicked(true)}
        placeholder="Search by transaction or publication Id"
        autoComplete="off"
        autoCorrect="false"
        style={{ boxShadow: 'none' }}
        className={clsx(
          'flex-1 border-0 border-none bg-transparent px-6 py-4 text-sm text-[#16161B] placeholder:text-gray-400 focus:outline-none dark:text-gray-100 sm:leading-6 md:text-lg',
          loading && 'animate-pulse'
        )}
      />
      {keyword.length && txn?.transactionId ? (
        <div className="absolute left-0 right-0 top-16 flex w-full rounded-xl border bg-white p-2 px-2 dark:border-[#16161B] dark:bg-[#1C1B22]">
          <Link
            href={`/tx/${txn?.transactionId}`}
            onClick={() => storeToRecents(txn)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-2 hover:bg-gray-100 hover:dark:bg-[#16161B]"
          >
            {txn?.transactionId} <span className="text-xs opacity-50">{txn.publicationId}</span>
          </Link>
        </div>
      ) : recentsByNetwork.length && inputClicked && !loading ? (
        <div className="absolute left-0 right-0 top-16 z-10 flex w-full flex-col rounded-xl border bg-white p-2 px-2 shadow dark:border-[#16161B] dark:bg-[#1C1B22]">
          {recentsByNetwork.map((recent) => (
            <Link
              key={recent.transactionId}
              href={`/tx/${recent.transactionId}`}
              className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 hover:bg-gray-100 hover:dark:bg-[#16161B]"
            >
              <span className="flex items-center gap-2 text-sm opacity-80">
                <ClockIcon className="h-4 w-4" />
                <span>{recent.transactionId}</span>
              </span>
              <span className="text-xs opacity-50">{recent.publicationId}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
