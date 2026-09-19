import { cn } from '@/lib/utils';
import React from 'react';

import Spinner from '../../spinner/spinner';
import { TButtonProps } from './button.types';

const Button: React.FC<TButtonProps> = ({
  variant = 'contained',
  size = 'md',
  icon,
  shape = 'normal',
  isLoading = false,
  disabled = false,
  className,
  colorType = 'primary',
  children,
  datatype,
  ...restProps
}) => {
  const buttonClasses = cn(
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    `btn-${shape}`,
    {
      [`btn-${variant}-primary`]: !disabled && colorType === 'primary',
      [`btn-${variant}-secondary`]: !disabled && colorType === 'secondary',
      [`btn-${variant}-info`]: !disabled && colorType === 'info',
      [`btn-${variant}-success`]: !disabled && colorType === 'success',
      [`btn-${variant}-warning`]: !disabled && colorType === 'warning',
      [`btn-${variant}-error`]: !disabled && colorType === 'error',
    },
    className,
    { 'opacity-50 cursor-not-allowed': disabled }
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      datatype={datatype}
      {...restProps}
    >
      {isLoading ? (
        <span className="loader">
          <Spinner />
        </span> // نمایش لودینگ به جای محتوا
      ) : (
        <>
          {children}
          {icon && <span className="mr-l">{icon}</span>}{' '}
          {/* نمایش آیکون کنار متن */}
        </>
      )}
    </button>
  );
};

export default Button;
