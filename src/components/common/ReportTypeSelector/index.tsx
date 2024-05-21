import { Grid, ListItemText, MenuItem, RadioGroup } from '@mui/material';
import { Button, Checkbox, DropDown, Radio, Text } from 'components/index';
import { messages } from '../../messages';
import i18n from 'i18next';
import React from 'react';

type Selector = {
  state: any;
  type: any;
  disable: boolean;
  radioDisable?: boolean;
  data: any[];
};

type Confirm = {
  assign?: any;
  check?: boolean;
  iS_SMS?: any;
  children?: React.ReactElement | React.ReactElement[];
  disable?: boolean;
};

type List = {
  data: any[];
  variant: any;
  handle: any;
};

export const ReportSelector = ({ state, disable, data, type, radioDisable }: Selector) => {
  return (
    <Grid item container xs={12} alignItems={'center'} sx={{ marginBottom: 'calc(5px + 7vh)' }}>
      <Grid item container xs={12} md={6}>
        <RadioGroup row defaultValue='false' sx={{ width: '100%' }}>
          <Grid item xs={6}>
            <Radio value={false} label={`${i18n.t(messages.Input_ComponentsCommonReportTypeSelector_No())}`} onChange={() => state(true)} disabled={radioDisable} />
          </Grid>
          <Grid item xs={6}>
            <Radio value={true} label={`${i18n.t(messages.Input_ComponentsCommonReportTypeSelector_Yes())}`} onChange={() => state(false)} disabled={radioDisable} />
          </Grid>
        </RadioGroup>
      </Grid>
      <Grid item xs={12} md={6}>
        <DropDown defaultValue={2} disabled={disable} onChange={(e) => type(e.target.value)}>
          {data.map((item) => {
            return (
              <MenuItem value={item.id} key={item.id}>
                {item.value}
              </MenuItem>
            );
          })}
        </DropDown>
      </Grid>
    </Grid>
  );
};

export const Confirm = ({ assign, children, disable }: Confirm) => {
  return (
    <Grid item container xs={12} justifyContent={'space-between'} alignItems={'center'}>
      {children}
      <Grid item xs={12} md={5}>
        <Button type={'contained'} label={`${i18n.t(messages.Input_Global_GetAssessment())}`} fullWidth onClick={assign} disabled={disable} />
      </Grid>
    </Grid>
  );
};

export const SMS = ({ iS_SMS, check, disable }: Confirm) => {
  return (
    <Grid item xs={12} md={7}>
      <Checkbox label={`${i18n.t(messages.Input_ComponentsCommonReportTypeSelector_SendMessage())}`} weight={'regular'} checked={check} onChange={() => iS_SMS(!check)} disabled={disable} />
    </Grid>
  );
};

export const List = ({ data, handle, variant }: List) => {
  return (
    <DropDown label={`${i18n.t(messages.Input_ComponentsCommonReportTypeSelector_ChooseAssessment())}`} onChange={handle}>
      {data.map((item) => {
        return (
          <MenuItem key={item.id} value={item.id} disabled={item.capacity < 1}>
            <ListItemText>{item.name}</ListItemText>
            <Text variant={variant}>
              {item.capacity}
              {i18n.t(messages.Text_ComponentsCommonReportTypeSelector_PersonCapacity())}
            </Text>
          </MenuItem>
        );
      })}
    </DropDown>
  );
};

const exportedComponents: any = {
  ReportSelector,
  SMS,
  Confirm,
  List,
};

export default exportedComponents;
