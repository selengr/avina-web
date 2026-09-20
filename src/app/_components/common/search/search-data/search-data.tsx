'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchDisplay from '../search-display/search-display';
import { useSearchModalStore, useSearchStore } from '../store/useSearchStore';
import { PATH_PAGE } from '../../../../../../routes/paths';

const sitePages = [
  { id: 1, searchQuery: 'صفحه اصلی', href: PATH_PAGE.root },
  { id: 2, searchQuery: 'خدمات', href: PATH_PAGE.services },
  { id: 3, searchQuery: 'نمونه کارها', href: PATH_PAGE.portfolio.root },
  { id: 4, searchQuery: 'درباره ما', href: PATH_PAGE.about },
  { id: 5, searchQuery: 'تماس با ما', href: PATH_PAGE.contact },
  { id: 6, searchQuery: 'مشاوره', href: '/#consulting' },
];

const SearchData = () => {
  const router = useRouter();
  const { searchHistory, onClearSearchHistory, addToSearchHistory } =
    useSearchStore();
  const { toggleSearchModal } = useSearchModalStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(sitePages);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    const filteredResults = sitePages.filter((item) =>
      item.searchQuery.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setIsLoading(false);
  }, [searchQuery]);

  const handleResultClick = (query: string) => {
    addToSearchHistory(query);
    const match = sitePages.find((item) => item.searchQuery === query);
    toggleSearchModal();
    if (match?.href) {
      router.push(match.href);
    }
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
