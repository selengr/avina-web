import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Menu, MenuItem, Pagination, PaginationItem, Paper, Snackbar, Tooltip } from '@mui/material';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import _, { constant } from 'lodash';
import {
  Alert,
  BottomSheet,
  BottomSheetDialog,
  Button,
  Checkbox,
  Confirm,
  Divide,
  DropDown,
  Icons,
  Input,
  Item,
  MicroCard,
  Prompt,
  ReportSelector,
  SMS,
  Stepper,
  Switch,
  Text,
  Title,
  UserListItem,
} from 'components';
import { Util } from 'utils';
import { useDebounceFn, useSetState } from 'ahooks';
import Items from './Items';
import { ChevronLeftRounded, ChevronRightRounded, MoreVert } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

import {
  assessmentOrder,
  assessmentsStatus,
  assessmentsUsersInfo,
  cancelUserAssignment,
  changeAssessmentStatus,
  deleteAssessment,
  getAssessment,
  getAssessmentUsers,
  getUserList,
  refreshAssessmentUsersList,
  removeUserDialog,
  userAssignAssessment,
} from '../Logic';

type Props = {
  title: string;
  value: string | number;
  divider?: boolean;
};

type State = {
  name: string;
  scope_name: string;
  status: string;
  pageNumber: string | number;
};

type UserState = {
  name: string;
  scope_name: string;
  pageNumber: string | number;
};

export default function Index() {
  const { t } = useTranslation();
  const location = useLocation();
  const ID = qs.parse(location.search, { ignoreQueryPrefix: true }).id;
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const assessmentUserInfo: any = assessmentsUsersInfo();
  // const userList: any = useSelector<any>((res) => res.userShowList);
  const assessmentState: any = assessmentsStatus();
  const [assessmentStatus, setAssessmentStatus] = React.useState<any>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const renderAfterCalled = useRef(false);
  const status = [
    { id: 3, name: `${t(messages.Input_Global_TestComplete())}` },
    { id: 2, name: `${t(messages.Input_Global_TestCompleting())}` },
    { id: 1, name: `${t(messages.Input_Global_TestNotComplete())}` },
  ];
  const report = [
    { id: 2, value: `${t(messages.Input_Global_BriefReportShow())}` },
    { id: 3, value: `${t(messages.Input_Global_FullReportShow())}` },
  ];
  const [state, setState] = useSetState<State>({
    name: '',
    scope_name: '',
    status: '',
    pageNumber: 1,
  });
  const [userState, setUserState] = useSetState<UserState>({
    name: '',
    scope_name: '',
    pageNumber: 1,
  });
  const owner_id = Util.extractID();
  const [delBtn, setDelBtn] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [questionnaires, setQuestionnaires] = useState<any[]>([]);
  const [assessment, setAssessment] = useState<any>({});
  const [assessmentUsers, setAssessmentUsers] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPages] = useState<number>(1);
  const [capacityModal, setCapacityModal] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [sendSMS, setSendSMS] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);
  const [searchedUsers, setSearchedUsers] = useState<any[]>([]);
  const [totalSearchedPage, setTotalSearchedPages] = useState(0);
  const [openAssignModal, setOpenAssignModal] = useState<boolean>(false);
  const [reportType, setReportType] = useState<number>(1);
  const [checkedUsers, setCheckedUsers] = useState<any>([]);
  const [checkAllUsers, setCheckAllUsers] = useState<boolean>(false);
  const [checkSomeUsers, setCheckSomeUsers] = useState<boolean>(false);
  const [selectedUsers, setSelectedUsers] = useState<any>([]);
  const [selectedAllUsers, setSelectedAllUsers] = useState<boolean>(false);
  const [selectedSomeUsers, setSelectedSomeUsers] = useState<boolean>(false);
  const [assignModalBtn, setAssignModalBtn] = useState<boolean>(false);
  const [checkedAll, setCheckedAll] = useState<boolean>(false);
  const [openCapacityAlert, setOpenCapacityAlert] = useState<boolean>(false);
  // const [capacityAlert, setCapacityAlert] = useState<boolean>(false)
  const selectedAssessment = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).id;

  useEffect(() => {
    try {
      getUsersList();
      getAssessmentUsers(state);
      getAssessment(ID).then((res) => {
        setAssessment(res?.data.data);
        setQuestionnaires(res?.data.data.questionnaires);
        setAssessmentStatus(res?.data.data.status);
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      {
        assessmentState.data.data !== undefined && setAssessmentStatus(assessmentState.data.data.status);
      }
    } catch (error) {}
  }, [assessmentState]);

  function setCheck(data) {
    let temp: boolean = false;
    for (const checked in data) {
      if (data[checked].test_status !== 3) {
        temp = false;
      } else {
        temp = true;
      }
    }
    setCheckedAll(temp);
  }

  useEffect(() => {
    try {
      setTotalPages(assessmentUserInfo.data.pagination.last_page);
      setAssessmentUsers(assessmentUserInfo.data.data.users);
      if (state.pageNumber > assessmentUserInfo.data.pagination.last_page) {
        setPageNumber(assessmentUserInfo.data.pagination.last_page);
      }
      setCheck(assessmentUserInfo.data.data.users);
    } catch (error) {}
  }, [assessmentUserInfo]);

  useEffect(() => {
    refreshAssessmentUsersList(state);
  }, [pageNumber]);

  useEffect(() => {
    if (checkedUsers.length >= 1 && checkedUsers.length === assessmentUsers.length) {
      setCheckSomeUsers(false);
      setCheckAllUsers(true);
    } else if (checkedUsers.length >= 1 && checkedUsers.length < assessmentUsers.length) {
      setCheckSomeUsers(true);
      setCheckAllUsers(false);
    } else {
      setCheckSomeUsers(false);
      setCheckAllUsers(false);
    }
    if (checkedUsers.length >= 1) {
      setDelBtn(true);
    } else {
      setDelBtn(false);
    }
  }, [checkedUsers]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const changeItemStatus = async () => {
    try {
      // await dispatch(AssessmentActivation(id, { activation: assessment !== undefined && assessment.status === 1 ? 0 : 1 }) as any);
      await changeAssessmentStatus(ID, assessmentStatus);
      // await getAssessment(id);
    } catch (error) {
      // console.log('change status error', error);
    } finally {
      // navigate(`?id=${ID}`, {replace: true});
    }
  };

  const editItem = (id) => {
    navigate(`/assessment/edit/?id=${id}`);
  };

  const orderAssessment = async () => {
    if (quantity > 0) {
      await assessmentOrder(quantity);
      handleCapacityModal();
      const result = await Util.GetMe();
      // if (result.status === 200) {
      // navigate('/');
      // }
    }
  };

  const disableUncheck = () => {
    cancelUserAssignment();
    deCheckedAllUsers();
  };

  const handleCapacityModal = () => {
    setCapacityModal(!capacityModal);
  };

  const getUsersList = () => {
    getUserList(userState).then((r) => {
      setSearchedUsers(r?.data.data.users);
      setTotalSearchedPages(r?.data.pagination.last_page);
    });
  };
  const { run } = useDebounceFn(
    () => {
      refreshAssessmentUsersList(state);
      getUsersList();
      setCheckAllUsers(false);
    },
    {
      wait: 2000,
    },
  );

  useEffect(() => {
    run();
  }, [state, userState]);

  const handleUserModal = () => {
    deCheckedAllUsers();
    // getAllUsers().then((r) => r);
    setUserModal(!userModal);
    setSelectedUsers([]);
  };

  const handleAssignModal = () => {
    setOpenAssignModal(!openAssignModal);
    setDisable(true);
    setReportType(1);
    setCheckedAll(!checkedAll);
  };

  const assignAssessment = async () => {
    setUserModal(false);
    setOpenAssignModal(false);
    userAssignAssessment(ID, selectedAssessment, reportType, selectedUsers, sendSMS, state);
    setSelectedUsers([]);
    setDisable(true);
    setReportType(1);
  };

  useEffect(() => {
    if (selectedUsers.length >= 1 && selectedUsers.length === searchedUsers.length) {
      setSelectedSomeUsers(false);
      setSelectedAllUsers(true);
    } else if (selectedUsers.length >= 1 && selectedUsers.length < searchedUsers.length) {
      setSelectedSomeUsers(true);
      setSelectedAllUsers(false);
    } else {
      setSelectedSomeUsers(false);
      setSelectedAllUsers(false);
    }
    if (selectedUsers.length >= 1) {
      setAssignModalBtn(true);
    } else {
      setAssignModalBtn(false);
    }
  }, [selectedUsers]);

  useEffect(() => {
    if (checkAllUsers) selectAllUsers();
    else if (checkedUsers.length < 1 && !checkAllUsers) deCheckedAllUsers();
  }, [checkAllUsers]);

  useEffect(() => {
    if (selectedAllUsers) selectAll();
    else if (searchedUsers.length < 1 && !selectAllUsers) deSelectAllUsers();
  }, [selectedAllUsers]);

  const deSelectAllUsers = () => {
    setSelectedUsers([]);
  };

  const deCheckedAllUsers = () => {
    setCheckedUsers([]);
  };

  const selectAllUsers = () => {
    let tempCheckedUsers = [...checkedUsers];
    assessmentUsers.map((user) => {
      if (user.test_status !== 3) {
        tempCheckedUsers.push(user.test_id);
      }
    });
    tempCheckedUsers = _.uniq(tempCheckedUsers);
    setCheckedUsers(tempCheckedUsers);
  };

  const selectAll = () => {
    let tempCheckedUsers = [...selectedUsers];
    searchedUsers.map((user) => {
      if (assessment.capacity >= tempCheckedUsers.length) {
        tempCheckedUsers.push(user.id);
      } else {
        setOpenCapacityAlert(true);
      }
    });
    tempCheckedUsers = _.uniq(tempCheckedUsers);
    setSelectedUsers(tempCheckedUsers);
  };

  const handleCloseSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenCapacityAlert(false);
  };
  const checkUser = (user) => {
    let tempChecks = [...selectedUsers];
    if (_.includes(tempChecks, user.id)) {
      _.remove(tempChecks, (value) => {
        return value === user.id;
      });
    } else {
      if (assessment.capacity > tempChecks.length) {
        tempChecks.push(user.id);
      } else {
        setOpenCapacityAlert(true);
      }
    }
    tempChecks = _.uniq(tempChecks);
    setSelectedUsers(tempChecks);
  };

  const checkItems = (user) => {
    let tempChecks = [...checkedUsers];
    if (_.includes(tempChecks, user.test_id)) {
      _.remove(tempChecks, (value) => {
        return value === user.test_id;
      });
    } else {
      tempChecks.push(user.test_id);
    }
    tempChecks = _.uniq(tempChecks);
    setCheckedUsers(tempChecks);
  };
  const Spec = ({ title, value, divider }: Props) => {
    return (
      <>
        <Grid item xs={6} md={2} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <Grid item container md={12} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
            <Grid item>
              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                {title}
              </Text>
            </Grid>
            <Grid item>
              <Divide />
            </Grid>
            <Grid item>
              <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                {value}
              </Text>
            </Grid>
          </Grid>
          {divider && <Divider orientation='vertical' variant='middle' flexItem />}
        </Grid>
      </>
    );
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
  const NoResult = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: '20vh' }}>
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
      <Grid container spacing={1} direction={'column'}>
        <Grid item>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item container justifyContent={'space-between'} alignItems={'center'}>
                  <Grid item>
                    <Title value={assessment !== undefined && assessment.name} />
                  </Grid>
                  <Grid item>
                    <IconButton
                      id='basic-button'
                      aria-controls='basic-menu'
                      aria-haspopup='true'
                      aria-expanded={open ? 'true' : undefined}
                      color={'primary'}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleClick(event);
                      }}
                      onFocus={(event) => event.stopPropagation()}>
                      <MoreVert fontSize={'small'} color={'primary'} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item container spacing={2} sx={deviceType === 'mobile' ? { display: 'none' } : { display: 'flex' }}>
                  <Grid item>
                    <Button type={'contained'} label={`${t(messages.Input_Assessment_AddCapacity())}`} fullWidth onClick={handleCapacityModal} />
                  </Grid>
                  <Grid item>
                    <Button
                      type={'outlined'}
                      label={`${t(messages.Input_Global_AddUser())}`}
                      fullWidth
                      onClick={handleUserModal}
                      disabled={assessment !== undefined && assessment.not_assigned_count === 0}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Card variant={'outlined'}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Text variant={fontSize}>{assessment !== undefined && assessment.description}</Text>
                        </Grid>
                        <Grid item xs={12}>
                          <Paper variant={'outlined'} sx={{ p: '10px' }}>
                            <Grid container justifyContent={deviceType === 'mobile' ? 'center' : 'space-between'} flexDirection={'row'}>
                              <Spec title={`${t(messages.Input_Global_Capacity())}`} value={assessment !== undefined && assessment.capacity} divider />
                              <Spec title={`${t(messages.Input_Global_Participants())}`} value={assessment !== undefined && assessment.assigned_count} divider={deviceType !== 'mobile'} />
                              <Spec title={`${t(messages.Input_Assessment_RemainCapacity())}`} value={assessment !== undefined && assessment.not_assigned_count} divider />
                              <Spec title={`${t(messages.Input_Global_TestComplete())}`} value={assessment !== undefined && assessment.answered_count} divider={deviceType !== 'mobile'} />
                              <Spec
                                title={`${t(messages.Input_Global_UnitPrice())}`}
                                value={`${assessment !== undefined && assessment.unit_price}${t(messages.Text_Global_Cost())}`}
                                divider={deviceType !== 'web' && deviceType !== 'mobile'}
                              />
                            </Grid>
                          </Paper>
                        </Grid>
                        <Grid item container xs={12} direction={'column'} spacing={1}>
                          <Grid item>
                            <Title value={`${t(messages.Input_Global_Questionnaires())}`} />
                          </Grid>
                          <Grid item container spacing={2}>
                            {questionnaires.map((item, i) => {
                              return (
                                <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                                  <MicroCard label={item.name} type={'test'} />
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            {deviceType === 'mobile' ? (
              <BottomSheet open={open} onClose={handleClose}>
                <Grid container spacing={1} sx={{ px: 1 }}>
                  <Item>
                    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                      <Grid item>
                        <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                          {t(messages.Text_Global_AssessmentSituation())}
                        </Text>
                      </Grid>
                      <Grid item>
                        <Switch onChange={changeItemStatus} checked={assessmentStatus !== undefined ? assessmentStatus === 1 : false} label={''} />
                      </Grid>
                    </Grid>
                  </Item>
                  <Item icon={'Add'} onClick={handleCapacityModal}>
                    <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                      {t(messages.Input_Assessment_AddCapacity())}
                    </Text>
                  </Item>

                  <Item icon={'User'} onClick={handleUserModal}>
                    <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                      {t(messages.Input_Global_AddUser())}
                    </Text>
                  </Item>

                  <Item icon={'Edit'} onClick={() => editItem(ID)}>
                    <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                      {t(messages.Input_Global_EditAssessments())}
                    </Text>
                  </Item>

                  <Item icon={'Trash'} disabled={assessmentStatus !== undefined ? assessmentStatus === 1 : false} onClick={() => deleteAssessment(ID)}>
                    <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                      {t(messages.Input_Global_DeleteAssessment())}
                    </Text>
                  </Item>
                </Grid>
              </BottomSheet>
            ) : (
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}>
                <Grid container spacing={1} sx={{ px: 1, width: '165px' }}>
                  <Grid item xs={12}>
                    <Button type={'outlined'} label={`${t(messages.Input_Global_EditAssessments())}`} fullWidth onClick={() => editItem(ID)} />
                  </Grid>
                  <Grid item xs={12}>
                    <Tooltip title={assessment !== undefined && assessment.status === 1 ? `${t(messages.Tooltip_Global_DeleteAssessment())}` : ''} arrow>
                      <span>
                        <Button
                          type={'outlined'}
                          label={`${t(messages.Input_Global_DeleteAssessment())}`}
                          fullWidth
                          onClick={() => deleteAssessment(ID)}
                          disabled={assessmentStatus !== undefined ? assessmentStatus === 1 : false}
                        />
                      </span>
                    </Tooltip>
                  </Grid>
                  <Grid item xs={12}>
                    <Switch
                      onChange={changeItemStatus}
                      checked={assessmentStatus !== undefined ? assessmentStatus === 1 : false}
                      label={
                        <Text variant={fontSize} type={'body'} weight={'regular'}>
                          {t(messages.Text_Global_AssessmentSituation())}
                        </Text>
                      }
                    />
                  </Grid>
                </Grid>
              </Menu>
            )}
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minHeight: '43vh' }}>
            <CardContent>
              <Grid container>
                <Grid item spacing={1} justifyContent={'space-between'}>
                  <Title value={`${t(messages.Input_Global_Participants())}`} />
                </Grid>
                {/*         {state.name.length === 0 && assessmentUsers.length === 0 ? (
                  <NoUser/>
                ) : (

                )}*/}
                {assessmentUsers.length > 0 ? (
                  <>
                    <Grid container spacing={1} direction={deviceType === 'web' ? 'column-reverse' : 'column'} sx={{ paddingLeft: 2 }}>
                      <Grid item container justifyContent={'space-between'} alignItems={'center'} sx={deviceType === 'mobile' ? { py: 0 } : { py: 2 }}>
                        <Grid item sx={deviceType === 'mobile' ? { display: 'none' } : { pr: 1 }} md={4}>
                          <Checkbox
                            labelStyle={{ paddingRight: '4px' }}
                            disabled={checkedAll}
                            weight={'regular'}
                            label={`${t(messages.Input_Global_SelectAll())}`}
                            checked={checkAllUsers}
                            onChange={() => {
                              setCheckAllUsers(!checkAllUsers);
                              deCheckedAllUsers();
                            }}
                            indeterminate={checkSomeUsers}
                          />
                        </Grid>
                        <Grid item md={5} xs={6}>
                          <DropDown defaultValue={0} onChange={(e) => setState({ status: e.target.value, pageNumber: 1 })}>
                            <MenuItem value={0}>{t(messages.Input_Global_All())}</MenuItem>
                            {[...status].map((item) => (
                              <MenuItem value={item.id} key={item.id}>
                                {item.name}
                              </MenuItem>
                            ))}
                          </DropDown>
                        </Grid>
                        <Grid item>
                          <Button type={'outlined'} label={`${t(messages.Input_Global_DeleteSome())}`} fullWidth onClick={() => removeUserDialog(checkedUsers)} disabled={!delBtn} />
                        </Grid>
                      </Grid>
                      <Grid item container justifyContent={'end'}>
                        <Grid item md={5} xs={12}>
                          <Input placeholder={`${t(messages.Input_Global_SearchParticipant())}`} icon={'Search'} type={'text'} onChange={(e) => setState({ name: e.target.value, pageNumber: 1 })} />
                        </Grid>
                      </Grid>
                    </Grid>
                    {(state.name.length !== 0 || state.status !== '0') && assessmentUsers.length === 0 ? (
                      <NoResult />
                    ) : (
                      <>
                        {/*<Paper sx={{ height: 'calc(30vh - 110px)', overflow: 'auto', width: '100%', pt: 1 }} elevation={0}>*/}
                        <Paper sx={{ overflow: 'auto', width: '100%', pt: 1 }} elevation={0}>
                          <Grid item container spacing={1} style={{ width: '100%' }}>
                            {assessmentUsers.map((item, i) => {
                              return (
                                <Grid key={i} item xs={12}>
                                  <Items item={item} checked={_.includes(checkedUsers, item.test_id)} cancelAssignment={() => removeUserDialog([item.test_id])} checkItems={checkItems} />
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Paper>
                        {/*<Paper sx={{overflow: 'auto', width: '100%', pt: 1}} elevation={0}>*/}
                        {/*  <Grid item container spacing={1} style={{width: '100%'}}>*/}
                        {/*    {assessmentUsers.map((item, i) => {*/}
                        {/*      return (<Grid key={i} item xs={12}>*/}
                        {/*        <Items item={item} checked={_.includes(checkedUsers, item.test_id)} cancelAssignment={() => {*/}
                        {/*          // setUserID([item.test_id]);*/}
                        {/*          removeUserDialog([item.test_id])*/}
                        {/*        }} checkItems={checkItems}/>*/}
                        {/*      </Grid>);*/}
                        {/*    })}*/}
                        {/*  </Grid>*/}
                        {/*</Paper>*/}
                      </>
                    )}
                  </>
                ) : (
                  <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'} marginTop={10}>
                    <Grid item>
                      <Text type={'title2'} variant={fontSize} weight={'bold'}>
                        {`${t(messages.Input_Global_NO_Participants())}`}
                      </Text>
                    </Grid>
                  </Grid>
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
                      renderItem={(item) => <PaginationItem slots={{ previous: ChevronRightRounded, next: ChevronLeftRounded }} {...item} />}
                      onChange={(event, num) => setState({ pageNumber: num })}
                    />
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <BottomSheetDialog size={'lg'} fullWidth open={capacityModal} onClose={handleCapacityModal}>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: '20px' }}>
            <Title value={`${t(messages.Input_Assessment_AddCapacity())}`} />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: '38px' }}>
            <Text variant={fontSize}>{t(messages.Text_AddToCartExplanation())}</Text>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 'calc(8vh)' }}>
            <Card variant='outlined' style={{ padding: '10px' }}>
              <Grid container alignItems={'center'} justifyContent={'space-between'} spacing={1}>
                <Grid item md={5} xs={12}>
                  <Text variant={deviceType === 'web' ? 'web16' : 'mobile12'} weight={'bold'}>
                    {assessment !== undefined && assessment.name}
                  </Text>
                </Grid>
                <Grid item md={5}>
                  <Stepper value={quantity} onChange={(e) => setQuantity(e.target.value)} onClickDown={() => quantity > 0 && setQuantity(quantity - 1)} onClickUp={() => setQuantity(quantity + 1)} />
                </Grid>
                <Grid item md={2}>
                  <Text variant={deviceType === 'web' ? 'web14' : 'mobile10'} weight={'bold'} style={{ textAlign: 'center' }}>
                    {quantity * Number(assessment !== undefined && assessment.unit_price)} {t(messages.Text_Global_Cost())}
                  </Text>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item container justifyContent={'center'}>
            <Grid item md={3} xs={12}>
              <Button type={'contained'} label={`${t(messages.Input_Global_AddToCart())}`} fullWidth onClick={orderAssessment} />
            </Grid>
          </Grid>
        </Grid>
      </BottomSheetDialog>
      <BottomSheetDialog size={'lg'} fullWidth open={userModal} onClose={handleUserModal}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ marginBottom: '20px' }}>
            <Title value={`${t(messages.Input_Global_AddUser())}`} />
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxHeight: '63vh' }} variant={'outlined'}>
              <CardContent>
                <Grid container>
                  <Grid item container justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 1 }}>
                    <Grid item sx={deviceType === 'mobile' ? { display: 'none' } : { paddingRight: '10px' }}>
                      <Checkbox
                        labelStyle={{ paddingRight: '4px' }}
                        label={`${t(messages.Input_Global_SelectAll())}`}
                        weight={'regular'}
                        checked={selectedAllUsers}
                        onChange={() => {
                          setSelectedAllUsers(!selectedAllUsers);
                          deSelectAllUsers();
                        }}
                        indeterminate={selectedSomeUsers}
                      />
                    </Grid>
                    <Grid item md={5} xs={12}>
                      <Input placeholder={`${t(messages.Input_Assessment_SearchUser())}`} icon={'Search'} type={'text'} onChange={(e) => setUserState({ scope_name: e.target.value, pageNumber: 1 })} />
                    </Grid>
                  </Grid>
                  <Paper style={{ height: 'calc(63vh - 95px)', overflow: 'auto', width: '100%' }} elevation={0}>
                    <Grid item container spacing={1} style={{ width: '100%' }}>
                      {searchedUsers.map((item, i) => {
                        return (
                          <Grid key={i} item xs={12}>
                            <UserListItem item={item} checked={_.includes(selectedUsers, item.id)} checkItems={checkUser} />
                          </Grid>
                        );
                      })}
                    </Grid>
                    {totalSearchedPage > 1 && (
                      <Grid item container justifyContent={'center'}>
                        <Grid item>
                          <Pagination count={totalSearchedPage} siblingCount={1} variant='outlined' color='primary' size={'small'} onChange={(event, num) => setUserState({ pageNumber: num })} />
                        </Grid>
                      </Grid>
                    )}
                  </Paper>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item container md={12} justifyContent={'center'}>
            <Grid item xs={12} md={2}>
              <Button type={'contained'} label={`${t(messages.Input_Global_NextStep())}`} fullWidth onClick={handleAssignModal} disabled={!assignModalBtn} />
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
          message={<Alert severity={'warning'} message={'بیش از ظرفیت موجود نمیتوانید انتخاب کنید'} icon={'Alert'} />}
          autoHideDuration={3000}
          open={openCapacityAlert}
          onClose={handleCloseSnackBar}
          ContentProps={{
            sx: {
              background: 'none',
              width: '100%',
              border: 'none',
            },
          }}
          //  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          // sx={{ minWidth: '60%', maxWidth: '100%' }}
        />
      </BottomSheetDialog>

      <Dialog open={openAssignModal} onClose={handleAssignModal} maxWidth={'md'}>
        <DialogTitle sx={{ p: 1 }} id='alert-dialog-title'>
          <Grid container>
            <Grid item>
              <IconButton onClick={handleAssignModal}>
                <Icons name={'Close'} />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent sx={deviceType === 'web' ? { padding: '41px 102px 40px 98px' } : { padding: '30px' }}>
          <Grid container>
            <Grid item xs={12} sx={{ marginBottom: 'calc(5px + 7vh)' }}>
              <Title value={`${t(messages.Input_Assessment_ShowReports())}`} />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '10px' }}>
              <Text variant={fontSize} weight={'medium'}>
                {t(messages.Text_Global_ReportToParticipant())}
              </Text>
            </Grid>
            <ReportSelector data={report} state={setDisable} disable={disable} type={setReportType} />
            <Confirm assign={assignAssessment}>
              <SMS iS_SMS={setSendSMS} check={sendSMS} />
            </Confirm>
          </Grid>
        </DialogContent>
      </Dialog>

      <Prompt accept={() => disableUncheck()} />
    </>
  );
}

export { Index as AssessmentInfo };
