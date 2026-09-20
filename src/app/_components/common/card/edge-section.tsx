import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Title from '../../common/field/title';
import Wrapper from '../../common/field/wrapper';
import Description from '../../common/field/description';
import Section from '../field/section';

interface IEdgeSectionProps {
  isLtr?: boolean;
  title: string;
  imageSrc?: string;
  sectionName: string;
  backgroundColor?: string;
  className?: string;
  childClassName?: string;
  childSectionClass?: string;
  children?: React.ReactNode;
}

const EdgeSection: FC<IEdgeSectionProps> = ({
  backgroundColor = '#fff',
  imageSrc,
  isLtr = false,
  title,
  sectionName,
  className,
  childSectionClass,
  childClassName,
  children,
}) => {
  return (
    <Section
      className={cn(
        'flex justify-center items-end py-4 lg:py-8 w-full px-4 lg:px-0',
        isLtr ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row',
        className
      )}
    >
      <div
        className={cn(
          'z-10 h-[250px] lg:h-[390px] xl:h-[508px] w-full lg:w-[30%] px-4 font-medium relative',
          isLtr
            ? 'rounded-t-2xl xl:rounded-t-[4rem] lg:rounded-l-[4rem] lg:rounded-r-none'
            : 'rounded-t-2xl xl:rounded-t-[4rem] lg:rounded-r-[4rem] lg:rounded-l-none',
          childSectionClass
        )}
        style={{
          backgroundColor,
          boxShadow: `0 0rem 0 ${backgroundColor}, 0 0 0 1rem transparent`,
        }}
      >
        <div
          className={cn(
            'w-full h-full -mt-12',
            isLtr ? '-mr-20' : '-ml-20',
            childClassName
          )}
        >
          {children && children}
          {!children && (
            <Image
              src={`/images/${imageSrc}.svg`}
              alt="section image"
              layout="fill"
            />
          )}
        </div>
      </div>
      <div
        className={cn(
          'relative lg:h-[390px] w-full lg:w-[70%] px-4 text-white text-[1.25rem] leading-[1.8]',
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

        <Wrapper className="text-justify mb-6 xl:px-28 md:w-full md:mb-8 md:flex md:justify-center md:items-start md:flex-col md:pr-10 min-h-full">
          <Title>{title}</Title>
          <h3 className="text-m-subtitle2 font-semibold text-primary-text mb-6 md:mb-2 md:font-kalameh">
            راهکار {title} متناسب با نیاز کسب‌وکار شما
          </h3>

          <Description>
            در این بخش خدمات {title} را از نیازسنجی تا پیاده‌سازی و پشتیبانی پوشش
            می‌دهیم. هدف این است که ابزارها پایدار بمانند، تیم شما سریع راه بیفتد
            و بعد از تحویل هم مسیر پشتیبانی روشن باشد. برای جزئیات بیشتر یا شروع
            همکاری از فرم مشاوره استفاده کنید.
          </Description>
        </Wrapper>

        <h3
          className={cn(
            'hidden md:flex font-museo-moderno font-[250] lg:text-[45px] xl:text-[60px] text-divider absolute',
            isLtr
              ? 'right-0 lg:-top-14 xl:-top-20'
              : 'left-0 lg:-top-14 xl:-top-20'
          )}
        >
          {sectionName}
        </h3>
      </div>
    </Section>
  );
};

export default EdgeSection;
