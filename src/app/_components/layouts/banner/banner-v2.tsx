import type React from 'react';

import { cn } from '@/lib/utils';

interface BannerV2Props {
  title: string;
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

const BannerV2: React.FC<BannerV2Props> = ({
  title,
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
    <div className="relative lg:mt-[22px] flex justify-center w-full bg-neutral rounded-3xl lg:rounded-[42px] h-[560px] lg:h-[781px] py-6">
      <div
        className={`hidden xl:flex -z-50 h-[80px] col-start-1 col-end-2 row-start-2 row-end-3  w-[350px] 3xl:w-[500px] rounded-t-[4rem] p-4 pt-4 font-medium absolute -top-[94px] right-64  3xl:right-48`}
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

      <div className="flex lg:hidden flex-col absolute top-4 right-4 left-4">
        <h3 className="font-bold text-primary-text text-m-h3">{title}</h3>
        <h6 className="font-semibold text-primary-text text-m-body1">
          پیشرفت <span className="text-primary">فردا</span> را، امــــروز تجربه
          کنید...
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
        >
          <h3 className="text-primary-text  absolute top-60 xl:top-52  -right-[140px] xl:-right-[12%] text-[73px] xl:text-[113px] font-light">
            {title}
          </h3>
          <h6 className=" text-primary-text absolute bottom-[292px] lg:-right-[20%] xl:-right-[16%] text-d-h4 xl:text-d-h2 font-semibold">
            پیشرفت <span className="text-primary">فردا</span> را، امــــروز
            تجربه کنید...
          </h6>
          <span className="text-secondary absolute bottom-[212px] -right-[20%] text-d-body1 max-w-[50%] text-justify">
            {description}
          </span>
        </div>
      </div>

      <div
        className={cn(
          `${botImage} bg-cover bg-center bg-no-repeat absolute bottom-9 lg:left-2  xl:left-40 lg:top-16 h-[300px] w-56 lg:h-[594px] lg:w-[629px] lg:ml-0`,
          customClasses.botImage
        )}
      ></div>
    </div>
  );
};

export default BannerV2;
