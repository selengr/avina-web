import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid, MenuItem, Pagination, PaginationItem, Paper } from '@mui/material';
import { Button, DropDown, Input, Text, Title } from 'components';
import { useDebounceFn } from 'ahooks';
import { useNavigate } from 'react-router-dom';
import Items from './items';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';

export default function Assessment() {
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState<any[]>([]);
  const [totalPage, setTotalPages] = useState(1);
  const [data, setData] = useState<any>({ name: '', owner: '', status: '', pageNumber: '' });

  const fetchList = async () => {
    try {
      const resultList = await adminHttp.showAssessmentList({
        page: data.pageNumber,
        per_page: 50,
        sort_by: 'id',
        order: 'desc',
        name: data.name,
        status: data.status,
        owner_name: data.owner,
      });
      setAssessment(resultList.data.data);
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

  const toForm = (id?: string) => {
    if (id) {
      navigate(`/admin/assessment/edit/?id=${id}`);
    } else {
      navigate(`/admin/assessment/new`);
    }
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={'فهرست ارزیابی‌ها'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1}>
              <Grid item xs={12} md={2}>
                <Button color='primary' type={'contained'} label={'افزودن ارزیابی جدید'} fullWidth={true} onClick={() => toForm()} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Input placeholder={' نام ارزیابی را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ name: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Input placeholder={' نام اونر ارزیابی را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ owner: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={2}>
                <DropDown id={'id'} placeholder={'وضعیت'} defaultValue={''} onChange={(e) => setData({ status: e.target.value })}>
                  <MenuItem value={''}>همه موارد</MenuItem>
                  <MenuItem value={1}>فعال</MenuItem>
                  <MenuItem value={-1}>پاک شده</MenuItem>
                  <MenuItem value={0}>غیرفعال</MenuItem>
                  <MenuItem value={2}>موقعیتی</MenuItem>
                  <MenuItem value={3}>پکیج</MenuItem>
                </DropDown>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined' sx={{ pb: 0 }}>
                  <CardContent sx={{ pb: 0 }}>
                    <Grid container>
                      <Grid item>
                        <Text type={'title2'} variant={'web14'} weight={'bold'}>
                          جهت مشاهده‌ی اطلاعات بیشتر، بر روی ارزیابی موردنظر خود کلیک کنید.
                        </Text>
                      </Grid>
                    </Grid>
                    <Paper sx={{ height: 'calc(93vh - 180px)', overflow: 'auto', mt: 2, px: 1 }} elevation={0}>
                      <Grid container spacing={2} sx={{ mx: 'auto' }}>
                        {assessment.map((item, i) => {
                          return (
                            <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                              <Items item={item} edit={toForm} />
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
