import { Box, Card, CardContent, Grid, MenuItem, Paper, ToggleButton } from '@mui/material';
import { Button, CardBtn, DropDown, IconButton, Input, OTP, RoleSelector, Tab, Text, Title } from 'components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Go, Util } from 'utils';
import { useNavigate } from 'react-router-dom';
import { authHttp, profileHttp } from 'api';
import OrderItem from './OrderItem';
import 'moment/locale/fa';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import AdapterJalali from '@date-io/date-fns-jalali';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { enUS, LocalizationProvider, MobileDatePicker, PickersLocaleText } from '@mui/x-date-pickers';
import { useDispatch } from 'react-redux';
import { ProfileEdit, setAlert } from 'redux/action/creators';
import { messages } from './messages';
import i18n from 'i18next';
import { GetMe } from '../../../utils/utils';

const customEnUSLocaleText: Partial<PickersLocaleText<any>> = {
  ...enUS.components.MuiLocalizationProvider.defaultProps.localeText,
  okButtonLabel: `${i18n.t(messages.Input_Global_Confirm())}`,
  cancelButtonLabel: `${i18n.t(messages.Input_Global_Null())}`,
};
moment.locale('fa');
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

interface FieldType {
  value: string;
  error: string;
}

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const userData = Util.userAllData();
  const fontSize = Util.DefaultFontSize();

  const phone = JSON.parse(Util.Decoder(localStorage.userData)).data.email;
  const sex = JSON.parse(Util.Decoder(localStorage.userData)).data.sex === 1 ? `${i18n.t(messages.Input_Global_Male())}` : `${i18n.t(messages.Input_Global_Female())}`;
  const birth = JSON.parse(Util.Decoder(localStorage.userData)).data.birth;
  const [currentPassword, setCurrentPassword] = useState<FieldType>({ value: '', error: '' });
  const [newPassword, setNewPassword] = useState<FieldType>({ value: '', error: '' });
  const [otpPass, setOtpPass] = useState<boolean>(false);
  const [showOtpPass, setShowOtpPass] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<any>(0);
  const [btnTimer, setBtnTimer] = useState<boolean>(false);
  const inputType = 'password';
  const icon = 'Eye-Open';
  const [role, setRole] = useState<string>('');
  const gender = [
    { id: 1, value: 'male', label: `${i18n.t(messages.Input_Global_Male())}` },
    { id: 2, value: 'female', label: `${i18n.t(messages.Input_Global_Female())}` },
  ];
  const [selectedGender, setSelectedGender] = useState<string>(JSON.parse(Util.Decoder(localStorage.userData)).data.sex === 1 ? 'male' : 'female');
  const [selectedDate, setSelectedDate] = useState<any>(JSON.parse(Util.Decoder(localStorage.userData)).data.birth);
  const [fName, setFName] = useState<FieldType>({
    value: JSON.parse(Util.Decoder(localStorage.userData)).data.name,
    error: '',
  });

  const [tab, setTab] = useState('');
  const owner_id = JSON.parse(Util.Decoder(localStorage.userData)).data.last_role;
  const [ordersList, setOrdersList] = useState<any[]>([]);
  const [birthDate, setBirthDate] = useState<string>('');

  // const userData = useSelector()
  function search(data) {
    const filterRoleType = data.filter((o) => o.roleType === userData.data.data.last_role_type);
    return filterRoleType.filter((o) => o.id === userData.data.data.last_role);
  }

  useEffect(() => {
    if (birth) {
      setBirthDate(birth.split(' ')[0]);
    }

    getOrderList().then((r) => r);
    const roleType = search(userData.roles)[0].roleType;
    const type = search(userData.roles)[0].type;

    if (roleType === 1) {
      setRole('agent');
    } else if (type === 1) setRole('user');
    else setRole('scope');
  }, []);

  const resetPassword = async () => {
    try {
      await authHttp.resetPassword({
        old_password: code ? code : currentPassword.value,
        password: newPassword.value,
        confirm_password: newPassword.value,
      });
      Go.Back();
      dispatch(setAlert(true, 'success', `${i18n.t(messages.Alert_Profile_Success_ChangePass())}`, 'Done') as any);
    } catch (error: any) {
      if (error.response.data.errors[0].message === 'The password must be at least 8 characters') {
        dispatch(setAlert(true, 'error', 'رمز عبور باید حداقل شامل ۸ کاراکتر باشد.', 'Alert') as any);
      } else if (error.response.data.errors[0].message === 'The password format is invalid.') {
        dispatch(setAlert(true, 'error', 'رمز عبور باید حداقل شامل یک حرف انگلیسی کوچک و بزرگ و یک کاراکتر خاص باشد', 'Alert') as any);
      } else {
        dispatch(setAlert(true, 'error', `${i18n.t(messages.Alert_Profile_Error_ChangePass())}`, 'Alert') as any);
      }
      // console.log('Error', error);
    }
  };

  const handleCancel = () => {
    setOtpPass(false);
    setDisabled(true);
    setCurrentPassword({ ...currentPassword, value: '', error: '' });
    setNewPassword({ ...newPassword, value: '', error: '' });
  };

  useEffect(() => {
    if (currentPassword.value === '' && newPassword.value === '') {
      setDisabled(true);
    } else setDisabled(false);
  }, [currentPassword.value, newPassword.value]);

  useEffect(() => {
    if (seconds > 0) {
      setBtnTimer(false);
      // setCheckWithCode(true);
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setBtnTimer(true);
      setSeconds(`${i18n.t(messages.Input_Profile_ResendCode())}`);
      // setCheckWithCode(false);
    }
  }, [seconds]);

  const loginData = {
    phone: phone,
    status: 'otp',
  };

  const tabChange = (event: React.MouseEvent<HTMLElement>, newTab: string | null) => {
    if (newTab !== null) {
      setTab(newTab);
    }
  };

  const handleResend = () => {
    setSeconds(60);
    handleSubmit().then((r) => r);
  };

  const handleSubmit = async () => {
    await authHttp.enterPhone(loginData);
  };

  const updateUser = async () => {
    const data = {
      name: fName.value,
      sex: selectedGender === 'male' ? 1 : 2,
      birth: moment(selectedDate).format('YYYY-MM-DD'),
    } as const;
    try {
      await dispatch(ProfileEdit(data) as any);
      await GetMe();
      navigate(0);

      // dispatch(setAlert(true, 'success', `${i18n.t(messages.Alert_Profile_Success_UpdateProfile())}`, 'Done') as any);
    } catch (error) {
      // console.log('Error', error);
      // dispatch(setAlert(true, 'error', `${i18n.t(messages.Alert_Profile_Error_UpdateProfile())}`, 'Alert') as any);
    }
  };

  const getOrderList = async () => {
    let id;
    if (role === 'agent') id = owner_id;
    else id = '';

    try {
      const orderData = await profileHttp.ordersList(id);
      setOrdersList(orderData.data.data.orders);
    } catch (err) {}
  };

  useEffect(() => {
    if (role === 'scope') {
      setTab('info');
    } else if (role === 'agent' || role === 'user') {
      setTab('editInfo');
    }
  }, [role]);

  const CheckPhone = async (argPhone: string, argStatus?: string) => {
    await authHttp.enterPhone({
      phone: argPhone,
      status: argStatus,
    });
  };

  const EnterOTP = async (argPhone: string, argOTP?: string) => {
    try {
      const result = await authHttp.enterCode({
        phone: argPhone,
        code: argOTP,
      });
      if (result.data.token) {
        setShowOtpPass(true);
      }
    } catch (e) {
      // console.error(e);
    }
  };

  const EmptyOrdersList = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: '80vh' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {i18n.t(messages.Text_Profile_PurchaseRecords())}
            </Text>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
      <Card sx={deviceType === 'web' ? { minHeight: '93vh' } : { minHeight: '84vh' }}>
        <CardContent sx={{ p: '16px !important' }}>
          <Grid container spacing={1}>
            <Grid item container direction='row' justifyContent='space-between' alignItems='center'>
              {deviceType === 'web' && (
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Title value={search(userData.roles)[0].userName} />
                </Grid>
              )}
              {deviceType === 'mobile' && role !== 'agent' && (
                <Grid item xs={12} md={6}>
                  <RoleSelector roleData={userData.roles} roleId={search(userData.roles)[0].customID} />
                </Grid>
              )}
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant={'outlined'} sx={deviceType === 'web' ? { minHeight: '70vh' } : { minHeight: '40vh' }}>
                  <CardContent sx={{ p: '16px !important' }}>
                    {deviceType === 'mobile' && (
                      <Grid item container direction='row' justifyContent='space-between' alignItems='center'>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '22px',
                          }}>
                          <Title value={search(userData.roles)[0].userName} />
                          {role !== 'agent' && <IconButton type={'outlined'} icon={'Exit'} onClick={Util.LogOut} size={'mobile'} />}
                        </Grid>
                        {deviceType === 'mobile' && role !== 'agent' && (
                          <Grid item xs={12} md={6} style={{ marginBottom: '10px' }}>
                            {/*<RoleSelector roleData={userData.roles} roleId={search(userData.roles)[0].customID} />*/}
                          </Grid>
                        )}
                      </Grid>
                    )}
                    <Grid container>
                      <Grid item container sx={deviceType === 'mobile' ? { marginLeft: '0' } : { marginLeft: '42px' }} justifyContent={'flex-end'} alignSelf={'self-end'} alignContent={'center'}>
                        <Grid item lg={8} xl={6} xs={12}>
                          <Tab value={tab} onChange={tabChange}>
                            {(role === 'agent' || role === 'user') && <ToggleButton value={'editInfo'}>{i18n.t(messages.Text_Profile_EditInfo())}</ToggleButton>}
                            {role === 'scope' && <ToggleButton value={'info'}>{i18n.t(messages.Text_Profile_UserInfo())}</ToggleButton>}
                            <ToggleButton value={'editPass'}>{i18n.t(messages.Text_Profile_EditPass())}</ToggleButton>
                            {role === 'agent' && (
                              <ToggleButton value={'activation'} disabled={true}>
                                {i18n.t(messages.Text_Profile_ActivateID())}
                              </ToggleButton>
                            )}
                            <ToggleButton value={'order'}>{i18n.t(messages.Text_Profile_OrderRecord())}</ToggleButton>
                          </Tab>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sx={tab === 'editInfo' ? { display: 'flex' } : { display: 'none' }}>
                        <Grid
                          container
                          sx={
                            deviceType === 'web'
                              ? { px: '40px', marginTop: '6vh' }
                              : {
                                  px: '0',
                                }
                          }>
                          <Grid item container sx={deviceType === 'web' ? { mb: '8vh' } : { mb: '1vh' }}>
                            <Grid item xs={12}>
                              <Input
                                label={`${i18n.t(messages.Input_Global_FullName())}`}
                                type={'name'}
                                value={fName.value}
                                error={fName.error.length >= 1}
                                errorMsg={fName.error}
                                onChange={(e) => {
                                  setFName({ ...fName, value: e.target.value, error: '' });
                                }}
                                onBlur={(e) =>
                                  e.target.value.length < 1
                                    ? setFName({
                                        ...fName,
                                        error: `${i18n.t(messages.Input_Profile_Errors_Name())}`,
                                      })
                                    : setFName({ ...fName, error: '' })
                                }
                              />
                            </Grid>
                          </Grid>
                          <Grid item container spacing={2} justifyContent={'space-between'} sx={deviceType === 'web' ? { mb: 'calc(8vh)' } : { mb: '3vh' }}>
                            <Grid item md={6} xs={12}>
                              <DropDown label={`${i18n.t(messages.Input_Global_Gender())}`} value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                                {[...gender].map((item) => (
                                  <MenuItem value={item.value} key={item.id}>
                                    {item.label}
                                  </MenuItem>
                                ))}
                              </DropDown>
                            </Grid>
                            <Grid item md={6} xs={12} alignSelf={'end'}>
                              <LocalizationProvider dateAdapter={AdapterJalali} localeText={customEnUSLocaleText}>
                                <MobileDatePicker
                                  label={`${i18n.t(messages.Input_Global_Birth())}`}
                                  value={selectedDate}
                                  onChange={(newValue) => {
                                    setSelectedDate(newValue);
                                  }}
                                  components={{
                                    LeftArrowIcon: ChevronRightRounded,
                                    RightArrowIcon: ChevronLeftRounded,
                                  }}
                                  orientation='landscape'
                                  mask='____/__/__'
                                  renderInput={({ inputRef, inputProps, InputProps }) => (
                                    <Box>
                                      <Input type={'text'} label={`${i18n.t(messages.Input_Global_Birth())}`} ref={inputRef} {...inputProps} />
                                      {InputProps?.startAdornment}
                                    </Box>
                                  )}
                                />
                              </LocalizationProvider>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item container sx={tab === 'activation' ? { display: 'flex', mt: '8vh' } : { display: 'none' }}>
                        <Grid item container justifyContent={'space-between'} sx={{ padding: '25px 20px', background: '#fafafa', borderRadius: '6px' }}>
                          <Grid item>
                            <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                              {i18n.t(messages.Text_Profile_ParticipationTime())}
                            </Text>
                          </Grid>
                          <Grid item>
                            {/*todo:نمایش درست تاریخ*/}
                            <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                              {i18n.t(messages.Text_Profile_Date())}
                            </Text>
                          </Grid>
                        </Grid>
                        {/*todo:نمایش درست توضیحات*/}
                        <Grid item md={12} sx={{ mt: '6vh' }}>
                          <Text variant={fontSize} weight={'regular'} style={{ color: '#6a6a6a' }}>
                            {i18n.t(messages.Text_Profile_Description())}
                          </Text>
                        </Grid>
                        <Grid item container justifyContent={'center'} sx={{ mt: '11vh' }}>
                          <Grid item md={4}>
                            <Input label={`${i18n.t(messages.Input_Profile_ActivateID())}`} type={'text'} />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item container sx={tab === 'info' ? { display: 'inline' } : { display: 'none' }}>
                        <Grid item container sx={deviceType === 'web' ? { mt: '8vh' } : { mt: '0' }}>
                          <Grid item container justifyContent={'space-between'} sx={deviceType === 'mobile' ? { padding: '20px 20px' } : { padding: '25px 20px' }}>
                            <Grid item>
                              <Text variant={fontSize} weight={'regular'}>
                                {i18n.t(messages.Input_Global_FullName())}
                              </Text>
                            </Grid>
                            <Grid item>
                              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                                {search(userData.roles)[0].userName}
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            container
                            justifyContent={'space-between'}
                            sx={
                              deviceType === 'mobile'
                                ? {
                                    padding: '20px 20px',
                                    background: '#fafafa',
                                    borderRadius: '6px',
                                  }
                                : { padding: '25px 20px', background: '#fafafa', borderRadius: '6px' }
                            }>
                            <Grid item>
                              <Text variant={fontSize} weight={'regular'}>
                                {i18n.t(messages.Text_Profile_Company())}
                              </Text>
                            </Grid>
                            <Grid item>
                              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                                {search(userData.roles)[0].name}
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid item container justifyContent={'space-between'} sx={deviceType === 'mobile' ? { padding: '20px 20px' } : { padding: '25px 20px' }}>
                            <Grid item>
                              <Text variant={fontSize} weight={'regular'}>
                                {i18n.t(messages.Input_Global_Phone())}
                              </Text>
                            </Grid>
                            <Grid item>
                              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                                0{phone}
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            container
                            justifyContent={'space-between'}
                            sx={
                              deviceType === 'mobile'
                                ? {
                                    padding: '20px 20px',
                                    background: '#fafafa',
                                    borderRadius: '6px',
                                  }
                                : { padding: '25px 20px', background: '#fafafa', borderRadius: '6px' }
                            }>
                            <Grid item>
                              <Text variant={fontSize} weight={'regular'}>
                                {i18n.t(messages.Input_Global_Gender())}
                              </Text>
                            </Grid>
                            <Grid item>
                              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                                {sex}
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid item container justifyContent={'space-between'} sx={deviceType === 'mobile' ? { padding: '20px 20px' } : { padding: '25px 20px' }}>
                            <Grid item>
                              <Text variant={fontSize} weight={'regular'}>
                                {i18n.t(messages.Input_Global_Birth())}
                              </Text>
                            </Grid>
                            <Grid item>
                              <Text variant={fontSize} weight={deviceType === 'web' ? 'bold' : 'medium'}>
                                {jMoment(birthDate, 'YYYY/MM/DD').format('jYYYY/jMM/jDD')}
                              </Text>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item container sx={tab === 'editPass' ? { display: 'flex' } : { display: 'none' }}>
                        <Grid item container justifyContent={'center'} sx={deviceType === 'web' ? { mt: '15vh' } : { mt: '3vh' }}>
                          <Grid item container md={5} sx={otpPass ? { display: 'none' } : { display: 'flex' }}>
                            <Grid item xs={12} sx={{ mb: '2vh' }}>
                              <Input
                                label={`${i18n.t(messages.Input_Profile_CurrentPass())}`}
                                type={inputType}
                                icon={icon}
                                name='currentPassword'
                                value={currentPassword.value}
                                error={currentPassword.error.length >= 1}
                                errorMsg={currentPassword.error}
                                onChange={(e) => {
                                  setCurrentPassword({ ...currentPassword, value: e.target.value, error: '' });
                                }}
                                onBlur={(e) =>
                                  e.target.value.length < 1
                                    ? setCurrentPassword({
                                        ...currentPassword,
                                        error: `${i18n.t(messages.Input_Profile_Errors_CurrentPass())}`,
                                      })
                                    : setCurrentPassword({ ...currentPassword, error: '' })
                                }
                              />
                            </Grid>
                            <Grid item container justifyContent={'flex-end'}>
                              <Grid item xs={12}>
                                <Input
                                  name='newPassword'
                                  label={`${i18n.t(messages.Input_Profile_NewPass())}`}
                                  type={inputType}
                                  icon={icon}
                                  value={newPassword.value}
                                  error={newPassword.error.length >= 1}
                                  // helper={'رمزعبور باید شامل حداقل۸کرکتر،‌یک حرف انگلیسی کوچک و بزرگ و یک کرکترخاص باشد'}
                                  errorMsg={newPassword.error}
                                  onChange={(e) => {
                                    setNewPassword({ ...newPassword, value: e.target.value, error: '' });
                                  }}
                                  onBlur={(e) =>
                                    e.target.value.length < 1
                                      ? setNewPassword({
                                          ...newPassword,
                                          error: `${i18n.t(messages.Input_Profile_Errors_NewPass())}`,
                                        })
                                      : setNewPassword({ ...newPassword, error: '' })
                                  }
                                />
                              </Grid>
                              <Grid item sx={{ mt: 2 }}>
                                <CardBtn
                                  value={`${i18n.t(messages.Input_Profile_DisposableCode())}`}
                                  onClick={() => {
                                    setOtpPass(true);
                                    setNewPassword({ ...newPassword, value: '', error: '' });
                                    handleResend();
                                    CheckPhone(phone.toString(), '').then((r) => r);
                                  }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          {otpPass && (
                            <Grid item container md={5} xs={7} spacing={2} justifyContent={'center'}>
                              {!showOtpPass ? (
                                <>
                                  <Grid item container justifyContent={'center'}>
                                    <Text variant={fontSize} weight={'regular'} style={{ padding: '10px 0' }}>
                                      {i18n.t(messages.Text_Profile_EnterCode())}
                                    </Text>
                                  </Grid>
                                  <Grid item container justifyContent={'center'}>
                                    <OTP onChange={(e) => setCode(e)} value={code} />
                                  </Grid>
                                  <Grid item container spacing={2} justifyContent={'center'} sx={showOtpPass ? { display: 'none' } : { display: 'flex' }}>
                                    <Grid item md={4} xs={12} sx={!otpPass ? { display: 'none' } : { display: 'inline' }}>
                                      <Button fullWidth={true} type={'outlined'} label={seconds} onClick={handleResend} disabled={!btnTimer} />
                                    </Grid>
                                    <Grid item md={4} xs={12}>
                                      <Button
                                        fullWidth={true}
                                        type={'contained'}
                                        label={`${i18n.t(messages.Input_Global_NextStep())}`}
                                        disabled={code.length < 6}
                                        onClick={() => {
                                          EnterOTP(phone, code).then((r) => r);
                                        }}
                                      />
                                    </Grid>
                                  </Grid>
                                </>
                              ) : (
                                <Grid item xs={12}>
                                  <Input
                                    name='newPassword'
                                    value={newPassword.value}
                                    label={`${i18n.t(messages.Input_Profile_NewPass())}`}
                                    type={inputType}
                                    icon={icon}
                                    onChange={(e) => {
                                      setNewPassword({ ...newPassword, value: e.target.value, error: '' });
                                    }}
                                  />
                                </Grid>
                              )}
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                      <Grid item container sx={tab === 'order' ? { display: 'flex', mt: '5vh' } : { display: 'none' }}>
                        {ordersList.length > 0 ? (
                          <>
                            {deviceType === 'web' && (
                              <Grid item container justifyContent={'end'} sx={{ p: '10px 20px', color: '#6a6a6a' }}>
                                <Grid item container md={7}>
                                  <Grid item md={3}>
                                    <Text variant={'web14'}>{i18n.t(messages.Input_Global_PurchaseID())}</Text>
                                  </Grid>
                                  <Grid item md={3} sx={{ textAlign: 'center' }}>
                                    <Text variant={'web14'}>{i18n.t(messages.Input_Global_UnitPrice())}</Text>
                                  </Grid>
                                  <Grid item md={3} sx={{ textAlign: 'center' }}>
                                    <Text variant={'web14'}>{i18n.t(messages.Input_Global_Count())}</Text>
                                  </Grid>
                                  <Grid item md={3} sx={{ textAlign: 'left' }}>
                                    <Text variant={'web14'}>{i18n.t(messages.Input_Global_Paid())}</Text>
                                  </Grid>
                                </Grid>
                              </Grid>
                            )}
                            <Paper
                              style={
                                deviceType === 'web'
                                  ? {
                                      height: '60vh',
                                      overflow: 'auto',
                                      width: '100%',
                                    }
                                  : { height: '46vh', overflow: 'auto', width: '100%' }
                              }
                              elevation={0}>
                              <Grid item container spacing={2}>
                                {ordersList.map((item, i) => {
                                  return (
                                    <Grid item xs={12} key={i}>
                                      <OrderItem item={item} index={i} />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Paper>
                          </>
                        ) : (
                          <EmptyOrdersList />
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={
                tab === 'editPass' || tab === 'editInfo' || tab === 'activation'
                  ? {
                      display: 'flex',
                    }
                  : { display: 'none' }
              }
              justifyContent={'center'}
              spacing={2}>
              <Grid item md={2} xs={12} sx={deviceType === 'mobile' ? { marginTop: '20px' } : { marginTop: '0' }}>
                <Button
                  fullWidth={true}
                  type={'contained'}
                  label={`${i18n.t(messages.Input_Global_Submit())}`}
                  onClick={(tab === 'editInfo' && updateUser) || (tab === 'editPass' && resetPassword)}
                  disabled={tab === 'editPass' && disabled}
                />
              </Grid>
              <Grid item md={2} sx={deviceType === 'mobile' ? { display: 'none' } : { display: 'flex' }}>
                <Button fullWidth={true} type={'outlined'} label={`${i18n.t(messages.Input_Global_Cancel())}`} onClick={handleCancel} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
