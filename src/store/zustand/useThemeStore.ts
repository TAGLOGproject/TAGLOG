import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type persistState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const useThemeStore = create<persistState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
