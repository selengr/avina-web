'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getMenuOptions } from './_api/getMenuOptions';
import { IMenuProps } from '@/types/api/mobile-menu.types';
import { useEffect, useState } from 'react';

export default function DesktopNav() {
  const pathname = usePathname();
  const [menuLinksData, setMenuLinksData] = useState<IMenuProps[]>([]);

  useEffect(() => {
    getMenuOptions().then(setMenuLinksData);
  }, []);

  return (
    <nav className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse">
      {menuLinksData?.map((link: IMenuProps) => {
        const linkPath = link?.link.startsWith('/')
          ? link.link
          : `/${link.link}`;
        const isActive = pathname === linkPath;
        return (
          <Link
            prefetch
            key={link?.link}
            href={linkPath}
            className={`relative border rounded-full px-4 py-1 transition-colors ${
              isActive
                ? 'bg-white text-primary-text text-d-subtitle1 font-semibold border-white pl-6'
                : 'border-secondary text-secondary text-d-body1 hover:bg-gray-200'
            }`}
          >
            {link?.title}
            {isActive && (
              <div className="absolute left-5 top-[14px] h-1 w-2 rounded-full">
                <div className="bg-primary-text h-1 w-1 mx-[14px] rounded-full"></div>
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
