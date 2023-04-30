import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { DataAvailabilitySubmitterResult, DataAvailabilityTransactionUnion } from '@/generated';

interface State {
  lastFinalizedTransaction: DataAvailabilityTransactionUnion | null;
  setLastFinalizedTransaction: (id: DataAvailabilityTransactionUnion) => void;
  allTransactionsCount: number;
  setAllTransactionsCount: (latestTransactions: number) => void;
  topSubmitter: DataAvailabilitySubmitterResult | null;
  setTopSubmitter: (topSubmitter: DataAvailabilitySubmitterResult) => void;
  totalSpent: number;
  setTotalSpent: (totalSpent: number) => void;
  maticMarketPrice: number;
  setMaticMarketPrice: (maticMarketPrice: number) => void;
}

export const useAppStore = create<State>((set) => ({
  lastFinalizedTransaction: null,
  setLastFinalizedTransaction: (lastFinalizedTransaction) => set({ lastFinalizedTransaction }),
  allTransactionsCount: 0,
  setAllTransactionsCount: (allTransactionsCount) => set({ allTransactionsCount }),
  topSubmitter: null,
  setTopSubmitter: (topSubmitter: DataAvailabilitySubmitterResult) => set({ topSubmitter }),
  totalSpent: 0,
  setTotalSpent: (totalSpent) => set({ totalSpent }),
  maticMarketPrice: 0,
  setMaticMarketPrice: (maticMarketPrice) => set({ maticMarketPrice })
}));

interface AppPersistState {
  selectedEnvironment: { name: string; id: string };
  setSelectedEnvironment: (env: { name: string; id: string }) => void;
}

export const useAppPersistStore = create(
  persist<AppPersistState>(
    (set) => ({
      selectedEnvironment: { name: 'Mainnet', id: 'mainnet' },
      setSelectedEnvironment: (selectedEnvironment) => set({ selectedEnvironment })
    }),
    { name: 'explorer' }
  )
);
