import create from 'zustand';
import {
  CommonApplicationResponseType,
  EvaluationStatusType,
  MajorType,
} from '../Types/application';

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
  firstEvaluation: EvaluationStatusType;
  secondEvaluation: EvaluationStatusType;
  secondScore: string;
  registrationNumber: number;
  finalMajor: MajorType;
  selectedOption: number;
  setFirstEvaluation: (result: EvaluationStatusType) => void;
  setSecondEvaluation: (result: EvaluationStatusType) => void;
  setSelectedOption: (option: number) => void;
}

const useStore = create<StoreType>(set => ({
  showScoreModal: false,
  modalRegistrationNumber: 0,
  modalName: '',
  scoreModalValue: null,
  showStatusModal: false,
  applyData: null,
  firstEvaluation: 'NOT_YET',
  secondEvaluation: 'NOT_YET',
  secondScore: '0',
  registrationNumber: 0,
  finalMajor: '',
  selectedOption: 0,

  setSelectedOption: option => set({ selectedOption: option }),

  setSecondEvaluation: result => set({ secondEvaluation: result }),
  setFirstEvaluation: result => set({ firstEvaluation: result }),
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
