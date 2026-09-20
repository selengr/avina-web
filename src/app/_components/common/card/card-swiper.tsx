'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Description from '../../common/field/description';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCircleArrowLeft, IconCircleArrowRight } from '../../icons/icons';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  className: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay || testimonials.length < 2) return;
    const interval = setInterval(handleNext, 5500);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length, active]);

  const current = testimonials[active];

  return (
    <div className="relative w-full max-w-[816px] antialiased font-sans px-2 xs:px-4 md:px-8 lg:px-12 pt-10 md:pt-14 mx-auto">
      <div className="relative min-h-[300px] xs:min-h-[320px] md:min-h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              'relative w-full rounded-3xl shadow-sm p-5 pb-7 md:p-8',
              current.className
            )}
          >
            <Image
              src={current.src?.startsWith('/') ? current.src : '/images/avatar.svg'}
              alt=""
              width={100}
              height={100}
              draggable={false}
              className="h-[64px] md:h-[96px] w-[64px] md:w-[96px] rounded-full object-cover object-center absolute left-1/2 -translate-x-1/2 -top-8 md:-top-12 bg-white shadow-sm"
            />

            <Image
              src="/images/quote.svg"
              alt=""
              width={100}
              height={100}
              draggable={false}
              className="h-[24px] w-[36px] md:h-[48px] md:w-[72px] object-contain absolute left-5 top-12 md:left-8 md:top-14 opacity-70"
            />

            <h5 className="flex justify-center pt-10 md:pt-14 font-kalameh font-bold text-m-h5 md:text-d-h5 text-primary">
              {current.name}
            </h5>
            <p className="text-center text-m-caption text-secondary mt-1 px-2">
              {current.designation}
            </p>

            <Description className="flex justify-center pt-3 md:pt-5 text-m-body2 md:text-d-body1 text-secondary px-2 md:px-6 text-justify">
              {current.quote}
            </Description>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-5 md:mt-6">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="نظر قبلی"
          className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <IconCircleArrowLeft
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="#637381"
            stroke="none"
          />
        </button>

        <div className="flex items-center gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`نظر ${index + 1}`}
              onClick={() => setActive(index)}
              className={cn(
                'h-2 rounded-full transition-all',
                index === active
                  ? 'w-5 bg-primary'
                  : 'w-2 bg-divider hover:bg-secondary'
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="نظر بعدی"
          className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <IconCircleArrowRight
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="#637381"
            stroke="none"
          />
        </button>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
