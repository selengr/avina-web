import React, { useEffect, useRef, useState } from 'react';
import { Card, CardActionArea, CardContent, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Paper } from '@mui/material';
import { Button, Divide, Icons, MicroCard, Text, Title } from 'components';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AssessmentStore, AssessmentSystemsList, setAlert } from 'redux/action/creators';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
// import { useDebounceFn } from 'ahooks';
import pic from 'assets/images/example.webp';
import { Util } from 'utils';
import { ChevronLeftRounded } from '@mui/icons-material';
import qs from 'qs';

export default function Index() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const owner_id = Util.extractID();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const navigate = useNavigate();
  const renderAfterCalled = useRef(false);
  const assessmentsSystemsList: any = useSelector<any>((res) => res.assessmentSystemsList);
  const [packages, setPackages] = useState<any>([]);
  const [questionnaires, setQuestionnaires] = useState<any>([]);
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const fetchList = async (data?: string | undefined) => {
    await dispatch(AssessmentSystemsList(data, 'request') as any);
  };

  useEffect(() => {
    const id = qs.parse(location.search, { ignoreQueryPrefix: true }).id;
    try {
      setPackages(assessmentsSystemsList.data.data.assessments.filter((item) => item.id === Number(id))[0]);
      setQuestionnaires(assessmentsSystemsList.data.data.assessments.filter((item) => item.id === Number(id))[0].questionnaires);
    } catch (error) {
      console.log('list error: ', error);
    }
  }, [assessmentsSystemsList]);

  const addToAssessments = async () => {
    const questionnairesList: any = [];
    for (let i = 0; i < packages.questionnaires.length; i++) {
      questionnairesList.push(packages.questionnaires[i].id);
    }
    try {
      const data = {
        name: packages.name,
        owner_id,
        description: packages.description,
        questionnaires: questionnairesList,
      };
      await dispatch(AssessmentStore(data, 'request') as any);
      dispatch(setAlert(true, 'success', `${t(messages.Alert_Global_Success_AddToCart())}`, 'Done') as any);
      navigate('/assessments');
    } catch (error) {
      dispatch(setAlert(true, 'error', `${t(messages.Alert_Global_Error_AddToCart())}`, 'Alert') as any);
      // console.log('create item error: ', error);
    }
  };

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchList().then((r) => r);
    }
  }, []);

  // const { run } = useDebounceFn(
  //   (data?: string | undefined) => {
  //     fetchList(data).then((r) => r);
  //   },
  //   {
  //     wait: 2000,
  //   },
  // );
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item container alignItems={'center'}>
              {/*@Dev start*/}
              <Grid item container alignItems={'center'}>
                <Grid item xs={6} md={6} alignItems={'center'}>
                  <Title value={packages.name} />
                </Grid>
                <Grid item container xs={6} md={6} justifyContent={'left'} alignItems={'center'}>
                  <Text variant={'web14'} type={'body'} weight={'regular'} style={{ color: '#353535' }}>
                    {`${packages.unit_price}${t(messages.Text_Global_Cost())} `}
                  </Text>
                </Grid>
              </Grid>
              {/*@Dev end*/}
              <Grid item container xs={12} justifyContent={'center'} sx={{ py: 3 }}>
                <img src={pic} alt='سایا' style={{ width: '100%' }} />
              </Grid>
              {/**/}
              <Grid item container xs={12} justifyContent={'right'}>
                <Text variant={'web14'} type={'body'} weight={'regular'} style={{ color: '#6a6a6a' }}>
                  {packages.description}
                </Text>
              </Grid>
              <Grid item container justifyContent={'flex-end'}>
                <NavLink
                  to={'/'}
                  style={deviceType === 'mobile' ? { display: 'inline-block', color: '#31b7ae', textDecoration: 'none' } : { display: 'none', color: '#31b7ae', textDecoration: 'none' }}>
                  جزییات بیشتر
                  <ChevronLeftRounded fontSize={'small'} style={{ transform: 'rotate(-90deg)' }} />
                </NavLink>
              </Grid>
              {/*  */}
            </Grid>
            <Grid item container sx={{ mt: 2 }} spacing={2}>
              <Grid item xs={12}>
                <Title value={`${t(messages.Input_Global_Questionnaires())}`} />
              </Grid>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent>
                    <Paper elevation={0}>
                      <Grid container spacing={2}>
                        {questionnaires.map((item, i) => {
                          return (
                            <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                              <CardActionArea
                                onClick={() => {
                                  setSelectedQuestionnaire(questionnaires[i]);
                                  handleModal();
                                }}>
                                <MicroCard label={item.name} type={'test'} />
                              </CardActionArea>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Paper>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
              <Grid item xs={12} md={4} lg={3}>
                <Button color={'primary'} type={'contained'} label={`${t(messages.Input_Global_AddToMyAssessment())}`} fullWidth={true} onClick={addToAssessments} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Dialog maxWidth={'md'} fullWidth={true} open={modal} onClose={handleModal}>
        <DialogTitle sx={{ p: 1 }} id='alert-dialog-title'>
          <Grid container>
            <Grid item>
              <IconButton onClick={handleModal}>
                <Icons name={'Close'} />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Title value={selectedQuestionnaire.name} />
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item xs={11}>
                <Card variant={'outlined'}>
                  <CardContent>
                    <Grid container justifyContent={'space-evenly'}>
                      <Grid item container md={2} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                        <Grid item>
                          <Text variant={fontSize} weight={'bold'}>
                            {t(messages.Input_Global_Capacity())}
                          </Text>
                        </Grid>
                        <Grid item>
                          <Divide />
                        </Grid>
                        <Grid item>
                          <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                            {`${selectedQuestionnaire.questions_count}${t(messages.Input_Global_Item())} `}
                          </Text>
                        </Grid>
                      </Grid>
                      <Divider orientation='vertical' variant='middle' flexItem />
                      <Grid item container md={2} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                        <Grid item>
                          <Text variant={fontSize} weight={'bold'}>
                            {t(messages.Input_Global_RequireTime())}
                          </Text>
                        </Grid>
                        <Grid item>
                          <Divide />
                        </Grid>
                        <Grid item>
                          <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                            {selectedQuestionnaire.duration}
                          </Text>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item md={12} sx={{ my: 4 }}>
              <Text variant={deviceType === 'web' ? 'web12' : 'mobile9'} type={'body'} weight={'regular'} style={{ color: '#6a6a6a' }}>
                {selectedQuestionnaire.description}
              </Text>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
