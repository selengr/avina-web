import React from 'react';

import CurveDetail from '@/app/ali/_components/curve-detail/curve-detail';
import TitleDetail from '@/app/ali/_components/title-detail/title-detail';
import DescriptionDetail from '@/app/ali/_components/description-detail/description-detail';
import Image from 'next/image';
import { Section, Title } from '@/app/_components/common/field';
import { VerticalImage } from '@/app/_components/common/vertical-image/vertical-image';

const TeamValues = () => {
  return (
    <Section>
      <Title>ارزش های تیم</Title>
      <div className="flex flex-col lg:flex-row md:gap-2 justify-between relative">
        <div className=" order-2 lg:order-1 ">
          <CurveDetail
            imageSrc="images/medal-1.svg"
            position="topRight"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              صلابت
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از صنعت چاپ، و با استفاده ...
            </DescriptionDetail>
          </CurveDetail>
          <CurveDetail
            imageSrc="images/medal-1.svg"
            position="bottomRight"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              احترام
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              استقبال از حرفه ای ها از همه اقشار و شناخت نیازهای فردی آنها
            </DescriptionDetail>
          </CurveDetail>
        </div>
        <div className="order-3 mr-auto lg:mr-0">
          <CurveDetail
            imageSrc="images/medal-1.svg"
            position="topLeft"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              اعتماد{' '}
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از صنعت چاپ، و با استفاده ...
            </DescriptionDetail>
          </CurveDetail>
          <CurveDetail
            imageSrc="images/medal-1.svg"
            position="bottomLeft"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              مسئولیت پذیری
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از صنعت چاپ، و با استفاده ...
            </DescriptionDetail>
          </CurveDetail>
        </div>
        <div className="order-1 lg:order-2 md:flex md:flex-col mx-auto my-10 lg:mx-0 md:my-0">
          <Image
            src="/images/chatbot.svg"
            alt="chatbot icon"
            width={384}
            height={350}
            className="md:mb-10 "
          />
          <CurveDetail
            imageSrc="images/medal-1.svg"
            position="flat"
          >
            <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
              صداقت
            </TitleDetail>
            <DescriptionDetail className="text-m-body2 md:text-d-body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از صنعت چاپ، و با استفاده ...
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
