import { cn } from '@/lib/utils';

interface IFormFieldProps {
  className?: string;
  children: React.ReactNode;
}

const InputGroup: React.FC<IFormFieldProps> = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

export default InputGroup;
