import React, { useEffect, useRef, useState } from 'react';
// import styled from 'styled-components/macro';
// import { Helmet } from 'react-helmet-async';
import { Button, Divide, DropDown, Text, Title } from 'components';
import { Util } from 'utils';
import { useNavigate } from 'react-router-dom';
// import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, MenuItem, Paper } from '@mui/material';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
// import {getDashboard} from "../../app/pages/Dashboard/Logic";
import { ChevronLeftRounded } from '@mui/icons-material';
import { getDashboard, showNotification } from '../Logic';
// import {messages} from "../../app/pages/participants/messages";
// import 'swiper/css';
import { Chart } from './chart';
import { testHttp } from '../../../../api';
import { Pagination } from 'swiper/modules';
import jMoment from 'moment-jalaali';
import { useTheme } from '@mui/material/styles';
import { textAlign } from '@mui/system';

interface Props {
  data?: any;
}

export function Index() {
  const theme = useTheme();

  const deviceType = Util.ScreenSize();
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const profileDashboardResponse: any = useSelector<any>((res) => res.profileDashboard.data);
  const showNotificationResponse: any = useSelector<any>((res) => res.showNotification.data);
  const renderAfterCalled = useRef(false);
  const [packages, setPackages] = useState<any[]>([]);
  const [assessments, setAssessments] = useState<any>([]);
  const [latestAnsweredQuestionnaires, setLatestAnsweredQuestionnaires] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const fontSize = Util.DefaultFontSize();
  const auth: boolean = Util.LoggedIn();
  const owner_id = Util.extractID();

  useEffect(() => {
    if (!auth) {
      navigate('login');
    } else {
      navigate('/Dashboard');
    }
  }, []);

  useEffect(() => {
    try {
      if (!renderAfterCalled.current) {
        getDashboard(5).then((r) => r);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      try {
        setPackages(profileDashboardResponse.data.packages?.data);
        setAssessments(profileDashboardResponse.data.assessments);
        setLatestAnsweredQuestionnaires(profileDashboardResponse.data.latest_answered_questionnaires);
        chartDataInitializer([profileDashboardResponse.data.assessments[0]]);
      } catch (e) {}
    }
  }, [profileDashboardResponse]);

  useEffect(() => {
    showNotification();
    const results = showNotificationResponse.data;
    results.map((item) => {
      // console.log(item)
    });
  }, []);

  const showAssessmentDataOnChart = (id?) => {
    const data = profileDashboardResponse.data.assessments;
    const found = data.filter((e) => e.id === id);
    chartDataInitializer(found);
  };

  const chartDataInitializer = (data) => {
    setChartData([
      { name: 'ارزیابی های تخصیص یافته', y: data[0].assigned_count },
      { name: 'ارزیابی های انجام شده', y: data[0].answered_count },
      { name: 'ارزیابی های انجام نشده', y: data[0].not_answered_count },
      { name: 'ظرفیت باقیمانده', y: data[0].not_assigned_count },
    ]);
  };
  const reportDataSet = async (reportType, questionnairesId, assessmentId, testId) => {
    const isFullType = reportType === 'full';
    localStorage.setItem('reportOption', JSON.stringify([{ full: isFullType, group: localStorage.complex }]));
    try {
      const reqData = {
        tests: [testId],
        questionnaires_id: [assessmentId],
        owner_id: owner_id,
        result_type: reportType,
        assessment_id: questionnairesId,
        select_all: 0,
      };
      const result = await testHttp.showReport(reqData);
      // await testResult(checkedUsers, selectedQuestionnaire, type, selectedAssessment, isSelectedAll);
      localStorage.setItem('reportResult', JSON.stringify(result));
      navigate('/report/initial');
    } catch (error) {
      // console.log('Report Result=>', error);
    }
  };

  // @ts-ignore
  return (
    <Grid container spacing={2} sx={deviceType === 'mobile' ? { display: 'flex', flexDirection: 'column' } : {}}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Title value={'بررسی ارزیابی ها'} />
              </Grid>
              <Grid item container>
                <Grid item xs={12}>
                  <DropDown defaultValue={0}>
                    {assessments !== undefined &&
                      assessments.map(
                        (
                          item: {
                            id: string | number | readonly string[] | undefined;
                            name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                          },
                          i: React.Key | null | undefined,
                        ) => {
                          return (
                            <MenuItem key={i} value={item.id} onClick={() => showAssessmentDataOnChart(item.id)}>
                              {item.name}
                            </MenuItem>
                          );
                        },
                      )}
                  </DropDown>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={12}>
                    <Chart chartData={chartData} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/*@Dev Swiper*/}
      <Grid item xs={12} md={6} style={deviceType === 'mobile' ? { display: 'none' } : { display: '' }}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                <Title value={'بسته های پیشنهادی'} />
              </Grid>
              <Swiper
                style={{ height: '290px' }}
                spaceBetween={20}
                slidesPerView={deviceType === 'web' ? 2 : 1}
                // navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                // modules={[EffectFade, Navigation, Pagination]}
                // onSlideChange={() => console.log('slide change')}

                // onSwiper={(swiper) => console.log(swiper)}
              >
                {packages !== undefined &&
                  packages.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <CardActionArea disableRipple={true} onClick={() => navigate(`/suggestion/info/?id=${item.id}`)}>
                          <Card variant='outlined'>
                            <CardHeader
                              sx={deviceType === 'mobile' ? { pt: '20px', pb: '1px', marginRight: '0px' } : { p: 1, marginRight: '7px' }}
                              // sx={{ p: 1 }}
                              title={
                                <Text variant={'web14'} type={'title2'} weight={'bold'} align={'right'}>
                                  {item.name}
                                </Text>
                              }
                              dir={'rtl'}
                            />
                            <CardContent>
                              <Grid container spacing={2}>
                                <Grid item container>
                                  <Divide />
                                </Grid>
                                <Grid
                                  item
                                  container
                                  style={deviceType === 'web' ? { height: 115 } : { height: 60 }}
                                  sx={{
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                  }}>
                                  <Text variant={'web14'} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                                    {item.description}
                                  </Text>
                                </Grid>
                              </Grid>
                            </CardContent>
                            <CardActions sx={{ p: 1 }}>
                              <Grid container>
                                <Grid item container>
                                  <Grid item xs={12} display={'flex'} justifyContent={'flex-end'} alignItems={'center'} marginLeft={'8px'} marginTop={'9.5px'}>
                                    جزییات بیشتر
                                    <ChevronLeftRounded fontSize={'small'} />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </CardActions>
                          </Card>
                        </CardActionArea>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/*@dev Swiper*/}

      {/*@Dev ==> Latest Assessments */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item sx={{ marginBottom: '20px' }}>
                <Title value={'آخرین ارزیابی های انجام شده'} />
              </Grid>
              <Paper style={{ height: 'calc(83vh - 400px)', overflow: 'auto', width: '100%' }} elevation={0}>
                <Grid item container spacing={1} height={385}>
                  {latestAnsweredQuestionnaires !== undefined &&
                    latestAnsweredQuestionnaires.map((item, i) => {
                      return (
                        <Grid key={i} item xs={12}>
                          <Card variant='outlined'>
                            <CardContent>
                              {deviceType === 'mobile' ? (
                                <Grid container>
                                  <Grid item xs={deviceType === 'mobile' ? 12 : 4}>
                                    <Text variant={'mobile12'} weight={'bold'}>
                                      {item.questionnaire_name}
                                    </Text>
                                  </Grid>
                                  <Grid item container justifyContent={'space-between'} alignItems={'center'} style={{ marginTop: '10px' }}>
                                    <Grid item>
                                      <Text variant={'web14'} weight={'regular'}>
                                        {item.user_name}
                                      </Text>
                                    </Grid>
                                    <Grid item>
                                      <Text variant={fontSize} weight={'regular'}>
                                        {/*{item.finishing_time}*/}
                                        {jMoment(item.finishing_time, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD')}
                                      </Text>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ) : (
                                <Grid
                                  container
                                  spacing={1}
                                  justifyContent={''}
                                  // sx={deviceType === 'mobile' ? {marginBottom:'20px'}: {marginBottom:'0px'}}
                                  alignItems={'center'}>
                                  <Grid item xs={4}>
                                    <Text style={{ paddingRight: '16px' }} variant={'web14'} weight={'bold'}>
                                      {item.questionnaire_name}
                                    </Text>
                                  </Grid>
                                  <Grid
                                    item
                                    container
                                    xs={4}
                                    spacing={5}
                                    // sx={{display:'flex', justifyContent:'center', textAlign:'center'}}
                                    display={'flex'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}>
                                    <Grid
                                      item
                                      sm={12}
                                      lg={6}
                                      display={'flex'}
                                      sx={{
                                        [theme.breakpoints.up('lg')]: {
                                          justifyContent: 'flex-start',
                                        },
                                        [theme.breakpoints.up('xs')]: {
                                          justifyContent: 'center',
                                        },
                                      }}>
                                      <Text variant={'web14'} weight={'regular'}>
                                        {item.user_name}
                                      </Text>
                                    </Grid>
                                    <Grid
                                      item
                                      sm={12}
                                      lg={6}
                                      display={'flex'}
                                      justifyContent={'flex-end'}
                                      sx={{
                                        [theme.breakpoints.up('lg')]: {
                                          justifyContent: 'flex-end',
                                        },
                                        [theme.breakpoints.up('xs')]: {
                                          justifyContent: 'center',
                                        },
                                      }}>
                                      <Text variant={fontSize} weight={'regular'}>
                                        {/*{item.finishing_time}*/}
                                        {jMoment(item.finishing_time, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD')}
                                      </Text>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    item
                                    container
                                    xs={4}
                                    spacing={1}
                                    // sx={deviceType ==='mobile' ? {display:'none'} :{display:''}}
                                    justifyContent={'flex-end'}
                                    alignItems={'center'}>
                                    <Grid item>
                                      <Button type={'outlined'} label={'گزارش مختصر'} onClick={() => reportDataSet('brief', item.assessment_id, item.questionnaire_id, item.test_id)} />
                                    </Grid>
                                    <Grid item>
                                      <Button type={'outlined'} label={'گزارش تفصیلی'} onClick={() => reportDataSet('full', item.assessment_id, item.questionnaire_id, item.test_id)} />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              )}
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                </Grid>
              </Paper>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {/*@Dev ==> Latest Assessments */}
    </Grid>
  );
}
export { Index as AgentDashboard };
