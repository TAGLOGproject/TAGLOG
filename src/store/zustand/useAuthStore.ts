import { IUserInfo } from '@/types/auth';
import { create } from 'zustand';

export type AuthState = {
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
};

const useAuthStore = create<AuthState>((set, get) => ({
  userInfo: {
    userid: 0,
    email: '',
    iat: 0,
    exp: 0,
  },
  setUserInfo: (userInfo) => {
    set({ userInfo });
  },
}));

export default useAuthStore;
