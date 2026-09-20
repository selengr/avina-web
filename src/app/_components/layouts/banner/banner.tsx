'use client';

import type React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import ExperienceCard from './experience-card';
import SatisfactionCard from './satisfaction-card';
import StylizedButton from '../../common/field/button/stylized-button';

interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  logoSrc?: string;
  bgImage1: string;
  bgImage2: string;
  botImage: string;
  totalUsers: string;
  satisfactionPercentage: number;
  ctaHref?: string;
  ctaText?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  logoSrc,
  bgImage1,
  bgImage2,
  botImage,
  satisfactionPercentage,
  totalUsers,
  ctaHref = '/about',
  ctaText = 'بیشتر بدانید...',
}) => {
  const router = useRouter();

  return (
    <div className="relative lg:mt-[22px] flex justify-center w-full bg-neutral rounded-3xl lg:rounded-[42px] h-[560px] lg:h-[781px] py-6">
      <div
        className={`hidden xl:flex -z-50 h-[80px] col-start-1 col-end-2 row-start-2 row-end-3  w-[350px] 3xl:w-[500px]  rounded-t-[4rem] p-4 pt-4 font-medium absolute -top-[94px] right-64  3xl:right-48`}
        style={{
          backgroundColor: '#cfdfe8',
          boxShadow: `0 1rem 0 #cfdfe8, 0 0 0 1rem transparent`,
        }}
      >
        <div
          className="absolute w-16 aspect-square -rotate-90 -right-[60px] -bottom-4"
          style={{
            background: `radial-gradient(circle at 100% 100%, transparent 4rem, #cfdfe8 calc(4rem + 1px))`,
          }}
        ></div>
        <div
          className="absolute w-16 aspect-square -rotate-180 -left-[60px] -bottom-4"
          style={{
            background: `radial-gradient(circle at 100% 100%, transparent 4rem, #cfdfe8 calc(4rem + 1px))`,
          }}
        ></div>
      </div>

      <div
        className={cn(
          'bg-cover bg-center bg-no-repeat h-[360px] lg:h-[679px] lg:w-full px-4 absolute lg:bottom-0 lg:right-0',
          bgImage1,
          bgImage2
        )}
      >
        <h3 className="font-bold text-primary-text text-m-h3 lg:absolute  top-60 xl:top-52  lg:right-12 lg:text-[73px]  xl:right-24 xl:text-[113px] lg:font-light">
          {title}
        </h3>
        <h6 className="font-semibold text-primary-text text-m-body1 lg:absolute lg:bottom-[292px] xl:bottom-[262px] lg:right-20 xl:right-60 lg:text-d-h4 xl:text-d-h2 lg:font-semibold">
          پیشرفت <span className="text-primary">فردا</span> را، امــــروز تجربه
          کنید...
        </h6>
        <span className="lg:text-secondary text-m-body2 lg:absolute lg:bottom-[182px] lg:right-14 xl:right-32 lg:text-d-body1 lg:max-w-[330px] xl:max-w-[554px] text-justify">
          {description}
        </span>

        <div className="absolute left-4 flex lg:left-auto lg:bottom-32 lg:right-[40%]">
          <StylizedButton
            className="w-48 z-0"
            text={ctaText}
            onClick={() => router.push(ctaHref)}
          />
        </div>
      </div>

      <div
        className={cn(
          `bg-cover bg-center bg-no-repeat absolute bottom-9 lg:left-36 xl:left-52 lg:bottom-2 h-[310px] w-48 lg:h-[686px] lg:w-[429px] ml-12 lg:ml-0`,
          botImage
        )}
      >
        {logoSrc && (
          <Image
            src={logoSrc.trim() || '/images/placeholder.svg'}
            alt="service"
            width={150}
            height={150}
            className="hidden lg:flex absolute -left-[133px] top-4"
          />
        )}

        <ExperienceCard />
      </div>

      <SatisfactionCard
        percentage={satisfactionPercentage}
        totalUsers={totalUsers}
      />
    </div>
  );
};

export default Banner;
