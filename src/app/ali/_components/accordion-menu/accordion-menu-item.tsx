'use client';

import React from 'react';
import { IAccordionMenuItemProps } from './accordion-menu-item.types';
import { IconShortArrowDown } from '@/app/_components/icons/icons';

const AccordionMenuItem: React.FC<
  IAccordionMenuItemProps & {
    isOpen?: boolean;
    onToggle?: () => void;
  }
> = ({ children, title, customClasses, isOpen = false, onToggle }) => {
  return (
    <div
      className={`w-full pt-5 px-2 text-primary-text border-t border-divider mb-3 ${customClasses?.className || ''}`}
    >
      <button
        type="button"
        className="flex justify-between items-center w-full text-right gap-3"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span
          className={`text-d-subtitle1 mb-2 font-semibold md:font-kalameh ${customClasses?.titleStyle || ''}`}
        >
          {title}
        </span>
        <span
          className={`${customClasses?.iconStyle || ''} inline-flex transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <IconShortArrowDown className="fill-primary-text stroke-none" />
        </span>
      </button>
      <div className="text-d-body1 pt-2 ps-2">{children}</div>
    </div>
  );
};

export default AccordionMenuItem;
