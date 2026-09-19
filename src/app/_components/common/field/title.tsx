import React from 'react';
import { cn } from '@/lib/utils';

interface TitleFieldProps {
  children: React.ReactNode;
  className?: string;
}

const TitleField: React.FC<TitleFieldProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        'text-m-h4 md:text-d-h2 lg:text-d-h1 font-bold mb-6 md:font-kalameh md:font-semibold text-primary',
        className
      )}
    >
      {children}
    </h1>
  );
};

TitleField.displayName = 'TitleField';

export default TitleField;
