import { create } from 'zustand';

export type modalState = {
  isModalOpen: boolean;
  setModal: () => void;
};

const useModalStore = create<modalState>((set) => ({
  isModalOpen: false,
  setModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export default useModalStore;
