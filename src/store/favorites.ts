import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { DataAvailabilityTransactionUnion } from '@/generated';

type DataAvailabilityTransactionUnionWithNetwork = DataAvailabilityTransactionUnion & {
  network: string;
};

interface AppFavoritesState {
  favorites: DataAvailabilityTransactionUnionWithNetwork[];
  addFavorite: (favorite: DataAvailabilityTransactionUnionWithNetwork) => void;
  removeFavorite: (favorite: DataAvailabilityTransactionUnionWithNetwork) => void;
  getFavorites: (network: string) => DataAvailabilityTransactionUnionWithNetwork[];
}

export const useFavoritesPersistStore = create(
  persist<AppFavoritesState>(
    (set, get) => ({
      favorites: [],
      addFavorite: (favorite) => {
        set((state) => ({
          favorites: [...state.favorites, favorite]
        }));
      },
      removeFavorite: (favorite) => {
        set((state) => ({
          favorites: state.favorites.filter((f) => f.transactionId !== favorite.transactionId)
        }));
      },
      getFavorites: (network) => {
        const { favorites } = get();
        return favorites.filter((f) => f.network === network);
      }
    }),
    { name: 'explorer' }
  )
);
