import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import { StyledIconBtn } from './IconBtn';
import { InputAdornment, OutlinedInput, OutlinedInputProps, styled } from '@mui/material';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  id?: string;
  name?: string;
  disabled?: boolean;
  onChange?: any;
  value?: any;
  sx?: any;
  onClickUp?: any;
  onClickDown?: any;
}

export const StyledStepper = memo(({ sx, value, id, name, disabled, onChange, onClickDown, onClickUp }: Props) => {
  return (
    <>
      <MyInput
        sx={sx}
        size={'small'}
        id={id}
        name={name}
        label={''}
        value={value}
        disabled={disabled}
        onChange={onChange}
        dir={'rtl'}
        inputProps={{
          style: {
            textAlign: 'center',
          },
        }}
        style={{
          fontSize: '14px',
          fontWeight: 400,
          borderRadius: '6px',
          padding: '3px',
          width: '122px',
          height: '32px',
        }}
        startAdornment={
          <InputAdornment position='end' onClick={onClickDown}>
            <StyledIconBtn icon={'Down'} disabled={value === 1} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position='start' onClick={onClickUp}>
            <StyledIconBtn icon={'Up'} />
          </InputAdornment>
        }
        fullWidth
        notched={false}
      />
    </>
  );
});

export default { StyledStepper };
const MyInput = styled((props: OutlinedInputProps) => <OutlinedInput {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-root, &.MuiInputBase-input': {
    fontSize: '14px',
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&&&:before': {
      border: 'none',
    },
    '&&:after': {
      border: 'none',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: 0,
      borderColor: theme.palette.primary.main,
    },
    '&:hover': {
      border: '0.5px solid #433792 !important',
    },
    '&.MuiOutlinedInput-input, &.MuiInputBase-input, & fieldset': {
      border: '0px solid #e2e2e1',
      '&:focus': {
        backgroundColor: '#f3f2f8 !important',
        boxShadow: `0`,
        border: '0.5px solid #433792 !important',
      },
    },
  },
}));
