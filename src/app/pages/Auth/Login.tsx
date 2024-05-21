import { Button, CardBtn, Input, Logo, OTP, Text } from 'components';
import { Box, CircularProgress, Grid } from '@mui/material';
import img from 'assets/images/Login.webp';
import { useEffect, useState } from 'react';
import { CheckPhone, CheckToken, EnterOTP, EnterPass, SSOLoginGet } from './Logic';
import { Util } from 'utils';
import { useCountDown } from 'ahooks';
import { useReadOTP } from 'react-read-otp';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import qs from 'qs';

// import { ArcaptchaWidget } from 'arcaptcha-react';

interface FieldType {
  value: string;
  error: string;
}

export function LoginForm() {
  // const Ref = useRef();
  const { t } = useTranslation();
  const [state, setState] = useState<string>('');
  const [phone, setPhone] = useState<FieldType>({ value: '', error: '' });
  const [pass, setPass] = useState<FieldType>({ value: '', error: '' });
  const [code, setCode] = useState<string>('');
  useReadOTP(setCode);
  const [loading, setLoading] = useState<boolean>(false);
  const [OTPButton, setOTPButton] = useState<boolean>(false);
  const [disabledPhone, setDisabledPhone] = useState<boolean>(true);
  const [disabledPass, setDisabledPass] = useState<boolean>(true);
  // const [captcha, setCaptcha] = useState<boolean>(true);

  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const [targetDate, setTargetDate] = useState<number>(Date.now() + 30000);
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      setOTPButton(false);
    },
  });

  useEffect(() => {
    // if url = code  ? CheckToken(code)
    if (qs.parse(location.search, { ignoreQueryPrefix: true }).token) {
      (async () => {
        await CheckToken(qs.parse(location.search, { ignoreQueryPrefix: true }).token);
      })();
    }
    if (phone.value.length < 11) {
      setDisabledPhone(true);
    } else {
      setDisabledPhone(false);
    }
  }, [phone]);

  useEffect(() => {
    if (pass.value.length > 0) {
      setDisabledPass(false);
    } else if (code.length > 0) {
      setDisabledPass(false);
    } else {
      setDisabledPass(true);
    }
  }, [pass, code]);

  const check = (argPhone: string, argStatus: string, argEvent?) => {
    argEvent.preventDefault();
    setLoading(false);
    setPass({ ...pass, value: '', error: '' });
    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
      englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];

    for (let i = 0; i < 10; i++) {
      argPhone = argPhone.replace(persianNumbers[i], String(i)).replace(englishNumbers[i], String(i));
    }

    if (state === 'otp') {
      setTargetDate(Date.now() + 30000);
      setOTPButton(true);
      setLoading(false);
    }
    CheckPhone(argPhone, argStatus).then((res) => {
      try {
        setState(res.command);
      } catch (e) {
        setState('');
      }
      setLoading(false);
    });
  };
  const checkPhoneNumber = (data: string) => {
    const regex = /^[0-9\b]+$/;
    if (data === '' || regex.test(data)) {
      setPhone({ ...phone, value: `${data}`, error: '' });
    }
  };
  const checkPass = (argPhone, argPass, argOTP, argEvent?) => {
    argEvent.preventDefault();
    setLoading(true);
    if (argOTP) {
      EnterOTP(argPhone, argPass).then((r) => setLoading(r));
    } else if (!argOTP) {
      EnterPass(argPhone, argPass).then((r) => setLoading(r));
    }
  };
  // const checktest = () =>{
  //   alert("jjjj")
  // }

  return (
    <>
      <Grid container direction={'row-reverse'}>
        <Grid item xs={12} lg={7}>
          <Box
            sx={
              deviceType === 'mobile'
                ? {
                    minHeight: `${window.innerHeight / 4.8}px`,
                    maxHeight: '100%',
                    width: '100%',
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                  }
                : {
                    minHeight: `${window.innerHeight}px`,
                    maxHeight: '100%',
                    width: '100%',
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }
            }
          />
        </Grid>
        <Grid item container lg={5} sx={deviceType === 'mobile' ? { padding: '0 16px' } : { padding: '0' }}>
          <Grid item container alignItems={'flex-end'} justifyContent={'flex-start'} xs={12} sx={{ marginBottom: 10 }}>
            <Grid item mx={'auto'} mt={2}>
              <Logo />
            </Grid>
          </Grid>
          <Grid item container alignItems={'flex-end'} justifyContent={'flex-start'}>
            <Grid item sx={{ mx: 'auto' }} xs={12} sm={8} md={6} lg={12}>
              <Box
                component='form'
                noValidate
                width={'100%'}
                onSubmit={state === '' ? (e) => check(phone.value, '', e) : (e) => checkPass(phone.value, state === '/enterCode' ? code : pass.value, state === '/enterCode', e)}>
                <Grid item container justifyContent={'center'} lg={12}>
                  <Grid item container lg={6} direction={'row'} justifyContent={'center'} alignSelf={'center'}>
                    <Grid
                      item
                      xs={12}
                      sx={
                        state === '/enterCode' || state === '/login'
                          ? {
                              mx: 'auto',
                              textAlign: 'center',
                            }
                          : { display: 'none' }
                      }>
                      <Text variant={fontSize}>{state === '/enterCode' ? <>{t(messages.Text_AuthLogin_OtpState())}</> : <>{t(messages.Text_AuthLogin_PassState())}</>}</Text>
                      <Text style={{ marginTop: '10px', marginBottom: '-22px' }} variant={'web30'} weight={'bold'}>
                        {phone.value}
                      </Text>
                    </Grid>
                    <Grid
                      style={deviceType === 'mobile' ? { marginBottom: '110px' } : { marginTop: '-108px' }}
                      item
                      xs={12}
                      lg={12}
                      sx={state === '/enterCode' || state === '/login' ? { display: 'none' } : { marginTop: '1em' }}>
                      <Input
                        focusActive={true}
                        label={`${t(messages.Input_Global_Phone())}`}
                        name={'phone'}
                        type={'tel'}
                        value={phone.value}
                        error={phone.error.length >= 1}
                        errorMsg={phone.error}
                        onChange={(e) => {
                          checkPhoneNumber(e.target.value);
                          // setPhone({ ...phone, value: e.target.value, error: '' });
                        }}
                        disabled={loading}
                        length={11}
                        readOnly={state === '/enterCode' || state === '/login'}
                        onBlur={(e) =>
                          e.target.value.length < 11
                            ? setPhone({
                                ...phone,
                                error: `${t(messages.Alert_AuthLogin_Error_Phone())}`,
                              })
                            : setPhone({ ...phone, error: '' })
                        }
                      />
                    </Grid>
                    {state === '/login' && (
                      <Grid item xs={8} lg={12} sx={{ marginTop: '1em' }}>
                        <Input
                          icon={'Eye-Open'}
                          label={`${t(messages.Input_AuthLogin_Pass())}`}
                          placeholder={'********'}
                          name={'password'}
                          type={'password'}
                          focusActive={true}
                          error={pass.error.length >= 1}
                          errorMsg={pass.error}
                          onChange={(e) => setPass({ ...pass, value: e.target.value, error: '' })}
                          onBlur={(e) =>
                            e.target.value.length < 1
                              ? setPass({
                                  ...pass,
                                  error: `${t(messages.Alert_AuthLogin_Error_Pass())}`,
                                })
                              : setPass({ ...pass, error: '' })
                          }
                          value={pass.value}
                          disabled={loading}
                        />
                      </Grid>
                    )}
                    {state === '/enterCode' && (
                      <Grid item sx={{ marginTop: '3em', mx: 'auto' }}>
                        <OTP onChange={(e) => setCode(e)} value={code} />
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={'center'}
                  alignItems={deviceType === 'mobile' ? 'flex-end' : 'flex-start'}
                  lg={12}
                  sx={deviceType === 'mobile' ? { position: 'absolute', bottom: 10, left: 0, padding: '0 14px' } : { height: `${window.innerHeight / 3.2}px` }}>
                  <Grid item container lg={6} alignItems={'center'} justifyContent={'center'}>
                    <Grid item container xs={12}>
                      <Grid item container justifyContent={'flex-end'}>
                        <Grid item alignSelf={deviceType === 'mobile' ? 'center' : 'flex-start'} sx={state === '/enterCode' || state === '/login' ? { margin: '1px' } : { display: 'none' }}>
                          <CardBtn
                            value={`${t(messages.Input_AuthLogin_EditPhone())}`}
                            icon={'Left'}
                            onClick={() => {
                              setState('');
                              setPass({ ...pass, value: '', error: '' });
                              setCode('');
                            }}
                          />
                        </Grid>
                      </Grid>
                      {state === '' && (
                        <>
                          <Grid item xs={12}>
                            {/*<ArcaptchaWidget
                      site-key='63urwdt3no'
                      ref={Ref}
                      theme='light' //it's not required. Default is light
                      invisible={false}
                      callback={() => setCaptcha(false)}
                      error_callback={() => setCaptcha(true)}
                      reset_callback={() => setCaptcha(true)}
                      expired_callback={() => setCaptcha(true)}
                      chlexpired_callback={() => setCaptcha(true)}
                    />*/}
                            {/*margin-bottom: -40px;*/}
                            <Button type={'contained'} label={`${t(messages.Input_Global_NextStep())}`} mode={'submit'} disabled={disabledPhone || loading} fullWidth />
                            {loading && (
                              <CircularProgress
                                size={24}
                                sx={{
                                  color: 'secondary',
                                  position: 'absolute',
                                  top: '50%',
                                  left: '50%',
                                  marginTop: '-12px',
                                  marginLeft: '-12px',
                                }}
                              />
                            )}
                          </Grid>
                          <Grid item mt={2} xs={12}>
                            <Button
                              type={'outlined'}
                              onClick={() => {
                                SSOLoginGet();
                              }}
                              label={`ورود از طریق شبکه ام رسالت`}
                              mode={'button'}
                              disabled={loading}
                              fullWidth
                            />
                          </Grid>
                        </>
                      )}
                      {state === '/enterCode' && (
                        <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                          <Button
                            type={'outlined'}
                            label={`${Math.round(countdown / 1000)} ${t(messages.Input_AuthLogin_ResendCode())} `}
                            onClick={(e) => check(phone.value, 'otp', e)}
                            disabled={OTPButton}
                            fullWidth
                          />
                        </Grid>
                      )}
                      {state !== '' && (
                        <Grid item xs={12}>
                          <Box sx={{ position: 'relative' }}>
                            <Button type={'contained'} label={`${t(messages.Input_Global_Confirm())}`} mode={'submit'} disabled={disabledPass || loading} fullWidth={true} />
                            {loading && (
                              <CircularProgress
                                size={24}
                                sx={{
                                  color: 'secondary',
                                  position: 'absolute',
                                  top: '50%',
                                  left: '50%',
                                  marginTop: '-12px',
                                  marginLeft: '-12px',
                                }}
                              />
                            )}
                          </Box>
                        </Grid>
                      )}
                      {state === '/enterCode' ||
                        (state && (
                          <Grid item xs={12} sx={{ marginTop: '20px' }}>
                            <Button type={'outlined'} label={`${t(messages.Input_AuthLogin_DisposablePass())}`} onClick={(e) => check(phone.value, 'otp', e)} fullWidth />
                          </Grid>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
