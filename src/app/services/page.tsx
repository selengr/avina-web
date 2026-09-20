'use client';
import FAQ from './_components/FAQ';
import { type FC, useEffect, useRef, useState } from 'react';

import Banner from '../_components/layouts/banner/banner';
import EdgeSection from '../_components/common/card/edge-section';
import RequestConsulting from '../_components/layouts/section/request-consulting';
import StatsSection from '../_components/common/counter-section/counter-section';
import InfiniteMovingCards from '../_components/common/infinite-moving-cards/infinite-moving-cards';

interface ServiceSectionProps {
  sectionName: string;
  imageSrc: string;
  title: string;
  isLtr?: boolean;
  id: string;
}

// ----------------------------------------------------------------------
const ServiceSection: FC<ServiceSectionProps> = ({
  sectionName,
  imageSrc,
  title,
  isLtr,
  id,
}) => (
  <div id={id}>
    <EdgeSection
      sectionName={sectionName}
      imageSrc={imageSrc}
      title={title}
      isLtr={isLtr}
    />
  </div>
);
// ----------------------------------------------------------------------

const ServicesPage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const services: ServiceSectionProps[] = [
    {
      sectionName: 'نرم‌افزار',
      imageSrc: 'avina-service1',
      title: 'نرم افزار',
      id: 'software',
    },
    {
      sectionName: 'سخت‌افزار',
      imageSrc: 'avina-service2',
      title: 'سخت افزار',
      isLtr: true,
      id: 'hardware',
    },
    {
      sectionName: 'امنیت اطلاعات',
      imageSrc: 'avina-service3',
      title: 'امنیت اطلاعات',
      id: 'information-security',
    },
    {
      sectionName: 'شبکه',
      imageSrc: 'avina-service4',
      title: 'شبکه و ارتباطات',
      isLtr: true,
      id: 'network',
    },
    {
      sectionName: 'آموزش و پشتیبانی',
      imageSrc: 'avina-service1',
      title: 'آموزش و پشتیبانی',
      id: 'training-and-support',
    },
  ];

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const hash = window.location.hash.substring(1);

      if (hash && sectionRefs.current[hash]) {
        setTimeout(() => {
          sectionRefs.current[hash]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 500);
      }
    }
  }, [isMounted]);

  return (
    <main className="flex flex-col items-center">
      <section className="w-full md:px-4 lg:px-8 2xl:px-48">
        <Banner
          title="خدمــات آوینـــــا"
          subtitle=""
          description="از نرم‌افزار سفارشی تا سخت‌افزار، شبکه و امنیت — خدمات آوینا را یک‌جا ببینید و برای مشاوره اقدام کنید."
          ctaHref="/contact"
          ctaText="درخواست مشاوره"
          bgImage1="bg-banner-m-bg1"
          bgImage2="bg-banner-d-bg1 [&>h3]:lg:text-[60px] [&>h3]:xl:text-[113px]"
          botImage="bg-bot2-m lg:bg-bot2-d lg:left-10"
          satisfactionPercentage={65}
          totalUsers="9,194"
        />
      </section>

      {services.map((service, index) => (
        <div
          key={service.id}
          id={service.id}
          ref={(el) => {
            sectionRefs.current[service.id] = el;
          }}
        >
          <ServiceSection {...service} />
          {index === 1 && (
            <InfiniteMovingCards
              direction="left"
              speed="fast"
              className="border-y-divider w-full"
            />
          )}
        </div>
      ))}

      <section className="w-full md:border-y-[1px] md:border-y-divider flex flex-col-reverse lg:flex-row lg:justify-around items-center py-6">
        <div className="w-full lg:w-[50%]">
          <StatsSection className="md:pb-0 w-full px-0" />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-primary text-m-h6 xs:text-m-h5 font-medium font-kalameh">
            راهكارهاي فناوری اطلاعات آوینا
          </h2>
          <p className="text-secondary text-m-h5 xs:text-m-h4 pb-2 font-light italic text-center font-museo-moderno">
            AVINA IT SOLUTIONS
          </p>
        </div>
      </section>

      <RequestConsulting />

      <FAQ />
    </main>
  );
};

export default ServicesPage;
