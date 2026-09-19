import React from 'react';
import { cn } from '@/lib/utils';

interface SectionFieldProps {
  children: React.ReactNode;
  className?: string;
}

const SectionField: React.FC<SectionFieldProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        'relative w-full p-4 md:px-4 lg:px-8 2xl:px-48 py-10',
        className
      )}
    >
      {children}
    </section>
  );
};

SectionField.displayName = 'SectionField';

export default SectionField;
