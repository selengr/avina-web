import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { HelperText } from '../helper-text';
import { TTextareaProps } from './textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TTextareaProps>(
  ({ hasError = false, className, errorText, ...rest }, ref) => {
    return (
      <div className="textarea-wrapper">
        {/* Textarea Element */}
        <textarea
          ref={ref}
          className={cn(
            'textarea',
            {
              'textarea-error': hasError, // حالت ارور
            },
            className
          )}
          {...rest}
        />

        {/* Helper Text */}
        {hasError && (
          <HelperText
            text={errorText!}
            status={hasError ? 'error' : 'active'}
          />
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
