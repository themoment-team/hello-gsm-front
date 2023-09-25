import create from 'zustand';
import {
  CommonApplicationResponseType,
  EvaluationStatusType,
  MajorType,
  ScreeningType,
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
  firstEvaluationResult: EvaluationStatusType;
  secondEvaluationResult: EvaluationStatusType;
  secondScore: string;
  registrationNumber: number;
  finalMajor: MajorType;
  selectedOption: number;
  printsArrived: boolean;
  formattedCellphoneNumber: string;
  formattedGuardianCellphoneNumber: string;
  formattedTeacherCellphoneNumber: string;
  screeningFirstEvaluation: ScreeningType;
  screeningSecondEvaluation: ScreeningType;
  finalSubmitted: boolean;

  setFinalSubmitted: (result: boolean) => void;
  setFinalMajor: (result: MajorType) => void;
  setPrintsArrived: (result: boolean) => void;
  setFirstEvaluationResult: (result: EvaluationStatusType) => void;
  setFormattedCellphoneNumber: (value: string) => void;
  setFormattedGuardianCellphoneNumber: (value: string) => void;
  setFormattedTeacherCellphoneNumber: (value: string) => void;
  setSecondEvaluationResult: (result: EvaluationStatusType) => void;
  setSelectedOption: (option: number) => void;
  setScreeningFirstEvaluationAt: (option: ScreeningType) => void;
  setScreeningSecondEvaluationResultAt: (option: ScreeningType) => void;
}

const useStore = create<StoreType>(set => ({
  showScoreModal: false,
  modalRegistrationNumber: 0,
  modalName: '',
  scoreModalValue: null,
  showStatusModal: false,
  applyData: null,
  firstEvaluationResult: 'NOT_YET',
  secondEvaluationResult: 'NOT_YET',
  secondScore: '0',
  registrationNumber: 0,
  finalMajor: null,
  selectedOption: 0,
  printsArrived: true,
  screeningFirstEvaluation: 'SOCIAL',
  screeningSecondEvaluation: 'GENERAL',
  formattedCellphoneNumber: '',
  formattedGuardianCellphoneNumber: '',
  formattedTeacherCellphoneNumber: '',
  finalSubmitted: false,
  setFinalSubmitted: result => set({ finalSubmitted: result }),
  setFinalMajor: result => set({ finalMajor: result }),
  setFormattedCellphoneNumber: value =>
    set({ formattedCellphoneNumber: value }),
  setFormattedGuardianCellphoneNumber: value =>
    set({ formattedGuardianCellphoneNumber: value }),
  setFormattedTeacherCellphoneNumber: value =>
    set({ formattedTeacherCellphoneNumber: value }),
  setSelectedOption: option => set({ selectedOption: option }),
  setPrintsArrived: result => set({ printsArrived: result }),
  setScreeningFirstEvaluationAt: option =>
    set({ screeningFirstEvaluation: option }),
  setScreeningSecondEvaluationResultAt: option =>
    set({ screeningSecondEvaluation: option }),

  setSecondEvaluationResult: result => set({ secondEvaluationResult: result }),
  setFirstEvaluationResult: result => set({ firstEvaluationResult: result }),
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
