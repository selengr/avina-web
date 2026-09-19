import type { Metadata } from 'next';

// ----------------------------------------------------------------------
export const metadata: Metadata = {
  title: 'خدمات',
};
// ----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
