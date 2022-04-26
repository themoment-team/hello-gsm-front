import create from 'zustand';

interface storeType {
  showFAQModal: boolean;
  setShowFAQModal: () => void;
  FAQModalTitle: string;
  setFAQModalTitle: (title: string) => void;
  FAQModalContent: string;
  setFAQModalContent: (content: string) => void;
  showMypageModal: boolean;
  setShowMypageModal: () => void;
  mypageModalContent: string;
  setMypageModalContent: (content: string) => void;
}

const useStore = create<storeType>(set => ({
  showFAQModal: false,
  setShowFAQModal: () => set(state => ({ showFAQModal: !state.showFAQModal })),
  FAQModalTitle: '',
  setFAQModalTitle: title => set({ FAQModalTitle: title }),
  FAQModalContent: '',
  setFAQModalContent: content => set({ FAQModalContent: content }),
  showMypageModal: false,
  setShowMypageModal: () =>
    set(state => ({ showMypageModal: !state.showMypageModal })),
  mypageModalContent: '',
  setMypageModalContent: content => set({ mypageModalContent: content }),
}));

export default useStore;
