import React from 'react';
import { IAccordionMenuItemProps } from './accordion-menu-item.types';
import { IconShortArrowDown } from '@/app/_components/icons/icons';

const AccordionMenuItem: React.FC<IAccordionMenuItemProps> = ({
  children,
  title,
  customClasses,
}) => {
  return (
    <div
      className={`w-full pt-5 px-2 text-primary-text border-1 border-t border-divider mb-3 cursor-pointer ${customClasses?.className} `}
    >
      <div className="flex justify-between items-center">
        <p
          className={`text-d-subtitle1 mb-2 font-semibold md:font-kalameh ${customClasses?.titleStyle}`}
        >
          {title}
        </p>
        <span className={customClasses?.iconStyle}>
          <IconShortArrowDown className="fill-primary-text stroke-none" />
        </span>
      </div>
      <div className="text-d-body1 pt-5 ps-2">{children}</div>
    </div>
  );
};

export default AccordionMenuItem;
