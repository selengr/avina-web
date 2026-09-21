'use client';

import dynamic from 'next/dynamic';

export const UserComments = dynamic(() => import('../homePage/user-comments'), {
  ssr: false,
});

export const RequestConsulting = dynamic(
  () => import('../layouts/section/request-consulting'),
  {
    ssr: false,
  }
);

export const AvinaPortfolio = dynamic(
  () => import('../homePage/avina-portfolio'),
  {
    ssr: false,
  }
);

export const InfiniteMovingCards = dynamic(
  () => import('../common/infinite-moving-cards/infinite-moving-cards'),
  {
    ssr: false,
  }
);

export const ServiceCards = dynamic(
  () => import('../layouts/section/service-card'),
  {
    ssr: false,
  }
);

export const AboutUs = dynamic(() => import('../layouts/section/about-us'), {
  ssr: false,
});

export const AutoPlayVideo = dynamic(() => import('../common/video/video'), {
  ssr: false,
});

export const SocialMedia = dynamic(
  () => import('../layouts/section/social-media'),
  {
    ssr: false,
  }
);

export const SubscribeToNewsletter = dynamic(
  () => import('../layouts/section/subscribe-to-newsletter'),
  {
    ssr: false,
  }
);
