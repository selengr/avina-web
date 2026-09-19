import {
  RequestConsulting,
  SocialMedia,
  UserComments,
} from '@/app/_components/homePage/dynamic-sections';
import BannerV3 from './_components/banner-v3';
import ProjectImages from './_components/project-images';
import RelatedProjects from './_components/related-projects';
import EdgeSection from '@/app/_components/common/card/edge-section';
import Divider from '@/app/_components/common/field/divider';
import {
  IconPlatform1,
  IconPlatform2,
  IconPlatform3,
  IconPlatform4,
  IconPlatform5,
  IconPlatform6,
} from '@/app/_components/icons/icons';
import ProjectInfo from './_components/projects-information';

export default async function Page({
  params,
}: {
  params: Promise<{ design: string }>;
}) {
  const { design } = await params;

  return (
    <>
      <div className="md:px-4 lg:px-8 2xl:px-48">
        <BannerV3
          title="طراحی وبسایت"
          subtitle="طراحی و پیاده سازی وب سایت خودروسازی شرکت بنتلی..."
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
          bgImage1="bg-banner-m-bg3"
          bgImage2="bg-banner-d-bg3"
          botImage={design}
          customClasses={{
            bgImage1: ' top-[30%]',
            bgImage2: 'left-0 top-0',
            botImage:
              'h-[300px] w-[213px] lg:h-[550px] lg:w-[393px] lg:top-[101px]',
          }}
        />
      </div>

      <ProjectInfo />

      <ProjectImages />
      <RelatedProjects />
      <UserComments />
      <RequestConsulting />
      <SocialMedia />
    </>
  );
}
