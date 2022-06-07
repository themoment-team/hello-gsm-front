import create from 'zustand';

interface StoreType {
  showFAQModal: boolean;
  FAQModalTitle: string;
  FAQModalContent: string;
  showMypageModal: boolean;
  mypageModalContent: string;
  isSearching: boolean;

  setShowFAQModal: () => void;
  setFAQModalTitle: (title: string) => void;
  setFAQModalContent: (content: string) => void;
  setShowMypageModal: () => void;
  setMypageModalContent: (content: string) => void;
  setIsSearching: (trueOrFalse: boolean) => void;
}

const useStore = create<StoreType>(set => ({
  showFAQModal: false,
  FAQModalTitle: '',
  FAQModalContent: '',
  showMypageModal: false,
  mypageModalContent: '',
  isSearching: false,

  setShowFAQModal: () => set(state => ({ showFAQModal: !state.showFAQModal })),
  setFAQModalTitle: title => set({ FAQModalTitle: title }),
  setFAQModalContent: content => set({ FAQModalContent: content }),
  setShowMypageModal: () =>
    set(state => ({ showMypageModal: !state.showMypageModal })),
  setMypageModalContent: content => set({ mypageModalContent: content }),
  setIsSearching: trueOrFalse => set({ isSearching: trueOrFalse }),
}));

export default useStore;
