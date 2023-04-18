import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef } from 'react';

const SearchBar = () => {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <div className="flex w-full rounded-xl border bg-white px-2 md:max-w-[50%]">
      <span className="flex select-none items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 opacity-50" />
      </span>
      <input
        ref={inputElement}
        type="text"
        className="flex-1 bg-transparent px-6 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:leading-6 md:text-lg"
        placeholder="Search transactions"
        autoComplete="off"
        autoFocus
      />
    </div>
  );
};

export default SearchBar;
