import create from 'zustand';
import { CommonApplicationResponseType } from '../Types/application';

interface StoreType {
  showScoreModal: boolean;
  modalRegistrationNumber: number;
  modalName: string;
  scoreModalValue: null | number;
  showStatusModal: boolean;
  setShowStatusModal: () => void;
  setShowScoreModal: () => void;
  setModalRegistrationNumber: (registrationNumber: number) => void;
  setModalName: (name: string) => void;
  setScoreModalValue: (value: number | null) => void;
  setApplyData: (data: CommonApplicationResponseType) => void;
  applyData: CommonApplicationResponseType | null;
}

const useStore = create<StoreType>(set => ({
  showScoreModal: false,
  modalRegistrationNumber: 0,
  modalName: '',
  scoreModalValue: null,
  showStatusModal: false,
  applyData: null,

  setApplyData: data => set({ applyData: data }),
  setShowStatusModal: () =>
    set(state => ({ showStatusModal: !state.showStatusModal })),
  setShowScoreModal: () =>
    set(state => ({ showScoreModal: !state.showScoreModal })),
  setModalRegistrationNumber: registrationNumber =>
    set({ modalRegistrationNumber: registrationNumber }),
  setModalName: name => set({ modalName: name }),
  setScoreModalValue: value => set({ scoreModalValue: value }),
}));

export default useStore;
