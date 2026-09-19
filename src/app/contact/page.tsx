import AutoPlayVideo from '../_components/common/video/video';
import EdgeSectionContact from '../_components/contact/card/card';
import BannerV2 from '../_components/layouts/banner/banner-v2';
import RequestConsulting from '../_components/layouts/section/request-consulting';
import SocialMedia from '../_components/layouts/section/social-media';
import SubscribeToNewsletter from '../_components/layouts/section/subscribe-to-newsletter';

const page = () => {
  return (
    <>
      <div className="md:px-4 lg:px-8 2xl:px-48">
        <BannerV2
          title="تماس با ما"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          bgImage1="bg-banner-m-bg2"
          bgImage2="bg-banner-d-bg2"
          botImage="bg-bot5-m lg:bg-bot5-d"
          customClasses={{
            bgImage1: '',
            bgImage2: '',
            botImage: 'h-[300px] w-[233px] lg:h-[550px] lg:w-[582px]',
          }}
        />
      </div>
      <EdgeSectionContact
        title="ارتباط با ما"
        imageSrc="map"
      />
      <AutoPlayVideo src="video1.mp4">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"></div>
      </AutoPlayVideo>
      <RequestConsulting />
      <SocialMedia />
      <SubscribeToNewsletter />
    </>
  );
};

export default page;
