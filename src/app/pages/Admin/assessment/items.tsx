import { Card, CardActionArea, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { Divide, Text } from 'components';
import { useNavigate } from 'react-router-dom';

export default function Items(props) {
  const navigate = useNavigate();
  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => navigate(`/admin/assessment/info/?id=${props.item.id}`)}>
        <CardHeader
          sx={{ p: 1 }}
          title={
            <Text variant={'web14'} type={'title2'} weight={'bold'} align={'right'} style={{ marginRight: '7px' }}>
              {props.item.name}
            </Text>
          }
          dir={'rtl'}
        />
        <CardContent sx={{ p: 1 }}>
          <Grid container direction='row' spacing={1} alignContent={'center'} alignItems={'center'} justifyContent={'space-evenly'}>
            <Grid item>
              <Grid container item direction='column' spacing={1} alignContent={'center'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Text variant={'web12'} type={'body'} weight={'medium'} align={'center'}>
                  وضعیت
                </Text>
                <Divide style={{ margin: 10 }} />
                <Text variant={'web12'} type={'body'} weight={'regular'} align={'center'}>
                  {props.item.status === 1 && 'فعال'}
                  {props.item.status === -1 && 'پاک شده'}
                  {props.item.status === 0 && 'غیرفعال'}
                  {props.item.status === 2 && 'موقعیتی'}
                  {props.item.status === 3 && 'پکیج'}
                </Text>
              </Grid>
            </Grid>
            <Divider orientation='vertical' variant='middle' flexItem />
            <Grid item>
              <Grid container direction='column' spacing={1} alignContent={'center'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Text variant={'web12'} type={'body'} weight={'medium'} align={'center'}>
                  ظرفیت
                </Text>
                <Divide style={{ margin: 10 }} />
                <Text variant={'web12'} type={'body'} weight={'regular'} align={'center'}>
                  {props.item.capacity}
                </Text>
              </Grid>
            </Grid>
            <Divider orientation='vertical' variant='middle' flexItem />
            <Grid item>
              <Grid container direction='column' spacing={1} alignContent={'center'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Text variant={'web12'} type={'body'} weight={'medium'} align={'center'}>
                  نام سازمان
                </Text>
                <Divide style={{ margin: 10 }} />
                <Text variant={'web12'} type={'body'} weight={'regular'} align={'center'}>
                  {props.item.owner_name}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
