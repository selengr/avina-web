import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components/macro';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Text } from 'components';
import { Util } from 'utils';
import { themes } from 'styles/theme/colors';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

declare const weights: ['black' | 'bold' | 'medium' | 'regular'];

interface Props extends InputProps {
  id?: any;
  label?: string | undefined;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: any;
  labelStyle?: any;
  weight?: (typeof weights)[number];
}

export const StyledCheckbox = memo(({ id, checked, label, onChange, disabled, indeterminate, labelStyle, weight }: Props) => {
  const fontSize = Util.DefaultFontSize();
  const deviceType = Util.ScreenSize();
  return (
    <FormControl
      className={'small'}
      control={
        <Checkbox
          indeterminate={indeterminate}
          icon={deviceType === 'mobile' ? <IconSM /> : <Icon />}
          checkedIcon={deviceType === 'mobile' ? <IconCheckedSM /> : <IconChecked />}
          indeterminateIcon={deviceType === 'mobile' ? <IconIndeterminateSM /> : <IconIndeterminate />}
          checked={checked}
          id={id}
          onChange={onChange}
          disabled={disabled}
        />
      }
      label={
        <Text style={labelStyle} variant={fontSize} weight={weight}>
          {label}
        </Text>
      }
    />
  );
});

export default { StyledCheckbox };

const FormControl = styled(FormControlLabel)`
  margin: 0 !important;
`;

const Icon = styled('span')(({ theme }) => ({
  borderRadius: 6,
  width: 22,
  height: 22,
  borderColor: '#000',
  borderStyle: 'solid',
  borderWidth: 1,
  'input:disabled ~ &': {
    borderColor: themes.light.Primary.disabled,
  },
  'input:hover ~ &': {
    borderColor: themes.light.Primary.hover,
  },
}));

const IconChecked = styled(Icon)({
  backgroundColor: themes.light.Primary.main,
  border: 'none',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    borderRadius: 6,
    width: 22,
    height: 22,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z" +
      "' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: themes.light.Primary.hover,
  },
  'input:focus ~ &': {
    backgroundColor: themes.light.Primary.focused,
  },
  'input:disabled ~ &': {
    background: themes.light.Primary.disabled,
  },
});

const IconIndeterminate = styled(Icon)({
  backgroundColor: themes.light.Primary.main,
  border: 'none',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    borderRadius: 6,
    width: 22,
    height: 22,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z" +
      "' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: themes.light.Primary.hover,
  },
  'input:focused ~ &': {
    backgroundColor: themes.light.Primary.focused,
  },
  'input:disabled ~ &': {
    background: themes.light.Primary.disabled,
  },
});

const IconSM = styled('span')(({ theme }) => ({
  borderRadius: 4,
  width: 16,
  height: 16,
  borderColor: '#000',
  borderStyle: 'solid',
  borderWidth: 1,
  'input:disabled ~ &': {
    borderColor: themes.light.Primary.disabled,
  },
  'input:hover ~ &': {
    borderColor: themes.light.Primary.hover,
  },
}));

const IconCheckedSM = styled(IconSM)({
  backgroundColor: themes.light.Primary.main,
  border: 'none',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    borderRadius: 4,
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z" +
      "' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: themes.light.Primary.hover,
  },
  'input:focus ~ &': {
    backgroundColor: themes.light.Primary.focused,
  },
  'input:disabled ~ &': {
    background: themes.light.Primary.disabled,
  },
});

const IconIndeterminateSM = styled(IconSM)({
  backgroundColor: themes.light.Primary.main,
  border: 'none',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    borderRadius: 4,
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z" +
      "' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: themes.light.Primary.hover,
  },
  'input:focused ~ &': {
    backgroundColor: themes.light.Primary.focused,
  },
  'input:disabled ~ &': {
    background: themes.light.Primary.disabled,
  },
});
