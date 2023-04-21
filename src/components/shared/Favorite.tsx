import type { FC, ReactNode } from 'react';

import type { DataAvailabilityTransactionUnion } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import { useFavoritesPersistStore } from '@/store/favorites';
import isInFavorites from '@/utils/isInFavorites';

interface FavoriteProps {
  dataAvailabilityTransaction: DataAvailabilityTransactionUnion;
  renderItem: (isFavorite: boolean) => ReactNode;
}

const Favorite: FC<FavoriteProps> = ({ dataAvailabilityTransaction, renderItem }) => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const addFavorite = useFavoritesPersistStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesPersistStore((state) => state.removeFavorite);
  const favorites = useFavoritesPersistStore((state) => state.favorites);

  const isFavorite = isInFavorites(
    favorites,
    dataAvailabilityTransaction?.transactionId as string,
    selectedEnvironment.id
  );

  return (
    <button
      className="flex"
      onClick={() => {
        isFavorite
          ? removeFavorite(
              dataAvailabilityTransaction as DataAvailabilityTransactionUnion,
              selectedEnvironment.id
            )
          : addFavorite(
              dataAvailabilityTransaction as DataAvailabilityTransactionUnion,
              selectedEnvironment.id
            );
      }}
    >
      {renderItem(isFavorite)}
    </button>
  );
};

export default Favorite;
