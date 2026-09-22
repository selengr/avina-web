import { buildPageMetadata } from '@/lib/page-metadata';

export const metadata = buildPageMetadata({
  title: 'خدمات',
  description:
    'خدمات نرم‌افزار، سخت‌افزار، شبکه، امنیت اطلاعات و آموزش و پشتیبانی آوینا.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
