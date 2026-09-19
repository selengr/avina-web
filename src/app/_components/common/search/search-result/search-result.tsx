import React from 'react';
import { IconSearch } from '@/app/_components/icons/icons';
import { ISearchResultProps } from './search-result.types';

const SearchResult: React.FC<ISearchResultProps> = ({
  searchResult,
  onResultClick,
}) => {
  return (
    <div>
      {searchResult?.map((item) => (
        <div
          key={item?.id}
          className="flex gap-[5px] mb-1 items-center py-3 cursor-pointer hover:bg-gray-100"
          onClick={() => onResultClick(item.searchQuery)}
        >
          <IconSearch className="stroke-disabled-text" />
          <p className="text-secondary text-m-body1">{item?.searchQuery}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
