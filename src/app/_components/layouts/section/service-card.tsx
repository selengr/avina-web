'use client';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import GifScreen from '../../common/gif';
import Title from '../../common/field/title';
import Wrapper from '../../common/field/wrapper';
import Section from '../../common/field/section';
import { IconCardArrow } from '../../icons/icons';
import { PATH_PAGE } from '../../../../../routes/paths';
import Description from '../../common/field/description';
import { VerticalImage } from '../../common/vertical-image/vertical-image';

export const Card = React.memo(
  ({
    src,
    title,
    index,
    hovered,
    enName,
    className,
    serviceId,
    setHovered,
  }: {
    src: string;
    title: string;
    index: number;
    enName?: string;
    className?: string;
    hovered: number | null;
    serviceId: string;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'rounded-2xl relative overflow-hidden h-44 xs:h-60 md:h-[364px] lg:h-[514px] w-full transition-all duration-300 ease-out',
        className
      )}
    >
      {index === hovered && (
        <GifScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300%',
            height: '200%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      <Image
        src={`/images/${src}` || '/placeholder.svg'}
        alt={title}
        fill
        className="object-cover absolute inset-0"
      />

      <div className="absolute top-4 right-4 md:top-6 md:right-8 md:left-3">
        <div className="text-d-h6 text-white font-bold md:text-d-h4 lg:text-d-h3  mb-2 md:mb-1 md:font-kalameh md:font-medium">
          {title}
        </div>
        {hovered !== index && (
          <span className="text-m-body1 text-white md:text-d-h5 lg:text-d-h4 md:font-museo-moderno md:font-thin">
            {enName}
          </span>
        )}
        {hovered === index && (
          <span className="text-m-caption text-white md:text-d-body1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </span>
        )}
      </div>

      <Link
        href={`${PATH_PAGE.services}#${serviceId}`}
        className="z-50"
      >
        <IconCardArrow
          className="absolute bottom-5 left-4 z-50"
          fill="white"
          stroke="fill"
          width="36"
          height="36"
          viewBox="0 0 36 36"
        />
      </Link>

      <div
        className={
          cn()
          //   "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          //   hovered === index ? "opacity-100" : "opacity-0"
        }
      >
        <div className="text-xl text-white md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = 'Card';

type Card = {
  title: string;
  src: string;
};

function ServiceCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const serviceCards = [
    {
      src: 'service-card2.svg',
      title: 'شبکه و ارتباطات',
      enName: 'Network',
      serviceId: 'network',
    },
    {
      src: 'service-card1.svg',
      title: 'نرم افزار',
      enName: 'Software',
      serviceId: 'software',
    },
    {
      src: 'service-card3.svg',
      title: 'سخت افزار',
      enName: 'Hardware',
      serviceId: 'hardware',
    },
    {
      src: 'service-card4.svg',
      title: 'امنیت اطلاعات',
      enName: 'Information security',
      serviceId: 'information-security',
    },
    {
      src: 'service-card5.svg',
      title: 'آموزش و پشتیبانی',
      enName: 'Training and support',
      serviceId: 'training-and-support',
    },
  ];

  return (
    <Section>
      <Wrapper className="md:w-[80%] lg:w-[50%]">
        <Title>خدمات آوینا</Title>
        <Description>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </Description>
      </Wrapper>

      <div className="relative flex flex-col md:flex-row-reverse w-full">
        <div className="flex flex-row gap-5 w-full md:mr-5">
          <Card
            src={serviceCards[0].src}
            title={serviceCards[0].title}
            enName={serviceCards[0].enName}
            serviceId={serviceCards[0].serviceId}
            index={2}
            className=""
            hovered={hovered}
            setHovered={setHovered}
          />
          <Card
            src={serviceCards[1].src}
            title={serviceCards[1].title}
            enName={serviceCards[1].enName}
            serviceId={serviceCards[1].serviceId}
            index={1}
            className=""
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>

        <div className="flex flex-col gap-5 w-full mt-5 md:mt-0">
          <Card
            src={serviceCards[2].src}
            title={serviceCards[2].title}
            enName={serviceCards[2].enName}
            serviceId={serviceCards[2].serviceId}
            index={3}
            className="md:h-[170px] lg:h-[250px]"
            hovered={hovered}
            setHovered={setHovered}
          />

          <div className="flex flex-row gap-5">
            <Card
              src={serviceCards[3].src}
              title={serviceCards[3].title}
              enName={serviceCards[3].enName}
              serviceId={serviceCards[3].serviceId}
              index={4}
              className="md:h-[170px] lg:h-[250px]"
              hovered={hovered}
              setHovered={setHovered}
            />

            <Card
              src={serviceCards[4].src}
              title={serviceCards[4].title}
              enName={serviceCards[4].enName}
              serviceId={serviceCards[4].serviceId}
              index={5}
              className="md:h-[170px] lg:h-[250px]"
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>
        </div>

        <VerticalImage
          className="w-12 h-full bottom-0 -left-12"
          src="services"
        />
      </div>
    </Section>
  );
}

export default ServiceCards;
