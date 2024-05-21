import { useEffect, useState } from 'react';
import { Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material';
import { Button, Divide, Icons, MicroCard, Text, Title } from 'components';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { testHttp } from 'api';
import { Util } from 'utils';
import pic from 'assets/images/example.webp';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();

  const [testInfo, setTestInfo] = useState<any>({});
  const [questionnaires, setQuestionnaires] = useState<any[]>([]);
  const [reportVisibility, setReportVisibility] = useState<number>();
  const [questModal, setQuestModal] = useState<boolean>(false);
  const [questionnaire, setQuestionnaire] = useState<any>({});

  const testID = qs.parse(location.search, { ignoreQueryPrefix: true }).id;

  const getTestInfo = async () => {
    try {
      const result = await testHttp.getTestInfo(testID);
      setTestInfo(result.data.data);
      setQuestionnaires(result.data.data.questionnaires);
      setReportVisibility(result.data.data.result_visibility);
    } catch (error) {
      // console.log('Error one Questionaire', error);
    }
  };

  useEffect(() => {
    getTestInfo().then((r) => r);
  }, []);

  const handleModal = (ID) => {
    setQuestModal(!questModal);
    const item = questionnaires.filter((e) => e.id === ID);
    setQuestionnaire(item[0]);
  };

  const Report = async (id, reportType) => {
    Util.StorageInitializer();
    const dataArr: number[] = [];
    let type = '';
    if (reportType === 2) {
      type = 'brief';
    } else if (reportType === 3) {
      type = 'full';
    }
    dataArr.push(id);
    const data = {
      tests: [testID],
      questionnaires_id: dataArr,
      owner_id: '',
      result_type: type,
      select_all: 0,
    };
    localStorage.setItem('reportResult', JSON.stringify([]));
    localStorage.setItem('reportOption', JSON.stringify([{ full: true, group: 'false' }]));
    try {
      const result = await testHttp.showReport(data);
      localStorage.setItem('complex', 'false');
      localStorage.setItem('reportResult', JSON.stringify(result));
      navigate('/report/initial');
    } catch (error) {
      // console.log('Report Result=>', error);
    }
  };

  return (
    <>
      <Card sx={deviceType === 'web' ? { minHeight: '93vh' } : { minHeight: '80vh' }}>
        <CardContent sx={{ pb: '16px !important' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Title value={testInfo.name} />
            </Grid>
            <Grid item container xs={12} justifyContent={'center'} sx={{ my: 3 }}>
              <img src={pic} alt='سایا' style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
              <Text style={{ color: '#6a6a6a', lineHeight: '36px' }} variant={'web14'}>
                {testInfo.description}
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Title value={`${t(messages.Input_Global_Questionnaires())}`} />
            </Grid>
            <Grid item xs={12}>
              <Card variant={'outlined'}>
                <CardContent sx={{ pb: '16px !important' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Text variant={fontSize} weight={'bold'}>
                        {t(messages.Text_Global_ClickQuestionnaire())}
                      </Text>
                    </Grid>
                    <Grid item container>
                      {questionnaires.map((item, i) => {
                        return (
                          <Grid item xs={12} md={6} lg={4} xl={3} key={i} sx={{ p: 1 }}>
                            <MicroCard label={item.name} status={item.result_status === 3 ? 'done' : 'unDone'} divider={true} type={'test'} onClick={() => handleModal(item.id)} />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog maxWidth={'md'} fullWidth={true} open={questModal} onClose={() => setQuestModal(false)}>
        <DialogTitle sx={{ p: 1 }} id='alert-dialog-title'>
          <Grid container>
            <Grid item>
              <IconButton onClick={() => setQuestModal(false)}>
                <Icons name={'Close'} />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sx={{ marginBottom: '20px' }}>
              <Title value={questionnaire.name} />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '28px' }}>
              <Card variant={'outlined'}>
                <CardContent sx={{ pb: '16px !important' }}>
                  <Grid container>
                    <Grid item container md={4} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                      <Grid item>
                        <Text variant={fontSize} weight={'bold'}>
                          {t(messages.Text_MyAssessmentInfo_TestStatue())}
                        </Text>
                      </Grid>
                      <Grid item>
                        <Divide />
                      </Grid>
                      <Grid item>
                        <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                          {questionnaire.result_status === 3 ? `${t(messages.Input_Global_TestDone())}` : `${t(messages.Input_Global_TestUndone())}`}
                        </Text>
                      </Grid>
                    </Grid>
                    <Grid item container md={4} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                      <Grid item>
                        <Text variant={fontSize} weight={'bold'}>
                          {t(messages.Input_Global_QuestionNumber())}
                        </Text>
                      </Grid>
                      <Grid item>
                        <Divide />
                      </Grid>
                      <Grid item>
                        <Text variant={fontSize} weight={'regular'} style={{ color: '#6A6A6A' }}>
                          {questionnaire.questions_count} {t(messages.Input_Global_Item())}
                        </Text>
                      </Grid>
                    </Grid>
                    <Grid item container md={4} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                      <Grid item>
                        <Text variant={fontSize} weight={'bold'}>
                          {t(messages.Input_Global_RequireTime())}
                        </Text>
                      </Grid>
                      <Grid item>
                        <Divide />
                      </Grid>
                      <Grid item>
                        <Text variant={fontSize} weight={'regular'} style={{ color: '#6A6A6A' }}>
                          {questionnaire.duration}
                        </Text>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={12} sx={{ marginBottom: '28px' }}>
              <Text variant={fontSize} weight={'regular'} style={{ color: '#6A6A6A', lineHeight: '36px' }}>
                {questionnaire.starting_description}
              </Text>
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item md={2}>
                {questionnaire.result_status === 3 ? (
                  <Button
                    type={'contained'}
                    label={`${t(messages.Input_MyAssessmentInfo_ShowReport())}`}
                    onClick={() => Report(questionnaire.id, reportVisibility)}
                    fullWidth={true}
                    disabled={reportVisibility === 1}
                  />
                ) : (
                  <Button
                    type={'contained'}
                    label={`${t(messages.Input_MyAssessmentInfo_StartTest())}`}
                    onClick={() => navigate(`/assessment/test/?test_id=${testID}&q_id=${questionnaire.id}`)}
                    fullWidth={true}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
