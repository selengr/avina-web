import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid, Pagination, PaginationItem, Paper } from '@mui/material';
import { Input, Title } from 'components';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { useDebounceFn } from 'ahooks';
import Items from './items';
import { useNavigate } from 'react-router-dom';
import { Util } from 'utils';

export default function List() {
  const deviceType = Util.ScreenSize();
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);
  const [totalPage, setTotalPages] = useState(1);
  const [data, setData] = useState<any>({ name: '', phone: '', pageNumber: '' });

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

  const fetchList = async () => {
    try {
      const resultList = await adminHttp.userList({
        name: data.name,
        order: 'desc',
        sort_by: 'id',
        per_page: 50,
        phone: data.phone,
        min_age: '',
        max_age: '',
        page: data.pageNumber,
      });
      setUsers(resultList.data.data);
      setTotalPages(resultList.data.pagination.last_page);
    } catch (error) {
      // console.log('user list error: ', error);
    }
  };

  const editUser = (id) => {
    navigate(`/admin/user/edit/?id=${id}`);
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={'فهرست شرکت کنندگان'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1} direction={deviceType === 'mobile' ? 'row-reverse' : 'row'}>
              <Grid item xs={12} md={6}>
                <Input placeholder={'نام شرکت کننده موردنظر خود را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ name: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input placeholder={'تلفن شرکت کننده موردنظر خود را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setData({ phone: e.target.value })} />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent>
                    <Grid container>
                      <Paper style={{ height: 'calc(93vh - 170px)', overflow: 'auto', width: '100%' }} elevation={0}>
                        <Grid item container spacing={1} style={{ width: '100%' }}>
                          {users.length !== 0 &&
                            users.map((item, i) => {
                              return (
                                <Grid item xs={12} key={i}>
                                  <Items edit={editUser} item={item} index={i} />
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
