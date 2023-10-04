import create from 'zustand';

interface StoreType {
  selectedOption: number;
  isButtonActive: boolean;
  isScoreValue: boolean;
  setSelectedOption: (option: number) => void;
  setIsScoreValue: (value: boolean) => void;
  setIsButtonActive: (active: boolean) => void;
}

const useStore = create<StoreType>(set => ({
  selectedOption: 0,
  isButtonActive: false,
  isScoreValue: false,
  setIsScoreValue: value => set({ isScoreValue: value }),
  setSelectedOption: option => set({ selectedOption: option }),
  setIsButtonActive: active => set({ isButtonActive: active }),
}));

export default useStore;
