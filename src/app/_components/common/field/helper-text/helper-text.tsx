import { cn } from '@/lib/utils';
import { THelperTextProps } from './helper-text.types';
import {
  IconInfo,
  IconTriangleAlert,
  IconCheck,
} from '@/app/_components/icons/icons';

export const HelperText: React.FC<THelperTextProps> = ({
  status = 'active',
  isDisabled = false,
  text,
  showIcon = false, // نمایش آیکون به صورت اختیاری، پیش‌فرض: false
  customClassName, // کلاس سفارشی برای متن
}) => {
  const icon = isDisabled ? (
    <IconInfo
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fillRule="evenodd"
      clip-rule="evenodd"
      className="fill-disabled stroke-none"
    />
  ) : status === 'active' ? (
    <IconInfo
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fillRule="evenodd"
      clip-rule="evenodd"
      className="fill-secondary-text stroke-none"
    />
  ) : status === 'error' ? (
    <IconTriangleAlert
      fillRule="evenodd"
      clip-rule="evenodd"
      width="16"
      height="13"
      viewBox="0 0 16 13"
      className="fill-error stroke-none"
    />
  ) : (
    <IconCheck
      width="12"
      height="9"
      viewBox="0 0 12 9"
      className="fill-success stroke-none"
    />
  );

  const textClass = cn(
    'helper-text',
    {
      'text-secondary-text': status === 'active' && !isDisabled,
      'text-error': status === 'error' && !isDisabled,
      'text-success': status === 'success' && !isDisabled,
      'text-disabled': isDisabled,
    },
    customClassName // اضافه کردن کلاس سفارشی
  );

  return (
    <div className={textClass}>
      {showIcon && icon} {/* نمایش آیکون فقط اگر `showIcon` true باشد */}
      <span
        datatype={`${status === 'error' ? 'cy-error-text' : 'cy-info-text'}`}
      >
        {text}
      </span>
    </div>
  );
};
