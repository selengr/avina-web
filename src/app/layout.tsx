import './globals.css';
import type { Metadata } from 'next';

// Layout
import Header from './_components/layouts/header/header';
import Footer from './_components/layouts/footer/Footer';
import ChatIcon from './_components/layouts/online-chat/chat-icon';
import CustomScrollbar from './_components/common/custom-scrollbar/custom-scrollbar';

// Fonts
import { kalameh, museoModerno } from '@/constans/font';
import {
  APP_DEFAULT_TITLE,
  APP_DESCRIPTION,
  APP_TITLE_TEMPLATE,
} from '../../config-global';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: ['آوینا', 'Avina', 'IT', 'وب‌سایت', 'نرم‌افزار', 'شبکه'],
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
        <div className="md:px-4 lg:px-8 2xl:px-48">
          <Header />
        </div>
        {children}
        <Footer />
        <CustomScrollbar />
        <ChatIcon />
      </body>
    </html>
  );
}
