import './globals.css';
import type { Metadata } from 'next';

// Layout
import Header from './_components/layouts/header/header';
import Footer from './_components/layouts/footer/Footer';
import ChatIcon from './_components/layouts/online-chat/chat-icon';
import CustomScrollbar from './_components/common/custom-scrollbar/custom-scrollbar';
import AppProviders from './_components/providers/app-providers';

// Fonts
import { kalameh, museoModerno } from '@/constans/font';
import {
  APP_DEFAULT_TITLE,
  APP_DESCRIPTION,
  APP_TITLE_TEMPLATE,
  APP_NAME,
  APP_OG_IMAGE,
  SITE_URL,
} from '../../config-global';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: '',
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'آوینا',
    'Avina',
    'آوینا IT',
    'راهکارهای فناوری اطلاعات',
    'نرم‌افزار',
    'سخت‌افزار',
    'شبکه',
    'امنیت اطلاعات',
    'پشتیبانی IT',
    'طراحی وب',
  ],
  applicationName: APP_NAME,
  openGraph: {
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    url: SITE_URL,
    siteName: APP_NAME,
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: APP_OG_IMAGE,
        width: 898,
        height: 645,
        alt: APP_DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [APP_OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// ----------------------------------------------------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${kalameh.variable} ${museoModerno.variable}`}
    >
      <body
        className={`${kalameh.className} antialiased bg-paper relative overflow-x-hidden`}
      >
        <AppProviders>
          <div className="md:px-4 lg:px-8 2xl:px-48">
            <Header />
          </div>
          {children}
          <Footer />
          <CustomScrollbar />
          <ChatIcon />
        </AppProviders>
      </body>
    </html>
  );
}
