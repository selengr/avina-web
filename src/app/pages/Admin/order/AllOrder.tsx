import { useEffect, useState } from 'react';
import { adminHttp, paymentHttp } from 'api';
import { Card, CardContent, Grid, MenuItem, Pagination, PaginationItem, Paper } from '@mui/material';
import { DropDown, Input, Title } from 'components';
import Items from './items';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { useDebounceFn } from 'ahooks';

export default function AllOrder() {
  const [ordersList, setOrdersList] = useState([]);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [totalPage, setTotalPages] = useState(1);
  const [info, setInfo] = useState<any>({
    ownerName: '',
    userName: '',
    purchaseStatus: '',
    pageNumber: '',
    orderStatus: '',
  });

  const getOrderList = async () => {
    const data = {
      order: 'asc',
      sort_by: 'id',
      per_page: 50,
      order_status: info.orderStatus,
      owner_name: info.ownerName,
      user_name: info.userName,
      purchase_status: info.purchaseStatus,
      page: info.pageNumber,
    };
    try {
      const result = await adminHttp.showAllOrders(data);
      setOrdersList(result.data.data);
      setTotalPages(result.data.pagination.last_page);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleSubmit = async (id) => {
    try {
      const result = await paymentHttp.verify({
        transaction_id: id,
        cancel: false,
      });
      if (result.data.success === false) {
        setPaymentMessage(result.data.errors[0].message);
      } else if (result.data.success === true) {
        setPaymentMessage(result.data.data.receiptReferenceId);
        await getOrderList();
      }
    } catch (e) {
      // console.log('payment error', e);
    }
  };

  useEffect(() => {
    getOrderList().then((r) => r);
  }, []);

  const { run } = useDebounceFn(
    () => {
      getOrderList().then((r) => r);
    },
    {
      wait: 2000,
    },
  );

  useEffect(() => {
    run();
  }, [info]);

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
              <Title value={'استعلام پرداخت‌ها'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1}>
              <Grid item xs={12} md={4}>
                <Input placeholder={' نام اونر را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setInfo({ ownerName: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Input placeholder={' نام کاربر را جستجو کنید'} icon={'Search'} type={'text'} onChange={(e) => setInfo({ userName: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={2}>
                <DropDown id={'id'} placeholder={'وضعیت خرید'} defaultValue={''} onChange={(e) => setInfo({ purchaseStatus: e.target.value })}>
                  <MenuItem value={''}>همه موارد</MenuItem>
                  <MenuItem value={1}>ناموفق</MenuItem>
                  <MenuItem value={0}>نامشخص</MenuItem>
                  <MenuItem value={2}>موفق</MenuItem>
                </DropDown>
              </Grid>
              <Grid item xs={12} md={2}>
                <DropDown id={'id'} placeholder={'وضعیت پرداخت'} defaultValue={''} onChange={(e) => setInfo({ orderStatus: e.target.value })}>
                  <MenuItem value={''}>همه موارد</MenuItem>
                  <MenuItem value={1}>پرداخت شده</MenuItem>
                  <MenuItem value={0}>پرداخت نشده</MenuItem>
                </DropDown>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined' sx={{ pb: 0 }}>
                  <CardContent sx={{ pb: 0 }}>
                    <Paper sx={{ height: 'calc(93vh - 220px)', overflow: 'auto', mt: 2, px: 1 }} elevation={0}>
                      <Grid container spacing={2} sx={{ mx: 'auto' }}>
                        {ordersList.map((item, i) => {
                          return (
                            <Grid key={i} item xs={12}>
                              <Items item={item} verify={handleSubmit} />
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
                              onChange={(event, num) => setInfo({ pageNumber: num })}
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
