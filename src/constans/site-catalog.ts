import { PATH_PAGE } from '../../routes/paths';

export type CatalogKind = 'page' | 'service' | 'project';

export type CatalogItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  kind: CatalogKind;
  category?: string;
  keywords?: string[];
};

export const catalogKindLabel: Record<CatalogKind, string> = {
  page: 'صفحات',
  service: 'خدمات',
  project: 'نمونه کارها',
};

export const portfolioProjects = [
  {
    id: 1,
    image: 'images/card1.svg',
    title: 'سیستم مدیریت مشتریان',
    category: 'طراحی نرم افزار',
    slug: 'crm',
    description: 'داشبورد و مدیریت ارتباط با مشتریان برای تیم فروش.',
  },
  {
    id: 2,
    image: 'images/card2.svg',
    title: 'طراحی فروشگاه آنلاین',
    category: 'طراحی سایت',
    slug: 'shop',
    description: 'فروشگاه اینترنتی با سبد خرید و پنل مدیریت.',
  },
  {
    id: 3,
    image: 'images/card3.svg',
    title: 'هویت بصری برند',
    category: 'طراحی گرافیک',
    slug: 'brand',
    description: 'لوگو و هویت بصری برای یک برند خدماتی.',
  },
  {
    id: 4,
    image: 'images/card1.svg',
    title: 'تست امنیت شبکه',
    category: 'امنیت اطلاعات',
    slug: 'security-audit',
    description: 'بررسی آسیب‌پذیری‌ها و گزارش امنیتی زیرساخت.',
  },
  {
    id: 5,
    image: 'images/card2.svg',
    title: 'راه‌اندازی سرور ابری',
    category: 'شبکه و ارتباطات',
    slug: 'cloud',
    description: 'استقرار و پیکربندی سرورهای ابری سازمانی.',
  },
  {
    id: 6,
    image: 'images/card3.svg',
    title: 'اپلیکیشن مدیریت پروژه',
    category: 'طراحی نرم افزار',
    slug: 'pm-app',
    description: 'ابزار پیگیری کارها و گزارش پیشرفت تیم.',
  },
  {
    id: 7,
    image: 'images/card1.svg',
    title: 'رابط کاربری اپ موبایل',
    category: 'طراحی گرافیک',
    slug: 'mobile-ui',
    description: 'طراحی UI/UX برای اپلیکیشن موبایل خدماتی.',
  },
  {
    id: 8,
    image: 'images/card2.svg',
    title: 'ایمن‌سازی داده‌های شرکتی',
    category: 'امنیت اطلاعات',
    slug: 'data-secure',
    description: 'کنترل دسترسی و پایش داده‌های حساس سازمان.',
  },
  {
    id: 9,
    image: 'images/card3.svg',
    title: 'پرتال داخلی سازمان',
    category: 'طراحی سایت',
    slug: 'intranet',
    description: 'پرتال کارکنان برای اخبار، درخواست‌ها و اسناد.',
  },
  {
    id: 10,
    image: 'images/card1.svg',
    title: 'مانیتورینگ شبکه',
    category: 'شبکه و ارتباطات',
    slug: 'monitor',
    description: 'پایش وضعیت شبکه و هشدار قطعی سرویس‌ها.',
  },
  {
    id: 11,
    image: 'images/card2.svg',
    title: 'اتوماسیون اداری',
    category: 'طراحی نرم افزار',
    slug: 'automation',
    description: 'خودکارسازی فرآیندهای اداری و گردش کار.',
  },
  {
    id: 12,
    image: 'images/card3.svg',
    title: 'پلتفرم آموزش آنلاین',
    category: 'سایر',
    slug: 'lms',
    description: 'سامانه آموزش با دوره، آزمون و گزارش پیشرفت.',
  },
] as const;

export const portfolioCategories = [
  'طراحی نرم افزار',
  'طراحی سایت',
  'طراحی گرافیک',
  'امنیت اطلاعات',
  'شبکه و ارتباطات',
  'سایر',
] as const;

export const siteCatalog: CatalogItem[] = [
  {
    id: 'page-home',
    title: 'صفحه اصلی',
    description: 'معرفی آوینا و خدمات اصلی',
    href: PATH_PAGE.root,
    kind: 'page',
    keywords: ['خانه', 'آوینا'],
  },
  {
    id: 'page-services',
    title: 'خدمات',
    description: 'نرم‌افزار، سخت‌افزار، شبکه، امنیت و پشتیبانی',
    href: PATH_PAGE.services,
    kind: 'page',
    keywords: ['سرویس'],
  },
  {
    id: 'page-portfolio',
    title: 'نمونه کارها',
    description: 'پروژه‌ها و کارهای انجام‌شده',
    href: PATH_PAGE.portfolio.root,
    kind: 'page',
    keywords: ['پورتفولیو', 'پروژه'],
  },
  {
    id: 'page-about',
    title: 'درباره ما',
    description: 'تیم، ارزش‌ها و داستان آوینا',
    href: PATH_PAGE.about,
    kind: 'page',
  },
  {
    id: 'page-contact',
    title: 'تماس با ما',
    description: 'راه‌های ارتباط و آدرس تماس',
    href: PATH_PAGE.contact,
    kind: 'page',
  },
  {
    id: 'page-consulting',
    title: 'درخواست مشاوره',
    description: 'فرم ثبت درخواست مشاوره تخصصی',
    href: '/#consulting',
    kind: 'page',
    keywords: ['مشاوره', 'فرم'],
  },
  {
    id: 'svc-software',
    title: 'نرم افزار',
    description: 'توسعه نرم‌افزار سفارشی و داشبورد',
    href: `${PATH_PAGE.services}#software`,
    kind: 'service',
    category: 'نرم افزار',
  },
  {
    id: 'svc-hardware',
    title: 'سخت افزار',
    description: 'تامین و راه‌اندازی سخت‌افزار سازمانی',
    href: `${PATH_PAGE.services}#hardware`,
    kind: 'service',
    category: 'سخت افزار',
  },
  {
    id: 'svc-security',
    title: 'امنیت اطلاعات',
    description: 'امن‌سازی داده و زیرساخت',
    href: `${PATH_PAGE.services}#information-security`,
    kind: 'service',
    category: 'امنیت اطلاعات',
  },
  {
    id: 'svc-network',
    title: 'شبکه و ارتباطات',
    description: 'طراحی و نگهداری شبکه',
    href: `${PATH_PAGE.services}#network`,
    kind: 'service',
    category: 'شبکه و ارتباطات',
  },
  {
    id: 'svc-support',
    title: 'آموزش و پشتیبانی',
    description: 'آموزش کاربران و پشتیبانی فنی',
    href: `${PATH_PAGE.services}#training-and-support`,
    kind: 'service',
    category: 'آموزش و پشتیبانی',
  },
  ...portfolioProjects.map((project) => ({
    id: `project-${project.id}`,
    title: project.title,
    description: project.description,
    href: PATH_PAGE.portfolio.design(project.slug),
    kind: 'project' as const,
    category: project.category,
    keywords: [project.category, project.slug],
  })),
];

export function searchCatalog(
  query: string,
  kind: CatalogKind | 'all' = 'all'
): CatalogItem[] {
  const q = query.trim().toLowerCase();
  return siteCatalog.filter((item) => {
    if (kind !== 'all' && item.kind !== kind) return false;
    if (!q) return kind !== 'all';
    const haystack = [
      item.title,
      item.description,
      item.category || '',
      ...(item.keywords || []),
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}
