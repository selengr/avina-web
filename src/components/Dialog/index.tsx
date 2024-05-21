/**
 *
 * Dialog
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Dialog, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material';
import { Icons } from '../index';

interface Props {
  open: boolean;
  onClose: any;
  size?: 'lg' | 'md' | 'xs' | 'sm' | 'xl';
  fullWidth?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

export const StyledDialog = memo(({ open, onClose, size, fullWidth, children }: Props) => {
  return (
    <DialogStyle open={open} onClose={onClose} maxWidth={size} fullWidth={fullWidth}>
      <DialogTitle sx={{ p: 1 }} id='alert-dialog-title'>
        <Grid container>
          <Grid item>
            <IconButton onClick={onClose}>
              <Icons name={'Close'} />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className={'overflowY-hidden'}>{children}</DialogContent>
    </DialogStyle>
  );
});

export default { StyledDialog };
const DialogStyle = styled(Dialog)``;
