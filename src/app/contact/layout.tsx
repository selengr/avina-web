import type { Metadata } from 'next';

// ----------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    absolute: 'تماس با ما',
  },
};
// ----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
