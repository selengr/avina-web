import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

export interface IInputLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name?: string;
  hasError?: boolean;
}

const InputLabel = React.forwardRef<
  HTMLLabelElement,
  PropsWithChildren<IInputLabelProps>
>(({ className, children, name, ...props }, ref) => {
  const {
    formState: { errors },
  } = useForm();
  const hasError = !!errors[name!];

  return (
    <label
      ref={ref}
      className={cn(
        'text-primary-text text-m-body1 md:text-d-body1 pb-[6px] md:font-kalameh',
        hasError && 'text-error',
        className
      )}
      htmlFor={name}
      {...props}
    >
      {children}
    </label>
  );
});

InputLabel.displayName = 'InputLabel';

export default InputLabel;
