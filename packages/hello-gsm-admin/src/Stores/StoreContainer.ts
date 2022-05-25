import create from 'zustand';

interface storeType {
  showPassModal: boolean;
  passModalRegistrationNumber: number;
  passModalName: string;
  logged: boolean;

  setShowPassModal: () => void;
  setPassModalRegistrationNumber: (registrationNumber: number) => void;
  setPassModalName: (name: string) => void;
  setLogged: () => void;
}

const useStore = create<storeType>(set => ({
  showPassModal: false,
  passModalRegistrationNumber: 0,
  passModalName: '',
  logged: false,

  setShowPassModal: () =>
    set(state => ({ showPassModal: !state.showPassModal })),
  setPassModalRegistrationNumber: registrationNumber =>
    set({ passModalRegistrationNumber: registrationNumber }),
  setPassModalName: name => set({ passModalName: name }),
  setLogged: () => set(state => ({ logged: !state.logged })),
}));

export default useStore;
