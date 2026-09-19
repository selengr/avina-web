import Image from 'next/image';
import React from 'react';
import CraftedButton from '../crafted-button/crafted-button';
import { Section } from '@/app/_components/common/field';
import StylizedButton from '@/app/_components/common/field/button/stylized-button';

const ShapeCard = () => {
  return (
    <Section>
      <div className="relative w-full h-auto">
        <svg
          className="hidden md:block w-full h-auto"
          viewBox="0 0 1532 271"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M256 64C256 28.6538 284.654 0 320 0H1468C1503.35 0 1532 28.6538 1532 64V124C1532 159.346 1503.35 188 1468 188H1429.5C1406.58 188 1388 206.58 1388 229.5C1388 252.42 1369.42 271 1346.5 271H52.5C23.505 271 0 247.495 0 218.5C0 189.505 23.5051 166 52.5 166H192C227.346 166 256 137.346 256 102V64Z"
            fill="#687BF2"
          />
        </svg>

        <svg
          className="block md:hidden w-full h-auto"
          width="343"
          height="272"
          viewBox="0 0 343 272"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M343 40.2549C343 18.1635 325.091 0.254883 303 0.254883H117.5C97.8939 0.254883 82 16.1488 82 35.7549C82 55.361 66.1061 71.2549 46.5 71.2549H40C17.9086 71.2549 0 89.1635 0 111.255V231.255C0 253.346 17.9086 271.255 40 271.255H303C325.091 271.255 343 253.346 343 231.255V40.2549Z"
            fill="#687BF2"
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold w-[90%] md:w-[70%] lg:w-[55%]">
          <div className="text-m-h5 lg:text-d-h2 xl:text-d-h1 mb-5 md:-mb-3">
            همکاری در آوینا
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="max-w-[430px] text-m-body2">
              اگر شما مایل به همکاری در شرکت راهکارهای فناوری اطلاعات آوینا را
              دارید اکنون میتوانید به ما بپیوندید.
            </p>
            <div>
              <StylizedButton
                className="py-7 px-[6px]  min-w-52"
                text={' درخواست همکاری'}
                // onClick={() => push(`/portfolio/${title}`)}
              />{' '}
            </div>
          </div>
        </div>
        <div className="absolute -top-5 left-0 xl:-top-10 xl:left-2 ">
          <Image
            src="/images/pocket2.svg"
            alt="svg"
            width={246}
            height={248}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] xl:w-full xl:h-full 2xl:w-[200px] 2xl:h-[200px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default ShapeCard;
