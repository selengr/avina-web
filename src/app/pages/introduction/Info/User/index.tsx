import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material';
import { Button, Divide, Icons, MicroCard, Text, Title } from 'components';
import { Go, Util } from 'utils';
import pic from 'assets/images/example.webp';
import { useDispatch, useSelector } from 'react-redux';
import { AssessmentOrder, setAlert } from 'redux/action/creators';
import { messages } from '../../messages';
import { useTranslation } from 'react-i18next';
import { getAssessmentShowOnePackage } from '../../Logic';

export default function Index() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const owner_id = Util.extractID();

  const renderAfterCalled = useRef(false);
  const assessmentShowOnePackage: any = useSelector<any>((res) => res.assessmentShowOnePackage);
  const [packages, setPackages] = useState<any>([]);
  const [questionnaires, setQuestionnaires] = useState<any[]>([]);
  const [questModal, setQuestModal] = useState<boolean>(false);
  const [questionnaire, setQuestionnaire] = useState<any>({});
  const id = qs.parse(location.search, { ignoreQueryPrefix: true }).id;

  // const fetchList = async () => {
  //   await dispatch(AssessmentShowOnePackage(id) as any);
  // };

  useEffect(() => {
    if (!renderAfterCalled.current) {
      getAssessmentShowOnePackage(id).then((r) => r);
    }
  }, []);

  useEffect(() => {
    try {
      setPackages(assessmentShowOnePackage.data);
      setQuestionnaires(assessmentShowOnePackage.data.data.questionnaires);
    } catch (error) {
      // console.log('list error: ', error);
    }
  }, [assessmentShowOnePackage]);

  const handleModal = (ID) => {
    setQuestModal(!questModal);
    const item = questionnaires.filter((e) => e.id === ID);
    setQuestionnaire(item[0]);
  };

  const orderAssessments = async () => {
    try {
      const data = {
        owner_id,
        assessment_id: id,
        count: 1,
      };
      await dispatch(AssessmentOrder(data) as any);
      await Util.GetMe();
      Go.Back();
      dispatch(setAlert(true, 'success', `${t(messages.Alert_Global_Success_AddToCart())}`, 'Done') as any);
    } catch (error) {
      dispatch(setAlert(true, 'error', `${t(messages.Alert_IntroductionInfo_Error_AddToCart())}`, 'Alert') as any);
      // console.log('create item error: ', error);
    }
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent sx={{ pb: '16px !important' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Title value={packages.name} />
            </Grid>
            <Grid item xs={6}>
              <Text variant={deviceType === 'web' ? 'web16' : 'mobile10'} weight={'medium'} align={'left'}>
                {`${packages.unit_price} ${t(messages.Text_Global_Cost())} `}
              </Text>
            </Grid>
            <Grid item container xs={12} justifyContent={'center'} sx={{ my: 3 }}>
              <img src={pic} alt='سایا' style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
              <Text style={{ color: '#6a6a6a', lineHeight: '36px' }} variant={fontSize}>
                {packages.description}
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
                          <Grid item xs={12} md={6} lg={4} xl={3} key={i}>
                            <MicroCard label={item.name} type={'test'} onClick={() => handleModal(item.id)} />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item>
                <Button type={'contained'} label={`${t(messages.Input_Global_AddToCart())}`} onClick={orderAssessments} />
              </Grid>
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
                  <Grid container spacing={3} justifyContent={'center'}>
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
                        <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                          {`${questionnaire.questions_count}${t(messages.Input_Global_Iّّtem())} `}
                        </Text>
                      </Grid>
                    </Grid>
                    <Grid item container md={4} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                      <Grid item>
                        <Text variant={fontSize} weight={'bold'}>
                          {t(messages.Text_Global_RequireTime())}
                        </Text>
                      </Grid>
                      <Grid item>
                        <Divide />
                      </Grid>
                      <Grid item>
                        <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                          {questionnaire.duration}
                        </Text>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '28px' }}>
              <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a', lineHeight: '36px' }}>
                {questionnaire.starting_description}
              </Text>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
