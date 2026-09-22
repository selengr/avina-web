import { buildPageMetadata } from '@/lib/page-metadata';

export const metadata = buildPageMetadata({
  title: 'تماس با ما',
  description:
    'برای مشاوره، پشتیبانی یا شروع همکاری با آوینا از این صفحه پیام بگذارید.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
