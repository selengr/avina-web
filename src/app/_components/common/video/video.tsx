'use client';

import { cn } from '@/lib/utils';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

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

/** When large mp4s are missing (gitignored), fall back to smaller clips. */
const VIDEO_FALLBACKS: Record<string, string> = {
  'video1.mp4': 'gif1.mp4',
  'video2.mp4': 'gif2.mp4',
};

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
  const [activeSrc, setActiveSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const resolvedSrc = useMemo(() => activeSrc, [activeSrc]);

  useEffect(() => {
    setActiveSrc(src);
    setFailed(false);
  }, [src]);

  useEffect(() => {
    if (videoRef.current && autoPlay && !failed) {
      videoRef.current.play().catch(() => {
        // Autoplay can be blocked by the browser; ignore quietly.
      });
    }
  }, [autoPlay, resolvedSrc, failed]);

  const handleError = () => {
    const fallback = VIDEO_FALLBACKS[activeSrc];
    if (fallback && fallback !== activeSrc) {
      setActiveSrc(fallback);
      return;
    }
    setFailed(true);
  };

  if (failed) {
    return (
      <div
        className={cn(
          'relative w-full h-full overflow-hidden bg-primary/10',
          className
        )}
        aria-hidden
      >
        {children}
      </div>
    );
  }

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <video
        key={resolvedSrc}
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
        onError={handleError}
      >
        <source
          src={`/video/${resolvedSrc}`}
          type="video/mp4"
        />
        مرورگر شما از برچسب ویدیو پشتیبانی نمی کند.
      </video>
      {children}
    </div>
  );
}
