import React from 'react';
import { Box, Grid, MenuItem } from '@mui/material';
import { DropDown, Input } from 'components';
import { enUS, LocalizationProvider, MobileDatePicker, PickersLocaleText } from '@mui/x-date-pickers';
import AdapterJalali from '@date-io/date-fns-jalali';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { messages } from '../messages';
import i18n from 'i18next';

interface DataType {
  value: string;
  error: string;
}

type Props = {
  children: React.ReactElement | React.ReactElement[];
  data: any;
  name: DataType;
  number: DataType;
  date: string;
  gender: string | number;
  setNameValue: any;
  setNameError: any;
  setNumberValue: any;
  setNumberError: any;
  setDate: any;
  setGender: any;
};
const customEnUSLocaleText: Partial<PickersLocaleText<any>> = {
  ...enUS.components.MuiLocalizationProvider.defaultProps.localeText,
  okButtonLabel: `${i18n.t(messages.Input_Global_Confirm())}`,
  cancelButtonLabel: `${i18n.t(messages.Input_Global_Null())}`,
};
export const AddSingleUser = ({ children, data, name, setNameValue, setNameError, number, setNumberValue, setNumberError, date, setDate, gender, setGender }: Props) => {
  return (
    <Grid item container xs={12} md={10} lg={8} xl={6} spacing={2}>
      <Grid item xs={12}>
        <Input
          label={`${i18n.t(messages.Input_Global_FullName())}`}
          type={'text'}
          value={name.value}
          error={name.error.length >= 1}
          errorMsg={name.error}
          onChange={(e) => setNameValue(e.target.value)}
          onBlur={(e) => (e.target.value.length < 1 ? setNameError(`${i18n.t(messages.Input_ParticipantsForm_Errors_Name())}`) : setNameError(''))}
        />
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Input
            label={`${i18n.t(messages.Input_Global_Phone())}`}
            type={'tel'}
            value={number.value}
            length={11}
            error={number.error.length >= 1}
            errorMsg={number.error}
            onChange={(e) => setNumberValue(e.target.value)}
            onBlur={(e) =>
              e.target.value.length < 3
                ? setNumberError(`${i18n.t(messages.Input_ParticipantsForm_Errors_Phone())}`)
                : e.target.value.length !== 11
                ? setNumberError(`${i18n.t(messages.Input_ParticipantsForm_Errors_PhoneLength())}`)
                : setNumberError('')
            }
          />
        </Grid>
        <Grid item xs={12} lg={6} alignSelf={'end'}>
          <LocalizationProvider dateAdapter={AdapterJalali} localeText={customEnUSLocaleText}>
            <MobileDatePicker
              label={`${i18n.t(messages.Input_Global_Birth())}`}
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
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
      <Grid item container spacing={2}>
        <Grid item xs={12} lg={6}>
          <DropDown label={`${i18n.t(messages.Input_Global_Gender())}`} value={gender} onChange={(e) => setGender(e.target.value)}>
            {[...data].map((item) => (
              <MenuItem value={item.value} key={item.id}>
                {item.label}
              </MenuItem>
            ))}
          </DropDown>
        </Grid>
        <Grid item md={6} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
