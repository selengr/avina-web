'use client';

import { cn } from '@/lib/utils';
import Lottie from 'react-lottie';
import loadingData from '../../../../../public/Stripes.json';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function GifScreen({
  className,
  style,
}: {
  className?: string;
  style?: object;
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    renxdererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      clearCanvas: true,
    },
    backgroundColor: '#FFF',
  };

  return (
    <div
      className={cn(
        'w-full h-full flex justify-center items-center z-30',
        className
      )}
    >
      <Lottie
        options={defaultOptions}
        style={{
          zIndex: 30,
          opacity: 0.4,
          mixBlendMode: 'luminosity',
          ...style,
        }}
      />
    </div>
  );
}
