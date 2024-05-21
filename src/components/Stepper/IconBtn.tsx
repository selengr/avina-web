import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components/macro';
import { Button } from '@mui/material';
import { Icons } from '../Icons';

interface Props {
  icon?: React.ReactNode;
  onClick?: any;
  disabled?: boolean;
}

export const StyledIconBtn = memo(({ icon, onClick, disabled }: Props) => {
  return (
    <IconBtn variant={'outlined'} disabled={disabled} onClick={onClick} className={'mobile'}>
      <Icons name={icon} size={'mobile'} />
    </IconBtn>
  );
});
export default { StyledIconBtn };
const IconBtn = styled(Button)`
  &.web {
    padding: 0 !important;
    border-radius: 6px !important;
    max-height: 36px !important;
    max-width: 36px !important;
    min-width: 36px !important;
  }

  &.mobile {
    padding: 0 !important;
    border-radius: 6px !important;
    max-height: 30px !important;
    max-width: 30px !important;
    min-width: 30px !important;
  }
`;
