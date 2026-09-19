'use client';

import { cn } from '@/lib/utils';
import type React from 'react';

import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

interface CounterProps {
  end: number;
  duration?: number;
}

function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement | any>(null);
  const isIntersecting = useIntersectionObserver(countRef, {
    threshold: 0.5,
    root: null,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (isIntersecting) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isIntersecting, end, duration]);

  return (
    <div
      ref={countRef}
      className="text-m-h6 md:text-d-h2 lg:md:text-d-h3 xl:md:text-d-h2 font-bold md:font-semibold text-primary-text md:font-kalameh"
    >
      +{count}
    </div>
  );
}

export default function StatsSection({ className }: { className?: string }) {
  return (
    <div className={cn('w-full md:pb-16 bg-transparent', className)}>
      <div className="w-full">
        <div className="w-full flex flex-row gap-2 text-center pr-0 xs:pr-4 md:pr-10 lg:pr-0">
          <div className="space-y-2 flex flex-col flex-1">
            <Counter end={10} />
            <p className="text-secondary text-m-caption md:text-d-body1 lg:text-d-body2 xl:text-d-body1 md:font-kalameh">
              تجربه درخشان و موفق
            </p>
          </div>

          <div className="space-y-2 flex flex-col flex-1">
            <Counter end={20} />
            <p className="text-secondary text-m-caption md:text-d-body1 lg:text-d-body2 xl:text-d-body1 md:font-kalameh">
              تیمی خلاق و مجرب
            </p>
          </div>

          <div className="space-y-2 flex flex-col flex-1">
            <Counter end={182} />
            <p className="text-secondary text-m-caption md:text-d-body1 lg:text-d-body2 xl:text-d-body1 md:font-kalameh">
              پروژه اجرایی موفق
            </p>
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <Counter end={2850} />
            <p className="text-secondary text-m-caption md:text-d-body1 lg:text-d-body2 xl:text-d-body1 md:font-kalameh">
              مشتریان وفا
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
