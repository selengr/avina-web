import { ReactNode } from 'react';

export interface IAccordionMenuItemProps {
  children: ReactNode;
  title: string;
  customClasses?: {
    className?: string;
    titleStyle?: string;
    iconStyle?: string;
  };
}
