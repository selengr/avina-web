import { Util } from 'utils';
import { Card, Chip, Grid } from '@mui/material';
import { Checkbox, Icons, Text } from 'components';
import { useState } from 'react';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

moment.locale('fa');
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

export default function Items(props) {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const [finishDate, setFinishDate] = useState<string>('');
  //
  // useEffect(() => {
  //   const date = props.item.finishing;
  //   if (date !== null) {
  //     setFinishDate(date);
  //   }
  // }, []);

  return (
    <Card variant='outlined' style={{ padding: '10px' }}>
      <Grid container spacing={1} alignItems={'center'}>
        <Grid item xs={12} md={5} alignItems={'center'}>
          <Checkbox
            disabled={props.item.questionnaire_results_status !== 3}
            checked={props.item.questionnaire_results_status === 3 && props.checked}
            onChange={() => {
              props.checkItems(props.item);
            }}
            labelStyle={deviceType === 'mobile' ? { paddingRight: '0' } : { paddingRight: '16px' }}
            id={props.item.test_id}
            label={props.item.name}
            weight={'bold'}
          />
        </Grid>
        <Grid item container xs={12} md={4} sx={{ justifyContent: 'space-around' }}>
          <Grid item xs={3} sx={{ justifyContent: 'flex-start' }}>
            <Text variant={fontSize}>{props.item.sex === 1 ? `${t(messages.Input_Global_Male())}` : `${t(messages.Input_Global_Female())}`}</Text>
          </Grid>
          <Grid item xs={7} sx={{ justifyContent: 'flex-start' }}>
            <Text variant={fontSize}>
              {props.item.age}&nbsp;{t(messages.Input_Global_Year())}
            </Text>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={3} sx={deviceType === 'mobile' ? { justifyContent: 'center' } : { paddingRight: '0' }}>
          <Grid item xs={12}>
            <Chip
              sx={{
                borderRadius: '6px',
                backgroundColor: '#f7f7f7',
                justifyContent: 'right',
                fontSize: '12px',
                fontWeight: 400,
              }}
              size={deviceType === 'mobile' ? 'small' : 'medium'}
              label={
                props.item.questionnaire_results_status === 3
                  ? `${t(messages.Text_ReportsInfo_FinishIn())} ${jMoment(props.item.finishing, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD')}`
                  : `${t(messages.Input_Global_TestNotComplete())}`
              }
              icon={props.item.questionnaire_results_status === 3 ? <Icons name='Done' style={{ color: '#30ac62' }} /> : <Icons name='Error' style={{ color: '#d21425' }} />}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
