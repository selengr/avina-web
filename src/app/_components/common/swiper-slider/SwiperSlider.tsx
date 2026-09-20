'use client';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useRef } from 'react';
import Title from '../field/title';
import { ISwiperSliderProps } from './type';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import styles from './swiper-slider.module.css';
import {
  IconCircleArrowLeft,
  IconCircleArrowRight,
} from '../../icons/icons';

const defaultBreakpoints = {
  0: {
    slidesPerView: 1.05,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 1.2,
    spaceBetween: 12,
  },
  640: {
    slidesPerView: 1.6,
    spaceBetween: 14,
  },
  768: {
    slidesPerView: 2.1,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

export default function SwiperSlider({
  title = '',
  cards,
  breakpoints = defaultBreakpoints,
  className = '',
  renderSlide,
  hasScroll = false,
}: ISwiperSliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={`w-full pt-8 md:pt-12 overflow-x-hidden ${className}`}>
      <div className="relative px-1 sm:px-0">
        {title && (
          <div className="mb-3 md:mb-2 flex items-center justify-between gap-3 px-3 md:px-0">
            <Title className="pr-0 mb-0 text-m-h5 md:text-inherit">{title}</Title>
            <div className="hidden md:flex items-center gap-2 pl-1">
              <button
                ref={prevRef}
                type="button"
                className="h-10 w-10 rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="اسلاید قبلی"
              >
                <IconCircleArrowRight
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  stroke="none"
                />
              </button>
              <button
                ref={nextRef}
                type="button"
                className="h-10 w-10 rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="اسلاید بعدی"
              >
                <IconCircleArrowLeft
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  stroke="none"
                />
              </button>
            </div>
          </div>
        )}

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1.05}
          spaceBetween={10}
          grabCursor
          watchOverflow
          nested={false}
          resistanceRatio={0.65}
          onBeforeInit={(swiper: SwiperType) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== 'boolean') {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          scrollbar={
            hasScroll
              ? {
                  el: `.${styles.swiperScrollbar}`,
                  draggable: true,
                  hide: false,
                  snapOnRelease: true,
                }
              : undefined
          }
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={breakpoints}
          className={styles.swiperContainer}
        >
          {cards?.map((card) => (
            <SwiperSlide key={card.id}>{renderSlide(card)}</SwiperSlide>
          ))}
        </Swiper>

        {hasScroll && (
          <div className="w-full flex justify-center items-center flex-col mt-8 md:mt-10">
            <div className={styles.swiperScrollbar} />
            <span className="text-secondary font-kalameh text-d-subtitle2 py-2">
              پیمایش کنید
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
