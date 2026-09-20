'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchDisplay from '../search-display/search-display';
import { useSearchModalStore, useSearchStore } from '../store/useSearchStore';
import { searchCatalog } from '@/constans/site-catalog';
import Link from 'next/link';

const SearchData = () => {
  const router = useRouter();
  const { searchHistory, onClearSearchHistory, addToSearchHistory } =
    useSearchStore();
  const { toggleSearchModal } = useSearchModalStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<
    { id: number; searchQuery: string; href: string }[]
  >([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const filtered = searchCatalog(searchQuery, 'all').slice(0, 8);
    setSearchResults(
      filtered.map((item, index) => ({
        id: index + 1,
        searchQuery: item.title,
        href: item.href,
      }))
    );
    setIsLoading(false);
  }, [searchQuery]);

  const handleResultClick = (query: string) => {
    addToSearchHistory(query);
    const match = searchResults.find((item) => item.searchQuery === query);
    toggleSearchModal();
    if (match?.href) {
      router.push(match.href);
    } else {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const advancedHref = searchQuery.trim()
    ? `/search?q=${encodeURIComponent(searchQuery.trim())}`
    : '/search';

  return (
    <div>
      <SearchDisplay
        isLoading={isLoading}
        onSearch={setSearchQuery}
        searchHistory={searchHistory}
        searchResults={searchResults}
        onClearSearchHistory={onClearSearchHistory}
        onResultClick={handleResultClick}
      />
      <div className="px-10 pb-6">
        <Link
          href={advancedHref}
          onClick={() => toggleSearchModal()}
          className="text-primary text-m-body2 underline"
        >
          جستجوی پیشرفته در سایت
        </Link>
      </div>
    </div>
  );
};

export default SearchData;
