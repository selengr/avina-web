import { ISearchQueryString } from '@/types/api/search-query-string';

export interface ISearchResultProps {
  searchResult: ISearchQueryString[];
  onResultClick: (query: string) => void;
}
