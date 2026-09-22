import { buildPageMetadata } from '@/lib/page-metadata';

export const metadata = buildPageMetadata({
  title: 'درباره ما',
  description:
    'آشنایی با تیم آوینا، ارزش‌ها و مسیر همکاری برای خدمات فناوری اطلاعات.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
