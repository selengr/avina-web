import { Grid, MenuItem } from '@mui/material';
import { Util } from 'utils';
import { DropDown, Text } from '../../../../components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from '../messages';
import { useEffect, useState } from 'react';
import { UserCreditList } from '../Logic';
export default function Mhesam(props) {
  const { t } = useTranslation();
  const fontSize = Util.DefaultFontSize();
  const [credits, setCredits] = useState<any>([]);
  const [creditValues, setCreditValues] = useState<any>([]);

  useEffect(() => {
    props.selectedCredit(creditValues.length !== 0);
  }, [creditValues]);

  useEffect(() => {
    getUserCreditList();
  }, []);
  const getUserCreditList = async () => {
    const res = await UserCreditList();
    setCredits(res?.data);
  };

  return (
    <>
      <Grid item xs={12}>
        <Text variant={fontSize} weight={'bold'}>
          {`${t(messages.Text_Mhesam_Choose_Credit_Pay())}`}:
        </Text>
      </Grid>

      <Grid flexDirection={'row'} alignSelf={'center'} item xs={12} md={6} marginTop={5}>
        <DropDown defaultValue={''} value={creditValues} placeholder={'لطفا نوع اعتبار خود را انتخاب نمایید.'} onChange={(e) => setCreditValues(e.target.value)}>
          {credits.map((item, i) => {
            return (
              <MenuItem disabled={item.totalAmount === 0 || item.totalAmount < props.totalPrice} key={i} value={item}>
                {' '}
                {item.creditType}{' '}
              </MenuItem>
            );
          })}
        </DropDown>
      </Grid>
      <Grid container justifyContent={'center'} marginTop={15} marginBottom={4}>
        <Grid item xs={12} md={4} lg={3} display={'flex'} justifyContent={'flex-start'}>
          <Text variant={fontSize} weight={'bold'}>
            {`${t(messages.Text_Mhesam_Total_Credit())}`}:
          </Text>
        </Grid>
        <Grid item xs={12} md={4} lg={3} display={'flex'} justifyContent={'flex-end'}>
          <Text variant={fontSize} weight={'bold'}>
            {creditValues.length === 0 ? 'لطفا اعتبار خود را انتخاب کنید.' : creditValues.totalAmount}
          </Text>
        </Grid>
      </Grid>

      <Grid container justifyContent={'center'}>
        <Grid item xs={12} md={4} lg={3} display={'flex'} justifyContent={'flex-start'}>
          <Text variant={fontSize} weight={'bold'}>
            {`${t(messages.Text_Mhesam_Credit_After_Purchase())}`}:
          </Text>
        </Grid>
        <Grid item xs={12} md={4} lg={3} display={'flex'} justifyContent={'flex-end'}>
          <Text variant={fontSize} weight={'bold'}>
            {creditValues.length === 0 ? 'لطفا اعتبار خود را انتخاب کنید.' : creditValues.totalAmount - props.totalPrice}
          </Text>
        </Grid>
      </Grid>
    </>
  );
}
