import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { MomokaTransaction } from '@/generated';

import type { MomokaTransactionTransactionWithNetwork } from './favorites';

interface AppRecentsState {
  recents: MomokaTransactionTransactionWithNetwork[];
  setRecents: (favorite: MomokaTransaction, network: string) => void;
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
