import create from 'zustand';

interface storeType {
  showModal: boolean;
  modalTitle: string;
  modalContent: string;

  setShowModal: () => void;
  setModalTitle: (title: string) => void;
  setModalContent: (content: string) => void;
  isSearching: boolean;
  setIsSearching: (trueOrFalse: boolean) => void;
}

const useStore = create<storeType>(set => ({
  showModal: false,
  modalTitle: '',
  modalContent: '',

  setShowModal: () => set(state => ({ showModal: !state.showModal })),
  setModalTitle: title => set({ modalTitle: title }),
  setModalContent: content => set({ modalContent: content }),
  isSearching: false,
  setIsSearching: trueOrFalse => set({ isSearching: trueOrFalse }),
}));

export default useStore;
