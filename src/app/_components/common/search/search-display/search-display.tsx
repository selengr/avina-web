'use client';
import React, { useEffect, useState } from 'react';
import { Form, InputController } from '../../field';
import { useForm } from 'react-hook-form';
import Divider from '../../field/divider';
import SearchHistory from '../search-history/search-history';
import {
  IconSearchTitle,
  IconArrowLeftLong,
  IconMicrophone,
} from '@/app/_components/icons/icons';
import SearchResult from '../search-result/search-result';
import { ISearchDisplayProps } from './search-display.types';
import { useSearchModalStore } from '../store/useSearchStore';

const SearchDisplay: React.FC<ISearchDisplayProps> = ({
  isLoading,
  onSearch,
  searchHistory,
  searchResults,
  onClearSearchHistory,
  onResultClick,
}) => {
  const { control, watch } = useForm({
    defaultValues: {
      searchQuery: '',
    },
  });

  const { toggleSearchModal } = useSearchModalStore();
  const searchQuery = watch('searchQuery');

  useEffect(() => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <Form className="px-5">
        <InputController
          control={control}
          name="searchQuery"
          placeholder="جستجو ..."
          containerClassName="rounded-none border-none"
          className="translate-y-1/4"
          inputClassName="translate-x-5"
          suffix={
            <IconArrowLeftLong
              className="stroke-secondary cursor-pointer"
              onClick={toggleSearchModal}
            />
          }
          prefix={<IconMicrophone className="stroke-0 fill-secondary" />}
        />
      </Form>
      <Divider />
      {isLoading ? (
        <div>loading ... </div>
      ) : (
        <div className="px-10">
          {searchQuery && (
            <div className="flex gap-[5px]">
              <IconSearchTitle className="stroke-none fill-cool-gray" />
              <p>
                جستجو برای “
                <span className="font-semibold text-m-subtitle1 lg:text-d-subtitle1">
                  {searchQuery}
                </span>
                ” در آوینا
              </p>{' '}
            </div>
          )}
          <div className="flex justify-between items-center my-5">
            <p className="text-disabled-text">
              {searchQuery ? 'نتیجه جستجو ' : 'جستجوهای اخیر'}
            </p>
            {!searchQuery && !!searchHistory?.length && (
              <button
                className="text-error"
                onClick={onClearSearchHistory}
              >
                حذف تاریخچه
              </button>
            )}
          </div>

          {!searchQuery ? (
            <SearchHistory
              searchHistory={searchHistory}
              onResultClick={onResultClick}
            />
          ) : (
            <SearchResult
              searchResult={searchResults}
              onResultClick={onResultClick}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDisplay;
