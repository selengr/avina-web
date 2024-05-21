import { useLocation } from 'react-router-dom';
import { adminHttp } from 'api';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Title } from 'components';
import { Go } from 'utils';
import jMoment from 'moment-jalaali';

export default function InfoOrder() {
  const location = useLocation();
  const [data, setData] = useState<any[]>([]);

  const fetchOne = async () => {
    try {
      const result = await adminHttp.showOrder(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setData(result.data.data.order_details);
    } catch (error) {
      // console.log('show one assessment error', error);
    }
  };

  useEffect(() => {
    fetchOne().then((r) => r);
  }, []);

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Title value={'اطلاعات خرید'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1} justifyContent={'end'}>
              <Grid item xs={2}>
                <Button type={'contained'} label={'بازگشت'} fullWidth={true} onClick={() => Go.Back()} />
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'}>
              {data.map((item, i) => {
                return (
                  <Grid item xs={6} key={i}>
                    <Card variant='outlined'>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item container>
                            <Grid item xs={6}>
                              id:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {item.id}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={6}>
                              order_id:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {item.order_id}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={6}>
                              assessment_id:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {item.assessment_id}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={6}>
                              unit_price:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {item.unit_price}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={6}>
                              unit_discount:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {item.unit_discount}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={6}>
                              status:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {item.status}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={6}>
                              created_at:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {jMoment(item.created_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD')}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={6}>
                              updated_at:
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                              {jMoment(item.updated_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD')}
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
