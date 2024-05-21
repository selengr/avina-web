import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import { Card, CardContent, Grid } from '@mui/material';
import { Title } from 'components';

export default function Config() {
  const [info, setInfo] = useState({
    id: '',
    system_owner_id: '',
    created_at: '',
    updated_at: '',
    frontVersion: '',
    ipBlockLevels: '',
    maxFailedLogins: '',
    maxFailedLoginsDuration: '',
    blockDuration: '',
  });

  const handleConfig = async () => {
    try {
      const result = await adminHttp.config();
      setInfo(result.data.data);
    } catch (error) {
      // console.log('error', error);
    }
  };

  useEffect(() => {
    handleConfig().then((r) => r);
  }, []);

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Title value={'کانفیگ'} />
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item xs={6}>
                <Card variant='outlined'>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item container>
                        <Grid item xs={6}>
                          id:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.id}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          system_owner_id:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.system_owner_id}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          created_at:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.created_at}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          updated_at:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.updated_at}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          frontVersion:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.frontVersion}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          ipBlockLevels:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.ipBlockLevels}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          maxFailedLogins:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.maxFailedLogins}
                        </Grid>
                        {/*{info.maxFailedLogins.map((item, i) => (*/}
                        {/*  <Grid item xs={6} sx={{textAlign: 'end'}} key={i}>{item}</Grid>*/}
                        {/*))}*/}
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          maxFailedLoginsDuration:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.maxFailedLoginsDuration}
                        </Grid>
                        {/*{info.maxFailedLoginsDuration.map((item, i) => (*/}
                        {/*  <Grid item xs={6} sx={{textAlign: 'end'}} key={i}>*/}
                        {/*    {item}*/}
                        {/*  </Grid>*/}
                        {/*))}*/}
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          blockDuration:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.blockDuration}
                          </Grid>
                          {/*{info.blockDuration.map((item, i) => (*/}
                          {/*  <Grid item xs={6} sx={{textAlign: 'end'}} key={i}>*/}
                          {/*    {item}*/}
                          {/*  </Grid>*/}
                          {/*))}*/}
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
