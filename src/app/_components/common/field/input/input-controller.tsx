import {
  Control,
  Path,
  Controller,
  FieldValues,
  RegisterOptions,
  get,
} from 'react-hook-form';

import { Input } from './input';
import { TInputProps } from './input.types';

interface IInputControllerProps<T extends FieldValues>
  extends Omit<TInputProps, 'value' | 'onChange'> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
}

const InputController = <T extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: IInputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, formState: { errors } }) => (
        <Input
          {...field}
          {...props}
          disabled={props?.disabled}
          hasError={get(errors, name)}
          errorText={get(errors, name)?.message}
          value={field.value}
          onChange={(value) => field.onChange(value)}
        />
      )}
    />
  );
};

export default InputController;
