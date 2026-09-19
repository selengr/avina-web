import React from 'react';
import { cn } from '@/lib/utils';

interface WrapperFieldProps {
  children: React.ReactNode;
  className?: string;
}

const WrapperField: React.FC<WrapperFieldProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'relative mb-6 md:mb-8 md:w-[50%] md:flex md:justify-center md:items-start md:flex-col',
        className
      )}
    >
      {children}
    </div>
  );
};

WrapperField.displayName = 'WrapperField';

export default WrapperField;
