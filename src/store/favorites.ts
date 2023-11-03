import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { MomokaTransaction } from '@/generated';

export type MomokaTransactionTransactionWithNetwork = MomokaTransaction & {
  network: string;
};

interface AppFavoritesState {
  favorites: MomokaTransactionTransactionWithNetwork[];
  addFavorite: (favorite: MomokaTransactionTransactionWithNetwork, network: string) => void;
  removeFavorite: (favorite: MomokaTransactionTransactionWithNetwork, network: string) => void;
  getFavorites: (network: string) => MomokaTransactionTransactionWithNetwork[];
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
