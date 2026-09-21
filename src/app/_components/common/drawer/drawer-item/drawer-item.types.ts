import { ComponentType, ReactNode } from 'react';
export interface IDrawerItemProps {
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
  onClick: () => void;
  href: string;
  className?: string;
}
