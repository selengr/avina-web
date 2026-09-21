'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card } from '../../../_components/common/card/card';
import { IProjectsItemsProps } from './projects-items.types';
import StylizedButton from '@/app/_components/common/field/button/stylized-button';
import GifScreen from '@/app/_components/common/gif';
import { PATH_PAGE } from '../../../../../routes/paths';

const ProjectItems: React.FC<IProjectsItemsProps> = ({
  image,
  title,
  slug,
  category,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = image?.startsWith('/')
    ? image
    : `/${image || 'images/placeholder.svg'}`;
  const href = slug
    ? PATH_PAGE.portfolio.design(slug)
    : PATH_PAGE.portfolio.root;

  return (
    <Card
      className="group relative overflow-hidden rounded-3xl border-none bg-transparent shadow-none transition-all cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(href)}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
        <Image
          src={imageSrc}
          alt={title || 'نمونه کار'}
          width={360}
          height={270}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isHovered && (
          <GifScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '200%',
              height: '100%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
        {category && (
          <span className="absolute top-3 right-3 rounded-full bg-white/95 text-primary text-m-caption px-2 py-0.5">
            {category}
          </span>
        )}
      </div>
      <StylizedButton
        text={title}
        className="my-2 md:my-0 md:mt-4 py-2"
        onClick={() => router.push(href)}
      />
    </Card>
  );
};

export default ProjectItems;
