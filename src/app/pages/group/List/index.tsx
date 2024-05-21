import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Button, IconButton as IconBtn, Input, Prompt, Text, Title } from 'components';
import { Go, Util } from 'utils';
import { useNavigate } from 'react-router-dom';
import { useDebounceFn, useSetState } from 'ahooks';
import Items from './items';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { getGroupList, groupsList, refreshGroupList, removeDialog, removeItem } from '../Logic';

interface State {
  name: string;
  pageNumber: number;
}

export default function Index() {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const navigate = useNavigate();
  const renderAfterCalled = useRef(false);
  const [groups, setGroups] = useState<any>([]);
  const [totalPage, setTotalPages] = useState(1);
  const groupList: any = groupsList();
  const [state, setState] = useSetState<State>({
    name: '',
    pageNumber: 1,
  });
  useEffect(() => {
    if (!renderAfterCalled.current) {
      getGroupList(state);
    }
  }, []);
  useEffect(() => {
    try {
      setGroups(groupList.data.data.groups);
      setTotalPages(groupList.data.pagination.last_page);
    } catch (e) {}
  }, [groupsList()]);

  useEffect(() => {
    refreshGroupList(state);
  }, []);

  const { run } = useDebounceFn(
    () => {
      refreshGroupList(state);
    },
    {
      wait: 2000,
    },
  );

  useEffect(() => {
    return () => {
      run();
    };
  }, [state]);

  const EmptyGroups = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(93vh - 204px)' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {t(messages.Input_GroupList_ShowGroups())}
            </Text>
          </Grid>
          <Grid item>
            <Button type={'contained'} label={`${t(messages.Input_Global_AddGroup())}`} onClick={() => navigate(`/groups/new`)} />
          </Grid>
        </Grid>
      </>
    );
  };
  const NoResult = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(93vh - 204px)' }}>
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
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item container alignItems={'center'}>
              <Grid item xs={12} md={6}>
                <Title value={`${t(messages.Input_GroupList_GroupList())}`} />
              </Grid>
            </Grid>
            {state.name.length === 0 && groups.length === 0 ? (
              <EmptyGroups />
            ) : (
              <>
                <Grid item container alignItems={'center'} direction={deviceType === 'mobile' ? 'row-reverse' : 'row'} spacing={1}>
                  {deviceType === 'web' ? (
                    <Grid item xs={2} md={4} lg={6}>
                      <Button type={'outlined'} label={`${t(messages.Input_Global_AddGroup())}`} onClick={() => navigate(`/groups/new`)} />
                    </Grid>
                  ) : (
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <IconBtn type={'contained'} onClick={() => navigate(`/groups/new`)} icon={'Add'} />
                    </Grid>
                  )}
                  <Grid item xs={10} md={8} lg={6}>
                    <Input placeholder={`${t(messages.Input_GroupList_SearchGroup())}`} icon={'Search'} type={'text'} onChange={(e) => setState({ name: e.target.value, pageNumber: 1 })} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={12}>
                    <Card variant='outlined'>
                      {groups.length === 0 && state.name.length !== 0 ? (
                        <NoResult />
                      ) : (
                        <CardContent>
                          <Paper sx={{ height: 'calc(93vh - 204px)', overflow: 'auto', mt: 2 }} elevation={0}>
                            <Grid container spacing={2} sx={{ width: '100%' }}>
                              {groups.map((item, i) => {
                                return item.status !== -1 ? (
                                  <Grid key={i} item xs={12} md={6} lg={3} xl={2}>
                                    <Items item={item} remove={removeDialog} edit={Go.Form} />
                                  </Grid>
                                ) : null;
                              })}
                            </Grid>
                          </Paper>
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
                      )}
                    </Card>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
      <Prompt
        accept={() => {
          removeItem().then(() => getGroupList());
        }}
      />
    </>
  );
}

export { Index as GroupList };
