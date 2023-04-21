import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { DataAvailabilityTransactionUnion } from '@/generated';

export type DataAvailabilityTransactionUnionWithNetwork = DataAvailabilityTransactionUnion & {
  network: string;
};

interface AppRecentsState {
  recents: DataAvailabilityTransactionUnionWithNetwork[];
  setRecents: (favorite: DataAvailabilityTransactionUnion, network: string) => void;
}

export const useRecentsPersistStore = create(
  persist<AppRecentsState>(
    (set) => ({
      recents: [],
      setRecents: (recent, network) => {
        set((state) => ({
          recents: [...state.recents, { ...recent, network }]
        }));
      }
    }),
    { name: 'recents' }
  )
);
