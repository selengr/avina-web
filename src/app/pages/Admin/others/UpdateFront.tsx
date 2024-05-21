import { adminHttp } from 'api';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Title } from 'components';
import { setAlert } from 'redux/action/creators';
import { useDispatch } from 'react-redux';

export default function UpdateFront() {
  const dispatch = useDispatch();

  const handleUpdateFront = async () => {
    const data = {
      command: 'update',
      title: 'front',
    };
    try {
      const result = await adminHttp.commands(data);
      dispatch(setAlert(true, 'success', result.data.success.toString(), 'Done') as any);
    } catch (error) {
      dispatch(setAlert(true, 'error', 'access denied', 'Alert') as any);
    }
  };

  const handleSubmit = () => {
    handleUpdateFront().then((r) => r);
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xs={12}>
              <Title value={'update front'} />
            </Grid>
            <Grid item container xs={12} md={4} direction={'column'}>
              <Grid item xs={12} style={{ marginTop: '50%' }}>
                <Button type={'contained'} label={'آپدیت'} fullWidth={true} onClick={handleSubmit} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
