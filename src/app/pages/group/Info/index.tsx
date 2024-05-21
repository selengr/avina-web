import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Util } from 'utils';
import { useDebounceFn, useSetState } from 'ahooks';
import qs from 'qs';
import { Button, IconButton as IconBtn, Text, Title } from 'components';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getGroupShowOne, getUserList, refreshUserList } from '../Logic';
import Items from './items';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';

interface State {
  name: string;
  scope_name: string;
  groupId: any;
  pageNumber: number;
}

export default function Index() {
  const renderAfterCalled = useRef(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const result: any = useSelector<any>((res) => res.groupShowOne);
  const userList: any = useSelector<any>((res) => res.userShowList);
  const [details, setDetails] = useState<any>(result.data.data);
  const [users, setUsers] = useState<any>(userList.data);
  const pageID = qs.parse(location.search, { ignoreQueryPrefix: true }).id;
  const [state, setState] = useSetState<State>({
    name: '',
    scope_name: '',
    groupId: pageID,
    pageNumber: 1,
  });

  // const fetchList = async () => {
  //   try {
  //     await dispatch(
  //       UserShowList({
  //         owner_id,
  //         group_id: qs.parse(location.search, { ignoreQueryPrefix: true }).id,
  //         name: state.name,
  //         sort_by: 'id',
  //         order: 'desc',
  //         page: state.pageNumber,
  //         per_page: 50,
  //       }) as any,
  //     );
  //     setUsers(resultList.data.data.users);
  //     setTotalPages(resultList.data.pagination.last_page);
  //   } catch (error) {
  //     // console.log('list error: ', error);
  //   }
  // };

  useEffect(() => {
    if (!renderAfterCalled.current) {
      getUserList(state);
      getGroupShowOne(state.groupId);
    }
  }, []);

  useEffect(() => {
    try {
      setDetails(result.data.data);
      setUsers(userList.data);
    } catch (e) {}
  }, [result, userList]);

  const { run } = useDebounceFn(
    () => {
      refreshUserList(state);
    },
    {
      wait: 2000,
    },
  );

  // useEffect(() => {
  //   return () => {
  //     run();
  //   };
  // }, [state]);

  const toForm = (id?: string) => {
    navigate(`/group/edit/?id=${id}`);
  };
  const EmptyUsers = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(93vh - 200px)' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {t(messages.Input_GroupList_NoUser())}
            </Text>
          </Grid>
        </Grid>
      </>
    );
  };
  const NoResult = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(93vh - 200px)' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {t(messages.Text_Global_NoResult())}
            </Text>
          </Grid>
        </Grid>
      </>
    );
  };
  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={details !== undefined && details.name} />
            </Grid>
            <Grid item container alignItems={'center'} direction={deviceType === 'mobile' ? 'row-reverse' : 'row'} spacing={1}>
              {deviceType === 'web' ? (
                <Grid item xs={2} md={6}>
                  <Button type={'outlined'} label={`${t(messages.Input_Global_EditGroup())}`} onClick={() => toForm(details !== undefined && details.id)} />
                </Grid>
              ) : (
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconBtn type={'contained'} onClick={() => toForm(details !== undefined && details.id)} icon={'Edit'} />
                </Grid>
              )}
              {/*{state.name.length === 0 && users.length === 0 ? (*/}
              {/*  ''*/}
              {/*) : (*/}
              {/*  <Grid item xs={10} md={6}>*/}
              {/*    <Input*/}
              {/*      name={'Search'}*/}
              {/*      placeholder={`${t(messages.Input_Global_SearchParticipant())}`}*/}
              {/*      icon={'Search'}*/}
              {/*      type={'text'}*/}
              {/*      onChange={(e) => {*/}
              {/*        setState({ scope_name: e.target.value, pageNumber: 1 }), run();*/}
              {/*      }}*/}
              {/*    />*/}
              {/*  </Grid>*/}
              {/*)}*/}
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent>
                    <Grid container>
                      <Grid item container alignItems={'center'}>
                        <Grid item>
                          <Text variant={fontSize} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                            {details !== undefined && details.description}
                          </Text>
                        </Grid>
                      </Grid>
                      {state.name.length === 0 && details !== undefined && details.users.length === 0 ? (
                        <EmptyUsers />
                      ) : state.name.length !== 0 && details !== undefined && details.users.length === 0 ? (
                        <NoResult />
                      ) : (
                        <>
                          <Paper style={{ height: 'calc(93vh - 200px)', overflow: 'auto', width: '100%' }} elevation={0}>
                            <Grid item container spacing={1} sx={{ width: '100%' }}>
                              {details !== undefined &&
                                details.users.map((item, i) => {
                                  return item.status !== -1 ? (
                                    <Grid item xs={12} key={i}>
                                      <Items index={i} item={item} />
                                    </Grid>
                                  ) : null;
                                })}
                            </Grid>
                            {users.pagination > 1 && (
                              <>
                                {users.pagination.last_page > 1 && (
                                  <Grid item container justifyContent={'center'} sx={{ mt: 2 }}>
                                    <Grid item>
                                      <Pagination
                                        count={users.pagination.last_page}
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
                                        onChange={(event, num) => {
                                          setState({ pageNumber: num }), run();
                                        }}
                                      />
                                    </Grid>
                                  </Grid>
                                )}
                              </>
                            )}
                          </Paper>
                        </>
                      )}
                    </Grid>
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

export { Index as GroupInfo };
