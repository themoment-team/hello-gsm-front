import create from 'zustand';

interface storeType {
  showFAQModal: boolean;
  FAQModalTitle: string;
  FAQModalContent: string;
  showMypageModal: boolean;
  mypageModalContent: string;
  isSearching: boolean;
  showDepartmentModal: boolean;

  setShowFAQModal: () => void;
  setFAQModalTitle: (title: string) => void;
  setFAQModalContent: (content: string) => void;
  setShowMypageModal: () => void;
  setMypageModalContent: (content: string) => void;
  setIsSearching: (trueOrFalse: boolean) => void;
  setShowDepartmentModal: () => void;
}

const useStore = create<storeType>(set => ({
  showFAQModal: false,
  FAQModalTitle: '',
  FAQModalContent: '',
  showMypageModal: false,
  mypageModalContent: '',
  isSearching: false,
  showDepartmentModal: false,

  setShowFAQModal: () => set(state => ({ showFAQModal: !state.showFAQModal })),
  setFAQModalTitle: title => set({ FAQModalTitle: title }),
  setFAQModalContent: content => set({ FAQModalContent: content }),
  setShowMypageModal: () =>
    set(state => ({ showMypageModal: !state.showMypageModal })),
  setMypageModalContent: content => set({ mypageModalContent: content }),
  setIsSearching: trueOrFalse => set({ isSearching: trueOrFalse }),
  setShowDepartmentModal: () =>
    set(state => ({ showDepartmentModal: !state.showDepartmentModal })),
}));

export default useStore;
