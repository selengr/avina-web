import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import { Icons, Label } from 'components';
import { IconButton, InputAdornment, OutlinedInput, OutlinedInputProps, styled, Typography } from '@mui/material';
import { useToggle } from 'ahooks';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  id?: string;
  name?: string;
  type: string;
  focusActive?: boolean;
  labelAlign?: 'center' | 'right' | 'left';
  rows?: number;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  icon?: string | null | undefined;
  required?: boolean;
  multiline?: boolean;
  onChange?: (event) => void;
  onBlur?: (event) => void;
  onClick?: (event) => void;
  errorMsg?: string;
  error?: boolean;
  helper?: string;
  value?: string | number;
  sx?: any;
  length?: number;
}

export const StyledInputs = memo(
  ({
    errorMsg,
    error,
    sx,
    value,
    id,
    name,
    focusActive,
    type,
    required,
    labelAlign,
    rows,
    label,
    placeholder,
    disabled,
    icon,
    onChange,
    onClick,
    onBlur,
    multiline,
    readOnly,
    length,
    helper,
  }: Props) => {
    const initialedType: string = type;
    const [togglePassword, { toggle }] = useToggle('password', 'text');
    return (
      <>
        {label && <Label error={error} required={required} disabled={disabled} align={labelAlign} value={label} />}
        <MyInput
          id={id}
          autoComplete={process.env.NODE_ENV === 'production' ? 'off' : 'on'}
          size={'small'}
          error={error}
          name={name}
          label={''}
          type={initialedType === 'password' ? togglePassword : initialedType}
          value={value}
          placeholder={type === 'tel' ? '00 00 000 0900' : placeholder}
          disabled={disabled}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          autoFocus={focusActive}
          dir={'rtl'}
          multiline={multiline}
          rows={rows}
          inputProps={{
            style: {
              padding: '12px',
              // textAlign: `${type !== 'text' ? (type === 'password' ? 'center' : 'left') : 'right'}`,
              textAlign: `${type === 'text' ? 'right' : type === 'password' ? 'center' : 'right'}`,
              letterSpacing: `${type === 'password' ? '4px' : 'inherit'}`,
            },
            maxLength: length ? length : 512,
          }}
          style={{ fontSize: '14px', fontWeight: 400, borderRadius: '6px' }}
          sx={sx}
          startAdornment={
            icon &&
            initialedType !== 'password' && (
              <InputAdornment position='start'>
                <Icons name={icon} />
              </InputAdornment>
            )
          }
          endAdornment={
            initialedType === 'password' && (
              <InputAdornment position='start'>
                <IconButton onClick={toggle} size='small' edge={'end'}>
                  {initialedType === 'password' && togglePassword === 'password' ? <Icons name={'Eye-Open'} /> : <Icons name={'Eye-Close'} />}
                </IconButton>
              </InputAdornment>
            )
          }
          fullWidth
          notched={false}
          readOnly={readOnly}
        />
        {!error && helper && (
          <Typography variant='caption' display='block' sx={{ position: 'absolute', color: '#bababa' }} gutterBottom>
            {helper}
          </Typography>
        )}
        {error && (
          <Typography variant='caption' display='block' sx={{ position: 'absolute', color: '#e14949' }} gutterBottom>
            {errorMsg}
          </Typography>
        )}
      </>
    );
  },
);

export default { StyledInputs };
const MyInput = styled((props: OutlinedInputProps) => <OutlinedInput {...props} />)(({ theme }) => ({
  '& label': {
    display: 'none',
  },
  '& textarea': {
    paddingTop: '3px',
  },
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
