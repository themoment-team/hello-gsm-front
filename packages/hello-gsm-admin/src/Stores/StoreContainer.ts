import create from 'zustand';

interface storeType {
  showPassModal: boolean;
  showScoreModal: boolean;
  modalRegistrationNumber: number;
  modalName: string;
  modalPeriod: 1 | 2;

  setShowPassModal: () => void;
  setShowScoreModal: () => void;
  setModalRegistrationNumber: (registrationNumber: number) => void;
  setModalName: (name: string) => void;
  setModalPeriod: (period: 1 | 2) => void;
}

const useStore = create<storeType>(set => ({
  showPassModal: false,
  showScoreModal: false,
  modalRegistrationNumber: 0,
  modalName: '',
  modalPeriod: 1,

  setShowPassModal: () =>
    set(state => ({ showPassModal: !state.showPassModal })),
  setShowScoreModal: () =>
    set(state => ({ showScoreModal: !state.showScoreModal })),
  setModalRegistrationNumber: registrationNumber =>
    set({ modalRegistrationNumber: registrationNumber }),
  setModalName: name => set({ modalName: name }),
  setModalPeriod: period => set({ modalPeriod: period }),
}));

export default useStore;
