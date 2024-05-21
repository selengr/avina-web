import { adminHttp } from 'api';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { Button, Title } from 'components';
import { Go } from 'utils';
import jMoment from 'moment-jalaali';

export default function AssessmentInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: '',
    name: '',
    key: '',
    owner_id: '',
    description: '',
    status: '',
    capacity: '',
    created_at: '',
    updated_at: '',
    image: '',
  });

  const fetchOne = async () => {
    try {
      const result = await adminHttp.showAssessment(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setInfo({
        id: result.data.data.id,
        name: result.data.data.name,
        key: result.data.data.key,
        owner_id: result.data.data.owner_id,
        description: result.data.data.description,
        status: result.data.data.status,
        capacity: result.data.data.capacity,
        created_at: jMoment(result.data.data.created_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
        updated_at: jMoment(result.data.data.updated_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
        image: result.data.data.image,
      });
    } catch (error) {
      // console.log('show one assessment error', error);
    }
  };

  const handleAssessmentStatus = (data) => {
    switch (data) {
      case -1:
        return 'پاک شده';
      case 0:
        return 'غیرفعال';
      case 1:
        return 'فعال';
      case 2:
        return 'موقعیتی';
      case 3:
        return 'پکیج';
    }
  };

  useEffect(() => {
    fetchOne().then((r) => r);
  }, []);

  const goToEdit = (id) => {
    navigate(`/admin/assessment/edit/?id=${id}`);
  };
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Title value={'اطلاعات ارزیابی'} />
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
                          key:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.key}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          owner_id:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.owner_id}
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
                          capacity:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.capacity}
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={6}>
                          :status
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {handleAssessmentStatus(info.status)}
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
                          image:
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                          {info.image}
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
