'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../../common/card/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../common/carousel/carousel';
import Title from '../../common/field/title';
import { IconCardArrow } from '../../icons/icons';

const projects = [
  {
    id: 1,
    title: 'طراحی داشبورد سازمانی',
    image: 'images/card1.svg',
    link: '/portfolio/crm',
  },
  {
    id: 2,
    title: 'پرتال خدمات مشتریان',
    image: 'images/card3.svg',
    link: '/portfolio/intranet',
  },
  {
    id: 3,
    title: 'سامانه مدیریت پروژه',
    image: 'images/card2.svg',
    link: '/portfolio/pm-app',
  },
  {
    id: 4,
    title: 'اپلیکیشن موبایل فروش',
    image: 'images/card1.svg',
    link: '/portfolio/mobile-ui',
  },
  {
    id: 5,
    title: 'فروشگاه آنلاین',
    image: 'images/card2.svg',
    link: '/portfolio/shop',
  },
  {
    id: 6,
    title: 'اتوماسیون اداری',
    image: 'images/card3.svg',
    link: '/portfolio/automation',
  },
];

export default function SliderCard() {
  return (
    <div className="w-full py-10 md:py-14 md:px-4 lg:px-8 2xl:px-48">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          direction: 'rtl',
          skipSnaps: false,
        }}
        className="w-full px-4 md:px-0"
      >
        <div className="mb-5 md:mb-8 flex items-center justify-between gap-4">
          <Title className="mb-0 text-m-h5 md:text-inherit">
            نمونه کارهای آوینا
          </Title>
          <div className="hidden sm:flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="-mr-3 md:-mr-4">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pr-3 md:pr-4 basis-[82%] xs:basis-[70%] sm:basis-[55%] md:basis-1/2 lg:basis-1/3"
            >
              <Link
                href={project.link}
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-3xl"
              >
                <Card className="group relative h-full overflow-hidden rounded-3xl border-none shadow-sm transition-all duration-300 hover:shadow-lg bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={`/${project.image}`}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <p className="text-sm md:text-base text-white font-medium line-clamp-1">
                      {project.title}
                    </p>
                    <div className="rounded-full bg-white/95 p-2 shadow-md transition-transform duration-300 group-hover:-translate-x-1 shrink-0">
                      <IconCardArrow
                        width="20"
                        height="20"
                        viewBox="0 0 36 36"
                        fill="#687BF2"
                        stroke="fill"
                      />
                    </div>
                  </div>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-5 flex sm:hidden items-center justify-center gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
