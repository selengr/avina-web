'use client';

// import dynamic from 'next/dynamic';
import Title from '../common/field/title';
import Wrapper from '../common/field/wrapper';
import Section from '../common/field/section';
import Description from '../common/field/description';

import AnimatedTestimonials from '../common/card/card-swiper';
// const AnimatedTestimonials = dynamic(
//   () => import('../common/card/card-swiper'),
//   { ssr: false }
// );

function UserComments() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      src: '/images/social1.svg',
      className: 'bg-white ',
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      src: '/images/social2.svg',
      className: 'bg-primary-light',
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      src: '/images/social3.svg',
      className: 'bg-primary-lighter',
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'James Kim',
      designation: 'Engineering Lead at DataPro',
      src: '/images/social4.svg',
      className: 'bg-[#EFE5FE]',
    },
  ];

  return (
    <Section className="flex flex-col lg:flex-row pt-0">
      <Wrapper className="mb-6 md:w-full lg:w-[70%] xl:w-full lg:mb-8 lg:flex lg:justify-center lg:items-start lg:flex-col lg:pr-0 text-justify">
        <Title>نظرات کاربران</Title>

        <Description className="lg:w-[85%]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Description>
      </Wrapper>

      <AnimatedTestimonials testimonials={testimonials} />
    </Section>
  );
}

export default UserComments;
