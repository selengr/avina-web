import ShapeCard from '@/app/ali/_components/shape-card/shape-card';
import Banner from '../layouts/banner/banner';
import FeatureSection from '../layouts/section/vision';
import NewsAndArticles from './news-and-articles';
import {
  RequestConsulting,
  UserComments,
  AvinaPortfolio,
  InfiniteMovingCards,
  ServiceCards,
  AboutUs,
  AutoPlayVideo,
  SubscribeToNewsletter,
  SocialMedia,
} from './dynamic-sections';

const cards = [
  { title: 'شبکه و ارتباطات', src: 'service-card1.svg' },
  { title: 'نرم افزار', src: 'service-card2.svg' },
  { title: 'سخت افزار', src: 'service-card3.svg' },
  { title: 'امنیت اطلاعات', src: 'service-card4.svg' },
  { title: 'آموزش و پشتیبانی', src: 'service-card5.svg' },
];

export default function HomePage() {
  return (
    <>
      <div className="md:px-4 lg:px-8 2xl:px-48">
        <Banner
          title="آوینــــــــا"
          subtitle=""
          description="آوینا کنار کسب‌وکارهاست؛ از نرم‌افزار و شبکه تا امنیت و پشتیبانی، تا کار روزمره پایدارتر پیش برود."
          logoSrc="/logo/service.svg"
          bgImage1="xs:bg-banner-m-bg1"
          bgImage2="lg:bg-banner-d-bg1"
          botImage="bg-bot1-m lg:bg-bot1-d"
          satisfactionPercentage={65}
          totalUsers="9,194"
        />
      </div>

      <AvinaPortfolio />

      <InfiniteMovingCards
        direction="left"
        speed="fast"
        className="border-y-divider"
      />

      <ServiceCards cards={cards} />

      <AboutUs backgroundColor="#fff" />

      <FeatureSection />

      <RequestConsulting />

      <AutoPlayVideo src="video1.mp4">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"></div>
      </AutoPlayVideo>

      <NewsAndArticles />

      <UserComments />

      <SocialMedia />

      <ShapeCard />

      <SubscribeToNewsletter />
    </>
  );
}
