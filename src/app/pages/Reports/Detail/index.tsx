import { Card, CardContent, Grid } from '@mui/material';
import { Button, Text, Title } from 'components';
import { useState } from 'react';
import HighchartsColorAxis from 'highcharts/modules/coloraxis';
import Highcharts from 'highcharts/highstock';
import HC_more from 'highcharts/highcharts-more';
import HighchartsMore from 'highcharts/highcharts-more';
import bellCurve from 'highcharts/modules/histogram-bellcurve';
import { BriefReports } from './components/Reports/BRIEF';
import {
  AnxietyReport,
  CISSReport,
  CMSReport,
  DepressionReport,
  EOCReport,
  GDMSReport,
  GHQReport,
  HepnerReport,
  IndividualismReport,
  LuthansReport,
  MBTIReport,
  MLQCMLQEReport,
  OCQReport,
  ODQReport,
  OPQReport,
  OSIReport,
  QOLSReport,
  Scl90Report,
  SLSReport,
  TotalReport,
  ASSReport,
  PID5BAReport,
} from './components/Reports/Full';
import { ItemDetail } from './itemDetail';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Go, Util } from 'utils';

HighchartsColorAxis(Highcharts);
HC_more(Highcharts); //init module
bellCurve(Highcharts);
HighchartsMore(Highcharts);

export default function Index() {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const [childAccordion, setChildAccordion] = useState(false);

  const reportData = localStorage.reportResult ? JSON.parse(localStorage.reportResult).data.data : {};
  const reportOption = localStorage.reportOption ? JSON.parse(localStorage.reportOption) : {};

  const totalTop = localStorage.Report ? (JSON.parse(localStorage.Report).total_Top ? JSON.parse(localStorage.Report).total_Top : []) : {};
  const totalArray = localStorage.Report ? (JSON.parse(localStorage.Report).total_Array ? JSON.parse(localStorage.Report).total_Array : []) : {};
  const expander = () => {
    setChildAccordion(true);
  };
  return (
    <>
      {localStorage.reportResult ? (
        <Grid container spacing={2}>
          <Grid item md={3} lg={4} xs={12}>
            <Card sx={deviceType === 'web' ? { minHeight: 'calc(97vh - 218px)' } : { minHeight: 'calc(93vh - 600px)' }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Title
                      value={
                        reportOption[0].group === 'true' && reportData.questionnaires[0].users_count > 1
                          ? `${t(messages.Text_ReportsDetail_ParticipantsInformation())}`
                          : `${t(messages.Text_ReportsDetail_ParticipantInformation())}`
                      }
                    />
                  </Grid>
                  {reportOption[0].group === 'true' && reportData.questionnaires[0].users_count > 1 ? (
                    <>
                      <Grid item xs={12}>
                        <Card variant={'outlined'}>
                          <CardContent>
                            <Grid container spacing={6}>
                              <Grid item xs={12}>
                                <Text variant={'web16'} weight={'bold'}>
                                  {t(messages.Text_ReportsDetail_CountParticipant())}
                                </Text>
                              </Grid>
                              <Grid item container spacing={4}>
                                <ItemDetail title={`${t(messages.Input_ReportsDetail_AllCount())}`} value={reportData.questionnaires[0].users_count} variant={'quantity'} />
                                <ItemDetail title={`${t(messages.Input_ReportsDetail_Males())}`} value={reportData.questionnaires[0].males} variant={'quantity'} />
                                <ItemDetail title={`${t(messages.Input_ReportsDetail_Females())}`} value={reportData.questionnaires[0].females} variant={'quantity'} />
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sx={deviceType === 'web' ? { minHeight: 'calc(93vh - 340px)' } : { minHeight: 'auto' }}>
                        <Card variant={'outlined'}>
                          <CardContent>
                            <Grid container spacing={5}>
                              <Grid item xs={12}>
                                <Text variant={'web16'} weight={'bold'}>
                                  {t(messages.Text_ReportsDetail_AgeParticipant())}
                                </Text>
                              </Grid>
                              <Grid item container spacing={4}>
                                <ItemDetail title={`${t(messages.Input_ReportsDetail_AverageAge())}`} value={reportData.questionnaires[0].users_avg_age} variant={'age'} />
                                <ItemDetail title={`${t(messages.Input_ReportsDetail_MinimumAge())}`} value={reportData.questionnaires[0].users_min_age} variant={'age'} />
                                <ItemDetail title={`${t(messages.Input_ReportsDetail_MaximumAge())}`} value={reportData.questionnaires[0].users_max_age} variant={'age'} />
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    </>
                  ) : (
                    <Grid item xs={12} sx={deviceType === 'web' ? { minHeight: 'calc(93vh - 85px)' } : { minHeight: 'auto' }}>
                      <Card variant={'outlined'}>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12}>
                              <Text variant={'web16'} weight={'bold'}>
                                {reportData.user_name}
                              </Text>
                            </Grid>
                            <Grid item container spacing={4}>
                              <Grid item container justifyContent={'space-between'}>
                                <Grid item>
                                  <Text variant={'web14'} weight={'regular'}>
                                    {t(messages.Input_Global_Gender())}
                                  </Text>
                                </Grid>
                                <Grid item>
                                  <Text variant={'web14'} weight={'bold'}>
                                    {reportData.user_sex === 1 && `${t(messages.Input_Global_Male())}`}
                                    {reportData.user_sex === 2 && `${t(messages.Input_Global_Female())}`}
                                  </Text>
                                </Grid>
                              </Grid>
                              <Grid item container justifyContent={'space-between'}>
                                <Grid item>
                                  <Text variant={'web14'} weight={'regular'}>
                                    {t(messages.Input_Global_Age())}
                                  </Text>
                                </Grid>
                                <Grid item>
                                  <Text variant={'web14'} weight={'bold'}>
                                    {reportData.user_age}
                                  </Text>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button type={'contained'} label={`${t(messages.Input_Global_Back())}`} fullWidth onClick={() => Go.Back()} />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={9} lg={8} xs={12} spacing={2}>
            <Card sx={{ minHeight: '93vh' }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Title value={`${t(messages.Input_ReportsDetail_Test())}` + reportData.assessment_name} />
                  </Grid>
                  <BriefReports item={totalArray} expander={expander} childAccordion={childAccordion} />
                  <Grid item container sx={reportOption[0].full === false ? { display: 'none' } : { display: '' }}>
                    <Grid item xs={12} sx={totalTop.length >= 1 ? { display: 'none' } : { display: 'flex' }}>
                      <Text variant={'web14'} weight={'bold'}>
                        {t(messages.Input_Global_FullReport())}
                      </Text>
                    </Grid>
                    <DepressionReport expander={expander} childAccordion={childAccordion} />
                    <AnxietyReport expander={expander} childAccordion={childAccordion} />
                    <GHQReport expander={expander} childAccordion={childAccordion} />
                    <IndividualismReport expander={expander} childAccordion={childAccordion} />
                    <LuthansReport expander={expander} childAccordion={childAccordion} />
                    <HepnerReport expander={expander} childAccordion={childAccordion} />
                    <MBTIReport expander={expander} childAccordion={childAccordion} />
                    <Scl90Report expander={expander} childAccordion={childAccordion} />
                    <CISSReport expander={expander} childAccordion={childAccordion} />
                    <EOCReport expander={expander} childAccordion={childAccordion} />
                    <OPQReport expander={expander} childAccordion={childAccordion} />
                    <OCQReport expander={expander} childAccordion={childAccordion} />
                    <CMSReport expander={expander} childAccordion={childAccordion} />
                    <SLSReport expander={expander} childAccordion={childAccordion} />
                    <ODQReport expander={expander} childAccordion={childAccordion} />
                    <GDMSReport expander={expander} childAccordion={childAccordion} />
                    <OSIReport expander={expander} childAccordion={childAccordion} />
                    <MLQCMLQEReport expander={expander} childAccordion={childAccordion} />
                    <QOLSReport expander={expander} childAccordion={childAccordion} />
                    <ASSReport expander={expander} childAccordion={childAccordion} />
                    <PID5BAReport expander={expander} childAccordion={childAccordion} />
                    <TotalReport expander={expander} childAccordion={childAccordion} />
                  </Grid>
                  <Grid item xs={12} sx={{ color: '#6a6a6a', textAlign: 'center' }}>
                    <Text variant={'web16'} weight={'bold'}>
                      {t(messages.Text_ReportsDetail_EndReport())}
                    </Text>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <>{window.history.back()}</>
      )}
    </>
  );
}
