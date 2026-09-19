'use client';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    src: 'logo1',
    name: 'A Tale of Two Cities',
  },
  {
    src: 'logo2',
    name: 'William Shakespeare',
  },
  {
    src: 'logo3',
    name: '3',
  },
  {
    src: 'logo4',
    name: '4',
  },
  {
    src: 'logo5',
    name: '5',
  },
  {
    src: 'logo6',
    name: '6',
  },
  // {
  //   src: "logo7",
  //    name: "7"
  // },
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div className=" h-[154px] flex antialiased  items-center justify-center relative  w-screen ">
      <div
        ref={containerRef}
        className={cn(
          'scroller relative z-20 border-y-[1px] overflow-hidden',
          // [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            ' flex shrink-0 gap-4 py-1 flex-nowrap items-center justify-center',
            start && 'animate-scroll ',
            pauseOnHover && 'hover:[animation-play-state:paused]'
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-[200px] relative flex-shrink-0 px-2 py-6 md:py-9"
              style={
                {
                  // background:
                  //   "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                }
              }
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_80px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 leading-[1.6] flex flex-row items-center justify-center">
                  <div className="w-[236px] flex items-center justify-center">
                    <Image
                      src={`/logo/${item.src}.svg` || '/images/placeholder.svg'}
                      alt="logo"
                      width={236}
                      height={60}
                      // className="mx-4"
                    />
                  </div>
                  <div className="w-[26px] flex items-center justify-center">
                    <Image
                      src={'/logo/spacer.svg'}
                      alt="spacer"
                      width={26}
                      height={26}
                      className="mr-12 ml-2"
                    />
                  </div>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
