import { useState } from 'react';
import { Icons, MobileDrawer, WebDrawer } from 'components';
import { Grid, IconButton } from '@mui/material';
import { Util } from 'utils';

export function ContainerPage(Props) {
  const deviceType = Util.ScreenSize();

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
   
        <Grid container>
          <Grid item>
            <WebDrawer scopeName={Props.userName} role={Props.role} roleData={Props.roleData} roleId={Props.roleId} roleType={Props.roleType} open />
          </Grid>
        </Grid>
   
    </>
  );
}
