import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import { FormControlLabel, styled } from '@mui/material';
import Switch from '@mui/material/Switch';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: any;
  onClick?: any;
  label?: any;
  id?: string;
}

const PSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export const StyledSwitch = memo(({ id, checked, disabled, onChange, onClick, label }: Props) => {
  return (
    <FormControlLabel
      id={id}
      sx={{ px: 0, mx: 0 }}
      className={'small'}
      control={
        // <Switch size={'small'} checked={checked} disabled={disabled} onChange={onChange} onClick={onClick} />
        <PSwitch sx={{ mx: 1 }} size={'small'} checked={checked} disabled={disabled} onChange={onChange} onClick={onClick} />
      }
      label={label}
    />
  );
});

export default { StyledSwitch };
