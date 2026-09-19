import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchState {
  searchHistory: { id: number; searchQuery: string }[];
  onClearSearchHistory: () => void;
  addToSearchHistory: (query: string) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      searchHistory: [],

      onClearSearchHistory: () => {
        set({ searchHistory: [] });
      },

      addToSearchHistory: (query) => {
        const { searchHistory } = get();
        if (!searchHistory.some((item) => item.searchQuery === query)) {
          set({
            searchHistory: [
              { id: Date.now(), searchQuery: query },
              ...searchHistory,
            ],
          });
        }
      },
    }),
    {
      name: 'search-history',
    }
  )
);

interface SearchModalState {
  isOpen: boolean;
  toggleSearchModal: () => void;
}

export const useSearchModalStore = create<SearchModalState>((set) => ({
  isOpen: false,
  toggleSearchModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));
