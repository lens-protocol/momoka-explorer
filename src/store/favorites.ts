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
  isInFavorites: (network: string, transactionId: string) => boolean;
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
      },
      isInFavorites: (network, transactionId) => {
        const { favorites } = get();
        return favorites.some((f) => f.network === network && f.transactionId === transactionId);
      }
    }),
    { name: 'explorer' }
  )
);
