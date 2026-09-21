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
import {
  portfolioProjects,
  projectImageSrc,
} from '@/constans/site-catalog';
import { PATH_PAGE } from '../../../../../routes/paths';

export default function SliderCard() {
  const projects = portfolioProjects.slice(0, 6);

  return (
    <div className="w-full bg-gray-50 py-12 md:px-4 lg:px-8 2xl:px-48">
      <div className="container mx-auto px-4">
        <div className="mb-6 md:mb-8 flex items-center justify-between gap-4">
          <Title className="mb-0">نمونه کارهای آوینا</Title>
          <Link
            href={PATH_PAGE.portfolio.root}
            className="text-primary text-m-body2 underline shrink-0"
          >
            همه پروژه‌ها
          </Link>
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
                  href={PATH_PAGE.portfolio.design(project.slug)}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                >
                  <Card className="group relative overflow-hidden rounded-3xl border-none shadow-sm transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={projectImageSrc(project.image)}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3 p-4">
                      <div>
                        <p className="text-m-caption text-primary mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-m-subtitle1 font-semibold text-primary-text line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                      <IconCardArrow className="stroke-primary shrink-0 transition-transform group-hover:-translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
