import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { DataAvailabilityTransactionUnion } from '@/generated';

export type DataAvailabilityTransactionUnionWithNetwork = DataAvailabilityTransactionUnion & {
  network: string;
};

interface AppFavoritesState {
  favorites: DataAvailabilityTransactionUnionWithNetwork[];
  addFavorite: (favorite: DataAvailabilityTransactionUnion, network: string) => void;
  removeFavorite: (favorite: DataAvailabilityTransactionUnion, network: string) => void;
  getFavorites: (network: string) => DataAvailabilityTransactionUnionWithNetwork[];
}

export const useFavoritesPersistStore = create(
  persist<AppFavoritesState>(
    (set, get) => ({
      favorites: [],
      addFavorite: (favorite, network) => {
        set((state) => ({
          favorites: [...state.favorites, { ...favorite, network }]
        }));
      },
      removeFavorite: (favorite, network) => {
        set((state) => ({
          favorites: state.favorites.filter(
            (f) => f.network !== network || f.transactionId !== favorite.transactionId
          )
        }));
      },
      getFavorites: (network) => {
        const { favorites } = get();
        return favorites.filter((f) => f.network === network);
      }
    }),
    { name: 'favorites' }
  )
);
