import styled from 'styled-components/macro';
import { ButtonBase, FormControlLabel, Radio } from '@mui/material';
import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import { Text } from 'components';
import { Util } from 'utils';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const colors: [`primary`, `secondary`];

interface Props extends InputProps {
  id?: any;
  label?: any;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: any;
  onClick?: any;
  value?: any;
  color?: (typeof colors)[number];
}

export const StyledRadio = memo(({ id, value, label, checked, disabled, onChange, onClick, color }: Props) => {
  const fontSize = Util.DefaultFontSize();

  return (
    <FormControl
      id={id}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      onClick={onClick}
      value={value}
      control={<Radio color={color} disableRipple />}
      label={
        <ButtonBase disableRipple disableTouchRipple focusRipple>
          <Text variant={fontSize} weight={'regular'}>
            {label}
          </Text>
        </ButtonBase>
      }
    />
  );
});
export default { StyledRadio };

const FormControl = styled(FormControlLabel)(() => ({
  '&.MuiFormControlLabel-root': {
    marginRight: 0,
  },
}));
