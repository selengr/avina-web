import { adminHttp } from 'api';
import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Divider, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Input, Title } from 'components';
import { useDebounceFn } from 'ahooks';
import { Util } from 'utils';
import { ChevronLeftRounded, ChevronRightRounded, ExpandMore } from '@mui/icons-material';
import jMoment from 'moment-jalaali';

export default function LoginActivities() {
  const deviceType = Util.ScreenSize();
  const [info, setInfo] = useState<any[]>([]);
  const [data, setData] = useState<any>({ name: '', phone: '', pageNumber: '' });
  const [totalPage, setTotalPages] = useState(1);

  const handleLogins = async () => {
    try {
      const result = await adminHttp.loginActivities({
        phone: data.name,
        user_name: data.phone,
        page: data.pageNumber,
        per_page: 30,
      });
      setInfo(result.data.data.data);
      setTotalPages(result.data.data.last_page);
    } catch (error) {
      // console.log('error', error);
    }
  };

  useEffect(() => {
    handleLogins().then((r) => r);
  }, []);

  const { run } = useDebounceFn(
    () => {
      handleLogins().then((r) => r);
    },
    {
      wait: 2000,
    },
  );

  useEffect(() => {
    run();
  }, [data]);

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={'login activities'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1} direction={deviceType === 'mobile' ? 'row-reverse' : 'row'}>
              <Grid item xs={12} md={6}>
                <Input placeholder={'نام شرکت کننده موردنظر خود را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ name: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input placeholder={'تلفن شرکت کننده موردنظر خود را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ phone: e.target.value })} />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent>
                    <Grid container>
                      <Paper sx={{ height: 'calc(93vh - 170px)', overflow: 'auto', width: '100%', mt: 2, px: 1 }} elevation={0}>
                        <Grid item container spacing={1} sx={{ width: '100%' }}>
                          {info.map((item, i) => {
                            return (
                              <Grid key={i} item xs={12}>
                                <Accordion>
                                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
                                    <Grid container justifyContent={'space-between'}>
                                      <Grid item sx={{ width: '20%' }}>
                                        {item.id}
                                      </Grid>
                                      <Divider orientation='horizontal' flexItem light />
                                      <Grid item sx={{ width: '40%' }}>
                                        {item.user_name}
                                      </Grid>
                                      <Divider orientation='horizontal' flexItem light />
                                      <Grid item sx={{ width: '40%' }}>
                                        {item.created_at}
                                      </Grid>
                                    </Grid>
                                  </AccordionSummary>
                                  <AccordionDetails>
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
                                              user_id:
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                                              {item.user_id}
                                            </Grid>
                                          </Grid>
                                          <Grid item container>
                                            <Grid item xs={6}>
                                              activity:
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                                              {item.activity}
                                            </Grid>
                                          </Grid>
                                          <Grid item container>
                                            <Grid item xs={6}>
                                              ip:
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                                              {item.ip}
                                            </Grid>
                                          </Grid>
                                          <Grid item container>
                                            <Grid item xs={6}>
                                              device:
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                                              {item.device}
                                            </Grid>
                                          </Grid>
                                          <Grid item container>
                                            <Grid item xs={6}>
                                              mac:
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                                              {item.mac}
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
                                          <Grid item container>
                                            <Grid item xs={6}>
                                              custom:
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                                              {item.custom}
                                            </Grid>
                                          </Grid>
                                          <Grid item container>
                                            <Grid item xs={6}>
                                              user_name:
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: 'end' }}>
                                              {item.user_name}
                                            </Grid>
                                          </Grid>
                                        </Grid>
                                      </CardContent>
                                    </Card>
                                  </AccordionDetails>
                                </Accordion>
                              </Grid>
                            );
                          })}
                        </Grid>
                        {totalPage > 1 && (
                          <Grid item container justifyContent={'center'} sx={{ mt: 2 }}>
                            <Grid item>
                              <Pagination
                                count={totalPage}
                                siblingCount={1}
                                variant='outlined'
                                color='secondary'
                                shape='rounded'
                                size={'small'}
                                renderItem={(item) => <PaginationItem slots={{ previous: ChevronRightRounded, next: ChevronLeftRounded }} {...item} />}
                                onChange={(event, num) => setData({ pageNumber: num })}
                              />
                            </Grid>
                          </Grid>
                        )}
                      </Paper>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
