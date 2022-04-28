import create from 'zustand';

interface storeType {
  showModal: boolean;
  modalTitle: string;
  modalContent: string;
  isSearching: boolean;

  setShowModal: () => void;
  setModalTitle: (title: string) => void;
  setModalContent: (content: string) => void;
  setIsSearching: (trueOrFalse: boolean) => void;
}

const useStore = create<storeType>(set => ({
  showModal: false,
  modalTitle: '',
  modalContent: '',
  isSearching: false,

  setShowModal: () => set(state => ({ showModal: !state.showModal })),
  setModalTitle: title => set({ modalTitle: title }),
  setModalContent: content => set({ modalContent: content }),
  setIsSearching: trueOrFalse => set({ isSearching: trueOrFalse }),
}));

export default useStore;
