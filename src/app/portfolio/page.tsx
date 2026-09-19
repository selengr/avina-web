import {
  InfiniteMovingCards,
  RequestConsulting,
} from '../_components/homePage/dynamic-sections';
import BannerV2 from '../_components/layouts/banner/banner-v2';
import SocialMedia from '../_components/layouts/section/social-media';
import { Projects } from './_components/dynamic-sections';

const PortfolioPage = () => {
  return (
    <>
      <div className="md:px-4 lg:px-8 2xl:px-48">
        <BannerV2
          title="نمونه کارها"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          bgImage1="bg-banner-m-bg3"
          bgImage2="bg-banner-d-bg3"
          botImage="bg-bot3-m lg:bg-bot3-d"
          customClasses={{
            bgImage1: ' top-[30%]',
            bgImage2: 'left-0 top-0',
            botImage:
              'h-[300px] w-[213px] lg:h-[550px] lg:w-[393px] lg:top-[101px] lg:left-28',
          }}
        />
      </div>
      <Projects />
      <RequestConsulting />
      <InfiniteMovingCards
        direction="left"
        speed="fast"
        className="border-y-divider"
      />
      <SocialMedia />
    </>
  );
};

export default PortfolioPage;
