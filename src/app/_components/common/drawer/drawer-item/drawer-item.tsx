import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IDrawerItemProps } from './drawer-item.types';
import { IconLeftArrow } from '@/app/_components/icons/icons';

const DrawerItem: React.FC<IDrawerItemProps> = ({
  children,
  icon: Icon,
  onClick,
  href,
}) => {
  return (
    <Link href={href}>
      <motion.button
        className="bg-white p-4 rounded-full w-full flex items-center justify-between"
        onClick={onClick}
        whileHover={{
          scale: 1.02,
          backgroundColor: '#f1f5f9',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center">
          <Icon className="stroke-none fill-disabled-text" />
          <p className="mr-2">{children}</p>
        </div>
        <IconLeftArrow className="stroke-none fill-disabled-text" />
      </motion.button>
    </Link>
  );
};

export default DrawerItem;
