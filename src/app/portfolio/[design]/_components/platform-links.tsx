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

const platforms = [
  {
    id: 'platform1',
    Icon: IconPlatform1,
    link: 'https://platform1.com',
    props: {
      fill: '#637381',
      stroke: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'platform2',
    Icon: IconPlatform2,
    link: 'https://platform2.com',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'platform3',
    Icon: IconPlatform3,
    link: 'https://platform3.com',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'platform4',
    Icon: IconPlatform4,
    link: 'https://platform4.com',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'platform5',
    Icon: IconPlatform5,
    link: 'https://platform5.com',
    props: {
      stroke: '#637381',
      fill: 'none',
      width: '24',
      height: '25',
      viewBox: '0 0 24 25',
    },
  },
  {
    id: 'platform6',
    Icon: IconPlatform6,
    link: 'https://platform6.com',
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
    <div className="flex flex-row justify-between items-center pr-10">
      <span className="text-secondary font-[400] text-m-body2 md:font-kalameh md:text-d-body1">
        مشاهده پروژه در سایر پلتفرم ها
      </span>
      <div className="flex flex-row gap-2">
        {/* {platforms.map(({ id, Icon, link, props }) => (
          <Link
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full transition-all duration-200"
            onMouseEnter={() => setHoveredPlatform(id)}
            onMouseLeave={() => setHoveredPlatform(null)}
            aria-label={`view on ${id}`}
          >
            <Icon
              {...props}
              stroke={hoveredPlatform === id ? "#2563EB" : props.stroke}
              fill={hoveredPlatform === id ? "#2563EB" : props.fill}
            />
          </Link>
        ))} */}
      </div>
    </div>
  );
}
