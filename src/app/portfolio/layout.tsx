import type { Metadata } from 'next';

// ----------------------------------------------------------------------
export const metadata: Metadata = {
  title: 'نمونه کارها',
};
// ----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
