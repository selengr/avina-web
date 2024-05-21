import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Backdrop, Card, CardActionArea, CardContent, CircularProgress, createTheme, makeStyles, ThemeProvider, Typography } from '@mui/material';
import { ArrowBackIosRounded } from '@mui/icons-material';
import { testHttp } from 'api';

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
export default function PostTaskData() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const data = JSON.parse(localStorage.taskData);
      const result = await testHttp.submitTaskAnswer(data);
      if (result.data.success === true) {
        navigate('/my/assessment');
      }
    } catch (e) {
      // console.log('Error', e);
    }
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
                      <Typography variant={'h6'} align='center' style={{ fontSize: '13pt' }}>
                        تسک استروپ را با موفقیت به پایان رساندید برای ارسال دیتا به سرور و نمایش گزارش دکمه زیر را فشار دهید
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className='col-12 col-md-6 p-2 mx-auto'>
                  <CardActionArea onClick={() => handleSubmit()}>
                    <Card className={'buttonRounded softShadow'}>
                      <CardContent>
                        <ThemeProvider theme={theme}>
                          <Typography variant='inherit' component='div' align='center'>
                            <ArrowBackIosRounded fontSize='large' color='primary' />
                          </Typography>
                          <br />
                          <Typography variant='h6' component='div' align='center'>
                            ذخیره سازی پاسخ‌ها
                          </Typography>
                        </ThemeProvider>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </div>
              </div>
            </div>
          </Suspense>
        </>
      )}
    </>
  );
}
