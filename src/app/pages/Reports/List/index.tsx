import * as React from 'react';
import { useEffect, useState } from 'react';
import { Util } from 'utils';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Button, Input, Text, Title } from 'components';
import Items from './items';
import { useDebounceFn, useSetState } from 'ahooks';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { getAssessmentList } from '../Logic';
import { useSelector } from 'react-redux';

interface State {
  name: string;
  pageNumber: number;
}

export default function Index() {
  const { t } = useTranslation();
  const fontSize = Util.DefaultFontSize();
  const [totalPage, setTotalPages] = useState(1);
  const [UIAssessmentList, setUIAssessmentList] = useState<any[]>([]);
  const renderAfterCalled = React.useRef(false);
  const [state, setState] = useSetState<State>({
    name: '',
    pageNumber: 1,
  });

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchAssessmentsList();
    }
  }, []);
  const fetchAssessmentsList = () => {
    try {
      getAssessmentList(state).then((r) => {
        setUIAssessmentList(r?.data.data.assessments);
        setTotalPages(r?.data.pagination.last_page);
      });
    } catch (e) {}
  };
  const { run } = useDebounceFn(
    () => {
      fetchAssessmentsList();
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
  const EmptyAssessment = () => {
    return (
      <>
        <Grid item container alignItems={'center'}>
          <Grid item xs={12} md={6}>
            <Title value={`${t(messages.Input_ReportsList_AssessmentList())}`} />
          </Grid>
        </Grid>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: '90vh' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {t(messages.Text_Global_EmptyAssessment())}
            </Text>
          </Grid>
          <Grid item>
            <Button type={'contained'} label={`${t(messages.Input_Global_AddAssessment())}`} />
          </Grid>
        </Grid>
      </>
    );
  };
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
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          {state.name.length === 0 && UIAssessmentList.length === 0 ? (
            <EmptyAssessment />
          ) : (
            <>
              <Grid container spacing={2}>
                <Grid item container spacing={1} alignItems={'center'}>
                  <Grid item xs={12} md={6}>
                    <Title value={`${t(messages.Input_ReportsList_AssessmentList())}`} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input placeholder={`${t(messages.Input_Global_SearchAssessment())}`} icon={'Search'} type={'text'} onChange={(e) => setState({ name: e.target.value, pageNumber: 1 })} />
                  </Grid>
                </Grid>
                {state.name.length !== 0 && UIAssessmentList.length === 0 ? (
                  <NoResult />
                ) : (
                  <Grid item container>
                    <Grid item xs={12}>
                      <Card variant='outlined' sx={{ pb: 0 }}>
                        <CardContent sx={{ pb: 0 }}>
                          <Grid container>
                            <Grid item>
                              <Text type={'title2'} variant={fontSize} weight={'bold'}>
                                {t(messages.Input_ReportsList_ShowReports())}
                              </Text>
                            </Grid>
                          </Grid>
                          <Paper sx={{ height: 'calc(93vh - 220px)', overflow: 'auto', mt: 2, px: 1 }} elevation={0}>
                            <Grid container spacing={2} sx={{ mx: 'auto' }}>
                              {UIAssessmentList.map((item, i) => {
                                return item.status !== -1 ? (
                                  <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                                    <Items item={item} remove={{}} edit={{}} switch={{}} />
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
                      </Card>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
