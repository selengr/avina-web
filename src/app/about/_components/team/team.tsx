import React from 'react';

import CardDetail from '@/app/ali/_components/card-detail/card-detail';
import AvatarDetail from '@/app/ali/_components/avatar-detail/avatar-detail';
import TitleDetail from '@/app/ali/_components/title-detail/title-detail';
import TitleDetailEn from '@/app/ali/_components/title-detail-en/title-detail-en';
import DescriptionDetail from '@/app/ali/_components/description-detail/description-detail';
import TeamCeoImage from './team-ceo-image';
import { Section, Title } from '@/app/_components/common/field';
import { VerticalImage } from '@/app/_components/common/vertical-image/vertical-image';

const teamMembers = [
  {
    id: 1,
    avatar: '/images/search.svg',
    title: 'برنامه نویس',
    titleEn: 'Programmer',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 2,
    avatar: '/images/search.svg',
    title: 'برنامه نویس',
    titleEn: 'Programmer',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 3,
    avatar: '/images/search.svg',
    title: 'برنامه نویس',
    titleEn: 'Programmer',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 4,
    avatar: '/images/search.svg',
    title: 'برنامه نویس',
    titleEn: 'Programmer',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 5,
    avatar: '/images/search.svg',
    title: 'برنامه نویس',
    titleEn: 'Programmer',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 6,
    avatar: '/images/search.svg',
    title: 'برنامه نویس',
    titleEn: 'Programmer',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
];

const Team = () => {
  const firstRow = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
  const secondRow = teamMembers.slice(Math.ceil(teamMembers.length / 2));
  return (
    <Section>
      <Title>ما یک تیم خلاق و قدرتمند هستیم</Title>
      <div className="relative ">
        <div className="flex w-full flex-col lg:flex-row justify-center gap-4">
          <div className="flex flex-wrap order-2 lg:overflow-x-auto lg:w-2/3">
            <div className="flex gap-5  flex-col lg:flex-row ">
              {firstRow?.map((item) => (
                <div key={item?.id}>
                  <CardDetail>
                    <AvatarDetail src={item?.avatar} />
                    <TitleDetail>{item?.title}</TitleDetail>
                    <TitleDetailEn>{item?.titleEn}</TitleDetailEn>
                    <DescriptionDetail>{item?.description}</DescriptionDetail>
                  </CardDetail>
                </div>
              ))}
            </div>
            <div className="flex gap-5 flex-col lg:flex-row">
              {secondRow?.map((item) => (
                <div key={item?.id}>
                  <CardDetail>
                    <AvatarDetail src={item?.avatar} />
                    <TitleDetail>{item?.title}</TitleDetail>
                    <TitleDetailEn>{item?.titleEn}</TitleDetailEn>
                    <DescriptionDetail>{item?.description}</DescriptionDetail>
                  </CardDetail>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 order-1 lg:order-3">
            <TeamCeoImage />
          </div>
        </div>
        <VerticalImage
          className="w-12 h-full -top-28 -left-12 "
          src="Team"
        />
      </div>
    </Section>
  );
};

export default Team;
