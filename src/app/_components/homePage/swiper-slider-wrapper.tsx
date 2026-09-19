'use client';

import { TNewsAndArticlesData } from '@/types/news-and-articles';
import SwiperSlider from '../common/swiper-slider/SwiperSlider';
import Image from 'next/image';
import { Card } from '../common/card/card';
import { IconCalendar } from '../icons/icons';
import { ICardSwiperSlider } from '../common/swiper-slider/type';

const defaultCards: ICardSwiperSlider[] = [
  {
    id: 1,
    title: 'خبر جدید در مورد صادرات و واردات محصولات',
    image: 'images/news-card1.svg',
    link: '#',
  },
  {
    id: 2,
    title: 'تحول دیجیتال در کسب‌وکارهای ایرانی',
    image: 'images/news-card3.svg',
    link: '#',
  },
  {
    id: 3,
    title: 'امنیت شبکه و زیرساخت‌های سازمانی',
    image: 'images/news-card2.svg',
    link: '#',
  },
  {
    id: 4,
    title: 'خدمات پشتیبانی و آموزش تخصصی',
    image: 'images/news-card1.svg',
    link: '#',
  },
  {
    id: 5,
    title: 'طراحی محصول و تجربه کاربری',
    image: 'images/news-card2.svg',
    link: '#',
  },
];

function mapNewsToCards(newsCard: TNewsAndArticlesData[]): ICardSwiperSlider[] {
  return newsCard.map((article) => ({
    id: article.id,
    title: article.title,
    image: article.thumbnail?.preview_link || article.thumbnail?.path || '',
    link: article.slug ? `/news/${article.slug}` : '#',
    date: article.published_at,
    summary: article.headline || undefined,
  }));
}

export default function SwiperSliderWrapper({
  newsCard,
}: {
  newsCard: TNewsAndArticlesData[];
}) {
  const cards =
    newsCard?.length > 0 ? mapNewsToCards(newsCard) : defaultCards;

  const renderSlide = (project: ICardSwiperSlider) => {
    const imageSrc = project.image?.startsWith('/')
      ? project.image
      : `/${project.image || 'placeholder.svg'}`;

    return (
      <Card className="group relative overflow-hidden transition-all hover:shadow-lg p-4 bg-white">
        <div className="overflow-hidden">
          <Image
            src={imageSrc}
            alt={project.title}
            width={268}
            height={318}
            className="transition-transform duration-300 group-hover:scale-105 object-cover h-[200px] xs:h-[240px] md:max-h-[311px]"
          />
        </div>
        <div className="bg-primary-lighter rounded-3xl w-[102px] h-28px mt-4 mb-2 flex gap-2 p-1 space-x-2">
          <IconCalendar
            width="22"
            height="20"
            fill="#687BF2"
            stroke="fill"
            viewBox="0 0 22 20"
          />
          <span className="text-primary text-d-caption md:font-kalameh">
            {project.date || '1403/07/25'}
          </span>
        </div>
        <div className="w-full mb-2">
          <h6 className="text-primary-text text-m-subtitle2 font-semibold md:font-kalameh">
            {project.title}
          </h6>
          <span className="text-secondary text-m-body2 md:font-kalameh">
            {project.summary ||
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...'}
          </span>
        </div>
      </Card>
    );
  };

  return (
    <SwiperSlider
      breakpoints={{
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
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
      className=""
      cards={cards}
      renderSlide={renderSlide}
    />
  );
}
