import { Card, CardContent, Grid } from '@mui/material';
import { Button, Input, Title } from 'components';
import { setAlert } from 'redux/action/creators';
import { adminHttp } from 'api';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const SendSMS = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textSms, setTextSms] = useState([]);

  const handleSms = async () => {
    const data = {
      template: 'assignAssessment',
      users: [1],
      param1: 'محمد یگانه',
      param2: '',
      param3: '',
    };
    try {
      const result = await adminHttp.commands(data);
      dispatch(setAlert(true, 'success', result.data.success.toString(), 'Done') as any);
    } catch (error) {
      // console.log('error', error);
      dispatch(setAlert(true, 'error', 'access denied', 'Alert') as any);
    }
  };

  const handleSubmit = () => {
    handleSms().then((r) => r);
  };

  return (
    <Card sx={{ minHeight: '93vh' }}>
      <CardContent>
        <Grid container justifyContent={'center'} spacing={2}>
          <Grid item xs={12}>
            <Title value={'ارسال پیامک'} />
          </Grid>
          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item xs={12}>
              <Input type={'text'} label={'شماره همراه'} onChange={(e) => setPhoneNumber(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Input type={'text'} label={'متن پیامک'} multiline={true} rows={4} onChange={(e) => setTextSms(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button type={'contained'} label={'ارسال'} fullWidth={true} onClick={handleSubmit} disabled={phoneNumber.length < 1 || textSms.length < 1} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default SendSMS;
