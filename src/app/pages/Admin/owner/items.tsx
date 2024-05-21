import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import { Text } from 'components';
import { Util } from 'utils';
import { useNavigate } from 'react-router-dom';

export default function Items(props) {
  const navigate = useNavigate();
  const fontSize = Util.DefaultFontSize();
  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => navigate(`/admin/owner/info/?id=${props.item.id}`)}>
        <CardContent sx={{ p: '12px !important' }}>
          <Grid container alignItems={'center'}>
            <Grid item md={6} xs={12}>
              <Text variant={fontSize}>{props.item.name}</Text>
            </Grid>
            <Grid item md={6} xs={5}>
              <Text variant={fontSize}>
                {props.item.status === 1 && 'فعال'}
                {props.item.status === 0 && 'ثبت شده توسط کابر'}
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
