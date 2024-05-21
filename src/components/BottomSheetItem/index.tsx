/**
 *
 * BottomSheet
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { ButtonBase, Grid, Paper } from '@mui/material';
import { Icons } from 'components';
import { themes } from 'styles/theme/colors';

interface Props {
  children?: React.ReactElement | React.ReactElement[];
  onClick?: any;
  icon?: string;
  disabled?: boolean;
}

export const StyledBottomSheetItem = memo(({ children, onClick, icon, disabled }: Props) => {
  return (
    <Grid item xs={12}>
      <BottomSheetItem variant={'outlined'} sx={{ borderColor: themes.light.Typography.disable, padding: '7px' }}>
        <Grid container direction={'row'}>
          {onClick ? (
            <ButtonBase disabled={disabled} onClick={onClick} focusRipple>
              {icon && <Icons style={{ marginLeft: '8px', color: themes.light.Primary.main }} size={'mobile'} name={icon} />}
              {children}
            </ButtonBase>
          ) : (
            <>{children}</>
          )}
        </Grid>
      </BottomSheetItem>
    </Grid>
  );
});
export default { StyledBottomSheetItem };
const BottomSheetItem = styled(Paper)``;
