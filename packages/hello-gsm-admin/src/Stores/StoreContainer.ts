import create from 'zustand';

interface StoreType {
  selectedOption: number | null;
  isButtonActive: boolean;
  isScoreValue: boolean | null;
  isOptionSelect: boolean;
  setIsOptionSelect: (active: boolean) => void;
  setSelectedOption: (option: number) => void;
  setIsScoreValue: (value: boolean) => void;
  setIsButtonActive: (active: boolean) => void;
}

const useStore = create<StoreType>(set => ({
  selectedOption: null,
  isButtonActive: false,
  isScoreValue: null,
  isOptionSelect: false,
  setIsOptionSelect: active => set({ isOptionSelect: active }),
  setIsScoreValue: value => set({ isScoreValue: value }),
  setSelectedOption: option => set({ selectedOption: option }),
  setIsButtonActive: active => set({ isButtonActive: active }),
}));

export default useStore;
