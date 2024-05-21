import { Card, CardContent, Grid, RadioGroup, Slide } from '@mui/material';
import { Button, CardBtn, ProgressBar, Radio, Text, Title } from 'components';
import { useLocation, useNavigate } from 'react-router-dom';
import { testHttp } from 'api';
import { useEffect, useRef, useState } from 'react';
import qs from 'qs';
import { Go, Util } from 'utils';
import { useDebounce, useDebounceFn } from 'ahooks';
import { useDispatch } from 'react-redux';
import { setAlert } from 'redux/action/creators';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();

  const testID = qs.parse(location.search, { ignoreQueryPrefix: true }).test_id;
  const qID = qs.parse(location.search, { ignoreQueryPrefix: true }).q_id;
  const [questions, setQuestions] = useState<any[]>([]);
  const [textQuestions, setTextQuestions] = useState<any[]>([]);
  // const [typeQuestions, setTypeQuestions] = useState<any[]>([]);
  const [singleQuestion, setSingleQuestion] = useState<any[]>([]);
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const [testName, setTestName] = useState<any>({});
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progressValue, setProgressValue] = useState(0);
  const [answerId, setAnswerId] = useState<any[]>([]);
  const [animate, setAnimate] = useState<boolean>(false);
  const [radioState, setRadioState] = useState<boolean>(false);
  const [discNext, setDiscNext] = useState<any[]>([]);
  const question = useDebounce(singleQuestion, { wait: 150 });
  const QIndex = useDebounce(numberQuestion, { wait: 200 });
  // const transition = useDebounce(animate, { wait: 1000 });
  const containerRef = useRef(null);

  useEffect(() => {
    handleGetQuestions().then((r) => r);
    handleQuestionName().then((r) => r);
  }, []);

  useEffect(() => {
    setAnimate(false);
    setRadioState(false);
    handleCondition();
  }, [QIndex]);

  const handleGetQuestions = async () => {
    const result = await testHttp.getQuestions(testID, qID);
    setQuestions(result.data.data);
    // console.log(result.data.data);
    const tempTextQuestions = [...textQuestions];
    result.data.data.forEach((item) => {
      tempTextQuestions.push(item.text);
    });
    setTextQuestions(tempTextQuestions);

    setSingleQuestion(result.data.data[QIndex].options);
    // const tempTypeQuestions = [...typeQuestions];
    // result.data.data.map((item) => {
    //   tempTypeQuestions.push(item.type);
    // });
    // setTypeQuestions(tempTypeQuestions);
  };

  const handleQuestionName = async () => {
    try {
      const result = await testHttp.getTestInfo(testID);
      const foundQuestionnaires = result.data.data.questionnaires.findIndex((e) => e.id === Number(qID));
      setTestName({
        assessment: result.data.data.name,
        questionnaire: result.data.data.questionnaires[foundQuestionnaires].name,
      });
    } catch (e) {
      // console.log('Error', e);
    }
  };

  const handleNextQuestion = (id) => {
    setRadioState(true);
    if (answerId[QIndex] !== -1) {
      answerId[QIndex] = id;
      if (questions[QIndex].type === '3') {
        discNext[QIndex] = id + 4;
      }
    } else {
      setAnswerId([...answerId, { id: id, isChecked: true }]);
      if (questions[QIndex].type === '3') {
        setDiscNext([...discNext, id + 4]);
      }
    }
    if (QIndex <= questions.length) {
      setNumberQuestion(QIndex + 1);
      if (QIndex < questions.length) {
        setActiveStep(QIndex + 1);
        setProgressValue((activeStep + 1) * (100 / questions.length));
      }
    }
  };

  const handleBackQuestion = () => {
    setNumberQuestion(QIndex - 1);
    setActiveStep(QIndex - 1);
    setProgressValue(progressValue - 100 / questions.length);
  };

  const handleSubmit = async () => {
    try {
      const data = {
        test_id: testID,
        questionnaire_id: qID,
        options_id: answerId,
      };

      await testHttp.submitTestAnswer(data);
      // Go.Back();
      navigate(-1);
      dispatch(setAlert(true, 'success', `${t(messages.Alert_MyAssessmentQuestions_Success_SubmitResult())}`, 'Done') as any);
    } catch (e) {
      // console.log('Error', e);
      dispatch(setAlert(true, 'error', `${t(messages.Alert_MyAssessmentQuestions_Error_SubmitResult())}`, 'Alert') as any);
    }
  };

  const handleCondition = () => {
    try {
      if (QIndex <= questions.length - 1) {
        // if (singleQuestion.length !== 0) {
        setSingleQuestion(questions[QIndex].options);
        // }
      }
    } catch (e) {}
    run();
  };
  const { run } = useDebounceFn(
    () => {
      setAnimate(true);
      setRadioState(false);
    },
    {
      wait: 200,
    },
  );

  const navigate = useNavigate();
  return (
    <>
      <Card sx={deviceType === 'web' ? { minHeight: '93vh' } : { minHeight: '80vh' }}>
        <CardContent sx={{ pb: '16px !important' }}>
          <Grid container>
            <Grid item container justifyContent={'space-between'}>
              <Grid item alignSelf={'center'}>
                <Title value={testName.assessment} />
                <Text variant={fontSize} type={'title2'} weight={'regular'}>
                  {testName.questionnaire}
                </Text>
              </Grid>
              <Grid item>
                <CardBtn value={`${t(messages.Input_Global_Cancel())}`} icon={'Left'} onClick={() => Go.Back()} />
              </Grid>
            </Grid>
            <Grid item container spacing={2} sx={{ mt: '1vh' }}>
              <Grid item xs={12}>
                <ProgressBar percent={progressValue} />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                {questions.length < activeStep + 1 ? (
                  <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                    {t(messages.Text_MyAssessmentQuestions_ConfirmAnswer())}
                  </Text>
                ) : (
                  <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                    {' '}
                    {t(messages.Text_MyAssessmentQuestions_Question())} {activeStep + 1} {t(messages.Text_MyAssessmentQuestions_From())} {questions.length}{' '}
                  </Text>
                )}
              </Grid>
            </Grid>
            {questions.length && QIndex < questions.length ? (
              <Grid item xs={12} sx={{ mt: '1vh' }}>
                <Card variant={'outlined'} sx={deviceType === 'web' ? { minHeight: 'calc(88vh - 180px)' } : { minHeight: 'calc(80vh - 200px)' }}>
                  <CardContent ref={containerRef}>
                    <Grid container>
                      <Slide direction='right' in={animate} container={containerRef.current} timeout={300} unmountOnExit>
                        <Grid item xs={12} sx={{ pr: '9px' }}>
                          <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                            {textQuestions[QIndex]}
                          </Text>
                        </Grid>
                      </Slide>
                      <Slide direction='right' in={animate} container={containerRef.current} timeout={600} unmountOnExit>
                        <Grid item xs={12} sx={deviceType === 'web' ? { mt: '10vh' } : { mt: '10px' }}>
                          <RadioGroup aria-label='question' defaultValue='' name='radio-buttons-group'>
                            {question.map((item) => {
                              return (
                                <Radio
                                  key={item.id}
                                  label={item.text}
                                  value={item.id}
                                  color={'secondary'}
                                  checked={answerId[QIndex] === item.id}
                                  onChange={() => handleNextQuestion(item.id)}
                                  onClick={() => handleNextQuestion(item.id)}
                                  disabled={questions[QIndex].type === '3' ? QIndex % 2 !== 0 && discNext[QIndex - 1] === item.id : radioState}
                                />
                              );
                            })}
                          </RadioGroup>
                        </Grid>
                      </Slide>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ) : (
              <Grid item container justifyContent={'center'} sx={{ marginTop: '20vh' }}>
                <Text weight={'bold'} variant={fontSize}>
                  {questions.length === 0 ? `${t(messages.Input_MyAssessmentQuestions_LoadingQuestions())}` : `${t(messages.Input_MyAssessmentQuestions_FinalConfirm())}`}
                </Text>
              </Grid>
            )}
            {questions.length > 0 && (
              <>
                <Grid item container justifyContent={'center'} spacing={2} sx={{ mt: '1px' }}>
                  <Grid item md={2} xs={6}>
                    <Button type={'outlined'} label={`${t(messages.Input_MyAssessmentQuestions_Previous())}`} onClick={handleBackQuestion} fullWidth={true} disabled={QIndex === 0} />
                  </Grid>
                  <Grid item md={2} xs={6}>
                    {QIndex === questions.length ? (
                      <Button type={'contained'} label={`${t(messages.Input_Global_FinalSubmit())}`} onClick={handleSubmit} fullWidth={true} />
                    ) : (
                      <Button
                        type={'contained'}
                        label={`${t(messages.Input_MyAssessmentQuestions_Next())}`}
                        onClick={() => handleNextQuestion(answerId[QIndex])}
                        fullWidth={true}
                        disabled={!answerId[QIndex]}
                      />
                    )}
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
