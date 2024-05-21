import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components/macro';
import { Button } from '@mui/material';
import { Icons } from 'components';

interface Props {
  type: 'contained' | 'outlined';
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  size?: 'mobile' | 'web';
}

export const StyledIconButton = memo(({ type, icon, disabled, onClick, size }: Props) => {
  return (
    <IconBtn variant={type} disabled={disabled} onClick={onClick} className={size ? 'mobile' : 'web'}>
      <Icons name={icon} size={size} />
    </IconBtn>
  );
});
export default { StyledIconButton };
const IconBtn = styled(Button)`
  &.web {
    padding: 0 !important;
    border-radius: 6px !important;
    min-height: 44px !important;
    max-height: 44px !important;
    max-width: 44px !important;
    min-width: 44px !important;
  }

  &.mobile {
    padding: 0 !important;
    border-radius: 6px !important;
    min-height: 36px !important;
    max-height: 36px !important;
    max-width: 36px !important;
    min-width: 36px !important;
  }
`;
