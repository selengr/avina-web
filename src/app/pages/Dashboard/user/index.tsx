import React, { useEffect, useRef, useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, Grid } from '@mui/material';
import { Divide, MicroCard, ProgressBar, Text, Title } from '../../../../components';
import { ChevronLeftRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { getDashboard } from '../Logic';
import { useNavigate } from 'react-router-dom';

export function Index() {
  const navigate = useNavigate();
  const profileDashboardResponse: any = useSelector<any>((res) => res.profileDashboard.data);
  const renderAfterCalled = useRef(false);
  const [packages, setPackages] = useState<any[]>([]);
  const [isDone, setIsDone] = useState<any[]>([]);
  const [isUnDone, setIsUnDone] = useState<any[]>([]);
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    try {
      if (!renderAfterCalled.current) {
        getDashboard(5).then((r) => r);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      checkTests(profileDashboardResponse.data['my assessments']);
      setPackages(profileDashboardResponse.data.packages);
    } catch (e) {}
  }, [profileDashboardResponse]);

  const checkTests = (assessmentData) => {
    const unDone: any[] = assessmentData.filter((test) => test.status === 1);
    const inProgress: any[] = assessmentData.filter((test) => test.status === 2);
    const done: any[] = assessmentData.filter((test) => test.status === 3);
    const unDones: any[] = unDone.concat(inProgress);
    setIsUnDone(unDones);
    setIsDone(done);
    setProgressValue(done.length * (100 / assessmentData.length));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Card sx={{ minHeight: 130 }}>
            <CardContent>
              <Grid container spacing={progressValue}>
                <Grid item>
                  <Title value={'ارزیابی های من'} />
                </Grid>
                <Grid item xs={12} marginTop={'20px'}>
                  <ProgressBar percent={1} />
                </Grid>
                <Grid container item xs={12} justifyContent={'space-between'}>
                  <Grid item xs={'auto'}>
                    0%
                  </Grid>
                  <Grid item xs={'auto'}>
                    25%
                  </Grid>
                  <Grid item xs={'auto'}>
                    50%
                  </Grid>
                  <Grid item xs={'auto'}>
                    75%
                  </Grid>
                  <Grid item xs={'auto'}>
                    100%
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 'calc(93vh - 443px)', marginTop: 1 }}>
              <CardContent>
                <Grid container>
                  <Grid item container sx={{ mb: 3, justifyContent: 'space-between' }}>
                    <Grid item>
                      <Title value={`ارزیابی های انجام شده (${isDone.length})`} />
                    </Grid>
                    <CardActions>
                      <Grid item>
                        <CardActionArea disableRipple={true} onClick={() => navigate(`/assessments`)}>
                          <Text variant={'web14'} type={'title2'} style={{ color: '#31b7ae' }}>
                            {'همه‌ی ارزیابی‌ها'}
                            <ChevronLeftRounded fontSize={'small'} />
                          </Text>
                        </CardActionArea>
                      </Grid>
                    </CardActions>
                  </Grid>
                  <Grid item container sx={{ maxHeight: 200, overflow: 'auto', justifyContent: 'center' }} spacing={1}>
                    {isDone.length === 0 ? (
                      <Grid item sx={{ marginTop: 8 }}>
                        <Text variant={'web14'} type={'title2'}>
                          {'ارزیابی انجام شده در حال حاظر وجود ندارد.'}
                        </Text>
                      </Grid>
                    ) : (
                      isDone.map((item, i) => {
                        return (
                          <Grid key={i} item xs={12}>
                            <MicroCard label={item} onClick={() => navigate(`/assessment/info/?id=${item.id}`)} active={true} status={'done'} />
                          </Grid>
                        );
                      })
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 'calc(93vh - 443px)', marginTop: 1 }}>
              <CardContent>
                <Grid container>
                  <Grid item container sx={{ mb: 3, justifyContent: 'space-between' }}>
                    <Grid item>
                      <Title value={`ارزیابی‌های انجام نشده (${isUnDone.length})`} />
                    </Grid>
                    <Grid item>
                      <CardActionArea disableRipple={true} onClick={() => navigate(`/assessments`)}>
                        <Text variant={'web14'} type={'title2'} style={{ color: '#31b7ae' }}>
                          {'همه‌ی ارزیابی‌ها'}
                          <ChevronLeftRounded fontSize={'small'} />
                        </Text>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                  <Grid item container sx={{ maxHeight: 200, overflow: 'auto', justifyContent: 'center' }} spacing={1}>
                    {isUnDone.length === 0 ? (
                      <Grid item sx={{ marginTop: 8 }}>
                        <Text variant={'web14'} type={'title2'}>
                          {'ارزیابی انجام نشده در حال حاظر وجود ندارد.'}
                        </Text>
                      </Grid>
                    ) : (
                      isUnDone.map((item, i) => {
                        return (
                          <Grid key={i} item xs={12}>
                            <MicroCard label={item} onClick={() => navigate(`/assessment/info/?id=${item.id}`)} active={false} status={'unDone'} />
                          </Grid>
                        );
                      })
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ minHeight: 313, marginTop: 1 }}>
            <CardContent>
              <Grid container>
                <Grid item>
                  <Title value={'بسته‌های پیشنهادی'} />
                </Grid>
                <Grid item container sx={{ mt: 1 }} spacing={2}>
                  {packages.map((item, i) => {
                    return (
                      <Grid key={i} item md={3}>
                        <Card sx={{ borderRadius: '6px', border: '1px solid #bdbdbd' }}>
                          <CardActionArea disableRipple={true} onClick={() => navigate(`/introduction/info/?id=${item.id}`)}>
                            <CardHeader
                              sx={{ p: 1, mt: 1, height: 50 }}
                              title={
                                <Text variant={'web14'} type={'title2'} weight={'bold'} align={'right'}>
                                  {item.name}
                                </Text>
                              }
                              dir={'rtl'}
                            />
                            <CardContent>
                              <Grid container spacing={1}>
                                <Grid item xs={12}>
                                  <Divide />
                                </Grid>
                                <Grid item xs={12}>
                                  <Text variant={'web14'} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                                    {item.description}
                                  </Text>
                                </Grid>
                                <Grid item container xs={12} justifyContent={'flex-end'}>
                                  <CardActions>
                                    <Grid item>
                                      <Text variant={'web14'} type={'title2'} style={{ color: '#31b7ae' }}>
                                        {'جزئیات بیشتر'}
                                        <ChevronLeftRounded fontSize={'small'} />
                                      </Text>
                                    </Grid>
                                  </CardActions>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export { Index as UserDashboard };
