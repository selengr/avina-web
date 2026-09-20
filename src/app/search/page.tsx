import type { Metadata } from 'next';
import SearchClient from './search-client';

export const metadata: Metadata = {
  title: 'جستجو',
  description: 'جستجو بین صفحات، خدمات و نمونه کارهای آوینا',
};

export default function SearchPage() {
  return <SearchClient />;
}
