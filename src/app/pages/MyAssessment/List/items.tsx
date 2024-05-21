import { Card, CardActionArea, CardContent, CardHeader, Grid } from '@mui/material';
import { Divide, ProgressCircle, Text } from 'components';
import { useNavigate } from 'react-router-dom';
import { Util } from 'utils';
import 'moment/locale/fa';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

moment.locale('fa');
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

export default function ListItem(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();

  return (
    //todo: removed and disabled assessments by agent permanently show on scope panel
    <Card variant={'outlined'}>
      <CardActionArea disableRipple={true} onClick={() => navigate(`/assessment/info/?id=${props.item.id}`)}>
        {props.item.status === 1 && (
          <CardHeader
            sx={{ px: 0, py: 1 }}
            avatar={<ProgressCircle percent={0} />}
            title={
              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'} style={{ marginRight: '7px' }}>
                {props.item.name}
              </Text>
            }
            dir={'rtl'}
          />
        )}
        {props.item.status === 2 && (
          <CardHeader
            sx={{ px: 0, py: 1 }}
            //todo: percent should back from API
            avatar={<ProgressCircle percent={50} />}
            title={
              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'} style={{ marginRight: '7px' }}>
                {props.item.name}
              </Text>
            }
            dir={'rtl'}
          />
        )}
        {props.item.status === 3 && (
          <CardHeader
            sx={{ px: 0, py: 1 }}
            avatar={<ProgressCircle percent={100} />}
            title={
              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'} style={{ marginRight: '7px' }}>
                {props.item.name}
              </Text>
            }
            dir={'rtl'}
          />
        )}
        <CardContent sx={{ padding: '0 22px 10px 16px' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ marginRight: '5px' }}>
              <Divide />
            </Grid>
            <Grid item xs={12}>
              <Text variant={deviceType === 'web' ? 'web12' : 'mobile9'}>
                {props.item.status === 1 && `${t(messages.Input_Global_TestNotComplete())}`}
                {props.item.status === 2 && `${t(messages.Input_Global_TestCompleting())}`}
                {props.item.status === 3 && `${t(messages.Input_Global_TestComplete())}`}
                {/*{props.item.status === 3 && `تکمیل شده در ${jMoment(finishDate, 'YYYY/MM/DD').format('hh:mm - jYYYY/jMM/jDD')}`}*/}
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
