import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  customClasses?: {
    fieldsetWrapper?: string;
  }; // Additional class names to be applied to the form.
}

const Form: React.FC<IFormProps> = ({
  children,
  customClasses,
  disabled,
  className,
  ...props
}) => {
  return (
    <form
      {...props}
      className={cn(className, '')}
    >
      <fieldset
        disabled={disabled}
        className={cn(customClasses?.fieldsetWrapper, 'space-y-4 w-full')}
      >
        {children}
      </fieldset>
    </form>
  );
};

export default Form;
