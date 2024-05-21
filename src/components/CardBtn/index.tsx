import { memo } from 'react';
import { Icons, Text } from 'components';
import { Grid } from '@mui/material';
import { Util } from 'utils';

interface Props {
  id?: string;
  value: string;
  icon?: string;
  onClick?: any;
}

export const CardBtn = memo(({ id, value, icon, onClick }: Props) => {
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  return (
    <Grid justifyContent={'center'} container style={{ cursor: 'pointer' }} onClick={onClick}>
      <Grid
        item
        sx={
          deviceType === 'mobile'
            ? { lineHeight: '3.6', color: '#31b7ae' }
            : {
                lineHeight: '2.4',
                color: '#31b7ae',
              }
        }>
        <Text variant={fontSize} id={id}>
          {value}
        </Text>
      </Grid>
      {icon ? (
        <Grid item sx={{ color: '#31b7ae' }}>
          <Icons name={icon} />
        </Grid>
      ) : null}
    </Grid>
  );
});
