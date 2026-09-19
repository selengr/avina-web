'use client';
import React, { useState, useEffect } from 'react';
import SearchDisplay from '../search-display/search-display';
import { useSearchModalStore, useSearchStore } from '../store/useSearchStore';

const allData = [
  { id: 1, searchQuery: 'موبایل سامسونگ' },
  { id: 2, searchQuery: 'لپ تاپ اپل' },
  { id: 3, searchQuery: 'هدفون بلوتوثی' },
  { id: 4, searchQuery: 'دوربین عکاسی کانن' },
];

const SearchData = () => {
  const { searchHistory, onClearSearchHistory, addToSearchHistory } =
    useSearchStore();
  const { toggleSearchModal } = useSearchModalStore();

  /// به حای اینا باید تماما دیتا بشینه
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(allData);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    const filteredResults = allData.filter((item) =>
      item.searchQuery.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setIsLoading(false);
  }, [searchQuery]);

  const handleResultClick = (query: string) => {
    addToSearchHistory(query);
    setSearchQuery(query);
    toggleSearchModal();
  };

  return (
    <SearchDisplay
      isLoading={isLoading}
      onSearch={setSearchQuery}
      searchHistory={searchHistory}
      searchResults={searchResults}
      onClearSearchHistory={onClearSearchHistory}
      setIsOpen={toggleSearchModal}
      onResultClick={handleResultClick}
    />
  );
};

export default SearchData;
