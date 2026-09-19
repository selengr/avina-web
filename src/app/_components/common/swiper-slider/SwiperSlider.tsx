'use client';
import 'swiper/css';
import React from 'react';
import Title from '../field/title';
import { ISwiperSliderProps } from './type';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './swiper-slider.module.css';

import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const defaultBreakpoints = {
  0: {
    slidesPerView: 1.5,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 16,
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
  return (
    <div className={`w-full pt-12 ${className}`}>
      <div className="">
        {title && (
          <div>
            <Title className="pr-4 md:pr-0">{title}</Title>
          </div>
        )}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Scrollbar]}
          scrollbar={{
            el: `.${styles.swiperScrollbar}`,
            draggable: true,
            hide: true,
            snapOnRelease: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={breakpoints}
          className={`${styles.swiperContainer}`}
        >
          {cards?.map((card: any) => (
            <SwiperSlide key={card.id}>{renderSlide(card)}</SwiperSlide>
          ))}
          {hasScroll && (
            <div className="wifull flex justify-center items-center flex-col mt-10">
              <div className={styles.swiperScrollbar}></div>
              <span className="text-secondary font-kalameh text-d-subtitle2 py-2">
                پیمایش کنید
              </span>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
