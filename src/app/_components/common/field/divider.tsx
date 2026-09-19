import React from 'react';
import { cn } from '@/lib/utils';

interface IDividerProps {
  className?: string;
}

const Divider: React.FC<IDividerProps> = ({ className }) => {
  return <hr className={cn('text-[#DCEAEF] my-8', className)} />;
};

export default Divider;
