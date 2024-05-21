import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import Items from './items';
import Item from '../Info/items';
import { BottomSheetDialog, Button, Checkbox, Input, Title, UserListItem } from 'components';
import { useDebounceFn, useSetState } from 'ahooks';
import qs from 'qs';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from 'redux/action/creators';
import { setAlert } from 'redux/action/creators';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Util } from 'utils';
import { addNewUsers, getAllUsers, getGroupList, getGroupShowOne, groupCreat, groupEdit, refreshAllUsers, refreshUserList } from '../Logic';
import { store } from 'redux/store/Store';

interface State {
  pageNumber: number;
  groupId: any;
}

interface UserState {
  pageNumber: number;
  name: string;
  scope_name: string;
  add_to_group: any;
}

interface FieldType {
  value: string;
  error: string;
}

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const deviceType = Util.ScreenSize();
  const owner_id = Util.extractID();
  const pageID = qs.parse(location.search, { ignoreQueryPrefix: true }).id;
  const [users, setUsers] = useState<any>([]);
  const [allUsers, setAllUsers] = useState<any>([]);
  const [state, setState] = useSetState<State>({
    groupId: pageID,
    pageNumber: 1,
  });
  const [userState, setUserState] = useSetState<UserState>({
    name: '',
    scope_name: '',
    pageNumber: 1,
    add_to_group: Number(pageID) ? Number(pageID) : '',
  });
  const [Modal, setModal] = useState<boolean>(false);
  const [checkedUsers, setCheckedUsers] = useState<any>([]);
  const [checkAllUsers, setCheckAllUsers] = useState<boolean>(false);
  const [checkSomeUsers, setCheckSomeUsers] = useState<boolean>(false);
  const [tempUsers, setTempUsers] = useState<any>([]);
  const [checkedNewUsers, setCheckedNewUsers] = useState<any>([]);
  const [checkAllNewUsers, setCheckAllNewUsers] = useState<boolean>(false);
  const [checkSomeNewUsers, setCheckSomeNewUsers] = useState<boolean>(false);
  const [totalPage, setTotalPages] = useState<number>(1);
  const [totalModalPageNumber, setTotalModalPageNumber] = useState<number>(1);
  const [pageTitle, setPageTitle] = useState<string>('');
  const [groupName, setGroupName] = useState<FieldType>({ value: '', error: '' });
  // const [assignModalBtn, setAssignModalBtn] = useState<boolean>(false);
  const [groupDescription, setGroupDescription] = useState<FieldType>({ value: '', error: '' });

  const [removedUsers, setRemovedUsers] = useState<number[]>([]);
  const groupList: any = useSelector<any>((res) => res.groupShowOne);
  const resultList: any = useSelector<any>((res) => res.userShowList);
  const allResultList: any = useSelector<any>((res) => res.allUserShowList);
  const addGroupResponse: any = useSelector<any>((res) => res.groupCreate);
  const editGroupResponse: any = useSelector<any>((res) => res.groupEdit);
  const [addedUsers, setAddedUsers] = useState<number[]>([]);

  useEffect(() => {
    if (location.pathname.includes('edit')) {
      groupDetails().then((r) => r);
      setState({ groupId: pageID });
    } else {
      setPageTitle(`${t(messages.Input_Global_AddGroup())}`);
      setState({ groupId: '' });
    }
    // getUserList(state);
  }, []);

  const removeUser = () => {
    try {
      let tempRemUsers: any[] = users;
      for (let i = 0; i <= checkedUsers.length - 1; i++) {
        tempRemUsers = tempRemUsers.filter(function (item) {
          return item.id !== checkedUsers[i];
        });
      }

      setUsers(tempRemUsers);

      const remUsers: any = [...checkedUsers];
      const remTemp: any = removedUsers;
      remTemp.push(remUsers);
      setRemovedUsers(remTemp.flat(1));

      setCheckedUsers([]);
      // await groupHttp.removeUser({
      //   owner_id: owner_id,
      //   group_id: pageID,
      //   users: checkedUsers,
      // });
      // await fetchList();
      dispatch(
        setAlert(true, 'success', checkedUsers.length === 1 ? `${t(messages.Alert_Global_Success_DeleteParticipant())}` : `${t(messages.Alert_GroupForm_Success_DeleteParticipants())}`, 'Done') as any,
      );
    } catch (error) {
      // console.log('error in get one group', error);
      dispatch(
        setAlert(true, 'error', checkedNewUsers.length === 1 ? `${t(messages.Alert_Global_Error_DeleteParticipant())}` : `${t(messages.Alert_GroupForm_Error_DeleteParticipants())}`, 'Done') as any,
      );
    }
  };

  const addUser = async () => {
    const groupUsers = location.pathname.includes('new') ? users : users.flat(1);
    const temp = addNewUsers(groupUsers, allUsers, checkedNewUsers, addedUsers);
    try {
      // const tempAddUsers: any[] = users;
      // const tempAllUsers: any[] = allUsers;
      // for (let i = 0; i < checkedNewUsers.length; i++) {
      //   tempAddUsers.push(tempAllUsers.filter((obj) => obj.id === checkedNewUsers[i])[0]);
      // }
      // const temp: any[] = tempAddUsers.reduce((unique, o) => {
      //   if (!unique.some((obj) => obj.id === o.id)) {
      //     unique.push(o);
      //   }
      //   return unique;
      // }, []);
      // setUsers(temp);
      const addUsers: any = [temp];
      const tempCheckedNewUsers: any = [...checkedNewUsers];
      const addTemp: any = addedUsers;
      addTemp.push(_.uniq(tempCheckedNewUsers));
      setUsers(_.uniq(addUsers.flat(2)));
      setAddedUsers(_.uniq(addTemp.flat(1)));
      setCheckedNewUsers([]);
      // await groupHttp.addUser({
      //   owner_id: owner_id,
      //   group_id: id,
      //   users: users,
      // });
      // await fetchList();
    } catch (error) {
      //todo :check pls
      // console.log('error in get one group', error);
      // dispatch(setAlert(true, 'error', checkedNewUsers.length === 1 ? `${t(messages.Alert_Global_Error_AddParticipant())}` : `${t(messages.Alert_GroupForm_Error_AddParticipants())}`, 'Done') as any);
    }
  };

  // const fetchList = async () => {
  //   await dispatch(
  //     UserShowList({
  //       owner_id,
  //       group_id: state.group,
  //       name: '',
  //       page: state.pageNumber,
  //       per_page: 50,
  //     }) as any,
  //   );
  // };
  useEffect(() => {
    try {
      if (location.pathname.includes('edit')) {
        setUsers(groupList.data.data.users);
        setTotalPages(resultList.data.pagination.last_page);
      }
    } catch (e) {}
  }, [resultList, groupList]);

  const openModal = () => {
    setModal(true);
    (async () => {
      await getAllUsers(userState);
    })();
  };

  useEffect(() => {
    try {
      setAllUsers(allResultList.data.data.users);
      setTotalModalPageNumber(allResultList.data.pagination.last_page);
    } catch (e) {}
  }, [allResultList]);

  const groupDetails = async () => {
    await getGroupShowOne(pageID);
    // await dispatch(GroupShowOne(owner_id, pageID) as any);
  };

  useEffect(() => {
    if (pageID) {
      try {
        setPageTitle(groupList.data.data.name);
        setGroupName({ ...groupName, value: groupList.data.data.name, error: '' });
        setGroupDescription({ ...groupDescription, value: groupList.data.data.description, error: '' });
      } catch (e) {}
    }
  }, [groupList]);

  const handleSubmit = async () => {
    const createGroupData = {
      owner_id: owner_id,
      name: groupName.value,
      description: groupDescription.value,
      add_users: addedUsers,
    };
    const editGroupData = {
      owner_id: owner_id,
      name: groupName.value,
      description: groupDescription.value,
      add_users: addedUsers,
      remove_users: removedUsers,
    };
    try {
      if (pageID == null) {
        // const result = await dispatch(GroupCreat(createGroupData) as any);
        await groupCreat(createGroupData);
        // if (checkedNewUsers) {
        //   // console.log('result.data.data.id', result.data.data.id);
        //   // await addUser(checkedNewUsers, result.data.data.id);
        // }
        // getGroupList().then(() => navigate('/groups/'));

        // navigate(`/groups/info/?id=${}`);
      } else {
        // await dispatch(GroupEdit(pageID, editGroupData) as any);
        await groupEdit(pageID, editGroupData);
        // navigate('/groups/');
        // getGroupList().then(() => navigate('/groups/'));
      }
    } catch (error) {
      // console.log('create item error: ', error);
    } finally {
      try {
      } catch (e) {}
    }
  };

  useEffect(() => {
    try {
      if (addGroupResponse.data.success) {
        getGroupList().then(() => navigate('/groups/'));
        store.dispatch(Action.GroupCreat(undefined, 'reset') as any);
      }
      if (editGroupResponse.data.success) {
        getGroupList().then(() => {
          navigate('/groups/');
          store.dispatch(Action.GroupEdit(undefined, undefined, 'reset') as any);
        });
      }
    } catch (e) {
    } finally {
    }
  }, [addGroupResponse, editGroupResponse]);

  const { run } = useDebounceFn(
    () => {
      refreshUserList(state);
      refreshAllUsers(userState);
      setCheckAllUsers(false);
    },
    {
      wait: 2000,
    },
  );
  const deCheckedAllUsers = () => {
    setCheckedUsers([]);
  };
  const deCheckedAllNewUsers = () => {
    setCheckedNewUsers([]);
  };

  useEffect(() => {
    run();
  }, [state, userState]);

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
    // if (checkedUsers.length >= 1) {
    //   setAssignModalBtn(true);
    // } else {
    //   setAssignModalBtn(false);
    // }
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

  const checkUser = (user) => {
    let tempChecks = [...checkedNewUsers];
    if (_.includes(tempChecks, user.id)) {
      _.remove(tempChecks, (value) => {
        return value === user.id;
      });
    } else {
      tempChecks.push(user.id);
    }
    tempChecks = _.uniq(tempChecks);
    setCheckedNewUsers(tempChecks);

    const temp = [...tempUsers];
    if (_.includes(tempChecks, user.id)) {
      temp.push(user);
    }
    setTempUsers(temp);
  };

  useEffect(() => {
    if (checkedNewUsers.length >= 1 && checkedNewUsers.length === allUsers.length) {
      setCheckSomeNewUsers(false);
      setCheckAllNewUsers(true);
    } else if (checkedNewUsers.length >= 1 && checkedNewUsers.length < allUsers.length) {
      setCheckSomeNewUsers(true);
      setCheckAllNewUsers(false);
    } else {
      setCheckSomeNewUsers(false);
      setCheckAllNewUsers(false);
    }
    // if (checkedNewUsers.length >= 1) {
    //   setAssignModalBtn(true);
    // } else {
    //   setAssignModalBtn(false);
    // }
  }, [checkedNewUsers]);

  useEffect(() => {
    if (checkAllUsers) selectAllUsers();
    else if (checkedUsers.length < 1 && !checkAllUsers) deCheckedAllUsers();
  }, [checkAllUsers]);

  useEffect(() => {
    if (checkAllNewUsers) selectAllNewUsers();
    else if (checkedNewUsers.length < 1 && !checkAllNewUsers) deCheckedAllNewUsers();
  }, [checkAllNewUsers]);
  const selectAllNewUsers = () => {
    let tempCheckedUsers = [...checkedNewUsers];
    allUsers.map((user) => tempCheckedUsers.push(user.id));
    tempCheckedUsers = _.uniq(tempCheckedUsers);
    setCheckedNewUsers(tempCheckedUsers);
  };

  const selectAllUsers = () => {
    let tempCheckedUsers = [...checkedUsers];
    users.map((user) => tempCheckedUsers.push(user.id));
    tempCheckedUsers = _.uniq(tempCheckedUsers);
    setCheckedUsers(tempCheckedUsers);
  };

  // const deSelectAllUsers = () => {
  //   setCheckedUsers([]);
  // };
  //
  // const deSelectAllNewUsers = () => {
  //   setCheckedNewUsers([]);
  // };

  const addUserToGroup = async () => {
    setModal(false);
    // location.pathname.includes('edit') && addUser(checkedNewUsers, pageID); // Old Method
    // location.pathname.includes('edit') && addUser();
    await addUser();
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item>
                  <Title value={pageTitle} />
                </Grid>
                <Grid item container alignItems={'center'} direction={'row'} spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Input
                      label={`${t(messages.Input_GroupForm_GroupName())}`}
                      type={'text'}
                      value={groupName.value}
                      error={groupName.error.length >= 1}
                      errorMsg={groupName.error}
                      onChange={(e) => setGroupName({ ...groupName, value: e.target.value, error: '' })}
                      onBlur={(e) =>
                        e.target.value.length < 1
                          ? setGroupName({
                              ...groupName,
                              error: `${t(messages.Input_GroupForm_Errors_GroupName())}`,
                            })
                          : setGroupName({ ...groupName, error: '' })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      label={`${t(messages.Input_GroupForm_GroupDescription())}`}
                      type={'text'}
                      value={groupDescription.value}
                      error={groupDescription.error.length >= 1}
                      errorMsg={groupDescription.error}
                      onChange={(e) => setGroupDescription({ ...groupDescription, value: e.target.value, error: '' })}
                      onBlur={(e) =>
                        e.target.value.length < 1
                          ? setGroupDescription({
                              ...groupDescription,
                              error: `${t(messages.Input_GroupForm_Errors_GroupDescription())}`,
                            })
                          : setGroupDescription({ ...groupDescription, error: '' })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Grid container>
                        <Grid item container direction={location.pathname.includes('edit') ? 'row' : 'row-reverse'}>
                          {location.pathname.includes('edit') && (
                            <Grid item xs={12} md={4} sx={{ paddingRight: '10px', alignItems: 'center', display: 'flex' }}>
                              <Checkbox
                                labelStyle={{ paddingRight: '10px' }}
                                id={0}
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
                          )}
                          <Grid item container xs={12} md={8} spacing={1} sx={{ justifyContent: 'flex-end' }} direction={deviceType == 'mobile' ? 'column' : 'row'}>
                            <Grid item xs={6}>
                              <Button type={'outlined'} label={`${t(messages.Input_Global_AddUser())}`} fullWidth onClick={openModal} />
                            </Grid>
                            {location.pathname.includes('edit') && (
                              <Grid item xs={6}>
                                <Button type={'outlined'} label={`${t(messages.Input_Global_DeleteSome())}`} fullWidth onClick={removeUser} disabled={checkedUsers.length <= 0} />
                              </Grid>
                            )}
                          </Grid>
                        </Grid>
                        <Paper style={{ height: 'calc(93vh - 460px)', overflow: 'auto', width: '100%', marginTop: 10 }} elevation={0}>
                          <Grid item container spacing={1} style={{ width: '100%' }}>
                            {location.pathname.includes('edit') ? (
                              <>
                                {users.map((item, i) => {
                                  return item.status !== -1 ? (
                                    <Grid item xs={12} key={i}>
                                      <Items checked={_.includes(checkedUsers, item.id)} item={item} index={i} checkItems={checkItems} />
                                    </Grid>
                                  ) : null;
                                })}
                              </>
                            ) : (
                              <>
                                {users.map((item, i) => {
                                  return item.status !== -1 ? (
                                    <Grid item xs={12} key={i}>
                                      <Item item={item} index={i} />
                                    </Grid>
                                  ) : null;
                                })}
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
                                  renderItem={(item) => (
                                    <PaginationItem
                                      components={{
                                        previous: ChevronRightRounded,
                                        next: ChevronLeftRounded,
                                      }}
                                      {...item}
                                    />
                                  )}
                                  onChange={(event, num) => setState({ pageNumber: num })}
                                />
                              </Grid>
                              `
                            </Grid>
                          )}
                        </Paper>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid item container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ mt: '16px' }}>
                <Grid item xs={12} md={4} lg={2}>
                  <Button
                    color={'primary'}
                    type={'contained'}
                    disabled={groupDescription.value.length === 0 || groupName.value.length === 0}
                    onClick={handleSubmit}
                    label={location.pathname.includes('edit') ? `${t(messages.Input_GroupForm_SubmitChanges())}` : `${t(messages.Input_GroupForm_SubmitGroup())}`}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={2}>
                  <Button color={'primary'} type={'outlined'} label={`${t(messages.Input_Global_Cancel())}`} fullWidth={true} onClick={() => navigate(`/groups/`)} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <BottomSheetDialog size={'lg'} fullWidth open={Modal} onClose={() => setModal(false)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ marginBottom: '20px' }}>
            <Title value={`${t(messages.Input_Global_AddUser())}`} />
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxHeight: '63vh' }} className={'overflowY-hidden'} variant={'outlined'}>
              <CardContent>
                <Grid container>
                  <Grid item container justifyContent={'space-between'} alignItems={'center'}>
                    {deviceType === 'web' && (
                      <Grid item sx={{ paddingRight: '10px' }}>
                        <Checkbox
                          labelStyle={{ paddingRight: '4px' }}
                          label={`${t(messages.Input_Global_SelectAll())}`}
                          weight={'regular'}
                          checked={checkAllNewUsers}
                          onChange={() => {
                            setCheckAllNewUsers(!checkAllNewUsers);
                            deCheckedAllNewUsers();
                          }}
                          indeterminate={checkSomeNewUsers}
                        />
                      </Grid>
                    )}
                    <Grid item md={6} xs={12}>
                      <Input placeholder={`${t(messages.Input_GroupForm_SearchUser())}`} icon={'Search'} type={'text'} onChange={(e) => setUserState({ scope_name: e.target.value, pageNumber: 1 })} />
                    </Grid>
                  </Grid>
                  <Paper style={{ height: 'calc(63vh - 95px)', overflow: 'auto', width: '100%', marginTop: '10px' }} elevation={0}>
                    <Grid item container spacing={1} style={{ width: '100%' }}>
                      {allUsers.map((item, i) => {
                        return (
                          <Grid key={i} item xs={12}>
                            <UserListItem item={item} checked={_.includes(checkedNewUsers, item.id)} checkItems={checkUser} />
                          </Grid>
                        );
                      })}
                    </Grid>
                    {totalModalPageNumber > 1 && (
                      <Grid item container justifyContent={'center'} sx={{ mt: 2 }}>
                        <Grid item>
                          <Pagination
                            count={totalModalPageNumber}
                            siblingCount={1}
                            variant='outlined'
                            color='secondary'
                            shape='rounded'
                            size={'small'}
                            renderItem={(item) => <PaginationItem slots={{ previous: ChevronRightRounded, next: ChevronLeftRounded }} {...item} />}
                            onChange={(event, num) => setUserState({ pageNumber: num })}
                          />
                        </Grid>
                      </Grid>
                    )}
                  </Paper>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item container xs={12} justifyContent={'center'}>
            <Grid item xs={12} md={3}>
              <Button type={'contained'} label={`${t(messages.Input_GroupForm_AddUsers())}`} fullWidth onClick={addUserToGroup} disabled={checkedNewUsers.length <= 0} />
            </Grid>
          </Grid>
        </Grid>
      </BottomSheetDialog>
    </>
  );
}

export { Index as GroupForm };
