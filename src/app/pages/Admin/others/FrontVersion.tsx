import { useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Input, Title } from 'components';
import { setAlert } from 'redux/action/creators';
import { useDispatch } from 'react-redux';

export default function FrontVersion() {
  const [frontVersion, setFrontVersion] = useState('');
  const dispatch = useDispatch();

  const handleFrontVersion = async () => {
    try {
      const data = {
        frontVersion: frontVersion,
      };
      const result = await adminHttp.frontVersion(data);
      dispatch(setAlert(true, 'success', result.data.success.toString(), 'Done') as any);
    } catch (error) {
      // console.log('error', error);
      dispatch(setAlert(true, 'error', 'access denied', 'Alert') as any);
    }
  };

  const handleSubmit = () => {
    handleFrontVersion().then((r) => r);
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xs={12}>
              <Title value={'فرانت ورژن'} />
            </Grid>
            <Grid item container xs={12} md={4} spacing={2}>
              <Grid item xs={12}>
                <Input type={'text'} label={'ورژن'} onChange={(e) => setFrontVersion(e.target.value)} />
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
