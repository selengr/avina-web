'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CatalogKind,
  catalogKindLabel,
  searchCatalog,
} from '@/constans/site-catalog';
import { IconSearch } from '@/app/_components/icons/icons';

const kindTabs: Array<CatalogKind | 'all'> = [
  'all',
  'page',
  'service',
  'project',
];

const kindTabLabel: Record<CatalogKind | 'all', string> = {
  all: 'همه',
  ...catalogKindLabel,
};

function isKind(value: string | null): value is CatalogKind | 'all' {
  return (
    value === 'all' ||
    value === 'page' ||
    value === 'service' ||
    value === 'project'
  );
}

export default function SearchClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialKind = searchParams.get('kind');

  const [query, setQuery] = useState(initialQuery);
  const [kind, setKind] = useState<CatalogKind | 'all'>(
    isKind(initialKind) ? initialKind : 'all'
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (kind !== 'all') params.set('kind', kind);
    const next = params.toString();
    router.replace(next ? `/search?${next}` : '/search', { scroll: false });
  }, [query, kind, router]);

  const results = useMemo(() => {
    if (!query.trim() && kind === 'all') {
      return searchCatalog('', 'page').concat(
        searchCatalog('', 'service').slice(0, 3)
      );
    }
    if (!query.trim()) {
      return searchCatalog('', kind);
    }
    return searchCatalog(query, kind);
  }, [query, kind]);

  return (
    <main className="w-full md:px-4 lg:px-8 2xl:px-48 py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-m-h4 md:text-d-h2 font-bold text-primary-text mb-2">
          جستجو در آوینا
        </h1>
        <p className="text-secondary text-m-body2 md:text-d-body1 mb-6">
          بین صفحات، خدمات و نمونه کارها سریع پیدا کنید.
        </p>

        <label className="flex items-center gap-3 rounded-2xl border border-divider bg-white px-4 py-3 shadow-sm focus-within:border-primary transition-colors">
          <IconSearch className="stroke-secondary shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="مثلاً مشاوره، امنیت، فروشگاه..."
            className="w-full bg-transparent outline-none text-primary-text text-m-body1"
            autoFocus
          />
        </label>

        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {kindTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setKind(tab)}
              className={`rounded-full px-4 py-1.5 text-m-body2 border transition-colors ${
                kind === tab
                  ? 'bg-primary text-white border-primary'
                  : 'border-secondary text-secondary hover:bg-gray-100'
              }`}
            >
              {kindTabLabel[tab]}
            </button>
          ))}
        </div>

        <p className="text-disabled-text text-m-caption mb-3">
          {results.length} نتیجه
        </p>

        <ul className="space-y-3">
          {results.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="block rounded-2xl border border-divider bg-white p-4 hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h2 className="text-primary-text font-semibold text-m-subtitle1">
                    {item.title}
                  </h2>
                  <span className="text-m-caption text-primary shrink-0 rounded-full bg-primary-lighter px-2 py-0.5">
                    {catalogKindLabel[item.kind]}
                  </span>
                </div>
                <p className="text-secondary text-m-body2">{item.description}</p>
                {item.category && (
                  <p className="text-disabled-text text-m-caption mt-2">
                    {item.category}
                  </p>
                )}
              </Link>
            </li>
          ))}
          {results.length === 0 && (
            <li className="rounded-2xl border border-dashed border-divider p-8 text-center text-secondary">
              چیزی پیدا نشد. عبارت دیگری را امتحان کنید یا به{' '}
              <button
                type="button"
                className="text-primary underline"
                onClick={() => router.push('/portfolio')}
              >
                نمونه کارها
              </button>{' '}
              سر بزنید.
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}
