'use client';

import Title from '../common/field/title';
import Wrapper from '../common/field/wrapper';
import Section from '../common/field/section';
import Description from '../common/field/description';
import AnimatedTestimonials from '../common/card/card-swiper';

function UserComments() {
  const testimonials = [
    {
      quote:
        'همکاری با تیم آوینا خیلی روان بود. پروژه نرم‌افزاری‌مون سر وقت تحویل داده شد و پشتیبانی بعدش هم خوب بود.',
      name: 'سمیرا خرمی',
      designation: 'مدیر محصول',
      src: '/images/social1.svg',
      className: 'bg-white',
    },
    {
      quote:
        'برای زیرساخت شبکه شرکت کمک گرفتیم. کار تمیز انجام شد و الان پایداری سیستم خیلی بهتره.',
      name: 'علی رضایی',
      designation: 'مدیر فناوری اطلاعات',
      src: '/images/social2.svg',
      className: 'bg-primary-light',
    },
    {
      quote:
        'از طراحی تا پیاده‌سازی کنارمون بودن. پیشنهاد می‌کنم اگر دنبال تیم قابل اعتماد هستید باهاشون حرف بزنید.',
      name: 'مریم احمدی',
      designation: 'مدیر عملیات',
      src: '/images/social3.svg',
      className: 'bg-primary-lighter',
    },
    {
      quote:
        'پشتیبانی و آموزش کاربران نقطه قوتشون بود. تیم داخلی ما سریع راه افتاد.',
      name: 'حسین کریمی',
      designation: 'سرپرست فنی',
      src: '/images/social4.svg',
      className: 'bg-[#EFE5FE]',
    },
  ];

  return (
    <Section className="flex flex-col lg:flex-row pt-0">
      <Wrapper className="mb-6 md:w-full lg:w-[70%] xl:w-full lg:mb-8 lg:flex lg:justify-center lg:items-start lg:flex-col lg:pr-0 text-justify">
        <Title>نظرات کاربران</Title>

        <Description className="lg:w-[85%]">
          چند تا از بازخوردهایی که از مشتریان و همکاران پروژه‌ها گرفتیم. اگر
          تجربه‌ای داشتید خوشحال می‌شیم بشنویم.
        </Description>
      </Wrapper>

      <AnimatedTestimonials
        testimonials={testimonials}
        autoplay
      />
    </Section>
  );
}

export default UserComments;
