import create from 'zustand';

interface StoreType {
  showScoreResult: boolean;
  freeSemester: string | null;
  system: string;
  setShowScoreResult: () => void;
  setFreeSemester: (value: string | null) => void;
  setSystem: (type: string) => void;
}

const useStore = create<StoreType>(set => ({
  showScoreResult: false,
  freeSemester: null,
  system: '자유학년제',

  setShowScoreResult: () =>
    set(state => ({ showScoreResult: !state.showScoreResult })),
  setFreeSemester: value => set({ freeSemester: value }),
  setSystem: type => set({ system: type }),
}));

export default useStore;
