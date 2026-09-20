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

const defaultCards: ICardSwiperSlider[] = [
  {
    id: 1,
    title: 'نمای داشبورد',
    image: 'images/card1.svg',
    link: 'crm',
  },
  {
    id: 2,
    title: 'صفحه محصول',
    image: 'images/card3.svg',
    link: 'shop',
  },
  {
    id: 3,
    title: 'پنل مدیریت',
    image: 'images/card2.svg',
    link: 'pm-app',
  },
  {
    id: 4,
    title: 'موبایل',
    image: 'images/card1.svg',
    link: 'mobile-ui',
  },
  {
    id: 5,
    title: 'گزارش‌ها',
    image: 'images/card3.svg',
    link: 'automation',
  },
  {
    id: 6,
    title: 'پروفایل کاربر',
    image: 'images/card2.svg',
    link: 'intranet',
  },
];

function ProjectImageSlide({ project }: { project: ICardSwiperSlider }) {
  const { push } = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = project.image?.startsWith('/')
    ? project.image
    : `/${project.image || 'images/placeholder.svg'}`;

  return (
    <Card
      className="group relative h-full overflow-hidden rounded-3xl border-none bg-transparent shadow-none transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-sm">
        <Image
          src={imageSrc}
          alt={project.title}
          width={300}
          height={225}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        className="my-2 md:mt-3 py-2"
        text={project.title}
        onClick={() => push(PATH_PAGE.portfolio.design(project.link))}
      />
    </Card>
  );
}

const ProjectImages = () => {
  return (
    <div>
      <SwiperSlider
        title="تصاویر پروژه"
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 12 },
          480: { slidesPerView: 1.5, spaceBetween: 14 },
          768: { slidesPerView: 2.2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        cards={defaultCards}
        renderSlide={(project) => <ProjectImageSlide project={project} />}
        className="md:px-4 lg:px-8 2xl:px-48"
        hasScroll={true}
      />
    </div>
  );
};

export default ProjectImages;
