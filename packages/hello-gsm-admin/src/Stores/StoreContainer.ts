import create from 'zustand';

interface storeType {
  showPassModal: boolean;
  showScoreModal: boolean;
  passModalRegistrationNumber: number;
  passModalName: string;
  passModalPeriod: number;

  setShowPassModal: () => void;
  setShowScoreModal: () => void;
  setPassModalRegistrationNumber: (registrationNumber: number) => void;
  setPassModalName: (name: string) => void;
  setPassModalPeriod: (period: number) => void;
}

const useStore = create<storeType>(set => ({
  showPassModal: false,
  showScoreModal: false,
  passModalRegistrationNumber: 0,
  passModalName: '',
  passModalPeriod: 1,

  setShowPassModal: () =>
    set(state => ({ showPassModal: !state.showPassModal })),
  setShowScoreModal: () =>
    set(state => ({ showScoreModal: !state.showScoreModal })),
  setPassModalRegistrationNumber: registrationNumber =>
    set({ passModalRegistrationNumber: registrationNumber }),
  setPassModalName: name => set({ passModalName: name }),
  setPassModalPeriod: period => set({ passModalPeriod: period }),
}));

export default useStore;
