'use client';

import SwiperSlider from '../common/swiper-slider/SwiperSlider';
import { ICardSwiperSlider } from '../common/swiper-slider/type';
import ProjectItems from '@/app/portfolio/_components/projects-items/project-items';

const defaultCards: ICardSwiperSlider[] = [
  {
    id: 1,
    title: 'داشبورد سازمانی',
    image: 'images/card1.svg',
    link: '/portfolio',
  },
  {
    id: 2,
    title: 'پرتال مشتریان',
    image: 'images/card3.svg',
    link: '/portfolio',
  },
  {
    id: 3,
    title: 'مدیریت پروژه',
    image: 'images/card2.svg',
    link: '/portfolio',
  },
  {
    id: 4,
    title: 'فروش آنلاین',
    image: 'images/card1.svg',
    link: '/portfolio',
  },
  {
    id: 5,
    title: 'اپ موبایل',
    image: 'images/card3.svg',
    link: '/portfolio',
  },
  {
    id: 6,
    title: 'اتوماسیون اداری',
    image: 'images/card2.svg',
    link: '/portfolio',
  },
];

const renderSlide = (project: ICardSwiperSlider) => {
  return (
    <ProjectItems
      id={project.id}
      image={project.image}
      title={project.title}
    />
  );
};

const AvinaPortfolio = () => {
  return (
    <div>
      <SwiperSlider
        title="نمونه کارهای آوینا"
        cards={defaultCards}
        renderSlide={renderSlide}
        className="md:px-4 lg:px-8 2xl:px-48"
        hasScroll={true}
      />
    </div>
  );
};

export default AvinaPortfolio;
