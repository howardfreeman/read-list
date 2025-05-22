import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface SearchStore {
  searchTerm: string;
  actions: {
    setSearchTerm: (term: string) => void;
  };
}

const useSearchStore = create<SearchStore>()(
  devtools((set) => ({
    searchTerm: "",
    actions: {
      setSearchTerm: (term: string) => set({ searchTerm: term }),
    },
  })),
);

export const useSearchTerm = () => useSearchStore((state) => state.searchTerm);
export const useSearchActions = () => useSearchStore((state) => state.actions);
