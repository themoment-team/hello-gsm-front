import create from 'zustand';

interface StoreType {
  selectedOption: number;
  isButtonActive: boolean;
  setSelectedOption: (option: number) => void;
  setIsButtonActive: (active: boolean) => void;
}

const useStore = create<StoreType>(set => ({
  selectedOption: 0,
  isButtonActive: false,
  setSelectedOption: option => set({ selectedOption: option }),
  setIsButtonActive: active => set({ isButtonActive: active }),
}));

export default useStore;
