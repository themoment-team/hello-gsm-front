import create from 'zustand';

interface storeType {
  showPassModal: boolean;
  setShowPassModal: () => void;
}

const useStore = create<storeType>(set => ({
  showPassModal: false,
  setShowPassModal: () =>
    set(state => ({ showPassModal: !state.showPassModal })),
}));

export default useStore;
