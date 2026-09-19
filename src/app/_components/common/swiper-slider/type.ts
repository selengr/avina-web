export interface ICardSwiperSlider {
  id: number;
  title: string;
  image: string;
  link: string;
  category?: string;
  date?: string;
  summary?: string;
}

export interface ISwiperSliderProps {
  title?: string;
  cards: any;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
  className?: string;
  hasScroll?: boolean;
  renderSlide: (project: ICardSwiperSlider) => React.ReactNode;
}
