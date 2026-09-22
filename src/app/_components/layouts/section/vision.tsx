import Image from 'next/image';
import { IconArrowLeft } from '../../icons/icons';
import Title from '../../common/field/title';
import Wrapper from '../../common/field/wrapper';
import Section from '../../common/field/section';
import Description from '../../common/field/description';
import { VerticalImage } from '../../common/vertical-image/vertical-image';
import CraftedButton from '@/app/ali/_components/crafted-button/crafted-button';
import StylizedButton from '../../common/field/button/stylized-button';

export default function FeatureSection() {
  return (
    <Section className="wll flex flex-col pt-2 md:mt-16">
      <div className="w-full flex flex-col md:flex-row ">
        <div className="md:flex md:justify-center md:items-center md:flex-col md:pt-6 md:w-[70%] lg:w-full">
          <Wrapper className="mb-6 md:w-full md:mb-8 md:flex md:justify-center md:items-start md:flex-col">
            <Title>متفاوت به مساله نگاه کنید...</Title>
            <h3 className="text-m-subtitle2 font-semibold text-primary-text mb-6 md:mb-2 md:font-kalameh">
              تفاوت ما با دیگران در چیست؟
            </h3>
            <Description className="md:w-[88%] text-justify">
              در آوینا روی راه‌حل‌های کاربردی تمرکز می‌کنیم؛ از تحلیل نیاز تا
              پیاده‌سازی و پشتیبانی، تا تیم شما با ابزار درست و پایدار جلو برود.
            </Description>
          </Wrapper>

          <div className="flex mb-20 md:justify-start w-full">
            <StylizedButton
              text={'بیشتر بدانید...'}
              className="my-2 md:my-0 md:mt-4 py-2 min-w-52"
            />
          </div>

          <div className="space-y-4 text-right mb-12 md:hidden lg:flex md:justify-start w-full md:pr-10 md:flex-col">
            <div className="md:grid lg:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
                <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
                  نمونه کارهای متفاوت و بین المللی
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
                <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
                  استفاده از دانش و فناوری روز
                </span>
              </div>
            </div>
            <div className="md:grid lg:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
                <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
                  تیم حرفه‌ای و متخصص جوان
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
                <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
                  کیفیت و میزان بالای رضایت کارفرمایان
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-h-[700px] w-full lg:w-[90%] xl:w-[70%]">
          <Image
            src="/images/vision2.svg"
            alt="vision"
            height={100}
            width={100}
            className="w-full object-cover pr-12"
          />
          <div className="absolute  bottom-[33%] md:bottom-[30%] right-0 bg-primary-text rounded-full p-2 md:p-3">
            <IconArrowLeft
              className="w-[40px] h-[40px] xs:w-[60px] xs:h-[60px]"
              fill="white"
              stroke="white"
              strokeWidth="5.625"
              width="60"
              height="60"
              viewBox="0 0 90 90"
            />
          </div>
          <VerticalImage
            className="w-12 h-full -bottom-4 -left-12 "
            src="vision1"
          />
        </div>
      </div>
      <div className="space-y-4 text-right mb-12 hidden md:flex lg:hidden md:justify-start w-full md:pr-10 md:flex-col">
        <div className="md:grid md:grid-cols-2">
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
            <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
              نمونه کارهای متفاوت و بین المللی
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
            <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
              استفاده از دانش و فناوری روز
            </span>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
            <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
              تیم حرفه‌ای و متخصص جوان
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] ml-2 bg-primary-text rounded-full" />
            <span className="text-m-subtitle2 font-semibold text-secondary md:font-kalameh">
              کیفیت و میزان بالای رضایت کارفرمایان
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
