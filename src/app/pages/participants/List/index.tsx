import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Card, CardContent, Grid, MenuItem, Pagination, PaginationItem, Paper } from '@mui/material';
import Items from './items';
import { Service, Util } from 'utils';
import { BottomSheetDialog, Button, Checkbox, Confirm, DropDown, IconButton as IconBtn, Input, List, Prompt, ReportSelector, SMS, Text, Title } from 'components';
import { useDebounceFn, useSetState } from 'ahooks';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { assignToAssessment, getAssessmentList, getUserList, groupShowList, refreshAssessmentList, refreshUserList, removeDialog, removeItem, userShowOne } from '../Logic';
import { store } from '../../../../redux/store/Store';
import { setAlert } from '../../../../redux/action/creators';
import i18n from 'i18next';
interface State {
  name: string;
  scope_name: string;
  sex: string;
  pageNumber: number;
  group: any[];
}

export default function Users() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const assessmentList: any = useSelector<any>((res) => res.assessmentShowList);
  const groupList: any = useSelector<any>((res) => res.groupShowList);
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const renderAfterCalled = useRef(false);

  const owner_id = Util.extractID();

  const [groups, setGroups] = useState<any>([]);
  const [users, setUsers] = useState<any[]>([]);
  const gender = [
    { id: 1, name: `${t(messages.Input_Global_Male())}` },
    { id: 2, name: `${t(messages.Input_Global_Female())}` },
  ];
  const report = [
    { id: 2, value: `${t(messages.Input_Global_BriefReportShow())}` },
    { id: 3, value: `${t(messages.Input_Global_FullReportShow())}` },
  ];
  const [openAssignModal, setOpenAssignModal] = useState<boolean>(false);
  const [UIAssessmentList, setUIAssessmentList] = useState<any>([]);
  const [disable, setDisable] = useState<boolean>(true);
  const [sendSMS, setSendSMS] = useState<boolean>(false);
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  const [reportType, setReportType] = useState<number>(1);
  const [checkedUsers, setCheckedUsers] = useState<any>([]);
  const [checkAllUsers, setCheckAllUsers] = useState<boolean>(false);
  const [checkSomeUsers, setCheckSomeUsers] = useState<boolean>(false);
  const [assignModalBtn, setAssignModalBtn] = useState<boolean>(false);
  const [promptID, setPromptID] = useState('');
  const [totalPage, setTotalPages] = useState<number>(1);
  const [state, setState] = useSetState<State>({
    name: '',
    scope_name: '',
    sex: '',
    group: [],
    pageNumber: 1,
  });
  useEffect(() => {
    if (!renderAfterCalled.current) {
      // fetchList().then((r) => r); get
      fetchUserList();
      // fetchAssessmentList().then((r) => r); get
      getAssessmentList(state).then((r) => {
        setUIAssessmentList(r?.data.data.assessments);
      });

      fetchGroups().then((r) => r); //todo: change after redux
    }
  }, []);

  const fetchUserList = () => {
    try {
      getUserList().then((r) => {
        setUsers(r?.data.data.users);
        setTotalPages(r?.data.pagination.last_page);
      });
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   try {
  //     setUsers(userList.data.data.users);
  //     setTotalPages(userList.data.pagination.last_page);
  //   } catch (e) {}
  // }, [userList]);

  const fetchGroups = async () => {
    try {
      // const resultList = await groupHttp.groupList({
      //   owner_id,
      // });
      groupShowList();
      setGroups(groupList.data.data.groups);
      // setGroups(resultList.data.data.groups);
    } catch (error) {
      // console.log('List error: ', error);
    }
  };

  useEffect(() => {
    try {
      setGroups(groupList.data.data.groups);
    } catch (error) {
      console.log(error);
    }
  });
  const assignAssessment = async () => {
    setOpenAssignModal(false);
    try {
      await assignToAssessment(selectedAssessment, reportType, checkedUsers, sendSMS);
      store.dispatch(setAlert(true, 'success', `${i18n.t(messages.Alert_GetAssessmentUser_Success())}`, 'Done') as any);
      setCheckedUsers([]);
      getAssessmentList(state).then((r) => {
        setUIAssessmentList(r?.data.data.assessments);
      });
    } catch (error) {
      store.dispatch(setAlert(true, 'error', `${i18n.t(messages.Alert_GetAssessmentUser_Error())}`, 'Alert') as any);
    }
  };

  const { run } = useDebounceFn(
    () => {
      // await fetchList(); refresh
      refreshUserList(state);
      // setCheckAllUsers(false);
    },
    {
      wait: 2000,
    },
  );

  useEffect(() => {
    run();
    console.log('state');
  }, [state]);
  const dialog = (id) => {
    setPromptID(id);
    removeDialog();
  };

  const toForm = (id?: string) => {
    if (id) {
      userShowOne(id);
      navigate(`/users/edit/?id=${id}`);
    } else {
      navigate(`/users/new`);
    }
  };

  const handleAssignModal = () => {
    setOpenAssignModal(!openAssignModal);
    setSelectedAssessment(null);
  };

  const handleAssessmentSelection = (event) => {
    setSelectedAssessment(Number(event.target.value));
  };
  const deCheckedAllUsers = () => {
    setCheckedUsers([]);
  };
  useEffect(() => {
    if (checkedUsers.length >= 1 && checkedUsers.length === users.length) {
      setCheckSomeUsers(false);
      setCheckAllUsers(true);
    } else if (checkedUsers.length >= 1 && checkedUsers.length < users.length) {
      setCheckSomeUsers(true);
      setCheckAllUsers(false);
    } else {
      setCheckSomeUsers(false);
      setCheckAllUsers(false);
    }
    if (checkedUsers.length >= 1) {
      setAssignModalBtn(true);
    } else {
      setAssignModalBtn(false);
    }
  }, [checkedUsers]);

  useEffect(() => {
    if (checkAllUsers) selectAllUsers();
    else if (checkedUsers.length < 1 && !checkAllUsers) deCheckedAllUsers();
  }, [checkAllUsers]);

  const checkItems = (user) => {
    let tempChecks = [...checkedUsers];
    if (_.includes(tempChecks, user.id)) {
      _.remove(tempChecks, (value) => {
        return value === user.id;
      });
    } else {
      tempChecks.push(user.id);
    }
    tempChecks = _.uniq(tempChecks);
    setCheckedUsers(tempChecks);
  };

  const removeUser = () => {
    removeItem(promptID).then(() => fetchUserList());
    deCheckedAllUsers();
    Service.Prompt('');
  };

  const selectAllUsers = () => {
    let tempCheckedUsers = [...checkedUsers];
    users.map((user) => tempCheckedUsers.push(user.id));
    tempCheckedUsers = _.uniq(tempCheckedUsers);
    setCheckedUsers(tempCheckedUsers);
  };

  const deSelectAllUsers = () => {
    setCheckedUsers([]);
    deCheckedAllUsers;
  };
  const EmptyParticipant = () => {
    return (
      <>
        <Grid item xs={12}>
          <Card variant='outlined'>
            <CardContent>
              <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(93vh - 400px)' }}>
                <Grid item>
                  <Text type={'title2'} variant={fontSize} weight={'bold'}>
                    {t(messages.Text_Global_NoResult())}
                  </Text>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  };
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={`${t(messages.Input_ParticipantsList_ParticipantsList())}`} />
            </Grid>
            <Grid item container alignItems={'center'} direction={deviceType === 'mobile' ? 'row-reverse' : 'row'} spacing={1}>
              {deviceType === 'web' ? (
                <Grid item xs={2} md={4} lg={6}>
                  <Button type={'outlined'} label={`${t(messages.Input_Global_AddUser())}`} onClick={() => toForm()} />
                </Grid>
              ) : (
                <Grid item xs={2} md={4} lg={6} justifyContent={'flex-end '} display={'flex'}>
                  <IconBtn type={'contained'} onClick={() => toForm()} icon={'Add'} />
                </Grid>
              )}
              <Grid item xs={10} md={8} lg={6}>
                <Input
                  placeholder={`${t(messages.Input_ParticipantsList_SearchParticipant())}`}
                  icon={'Search'}
                  type={'text'}
                  onChange={(e) => setState({ scope_name: e.target.value, pageNumber: 1 })}
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent>
                    <Grid container>
                      <Grid item container alignItems={'center'}>
                        <Grid item md={3} sx={deviceType === 'mobile' ? { display: 'none' } : { paddingRight: '10px' }}>
                          <Checkbox
                            labelStyle={{ paddingRight: '10px' }}
                            id={0}
                            label={`${t(messages.Input_Global_SelectAll())}`}
                            weight={'regular'}
                            disabled={users.length === 0}
                            checked={checkAllUsers}
                            onChange={() => {
                              setCheckAllUsers(!checkAllUsers);
                              deCheckedAllUsers();
                            }}
                            indeterminate={checkSomeUsers}
                          />
                        </Grid>
                        <Grid item container md={9} spacing={1} justifyContent={'space-between'} sx={{ marginBottom: '10px' }}>
                          <Grid item xs={6}>
                            <DropDown defaultValue={0} label={`${t(messages.Input_Global_Gender())}`} onChange={(e) => setState({ sex: e.target.value, pageNumber: 1 })}>
                              <MenuItem value={0}>{t(messages.Input_Global_All())}</MenuItem>
                              {[...gender].map((item) => (
                                <MenuItem value={item.id} key={item.id}>
                                  {item.name}
                                </MenuItem>
                              ))}
                            </DropDown>
                          </Grid>
                          <Grid item xs={6}>
                            <DropDown defaultValue={0} label={`${t(messages.Input_Global_Group())}`} onChange={(e) => setState({ group: e.target.value, pageNumber: 1 })}>
                              <MenuItem value={0}>{t(messages.Input_Global_All())}</MenuItem>
                              {[...groups].map((item) => (
                                <MenuItem value={item.id} key={item.id}>
                                  {item.name}
                                </MenuItem>
                              ))}
                            </DropDown>
                          </Grid>
                        </Grid>
                      </Grid>
                      {state.name.length === 0 && users.length === 0 ? (
                        <EmptyParticipant />
                      ) : (
                        <>
                          <Paper style={{ height: 'calc(93vh - 400px)', overflow: 'auto', width: '100%' }} elevation={0}>
                            <Grid item container spacing={1} sx={{ width: '100%' }}>
                              {users.map((item, i) => {
                                return item.status !== 1 ? (
                                  <Grid item xs={12} key={i}>
                                    <Items checked={_.includes(checkedUsers, item.id)} remove={dialog} edit={toForm} item={item} index={i} checkItems={checkItems} />
                                  </Grid>
                                ) : null;
                              })}
                            </Grid>
                          </Paper>
                        </>
                      )}
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
                            renderItem={(item) => <PaginationItem components={{ previous: ChevronRightRounded, next: ChevronLeftRounded }} {...item} />}
                            onChange={(event, num) => setState({ pageNumber: num })}
                          />
                        </Grid>
                      </Grid>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'} sx={{ mt: '16px' }}>
              <Grid item xs={12} md={3} lg={2}>
                <Button color='primary' type={'contained'} fullWidth={true} label={`${t(messages.Input_Global_GetAssessment())}`} onClick={handleAssignModal} disabled={!assignModalBtn} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <BottomSheetDialog fullWidth open={openAssignModal} onClose={handleAssignModal}>
        <Grid container>
          <Grid item xs={12} sx={deviceType === 'web' ? { marginBottom: 'calc(5px + 7vh)' } : { marginBottom: 'calc(5px + 2vh)' }}>
            <Title value={`${t(messages.Input_Global_GetAssessment())}`} />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 'calc(5px + 5vh)' }}>
            <List data={UIAssessmentList} variant={fontSize} handle={handleAssessmentSelection} />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: '10px' }}>
            <Text variant={'web14'}>{t(messages.Text_Global_ReportToParticipant())}</Text>
          </Grid>
          <ReportSelector data={report} state={setDisable} type={setReportType} disable={selectedAssessment !== null ? disable : true} radioDisable={selectedAssessment === null} />
          <Confirm assign={assignAssessment} disable={selectedAssessment === null}>
            <SMS iS_SMS={setSendSMS} check={sendSMS} disable={selectedAssessment === null} />
          </Confirm>
        </Grid>
      </BottomSheetDialog>
      <Prompt
        accept={() => {
          removeUser();
        }}
      />
    </>
  );
}
