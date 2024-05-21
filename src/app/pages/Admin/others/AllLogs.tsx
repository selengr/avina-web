import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Grid } from '@mui/material';
import { Button, Title } from 'components';
import { Go } from 'utils';
import jMoment from 'moment-jalaali';
import { ExpandMore } from '@mui/icons-material';

export default function AllLogs() {
  const [info, setInfo] = useState<any[]>([]);
  const handleAllLogs = async () => {
    try {
      const data = {
        order: '',
        sort_by: '',
        per_page: '',
        user_name: '',
        type: '',
      };
      const result = await adminHttp.allLogs(data);
      setInfo(result.data.data);
    } catch (error) {
      // console.log('error', error);
    }
  };

  useEffect(() => {
    handleAllLogs().then((r) => r);
  }, []);

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Title value={'گزارش‌ها'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1} justifyContent={'end'}>
              <Grid item>
                <Button type={'contained'} label={'بازگشت'} fullWidth={true} onClick={() => Go.Back()} />
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'} spacing={1}>
              {info.map((item, i) => {
                return (
                  <Grid item xs={12} key={i}>
                    <Card variant='outlined'>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item container>
                            <Grid item xs={12}>
                              id:
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'end' }}>
                              {item.id}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12}>
                              user_id:
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'end' }}>
                              {item.user_id}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12}>
                              type:
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'end' }}>
                              {item.type}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12}>
                              created_at:
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'end' }}>
                              {jMoment(item.created_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD')}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12}>
                              updated_at:
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'end' }}>
                              {jMoment(item.updated_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD')}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12}>
                              request:
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'end', fontSize: '14px' }}>
                              {item.request}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12}>
                              user_name:
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'end' }}>
                              {item.user_name}
                            </Grid>
                          </Grid>
                          <Grid item container>
                            {/*<Grid item xs={6}>*/}
                            {/*  report:*/}
                            {/*</Grid>*/}
                            <Grid item xs={12} sx={{ textAlign: 'end', border: 1, borderColor: 'lightgray', borderRadius: 1 }}>
                              <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
                                  <Grid container justifyContent={'space-between'}>
                                    report
                                    {/*<Divider orientation='horizontal' flexItem light />*/}
                                    {/*<Divider orientation='horizontal' flexItem light />*/}
                                  </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Grid xs={12} sx={{ fontSize: '14px', width: '95%' }}>
                                    {item.report}
                                  </Grid>
                                </AccordionDetails>
                              </Accordion>
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
