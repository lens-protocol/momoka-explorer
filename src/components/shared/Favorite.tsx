import type { FC, ReactNode } from 'react';

import type { MomokaTransaction } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import type { MomokaTransactionTransactionWithNetwork } from '@/store/favorites';
import { useFavoritesPersistStore } from '@/store/favorites';
import isInFavorites from '@/utils/isInFavorites';

interface FavoriteProps {
  momokaTransaction: MomokaTransaction;
  renderItem: (isFavorite: boolean) => ReactNode;
}

const Favorite: FC<FavoriteProps> = ({ momokaTransaction, renderItem }) => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);
  const addFavorite = useFavoritesPersistStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesPersistStore((state) => state.removeFavorite);
  const favorites = useFavoritesPersistStore((state) => state.favorites);

  const isFavorite = isInFavorites(
    favorites,
    momokaTransaction?.transactionId as string,
    selectedEnvironment.id
  );

  return (
    <button
      className="group ml-auto flex"
      onClick={(e) => {
        e.stopPropagation();

        isFavorite
          ? removeFavorite(
              momokaTransaction as MomokaTransactionTransactionWithNetwork,
              selectedEnvironment.id
            )
          : addFavorite(momokaTransaction as MomokaTransactionTransactionWithNetwork, selectedEnvironment.id);
      }}
    >
      {renderItem(isFavorite)}
    </button>
  );
};

export default Favorite;
