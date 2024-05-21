import { Card, Grid } from '@mui/material';
import { Checkbox, Text } from 'components';
import { Util } from 'utils';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function Items(props) {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  return (
    <Card variant='outlined' sx={{ p: 1 }}>
      <Grid container alignItems={'center'}>
        <Grid item md={8} xs={12}>
          <Checkbox
            checked={props.checked}
            onChange={() => {
              props.checkItems(props.item);
            }}
            labelStyle={deviceType === 'mobile' ? { paddingRight: '0' } : { paddingRight: '16px' }}
            id={props.item.id}
            label={props.item.name}
            weight={'bold'}
          />
        </Grid>
        <Grid item container md={4} xs={12} alignItems={'center'} sx={deviceType === 'mobile' ? { paddingRight: '12px' } : { paddingRight: '0' }}>
          <Grid item md={6} xs={5}>
            <Text variant={fontSize}>{props.item.sex === 1 ? `${t(messages.Input_Global_Male())}` : `${t(messages.Input_Global_Female())}`}</Text>
          </Grid>
          <Grid item md={4} xs={5}>
            <Text variant={fontSize}>{`${props.item.age} ${t(messages.Input_Global_Year())}`}</Text>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
