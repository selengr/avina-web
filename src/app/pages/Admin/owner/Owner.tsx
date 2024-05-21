import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid, MenuItem, Pagination, PaginationItem, Paper } from '@mui/material';
import { Button, DropDown, Input, Title } from 'components';
import Items from './items';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { useDebounceFn } from 'ahooks';
import { useNavigate } from 'react-router-dom';

export default function Owner() {
  const navigate = useNavigate();
  const [ownerList, setOwnerList] = useState<any[]>([]);
  const [totalPage, setTotalPages] = useState(1);
  const [data, setData] = useState<any>({ name: '', status: '', pageNumber: '' });

  const fetchList = async () => {
    try {
      const resultList = await adminHttp.showOwnerList({
        name: data.name,
        order: '',
        sort_by: '',
        per_page: 50,
        status: data.status,
        page: data.pageNumber,
      });
      setOwnerList(resultList.data.data);
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
      navigate(`/admin/owner/edit/?id=${id}`);
    } else {
      navigate(`/admin/owner/new`);
    }
  };
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={'فهرست سازمان‌ها'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1}>
              <Grid item>
                <Button color='primary' type={'contained'} label={'افزودن سازمان جدید'} fullWidth={true} onClick={() => toForm()} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Input placeholder={' نام اونر را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ name: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={4}>
                <DropDown id={'id'} placeholder={'وضعیت'} defaultValue={''} onChange={(e) => setData({ status: e.target.value })}>
                  <MenuItem value={''}>همه موارد</MenuItem>
                  <MenuItem value={1}>فعال</MenuItem>
                  <MenuItem value={-1}>غیرفعال</MenuItem>
                  <MenuItem value={0}>ثبت شده توسط کاربر</MenuItem>
                </DropDown>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined' sx={{ pb: 0 }}>
                  <CardContent sx={{ pb: 0 }}>
                    <Paper sx={{ height: 'calc(93vh - 180px)', overflow: 'auto', mt: 2, px: 1 }} elevation={0}>
                      <Grid container spacing={2} sx={{ mx: 'auto' }}>
                        {ownerList.map((item, i) => {
                          return (
                            <Grid key={i} item xs={12}>
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
