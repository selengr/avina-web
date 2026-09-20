import React from 'react';

import CurveDetail from '@/app/ali/_components/curve-detail/curve-detail';
import TitleDetail from '@/app/ali/_components/title-detail/title-detail';
import DescriptionDetail from '@/app/ali/_components/description-detail/description-detail';
import Image from 'next/image';
import { Section, Title } from '@/app/_components/common/field';
import { VerticalImage } from '@/app/_components/common/vertical-image/vertical-image';

const MEDAL = '/images/Medal-1.svg';

const TeamValues = () => {
  return (
    <Section>
      <Title>ارزش های تیم</Title>
      <div className="flex flex-col lg:flex-row md:gap-2 justify-between relative">
        <div className=" order-2 lg:order-1 ">
          <CurveDetail
            imageSrc={MEDAL}
            position="topRight"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              صلابت
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              روی کیفیت کار کوتاه نمی‌آییم و تا نتیجه پایدار جلو می‌رویم.
            </DescriptionDetail>
          </CurveDetail>
          <CurveDetail
            imageSrc={MEDAL}
            position="bottomRight"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              احترام
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              به تجربه و نیاز هر مشتری گوش می‌دهیم و شفاف حرف می‌زنیم.
            </DescriptionDetail>
          </CurveDetail>
        </div>
        <div className="order-3 mr-auto lg:mr-0">
          <CurveDetail
            imageSrc={MEDAL}
            position="topLeft"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              اعتماد
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              قولی که می‌دهیم را پیگیری می‌کنیم و گزارش کار را شفاف نگه می‌داریم.
            </DescriptionDetail>
          </CurveDetail>
          <CurveDetail
            imageSrc={MEDAL}
            position="bottomLeft"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              مسئولیت پذیری
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              مالک خروجی هستیم؛ از طراحی تا پشتیبانی کنار پروژه می‌مانیم.
            </DescriptionDetail>
          </CurveDetail>
        </div>
        <div className="order-1 lg:order-2 md:flex md:flex-col mx-auto my-10 lg:mx-0 md:my-0">
          <Image
            src="/images/chatbot.svg"
            alt="نماد ارزش‌های تیم آوینا"
            width={384}
            height={350}
            className="md:mb-10 "
          />
          <CurveDetail
            imageSrc={MEDAL}
            position="flat"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              صداقت
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              محدودیت‌ها و گزینه‌ها را صادقانه می‌گوییم تا تصمیم درست گرفته شود.
            </DescriptionDetail>
          </CurveDetail>
        </div>
        <VerticalImage
          className="w-12 h-full -top-28 -left-12 "
          src="our-value"
        />
      </div>
    </Section>
  );
};

export default TeamValues;
