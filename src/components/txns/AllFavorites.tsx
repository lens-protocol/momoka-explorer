import type { FC } from 'react';

import { useAppPersistStore } from '@/store/app';
import type { DataAvailabilityTransactionUnionWithNetwork } from '@/store/favorites';
import { useFavoritesPersistStore } from '@/store/favorites';

import EmptyState from '../shared/EmptyState';
import Card from '../ui/Card';
import SingleTransaction from './SingleTransaction';

const AllFavorites: FC = () => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const favorites = useFavoritesPersistStore((state) => state.favorites);

  const favoritesByNetwork = favorites.filter((txn) => txn.network === selectedEnvironment.id);
  const favoritesCount = favoritesByNetwork.length;

  return (
    <Card className="mt-6">
      <div className="left-0 right-0 flex flex-wrap items-center justify-between gap-y-3">
        <div>
          <h1 className="font-medium md:text-[28px]">All Favorites</h1>
          <p className="text-sm opacity-60">{`${favoritesCount} favorites found`}</p>
        </div>
      </div>
      <div className="mt-7 overflow-x-auto">
        {favoritesByNetwork?.length === 0 ? (
          <EmptyState message="No favourites found" />
        ) : (
          <table className="min-w-full table-auto border-separate border-spacing-y-3">
            <thead className="text-left">
              <tr className="font-gintoNord">
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Txn Id
                </th>
                <th className="px-3 text-center text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Action
                </th>
                <th className="px-3 text-center text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">
                  Age
                </th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">From</th>
                <th className="px-3 text-sm font-medium uppercase leading-[15px] tracking-[-0.2px]">Via</th>
              </tr>
            </thead>
            <tbody>
              {favoritesByNetwork.map((txn: DataAvailabilityTransactionUnionWithNetwork) => {
                return <SingleTransaction key={txn.transactionId} txn={txn} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </Card>
  );
};

export default AllFavorites;
