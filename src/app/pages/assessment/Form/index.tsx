import { Card, CardContent, Grid, MenuItem, SelectChangeEvent } from '@mui/material';
import { Button, DropDown, Input, Text, Title } from 'components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material/styles';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Go, Service, Util } from 'utils';
import * as Types from 'redux/action/types';
import { editAssessment, getAssessment, getQuestionnaires } from '../Logic';

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

interface FieldType {
  value: string;
  error: string;
}

interface SelectType {
  value: any;
  error: string;
}

export default function Index() {
  const { t } = useTranslation();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const questionnaireForm: any = useSelector<any>((res) => res.questionnaireShowList);
  const [questionnaireCats, setQuestionnaireCats] = useState<any[]>([]);
  const [title, setTitle] = useState<FieldType>({ value: '', error: '' });
  const [description, setDescription] = useState<FieldType>({ value: '', error: '' });
  const [disabled, setDisabled] = useState<boolean>(false);
  const owner_id = Util.extractID();
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState<SelectType>({ value: [], error: '' });
  const theme = useTheme();
  const renderAfterCalled = useRef(false);
  const assessmentID = qs.parse(location.search, { ignoreQueryPrefix: true }).id;
  const handleChange = (event: SelectChangeEvent<typeof selectedQuestionnaire>) => {
    const {
      target: { value },
    } = event;
    try {
      setSelectedQuestionnaire({
        ...selectedQuestionnaire,
        value: typeof value === 'string' ? value.split(',') : value,
        error: '',
      });
    } catch (e) {}
  };

  useEffect(() => {
    const questionnaire: any[] = [];
    try {
      questionnaireForm.data.data.questionnaire_categories.forEach((item) => {
        Object.values(item.questionnaires).forEach((items) => {
          questionnaire.push(items);
        });
      });
      setQuestionnaireCats(questionnaire);
    } catch (error) {
      // console.log('Error Questionnaire', error);
    }
  }, [questionnaireForm]);

  const handleSubmit = async () => {
    try {
      const data = {
        owner_id,
        name: title.value,
        description: description.value,
        questionnaires: selectedQuestionnaire,
      };
      if (location.search) {
        await editAssessment(data, assessmentID);
      } else {
        await Service.Request(Types.ASSESSMENT_STORE_REQUEST, data);
      }
      navigate('/assessments');
    } catch (e) {}
  };
  useEffect(() => {
    if (assessmentID) {
      setDisabled(true);
      const tempQuestionnaires: string[] = [];
      getAssessment(assessmentID).then((res) => {
        setTitle({ ...title, value: res?.data.data.name, error: '' });
        setDescription({ ...description, value: res?.data.data.description, error: '' });
        res?.data.data.questionnaires.map((item) => {
          return tempQuestionnaires.push(item.id.toString());
        });
      });
      setSelectedQuestionnaire({ ...selectedQuestionnaire, value: tempQuestionnaires, error: '' });
    }
  }, []);

  // useEffect(() => {
  //   try {
  //     const { name, answered_count, description, questionnaires } = assessmentsForm.data.data;
  //     const tempQuestionnaires: string[] = [];
  //     questionnaires.map((item) => {
  //       return tempQuestionnaires.push(item.id.toString());
  //     });
  //     setTitle({ ...title, value: name, error: '' });
  //     setDescription({ ...description, value: description, error: '' });
  //     setSelectedQuestionnaire({ ...selectedQuestionnaire, value: tempQuestionnaires, error: '' });
  //     // setDisabled(!!answered_count);
  //     setDisabled(location.pathname.includes('edit'));
  //   } catch (error) {
  //     // console.log('show one assessment error');
  //     setSelectedQuestionnaire({ ...selectedQuestionnaire, value: [], error: '' });
  //   }
  // }, [assessmentsForm]);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      if (location.pathname.includes('edit')) {
        getAssessment(assessmentID);
        getQuestionnaires();
        // fetchOne().then((r) => r);
        // getQuestionnaires().then((r) => r);
      } else {
        getQuestionnaires();
        // getQuestionnaires().then((r) => r);
      }
    }
  }, []);

  return (
    <Card sx={{ minHeight: '93vh' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item container alignItems={'center'}>
            <Grid item xs={12} md={6}>
              <Title value={assessmentID ? `${t(messages.Input_Global_EditAssessment())}` : `${t(messages.Input_Global_AddAssessment())}`} />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <Card variant='outlined'>
                <CardContent>
                  <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height: 'calc(93vh - 195px)' }}>
                    <Grid item container xs={12} md={10} xl={8} spacing={2}>
                      <Text type={'body'} variant={'web14'} weight={'regular'}>
                        {t(messages.Text_Assessment_AssessmentDescription())}
                      </Text>
                      <Grid item container xs={12} lg={6}>
                        <Grid item xs={12}>
                          <Input
                            type={'text'}
                            label={`${t(messages.Input_Assessment_TitleLabel())}`}
                            value={title.value}
                            error={title.error.length >= 1}
                            errorMsg={title.error}
                            onChange={(e) => {
                              setTitle({ ...title, value: e.target.value, error: '' });
                            }}
                            onBlur={(e) =>
                              e.target.value.length < 1
                                ? setTitle({
                                    ...title,
                                    error: `${t(messages.Input_Title_Errors())}`,
                                  })
                                : setTitle({ ...title, error: '' })
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <DropDown
                            disabled={disabled}
                            id={'Questionnaire'}
                            label={`${t(messages.Input_Assessment_DropDownLabel())}`}
                            value={selectedQuestionnaire.value}
                            error={selectedQuestionnaire.error.length >= 1}
                            errorMsg={selectedQuestionnaire.error}
                            onChange={handleChange}
                            onBlur={(e) =>
                              e.target.value.length < 1
                                ? setSelectedQuestionnaire({
                                    ...selectedQuestionnaire,
                                    error: `${t(messages.Input_DropDownQuestionnaire_Errors())}`,
                                  })
                                : setSelectedQuestionnaire({ ...selectedQuestionnaire, error: '' })
                            }
                            MenuProps={MenuProps}
                            multiple>
                            {questionnaireCats.map((item, index) => {
                              return (
                                <MenuItem key={index} style={getStyles(item.id, selectedQuestionnaire.value, theme)} value={item.id}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                          </DropDown>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Input
                          type={'text'}
                          label={`${t(messages.Input_Assessment_InputLabel())}`}
                          multiline={true}
                          rows={4}
                          value={description.value}
                          error={description.error.length >= 1}
                          errorMsg={description.error}
                          onChange={(e) => {
                            setDescription({ ...description, value: e.target.value, error: '' });
                          }}
                          onBlur={(e) =>
                            e.target.value.length < 1
                              ? setDescription({
                                  ...description,
                                  error: `${t(messages.Input_DescriptionAssessment_Errors())}`,
                                })
                              : setDescription({ ...description, error: '' })
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
              <Grid item xs={12} md={4} lg={3} xl={2}>
                <Button
                  color={'primary'}
                  type={'contained'}
                  disabled={description.value.length === 0 || title.value.length === 0 || selectedQuestionnaire.value.length === 0}
                  label={assessmentID ? `${t(messages.Input_Global_EditAssessment())}` : `${t(messages.Input_Global_AddAssessment())}`}
                  fullWidth={true}
                  onClick={handleSubmit}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3} xl={2}>
                <Button color={'primary'} type={'outlined'} label={`${t(messages.Input_Global_Cancel())}`} fullWidth={true} onClick={() => Go.Back()} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export { Index as AssessmentForm };
