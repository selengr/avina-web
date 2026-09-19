import React from 'react';
import { IDrawerHeaderProps } from './drawer-header.types';

const DrawerHeader: React.FC<IDrawerHeaderProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center mb-20">{children}</div>
  );
};

export default DrawerHeader;
