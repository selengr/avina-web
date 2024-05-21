import { Card, Grid } from '@mui/material';
import { Text } from 'components';
import { Util } from 'utils';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function Items(props) {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  return (
    <Card variant='outlined' sx={{ py: 2, px: 1 }}>
      <Grid container alignItems={'center'}>
        <Grid item md={8} xs={12}>
          <Text variant={fontSize} weight={'bold'}>
            {props.item.name}
          </Text>
        </Grid>
        <Grid item container md={4} xs={12} alignItems={'center'} sx={deviceType === 'mobile' ? { paddingRight: '12px' } : { paddingRight: '0' }}>
          <Grid item md={6} xs={6}>
            <Text variant={fontSize}>{props.item.sex === 1 ? `${t(messages.Input_Global_Male())}` : `${t(messages.Input_Global_Female())}`}</Text>
          </Grid>
          <Grid item container md={4} xs={5} justifyContent={'left'}>
            <Text variant={fontSize}>{`${props.item.age} ${t(messages.Input_Global_Year())}`}</Text>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
