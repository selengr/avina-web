import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Divider, Grid } from '@mui/material';
import { Divide, Text, Title } from 'components';
import { useLocation } from 'react-router-dom';
// import { useDebounceFn } from 'ahooks';
import pic from 'assets/images/example.webp';
import qs from 'qs';
import { Util } from 'utils';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionnaireShowOne } from 'redux/action/creators';

export default function Index() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const renderAfterCalled = useRef(false);
  const fontSize = Util.DefaultFontSize();
  const questionnaireInfo: any = useSelector<any>((res) => res.questionnaireShowOne);
  const [questionnaires, setQuestionnaires] = useState<any>([]);
  const deviceType = Util.ScreenSize();
  const fetchList = async () => {
    await dispatch(QuestionnaireShowOne(qs.parse(location.search, { ignoreQueryPrefix: true }).id) as any);
  };

  useEffect(() => {
    try {
      setQuestionnaires(questionnaireInfo.data.data.questionnaire);
    } catch (error) {
      // console.log('list error: ', error);
    }
  }, [questionnaireInfo]);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchList().then((r) => r);
    }
  }, []);

  // const { run } = useDebounceFn(
  //   (data?: string | undefined) => {
  //     fetchList(data).then((r) => r);
  //   },
  //   {
  //     wait: 2000,
  //   },
  // );
  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item container alignItems={'center'}>
              <Grid item xs={12}>
                <Title value={questionnaires.name} />
              </Grid>
              <Grid item container xs={12} justifyContent={'center'} sx={{ my: 3 }}>
                <img src={pic} alt='سایا' style={{ width: '100%' }} />
              </Grid>
              {/* @Dev the whole Content of each introduction data*/}
              <Grid item xs={10} sx={{ mx: 'auto', my: 3 }}>
                <Card variant={'outlined'}>
                  <CardContent>
                    <Grid container xs={12} style={deviceType === 'mobile' ? { justifyContent: 'space-between' } : { justifyContent: 'space-evenly' }} alignItems={'center'}>
                      <Grid item container xs={3.5} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                        <Grid item>
                          <Text variant={fontSize} weight={'bold'}>
                            {t(messages.Text_Global_Price())}
                          </Text>
                        </Grid>
                        <Grid item>
                          <Divide />
                        </Grid>
                        <Grid item>
                          <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                            {`${questionnaires.price}${t(messages.Text_Global_Cost())} `}
                          </Text>
                        </Grid>
                      </Grid>
                      <Divider orientation='vertical' variant='middle' flexItem style={deviceType === 'mobile' ? { display: 'none' } : { display: 'iniline-block' }} />
                      <Grid item container xs={3.5} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                        <Grid item>
                          <Text variant={fontSize} weight={'bold'}>
                            {t(messages.Text_IntroductionInfo_ItemNumber())}
                          </Text>
                        </Grid>
                        <Grid item>
                          <Divide />
                        </Grid>
                        <Grid item>
                          <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                            {`${questionnaires.questions_count}${t(messages.Input_Global_Iّّtem())} `}
                          </Text>
                        </Grid>
                      </Grid>
                      <Divider orientation='vertical' variant='middle' flexItem style={deviceType === 'mobile' ? { display: 'none' } : { display: 'iniline-block' }} />
                      <Grid item container xs={4} spacing={2} direction={'column'} alignItems={'center'} alignContent={'center'}>
                        <Grid item>
                          <Text variant={fontSize} weight={'bold'}>
                            {t(messages.Text_Global_RequireTime())}
                          </Text>
                        </Grid>
                        <Grid item>
                          <Divide />
                        </Grid>
                        <Grid item>
                          <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                            {`${questionnaires.duration}`}
                          </Text>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* @Dev the whole Content of each introduction data*/}
              <Grid item container xs={12} justifyContent={'right'}>
                <Text variant={fontSize} type={'body'} weight={'regular'} style={{ color: '#6a6a6a' }}>
                  {questionnaires.description}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
