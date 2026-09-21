import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchClient from './search-client';

export const metadata: Metadata = {
  title: 'جستجو',
  description: 'جستجو بین صفحات، خدمات و نمونه کارهای آوینا',
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="w-full py-14 px-4 text-center text-secondary">
          در حال بارگذاری جستجو...
        </main>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
