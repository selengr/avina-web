'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PATH_PAGE } from '../../../../../routes/paths';
import GifScreen from '../../../_components/common/gif';
import { Card } from '../../../_components/common/card/card';
import SwiperSlider from '../../../_components/common/swiper-slider/SwiperSlider';
import { ICardSwiperSlider } from '../../../_components/common/swiper-slider/type';
import StylizedButton from '../../../_components/common/field/button/stylized-button';

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
  const { push } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden transition-all hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={'/' + project.image || '/images/placeholder.svg'}
          alt={project.title}
          width={300}
          height={225}
          className="h-full w-full object-cover transition-transform duration-300"
        />
        {isHovered && (
          <GifScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '200%',
              height: '100%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </div>

      <StylizedButton
        className="py-7 px-[6px]"
        text={' طراحی و پیاده سازی وب سایت خودروسازی شرکت بنتلی...'}
        onClick={() => push(PATH_PAGE.portfolio.design(project.title))}
      />
    </Card>
  );
};

const ProjectImages = () => {
  return (
    <div>
      <SwiperSlider
        title="تصاویر پروژه"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
        cards={defaultCards}
        renderSlide={renderSlide}
        className="md:px-4 lg:px-8 2xl:px-48"
        hasScroll={true}
      />
    </div>
  );
};

export default ProjectImages;
