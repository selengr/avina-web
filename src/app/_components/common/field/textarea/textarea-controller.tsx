import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

import { Textarea } from './textarea';
import { TTextareaProps } from './textarea.types';

interface ITextareaControllerProps<T extends FieldValues>
  extends Omit<TTextareaProps, 'value' | 'onChange'> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
}

const TextareaController = <T extends FieldValues>({
  name,
  rules,
  rows,
  control,
  ...textareaProps
}: ITextareaControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Textarea
          {...field}
          {...textareaProps}
          hasError={!!error}
          rows={rows}
          errorText={error?.message}
        />
      )}
    />
  );
};

export default TextareaController;
