import Team from './_components/team/team';
import AboutUs from '../_components/layouts/section/about-us';
import TeamValues from './_components/team-values/team-values';
import BannerV2 from '../_components/layouts/banner/banner-v2';
import FeatureSection from '../_components/layouts/section/vision';
import SocialMedia from '../_components/layouts/section/social-media';
import { ServiceCards } from '../_components/homePage/dynamic-sections';

const cards = [
  { title: 'شبکه و ارتباطات', src: 'service-card1.svg' },
  { title: 'نرم افزار', src: 'service-card2.svg' },
  { title: 'سخت افزار', src: 'service-card3.svg' },
  { title: 'امنیت اطلاعات', src: 'service-card4.svg' },
  { title: 'آموزش و پشتیبانی', src: 'service-card5.svg' },
];

const AboutPage = () => {
  return (
    <>
      <div className="md:px-4 lg:px-8 2xl:px-48">
        <BannerV2
          title="درباره ما"
          description="آوینا یک تیم فناوری است که روی نرم‌افزار، زیرساخت و پشتیبانی کنار کسب‌وکارها می‌ماند تا کارها ساده‌تر و پایدارتر پیش برود."
          bgImage1="bg-banner-m-bg2"
          bgImage2="bg-banner-d-bg2"
          botImage="bg-bot4-m lg:bg-bot4-d"
          customClasses={{
            bgImage1: '',
            bgImage2: '',
            botImage: '',
          }}
        />
      </div>
      <AboutUs backgroundColor="#fff" />
      <TeamValues />
      <ServiceCards cards={cards} />
      <Team />
      <FeatureSection />
      <SocialMedia />
    </>
  );
};

export default AboutPage;
