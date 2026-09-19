import React, { useState } from 'react';
import { Card } from '../../../_components/common/card/card';
import Image from 'next/image';
import { IProjectsItemsProps } from './projects-items.types';
import StylizedButton from '@/app/_components/common/field/button/stylized-button';
import GifScreen from '@/app/_components/common/gif';

const ProjectItems: React.FC<IProjectsItemsProps> = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden transition-all hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={'/' + image || '/images/placeholder.svg'}
          alt="icon"
          width={300}
          height={225}
          className="h-full w-full object-cover transition-transform duration-300"
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
