import create from 'zustand';

interface storeType {
  showModal: boolean;
  setShowModal: () => void;
  modalTitle: string;
  setModalTitle: (title: string) => void;
  modalContent: string;
  setModalContent: (content: string) => void;
  isSearching: boolean;
  setIsSearching: (trueOrFalse: boolean) => void;
}

const useStore = create<storeType>(set => ({
  showModal: false,
  setShowModal: () => set(state => ({ showModal: !state.showModal })),
  modalTitle: '',
  setModalTitle: title => set({ modalTitle: title }),
  modalContent: '',
  setModalContent: content => set({ modalContent: content }),
  isSearching: false,
  setIsSearching: trueOrFalse => set({ isSearching: trueOrFalse }),
}));

export default useStore;
