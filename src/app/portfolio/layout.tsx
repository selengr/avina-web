import { buildPageMetadata } from '@/lib/page-metadata';

export const metadata = buildPageMetadata({
  title: 'نمونه کارها',
  description:
    'نمونه‌هایی از پروژه‌ها و راهکارهایی که تیم آوینا تحویل داده است.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
