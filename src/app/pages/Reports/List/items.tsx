import { Card, CardActionArea, CardContent, Grid } from '@mui/material/';
import { Divide, ProgressCircle, Text } from 'components';
import { useNavigate } from 'react-router-dom';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { assessmentShowOne } from '../Logic';
import { useSelector } from 'react-redux';

export default function ListItem(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const result: any = useSelector<any>((res) => res.assessmentShowOne);
  const goto = async () => {
    await assessmentShowOne(props.item.id);
    navigate(`/report/info/?id=${props.item.id}`);
  };
  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => goto()}>
        <CardContent>
          <Grid container direction='row' spacing={1}>
            <Grid item container spacing={0} alignContent={'center'} alignItems={'center'}>
              <Grid item xs={3} md={2}>
                <ProgressCircle percent={props.item.assigned_count === 0 ? 0 : Math.round((100 * props.item.answered_count) / props.item.assigned_count)} />
              </Grid>
              <Grid item xs={9} md={10}>
                <Text variant={'web14'} type={'title2'} weight={'bold'} align={'right'} style={{ marginRight: '7px' }}>
                  {props.item.name}
                </Text>
              </Grid>
            </Grid>
            <Grid item container spacing={0} alignContent={'center'} alignItems={'center'}>
              <Grid item>
                <Divide />
              </Grid>
            </Grid>
            <Grid item container spacing={0} alignContent={'center'} alignItems={'center'}>
              <Grid item>
                <Text variant={'web14'} type={'body'} weight={'regular'} style={{ color: '#353535' }} dir={'rtl'}>
                  {`${props.item.assigned_count} ${t(messages.Input_Global_Participant())}`}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
