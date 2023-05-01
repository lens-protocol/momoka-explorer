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
      className="relative flex w-full rounded-full bg-[#FFFFFF] px-2 dark:bg-[#2C2B35] md:max-w-[50%]"
    >
      <span className="flex select-none items-center pl-3">
        {loading ? (
          <Loader className="h-6 w-6" />
        ) : (
          <MagnifyingGlassIcon className="h-6 w-6 dark:text-white" />
        )}
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
          'flex-1 border-0 border-none bg-transparent px-4 py-4 text-sm text-[#16161B] placeholder:text-gray-400 focus:outline-none dark:text-white/50 sm:leading-6 md:text-lg',
          loading && 'animate-pulse'
        )}
      />
      {keyword.length && txn?.transactionId ? (
        <div className="absolute left-0 right-0 top-14 flex w-full rounded-2xl bg-[#F8FBF9] p-2 px-2 dark:bg-[#2C2B35] md:top-16">
          <Link
            href={`/tx/${txn?.transactionId}`}
            onClick={() => storeToRecents(txn)}
            className="flex w-full items-center justify-between space-x-2 rounded-xl px-4 py-2 hover:bg-[#FFFFFF] hover:dark:bg-[#565467]"
          >
            <span>{txn?.transactionId}</span>{' '}
            <span className="truncate text-xs opacity-50">{txn.publicationId}</span>
          </Link>
        </div>
      ) : recentsByNetwork.length && inputClicked && !loading ? (
        <div className="absolute left-0 right-0 top-14 z-10 flex w-full flex-col rounded-2xl bg-[#FFFFFF] p-2 px-2 shadow dark:bg-[#2C2B35] md:top-16">
          {recentsByNetwork.map((recent) => (
            <Link
              key={recent.transactionId}
              href={`/tx/${recent.transactionId}`}
              className="flex w-full items-center justify-between space-x-2 rounded-xl px-4 py-2.5 hover:bg-[#FBEEED] hover:dark:bg-[#565467]"
            >
              <span className="flex items-center gap-2 truncate text-sm opacity-80">
                <ClockIcon className="h-4 w-4 flex-none" />
                <span className="truncate">{recent.transactionId}</span>
              </span>
              <span className="hidden truncate text-xs opacity-50 lg:inline">{recent.publicationId}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
