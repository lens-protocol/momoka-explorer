import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  lastFinalizedTransaction: string;
  setLastFinalizedTransaction: (id: string) => void;
}

export const useAppStore = create<State>((set) => ({
  lastFinalizedTransaction: '',
  setLastFinalizedTransaction: (lastFinalizedTransaction) => set({ lastFinalizedTransaction })
}));

interface AppPersistState {
  selectedEnvironment: { name: string; id: string };
  setSelectedEnvironment: (env: { name: string; id: string }) => void;
}

export const useAppPersistStore = create(
  persist<AppPersistState>(
    (set) => ({
      selectedEnvironment: { name: 'Staging', id: 'staging' },
      setSelectedEnvironment: (selectedEnvironment) => set({ selectedEnvironment })
    }),
    { name: 'explorer' }
  )
);
