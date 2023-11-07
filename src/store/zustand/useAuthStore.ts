import jwt from 'jsonwebtoken';
import { IUserInfo } from '@/types/auth';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type AuthState = {
  userInfo: IUserInfo;
  accessToken: string;
  setAccessToken: (token: string) => void;
  setUserInfoInit: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userInfo: {
        userid: 0,
        email: '',
        iat: 0,
        exp: 0,
      },
      accessToken: '',
      setAccessToken: (token) => {
        set({ accessToken: token });
        const userInfo = jwt.decode(token);
        if (userInfo) {
          set({ userInfo: userInfo as IUserInfo });
        }
      },
      setUserInfoInit: () => {
        set({
          userInfo: {
            userid: 0,
            email: '',
            iat: 0,
            exp: 0,
          },
          accessToken: '',
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userInfo: state.userInfo,
        accessToken: state.accessToken,
      }),
    }
  )
);

export default useAuthStore;
