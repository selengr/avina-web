'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '../../../_components/common/card/card';
import { IProjectsItemsProps } from './projects-items.types';
import StylizedButton from '@/app/_components/common/field/button/stylized-button';
import GifScreen from '@/app/_components/common/gif';

const ProjectItems: React.FC<IProjectsItemsProps> = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = image?.startsWith('/') ? image : `/${image || 'images/placeholder.svg'}`;

  return (
    <Card
      className="group relative overflow-hidden rounded-3xl border-none bg-transparent shadow-none transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      </div>
      <StylizedButton
        text={title}
        className="my-2 md:my-0 md:mt-4 py-2"
      />
    </Card>
  );
};

export default ProjectItems;
