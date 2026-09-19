import type { Metadata } from 'next';

// ----------------------------------------------------------------------
export const metadata: Metadata = {
  title: 'درباره ما',
};
// ----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
