import { TErrorBehaviour } from '@/types';

import { TTextboxProps } from '../textbox/textbox.types';

export type TInputProps = Omit<
  TTextboxProps,
  'prefix' | 'suffix' | 'addonBefore' | 'addonAfter'
> &
  TErrorBehaviour & {
    prefix?: React.ReactNode; // محتوای سمت چپ داخل اینپوت
    suffix?: React.ReactNode; // محتوای سمت راست داخل اینپوت
    addonBefore?: React.ReactNode; // محتوای قبل از اینپوت
    addonAfter?: React.ReactNode; // محتوای بعد از اینپوت
    direction?: 'ltr' | 'rtl';
    helperText?: string;
    containerClassName?: string;
    inputClassName?: string;
  };
