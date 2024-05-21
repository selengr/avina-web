import { useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Input, Title } from 'components';
import { useDispatch } from 'react-redux';
import { setAlert } from 'redux/action/creators';

export default function Commands() {
  const dispatch = useDispatch();
  const [command, setCommand] = useState('');
  const [questionnaires_id, setQuestionnaires_id] = useState([]);

  const handleCommand = async () => {
    const data = {
      command: command,
      questionnaires_id: questionnaires_id,
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
    handleCommand().then((r) => r);
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xs={12}>
              <Title value={'کامند‌ها'} />
            </Grid>
            <Grid item container md={4} xs={12} spacing={2}>
              <Grid item xs={12}>
                <Input type={'text'} label={'کامند'} onChange={(e) => setCommand(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'شناسه پرسشنامه'} onChange={(e) => setQuestionnaires_id(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Button type={'contained'} label={'ارسال'} fullWidth={true} onClick={handleSubmit} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
