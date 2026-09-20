import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره ما',
  description:
    'آشنایی با تیم آوینا، ارزش‌ها و مسیر همکاری برای خدمات فناوری اطلاعات.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
