import React from 'react';
import clsx from 'clsx';
import { ICraftedButtonProps } from './crafted-button.types';
import { IconArrowLeftDown } from '@/app/_components/icons/icons';

const CraftedButton: React.FC<ICraftedButtonProps> = ({
  children,
  icon = <IconArrowLeftDown />,
  onClick,
  className,
  bodyClassName,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center justify-between rounded-full bg-transparent',
        className
      )}
    >
      <span
        className={clsx(
          'rounded-r-full -translate-x-[1px] bg-white text-secondary text-[10px] line-clamp-1 xs:text-m-body2 md:text-d-body2 md:font-kalameh px-2 py-1',
          bodyClassName
        )}
      >
        {children}
      </span>
      <div>
        <svg
          width="55"
          height="30"
          viewBox="0 0 55 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="55"
            height="30"
            fill="white"
          />

          <path
            fill="red"
            d="M0 0.000973933C5.99727 0.0793827 10.8678 4.87764 15.1205 9.13277C18.2601 12.2742 22.5985 14.2174 27.3908 14.2174C32.1831 14.2174 36.5215 12.2742 39.6611 9.13278C43.949 4.84246 48.8649 0 54.9306 0H0V0.000973933Z"
          />

          <path
            fill="red"
            d="M0 30C5.99727 29.9206 10.8678 25.1224 15.1205 20.8672C18.2601 17.7258 22.5985 15.7826 27.3908 15.7826C32.1831 15.7826 36.5215 17.7258 39.6611 20.8672C43.949 25.1575 48.8649 30 54.9306 30H0V30Z"
          />
        </svg>
      </div>
      <div className="bg-white p-[3px] translate-x-[1px] rounded-l-full ">
        <div className="text-xl bg-primary-text text-white rounded-full">
          {icon}
        </div>
      </div>
    </button>
  );
};

export default CraftedButton;
