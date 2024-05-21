import { Card, CardContent, Grid } from '@mui/material';
import { Divide, Text } from 'components';
import { Util } from 'utils';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function CartItem(props) {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();

  return (
    <Card variant={'outlined'}>
      <CardContent sx={{ pb: '16px !important' }}>
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item container xs={12} md={6}>
            <Grid item xs={1}>
              <Text variant={deviceType === 'web' ? 'web16' : 'mobile10'} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                {`${props.index + 1} - `}
              </Text>
            </Grid>
            <Grid item xs={11}>
              <Text variant={deviceType === 'web' ? 'web16' : 'mobile10'} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                {props.item.assessment.name}
              </Text>
            </Grid>
          </Grid>
          {deviceType === 'mobile' && (
            <Grid item xs={12} sx={deviceType === 'mobile' ? { mb: '18.5px', mt: '9.5px' } : {}}>
              <Divide />
            </Grid>
          )}
          <Grid item container xs={12} md={6} sx={deviceType === 'mobile' ? { display: 'flex', flexDirection: 'column' } : {}} spacing={deviceType === 'web' ? 0 : 2}>
            <Grid item xs={deviceType === 'mobile' ? 12 : 4} sx={deviceType === 'mobile' ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } : {}}>
              {deviceType === 'mobile' && (
                <Grid item>
                  <Text variant={fontSize}>{'تعداد'}</Text>
                </Grid>
              )}
              <Grid item sx={deviceType === 'web' ? { display: 'flex', justifyContent: 'center' } : {}}>
                <Text variant={fontSize}>
                  {props.item.count} {` ${t(messages.Text_ShoppingList_Number())}`}
                </Text>
              </Grid>
            </Grid>
            <Grid item xs={deviceType === 'mobile' ? 12 : 4} sx={deviceType === 'mobile' ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } : {}}>
              {deviceType === 'mobile' && (
                <Grid item>
                  <Text variant={fontSize}>{'قیمت واحد'}</Text>
                </Grid>
              )}
              <Grid item sx={deviceType === 'web' ? { display: 'flex', justifyContent: 'center' } : {}}>
                <Text variant={fontSize}>
                  {props.item.unit_price}
                  {` ${t(messages.Text_Global_Cost())}`}
                </Text>
              </Grid>
            </Grid>
            <Grid item xs={deviceType === 'mobile' ? 12 : 4} sx={deviceType === 'mobile' ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } : {}}>
              {deviceType === 'mobile' && (
                <Grid item>
                  <Text variant={fontSize}>{'قیمت کل'}</Text>
                </Grid>
              )}
              <Grid item sx={deviceType === 'web' ? { display: 'flex', justifyContent: 'center', paddingRight: 3 } : {}}>
                <Text variant={fontSize}>
                  {props.item.unit_price * props.item.count} {` ${t(messages.Text_Global_Cost())}`}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
