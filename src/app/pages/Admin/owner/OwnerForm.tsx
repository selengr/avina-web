import { Card, CardContent, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { Button, Input, Title } from 'components';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { adminHttp } from 'api';
import { useEffect, useState } from 'react';
import { Go } from 'utils';
import { enqueueSnackbar, SnackbarProvider, VariantType } from 'notistack';

export default function OwnerForm() {
  const location = useLocation();
  const [type, setType] = useState<number>();
  const [email, setEmail] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [agentPhone, setAgentPhone] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (location.search) {
      try {
        const data = {
          name: ownerName,
          description: description,
          email: email,
          status: status,
        };
        await adminHttp.editOwner(qs.parse(location.search, { ignoreQueryPrefix: true }).id, data);

        Go.Back();
      } catch (error) {
        // console.log('create item error: ', error);
      }
    } else {
      try {
        const data = {
          agent_phone: agentPhone,
          owner_name: ownerName,
          description: description,
          type: type,
          email: email,
        };
        await adminHttp.createOwner(data);
        Go.Back();
      } catch (error: any) {
        handleClickVariant(error.response.data.errors, 'error');
        // console.log('create item error: ', error);
      }
    }
  };

  const fetchOne = async () => {
    try {
      const result = await adminHttp.showOwner(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setOwnerName(result.data.data.name);
      setEmail(result.data.data.email);
      setDescription(result.data.data.description);
      setStatus(result.data.data.status);
    } catch (error) {
      // console.log('show one assessment error', error);
    }
  };

  const handleClickVariant = (arrayMessages: any, variant: VariantType) => {
    if (arrayMessages) {
      for (let i = 0; i < arrayMessages.length; i++) {
        const result = arrayMessages[i].message;
        const arrayMessage = result.substr(0, result.length - 1);
        enqueueSnackbar(arrayMessage, { variant });
      }
    }
  };

  useEffect(() => {
    fetchOne().then((r) => r);
  }, []);
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item container alignItems={'center'}>
              <Grid item xs={12} md={6}>
                <Title value={qs.parse(location.search, { ignoreQueryPrefix: true }).id ? 'ویرایش سازمان' : 'افزودن سازمان جدید'} />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <Card variant='outlined' sx={{ height: 'calc(93vh - 135px)' }}>
                  <CardContent>
                    <Grid container direction='row' justifyContent='center' alignItems={'center'}>
                      <Grid item container xs={12} md={10} lg={8} xl={6} spacing={2}>
                        <Grid item container xs={12} lg={6}>
                          <Grid item xs={12} sx={location.search ? { display: 'none' } : { display: 'inline' }}>
                            <Input type={'text'} label={'agent phone:'} onChange={(e) => setAgentPhone(e.target.value)} />
                          </Grid>
                          <Grid item xs={12}>
                            <Input type={'text'} label={'owner name:'} value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
                          </Grid>
                          <Grid item xs={12}>
                            {location.search ? (
                              <RadioGroup color={'secondary'} aria-label='status' name='status' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <FormControlLabel value={'1'} control={<Radio />} label={'فعال'} labelPlacement='start' />
                                <FormControlLabel disabled={true} value={'0'} control={<Radio />} label={'ثبت شده توسط کاربر'} labelPlacement='start' />
                              </RadioGroup>
                            ) : (
                              <Input type={'text'} label={'type:'} onChange={(e) => setType(e.target.value)} />
                            )}
                          </Grid>
                        </Grid>
                        <Grid item container xs={12} lg={6}>
                          <Grid item xs={12}>
                            <Input type={'text'} label={'description:'} multiline={true} rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                          </Grid>
                          <Grid item xs={12}>
                            <Input type={'text'} label={'email:'} value={email} onChange={(e) => setEmail(e.target.value)} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} md={4} lg={3} xl={2}>
                  <SnackbarProvider maxSnack={6} />
                  <Button color={'primary'} type={'contained'} label={'ثبت'} fullWidth={true} onClick={handleSubmit} />
                </Grid>
                <Grid item xs={12} md={4} lg={3} xl={2}>
                  <Button color={'primary'} type={'outlined'} label={'انصراف'} fullWidth={true} onClick={() => Go.Back()} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
