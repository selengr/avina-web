import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Input, Text, Title } from 'components';
import { Util } from 'utils';
import { useNavigate } from 'react-router-dom';
import { useDebounceFn, useSetState } from 'ahooks';
import Items from './items';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { AssessmentStore, AssessmentSystemsList, setAlert } from 'redux/action/creators';
import { messages } from '../messages';

import { useTranslation } from 'react-i18next';

interface State {
  name: string;
  pageNumber: number;
}

export default function Index() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const renderAfterCalled = useRef(false);
  const assessmentsSystemsList: any = useSelector<any>((res) => res.assessmentSystemsList);
  const [totalPage, setTotalPages] = useState(1);
  const [packages, setPackages] = useState<any>([]);
  const owner_id = Util.extractID();
  const deviceType = Util.ScreenSize();
  const [state, setState] = useSetState<State>({
    name: '',
    pageNumber: 1,
  });
  const fontSize = Util.DefaultFontSize();

  useEffect(() => {
    if (!renderAfterCalled.current) {
      dispatch(AssessmentSystemsList(undefined, 'reset') as any);
      fetchList().then((r) => r);
    }
  }, []);
  const fetchList = async () => {
    await dispatch(AssessmentSystemsList({ name: state.name, page: state.pageNumber }, 'request') as any);
  };

  useEffect(() => {
    try {
      setPackages(assessmentsSystemsList.data.data.assessments);
      setTotalPages(assessmentsSystemsList.data.pagination.last_page);
    } catch (error) {
      // console.log('list error: ', error);
    }
  }, [assessmentsSystemsList]);

  const addToAssessments = async (index?: any) => {
    const questionnaires: any = [];
    for (let i = 0; i < packages[index].questionnaires.length; i++) {
      questionnaires.push(packages[index].questionnaires[i].id);
    }
    try {
      const data = {
        name: packages[index].name,
        owner_id,
        description: packages[index].description,
        questionnaires: questionnaires,
      };
      await dispatch(AssessmentStore(data, 'request') as any);
      dispatch(setAlert(true, 'success', `${t(messages.Alert_Global_Success_AddToCart())}`, 'Done') as any);
      navigate('/assessments');
    } catch (error) {
      dispatch(setAlert(true, 'error', `${t(messages.Alert_Global_Error_AddToCart())}`, 'Alert') as any);
      // console.log('create item error: ', error);
    }
  };

  // useEffect(() => {
  //   if (addToCardResponse.data.success) getAssessmentList().then(() => navigate('/assessments'));
  // }, [addToCardResponse]);

  const { run } = useDebounceFn(
    () => {
      fetchList().then((r) => r);
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
          <Grid container spacing={2}>
            <Grid item container alignItems={'center'}>
              <Grid item xs={12} md={6} sx={deviceType === 'mobile' ? { display: 'none' } : { display: 'inline-block' }}>
                <Title value={`${t(messages.Input_SuggestionList_PsyaSuggestion())}`} />
              </Grid>
              <Grid item container xs={12} md={6} justifyContent={'left'}>
                <Input placeholder={`${t(messages.Input_Global_SearchAssessment())}`} icon={'Search'} type={'text'} onChange={(e) => setState({ name: e.target.value, pageNumber: 1 })} />
              </Grid>
            </Grid>
            {state.name.length !== 0 && packages.length === 0 ? (
              <NoResult />
            ) : (
              <Grid item container>
                <Grid item xs={12}>
                  <Card variant={'outlined'}>
                    <CardContent>
                      <Paper sx={deviceType === 'mobile' ? { height: 'calc(93vh - 180px)', overflow: 'auto', mt: 0 } : { height: 'calc(93vh - 180px)', overflow: 'auto', mt: 2 }} elevation={0}>
                        <Grid container spacing={2} sx={{ width: '100%' }}>
                          {packages.map((item, i) => {
                            return item.status !== -1 ? (
                              <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                                <Items item={item} index={i} add={addToAssessments} />
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
        </CardContent>
      </Card>
    </>
  );
}
