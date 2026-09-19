'use client';
import { useEffect, useState } from 'react';
import FooterMedia from './footerMedia';
import { IMenuProps } from '@/types/api/mobile-menu.types';
import { getFooterMenuOptions } from './api/getFooterMenuOptions';

const Footer: React.FC = () => {
  const [menuLinksData, setMenuLinksData] = useState<IMenuProps[]>([]);

  useEffect(() => {
    getFooterMenuOptions()
      .then((menus) => setMenuLinksData(menus || []))
      .catch(() => setMenuLinksData([]));
  }, []);

  return (
    <footer className="flex justify-start items-center flex-col w-full h-60 md:h-48">
      <FooterMedia />
      <div className="flex justify-center md:justify-between items-center flex-col md:flex-row-reverse w-full absolute bottom-16 md:bottom-0 bg-primary h-28 space-y-7 md:px-16 lg:px-48 md:space-y-0 md:h-[86px]">
        <div className="flex flex-row gap-3 md:gap-4">
          <span className="text-m-body2 md:text-d-body2 text-white">
            info@avina.com
          </span>
          <span className="text-m-body2 md:text-d-body2 text-white">
            <span className="text-m-body2 md:text-d-body2 text-white">
              021-326 89562
            </span>{' '}
            - 0912 865 3245
          </span>
        </div>

        <div className="flex flex-row gap-3 md:gap-4">
          {menuLinksData.map((item, index) => (
            <span
              key={item?.id ?? item?.link ?? `${item?.title}-${index}`}
              className="text-m-body2 md:text-d-body2 text-white"
            >
              {item?.title}
            </span>
          ))}
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
