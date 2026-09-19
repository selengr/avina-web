import type React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface VerticalImageProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export const VerticalImage: React.FC<VerticalImageProps> = ({
  src,
  width = 60,
  height = 1500,
  className = '',
}) => {
  return (
    <div className={cn('hidden lg:flex absolute bottom-10  w-10', className)}>
      <Image
        src={`/images/${src}.svg` || '/images/placeholder.svg'}
        alt={src}
        width={width}
        height={height}
        className="w-full w-ful
      "
      />
    </div>
  );
};
