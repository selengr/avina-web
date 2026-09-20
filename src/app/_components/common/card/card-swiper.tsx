'use client';

import { useEffect, useMemo, useState } from 'react';
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

  const rotations = useMemo(
    () => testimonials.map((_, i) => ((i * 7) % 21) - 10),
    [testimonials]
  );

  return (
    <div className="relative w-[95%] lg:w-full max-w-[816px] antialiased font-sans px-4 md:px-16 lg:px-16 xl:px-28 pt-12">
      <div className="relative gap-52">
        <div className="relative h-52 xs:h-64 md:h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              const isActive = index === active;
              return (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.55,
                    scale: isActive ? 1 : 0.94,
                    rotate: isActive ? 0 : rotations[index],
                    zIndex: isActive ? 40 : testimonials.length - index,
                    y: isActive ? [0, -24, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.35,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div
                    className={cn(
                      'h-[300px] xs:h-[320px] w-full md:h-[319px] rounded-3xl relative shadow-sm',
                      testimonial.className
                    )}
                  >
                    {isActive && (
                      <Image
                        src="/images/avatar.svg"
                        alt=""
                        width={100}
                        height={100}
                        draggable={false}
                        className="h-[80px] md:h-[120px] w-[80px] md:w-[120px] rounded-full object-cover object-center absolute left-[40%] -top-10 md:-top-12"
                      />
                    )}

                    <Image
                      src="/images/quote.svg"
                      alt=""
                      width={100}
                      height={100}
                      draggable={false}
                      className="h-[40px] w-[60px] md:h-[95px] md:w-[143px] object-cover object-center absolute left-6 top-28 md:top-12"
                    />

                    <h5 className="flex justify-center pt-[72px] font-kalameh font-bold text-d-h5 text-primary">
                      {testimonial.name}
                    </h5>
                    <p className="text-center text-m-caption text-secondary mt-1">
                      {testimonial.designation}
                    </p>

                    <Description className="flex justify-center pt-4 md:pt-6 text-d-body1 text-secondary px-7 text-justify">
                      {testimonial.quote}
                    </Description>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-between flex-col pt-14 md:py-4">
        <div className="flex gap-4 pt-12 md:pt-12 w-full">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="نظر قبلی"
            className="h-10 w-10 rounded-full md:absolute md:left-0 md:top-[45%] flex items-center justify-center group/button hover:opacity-80 transition-opacity"
          >
            <IconCircleArrowLeft
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="#637381"
              stroke="none"
            />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="نظر بعدی"
            className="h-10 w-10 rounded-full md:absolute md:right-0 md:top-[45%] flex items-center justify-center group/button hover:opacity-80 transition-opacity"
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
    </div>
  );
};

export default AnimatedTestimonials;
