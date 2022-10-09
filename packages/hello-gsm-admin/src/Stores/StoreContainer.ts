import create from 'zustand';

interface StoreType {
  showScoreModal: boolean;
  modalRegistrationNumber: number;
  modalName: string;
  scoreModalValue: null | number;

  setShowScoreModal: () => void;
  setModalRegistrationNumber: (registrationNumber: number) => void;
  setModalName: (name: string) => void;
  setScoreModalValue: (value: number) => void;
}

const useStore = create<StoreType>(set => ({
  showScoreModal: false,
  modalRegistrationNumber: 0,
  modalName: '',
  scoreModalValue: null,

  setShowScoreModal: () =>
    set(state => ({ showScoreModal: !state.showScoreModal })),
  setModalRegistrationNumber: registrationNumber =>
    set({ modalRegistrationNumber: registrationNumber }),
  setModalName: name => set({ modalName: name }),
  setScoreModalValue: value => set({ scoreModalValue: value }),
}));

export default useStore;
