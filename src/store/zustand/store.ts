import { create } from 'zustand';

export type themeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const useStore = create<themeState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state: themeState) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export default useStore;
