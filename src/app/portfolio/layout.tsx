import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نمونه کارها',
  description: 'نمونه‌هایی از پروژه‌ها و راهکارهایی که تیم آوینا تحویل داده است.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
