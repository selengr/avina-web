import { Card, Chip, Grid } from '@mui/material';
import { Checkbox, IconButton, Icons, Text } from '../../core';
import { Util } from 'utils';
import { messages } from '../../messages';
import { useTranslation } from 'react-i18next';
import React from 'react';

type Item = {
  children: React.ReactElement | React.ReactElement[];
};
type Info = {
  data: any;
  isChecked: boolean;
  checkItems: any;
};

type Status = {
  data: any;
  children?: React.ReactElement | React.ReactElement[];
  Label?: any;
};

type Handler = {
  status: any;
  handle: any;
};

export const UserItem = ({ children }: Item) => {
  return (
    <Card variant={'outlined'} style={{ padding: '10px' }}>
      <Grid container alignItems={'center'}>
        {children}
      </Grid>
    </Card>
  );
};

export const UserInfo = ({ data, isChecked, checkItems }: Info) => {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  return (
    <Grid item container md={9} alignItems={'center'}>
      <Grid item md={6} xs={6}>
        <Checkbox
          disabled={data.test_status === 3 || data.test_status === 2}
          checked={data.test_status !== 3 && data.test_status !== 2 && isChecked}
          onChange={() => {
            checkItems(data);
          }}
          labelStyle={deviceType === 'mobile' ? { paddingRight: '0' } : { paddingRight: '16px' }}
          id={data.test_id}
          label={data.name}
          weight={'bold'}
        />
      </Grid>
      <Grid item md={3} xs={3}>
        <Text variant={fontSize}>{data.sex === 1 ? `${t(messages.Input_Global_Male())}` : `${t(messages.Input_Global_Female())}`}</Text>
      </Grid>
      <Grid item md={3} xs={3}>
        <Text variant={fontSize}>{data.age}&nbsp;سال</Text>
      </Grid>
    </Grid>
  );
};

export const UserStatus = ({ data, children, Label }: Status) => {
  const deviceType = Util.ScreenSize();

  return (
    <Grid item container md={3} alignItems={'center'} sx={deviceType === 'mobile' ? { paddingRight: '12px' } : { paddingRight: '0' }}>
      <Grid item md={9} xs={10}>
        <Chip
          sx={{ borderRadius: '6px' }}
          size={deviceType === 'mobile' ? 'small' : 'medium'}
          label={Label}
          icon={data.test_status === 3 ? <Icons name='Done' style={{ color: '#30ac62' }} /> : <Icons name='Error' style={{ color: '#d21425' }} />}
        />
      </Grid>
      {children}
    </Grid>
  );
};

export const UserRemove = ({ status, handle }: Handler) => {
  return (
    <Grid item container md={3} xs={2} justifyContent={'flex-end'}>
      <Grid item>
        <IconButton type={'outlined'} icon={'Trash'} onClick={handle} disabled={status.test_status === 3 || status.test_status === 2} />
      </Grid>
    </Grid>
  );
};
