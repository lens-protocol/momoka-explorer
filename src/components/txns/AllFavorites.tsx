import type { FC } from 'react';

import { useAppPersistStore } from '@/store/app';
import type { DataAvailabilityTransactionUnionWithNetwork } from '@/store/favorites';
import { useFavoritesPersistStore } from '@/store/favorites';

import SingleTransaction from './SingleTransaction';

const AllFavorites: FC = () => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const favorites = useFavoritesPersistStore((state) => state.favorites);

  const favoritesByNetwork = favorites.filter((txn) => txn.network === selectedEnvironment.id);
  const favoritesCount = favoritesByNetwork.length;

  return (
    <div className="relative mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 px-2 py-4 dark:border-[#16161B] dark:bg-[#1C1B22] md:p-5">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium opacity-90">All Favorites</h1>
          <p className="text-sm opacity-60">{`${favoritesCount} favorites found`}</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-y-1">
          <thead className="text-left">
            <tr>
              <th className="px-3 text-sm font-normal">Txn Id</th>
              <th className="w-20 px-4 text-sm font-normal">Action</th>
              <th className="px-3 text-sm font-normal">Age</th>
              <th className="px-3 text-sm font-normal">From</th>
              <th className="px-3 text-sm font-normal">Via</th>
            </tr>
          </thead>
          <tbody>
            {favoritesByNetwork.map((txn: DataAvailabilityTransactionUnionWithNetwork) => {
              return <SingleTransaction key={txn.transactionId} txn={txn} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFavorites;