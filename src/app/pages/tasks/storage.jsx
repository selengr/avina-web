import { testHttp } from '../../../../../api';
import { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SuspenseImg } from './SuspenseImage';
import { Backdrop, Card, CardActionArea, CardContent, CircularProgress, createTheme, makeStyles, ThemeProvider, Typography } from '@mui/material';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  btnCard: {
    width: '100%',
    height: '100%',
    minWidth: 130,
    margin: '10px',
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      light: '#93e6a5',
      main: '#78E08F',
      dark: '#549c64',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e69393',
      main: '#E07878',
      dark: '#9c5454',
      contrastText: '#fff',
    },
  },
});
export default function PreTaskData() {
  const classes = useStyles();
  const navigate = useNavigate();
  const testID = localStorage.testID;
  const questionnaireID = localStorage.questionnaireID;
  useEffect(() => {
    getTaskItem().then((r) => r);
  });
  const getTaskItem = async () => {
    try {
      const result = await testHttp.getTaskItem(testID, questionnaireID);
      localStorage.setItem('stroop', JSON.stringify(result.data.data));
    } catch (e) {}
  };
  return (
    <>
      {localStorage.stroop && (
        <>
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress color={'secondary'} variant='indeterminate' size={150} thickness={6} />
              </Backdrop>
            }
            style={{ overFlow: 'hidden' }}>
            <div className='container-fluid mx-0 '>
              <div className='row d-flex flex-row-reverse justify-content-start mt-3'>
                <div className='col-12 p-2'>
                  <Card className={'buttonRounded'}>
                    <CardContent dir={'rtl'}>
                      <Typography variant={'h6'} align='right' style={{ fontSize: '12pt' }}>
                        {JSON.parse(localStorage.stroop).starting_description}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className={'row'}>
                <div className='col-12 col-md-6 p-2 mx-auto'>
                  <CardActionArea onClick={() => navigate('/task')}>
                    <Card className={'buttonRounded softShadow'}>
                      <CardContent>
                        <ThemeProvider theme={theme}>
                          <Typography variant='inherit' component='div' align='center'>
                            <ArrowBackIosRounded fontSize='small' color='primary' />
                          </Typography>
                          <br />
                          <Typography variant='body1' component='div' align='center'>
                            شروع تکلیف
                          </Typography>
                        </ThemeProvider>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </div>
                <div className='col-12 col-md-6 p-2 mx-auto'>
                  <CardActionArea onClick={() => navigate('/task')}>
                    <Card className={'buttonRounded softShadow'}>
                      <CardContent>
                        <ThemeProvider theme={theme}>
                          <Typography variant='inherit' component='div' align='center'>
                            <ArrowForwardIosRounded fontSize='small' color='secondary' />
                          </Typography>
                          <br />
                          <Typography variant='body1' component='div' align='center'>
                            بازگشت به ارزیابی‌ها
                          </Typography>
                        </ThemeProvider>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </div>
              </div>
            </div>
            {JSON.parse(localStorage.stroop).question_groups.map((item) => {
              return (
                <>
                  {item.questions.map((item, index) => {
                    return <SuspenseImg key={index} alt={index} src={item.image} className={'d-none'} />;
                  })}
                </>
              );
            })}
          </Suspense>
        </>
      )}
    </>
  );
}
