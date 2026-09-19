'use client';
import React, { useState } from 'react';
import { Section } from '@/app/_components/common/field';
import Image from 'next/image';
import ProjectsList from '../projects-list/projects-list';

const items = [
  {
    id: 1,
    image: 'images/card1.svg',
    title: 'سیستم مدیریت مشتریان',
    category: 'طراحی نرم افزار',
  },
  {
    id: 2,
    image: 'images/card2.svg',
    title: 'طراحی فروشگاه آنلاین',
    category: 'طراحی سایت',
  },
  {
    id: 3,
    image: 'images/card3.svg',
    title: 'طراحی لوگو برند ایکس',
    category: 'طراحی گرافیک',
  },
  {
    id: 4,
    image: 'images/card1.svg',
    title: 'بررسی و تست امنیت شبکه',
    category: 'امنیت اطلاعات',
  },
  {
    id: 5,
    image: 'images/card2.svg',
    title: 'راه‌اندازی سرورهای ابری',
    category: 'شبکه و ارتباطات',
  },
  {
    id: 6,
    image: 'images/card3.svg',
    title: 'اپلیکیشن مدیریت پروژه',
    category: 'طراحی نرم افزار',
  },
  {
    id: 7,
    image: 'images/card1.svg',
    title: 'طراحی رابط کاربری اپ موبایل',
    category: 'طراحی گرافیک',
  },
  {
    id: 8,
    image: 'images/card2.svg',
    title: 'ایمن‌سازی داده‌های شرکتی',
    category: 'امنیت اطلاعات',
  },
  {
    id: 9,
    image: 'images/card3.svg',
    title: 'پروژه تحقیقاتی هوش مصنوعی',
    category: 'سایر',
  },
  {
    id: 9,
    image: 'images/card3.svg',
    title: 'پروژه تحقیقاتی هوش مصنوعی',
    category: 'سایر',
  },
  {
    id: 9,
    image: 'images/card3.svg',
    title: 'پروژه تحقیقاتی هوش مصنوعی',
    category: 'سایر',
  },
  {
    id: 9,
    image: 'images/card3.svg',
    title: 'پروژه تحقیقاتی هوش مصنوعی',
    category: 'سایر',
  },
  {
    id: 9,
    image: 'images/card3.svg',
    title: 'پروژه تحقیقاتی هوش مصنوعی',
    category: 'سایر',
  },
  {
    id: 9,
    image: 'images/card3.svg',
    title: 'پروژه تحقیقاتی هوش مصنوعی',
    category: 'سایر',
  },
];

const categories = [
  'طراحی نرم افزار',
  'طراحی سایت',
  'طراحی گرافیک',
  'امنیت اطلاعات',
  'شبکه و ارتباطات',
  'سایر',
];

function Projects() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (cat?: string) => {
    if (!cat) return;
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredItems =
    selectedCategories.length === 0
      ? items
      : items.filter(
          (item) =>
            item.category &&
            selectedCategories.includes(item.category as string)
        );

  return (
    <Section>
      <div className="mb-4 flex items-center w-full">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`relative border rounded-full px-4 py-1 transition-colors ${
                selectedCategories.includes(cat)
                  ? 'bg-white text-primary-text font-semibold border-white pl-6'
                  : 'border-secondary text-secondary hover:bg-gray-200'
              }`}
            >
              {cat}
              {selectedCategories.includes(cat) && (
                <div className="absolute left-5 top-[14px] h-1 w-2 rounded-full">
                  <div className="bg-primary-text h-1 w-1 mx-[14px] rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex flex-grow mx-4 h-[1px] bg-divider"></div>

        <Image
          width={240}
          height={100}
          src="/images/Projects-2.svg"
          alt="project icon"
          className="hidden lg:flex"
        />
      </div>
      <ProjectsList filteredItems={filteredItems} />
    </Section>
  );
}

export default Projects;
