import type { Metadata } from 'next';
import { APP_NAME, APP_OG_IMAGE } from '../../config-global';

type PageMetaInput = {
  title: string;
  description: string;
};

/** Shared title / description / OG / Twitter block for section layouts. */
export function buildPageMetadata({
  title,
  description,
}: PageMetaInput): Metadata {
  const shareTitle = `${title} | ${APP_NAME}`;

  return {
    title,
    description,
    openGraph: {
      title: shareTitle,
      description,
      images: [{ url: APP_OG_IMAGE, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [APP_OG_IMAGE],
    },
  };
}
