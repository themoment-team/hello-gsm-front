import create from 'zustand';

interface StoreType {
  showScoreResult: boolean;
  setShowScoreResult: () => void;
}

const useStore = create<StoreType>(set => ({
  showScoreResult: false,
  setShowScoreResult: () =>
    set(state => ({ showScoreResult: !state.showScoreResult })),
}));

export default useStore;
