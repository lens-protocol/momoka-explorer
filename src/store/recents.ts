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
    (set, get) => ({
      recents: [],
      setRecents: (recent, network) => {
        const { recents } = get();
        // take only first 4 items from recents
        let allRecents = recents.splice(0, 4);
        allRecents = [{ ...recent, network }, ...allRecents];
        // remove duplicates from allRecents
        allRecents = allRecents.filter(
          (item, index) => allRecents.findIndex((i) => i.transactionId === item.transactionId) === index
        );
        set({
          recents: allRecents
        });
      }
    }),
    { name: 'recents' }
  )
);
