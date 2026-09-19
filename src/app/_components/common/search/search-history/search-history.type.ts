import { ISearchQueryString } from '@/types/api/search-query-string';

export interface ISearchHistoryProps {
  searchHistory: ISearchQueryString[];
  onResultClick: (query: string) => void;
}
