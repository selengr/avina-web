import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import { Paper, styled, ToggleButtonGroup } from '@mui/material';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Props extends InputProps {
  value: string;
  disabled?: boolean;
  onChange?: any;
  children?: any;
}

export const StyledTab = memo(({ onChange, value, disabled, children, ...props }: Props) => {
  return (
    <Paper
      elevation={0}
      variant='outlined'
      sx={{
        borderColor: '#433792',
        borderRadius: '6px',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      <StyledToggleButtonGroup onChange={onChange} value={value} exclusive disabled={disabled} fullWidth size='small' color={'primary'}>
        {children}
      </StyledToggleButtonGroup>
    </Paper>
  );
});

export default { StyledTab };

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: 0,
    border: 0,
    transition: 'all 300ms',
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(.Mui-selected)': {
      background: 'transparent',
      color: '#39317a',
    },
    '&.Mui-selected': {
      background: '#433792',
      color: '#fff',
    },
    '&:not(:first-of-type)': {
      borderRadius: '0px',
    },
    '&:first-of-type': {
      borderRadius: '0px',
    },
    '&:disabled': {
      borderRadius: '0px',
      color: theme.palette.text.disabled,
    },
    '&:hover': {
      background: '#6359a3',
      color: '#fff',
    },
    '&.Mui-selected:hover': {
      background: '#f4f3f8',
      color: '#433792',
    },
  },
}));
