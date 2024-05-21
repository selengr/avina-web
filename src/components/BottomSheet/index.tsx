import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Drawer, Grid } from '@mui/material';

interface Props {
  open: boolean;
  // children?: React.ReactElement | React.ReactElement[];
  children?: any;
  onClose: any;
}

export const StyledBottomSheet = memo(({ children, open, onClose }: Props) => {
  return (
    <BottomSheet
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          // maxHeight: '75vh',
          boxSizing: 'border-box',
          borderRadius: '12px 12px 0 0',
          overflowY: 'scroll',
          paddingBottom: '13px',
        },
      }}
      anchor={'bottom'}
      open={open}
      onClose={onClose}>
      <Grid container spacing={2} flexDirection={'row'} sx={{ mt: '13px', px: '16px' }} justifyContent={'center'}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </BottomSheet>
  );
});
export default { StyledBottomSheet };
const BottomSheet = styled(Drawer)``;
