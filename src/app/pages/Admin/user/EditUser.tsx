import { adminHttp } from 'api';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Box, Card, CardContent, FormControlLabel, Grid, MenuItem, Radio, RadioGroup } from '@mui/material';
import { Button, DropDown, Input, Title } from 'components';
import AdapterJalali from '@date-io/date-fns-jalali';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { enUS, LocalizationProvider, MobileDatePicker, PickersLocaleText } from '@mui/x-date-pickers';
import { Go } from 'utils';

const customEnUSLocaleText: Partial<PickersLocaleText<any>> = {
  ...enUS.components.MuiLocalizationProvider.defaultProps.localeText,
  okButtonLabel: 'تایید',
  cancelButtonLabel: 'لغو',
};
export default function EditUser() {
  const location = useLocation();
  const [name, setName] = useState<string>('');
  const [pass, setPass] = useState<number>();
  const [status, setStatus] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('09');
  const [selectedGender, setSelectedGender] = useState<string>('male');
  const [selectedDate, setSelectedDate] = useState<any>(moment());
  const gender = [
    { id: 1, value: 'male', label: 'آقا' },
    { id: 2, value: 'female', label: 'خانم' },
  ];

  const submitEdit = async () => {
    const sex = gender.filter((item) => item.value === selectedGender);
    const data = {
      name: name,
      phone: phoneNumber.substring(1),
      sex: sex[0].id,
      birth: moment(selectedDate).format('YYYY-MM-DD'),
      status: status,
      password: pass,
    };
    try {
      await adminHttp.editUser(qs.parse(location.search, { ignoreQueryPrefix: true }).id, data);
      Go.Back();
    } catch (error) {
      // console.log(error, 'error in updating user');
    }
  };

  const checkPhone = (data) => {
    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
      englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];

    for (let i = 0; i < 10; i++) {
      data = data.replace(persianNumbers[i], i).replace(englishNumbers[i], i);
    }

    if (parseFloat(data)) {
      setPhoneNumber(`0${parseFloat(data)}`);
    } else {
      setPhoneNumber('09');
    }
  };

  const getOneUser = async () => {
    try {
      const user = await adminHttp.showUser(qs.parse(location.search, { ignoreQueryPrefix: true }).id);
      setStatus(user.data.data.status.toString());
      setName(user.data.data.name);
      setPhoneNumber(`0${user.data.data.email}`);
      setSelectedDate(new Date(Date.parse(user.data.data.birth)));
      user.data.data.sex === 1 ? setSelectedGender('male') : setSelectedGender('female');
    } catch (error) {
      // console.log('List error: ', error);
    }
  };

  const checkStatus = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    getOneUser().then((r) => r);
  }, []);

  const editPass = async (e) => {
    setPass(e);
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Title value={'ویرایش شرکت کننده'} />
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined' style={{ height: 'calc(93vh - 143px)' }}>
                  <CardContent>
                    <Grid container>
                      <Grid item container justifyContent='center' alignItems='center'>
                        <Grid item container xs={12} md={10} lg={8} xl={6} spacing={2}>
                          <Grid item xs={12}>
                            <Input label={'نام و نام خانوادگی:'} type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
                          </Grid>
                          <Grid item container spacing={2}>
                            <Grid item xs={12} lg={6}>
                              <Input label={'شماره همراه:'} type={'text'} value={phoneNumber} onChange={(e) => checkPhone(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} lg={6} alignSelf={'end'}>
                              <LocalizationProvider dateAdapter={AdapterJalali} localeText={customEnUSLocaleText}>
                                <MobileDatePicker
                                  label='تاریخ تولد'
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
                                      <Input type={'text'} label='تاریخ تولد' ref={inputRef} {...inputProps} />
                                      {InputProps?.startAdornment}
                                    </Box>
                                  )}
                                />
                              </LocalizationProvider>
                            </Grid>
                          </Grid>
                          <Grid item container spacing={2}>
                            <Grid item xs={12} lg={6}>
                              <DropDown label='جنسیت' value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                                {[...gender].map((item) => (
                                  <MenuItem value={item.value} key={item.id}>
                                    {item.label}
                                  </MenuItem>
                                ))}
                              </DropDown>
                            </Grid>
                            <Grid item md={6} xs={12}>
                              <Input label={'رمز عبور:'} type={'text'} onChange={(e) => editPass(e.target.value)} />
                            </Grid>
                          </Grid>
                          <Grid item container>
                            <Grid item xs={12}>
                              <RadioGroup color={'secondary'} aria-label='status' name='status' value={status} onChange={checkStatus}>
                                <FormControlLabel value={'1'} control={<Radio />} label={'فعال'} labelPlacement='start' />
                                <FormControlLabel value={'-1'} control={<Radio />} label={'غیرفعال'} labelPlacement='start' />
                                <FormControlLabel disabled={true} value={'0'} control={<Radio />} label={'ثبت شده توسط اونر'} labelPlacement='start' />
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
                <Button fullWidth={true} type={'contained'} label={'ثبت'} onClick={submitEdit} />
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
