'use client';
import { useState } from 'react';
import Drawer from '../../common/drawer/drawer';
import {
  IconBag,
  IconFillInfo,
  IconFillPhone,
  IconHome,
  IconMenu,
  IconServiceLink,
} from '../../icons/icons';
import { PATH_PAGE } from '../../../../../routes/paths';
import DrawerItem from '../../common/drawer/drawer-item/drawer-item';

const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const menuLinks = [
    { href: PATH_PAGE.root as string, label: 'صفحه اصلی', icon: IconHome },
    {
      href: PATH_PAGE.services as string,
      label: 'خدمات',
      icon: IconServiceLink,
    },
    {
      href: PATH_PAGE.portfolio.root as string,
      label: 'نمونه کارها',
      icon: IconBag,
    },
    { href: PATH_PAGE.about as string, label: 'درباره ما', icon: IconFillInfo },
    {
      href: PATH_PAGE.contact as string,
      label: 'تماس با ما',
      icon: IconFillPhone,
    },
  ];

  return (
    <>
      <button
        type="button"
        aria-label="باز کردن منو"
        aria-expanded={isDrawerOpen}
        onClick={toggleDrawer}
        className="lg:hidden mt-2"
      >
        <IconMenu
          className="cursor-pointer"
          fill="#637381"
          stroke="fill"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        />
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuLinks.map(({ href, label, icon }) => (
              <li
                key={href}
                className="gap-2"
              >
                <DrawerItem
                  href={href}
                  icon={icon}
                  onClick={handleLinkClick}
                >
                  {label}
                </DrawerItem>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default MobileMenu;
