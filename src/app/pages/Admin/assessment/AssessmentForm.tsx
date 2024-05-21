import { Card, CardContent, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, SelectChangeEvent } from '@mui/material';
import { Button, DropDown, Input, Title } from 'components';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { adminHttp, questionnaireHttp } from 'api';
import { useLocation } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material/styles';
import { Go, Util } from 'utils';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.7 + ITEM_PADDING_TOP,
      width: 250,
      padding: '8px',
      fontSize: '6px',
    },
  },
  MenuItemProps: {
    style: {
      padding: '8px',
      fontSize: '6px',
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function AssessmentForm() {
  const location = useLocation();
  const theme = useTheme();
  const owner_id = Util.extractID();
  const [assessmentStatus, setAssessmentStatus] = useState<string>('');
  const [assessmentName, setAssessmentName] = useState<string>('');
  const [assessmentCapacity, setAssessmentCapacity] = useState();
  const [assessmentDescription, setAssessmentDescription] = useState<string>('');
  const [assessmentKey, setAssessmentKey] = useState<string>('');
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState<any[]>([]);
  const [questionnaireCats, setQuestionnaireCats] = useState<any[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedQuestionnaire>) => {
    const {
      target: { value },
    } = event;
    try {
      setSelectedQuestionnaire(typeof value === 'string' ? value.split(',') : value);
    } catch (e) {}
  };

  useEffect(() => {
    if (location.pathname.includes('edit')) {
      fetchOne().then((r) => r);
      getQuestionnaires().then((r) => r);
    } else {
      getQuestionnaires().then((r) => r);
    }
  }, [owner_id]);

  const getQuestionnaires = async () => {
    const questionnaire: any[] = [];
    try {
      const resultList = await questionnaireHttp.getQuestionnairesList('');
      resultList.data.data.questionnaire_categories.forEach((item) => {
        Object.values(item.questionnaires).forEach((items) => {
          questionnaire.push(items);
        });
      });
      setQuestionnaireCats(questionnaire);
    } catch (error) {
      // console.log('Error Questionnaire', error);
    }
  };

  const fetchOne = async () => {
    try {
      const result = await adminHttp.showAssessment(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      const { name, description, status, key, capacity } = result.data.data;
      setAssessmentStatus(status);
      setAssessmentName(name);
      setAssessmentDescription(description);
      setAssessmentCapacity(capacity);
      setAssessmentKey(key);
    } catch (error) {
      // console.log('show one assessment error');
    }
  };

  const handleSubmit = async () => {
    try {
      if (location.search) {
        const data = {
          name: assessmentName,
          status: assessmentStatus,
          description: assessmentDescription,
          capacity: assessmentCapacity,
        };
        await adminHttp.editAssessment(qs.parse(location.search, { ignoreQueryPrefix: true }).id, data);
      } else {
        const data = {
          name: assessmentName,
          owner_id: owner_id,
          key: assessmentKey,
          status: parseInt(assessmentStatus),
          description: assessmentDescription,
          questionnaires: selectedQuestionnaire,
        };
        await adminHttp.createAssessment(data);
      }
      Go.Back();
    } catch (error) {
      // console.log('create item error: ', error);
    }
  };
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item container alignItems={'center'}>
              <Grid item xs={12} md={6}>
                <Title value={qs.parse(location.search, { ignoreQueryPrefix: true }).id ? 'ویرایش ارزیابی' : 'افزودن ارزیابی جدید'} />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardContent>
                    <Grid container direction='row' justifyContent='center' sx={{ height: 'calc(93vh - 195px)' }}>
                      <Grid item container xs={12} md={10} lg={8} xl={6} spacing={2}>
                        <Grid item container xs={12} lg={6} sx={{ height: 'calc(93vh - 490px)' }}>
                          <Grid item xs={12}>
                            <Input type={'text'} label={'عنوان ارزیابی:'} value={assessmentName} onChange={(e) => setAssessmentName(e.target.value)} />
                          </Grid>
                          <Grid item xs={12} sx={location.search ? { display: 'none' } : { display: 'inline' }}>
                            <Input type={'text'} label={'کلید:'} onChange={(e) => setAssessmentKey(e.target.value)} />
                          </Grid>
                          <Grid item xs={12} sx={location.search ? { display: 'inline' } : { display: 'none' }}>
                            <Input type={'text'} label={'ظرفیت:'} value={assessmentCapacity} onChange={(e) => setAssessmentCapacity(e.target.value)} />
                          </Grid>
                        </Grid>
                        <Grid item container xs={12} lg={6}>
                          <Grid item xs={12}>
                            <Input type={'text'} label={'توضیحات ارزیابی:'} multiline={true} rows={4} value={assessmentDescription} onChange={(e) => setAssessmentDescription(e.target.value)} />
                          </Grid>
                          <Grid item xs={12} sx={location.search ? { display: 'none' } : { display: 'inline' }}>
                            <DropDown id={'Questionnaire'} label='انتخاب سنجش‌(های) مورد نظر:' value={selectedQuestionnaire} onChange={handleChange} MenuProps={MenuProps} multiple>
                              {questionnaireCats.map((item, i) => {
                                return (
                                  <MenuItem key={i} style={getStyles(item.id, selectedQuestionnaire, theme)} value={item.id.toString()}>
                                    {item.name}
                                  </MenuItem>
                                );
                              })}
                            </DropDown>
                          </Grid>
                          <Grid item xs={12}>
                            <RadioGroup color={'secondary'} aria-label='status' name='status' value={assessmentStatus} onChange={(e) => setAssessmentStatus(e.target.value)}>
                              <FormControlLabel value={'1'} control={<Radio />} label={'فعال'} labelPlacement='start' />
                              <FormControlLabel value={'-1'} control={<Radio />} label={'پاک شده'} labelPlacement='start' />
                              <FormControlLabel value={'0'} control={<Radio />} label={'غیرفعال'} labelPlacement='start' />
                              <FormControlLabel value={'2'} control={<Radio />} label={'موقعیتی'} labelPlacement='start' />
                              <FormControlLabel value={'3'} control={<Radio />} label={'پکیج'} labelPlacement='start' />
                            </RadioGroup>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} md={4} lg={3} xl={2}>
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
