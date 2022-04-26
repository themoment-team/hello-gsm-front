import create from 'zustand';

interface storeType {
  showFAQModal: boolean;
  setShowFAQModal: () => void;
  modalTitle: string;
  setModalTitle: (title: string) => void;
  modalContent: string;
  setModalContent: (content: string) => void;
}

const useStore = create<storeType>(set => ({
  showFAQModal: false,
  setShowFAQModal: () => set(state => ({ showFAQModal: !state.showFAQModal })),
  modalTitle: '',
  setModalTitle: title => set({ modalTitle: title }),
  modalContent: '',
  setModalContent: content => set({ modalContent: content }),
}));

export default useStore;
