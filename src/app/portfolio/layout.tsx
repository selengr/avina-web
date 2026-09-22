import type { Metadata } from 'next';
import { APP_NAME, APP_OG_IMAGE } from '../../../config-global';

const title = 'نمونه کارها';
const description =
  'نمونه‌هایی از پروژه‌ها و راهکارهایی که تیم آوینا تحویل داده است.';

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
