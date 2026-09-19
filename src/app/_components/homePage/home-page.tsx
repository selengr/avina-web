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
  { title: 'Forest Adventure', src: 'service-card1.svg' },
  { title: 'Valley of life', src: 'service-card2.svg' },
  { title: 'Sala behta hi jayega', src: 'service-card3.svg' },
  { title: 'Camping is for pros', src: 'service-card4.svg' },
  { title: 'The road not taken', src: 'service-card5.svg' },
];

export default function HomePage() {
  return (
    <>
      <div className="md:px-4 lg:px-8 2xl:px-48">
        <Banner
          title="آوینــــــــا"
          subtitle=""
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
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
