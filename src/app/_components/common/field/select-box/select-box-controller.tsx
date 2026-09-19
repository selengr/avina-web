'use client';

import {
  Control,
  Controller,
  FieldValues,
  get,
  Path,
  RegisterOptions,
} from 'react-hook-form';

import { SelectBox } from './select-box';
import { ISelectBoxProps } from './select-box.types';

interface ISelectBoxControllerProps<T extends FieldValues>
  extends Omit<ISelectBoxProps, 'value' | 'onChange'> {
  control: Control<T>;
  name: Path<T>;
  disabled?: boolean;
  rules?: RegisterOptions<T, Path<T>>;
  helperText?: string;
}

const SelectBoxController = <T extends FieldValues>({
  control,
  name,
  rules,
  isDisabled,
  helperText,
  placeholder,
  ...props
}: ISelectBoxControllerProps<T>) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, formState: { errors } }) => (
        <SelectBox
          {...field}
          {...props}
          value={field.value}
          isDisabled={isDisabled}
          onChange={(value: any) => field.onChange(value)}
          hasError={get(errors, name)}
          errorText={get(errors, name)?.message}
          helperText={helperText}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default SelectBoxController;
