import create from 'zustand';

interface storeType {
  logged: boolean;
  showFAQModal: boolean;
  FAQModalTitle: string;
  FAQModalContent: string;
  showMypageModal: boolean;
  mypageModalContent: string;
  isSearching: boolean;
  showDepartmentModal: boolean;
  selectedChoice: number;
  choice1: number;
  choice2: number;
  choice3: number;
  showFindSchoolModal: boolean;
  schoolName: string;
  schoolLocation: string;
  showFindAddressModal: boolean;
  address: string;
  showMypageSuccessModal: boolean;

  setLogged: (isLogged: boolean) => void;
  setShowFAQModal: () => void;
  setFAQModalTitle: (title: string) => void;
  setFAQModalContent: (content: string) => void;
  setShowMypageModal: () => void;
  setMypageModalContent: (content: string) => void;
  setIsSearching: (trueOrFalse: boolean) => void;
  setShowDepartmentModal: () => void;
  setSelectedChoice: (index: number) => void;
  setChoice1: (type: number) => void;
  setChoice2: (type: number) => void;
  setChoice3: (type: number) => void;
  setShowFindSchoolModal: () => void;
  setSchoolName: (name: string) => void;
  setSchoolLocation: (location: string) => void;
  setShowFindAddressModal: () => void;
  setAddress: (residence: string) => void;
  setShowMypageSuccessModal: () => void;
}

const useStore = create<storeType>(set => ({
  logged: false,
  showFAQModal: false,
  FAQModalTitle: '',
  FAQModalContent: '',
  showMypageModal: false,
  mypageModalContent: '',
  isSearching: false,
  showDepartmentModal: false,
  selectedChoice: 0,
  choice1: 0,
  choice2: 0,
  choice3: 0,
  showFindSchoolModal: false,
  schoolName: '',
  schoolLocation: '',
  showFindAddressModal: false,
  address: '',
  showMypageSuccessModal: false,

  setLogged: isLogged => set({ logged: isLogged }),
  setShowFAQModal: () => set(state => ({ showFAQModal: !state.showFAQModal })),
  setFAQModalTitle: title => set({ FAQModalTitle: title }),
  setFAQModalContent: content => set({ FAQModalContent: content }),
  setShowMypageModal: () =>
    set(state => ({ showMypageModal: !state.showMypageModal })),
  setMypageModalContent: content => set({ mypageModalContent: content }),
  setIsSearching: trueOrFalse => set({ isSearching: trueOrFalse }),
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
  setAddress: residence => set({ address: residence }),
  setShowMypageSuccessModal: () =>
    set(state => ({ showMypageSuccessModal: !state.showMypageSuccessModal })),
}));

export default useStore;
