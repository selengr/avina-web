import { GroupBase, StylesConfig, Props as SelectProps } from 'react-select';

export interface ISelectBoxProps extends SelectProps<IOption> {
  label?: string;
  className?: string; // کلاس‌های اضافی
  customStyles?: StylesConfig<IOption, boolean, GroupBase<IOption>>; // استایل‌های کاستوم
  components?: SelectProps<IOption>['components']; // کامپوننت‌های داخلی
  helperText?: string;
}

// تعریف گزینه‌ها
export interface IOption {
  value: string | number;
  label: string;
}
