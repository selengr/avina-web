'use client';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { TStylizedButtonProps } from './button.types';
import { IconArrowLeftDown } from '@/app/_components/icons/icons';

export default function StylizedButton({
  text,
  onClick,
  className,
  bgColor = 'white',
  hoverdBgColor = 'secondary',
  type = 'button',
  customClasses = {
    btn: '',
    icon: '',
    iconWrapper: '',
    text: '',
  },
}: TStylizedButtonProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (iconRef.current) {
      iconRef.current.classList.add('bg-primary-text');
      iconRef.current.classList.remove('bg-secondary');
    }
    if (textRef.current) {
      textRef.current.classList.add('text-primary-text');
      textRef.current.classList.remove('text-secondary');
    }
  };

  const handleMouseLeave = () => {
    if (iconRef.current) {
      iconRef.current.classList.remove('bg-primary-text');
      iconRef.current.classList.add('bg-secondary');
    }
    if (textRef.current) {
      textRef.current.classList.remove('text-primary-text');
      textRef.current.classList.add('text-secondary');
    }
  };

  return (
    <div
      className={cn(`relative drop-shadow-lg z-[99999999] min-w-44`, className)}
    >
      {/* SVG Filters */}
      <svg className="absolute w-0 h-0 invisible ">
        <filter id="round-lg">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="12"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            result="goo"
          />
          <feComposite
            in="SourceGraphic"
            in2="goo"
            operator="atop"
          />
        </filter>
        <filter id="round-sm">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            result="goo"
          />
          <feComposite
            in="SourceGraphic"
            in2="goo"
            operator="atop"
          />
        </filter>
      </svg>

      <div
        className="relative"
        style={{ filter: 'url(#round-lg)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            clipPath:
              'polygon(0 0, 100% 0, 100% 80%, 40% 80%, 40% 100%, 0 100%)',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODY3OTgwMjV8&ixlib=rb-4.0.3&q=80&w=400)',
          }}
        />
      </div>

      <button
        type={type}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          `rotate-180 w-full z-[99999999] h-[42px] pr-1.5 text-center flex justify-center items-center gap-2 hover:scale-[1.009] hover:text-primary-text`,
          customClasses.btn
        )}
        style={{ filter: 'url(#round-sm)' }}
      >
        <div
          className={`w-[44px] h-[44px] rounded-full bg-${bgColor} flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105`}
        >
          <div
            ref={iconRef}
            className={cn(
              `text-xl bg-secondary text-white rounded-full p-[3px] rotate-180`,
              customClasses?.iconWrapper
            )}
          >
            <IconArrowLeftDown className={cn(customClasses.icon)} />
          </div>
        </div>
        <div
          ref={textRef}
          className={cn(
            `relative flex-1 h-full min-w-28 text-secondary z-[99999999] font-semibold rounded-full bg-${bgColor} flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-[1.02] after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2 after:bg-white   text-[10px] xs:text-m-body2 md:text-d-body2 md:font-kalameh`,
            customClasses.text
          )}
        >
          <span className="rotate-180 line-clamp-1">{text}</span>
        </div>
      </button>
    </div>
  );
}
