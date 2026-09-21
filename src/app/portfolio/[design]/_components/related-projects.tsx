'use client';

import ProjectItems from '@/app/portfolio/_components/projects-items/project-items';
import SwiperSlider from '../../../_components/common/swiper-slider/SwiperSlider';
import { ICardSwiperSlider } from '../../../_components/common/swiper-slider/type';
import { cn } from '@/lib/utils';
import { PATH_PAGE } from '../../../../../routes/paths';
import type { PortfolioProject } from '@/constans/site-catalog';
import Link from 'next/link';

const RelatedProjects = ({ projects }: { projects: PortfolioProject[] }) => {
  const cards: ICardSwiperSlider[] = projects.map((project) => ({
    id: project.id,
    title: project.title,
    image: project.image,
    link: project.slug,
  }));

  const renderSlide = (card: ICardSwiperSlider) => {
    const match = projects.find((project) => project.id === card.id);
    return (
      <ProjectItems
        id={card.id}
        title={card.title}
        image={card.image}
        slug={match?.slug}
        category={match?.category}
        description={match?.description}
      />
    );
  };

  if (cards.length === 0) return null;

  return (
    <div className="relative">
      <SwiperSlider
        title="پروژه‌های مرتبط"
        cards={cards}
        renderSlide={renderSlide}
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
      <div className="md:px-4 lg:px-8 2xl:px-48 pb-4">
        <Link
          href={PATH_PAGE.portfolio.root}
          className="text-primary text-m-body2 underline"
        >
          مشاهده همه نمونه کارها
        </Link>
      </div>
    </div>
  );
};

export default RelatedProjects;
