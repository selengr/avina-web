'use client';

import { cn } from '@/lib/utils';
import type React from 'react';

import { useEffect, useRef } from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
  videoClassName?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  children?: React.ReactNode;
}

export default function AutoPlayVideo({
  src,
  className = 'relative w-full h-[200px] md:h-[579px] overflow-hidden',
  videoClassName = 'w-full h-full object-cover transition-opacity duration-300',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  children,
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch((error) => {
        console.error('AutoPlay failed:', error);
      });
    }
  }, [autoPlay]);

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <video
        ref={videoRef}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          videoClassName
        )}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
      >
        <source
          src={`/video/${src}`}
          type="video/mp4"
        />
        مرورگر شما از برچسب ویدیو پشتیبانی نمی کند.
      </video>
      {children}
    </div>
  );
}
