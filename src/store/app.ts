import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IS_STAGING_ENVIRONMENT } from '@/constants';
import type { DataAvailabilityTransactionUnion } from '@/generated';

interface State {
  lastFinalizedTransaction: DataAvailabilityTransactionUnion | null;
  setLastFinalizedTransaction: (id: DataAvailabilityTransactionUnion) => void;
}

export const useAppStore = create<State>((set) => ({
  lastFinalizedTransaction: null,
  setLastFinalizedTransaction: (lastFinalizedTransaction) => set({ lastFinalizedTransaction })
}));

interface AppPersistState {
  selectedEnvironment: { name: string; id: string };
  setSelectedEnvironment: (env: { name: string; id: string }) => void;
}

export const useAppPersistStore = create(
  persist<AppPersistState>(
    (set) => ({
      selectedEnvironment: IS_STAGING_ENVIRONMENT
        ? { name: 'Staging', id: 'staging' }
        : { name: 'Mainnet', id: 'mainnet' },
      setSelectedEnvironment: (selectedEnvironment) => set({ selectedEnvironment })
    }),
    { name: 'explorer' }
  )
);
