'use client';

import SwiperSlider from '../common/swiper-slider/SwiperSlider';
import { ICardSwiperSlider } from '../common/swiper-slider/type';
import ProjectItems from '@/app/portfolio/_components/projects-items/project-items';

const defaultCards = [
  {
    id: 1,
    title: 'card1',
    image: 'images/card1.svg',
    link: '#',
  },
  {
    id: 2,
    title: 'card3',
    image: 'images/card3.svg',
    link: '#',
  },
  {
    id: 3,
    title: 'card2',
    image: 'images/card2.svg',
    link: '#',
  },
  {
    id: 4,
    title: 'card1',
    image: 'images/card1.svg',
    link: '#',
  },
  {
    id: 5,
    title: 'card3',
    image: 'images/card3.svg',
    link: '#',
  },
  {
    id: 6,
    title: 'card2',
    image: 'images/card2.svg',
    link: '#',
  },
];

const renderSlide = (project: ICardSwiperSlider) => {
  return (
    <ProjectItems
      id={project?.id}
      image={project?.image}
      title={project?.title}
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
