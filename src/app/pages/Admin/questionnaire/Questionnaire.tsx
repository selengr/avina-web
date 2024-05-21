import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Input, Title } from 'components';
import Items from './items';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { useDebounceFn } from 'ahooks';

export default function Questionnaire() {
  const [questionnaireList, setQuestionnaireList] = useState<any[]>([]);
  const [totalPage, setTotalPages] = useState(1);
  const [data, setData] = useState<any>({ name: '', pageNumber: '' });

  const fetchList = async () => {
    try {
      const resultList = await adminHttp.showQuestionnaireList({
        name: data.name,
        order: '',
        sort_by: '',
        per_page: 50,
        status: '',
        page: data.pageNumber,
      });
      setQuestionnaireList(resultList.data.data);
      setTotalPages(resultList.data.pagination.last_page);
    } catch (error) {
      // console.log('List error: ', error);
    }
  };

  useEffect(() => {
    fetchList().then((r) => r);
  }, []);

  useEffect(() => {
    run();
  }, [data]);

  const { run } = useDebounceFn(
    () => {
      fetchList().then((r) => r);
    },
    {
      wait: 2000,
    },
  );

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={'فهرست پرسشنامه‌ها'} />
            </Grid>
            <Grid item container alignItems={'center'} justifyContent={'end'}>
              <Grid item xs={12} md={6}>
                <Input placeholder={'نام پرسشنامه‌ها مورد نظر خود را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ name: e.target.value })} />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent>
                    <Grid container>
                      <Paper style={{ height: 'calc(93vh - 170px)', overflow: 'auto', width: '100%' }} elevation={0}>
                        <Grid item container spacing={1} style={{ width: '100%' }}>
                          {questionnaireList.length !== 0 &&
                            questionnaireList.map((item, i) => {
                              return (
                                <Grid item xs={12} key={i}>
                                  <Items item={item} index={i} />
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
