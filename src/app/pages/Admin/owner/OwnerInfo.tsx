import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import qs from 'qs';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Title } from 'components';
import { Go } from 'utils';
import jMoment from 'moment-jalaali';

export default function OwnerInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: '',
    name: '',
    description: '',
    type: '',
    email: '',
    email_verified_at: '',
    status: '',
    created_at: '',
    updated_at: '',
  });

  const getOneUser = async () => {
    try {
      const owner = await adminHttp.showOwner(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setInfo({
        id: owner.data.data.id,
        name: owner.data.data.name,
        description: owner.data.data.description,
        type: owner.data.data.type,
        email: owner.data.data.email,
        email_verified_at: owner.data.data.email_verified_at,
        status: owner.data.data.status,
        created_at: jMoment(owner.data.data.created_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
        updated_at: jMoment(owner.data.data.updated_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
      });
    } catch (error) {
      // console.log('List error: ', error);
    }
  };

  const handleOwnerStatus = (data) => {
    switch (data) {
      case 1:
        return 'فعال';
      case 0:
        return 'غیرفعال';
    }
  };

  useEffect(() => {
    getOneUser().then((r) => r);
  }, []);

  const goToEdit = (id) => {
    navigate(`/admin/owner/edit/?id=${id}`);
  };
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Title value={'اطلاعات سازمان'} />
            </Grid>
            <Grid item container alignItems={'center'} spacing={1} justifyContent={'end'}>
              <Grid item xs={2}>
                <Button type={'contained'} label={'ویرایش اطلاعات'} fullWidth={true} onClick={() => goToEdit(info.id)} />
              </Grid>
              <Grid item xs={2}>
                <Button type={'outlined'} label={'بازگشت'} fullWidth={true} onClick={() => Go.Back()} />
              </Grid>
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
                          name:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.name}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          description:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.description}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          type:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.type}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          email:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.email}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          status:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {handleOwnerStatus(info.status)}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          email_verified_at:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.email_verified_at}
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
