'use client';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect, useRef, useState } from 'react';
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
    slidesPerView: 1.15,
    spaceBetween: 12,
  },
  480: {
    slidesPerView: 1.4,
    spaceBetween: 14,
  },
  640: {
    slidesPerView: 1.8,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 2.2,
    spaceBetween: 18,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3.2,
    spaceBetween: 22,
  },
};

export default function SwiperSlider({
  title = '',
  cards,
  breakpoints = defaultBreakpoints,
  className = '',
  renderSlide,
  hasScroll = false,
  showNav = true,
}: ISwiperSliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const hasMultiple = (cards?.length ?? 0) > 1;

  useEffect(() => {
    if (!swiperInstance || !hasMultiple) return;

    const navigation = swiperInstance.params.navigation;
    if (navigation && typeof navigation !== 'boolean') {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, hasMultiple, title, showNav]);

  const navButtons = showNav && hasMultiple && (
    <div className="flex items-center gap-2 shrink-0">
      <button
        ref={prevRef}
        type="button"
        className={styles.navBtn}
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
        className={styles.navBtn}
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
  );

  return (
    <div className={`w-full pt-8 md:pt-12 overflow-x-hidden ${className}`}>
      <div className="relative px-1 sm:px-0">
        {(title || navButtons) && (
          <div className="mb-4 md:mb-5 flex items-center justify-between gap-3 px-3 md:px-0">
            {title ? (
              <Title className="pr-0 mb-0 text-m-h5 md:text-inherit">
                {title}
              </Title>
            ) : (
              <span />
            )}
            {navButtons}
          </div>
        )}

        <Swiper
          dir="rtl"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1.15}
          spaceBetween={12}
          grabCursor
          watchOverflow
          nested={false}
          resistanceRatio={0.7}
          speed={450}
          onSwiper={setSwiperInstance}
          navigation={
            hasMultiple
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : false
          }
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
          {cards?.map((card: { id: number | string }) => (
            <SwiperSlide key={card.id} className={styles.slide}>
              {renderSlide(card as never)}
            </SwiperSlide>
          ))}
        </Swiper>

        {hasScroll && (
          <div className="w-full flex justify-center items-center flex-col mt-6 md:mt-8">
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
