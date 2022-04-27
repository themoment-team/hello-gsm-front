import create from 'zustand';

interface storeType {
  showModal: boolean;
  modalTitle: string;
  modalContent: string;

  setShowModal: () => void;
  setModalTitle: (title: string) => void;
  setModalContent: (content: string) => void;
}

const useStore = create<storeType>(set => ({
  showModal: false,
  modalTitle: '',
  modalContent: '',

  setShowModal: () => set(state => ({ showModal: !state.showModal })),
  setModalTitle: title => set({ modalTitle: title }),
  setModalContent: content => set({ modalContent: content }),
}));

export default useStore;
