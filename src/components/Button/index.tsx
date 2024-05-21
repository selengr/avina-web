import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components/macro';
import { Button } from '@mui/material';
import { Text } from 'components';
import { Util } from 'utils';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  label?: any | undefined;
  type: 'contained' | 'outlined';
  mode?: 'submit' | 'button';
  icon?: any;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: any;
  color?: 'primary' | 'secondary';
  sx?: any;
}

export const StyledButton = memo(({ sx, label, mode, type, icon, disabled, onClick, fullWidth, color }: Props) => {
  const fontSize = Util.DefaultFontSize();
  return (
    <ButtonStyle sx={sx} type={mode ? mode : 'button'} color={color} variant={type} disabled={disabled} fullWidth={fullWidth} onClick={onClick} disableElevation>
      <>
        {icon}
        <Text variant={fontSize} weight={'regular'}>
          {label}
        </Text>
      </>
    </ButtonStyle>
  );
});
export default { StyledButton };

const ButtonStyle = styled(Button)`
  border-radius: 6px !important;
  height: 40px;
`;
