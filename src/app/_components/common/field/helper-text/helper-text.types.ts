export type THelperTextProps = {
  status?: 'active' | 'error' | 'success'; // وضعیت
  isDisabled?: boolean; // غیرفعال بودن
  text: string; // متن
  showIcon?: boolean; // نمایش آیکون
  customClassName?: string; // کلاس سفارشی برای متن
};
