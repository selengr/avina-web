import type { Metadata } from 'next';
import { APP_NAME, APP_OG_IMAGE } from '../../../config-global';

const title = 'تماس با ما';
const description =
  'برای مشاوره، پشتیبانی یا شروع همکاری با آوینا از این صفحه پیام بگذارید.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | ${APP_NAME}`,
    description,
    images: [{ url: APP_OG_IMAGE, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${APP_NAME}`,
    description,
    images: [APP_OG_IMAGE],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
