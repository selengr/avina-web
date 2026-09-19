import Image from 'next/image';
import { Card } from '../../common/card/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../common/carousel/carousel';
import { VerticalImage } from '../../common/vertical-image/vertical-image';
import Title from '../../common/field/title';
// import { ArrowUpRight } from "lucide-react"

const projects = [
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
];

export default function SliderCard() {
  return (
    <div className="w-full bg-gray-50 py-12 md:px-4 lg:px-8 2xl:px-48">
      <div className="container mx-auto px-4">
        {/* <h2 className="mb-6 md:mb-8 text-right text-m-h4 md:text-d-h1 font-semibold text-primary">
         
        </h2> */}
        <div>
          <Title className="">نمونه کارهای آوینا</Title>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4"
              >
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={'/' + project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={300}
                      height={225}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="rounded-full bg-white p-2 shadow-md transition-transform duration-300 group-hover:translate-x-1">
                      arrow
                    </div>
                    <p className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View Project
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <VerticalImage
            className="w-12 h-full bottom-0 -left-10"
            src="projects"
          />
        </Carousel>
      </div>
    </div>
  );
}
