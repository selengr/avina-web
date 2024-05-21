import { useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Input, Title } from 'components';
import { setAlert } from 'redux/action/creators';
import { useDispatch } from 'react-redux';

export default function SetConfig() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [system_owner_id, setSystem_owner_id] = useState();
  const [created_at, setCreated_at] = useState();
  const [updated_at, setUpdated_at] = useState();
  const [frontVersion, setFrontVersion] = useState('');
  const [ipBlockLevels, setIpBlockLevels] = useState();
  const [maxFailedLogins, setMaxFailedLogins] = useState([]);
  const [maxFailedLoginsDuration, setMaxFailedLoginsDuration] = useState([]);
  const [blockDuration, setBlockDuration] = useState([]);

  const handleSetConfig = async () => {
    try {
      const data = {
        id: id,
        system_owner_id: system_owner_id,
        created_at: created_at,
        updated_at: updated_at,
        frontVersion: frontVersion,
        ipBlockLevels: ipBlockLevels,
        maxFailedLogins: maxFailedLogins,
        maxFailedLoginsDuration: maxFailedLoginsDuration,
        blockDuration: blockDuration,
      };
      const result = await adminHttp.setConfig(data);
      dispatch(setAlert(true, 'success', result.data.success.toString(), 'Done') as any);
    } catch (error) {
      // console.log('error', error);
      dispatch(setAlert(true, 'error', 'access denied', 'Alert') as any);
    }
  };

  const handleSubmit = () => {
    handleSetConfig().then((r) => r);
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xs={12}>
              <Title value={'set config'} />
            </Grid>
            <Grid item container md={4} xs={12} spacing={2}>
              <Grid item xs={12}>
                <Input type={'text'} label={'id'} onChange={(e) => setId(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'system_owner_id'} onChange={(e) => setSystem_owner_id(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'created_at'} onChange={(e) => setCreated_at(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'updated_at'} onChange={(e) => setUpdated_at(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'frontVersion'} onChange={(e) => setFrontVersion(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'ipBlockLevels'} onChange={(e) => setIpBlockLevels(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'maxFailedLogins'} onChange={(e) => setMaxFailedLogins(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'maxFailedLoginsDuration'} onChange={(e) => setMaxFailedLoginsDuration(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <Input type={'text'} label={'blockDuration'} onChange={(e) => setBlockDuration(e.target.value)} />
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
