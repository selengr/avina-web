import { adminHttp } from 'api';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Title } from 'components';
import { Go } from 'utils';
import jMoment from 'moment-jalaali';

export default function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    id: '',
    name: '',
    sex: '',
    birth: '',
    role: '',
    phone: '',
    email_verified_at: '',
    status: '',
    last_role: '',
    last_role_type: '',
    created_at: '',
    updated_at: '',
  });

  const getOneUser = async () => {
    try {
      const user = await adminHttp.showUser(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setInfo({
        id: user.data.data.id,
        name: user.data.data.name,
        sex: user.data.data.sex,
        birth: user.data.data.birth,
        role: user.data.data.role,
        phone: `0${user.data.data.email}`,
        email_verified_at: user.data.data.email_verified_at,
        status: user.data.data.status,
        last_role: user.data.data.last_role,
        last_role_type: user.data.data.last_role_type,
        created_at: jMoment(user.data.data.created_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
        updated_at: jMoment(user.data.data.updated_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
      });
    } catch (error) {
      // console.log('List error: ', error);
    }
  };

  const handleUserStatus = (data) => {
    switch (data) {
      case 0:
        return 'ثبت شده توسط اونر';
      case -1:
        return 'غیرفعال';
      case 1:
        return 'فعال';
      default:
        return '';
    }
  };

  useEffect(() => {
    getOneUser().then((r) => r);
  }, []);

  const goToEdit = (id) => {
    navigate(`/admin/user/edit/?id=${id}`);
  };
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Title value={'اطلاعات شرکت کننده'} />
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
                          gender:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.sex}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          birth:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.birth}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          role:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.role}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          phone:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.phone}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          status:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {handleUserStatus(info.status)}
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
                          last_role:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.last_role}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          last_role_type:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.last_role_type}
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
