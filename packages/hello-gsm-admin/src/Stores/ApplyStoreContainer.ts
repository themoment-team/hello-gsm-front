import create from 'zustand';
import { ApplicationFormType, ApplyFormType } from 'type/application';

interface ApplyStoreType {
  showDepartmentModal: boolean;
  selectedChoice: number;
  choice1: 'SW' | 'IOT' | 'AI' | '';
  choice2: 'SW' | 'IOT' | 'AI' | '';
  choice3: 'SW' | 'IOT' | 'AI' | '';
  showFindSchoolModal: boolean;
  schoolName: string;
  schoolLocation: string;
  showFindAddressModal: boolean;
  applicantAddress: string;
  showMypageSuccessModal: boolean;
  showScoreResult: boolean;
  freeSemester: string | null;
  system: string;
  showApplyPostModal: boolean;
  showMainResultModal: boolean;
  showMainNonLoginModal: boolean;
  applyData: ApplyFormType | null;
  applicationData: ApplicationFormType | null;

  setShowDepartmentModal: () => void;
  setSelectedChoice: (index: number) => void;
  setChoice1: (type: 'SW' | 'IOT' | 'AI' | '') => void;
  setChoice2: (type: 'SW' | 'IOT' | 'AI' | '') => void;
  setChoice3: (type: 'SW' | 'IOT' | 'AI' | '') => void;
  setShowFindSchoolModal: () => void;
  setSchoolName: (name: string) => void;
  setSchoolLocation: (location: string) => void;
  setShowFindAddressModal: () => void;
  setApplicantAddress: (residence: string) => void;
  setShowMypageSuccessModal: () => void;
  setShowScoreResult: () => void;
  setFreeSemester: (value: string | null) => void;
  setSystem: (type: string) => void;
  setshowApplyPostModal: () => void;
  setShowMainResultModal: (isShow: boolean) => void;
  setShowMainNonLoginModal: (isShow: boolean) => void;
  setApplyData: (data: ApplyFormType) => void;
  setApplicationData: (data: ApplicationFormType) => void;
}

const useApplyStore = create<ApplyStoreType>(set => ({
  showDepartmentModal: false,
  selectedChoice: 0,
  choice1: '',
  choice2: '',
  choice3: '',
  showFindSchoolModal: false,
  schoolName: '',
  schoolLocation: '',
  showFindAddressModal: false,
  applicantAddress: '',
  showMypageSuccessModal: false,
  showScoreResult: false,
  freeSemester: null,
  system: '자유학년제',
  showApplyPostModal: false,
  showMainResultModal: false,
  showMainNonLoginModal: false,
  applicationData: null,
  applyData: null,

  setShowDepartmentModal: () =>
    set(state => ({ showDepartmentModal: !state.showDepartmentModal })),
  setSelectedChoice: index => set({ selectedChoice: index }),
  setChoice1: type => set({ choice1: type }),
  setChoice2: type => set({ choice2: type }),
  setChoice3: type => set({ choice3: type }),
  setShowFindSchoolModal: () =>
    set(state => ({ showFindSchoolModal: !state.showFindSchoolModal })),
  setSchoolName: name => set({ schoolName: name }),
  setSchoolLocation: location => set({ schoolLocation: location }),
  setShowFindAddressModal: () =>
    set(state => ({ showFindAddressModal: !state.showFindAddressModal })),
  setApplicantAddress: residence => set({ applicantAddress: residence }),
  setShowMypageSuccessModal: () =>
    set(state => ({ showMypageSuccessModal: !state.showMypageSuccessModal })),
  setShowScoreResult: () =>
    set(state => ({ showScoreResult: !state.showScoreResult })),
  setFreeSemester: value => set({ freeSemester: value }),
  setSystem: type => set({ system: type }),
  setshowApplyPostModal: () =>
    set(state => ({
      showApplyPostModal: !state.showApplyPostModal,
    })),
  setShowMainResultModal: isShow => set({ showMainResultModal: isShow }),
  setShowMainNonLoginModal: isShow => set({ showMainNonLoginModal: isShow }),
  setApplyData: data => set({ applyData: data }),
  setApplicationData: data => set({ applicationData: data }),
}));

export default useApplyStore;
