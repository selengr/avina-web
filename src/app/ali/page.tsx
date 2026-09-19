import React from 'react';
import CraftedButton from './_components/crafted-button/crafted-button';
import CardDetail from './_components/card-detail/card-detail';
import TitleDetail from './_components/title-detail/title-detail';
import TitleDetailEn from './_components/title-detail-en/title-detail-en';
import DescriptionDetail from './_components/description-detail/description-detail';
import AvatarDetail from './_components/avatar-detail/avatar-detail';
import CurveDetail from './_components/curve-detail/curve-detail';
import AccordionMenu from './_components/accordion-menu/accordion-menu';
import ShapeCard from './_components/shape-card/shape-card';
import SearchDisplay from '../_components/common/search/search-display/search-display';
import SearchData from '../_components/common/search/search-data/search-data';
import Search from '../_components/common/search/search';

const accordionData = [
  {
    id: 1,
    title: 'آیتم ۱',
    content:
      'این محتوا برای آیتم ۱ است. این شامل اطلاعات دقیق درباره آیتم اول می‌باشد.',
  },
  {
    id: 2,
    title: 'آیتم ۲',
    content:
      'این محتوا برای آیتم ۲ است. این شامل مرور و نکات کلیدی برای آیتم دوم می‌باشد.',
  },
  {
    id: 3,
    title: 'آیتم ۳',
    content:
      'این محتوا برای آیتم ۳ است. این شامل جزئیات و توضیحات مختلف مرتبط با آیتم سوم می‌باشد.',
  },
  {
    id: 4,
    title: 'آیتم ۴',
    content:
      'این محتوا برای آیتم ۴ است. این شامل اطلاعات جذاب و کاربردی درباره آیتم چهارم می‌باشد.',
  },
  {
    id: 5,
    title: 'آیتم ۵',
    content:
      'این محتوا برای آیتم ۵ است. این شامل نکات کلیدی و جزئیات مفید درباره آیتم پنجم می‌باشد.',
  },
  {
    id: 6,
    title: 'آیتم ۶',
    content:
      'این محتوا برای آیتم ۶ است. این شامل توضیحات مختلف و اطلاعات دقیق درباره آیتم ششم می‌باشد.',
  },
];

const page = () => {
  return (
    // <div className="h-[400vh] bg-primary-light p-5">
    //   <CraftedButton>انتخاب کنید</CraftedButton>
    //   <div className="m-10"></div>
    //   <CardDetail>
    //     <AvatarDetail src="/images/search.svg" />
    //     <TitleDetail>برنامه نویس</TitleDetail>
    //     <TitleDetailEn>Programmer</TitleDetailEn>
    //     <DescriptionDetail>
    //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
    //       از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
    //       سطرآنچنان که لازم است.
    //     </DescriptionDetail>
    //   </CardDetail>
    //   <CurveDetail
    //     imageSrc="images/medal-1.svg"
    //     position="topLeft"
    //   >
    //     <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
    //       صلابت
    //     </TitleDetail>
    //     <DescriptionDetail className="text-m-body2 md:text-d-body1">
    //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    //       استفاده از صنعت چاپ، و با استفاده ...
    //     </DescriptionDetail>
    //   </CurveDetail>
    //   <CurveDetail
    //     imageSrc="images/medal-1.svg"
    //     position="bottomLeft"
    //   >
    //     <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
    //       صلابت
    //     </TitleDetail>
    //     <DescriptionDetail className="text-m-body2 md:text-d-body1">
    //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    //       استفاده
    //     </DescriptionDetail>
    //   </CurveDetail>
    //   <CurveDetail
    //     imageSrc="images/medal-1.svg"
    //     position="topRight"
    //   >
    //     <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
    //       صلابت
    //     </TitleDetail>
    //     <DescriptionDetail className="text-m-body2 md:text-d-body1">
    //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    //       استفاده از صنعت چاپ، و با استفاده ...
    //     </DescriptionDetail>
    //   </CurveDetail>
    //   <CurveDetail
    //     imageSrc="images/medal-1.svg"
    //     position="bottomRight"
    //   >
    //     <TitleDetail className="text-d-subtitle2 md:text-d-subtitle1">
    //       صلابت
    //     </TitleDetail>
    //     <DescriptionDetail className="text-m-body2 md:text-d-body1">
    //       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
    //       استفاده از صنعت چاپ، و با استفاده ...
    //     </DescriptionDetail>
    //   </CurveDetail>
    //   <div className="my-20"></div>
    //   <AccordionMenu accordionData={accordionData} />
    //   <ShapeCard />
    // </div>
    <div className="mt-44">
      {/* <SearchData /> */}
      <Search />
    </div>
  );
};

export default page;
