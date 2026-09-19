import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Title from '../../common/field/title';
import Wrapper from '../../common/field/wrapper';
import Description from '../../common/field/description';
import { Section } from '../../common/field';
import {
  IconLocationContact,
  IconMailContact,
  IconPhoneContact,
} from '../../icons/icons';

interface IEdgeSectionContactProps {
  isLtr?: boolean;
  title: string;
  imageSrc: string;
  backgroundColor?: string;
  className?: string;
}

const EdgeSectionContact: FC<IEdgeSectionContactProps> = ({
  backgroundColor = '#fff',
  imageSrc,
  isLtr = false,
  title,
  className,
}) => {
  return (
    <Section
      className={cn(
        'flex justify-center items-end py-4 lg:py-8 w-full px-4 lg:pr-0 rotate-180',
        isLtr ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row',
        className
      )}
    >
      <div
        className={cn(
          'z-10 h-[250px] lg:h-[390px] xl:h-[480px] w-full lg:w-[45%] px-4 font-medium relative',
          isLtr
            ? 'rounded-t-2xl xl:rounded-t-[4rem] lg:rounded-l-[4rem] lg:rounded-r-none'
            : 'rounded-t-2xl xl:rounded-t-[2rem] lg:rounded-r-[4rem] lg:rounded-l-none'
        )}
        style={{
          backgroundColor,
          boxShadow: `0 0rem 0 ${backgroundColor}, 0 0 0 1rem transparent`,
        }}
      >
        <div
          className={cn('w-full h-full -mt-12', isLtr ? '-mr-20' : '-ml-20')}
        >
          <Image
            src={`/images/${imageSrc}.svg`}
            alt="section image"
            layout="fill"
            className="rotate-180 px-5 py-5 lg:py-0"
          />
        </div>
      </div>
      <div
        className={cn(
          'relative lg:h-[390px] w-full lg:w-[55%] px-4 text-white text-[1.25rem] leading-[1.8]',
          isLtr
            ? 'rounded-b-2xl lg:rounded-[0rem_4rem_4rem_0rem]'
            : 'rounded-b-2xl lg:rounded-[4rem_0rem_0rem_4rem]'
        )}
        style={{ backgroundColor }}
      >
        <div
          className={cn(
            'hidden xl:flex absolute w-32 bg-secondary aspect-square',
            isLtr
              ? 'rotate-180 -left-16 -top-16'
              : '-rotate-180 -right-16 -top-16'
          )}
          style={{
            background: `radial-gradient(circle at ${isLtr ? '0% 100%' : '100% 100%'}, transparent 4rem, ${backgroundColor} calc(4rem + 1px))`,
          }}
        />

        <Wrapper className="mb-6 xl:px-28 md:w-full md:mb-8 md:flex md:justify-center md:items-start md:flex-col md:pr-10 min-h-full rotate-180">
          <Title>{title}</Title>
          <h3 className="text-d-body1 text-secondary-text mb-12 md:font-kalameh">
            ما اینجا هستیم تا به حرفه ای ها و کسب و کارها کمک کنیم. تماس بگیرید
            و منتظر پاسخ سریع باشید.
          </h3>

          <Description className="text-primary-text flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <IconPhoneContact className="stroke-none fill-primary-text" />
              <p>021-32689562</p>
            </div>
            <div className="flex items-center gap-4">
              <IconMailContact className="stroke-none fill-primary-text" />
              <p>021-32689562</p>
            </div>
            <div className="flex items-center gap-4">
              <IconLocationContact
                fillRule="evenodd"
                className="stroke-none fill-primary-text"
              />
              <p>021-32689562</p>
            </div>
          </Description>
        </Wrapper>
      </div>
    </Section>
  );
};

export default EdgeSectionContact;
