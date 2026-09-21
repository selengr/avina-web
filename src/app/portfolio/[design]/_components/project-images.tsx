'use client';

import ProjectItems from '@/app/portfolio/_components/projects-items/project-items';
import SwiperSlider from '../../../_components/common/swiper-slider/SwiperSlider';
import { ICardSwiperSlider } from '../../../_components/common/swiper-slider/type';
import type { PortfolioProject } from '@/constans/site-catalog';

const ProjectImages = ({ projects }: { projects: PortfolioProject[] }) => {
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
    <div>
      <SwiperSlider
        title="پروژه‌های مشابه"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
        cards={cards}
        renderSlide={renderSlide}
        className="md:px-4 lg:px-8 2xl:px-48"
        hasScroll={true}
      />
    </div>
  );
};

export default ProjectImages;
