'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  { src: 'logo1', name: 'شریک ۱' },
  { src: 'logo2', name: 'شریک ۲' },
  { src: 'logo3', name: 'شریک ۳' },
  { src: 'logo4', name: 'شریک ۴' },
  { src: 'logo5', name: 'شریک ۵' },
  { src: 'logo6', name: 'شریک ۶' },
];

const InfiniteMovingCards = ({
  items = testimonials,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items?: {
    src: string;
    name: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const duplicatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    if (duplicatedRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });
    duplicatedRef.current = true;

    containerRef.current.style.setProperty(
      '--animation-direction',
      direction === 'left' ? 'forwards' : 'reverse'
    );

    const duration =
      speed === 'fast' ? '28s' : speed === 'normal' ? '45s' : '80s';
    containerRef.current.style.setProperty('--animation-duration', duration);
    setStart(true);
  }, [direction, speed]);

  return (
    <div className="h-[154px] flex antialiased items-center justify-center relative w-screen">
      <div
        ref={containerRef}
        className={cn(
          'scroller relative z-20 border-y border-divider overflow-hidden',
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            'flex shrink-0 gap-4 py-1 flex-nowrap items-center justify-center',
            start && 'animate-scroll',
            pauseOnHover && 'hover:[animation-play-state:paused]'
          )}
        >
          {items.map((item) => (
            <li
              className="w-[200px] relative flex-shrink-0 px-2 py-6 md:py-9"
              key={item.src}
            >
              <div className="relative z-20 leading-[1.6] flex flex-row items-center justify-center">
                <div className="w-[236px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                  <Image
                    src={`/logo/${item.src}.svg`}
                    alt={item.name}
                    width={236}
                    height={60}
                  />
                </div>
                <div className="w-[26px] flex items-center justify-center">
                  <Image
                    src="/logo/spacer.svg"
                    alt=""
                    width={26}
                    height={26}
                    className="mr-12 ml-2"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
