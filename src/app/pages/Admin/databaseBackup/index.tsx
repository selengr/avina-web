import { adminHttp } from 'api';
import { Card, CardContent, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import React from 'react';
// import { Util } from 'utils';
import { Button, Title } from 'components';
// import { messages } from '../../assessment/messages';
// import i18n from 'i18next';
import { setAlert } from 'redux/action/creators';

export const DatabaseBackup = () => {
  const dispatch = useDispatch();

  const handleDatabaseBackup = async () => {
    const data = {
      command: 'backup',
      title: 'front',
    };
    try {
      const result = await adminHttp.commands(data);
      dispatch(setAlert(true, 'success', result.data.success.toString(), 'Done') as any);
    } catch (error) {
      console.log('error', error);
      dispatch(setAlert(true, 'error', 'access denied', 'Alert') as any);
    }
  };
  const handleSubmit = () => {
    handleDatabaseBackup().then((r) => r);
  };

  return (
    <Card sx={{ minHeight: '93vh' }}>
      <CardContent>
        <Grid container justifyContent={'center'} spacing={2}>
          <Grid item xs={12}>
            <Title value={'پشتیبان گیری'} />
          </Grid>
          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item xs={12}>
              <Button type={'contained'} label={'پشتیبان گیری از پایگاه داده'} fullWidth={true} onClick={handleSubmit} disabled={false} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default DatabaseBackup;
