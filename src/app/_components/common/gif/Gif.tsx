'use client';

import { cn } from '@/lib/utils';
import Lottie from 'react-lottie';
import { useEffect, useState } from 'react';

export default function GifScreen({
  className,
  style,
}: {
  className?: string;
  style?: object;
}) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/Stripes.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setAnimationData(data);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  if (!animationData) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      clearCanvas: true,
    },
  };

  return (
    <div
      className={cn('pointer-events-none', className)}
      style={style}
      aria-hidden
    >
      <Lottie
        options={defaultOptions}
        height="100%"
        width="100%"
        isClickToPauseDisabled
      />
    </div>
  );
}
