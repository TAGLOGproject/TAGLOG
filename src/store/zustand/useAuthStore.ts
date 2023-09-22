import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type persistState = {
  accessToken: '';
  setAccessToken: () => void;
  useInfo: {
    userId: string;
    name: string;
    email: string;
  };
};

const useAuthStore = create<persistState>()(
  persist(
    (set, get) => ({
      accessToken: '',
      setAccessToken: () => set({ accessToken: get().accessToken }),
      useInfo: {
        userId: '',
        name: '',
        email: '',
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ accessToken: state.accessToken }),
    }
  )
);

export default useAuthStore;
