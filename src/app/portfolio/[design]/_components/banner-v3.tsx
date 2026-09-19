import type React from 'react';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BannerV3Props {
  title: string;
  subtitle: string;
  description: string;
  bgImage1: string;
  bgImage2: string;
  botImage: string;
  customClasses?: {
    bgImage1?: string;
    bgImage2?: string;
    botImage?: string;
  };
}

const BannerV3: React.FC<BannerV3Props> = ({
  title,
  subtitle,
  description,
  bgImage1,
  bgImage2,
  botImage,
  customClasses = {
    bgImage1: '',
    bgImage2: '',
    botImage: '',
  },
}) => {
  return (
    <div className="relative lg:mt-[30px] flex justify-center w-full bg-neutral rounded-3xl lg:rounded-[42px] h-[560px] lg:h-[781px] py-6">
      <div
        className={`hidden xl:flex -z-50 h-[80px] col-start-1 col-end-2 row-start-2 row-end-3  w-[350px] rounded-t-[4rem] p-4 pt-4 font-medium absolute -top-[94px] right-64`}
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

      <div className="flex lg:hidden flex-col absolute top-4 right-4">
        <h3 className="font-[300] text-primary-text font-kalameh text-m-h3">
          {title}
        </h3>
        <h6 className="font-semibold text-secondary font-kalameh text-m-body1">
          {subtitle}
        </h6>
        <span className="lg:text-secondary text-m-body2 pt-2">
          {description}
        </span>
      </div>
      <div
        className={cn(
          `${bgImage1}`,
          'lg:hidden bg-cover bg-center bg-no-repeat h-[180px] w-full absolute top-[40%]',
          customClasses.bgImage1
        )}
      >
        {' '}
      </div>

      <div className="hidden lg:flex">
        <div
          className={cn(
            `${bgImage2}`,
            'bg-cover bg-center bg-no-repeat h-[90%] w-[80%] px-4 absolute top-0 left-0',
            customClasses.bgImage2
          )}
        ></div>
      </div>
      <div className="hidden lg:flex flex-col w-full absolute top-[106px] right-[98px] max-w-[40%] text-justify">
        <h3 className="font-[300] text-primary-text font-kalameh text-[94px] ">
          {title}
        </h3>
        <h6 className=" text-secondary text-d-h2 font-kalameh font-semibold flex text-end">
          {subtitle}
        </h6>
        <span className="text-secondary text-d-body1 text-justify">
          {description}
        </span>
      </div>

      <div className="lg:w-[629px] rounded-3xl px-4 lg:px-0 lg:rounded-[32px] absolute -bottom-16 lg:left-[52px] lg:border-[3px] border-white">
        <Image
          src={`/images/${botImage}.svg`}
          alt={botImage}
          width={66}
          height={106}
          className=" object-cover w-full"
        />
      </div>
    </div>
  );
};

export default BannerV3;
