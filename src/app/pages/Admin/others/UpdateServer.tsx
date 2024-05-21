import { useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Input, Title } from 'components';
import { setAlert } from 'redux/action/creators';
import { useDispatch } from 'react-redux';

export default function UpdateServer() {
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleUpdateServer = async () => {
    try {
      const data = {
        password: password,
      };
      const result = await adminHttp.updateServer(data);
      dispatch(setAlert(true, 'success', result.data.success.toString(), 'Done') as any);
    } catch (error) {
      // console.log('error', error);
      dispatch(setAlert(true, 'error', 'access denied', 'Alert') as any);
    }
  };

  const handleSubmit = () => {
    handleUpdateServer().then((r) => r);
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xs={12}>
              <Title value={'update server'} />
            </Grid>
            <Grid item container xs={4} direction={'column'} spacing={2}>
              <Grid item>
                <Input type={'text'} label={'پسورد'} onChange={(e) => setPassword(e.target.value)} />
              </Grid>
              <Grid item>
                <Button type={'contained'} label={'ارسال'} fullWidth={true} onClick={handleSubmit} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
