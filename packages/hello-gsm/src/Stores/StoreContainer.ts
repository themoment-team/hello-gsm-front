import create from 'zustand';

interface StoreType {
  logged: boolean;
  showFAQModal: boolean;
  FAQModalTitle: string;
  FAQModalContent: string;
  showMypageModal: boolean;
  mypageModalContent: string;
  isFAQSearching: boolean;
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
  showSideBar: boolean | null;
  showMypageSuccessModal: boolean;
  showScoreResult: boolean;
  freeSemester: string | null;
  system: string;
  showApplyPostModal: boolean;
  showMainResultModal: boolean;
  showMainNonLoginModal: boolean;

  setLogged: (isLogged: boolean) => void;
  setShowFAQModal: () => void;
  setFAQModalTitle: (title: string) => void;
  setFAQModalContent: (content: string) => void;
  setShowMypageModal: () => void;
  setMypageModalContent: (content: string) => void;
  setIsFAQSearching: (trueOrFalse: boolean) => void;
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
  setShowSideBar: (value: boolean | null) => void;
  setShowMypageSuccessModal: () => void;
  setShowScoreResult: () => void;
  setFreeSemester: (value: string | null) => void;
  setSystem: (type: string) => void;
  setshowApplyPostModal: () => void;
  setShowMainResultModal: (isShow: boolean) => void;
  setShowMainNonLoginModal: (isShow: boolean) => void;
}

const useStore = create<StoreType>(set => ({
  logged: false,
  showFAQModal: false,
  FAQModalTitle: '',
  FAQModalContent: '',
  showMypageModal: false,
  mypageModalContent: '',
  isFAQSearching: false,
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
  showSideBar: null,
  showMypageSuccessModal: false,
  showScoreResult: false,
  freeSemester: null,
  system: '자유학년제',
  showApplyPostModal: false,
  showMainResultModal: false,
  showMainNonLoginModal: false,

  setLogged: isLogged => set({ logged: isLogged }),
  setShowFAQModal: () => set(state => ({ showFAQModal: !state.showFAQModal })),
  setFAQModalTitle: title => set({ FAQModalTitle: title }),
  setFAQModalContent: content => set({ FAQModalContent: content }),
  setShowMypageModal: () =>
    set(state => ({ showMypageModal: !state.showMypageModal })),
  setMypageModalContent: content => set({ mypageModalContent: content }),
  setIsFAQSearching: trueOrFalse => set({ isFAQSearching: trueOrFalse }),
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
  setShowSideBar: value => set({ showSideBar: value }),
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
}));

export default useStore;
