import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { adminHttp } from 'api';
import qs from 'qs';
import { Card, CardContent, Grid, Paper } from '@mui/material';
import { Button, Title } from 'components';
import { Go } from 'utils';
import jMoment from 'moment-jalaali';

export default function QuestionnaireInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    id: '',
    name: '',
    target: '',
    description: '',
    duration: '',
    age_range: '',
    starting_description: '',
    questions_count: '',
    key: '',
    questionnaire_category_id: '',
    price: '',
    discount: '',
    status: '',
    created_at: '',
    updated_at: '',
    saze: '',
    custom: '',
    image: '',
  });

  const fetchOne = async () => {
    try {
      const result = await adminHttp.showQuestionnaire(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setInfo({
        id: result.data.data.id,
        name: result.data.data.name,
        target: result.data.data.target,
        description: result.data.data.description,
        duration: result.data.data.duration,
        age_range: result.data.data.age_range,
        starting_description: result.data.data.starting_description,
        questions_count: result.data.data.questions_count,
        key: result.data.data.key,
        questionnaire_category_id: result.data.data.questionnaire_category_id,
        price: result.data.data.price,
        discount: result.data.data.discount,
        status: result.data.data.status,
        created_at: jMoment(result.data.data.created_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
        updated_at: jMoment(result.data.data.updated_at, 'YYYY/MM/DD,  HH:mm').format('HH:mm - jYYYY/jMM/jDD'),
        saze: result.data.data.saze,
        custom: result.data.data.custom === null ? result.data.data.custom : JSON.stringify(result.data.data.custom),
        image: result.data.data.image,
      });
    } catch (error) {
      // console.log('show one questionnaire error', error);
    }
  };

  const handleQuestionaireStatus = (data) => {
    switch (data) {
      case -1:
        return ' غیرفعال';
      case 0:
        return 'تعریف شده توسط اونر';
      case 1:
        return 'فعال';
    }
  };

  useEffect(() => {
    fetchOne().then((r) => r);
  }, []);

  const goToEdit = (id) => {
    navigate(`/admin/questionnaire/edit/?id=${id}`);
  };
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Title value={'اطلاعات پرسشنامه'} />
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
                <Paper sx={{ height: 'calc(93vh - 180px)', overflow: 'auto', mt: 2, px: 1 }} elevation={0}>
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
                            target:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.target}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={2}>
                            description:
                          </Grid>
                          <Grid item xs={10} sx={{ textAlign: 'end' }}>
                            {info.description}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            duration:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.duration}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            age_range:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.age_range}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            starting_description:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.starting_description}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            questions_count:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.questions_count}
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
                            questionnaire_category_id:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.questionnaire_category_id}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            price:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.price}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            discount:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.discount}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            saze:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.saze}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            custom:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.custom}
                          </Grid>
                        </Grid>
                        <Grid item container>
                          <Grid item xs={6}>
                            status:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {handleQuestionaireStatus(info.status)}
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
                            image:
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            {info.image}
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
