import create from 'zustand';

interface StoreType {
  showPassModal: boolean;
  passModalRegistrationNumber: number;
  passModalName: string;
  passModalPeriod: number;

  setShowPassModal: () => void;
  setPassModalRegistrationNumber: (registrationNumber: number) => void;
  setPassModalName: (name: string) => void;
  setPassModalPeriod: (period: number) => void;
}

const useStore = create<StoreType>(set => ({
  showPassModal: false,
  passModalRegistrationNumber: 0,
  passModalName: '',
  passModalPeriod: 1,

  setShowPassModal: () =>
    set(state => ({ showPassModal: !state.showPassModal })),
  setPassModalRegistrationNumber: registrationNumber =>
    set({ passModalRegistrationNumber: registrationNumber }),
  setPassModalName: name => set({ passModalName: name }),
  setPassModalPeriod: period => set({ passModalPeriod: period }),
}));

export default useStore;
