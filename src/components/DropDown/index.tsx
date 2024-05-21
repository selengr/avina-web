import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
// import {Icons} from '../Icons';
import { Grid, MenuItem, OutlinedInput, Select, styled, Typography } from '@mui/material';
import { Label } from 'components';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface DropdownProps extends InputProps {
  id?: string;
  defaultValue?: string | number;
  placeholder?: string;
  onClick?: (event) => void;
  onChange?: (event) => void;
  onBlur?: (event) => void;
  label?: string;
  value?: any;
  renderValue?: any;
  labelAlign?: 'center' | 'right' | 'left';
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
  MenuProps?: any;
  errorMsg?: string;
  error?: boolean;
  children: any;
}

interface ItemsProps extends InputProps {
  id?: string;
  value: any;
  children: any;
}

export const StyledDropDown = memo(
  ({ id, defaultValue, placeholder, MenuProps, value, renderValue, errorMsg, error, onClick, onChange, onBlur, label, required, disabled, labelAlign, multiple, ...props }: DropdownProps) => {
    return (
      <>
        {label && <Label error={error} required={required} disabled={disabled} align={labelAlign} value={label} />}
        <Select
          id={id}
          error={error}
          defaultValue={defaultValue}
          displayEmpty
          required={required}
          multiple={multiple}
          size={'small'}
          value={value}
          renderValue={renderValue}
          input={
            <OutlinedInput
              required={required}
              placeholder={placeholder}
              label=' '
              size='small'
              notched={false}
              style={{ fontSize: '14px', fontWeight: 400, borderRadius: '6px', padding: '4px' }}
              sx={{ py: 0 }}
            />
          }
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          MenuProps={MenuProps}
          IconComponent={(prop) => <ExpandMoreRoundedIcon size={'small'} {...prop} />}
          fullWidth
          disabled={disabled}>
          <MenuItem disabled value=''>
            {placeholder}
          </MenuItem>
          {props.children}
        </Select>
        {error && (
          <Typography variant='caption' display='block' sx={{ position: 'absolute', color: '#e14949' }}>
            {errorMsg}
          </Typography>
        )}
      </>
    );
  },
);

export const DropdownItems = memo(({ id, value, children, ...props }: ItemsProps) => {
  return (
    <>
      <Grid container sx={{ padding: '6px' }}>
        <Item id={id} value={value}>
          <Grid item xs={12} sx={{ fontSize: '12px', width: '100%' }}>
            <div style={{ overflow: 'scroll' }}>{children}</div>
          </Grid>
        </Item>
      </Grid>
    </>
  );
});
export default { StyledDropDown, DropdownItems };

const Item = styled(MenuItem)(({ theme }) => ({}));
