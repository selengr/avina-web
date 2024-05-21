import { Card, CardContent, Grid } from '@mui/material';
import { Divide, IconButton, Stepper, Text } from 'components';
import { Util } from 'utils';
import { useState } from 'react';
import { toInteger } from 'lodash';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function CartItem(props) {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const [quantity, setQuantity] = useState<number>(props.item.count);
  return (
    <Card variant={'outlined'}>
      <CardContent sx={{ pb: '16px !important' }}>
        <Grid container spacing={deviceType === 'web' ? 0 : 1} alignItems={'center'} justifyContent={'space-around'}>
          <Grid item container xs={12} md={6}>
            <Grid item xs={1} sx={deviceType === 'mobile' ? { marginLeft: '-5px' } : { marginLeft: '-10px' }}>
              <Text variant={deviceType === 'web' ? 'web16' : 'mobile10'} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                {`${props.index + 1} - `}
              </Text>
            </Grid>
            <Grid item xs={8}>
              <Text variant={deviceType === 'web' ? 'web16' : 'mobile10'} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                {props.item.assessment.name}
              </Text>
            </Grid>
          </Grid>
          {deviceType === 'mobile' && (
            <Grid item xs={12}>
              <Divide />
            </Grid>
          )}
          <Grid item container xs={12} md={6} alignItems={'center'} sx={{ justifyContent: 'space-between' }}>
            <Grid item md={4} xs={6} sx={deviceType === 'mobile' ? { order: 1 } : { justifyContent: 'center', display: 'flex' }}>
              <Stepper
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  props.change(e.target.value, props.item.id);
                }}
                onClickDown={() => {
                  quantity > 1 && setQuantity(quantity - 1);
                  props.change(quantity - 1, props.item.id);
                }}
                onClickUp={() => {
                  setQuantity(toInteger(quantity) + 1);
                  props.change(quantity + 1, props.item.id);
                }}
              />
            </Grid>
            <Grid
              item
              container
              md={4}
              xs={12}
              sx={deviceType === 'mobile' ? { paddingRight: 1, marginTop: '18px', textAlign: 'right', order: 3, justifyContent: 'space-between', alignItems: 'center' } : { justifyContent: 'center' }}>
              <Grid item>
                <Text variant={fontSize} style={deviceType === 'mobile' ? { display: 'inline-block' } : { display: 'none' }}>
                  {'قیمت واحد'}
                </Text>
              </Grid>
              <Grid item>
                <Text variant={fontSize}>
                  {props.item.unit_price} {t(messages.Text_Global_Cost())}
                </Text>
              </Grid>
            </Grid>
            <Grid item md={4} xs={6} sx={deviceType === 'mobile' ? { textAlign: 'end', order: 2 } : { display: 'flex', justifyContent: 'center', paddingRight: 3 }}>
              <IconButton size={deviceType === 'web' ? 'web' : 'mobile'} type={'outlined'} icon={'Trash'} onClick={() => props.cancelOrder(props.item.id)} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
