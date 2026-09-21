'use client';

import type React from 'react';
import { useEffect, useRef, useCallback, memo } from 'react';
import clsx from 'clsx';
import { IDrawerProps } from './drawer.types';
import { IconClose } from '../../icons/icons';
import Image from 'next/image';
import DrawerHeader from './drawer-header/drawer-header';
import Search from '../search/search';

const Drawer: React.FC<IDrawerProps> = ({ isOpen, onClose, children }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, handleClose]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 bg-paper shadow-lg transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
      ref={drawerRef}
    >
      <div className="p-4">
        <DrawerHeader>
          <button
            onClick={handleClose}
            className=" text-gray-600 hover:text-gray-800"
          >
            <IconClose />
          </button>
          <Image
            width={64}
            height={28}
            alt="Avina IT Solutions Logo"
            src="/logo/logo.svg"
          />
          <Search />
        </DrawerHeader>
        {children}
      </div>
    </div>
  );
};

export default memo(Drawer);
