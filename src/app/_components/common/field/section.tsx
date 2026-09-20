import React from 'react';
import { cn } from '@/lib/utils';

interface SectionFieldProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const SectionField: React.FC<SectionFieldProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      {...props}
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
