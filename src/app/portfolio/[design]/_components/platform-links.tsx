'use client';

import { useState } from 'react';
import {
  IconPlatform1,
  IconPlatform2,
  IconPlatform3,
  IconPlatform4,
  IconPlatform5,
  IconPlatform6,
} from '@/app/_components/icons/icons';
import Link from 'next/link';
import { PATH_PAGE } from '../../../../../routes/paths';

const platforms = [
  {
    id: 'portfolio',
    Icon: IconPlatform1,
    link: PATH_PAGE.portfolio.root,
    label: 'نمونه کارها',
    props: {
      fill: '#637381',
      stroke: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'services',
    Icon: IconPlatform2,
    link: PATH_PAGE.services,
    label: 'خدمات',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'contact',
    Icon: IconPlatform3,
    link: PATH_PAGE.contact,
    label: 'تماس',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'about',
    Icon: IconPlatform4,
    link: PATH_PAGE.about,
    label: 'درباره ما',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'consulting',
    Icon: IconPlatform5,
    link: '/#consulting',
    label: 'مشاوره',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'search',
    Icon: IconPlatform6,
    link: PATH_PAGE.search,
    label: 'جستجو',
    props: {
      fill: '#637381',
      stroke: 'none',
      width: '22',
      height: '23',
      viewBox: '0 0 22 23',
    },
  },
];

export default function PlatformLinks() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  return (
    <div className="flex flex-row justify-between items-center pr-10 gap-4 flex-wrap">
      <span className="text-secondary font-[400] text-m-body2 md:font-kalameh md:text-d-body1">
        ادامه مسیر در سایت
      </span>
      <div className="flex flex-row gap-2">
        {platforms.map(({ id, Icon, link, label, props }) => (
          <Link
            key={id}
            href={link}
            className="p-1.5 rounded-full transition-all duration-200"
            onMouseEnter={() => setHoveredPlatform(id)}
            onMouseLeave={() => setHoveredPlatform(null)}
            aria-label={label}
            title={label}
          >
            <Icon
              {...props}
              stroke={hoveredPlatform === id ? '#2563EB' : props.stroke}
              fill={hoveredPlatform === id ? '#2563EB' : props.fill}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
