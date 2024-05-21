/**
 *
 * BottomSheetDialog
 *
 */
import React, { memo } from 'react';
import { BottomSheet, Dialog } from 'components/index';
import { Util } from 'utils';

declare const sizes: ['lg', 'md', 'xs', 'sm', 'xl'];

interface Props {
  open: boolean;
  onClose: any;
  size?: (typeof sizes)[number];
  fullWidth?: boolean;
  children?: React.ReactElement | React.ReactElement[];
}

export const BottomSheetDialog = memo(({ children, open, onClose, fullWidth, size }: Props) => {
  const deviceType = Util.ScreenSize();
  return (
    <>
      {deviceType === 'mobile' ? (
        <BottomSheet open={open} onClose={onClose}>
          {children}
        </BottomSheet>
      ) : (
        <Dialog size={size} fullWidth={fullWidth} open={open} onClose={onClose}>
          {children}
        </Dialog>
      )}
    </>
  );
});
