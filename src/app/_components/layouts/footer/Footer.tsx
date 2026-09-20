'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FooterMedia from './footerMedia';
import { IMenuProps } from '@/types/api/mobile-menu.types';
import { getFooterMenuOptions } from './api/getFooterMenuOptions';
import { fallbackNavMenus } from '../shared/fallback-nav-menus';

const initialFooterMenus = fallbackNavMenus.filter((item) => item.link !== '/');

const Footer: React.FC = () => {
  const [menuLinksData, setMenuLinksData] =
    useState<IMenuProps[]>(initialFooterMenus);

  useEffect(() => {
    getFooterMenuOptions()
      .then((menus) => {
        if (menus?.length) setMenuLinksData(menus);
      })
      .catch(() => {
        // Keep the static fallback menus.
      });
  }, []);

  return (
    <footer className="flex justify-start items-center flex-col w-full h-60 md:h-48">
      <FooterMedia />
      <div className="flex justify-center md:justify-between items-center flex-col md:flex-row-reverse w-full absolute bottom-16 md:bottom-0 bg-primary h-28 space-y-7 md:px-16 lg:px-48 md:space-y-0 md:h-[86px]">
        <div className="flex flex-row gap-3 md:gap-4 flex-wrap justify-center">
          <a
            href="mailto:info@avina.com"
            className="text-m-body2 md:text-d-body2 text-white hover:underline"
          >
            info@avina.com
          </a>
          <a
            href="tel:+982132689562"
            className="text-m-body2 md:text-d-body2 text-white hover:underline"
          >
            021-326 89562
          </a>
          <a
            href="tel:+989128653245"
            className="text-m-body2 md:text-d-body2 text-white hover:underline"
          >
            0912 865 3245
          </a>
        </div>

        <div className="flex flex-row gap-3 md:gap-4 flex-wrap justify-center">
          {menuLinksData.map((item, index) => {
            const href = item?.link?.startsWith('/')
              ? item.link
              : `/${item?.link || ''}`;
            return (
              <Link
                key={item?.id ?? item?.link ?? `${item?.title}-${index}`}
                href={href}
                className="text-m-body2 md:text-d-body2 text-white hover:underline"
              >
                {item?.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:hidden justify-center items-center absolute bottom-5 text-primary-text text-m-caption">
        <span>وابسته به معاونت علمی و فناوری ریاست جمهوری اسلامی</span>
        <span> تمامی حقوق برای این سایت محفوظ است.</span>
      </div>
    </footer>
  );
};

export default Footer;
