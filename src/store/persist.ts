import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppPerisistState {
  selectedEnvironment: string;
  setSelectedEnvironment: (env: string) => void;
}

export const usePersistStore = create(
  persist<AppPerisistState>(
    (set) => ({
      selectedEnvironment: '',
      setSelectedEnvironment: (selectedEnvironment) => set({ selectedEnvironment })
    }),
    {
      name: 'da.store'
    }
  )
);

export default usePersistStore;
