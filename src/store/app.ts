import { create } from 'zustand';

interface State {
  lastFinalizedTransaction: string;
  setLastFinalizedTransaction: (id: string) => void;
}

export const useAppStore = create<State>((set) => ({
  lastFinalizedTransaction: '',
  setLastFinalizedTransaction: (lastFinalizedTransaction) => set({ lastFinalizedTransaction })
}));

export default useAppStore;
