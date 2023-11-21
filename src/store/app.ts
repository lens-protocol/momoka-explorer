import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { MomokaSubmitterResult, MomokaTransaction } from '@/generated';

interface State {
  lastFinalizedTransaction: MomokaTransaction | null;
  setLastFinalizedTransaction: (id: MomokaTransaction) => void;
  allTransactionsCount: number;
  setAllTransactionsCount: (latestTransactions: number) => void;
  topSubmitter: MomokaSubmitterResult | null;
  setTopSubmitter: (topSubmitter: MomokaSubmitterResult) => void;
  totalSpent: number;
  setTotalSpent: (totalSpent: number) => void;
}

export const useAppStore = create<State>((set) => ({
  lastFinalizedTransaction: null,
  setLastFinalizedTransaction: (lastFinalizedTransaction) => set({ lastFinalizedTransaction }),
  allTransactionsCount: 0,
  setAllTransactionsCount: (allTransactionsCount) => set({ allTransactionsCount }),
  topSubmitter: null,
  setTopSubmitter: (topSubmitter: MomokaSubmitterResult) => set({ topSubmitter }),
  totalSpent: 0,
  setTotalSpent: (totalSpent) => set({ totalSpent })
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
