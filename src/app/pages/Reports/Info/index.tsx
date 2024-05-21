import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Button, Checkbox, MicroCard, Text, Title } from 'components';
import Items from './Items';
import { Util } from 'utils';
import { useDebounceFn } from 'ahooks';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { assessmentShowOne, getQuestionnaireUser } from '../Logic';
import { useSelector } from 'react-redux';
import { testHttp } from 'api';

export default function Index() {
  const { t } = useTranslation();
  const location = useLocation();
  const ID = qs.parse(location.search, { ignoreQueryPrefix: true }).id;
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const owner_id = Util.extractID();
  // const result: any = useSelector<any>((res) => res.assessmentShowOne);
  const [questionnaires, setQuestionnaires] = useState<any[]>([]);
  const [assessment, setAssessment] = useState<any>({});
  const [assessmentUsers, setAssessmentUsers] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number>();
  const [totalPage, setTotalPages] = useState<number>(1);
  const [data, setData] = useState<any>({});
  const [checkedUsers, setCheckedUsers] = useState<any>([]);
  const [checkAllUsers, setCheckAllUsers] = useState<boolean>(false);
  const [checkSomeUsers, setCheckSomeUsers] = useState<boolean>(false);
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState<string | number>();
  const [selectedQuestionnaireResultType, setSelectedQuestionnaireResultType] = useState<any>({});
  const [isSelectedAll, setIsSelectedAll] = useState<number>(0);
  const [fullBtn, setFullBtn] = useState<boolean>(true);
  const [briefBtn, setBriefBtn] = useState<boolean>(true);
  const renderAfterCalled = React.useRef(false);
  const usersList: any = useSelector<any>((res) => res.assessmentUsersByQuestionnaire);
  // const resultTest: any = useSelector<any>((res) => res.testResult);

  useEffect(() => {
    localStorage.setItem('reportResult', JSON.stringify([]));
    if (checkedUsers.length >= 1) {
      if (selectedQuestionnaireResultType.multi === 1) {
        setFullBtn(false);
      } else {
        setFullBtn(true);
      }
    } else {
      setFullBtn(true);
    }
    if (checkedUsers.length < 1) {
      setCheckSomeUsers(false);
      setCheckAllUsers(false);
    }
    if (checkedUsers.length === 1) {
      if (selectedQuestionnaireResultType.single === 1) {
        if (selectedQuestionnaireResultType.brief === 1) {
          setBriefBtn(false);
        } else {
          setBriefBtn(true);
        }
        if (selectedQuestionnaireResultType.full === 1) {
          setFullBtn(false);
        } else {
          setFullBtn(true);
        }
      }
    } else {
      setBriefBtn(true);
    }
  }, [checkedUsers]);

  useEffect(() => {
    Util.StorageInitializer();
    if (!renderAfterCalled.current) {
      getAssessment();
      getQuestionnaireUsers().then((r) => r);
    }
  }, []);

  const getAssessment = () => {
    try {
      // const result = await assessmentHttp.showOneAssessment(ID);
      assessmentShowOne(ID).then((r) => {
        console.log('', r?.data);
        setAssessment(r?.data.data);
        setQuestionnaires(r?.data.data.questionnaires);
        selectItem(r?.data.data.questionnaires[0]);
      });
    } catch (error) {}
  };

  useEffect(() => {
    try {
      setTotalPages(usersList.data.pagination.last_page);
      setAssessmentUsers(usersList.data.data.users);
      if (data.pageNumber > usersList.data.pagination.last_page) {
        setPageNumber(usersList.data.pagination.last_page);
      }
    } catch (e) {}
  }, [usersList]);

  const getQuestionnaireUsers = async (arg?: any) => {
    try {
      await getQuestionnaireUser(ID, selectedQuestionnaire, data);
      // const resultList = await reportHttp.usersByQuestionnaire({
      //   owner_id,
      //   assessment_id: selectedAssessment,
      //   questionnaire_id: selectedQuestionnaire,
      //   per_page: 10,
      //   page: data.pageNumber,
      // });
      // setTotalPages(res.data.pagination.last_page);
      // setAssessmentUsers(res.data.data.users);
      // if (data.pageNumber > res.data.pagination.last_page) {
      //   setPageNumber(res.data.pagination.last_page);
      // }
    } catch (error) {
      // console.log('report list error: ', error);
    }
  };

  const reportDataSet = async (type) => {
    const isFullType = type === 'full';
    localStorage.setItem('reportOption', JSON.stringify([{ full: isFullType, group: localStorage.complex }]));
    try {
      const reqData = {
        tests: checkedUsers,
        questionnaires_id: [selectedQuestionnaire],
        owner_id: owner_id,
        result_type: type,
        assessment_id: ID,
        select_all: isSelectedAll,
      };
      const result = await testHttp.showReport(reqData);
      // await testResult(checkedUsers, selectedQuestionnaire, type, selectedAssessment, isSelectedAll);
      localStorage.setItem('reportResult', JSON.stringify(result));
      navigate('/report/initial');
    } catch (error) {
      // console.log('Report Result=>', error);
    }
  };

  useEffect(() => {
    if (selectedQuestionnaire) {
      (async () => {
        await getQuestionnaireUsers();
      })();
    }
  }, [selectedQuestionnaire]);

  const { run } = useDebounceFn(
    (argData?: any) => {
      (async () => {
        await getQuestionnaireUsers(argData);
      })();
      setCheckAllUsers(false);
    },
    {
      wait: 2000,
    },
  );

  useEffect(() => {
    if (data.pageNumber) {
      run(data);
    }
  }, [data]);

  useEffect(() => {
    if (checkAllUsers) {
      selectAllUsers();
      setIsSelectedAll(1);
      localStorage.setItem('complex', 'true');
    } else {
      deCheckedAllUsers();
      setIsSelectedAll(0);
      localStorage.setItem('complex', 'false');
    }
  }, [checkAllUsers]);

  const deCheckedAllUsers = () => {
    setCheckedUsers([]);
  };

  const selectAllUsers = () => {
    let tempCheckedUsers: any = [...checkedUsers];
    assessmentUsers.map((user) => {
      if (user.questionnaire_results_status === 3) {
        tempCheckedUsers.push(user.test_id);
      }
    });
    tempCheckedUsers = _.uniq(tempCheckedUsers);
    setCheckedUsers(tempCheckedUsers);
  };

  const checkItems = (user) => {
    let tempChecks: any = [...checkedUsers];
    if (_.includes(tempChecks, user.test_id)) {
      _.remove(tempChecks, (value) => {
        return value === user.test_id;
      });
      if (tempChecks.length < assessmentUsers.length) {
        setCheckSomeUsers(true);
      }
    } else {
      tempChecks.push(user.test_id);
      if (tempChecks.length === assessmentUsers.length) {
        setCheckSomeUsers(false);
        setCheckAllUsers(true);
      } else {
        setCheckSomeUsers(true);
      }
    }
    tempChecks = _.uniq(tempChecks);
    if (tempChecks.length > 1) {
      localStorage.setItem('complex', 'true');
    }
    setCheckedUsers(tempChecks);
  };

  const selectItem = async (argData) => {
    await getQuestionnaireUsers();
    setSelectedQuestionnaire(argData.id);
    setSelectedQuestionnaireResultType(JSON.parse(argData.RESULT_TYPE));
  };
  const NoUser = () => {
    return (
      <>
        <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {t(messages.Text_Global_NoUser())}
            </Text>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
      <Grid container spacing={2} sx={{ height: '93vh' }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item container justifyContent={'space-between'} alignItems={'center'}>
                  <Grid item>
                    <Title value={assessment !== undefined && assessment.name} />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Card variant={'outlined'}>
                    <CardContent>
                      <Grid item container xs={12} direction={'row'} spacing={2}>
                        <Grid item>
                          <Title value={`${t(messages.Input_Global_Questionnaires())}`} />
                        </Grid>
                        <Grid item xs={12} sx={{ marginBottom: '10px' }}>
                          <Text variant={'web14'}>{t(messages.Index_ReportsInfo_UserList())}</Text>
                        </Grid>
                        <Grid item container spacing={2}>
                          {questionnaires.map((item, i) => {
                            return (
                              <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                                <MicroCard id={item.id} onClick={() => selectItem(item)} label={item.name} active={item.id === selectedQuestionnaire} />
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
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ minHeight: '50vh' }}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Grid item container spacing={1} justifyContent={'space-between'}>
                        <Grid item>
                          <Title value={`${t(messages.Input_Global_Participants())}`} />
                        </Grid>
                        {assessmentUsers.length === 0 ? (
                          <NoUser />
                        ) : (
                          <>
                            <Grid item container direction={deviceType === 'web' ? 'column-reverse' : 'column'}>
                              <Grid item container spacing={1} justifyContent={'space-between'} sx={deviceType === 'mobile' ? { py: 0 } : { py: 0 }}>
                                {selectedQuestionnaire && (
                                  <Grid item md={5} sx={{ pr: 1.5 }}>
                                    <Checkbox
                                      labelStyle={{ paddingRight: '4px' }}
                                      label={`${t(messages.Input_Global_SelectAll())}`}
                                      weight={'regular'}
                                      checked={checkAllUsers}
                                      onChange={() => {
                                        setCheckAllUsers(!checkAllUsers);
                                      }}
                                      indeterminate={checkSomeUsers}
                                    />
                                  </Grid>
                                )}
                                {/* todo: سرچ نداره */}
                                {/*<Grid item md={5} xs={6}>*/}
                                {/*  <DropDown defaultValue={''}>*/}
                                {/*    <MenuItem value={''}>همه موارد</MenuItem>*/}
                                {/*    {[...assessmentStatus].map((item) => (*/}
                                {/*      <MenuItem value={item.id} key={item.id}>*/}
                                {/*        {item.name}*/}
                                {/*      </MenuItem>*/}
                                {/*    ))}*/}
                                {/*  </DropDown>*/}
                                {/*</Grid>*/}
                              </Grid>
                              {/*<Grid item container justifyContent={'end'}>*/}
                              {/*  <Grid item md={5} xs={12}>*/}
                              {/*    <Input placeholder={'شرکت کننده موردنظر خود را جستجو کنید'} icon={'Search'} type={'text'}*/}
                              {/*           onChange={(e) => setData({ name: e.target.value })} />*/}
                              {/*  </Grid>*/}
                              {/*</Grid>*/}
                            </Grid>
                          </>
                        )}
                      </Grid>
                      <Paper style={{ height: 'calc(45vh - 110px)', overflow: 'auto', width: '100%' }} elevation={0}>
                        <Grid item container spacing={1} style={{ width: '100%' }}>
                          {assessmentUsers.map((item, i) => {
                            return (
                              <Grid key={i} item xs={12}>
                                <Items item={item} checked={_.includes(checkedUsers, item.test_id)} checkItems={checkItems} index={i} />
                              </Grid>
                            );
                          })}
                        </Grid>
                        {totalPage > 1 && (
                          <Grid item container justifyContent={'center'} sx={{ mt: 2 }}>
                            <Grid item>
                              <Pagination
                                count={totalPage}
                                siblingCount={1}
                                variant='outlined'
                                color='secondary'
                                shape='rounded'
                                size={'small'}
                                renderItem={(item) => <PaginationItem slots={{ previous: ChevronRightRounded, next: ChevronLeftRounded }} {...item} />}
                                onChange={(event, num) => setData({ pageNumber: num })}
                              />
                            </Grid>
                          </Grid>
                        )}
                      </Paper>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={4} lg={3} xl={2}>
                    <Button color={'primary'} type={'contained'} label={`${t(messages.Input_Global_BriefReport())}`} fullWidth={true} onClick={() => reportDataSet('brief')} disabled={briefBtn} />
                  </Grid>
                  <Grid item xs={12} md={4} lg={3} xl={2}>
                    <Button color={'primary'} type={'contained'} label={`${t(messages.Input_Global_FullReport())}`} fullWidth={true} onClick={() => reportDataSet('full')} disabled={fullBtn} />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
