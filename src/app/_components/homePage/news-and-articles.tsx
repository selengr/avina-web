import Title from '../common/field/title';
import Wrapper from '../common/field/wrapper';
import Description from '../common/field/description';
import httpService from '@/services/api/http-service';
import { TNewsAndArticlesData } from '@/types/news-and-articles';
import SwiperSliderWrapper from './swiper-slider-wrapper';
import NewsReadMoreButton from './news-read-more-button';
import { HOST_API_KEY } from '../../../../config-global';

const fallbackNews: TNewsAndArticlesData[] = [
  {
    id: 1,
    title: 'خبر جدید در مورد صادرات و واردات محصولات',
    slug: 'news-1',
    headline: 'مروری کوتاه بر صادرات و واردات و فرصت‌های پیش‌رو برای کسب‌وکارها.',
    published_at: '1403/07/25',
    views_count: 0,
    category: {
      id: 1,
      title: 'عمومی',
      brief_description: '',
    },
    thumbnail: {
      uuid: '1',
      mime_type: 'image/svg+xml',
      disk: 'public',
      size: 0,
      preview_link: 'images/news-card1.svg',
      path: 'images/news-card1.svg',
    },
  },
  {
    id: 2,
    title: 'تحول دیجیتال در کسب‌وکارهای ایرانی',
    slug: 'news-2',
    headline: 'چطور تحول دیجیتال می‌تواند کار روزمره شرکت‌های ایرانی را ساده‌تر کند.',
    published_at: '1403/07/24',
    views_count: 0,
    category: {
      id: 1,
      title: 'عمومی',
      brief_description: '',
    },
    thumbnail: {
      uuid: '2',
      mime_type: 'image/svg+xml',
      disk: 'public',
      size: 0,
      preview_link: 'images/news-card2.svg',
      path: 'images/news-card2.svg',
    },
  },
  {
    id: 3,
    title: 'امنیت شبکه و زیرساخت‌های سازمانی',
    slug: 'news-3',
    headline: 'نکات کاربردی برای امن‌تر نگه داشتن شبکه و زیرساخت سازمانی.',
    published_at: '1403/07/23',
    views_count: 0,
    category: {
      id: 1,
      title: 'عمومی',
      brief_description: '',
    },
    thumbnail: {
      uuid: '3',
      mime_type: 'image/svg+xml',
      disk: 'public',
      size: 0,
      preview_link: 'images/news-card3.svg',
      path: 'images/news-card3.svg',
    },
  },
];

export default async function NewsAndArticles() {
  let newsArticles: TNewsAndArticlesData[] = fallbackNews;

  if (HOST_API_KEY) {
    try {
      const response = await httpService.get<TNewsAndArticlesData[]>(
        '/api/v1/public/news'
      );
      const payload = response?.data?.data;
      if (Array.isArray(payload) && payload.length > 0) {
        newsArticles = payload;
      }
    } catch {
      // Keep fallback cards when the public news API is unavailable.
    }
  }

  return (
    <div className="w-full bg-gray-50 py-16 xs:px-4 md:pr-0">
      <div className="flex flex-col md:flex-row-reverse pl-4 lg:pl-8 2xl:pl-48">
        <Wrapper className="mb-0 md:w-full md:mb-8 md:flex md:justify-center md:items-start md:flex-col md:pr-10 text-justify">
          <Title>اخبار و مقالات</Title>

          <Description className="md:w-[78%] lg:w-full">
            آخرین اخبار و مقالات آوینا را دنبال کنید؛ از به‌روزرسانی‌های فناوری
            تا نکات کاربردی برای رشد کسب‌وکار دیجیتال شما.
          </Description>

          <NewsReadMoreButton />
        </Wrapper>

        <div className="md:max-w-[60%] lg:max-w-[70%] xs:-mx-4">
          <SwiperSliderWrapper newsCard={newsArticles} />
        </div>
      </div>
    </div>
  );
}
