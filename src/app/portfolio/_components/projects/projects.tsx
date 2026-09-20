'use client';

import React, { useMemo, useState } from 'react';
import { Section } from '@/app/_components/common/field';
import Image from 'next/image';
import ProjectsList from '../projects-list/projects-list';
import {
  portfolioCategories,
  portfolioProjects,
} from '@/constans/site-catalog';
import { IconSearch } from '@/app/_components/icons/icons';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return portfolioProjects.filter((item) => {
      const categoryOk =
        selectedCategory === 'همه' || item.category === selectedCategory;
      if (!categoryOk) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, query]);

  return (
    <Section>
      <div className="mb-4 flex flex-col lg:flex-row lg:items-center gap-4 w-full">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('همه')}
            className={`relative border rounded-full px-4 py-1 transition-colors text-m-body2 ${
              selectedCategory === 'همه'
                ? 'bg-primary text-white border-primary'
                : 'border-secondary text-secondary hover:bg-gray-200'
            }`}
          >
            همه
          </button>
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`relative border rounded-full px-4 py-1 transition-colors text-m-body2 ${
                selectedCategory === cat
                  ? 'bg-white text-primary-text font-semibold border-primary pl-6'
                  : 'border-secondary text-secondary hover:bg-gray-200'
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary-text" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex flex-grow mx-2 h-[1px] bg-divider" />

        <label className="flex items-center gap-2 rounded-full border border-divider bg-white px-3 py-1.5 w-full lg:w-64 shrink-0">
          <IconSearch className="stroke-secondary w-4 h-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجو در پروژه‌ها..."
            className="w-full bg-transparent outline-none text-m-body2 text-primary-text"
          />
        </label>

        <Image
          width={240}
          height={100}
          src="/images/Projects-2.svg"
          alt=""
          className="hidden xl:flex"
        />
      </div>

      <p className="text-disabled-text text-m-caption mb-4">
        {filteredItems.length} پروژه
        {selectedCategory !== 'همه' ? ` در «${selectedCategory}»` : ''}
      </p>

      {filteredItems.length > 0 ? (
        <ProjectsList filteredItems={[...filteredItems]} />
      ) : (
        <div className="rounded-2xl border border-dashed border-divider p-10 text-center text-secondary">
          پروژه‌ای با این فیلتر پیدا نشد.
          <button
            type="button"
            className="block mx-auto mt-3 text-primary underline"
            onClick={() => {
              setSelectedCategory('همه');
              setQuery('');
            }}
          >
            پاک کردن فیلتر
          </button>
        </div>
      )}
    </Section>
  );
}

export default Projects;
