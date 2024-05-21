import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import VerificationInput from 'react-verification-input';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  onChange?: any;
  value?: any;
}

export const OTP = memo(({ onChange, value }: Props) => {
  return (
    <VerificationInput
      validChars={'0-9'}
      placeholder={''}
      inputProps={{ inputMode: 'numeric', autoComplete: 'one-time-code' }}
      value={value}
      onChange={onChange}
      autoFocus={true}
      classNames={{
        container: 'TFContainer',
        character: 'character',
        characterInactive: 'character--inactive',
        characterSelected: 'character--selected',
      }}
    />
  );
});
