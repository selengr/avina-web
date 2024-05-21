import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { adminHttp } from 'api';
import qs from 'qs';
import { Card, CardContent, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { Button, Input, Title } from 'components';
import { Go } from 'utils';

export default function EditQuestionnaire() {
  const location = useLocation();
  const [price, setPrice] = useState();
  const [saze, setSaze] = useState('');
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [status, setStatus] = useState('');
  const [duration, setDuration] = useState('');
  const [discount, setDiscount] = useState('');
  const [age_range, setAge_range] = useState('');
  const [description, setDescription] = useState('');
  const [starting_description, setStarting_description] = useState('');

  const handleSubmit = async () => {
    const data = {
      name: title,
      status: parseInt(status),
      description: description,
      price: price,
      target: target,
      duration: duration,
      age_range: age_range,
      saze: saze,
      starting_description: starting_description,
      discount: discount,
    };
    try {
      await adminHttp.editQuestionnaire(qs.parse(location.search, { ignoreQueryPrefix: true }).id, data);
      Go.Back();
    } catch (error) {
      // console.log(error, 'error in updating user');
    }
  };

  const fetchOne = async () => {
    try {
      const result = await adminHttp.showQuestionnaire(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setSaze(result.data.data.saze);
      setTitle(result.data.data.name);
      setPrice(result.data.data.price);
      setTarget(result.data.data.target);
      setDiscount(result.data.data.discount);
      setDuration(result.data.data.duration);
      setAge_range(result.data.data.age_range);
      setDescription(result.data.data.description);
      setStatus(result.data.data.status.toString());
      setStarting_description(result.data.data.starting_description);
    } catch (error) {
      // console.log('show one questionnaire error', error);
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
            <Grid item>
              <Title value={'ویرایش پرسشنامه'} />
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined' style={{ height: 'calc(93vh - 143px)' }}>
                  <CardContent>
                    <Grid container>
                      <Grid item container justifyContent='center' alignItems='center'>
                        <Grid item container xs={12} md={10} lg={8} xl={6}>
                          <Grid item container spacing={2}>
                            <Grid item xs={12} lg={6}>
                              <Input label={'name:'} type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                              <Input label={'target:'} type={'text'} value={target} onChange={(e) => setTarget(e.target.value)} />
                            </Grid>
                          </Grid>
                          <Grid item container spacing={2}>
                            <Grid item xs={12} lg={6}>
                              <Input label={'duration:'} type={'text'} value={duration} onChange={(e) => setDuration(e.target.value)} />
                              <Input label={'age_range:'} type={'text'} value={age_range} onChange={(e) => setAge_range(e.target.value)} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <Input type={'text'} label={'description:'} multiline={true} rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Grid>
                          </Grid>
                          <Grid item container spacing={2}>
                            <Grid item xs={12} lg={6}>
                              <Input label={'starting_description:'} type={'text'} value={starting_description} onChange={(e) => setStarting_description(e.target.value)} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <Input type={'text'} label={'saze:'} value={saze} onChange={(e) => setSaze(e.target.value)} />
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12} lg={6}>
                              <Input label={'price:'} type={'text'} value={price} onChange={(e) => setPrice(e.target.value)} />
                              <Input type={'text'} label={'discount:'} value={discount} onChange={(e) => setDiscount(e.target.value)} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <RadioGroup color={'secondary'} aria-label='status' name='status' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <FormControlLabel value={'1'} control={<Radio />} label={'فعال'} labelPlacement='start' />
                                <FormControlLabel value={'-1'} control={<Radio />} label={'غیرفعال'} disabled={true} labelPlacement='start' />
                              </RadioGroup>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'} spacing={2}>
              <Grid item xs={12} md={2}>
                <Button fullWidth={true} type={'contained'} label={'ثبت'} onClick={handleSubmit} />
              </Grid>
              <Grid item md={2}>
                <Button fullWidth={true} type={'outlined'} label={'انصراف'} onClick={() => Go.Back()} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
