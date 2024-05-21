import { adminHttp } from 'api';
import { Box, Card, CardContent, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Util } from 'utils';
import { Button, Input, Title } from '../../../../components';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import AdapterJalali from '@date-io/date-fns-jalali';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { setAlert } from 'redux/action/creators';

export const SendNotification = () => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState('');
  const [notificationData, setNotificationData] = useState<string>('');
  const [notificationUserPhone, setNotificationUserPhone] = useState('');
  const [notificationPassage, setNotificationPassage] = useState('');
  const [questionnaires_id, setQuestionnaires_id] = useState([]);
  const [selectedDate, setSelectedDate] = useState<any>(JSON.parse(Util.Decoder(localStorage.userData)).data.birth);
  // const request = async () => {
  //   const data = { state: '1' };
  //   try {
  //     const res = await adminHttp.frontVersion(data);
  //   } catch (e) {}
  // };

  const handleNotification = async () => {
    const data = {
      command: notification,
      questionnaires_id: questionnaires_id,
    };
    try {
      const result = await adminHttp.sendNotification(data);
      dispatch(setAlert(true, 'success', result.data.success.toString(), 'Done') as any);
    } catch (error) {
      // console.log('error', error);
      dispatch(setAlert(true, 'error', 'access denied', 'Alert') as any);
    }
  };
  const handleSubmit = () => {
    handleNotification().then((r) => r);
  };

  return (
    <Card sx={{ minHeight: '93vh' }}>
      <CardContent>
        <Grid container justifyContent={'center'} spacing={2}>
          <Grid item xs={12}>
            <Title value={'اعلان ها'} />
          </Grid>
          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item xs={12}>
              <Input type={'text'} label={'نوع اعلان'} onChange={(e) => setNotification(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterJalali}>
                <MobileDatePicker
                  label={'تاریخ اعلان'}
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
                      <Input type={'text'} label={'تاریخ اعلان'} ref={inputRef} {...inputProps} onChange={(e) => setNotificationData(e.target.value)} />
                      {InputProps?.startAdornment}
                    </Box>
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Input
                label={`شماره همراه کاربر`}
                type={'tel'}
                // value={number.value}
                length={11}
                // error={number.error.length >= 1}
                // errorMsg={number.error}
                onChange={(e) => setNotificationUserPhone(e.target.value)}
                // onChange={(e) => setNumberValue(e.target.value)}
                // onBlur={(e) =>
                //   e.target.value.length < 3
                //     ? setNumberError(`${i18n.t(messages.Input_ParticipantsForm_Errors_Phone())}`)
                //     : e.target.value.length !== 11
                //       ? setNumberError(`${i18n.t(messages.Input_ParticipantsForm_Errors_PhoneLength())}`)
                //       : setNumberError('')
                // }
              />
            </Grid>
            {/*<Grid item xs={12}>*/}
            {/*  <Radio*/}
            {/*    // checked={selectedValue === 'a'}*/}
            {/*    // onChange={handleChange}*/}
            {/*    value="a"*/}
            {/*    name="notification"*/}
            {/*    inputProps={{ 'aria-label': 'A' }}*/}
            {/*  />*/}
            {/*  <Radio*/}
            {/*    // checked={selectedValue === 'b'}*/}
            {/*    // onChange={handleChange}*/}
            {/*    value="b"*/}
            {/*    name="notification"*/}
            {/*    inputProps={{ 'aria-label': 'B' }}*/}
            {/*  />*/}
            {/*</Grid>*/}
            <Grid item xs={12}>
              <Input
                type={'text'}
                label={`متن اعلان`}
                multiline={true}
                rows={4}
                // value={description.value}
                //error={description.error.length >= 1}
                // errorMsg={description.error}
                onChange={(e) => setNotificationPassage(e.target.value)}
                //  onChange={(e) => {
                //    setDescription({ ...description, value: e.target.value, error: '' });
                //  }}
                //  onBlur={(e) =>
                //    e.target.value.length < 1
                //      ? setDescription({
                //        ...description,
                //        error: `${t(messages.Input_DescriptionAssessment_Errors())}`,
                //      })
                //      : setDescription({ ...description, error: '' })
                //  }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type={'contained'}
                label={'ارسال'}
                fullWidth={true}
                onClick={handleSubmit}
                disabled={notification.length < 1 || selectedDate.length < 1 || notificationUserPhone.length < 1 || notificationPassage.length < 1}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default SendNotification;
