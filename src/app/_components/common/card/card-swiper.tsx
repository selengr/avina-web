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
  autoplay = false,
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

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  //   const containerRef = useRef<HTMLDivElement>(null);
  //   const [touchStart, setTouchStart] = useState(0);
  //   const [touchEnd, setTouchEnd] = useState(0);

  //   const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
  //     setTouchStart(e.targetTouches[0].clientX);
  //   };

  //   const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
  //     setTouchEnd(e.targetTouches[0].clientX);
  //   };

  //   const handleTouchEnd = () => {
  //     if (touchStart - touchEnd > 75) {
  //       handleNext();
  //     }

  //     if (touchStart - touchEnd < -75) {
  //       handlePrev();
  //     }
  //   };

  // if(IsClient()) return<></>

  return (
    <div
      //   ref={containerRef}
      className="relative w-[95%] lg:w-full max-w-[816px] antialiased font-sans px-4 md:px-16 lg:px-16 xl:px-28 pt-12"
      //   onTouchStart={handleTouchStart}
      //   onTouchMove={handleTouchMove}
      //   onTouchEnd={handleTouchEnd}
    >
      <div className="relative gap-52">
        <div>
          <div className="relative h-52 xs:h-64 md:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div
                    className={cn(
                      //   'h-[402px] w-[343px] md:h-[319px] md:w-[629px] rounded-3xl relative',
                      'h-[300px] xs:h-[320px] w-full md:h-[319px] rounded-3xl relative',
                      testimonial.className
                    )}
                  >
                    {isActive(index) && (
                      <Image
                        src={'/images/avatar.svg'}
                        alt={'quote'}
                        width={100}
                        height={100}
                        draggable={false}
                        className="h-[80px] md:h-[120px] w-[80px] md:w-[120px] rounded-full object-cover object-center absolute left-[40%] -top-10 md:-top-12"
                      />
                    )}

                    <Image
                      src={'/images/quote.svg'}
                      alt={'quote'}
                      width={100}
                      height={100}
                      draggable={false}
                      className="h-[40px] w-[60px] md:h-[95px] md:w-[143px] object-cover object-center absolute left-6 top-28 md:top-12"
                    />
                    <h5 className="flex justify-center pt-[72px] font-kalameh font-bold text-d-h5 text-primary">
                      سمیرا خرمی
                    </h5>

                    <Description className="flex justify-center pt-[72px] text-d-body1 text-secondary px-7 text-justify">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد.
                    </Description>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className=" flex justify-between flex-col pt-14 md:py-4">
        <motion.div
          key={active}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <div className="flex gap-4 pt-12 md:pt-12 w-full ">
          <button
            onClick={handlePrev}
            className="h-10 w-10 rounded-full md:absolute  md:left-0 md:top-[45%] flex items-center justify-center group/button "
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
            onClick={handleNext}
            className="h-10 w-10 rounded-full md:absolute md:right-0 md:top-[45%] flex items-center justify-center group/button"
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
//

export default AnimatedTestimonials;
