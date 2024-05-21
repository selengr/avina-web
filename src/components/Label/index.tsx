import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components/macro';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  align?: 'center' | 'right' | 'left';
  required?: boolean;
  error?: boolean;
}

export const StyledLabel = memo(({ error, required, align, value, disabled }: Props) => {
  return (
    <Label
      style={
        (disabled ? { color: '#cdcdcd' } : { color: '#353535' }) &&
        (error
          ? {
              color: '#e14949',
              fontSize: '12px',
              padding: 0,
            }
          : { color: 'black', fontSize: '12px' })
      }
      aria-disabled={disabled}
      className={align}>
      {required ? '*' + value : value}
    </Label>
  );
});
export default { StyledLabel };
const Label = styled.p`
  text-align: ${(props) => props.className};
  margin-bottom: 0 !important;
  font-size: 14px;
  color: #353535;
  padding: 5px 2px;
`;
