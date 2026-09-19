import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

import { TTextboxProps } from './textbox.types';

const Textbox = forwardRef<HTMLInputElement, TTextboxProps>(
  ({ type = 'text', className, ...rest }, ref) => {
    const classes = cn(className);
    return (
      <input
        ref={ref}
        type={type}
        className={classes}
        {...rest}
      />
    );
  }
);

Textbox.displayName = 'Textbox';
export default Textbox;
