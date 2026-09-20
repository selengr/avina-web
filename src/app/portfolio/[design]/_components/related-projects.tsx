'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GifScreen from '../../../_components/common/gif';
import { Card } from '../../../_components/common/card/card';
import SwiperSlider from '../../../_components/common/swiper-slider/SwiperSlider';
import { ICardSwiperSlider } from '../../../_components/common/swiper-slider/type';
import StylizedButton from '../../../_components/common/field/button/stylized-button';
import { cn } from '@/lib/utils';
import { PATH_PAGE } from '../../../../../routes/paths';

const defaultCards: ICardSwiperSlider[] = [
  {
    id: 1,
    title: 'سیستم مدیریت مشتریان',
    image: 'images/card1.svg',
    link: 'crm',
  },
  {
    id: 2,
    title: 'فروشگاه آنلاین',
    image: 'images/card3.svg',
    link: 'shop',
  },
  {
    id: 3,
    title: 'اپ مدیریت پروژه',
    image: 'images/card2.svg',
    link: 'pm-app',
  },
  {
    id: 4,
    title: 'پرتال داخلی',
    image: 'images/card1.svg',
    link: 'intranet',
  },
  {
    id: 5,
    title: 'امنیت داده',
    image: 'images/card3.svg',
    link: 'data-secure',
  },
  {
    id: 6,
    title: 'اتوماسیون اداری',
    image: 'images/card2.svg',
    link: 'automation',
  },
];

function RelatedProjectSlide({ project }: { project: ICardSwiperSlider }) {
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

const RelatedProjects = () => {
  return (
    <div className="relative">
      <SwiperSlider
        title="پروژه های مرتبط"
        cards={defaultCards}
        renderSlide={(project) => <RelatedProjectSlide project={project} />}
        className="md:px-4 lg:px-8 2xl:px-48"
        hasScroll={true}
      />
      <h3
        className={cn(
          'hidden md:flex font-museo-moderno font-[250] lg:text-[45px] xl:text-[60px] text-divider absolute',
          'left-16 xl:bottom-[45%] -rotate-90'
        )}
      >
        Related
      </h3>
    </div>
  );
};

export default RelatedProjects;
