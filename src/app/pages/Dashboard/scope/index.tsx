import React, { useEffect, useRef, useState } from 'react';
import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import { MicroCard, ProgressBar, Text, Title } from '../../../../components';
import { ChevronLeftRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { getDashboard } from '../Logic';
import { useNavigate } from 'react-router-dom';

export function Index() {
  const navigate = useNavigate();
  const profileDashboardResponse: any = useSelector<any>((res) => res.profileDashboard.data);
  const renderAfterCalled = useRef(false);
  const [isDone, setIsDone] = useState<any[]>([]);
  const [isUnDone, setIsUnDone] = useState<any[]>([]);
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    try {
      if (!renderAfterCalled.current) {
        getDashboard(50).then((r) => r);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      checkTests(profileDashboardResponse.data['my assessments']);
    } catch (e) {}
  }, [profileDashboardResponse]);

  const checkTests = (assessmentData: any[]) => {
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
              <Grid container spacing={1}>
                <Grid item>
                  <Title value={'ارزیابی های من'} />
                </Grid>
                <Grid item xs={12} marginTop={'20px'}>
                  <ProgressBar percent={progressValue} />
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
            <Card sx={{ height: 'calc(93vh - 130px)', marginTop: 1 }}>
              <CardContent>
                <Grid container>
                  <Grid item container sx={{ mb: 3, justifyContent: 'space-between' }}>
                    <Grid item>
                      <Title value={`ارزیابی های انجام شده (${isDone.length})`} />
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
                  <Grid item container sx={{ maxHeight: 500, overflow: 'auto', justifyContent: 'center' }} spacing={1}>
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
                            <MicroCard label={item.name} onClick={() => navigate(`/assessment/info/?id=${item.id}`)} active={true} status={'done'} />
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
            <Card sx={{ height: 'calc(93vh - 130px)', marginTop: 1 }}>
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
                  <Grid item container sx={{ maxHeight: 500, overflow: 'auto', justifyContent: 'center' }} spacing={1}>
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
                            <MicroCard label={item.name} onClick={() => navigate(`/assessment/info/?id=${item.id}`)} active={false} status={'unDone'} />
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
      </Grid>
    </>
  );
}

export { Index as ScopeDashboard };
