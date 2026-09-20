import { ISearchQueryString } from '@/types/api/search-query-string';

export interface ISearchDisplayProps {
  isLoading: boolean;
  onSearch: (query: string) => void;
  searchHistory: ISearchQueryString[];
  searchResults: ISearchQueryString[];
  onClearSearchHistory: () => void;
  onResultClick: (query: string) => void;
  setIsOpen?: (isOpen: boolean) => void;
}
