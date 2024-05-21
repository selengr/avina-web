import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Go, Util } from 'utils';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Button, IconButton as IconBtn, Input, Prompt, Text, Title } from 'components';
import Items from './items';
import { useDebounceFn, useSetState } from 'ahooks';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { assessmentsStatus, changeAssessmentStatus, getAssessmentList, refreshAssessmentList, removeDialog, removeItem } from '../Logic';
import { useNavigate } from 'react-router-dom';
import { store } from '../../../../redux/store/Store';
import * as Action from '../../../../redux/action/creators';

interface State {
  name: string;
  pageNumber: number;
}

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const assessmentsList: any = useSelector<any>((res) => res.assessmentShowList);
  const assessmentStatus: any = assessmentsStatus();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const renderAfterCalled = useRef(false);
  const [UIAssessmentList, setUIAssessmentList] = useState<any>([]);
  const [totalPage, setTotalPages] = useState(1);
  const [status, setStatus] = React.useState<any>();
  const activationResponse: any = useSelector<any>((res) => res.assessmentActivation);
  const [state, setState] = useSetState<State>({
    name: '',
    pageNumber: 1,
  });

  useEffect(() => {
    getList();
  }, []);

  const { run } = useDebounceFn(
    () => {
      getList();
    },
    {
      wait: 700,
    },
  );

  useEffect(() => {
    if (activationResponse.data.success) {
      refreshAssessmentList(state).then((r) => {
        setUIAssessmentList(r?.data.data.assessments);
        setTotalPages(r?.data.pagination.last_page);
        setStatus(r?.data.data.assessments);
      });
    }
  }, [activationResponse]);

  useEffect(() => {
    try {
      {
        assessmentStatus.data.data !== undefined && setStatus(assessmentStatus.data.data);
      }
    } catch (error) {}
  }, [assessmentsStatus()]);

  useEffect(() => {
    return () => {
      run();
    };
  }, [state]);

  const getList = () => {
    try {
      if (!renderAfterCalled.current) {
        getAssessmentList(state).then((r) => {
          setUIAssessmentList(r?.data.data.assessments);
          setTotalPages(r?.data.pagination.last_page);
          setStatus(r?.data.data.assessments);
        });
      }
    } catch (e) {}
  };

  const EmptyAssessment = () => {
    return (
      <>
        <Grid item xs={12}>
          <Card variant='outlined'>
            <CardContent>
              <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: 'calc(93vh - 180px)' }}>
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
              <Title value={`${t(messages.Input_Assessment_list_index_AssessmentsList())}`} />
            </Grid>
            <Grid item container alignItems={'center'} direction={deviceType === 'mobile' ? 'row-reverse' : 'row'} spacing={1}>
              {deviceType === 'web' ? (
                <Grid item xs={2} md={4} lg={6}>
                  <Button type={'contained'} label={`${t(messages.Input_Global_AddAssessment())}`} onClick={() => Go.Form('/assessment/new')} />
                </Grid>
              ) : (
                <Grid item xs={2} md={4} lg={6} justifyContent={'flex-end '} display={'flex'}>
                  <IconBtn type={'contained'} onClick={() => Go.Form('/assessment/new')} icon={'Add'} />
                </Grid>
              )}
              <Grid item xs={10} md={8} lg={6}>
                <Input placeholder={`${t(messages.Input_Global_SearchAssessment())}`} icon={'Search'} type={'text'} onChange={(e) => setState({ name: e.target.value, pageNumber: 1 })} />
              </Grid>
            </Grid>
            {UIAssessmentList.length === 0 ? (
              <EmptyAssessment />
            ) : (
              <>
                <Grid item container>
                  <Grid item xs={12}>
                    <Card variant='outlined' sx={{ pb: 0 }}>
                      <CardContent sx={{ pb: 0 }}>
                        <Grid container>
                          <Grid item>
                            <Text type={'title2'} variant={fontSize} weight={'bold'}>
                              {t(messages.Text_Assessment_list_index_MoreInfo())}
                            </Text>
                          </Grid>
                        </Grid>
                        <Paper sx={{ height: 'calc(93vh - 226px)', overflow: 'auto', mt: 2, px: 1 }} elevation={0}>
                          <Grid container spacing={2} sx={{ width: '100%' }}>
                            {UIAssessmentList.map((item, i) => {
                              return item.status !== -1 ? (
                                <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                                  <Items
                                    item={item}
                                    remove={removeDialog}
                                    edit={Go.Form}
                                    switch={() => {
                                      changeAssessmentStatus(item.id, item.status).then((r) => getList());
                                    }}
                                    status={item.status}
                                  />
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
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
      <Prompt
        accept={() => {
          removeItem().then(() => getList());
        }}
      />
    </>
  );
}

export { Index as AssessmentList };
