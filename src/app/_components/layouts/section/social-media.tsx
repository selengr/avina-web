'use client';

import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import Title from '../../common/field/title';
import Wrapper from '../../common/field/wrapper';
import Description from '../../common/field/description';
import Section from '../../common/field/section';
import Media from '../../common/media/media';
import AutoPlayVideo from '../../common/video/video';

export default function SocialMedia() {
  return (
    <Section className="flex flex-col lg:flex-row-reverse w-full gap-5 pt-0 lg:pt-10 lg:pl-2">
      <Wrapper className="lg:pr-2 md:w-full lg:w-[40%] text-justify">
        <Title className="lg:mb-0 lg:text-d-h2 xl:text-d-h1">
          {' '}
          شبکه های اجتماعی
        </Title>
        <Description>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Description>

        <h3 className="text-m-subtitle2 font-semibold text-primary-text mt-2 mb-6 lg:mb-2">
          ما داستان خود را در فضای مجازی ادامه می‌دهیم...
        </h3>

        <Media className="lg:absolute lg:bottom-6 xl:bottom-0 lg:left-0" />
      </Wrapper>

      <div className="flex flex-col lg:flex-row gap-4 lg:w-full">
        <div className="hidden lg:flex w-full">
          <Card
            src={'social4.svg'}
            title="شبکه و ارتباطات"
            index={4}
            className="h-[438px]"
          />
        </div>

        <div className="flex lg:hidden gap-5 w-full">
          <Card
            src={'social4.svg'}
            title="شبکه و ارتباطات"
            index={4}
            className="h-[188px] xs:h-[228px]"
          />
          <Card
            src={'social1.svg'}
            title="شبکه و ارتباطات"
            index={1}
            className="h-[188px] xs:h-[228px]"
          />
        </div>

        <div className="flex flex-row lg:flex-col-reverse gap-5 md:min-w-[208px]">
          <Card
            src={'gif1'}
            title="شبکه و ارتباطات"
            index={3}
            className="h-[141px]  xs:h-[161px] md:h-[209px]"
            isGif={true}
          />
          <Card
            src={'gif2'}
            title="شبکه و ارتباطات"
            index={2}
            className="h-[141px]  xs:h-[161px] md:h-[209px]"
            isGif={true}
          />
        </div>

        <div className="hidden lg:flex w-full">
          <Card
            src={'social1.svg'}
            title="شبکه و ارتباطات"
            index={1}
            className="h-[438px]"
          />
        </div>
      </div>
    </Section>
  );
}

export const Card = React.memo(
  ({
    src,
    title,
    index,
    hovered,
    enName,
    isGif,
    className,
    setHovered,
  }: {
    src: string;
    title: string;
    index?: number;
    isGif?: boolean;
    enName?: string;
    className?: string;
    hovered?: number | null;
    setHovered?: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      className={cn(
        'rounded-3xl relative overflow-hidden h-60 w-full transition-all duration-300 ease-out',
        className
      )}
    >
      {!isGif && (
        <Image
          src={`/images/${src}` || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover absolute inset-0"
        />
      )}
      {isGif && (
        <AutoPlayVideo
          src={`${src}.mp4`}
          className="h-full w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"></div>
        </AutoPlayVideo>
      )}
    </div>
  )
);

Card.displayName = 'Card';

type Card = {
  title: string;
  src: string;
};
