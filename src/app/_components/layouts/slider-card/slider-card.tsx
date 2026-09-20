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
import { VerticalImage } from '../../common/vertical-image/vertical-image';
import Title from '../../common/field/title';
import { IconCardArrow } from '../../icons/icons';

const projects = [
  {
    id: 1,
    title: 'طراحی داشبورد سازمانی',
    image: 'images/card1.svg',
    link: '/portfolio',
  },
  {
    id: 2,
    title: 'پرتال خدمات مشتریان',
    image: 'images/card3.svg',
    link: '/portfolio',
  },
  {
    id: 3,
    title: 'سامانه مدیریت پروژه',
    image: 'images/card2.svg',
    link: '/portfolio',
  },
  {
    id: 4,
    title: 'اپلیکیشن موبایل فروش',
    image: 'images/card1.svg',
    link: '/portfolio',
  },
];

export default function SliderCard() {
  return (
    <div className="w-full bg-gray-50 py-12 md:px-4 lg:px-8 2xl:px-48">
      <div className="container mx-auto px-4">
        <div className="mb-6 md:mb-8 flex items-center justify-between gap-4">
          <Title className="mb-0">نمونه کارهای آوینا</Title>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
            direction: 'rtl',
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-2 basis-[85%] xs:basis-[70%] md:basis-1/2 lg:basis-1/3 md:pl-4"
              >
                <Link
                  href={project.link}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                >
                  <Card className="group relative overflow-hidden rounded-3xl border-none shadow-sm transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/${project.image}`}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <p className="text-sm md:text-base text-white font-medium line-clamp-1">
                        {project.title}
                      </p>
                      <div className="rounded-full bg-white/95 p-2 shadow-md transition-transform duration-300 group-hover:-translate-x-1">
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

          <div className="mt-6 flex items-center justify-center gap-3 md:absolute md:top-1/2 md:inset-x-0 md:mt-0 md:-translate-y-1/2 md:justify-between md:pointer-events-none">
            <CarouselPrevious className="md:pointer-events-auto md:-translate-x-2" />
            <CarouselNext className="md:pointer-events-auto md:translate-x-2" />
          </div>

          <VerticalImage
            className="w-12 h-full bottom-0 -left-10"
            src="projects"
          />
        </Carousel>
      </div>
    </div>
  );
}
