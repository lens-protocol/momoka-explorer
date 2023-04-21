import { create } from 'zustand';

interface State {
  lastFinalizedTransaction: string;
  setLastFinalizedTransaction: (id: string) => void;
  selectedEnvironment: { name: string; id: string };
  setSelectedEnvironment: (env: { name: string; id: string }) => void;
}

export const useAppStore = create<State>((set) => ({
  lastFinalizedTransaction: '',
  setLastFinalizedTransaction: (lastFinalizedTransaction) => set({ lastFinalizedTransaction }),
  selectedEnvironment: { name: 'Mainnet', id: 'mainnet' },
  setSelectedEnvironment: (selectedEnvironment) => set({ selectedEnvironment })
}));
