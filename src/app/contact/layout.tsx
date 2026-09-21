import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تماس با ما',
  description:
    'برای مشاوره، پشتیبانی یا شروع همکاری با آوینا از این صفحه پیام بگذارید.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
