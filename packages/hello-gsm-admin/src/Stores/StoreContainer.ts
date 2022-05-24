import create from 'zustand';

interface storeType {
  showPassModal: boolean;
  logged: boolean;

  setShowPassModal: () => void;
  setLogged: () => void;
}

const useStore = create<storeType>(set => ({
  showPassModal: false,
  logged: false,

  setShowPassModal: () =>
    set(state => ({ showPassModal: !state.showPassModal })),
  setLogged: () => set(state => ({ logged: !state.logged })),
}));

export default useStore;
