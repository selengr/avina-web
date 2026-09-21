import React from 'react';
import { cn } from '@/lib/utils';

const DescriptionField = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'text-[10px] xs:text-m-body2 md:text-d-body1 text-secondary md:font-kalameh ',
        className
      )}
      {...props}
    ></div>
  );
});
DescriptionField.displayName = 'DescriptionField';

export default DescriptionField;
