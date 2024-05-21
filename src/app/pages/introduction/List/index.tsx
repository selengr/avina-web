import { useEffect, useRef, useState } from 'react';
import { useDebounceFn, useSetState } from 'ahooks';
import { Card, CardContent, Grid, Paper } from '@mui/material';
import { Util } from 'utils';
import { Input, Text, Title } from 'components';
import Items from './items';
import PackageItems from './packageItems';
import { useDispatch, useSelector } from 'react-redux';
import { AssessmentOrder, AssessmentPackages, QuestionnaireShowList, setAlert } from 'redux/action/creators';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

interface State {
  name: string;
}

export default function Index() {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const userData = Util.userAllData();
  const dispatch = useDispatch();
  const fontSize = Util.DefaultFontSize();
  const owner_id = Util.extractID();
  const renderAfterCalled = useRef(false);
  const assessmentsPackages: any = useSelector<any>((res) => res.assessmentPackages);
  const questionnaireList: any = useSelector<any>((res) => res.questionnaireShowList);
  const [questionnaires, setQuestionnaire] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [role, setRole] = useState<string>('');
  const [state, setState] = useSetState<State>({
    name: '',
  });

  function search(data) {
    const filterRoleType = data.filter((o) => o.roleType === userData.data.data.last_role_type);
    return filterRoleType.filter((o) => o.id === userData.data.data.last_role);
  }

  const fetchList = async () => {
    if (role === 'agent') {
      await dispatch(QuestionnaireShowList({ questionnaire_name: state.name }) as any);
    } else if (role === 'user') {
      await dispatch(AssessmentPackages({ name: state.name }) as any);
    }
  };

  useEffect(() => {
    try {
      setPackages(assessmentsPackages.data.data.assessments);
    } catch (error) {
      // console.log('Error Questionaire', error);
    }
  }, [assessmentsPackages]);

  useEffect(() => {
    const questionnaire: any[] = [];
    try {
      questionnaireList.data.data.questionnaire_categories.forEach((item) => {
        Object.values(item.questionnaires).forEach((items) => {
          questionnaire.push(items);
        });
      });
      setQuestionnaire(questionnaire);
    } catch (error) {
      // console.log('list error: ', error);
    }
  }, [questionnaireList]);

  const orderAssessments = async (id) => {
    try {
      const data = {
        owner_id,
        assessment_id: id,
        count: 1,
      };
      await dispatch(AssessmentOrder(data) as any);
      dispatch(setAlert(true, 'success', `${t(messages.Alert_Global_Success_AddToCart())}`, 'Done') as any);
    } catch (error) {
      dispatch(setAlert(true, 'error', `${t(messages.Alert_Global_Error_AddToCart())}`, 'Alert') as any);
      // console.log('create item error: ', error);
    }
  };

  useEffect(() => {
    const roleType = search(userData.roles)[0].roleType;
    const type = search(userData.roles)[0].type;
    if (roleType === 1) {
      setRole('agent');
    } else if (type === 1) setRole('user');
  }, []);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchList().then((r) => r);
    }
  }, [role]);

  const { run } = useDebounceFn(
    () => {
      fetchList().then((r) => r);
    },
    {
      wait: 1500,
    },
  );

  useEffect(() => {
    run();
  }, [state]);
  const NoResult = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: '90vh' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {t(messages.Text_Global_NoResult())}
            </Text>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
      <Card sx={deviceType === 'web' ? { minHeight: '93vh' } : { minHeight: '80vh' }}>
        <CardContent sx={{ p: '16px !important' }}>
          <Grid container spacing={2}>
            <Grid item container alignItems={'center'}>
              <Grid item xs={12} md={6} sx={deviceType === 'mobile' ? { display: 'none' } : { display: 'inline-block' }}>
                <Title value={`${t(messages.Input_IntroductionList_PsyaQuestionnaires())}`} />
              </Grid>
              <Grid item container xs={12} md={6} justifyContent={'left'}>
                <Input placeholder={`${t(messages.Input_Global_SearchAssessment())}`} icon={'Search'} type={'text'} onChange={(e) => setState({ name: e.target.value })} />
              </Grid>
            </Grid>

            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent sx={{ p: '16px !important' }}>
                    {role === 'agent' && (
                      <>
                        {state.name.length !== 0 && questionnaires.length === 0 ? (
                          <NoResult />
                        ) : (
                          <Paper sx={deviceType === 'mobile' ? { height: 'calc(93vh - 140px)', overflow: 'auto', mt: 0 } : { height: 'calc(93vh - 140px)', overflow: 'auto', mt: 2 }} elevation={0}>
                            <Grid container spacing={2} sx={{ width: '100%' }}>
                              {questionnaires.map((item, i) => {
                                return item.status !== -1 ? (
                                  <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                                    <Items item={item} index={i} />
                                  </Grid>
                                ) : null;
                              })}
                            </Grid>
                          </Paper>
                        )}
                      </>
                    )}
                    {role === 'user' && (
                      <>
                        {state.name.length !== 0 && packages.length === 0 ? (
                          <NoResult />
                        ) : (
                          <Paper
                            sx={
                              deviceType === 'web'
                                ? { height: 'calc(93vh - 180px)', overflow: 'auto' }
                                : {
                                    height: '63vh',
                                    overflow: 'auto',
                                  }
                            }
                            elevation={0}>
                            <Grid container spacing={2} sx={{ width: '100%' }}>
                              {packages.map((item, i) => {
                                return (
                                  <Grid key={i} item xs={12} md={6} lg={3}>
                                    <PackageItems item={item} index={i} order={orderAssessments} />
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </Paper>
                        )}
                      </>
                    )}
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
