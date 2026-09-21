import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import Textbox from '../textbox/textbox';
import { TInputProps } from './input.types';
import { HelperText } from '../helper-text';
import { IconAlert } from '@/app/_components/icons/icons';

export const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      prefix,
      suffix,
      addonBefore,
      addonAfter,
      className,
      disabled,
      hasError = false,
      helperText = '',
      direction = 'rtl',
      errorText,
      containerClassName,
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <div
          dir={direction}
          className={cn(
            'clip-rule',
            {
              'input-disabled': disabled,
              'rtl-direction': direction === 'rtl',
              'ltr-direction': direction === 'ltr',
              'border-error': hasError,
              'border-gray-400': !hasError,
            },
            className
          )}
        >
          {/* addonBefore */}
          {addonBefore && (
            <div
              className={cn(
                'input-addon-before',
                direction === 'ltr'
                  ? 'rounded-r-none border-r-0'
                  : 'rounded-l-none border-l-0'
              )}
            >
              {addonBefore}
            </div>
          )}

          {/* Input Container */}
          <div
            className={cn(
              'input-main',
              {
                'focus-within:border-info-darker focus-within:shadow-input-focused':
                  !hasError,
                'focus-within:border-error-light focus-within:shadow-input-focused-error':
                  hasError,
                'no-radius-left':
                  (addonBefore && direction === 'ltr') ||
                  (addonAfter && direction === 'rtl'),
                'no-radius-right':
                  (addonBefore && direction === 'rtl') ||
                  (addonAfter && direction === 'ltr'),
              },
              containerClassName
            )}
          >
            {prefix && <div className="input-prefix ml-3">{prefix}</div>}

            <Textbox
              ref={ref}
              className={cn(
                'input-textbox px-3 py-2.5',
                {
                  'input-disabled': disabled,
                },
                inputClassName
              )}
              disabled={disabled}
              {...rest}
            />

            {/* Error Icon */}
            {hasError && (
              <IconAlert
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="fill-none stroke-error ml-2 mr-2"
              />
            )}

            {suffix && <div className="input-suffix">{suffix}</div>}
          </div>

          {/* addonAfter */}
          {addonAfter && (
            <div
              dir={direction}
              className={cn(
                'input-addon-after',
                direction === 'ltr'
                  ? 'rounded-l-none border-l-0'
                  : 'rounded-r-none border-r-0'
              )}
            >
              {addonAfter}
            </div>
          )}
        </div>

        {hasError && (
          <HelperText
            status={'error'}
            text={errorText!}
          />
        )}
        {helperText && (
          <HelperText
            status={'active'}
            text={helperText}
          />
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
