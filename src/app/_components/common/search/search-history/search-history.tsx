import React from 'react';
import { ISearchHistoryProps } from './search-history.type';
import { IconSearchHistory } from '@/app/_components/icons/icons';

const SearchHistory: React.FC<ISearchHistoryProps> = ({
  searchHistory,
  onResultClick,
}) => {
  return (
    <div>
      {searchHistory?.map((item) => (
        <div
          key={item?.id}
          className="flex gap-[5px] mb-1 items-center py-3 cursor-pointer hover:bg-gray-100"
          onClick={() => onResultClick(item.searchQuery)}
        >
          <IconSearchHistory className="stroke-disabled-text" />
          <p className="text-secondary text-m-body1">{item?.searchQuery}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchHistory;
