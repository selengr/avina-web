import { useEffect, useState } from 'react';
import { Util } from 'utils';
import { Card, CardContent, Grid } from '@mui/material';
import { Text, Title } from 'components';
import { testHttp } from 'api';
import ListItem from './items';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const userData = Util.userAllData();
  const fontSize = Util.DefaultFontSize();
  const owner_id = Util.extractID();
  const [tests, setTests] = useState<any[]>([]);
  const [isDone, setIsDone] = useState<any[]>([]);
  const [isUnDone, setIsUnDone] = useState<any[]>([]);
  const [role, setRole] = useState<string>('');

  function search(data) {
    const filterRoleType = data.filter((o) => o.roleType === userData.data.data.last_role_type);
    return filterRoleType.filter((o) => o.id === userData.data.data.last_role);
  }

  const getList = async () => {
    try {
      const result = await testHttp.userTest(owner_id); // should Be change to owner_id
      setTests(result.data.data.tests);
    } catch (error) {
      // console.log('Error Tests', error);
    }
  };

  const checkTests = () => {
    const unDone: any[] = tests.filter((test) => test.status === 1);
    const inProgress: any[] = tests.filter((test) => test.status === 2);
    const done: any[] = tests.filter((test) => test.status === 3);
    const unDones: any[] = unDone.concat(inProgress);
    setIsUnDone(unDones);
    setIsDone(done);
  };

  useEffect(() => {
    const type = search(userData.roles)[0].type;
    if (type === 1) {
      setRole('user');
    }
    getList().then((r) => r);
  }, []);

  useEffect(() => {
    checkTests();
  }, [tests]);

  const EmptyAssessment = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(100vh - 200px)' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {role === 'user' ? `${t(messages.Text_MyAssessmentList_AssignmentAssessmentUser())}` : `${t(messages.Text_MyAssessmentList_AssignmentAssessment())}`}
            </Text>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
      <Card sx={deviceType === 'web' ? { minHeight: '93vh' } : { minHeight: '80vh' }}>
        <CardContent sx={{ pb: '16px !important' }}>
          <Grid container spacing={2}>
            <Grid item container justifyContent={'space-between'}>
              <Grid item>
                <Title value={`${t(messages.Input_Global_MyAssessmentList())}`} />
              </Grid>
              {/* todo: There is no search */}
              {/*<Grid item xs={12} md={6}>*/}
              {/*  <Input placeholder={`${t(messages.Input_Global_SearchAssessment())}`} icon={'Search'} type={'text'} />*/}
              {/*</Grid>*/}
            </Grid>
            {isDone.length === 0 && isUnDone.length === 0 ? (
              <EmptyAssessment />
            ) : (
              <>
                {isUnDone.length >= 1 && (
                  <Grid item xs={12}>
                    <Card variant={'outlined'}>
                      <CardContent sx={{ pb: '16px !important' }}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Title value={`${t(messages.Input_MyAssessmentList_UnDoneAssessment())}`} />
                          </Grid>
                          <Grid item xs={12} sx={{ py: '20px' }}>
                            <Text variant={fontSize} weight={'bold'}>
                              {t(messages.Text_MyAssessmentList_CompleteAssessment())}
                            </Text>
                          </Grid>
                          <Grid item container spacing={2}>
                            {isUnDone.map((item, i) => {
                              return (
                                <Grid item xs={12} md={6} lg={4} xl={3} key={i}>
                                  <ListItem item={item} />
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                {isDone.length > 0 && (
                  <Grid item xs={12}>
                    <Card variant={'outlined'}>
                      <CardContent sx={{ pb: '16px !important' }}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Title value={`${t(messages.Input_MyAssessmentList_DoneAssessment())}`} />
                          </Grid>
                          <Grid item xs={12} sx={{ py: '20px' }}>
                            <Text variant={fontSize} weight={'bold'}>
                              {t(messages.Text_MyAssessmentList_ShowReport())}
                            </Text>
                          </Grid>
                          <Grid item container spacing={2}>
                            {isDone.map((item, i) => {
                              return (
                                <Grid item xs={12} md={6} lg={4} xl={3} key={i}>
                                  <ListItem item={item} />
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
