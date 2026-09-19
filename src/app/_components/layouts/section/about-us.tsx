'use client';

import type { FC } from 'react';
import StatsSection from '../../common/counter-section/counter-section';
import AutoPlayVideo from '../../common/video/video';
import { Description, Section, Title } from '../../common/field';
import { VerticalImage } from '../../common/vertical-image/vertical-image';
import StylizedButton from '../../common/field/button/stylized-button';

interface AboutUsProps {
  backgroundColor: string;
}

const AboutUs: FC<AboutUsProps> = ({ backgroundColor }) => {
  return (
    <Section>
      <div className="flex lg:hidden">
        <StatsSection />
      </div>

      <div className="flex justify-center items-center pt-10  w-full flex-col relative">
        <div className=" w-full relative">
          <div className="hidden lg:flex absolute left-0 w-[50%]">
            <StatsSection />
          </div>
          <div
            className={`hidden lg:flex -z-50 h-[115px] col-start-1 col-end-2 row-start-2 row-end-3 w-[40%] rounded-t-[4rem] p-4 pt-4 font-medium relative `}
            style={{
              backgroundColor,
              boxShadow: `0 1rem 0 ${backgroundColor}, 0 0 0 1rem transparent`,
            }}
          >
            <div
              className="absolute w-20 aspect-square -rotate-180 -left-16 -bottom-4"
              style={{
                background: `radial-gradient(circle at 100% 100%, transparent 4rem, ${backgroundColor} calc(4rem + 1px))`,
              }}
            ></div>
          </div>
          <div
            className={`lg:flex lg:flex-row col-start-1 col-end-3 row-start-3 p-4 lg:pb-8 row-end-4 text-white text-[1.25rem] leading-[1.8] rounded-[32px] lg:rounded-[4rem_0rem_4rem_4rem]`}
            style={{ backgroundColor }}
          >
            <div className="lg:w-[38.8%] flex flex-col lg:-mt-[83px] lg:pr-[23px] xl:pr-[63px] xl:pb-14">
              <Title className=" lg:text-d-h2  xl:text-d-h1">
                {' '}
                آوینا را بیشتر بشناسید!
              </Title>

              <AutoPlayVideo
                src="video2.mp4"
                className="h-[220px] lg:h-full rounded-3xl lg:mt-6"
                videoClassName=""
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"></div>
              </AutoPlayVideo>
            </div>
            <div className="lg:w-[60%] lg:pr-[70px] xl:pr-[150px] lg:pl-[45px]">
              <h6 className="text-m-subtitle2 lg:text-d-subtitle1 lg:font-kalameh text-primary-text font-semibold pb-2 pt-6 xl:pt-12">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از
                طراحان گرافیک است.{' '}
              </h6>

              <Description className="text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </Description>

              <StylizedButton
                customClasses={{
                  iconWrapper: 'bg-primary-text',
                  text: 'text-primary-text',
                }}
                text={'بیشتر بدانید...'}
                className="my-2 md:my-0 md:mt-4 py-2 max-w-52"
              />
            </div>
          </div>
        </div>
        <VerticalImage
          className="w-12 h-full top-14 -left-12 "
          src="about-us"
        />
      </div>
    </Section>
  );
};

export default AboutUs;
