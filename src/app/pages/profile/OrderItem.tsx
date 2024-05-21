import { Card, CardContent, Grid } from '@mui/material';
import { Divide, Icons, Text } from 'components';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { Util } from 'utils';

export default function OrderItem(props) {
  const { id, updated_at, order_details, to_pay } = props.item;
  const { t } = useTranslation();
  const date = updated_at.split(' ');
  const deviceType = Util.ScreenSize();

  return (
    <>
      {order_details.map((item, i) => {
        return (
          <Card key={i} variant={'outlined'}>
            <CardContent sx={{ paddingBottom: '16px !important' }}>
              {deviceType === 'web' ? (
                <Grid container alignItems={'center'}>
                  <Grid item container xs={5}>
                    <Grid item md={1} alignSelf={'center'}>
                      <Text variant={'web16'} weight={'bold'}>
                        {props.index + 1}
                      </Text>
                    </Grid>
                    <Grid item container xs={11} spacing={2} direction={'column'}>
                      <Grid item>
                        <Text variant={'web16'} weight={'bold'}>
                          {item.assessment_name}
                        </Text>
                      </Grid>
                      <Grid item container sx={{ color: '#6a6a6a' }}>
                        <Grid item container alignItems={'center'} xs={6}>
                          <Grid item>
                            <Icons name={'Calendar'} />
                          </Grid>
                          <Grid item>
                            <Text variant={'web14'} weight={'regular'}>
                              {date[0]}
                            </Text>
                          </Grid>
                        </Grid>
                        <Grid item container alignItems={'center'} xs={6}>
                          <Grid item>
                            <Icons name={'Clock'} />
                          </Grid>
                          <Grid item>
                            <Text variant={'web14'} weight={'regular'}>
                              {date[1]}
                            </Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item container md={7}>
                    <Grid item md={3}>
                      <Text variant={'web14'}>{id}</Text>
                    </Grid>
                    <Grid item md={3} sx={{ textAlign: 'center' }}>
                      <Text variant={'web14'}>
                        {item.unit_price} {t(messages.Text_Global_Cost())}
                      </Text>
                    </Grid>
                    <Grid item md={3} sx={{ textAlign: 'center' }}>
                      <Text variant={'web14'}>{item.count}</Text>
                    </Grid>
                    <Grid item md={3} sx={{ textAlign: 'left' }}>
                      <Text variant={'web14'}>
                        {to_pay} {t(messages.Text_Global_Cost())}
                      </Text>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={1}>
                  <Grid item container>
                    <Grid item xs={1}>
                      <Text variant={'mobile10'} weight={'medium'}>
                        {props.index + 1}.
                      </Text>
                    </Grid>
                    <Grid item xs={11}>
                      <Text variant={'mobile10'} weight={'medium'}>
                        {item.assessment_name}
                      </Text>
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item container alignItems={'center'} xs={6} md={4}>
                      <Grid item>
                        <Icons name={'Calendar'} />
                      </Grid>
                      <Grid item>
                        <Text variant={'web14'}>{date[0]}</Text>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems={'center'} xs={6}>
                      <Grid item>
                        <Icons name={'Clock'} />
                      </Grid>
                      <Grid item>
                        <Text variant={'web14'}>{date[1]}</Text>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Divide />
                  </Grid>
                  <Grid item container justifyContent={'space-between'}>
                    <Grid item>
                      <Text variant={'mobile10'} weight={'regular'}>
                        {t(messages.Input_Global_PurchaseID())}
                        {id}
                      </Text>
                    </Grid>
                    <Grid item>
                      <Text variant={'mobile10'} weight={'regular'}>
                        {t(messages.Input_Global_Count())}
                        {item.count}
                      </Text>
                    </Grid>
                  </Grid>
                  <Grid item container justifyContent={'space-between'}>
                    <Grid item>
                      <Text variant={'mobile10'} weight={'regular'}>
                        {t(messages.Input_Global_UnitPrice())}
                      </Text>
                    </Grid>
                    <Grid item>
                      <Text variant={'mobile10'} weight={'bold'}>
                        {item.unit_price} {t(messages.Text_Global_Cost())}
                      </Text>
                    </Grid>
                  </Grid>
                  <Grid item container justifyContent={'space-between'}>
                    <Grid item>
                      <Text variant={'mobile10'} weight={'regular'}>
                        {t(messages.Input_Global_Paid())}
                      </Text>
                    </Grid>
                    <Grid item>
                      <Text variant={'mobile10'} weight={'bold'}>
                        {to_pay} {t(messages.Text_Global_Cost())}
                      </Text>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
