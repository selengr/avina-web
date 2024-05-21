import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, IconButton, Paper, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, styled } from '@mui/material';
import { BottomSheetDialog, Button, CardBtn, Checkbox, Icons, Input, OTP, Prompt, Text, Title } from 'components';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { paymentHttp, profileHttp } from 'api';
import { Util } from 'utils';
import CartItem from './CartItem';
import CheckItem from './CheckItem';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useDebounceFn } from 'ahooks';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, setPrompt } from 'redux/action/creators';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { IssueRequest, paymentDiscountCode } from '../Logic';
import Mhesam from '../mhesam/Mhesam';
import { log } from '@craco/craco/dist/lib/logger';

const ColorLibConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundImage:
      "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23979797FF' stroke-width='4' stroke-dasharray='12%2c25' stroke-dashoffset='18' stroke-linecap='square'/%3e%3c/svg%3e\")",
    backgroundColor: 'transparent',
    backgroundRepeat: 'repeat',
    borderRadius: 10,
  },
}));

export default function Shopping() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const userData = Util.userAllData();

  const [tab, setTab] = useState<number>(1);
  const owner_id = Util.extractID();
  const [capacityModal, setCapacityModal] = useState<boolean>(false);
  const Test: any = useSelector<any>((res) => res.mHesamUserCreditList);
  const [code, setCode] = useState<string>('');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const [orderID, setOrderID] = useState<number>();
  const [paymentModal, setPaymentModal] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [promptID, setPromptID] = useState('');
  const [paymentMessage, setPaymentMessage] = useState<string>('');
  const [mhesamCheck, setMhesamCheck] = useState(false);
  const [issueRequestData, setIssueRequestData] = useState<any>();
  const [discount, setDiscount] = useState('');
  const [selectedCredit, setSelectedCredit] = useState<boolean>(false);

  useEffect(() => {
    fetchList().then((r) => r);

    if (qs.parse(location.search, { ignoreQueryPrefix: true }).Authority) {
      checkPayment(qs.parse(location.search, { ignoreQueryPrefix: true }).Authority).then((r) => r);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [cartItems]);

  useEffect(() => {
    if (tab === 2) {
      if (!mhesamCheck) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
    if (tab === 3) {
      if (!selectedCredit) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [tab, mhesamCheck, selectedCredit]);

  const arr: any[] = [];
  const fetchList = async () => {
    try {
      let id: string;
      if (userData.data.data.last_role_type === 1) {
        id = owner_id;
      } else {
        id = '';
      }
      const resultList: any = await profileHttp.shoppingCart(id);
      if (resultList.data.order.order_details.length !== 0) {
        if (resultList.data.order.order_details.length >= 0) {
          for (let i = 0; i < resultList.data.order.order_details.length; i++) {
            arr.push(resultList.data.order.order_details[i]);
          }
          setCartItems(arr);
          setTotalPrice(resultList.data.order.to_pay);
          setOrderID(resultList.data.order.id);
          setIssueRequestData(resultList.data);
        }
      } else {
        setTotalPrice('0');
        setCartItems([]);
      }
      cartBadgeUpdater(arr.length);
    } catch (error) {
      // console.log('list error: ', error);
    }
  };
  const cancelOrder = async (itemId) => {
    let id;
    if (userData.data.data.last_role_type === 1) id = owner_id;
    else id = '';
    try {
      const data = {
        owner_id: id,
        order_details_id: itemId,
      };
      await paymentHttp.cancelOrder(data);
      await fetchList();
      await Util.GetMe();
      dispatch(setAlert(true, 'success', `${t(messages.Alert_ShoppingList_Success_DeleteFromCart())}`, 'Done') as any);
      dispatch(setPrompt(false, '') as any);
      navigation('');
    } catch (error) {
      dispatch(setAlert(true, 'error', `${t(messages.Alert_ShoppingList_Error_DeleteFromCart())}`, 'Alert') as any);
      dispatch(setPrompt(false, '') as any);
      // console.log('cancel order error: ', error);
    }
  };
  const dialog = (id) => {
    setPromptID(id);
    dispatch(setPrompt(true, `${t(messages.Dialog_ShoppingList_DeleteFromCart())}`) as any);
  };

  const goCheckout = () => {
    setTab(2);
  };
  const goMhesam = async () => {
    await handleClick();

    setTab(3);
    if (tab === 3) {
      handleCapacityModal();
    }
  };

  const handleClick = async () => {
    if (mhesamCheck) {
      const productsData: any[] = [];
      let productData: {
        prodCode: number;
        prodPrice: number;
        prodQty: number;
        description: string;
      };
      issueRequestData.order.order_details.forEach((value: { id: number; unit_price: number; count: number }) => {
        productData = {
          prodCode: value.id,
          prodPrice: value.unit_price,
          prodQty: value.count,
          description: '',
        };
        productsData.push(productData);
      });

      const issueRequestResult = await IssueRequest(issueRequestData.order.id, issueRequestData.order.to_pay, productsData);
    }
  };

  const payWithBank = async () => {
    try {
      const data = { order_id: orderID };
      const result = await paymentHttp.payWithBank(data);
      window.location.href = result.data.data.payment.action;
    } catch (error) {
      // console.log('payment error: ', error);
    }
  };

  const checkPayment = async (code) => {
    try {
      const data = {
        transaction_id: code,
      };
      const result = await paymentHttp.verify(data);
      setPaymentMessage(result.data.error);
      setPaymentModal(true);
    } catch (e) {
      // console.log('payment error', e);
    }
  };
  let variable: number = parseInt(userData.data.data.orders_count);
  const cartBadgeUpdater = (arg) => {
    variable = arg;
    const updatedData: any = {
      data: {
        data: {
          orders_count: variable,
        },
      },
    };
    Object.assign(userData.data.data, updatedData.data.data);
    const data = Util.Encoder(userData.data, true);
    localStorage.setItem('userData', data);
  };

  const changeCount = async (count?: number, itemId?: number) => {
    let id;
    if (userData.data.data.last_role_type === 1) id = owner_id;
    else id = null;
    const data = {
      order_details_id: itemId,
      count: count,
    };
    const dataId = { owner_id: id };
    if (id) {
      Object.assign(data, dataId);
    }
    try {
      await paymentHttp.changeCount(data);
      await fetchList();
      // console.log('result:', data);
    } catch (e) {
      // console.log('error:', e);
    }
  };
  const discountCodeHandler = async () => {
    await paymentDiscountCode(123456, owner_id);
  };
  const { run } = useDebounceFn(
    (count?: number, id?: number) => {
      changeCount(count, id).then((r) => r);
    },
    {
      wait: 2000,
    },
  );

  const handleCapacityModal = () => {
    setCapacityModal(!capacityModal);
  };
  const handleCartTabsTitle = () => {
    if (deviceType === 'web') {
      if (mhesamCheck) {
        return `${t(messages.Input_ShoppingList_Mhesam_Pay())}`;
      } else {
        return `${t(messages.Input_ShoppingList_Pay())}`;
      }
    } else {
      return '';
    }
  };
  const EmptyCart = () => {
    return (
      <>
        <Grid container spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ height: '90vh' }}>
          <Grid item>
            <Text type={'title2'} variant={fontSize} weight={'bold'}>
              {t(messages.Text_ShoppingList_EmptyCart())}
            </Text>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Card>
        <CardContent sx={{ pb: '16px !important' }}>
          <Grid container spacing={1}>
            <Grid item>
              {/*<Title value={`${t(messages.Input_ShoppingList_OrderInfo())}`} />*/}
              <Title
                value={tab === 1 ? `${t(messages.Input_ShoppingList_OrderInfo())}` : tab === 2 ? `${t(messages.Input_ShoppingList_FinalOrder())}` : `${t(messages.Input_ShoppingList_Mhesam_Pay())}`}
              />
            </Grid>
            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <Grid
                  item
                  xs={12}
                  sx={
                    deviceType === 'web'
                      ? {
                          padding: '5vh 0',
                          color: 'black !important',
                        }
                      : { color: 'black !important' }
                  }>
                  <Stepper activeStep={tab} alternativeLabel sx={{ direction: 'ltr' }} connector={<ColorLibConnector />}>
                    <Step>
                      <StepLabel icon={tab === 3 ? <RadioButtonCheckedIcon color={'secondary'} /> : <RadioButtonUncheckedIcon />}>
                        {deviceType === 'web' && handleCartTabsTitle()}
                        {/*{deviceType === 'web' && tab === 1 ? `${t(messages.Input_ShoppingList_Pay())}` : mhesamCheck ? `${t(messages.Input_ShoppingList_Mhesam_Pay())}` : `${t(messages.Input_ShoppingList_Pay())}`}*/}
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel icon={tab === 2 ? <RadioButtonCheckedIcon color={'secondary'} /> : <RadioButtonUncheckedIcon />}>
                        {deviceType === 'web' && `${t(messages.Input_ShoppingList_FinalOrder())}`}
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel icon={tab === 1 ? <RadioButtonCheckedIcon color={'secondary'} /> : <RadioButtonUncheckedIcon />}>
                        {deviceType === 'web' && `${t(messages.Input_ShoppingList_OrderInfo())}`}
                      </StepLabel>
                    </Step>
                  </Stepper>
                </Grid>
                {/*order info Tab codes start*/}
                <Grid item container spacing={deviceType === 'web' ? 2 : 1}>
                  {/*@Dev Main Content of card starts */}
                  <Grid item xs={12} lg={9}>
                    <Card variant={'outlined'} sx={deviceType === 'web' ? { minHeight: 'calc(97vh - 218px)' } : { minHeight: 'calc(93vh /10)' }}>
                      <CardContent sx={{ pb: '16px !important' }}>
                        {deviceType === 'web' && tab !== 3 ? (
                          <Grid container justifyContent={'end'}>
                            <Grid item container md={6} sx={{ color: '#6a6a6a' }} justifyContent={'space-around'}>
                              <Grid item xs={4} md={4} sx={{ justifyContent: 'center', display: 'flex' }}>
                                <Text variant={'web14'}>{t(messages.Input_Global_Count())}</Text>
                              </Grid>
                              <Grid item xs={4} md={4} sx={{ justifyContent: 'center', display: 'flex' }}>
                                <Text variant={'web14'}>{t(messages.Input_Global_UnitPrice())}</Text>
                              </Grid>
                              <Grid item xs={4} md={4} sx={{ justifyContent: 'center', display: 'flex' }}>
                                <Text variant={'web14'}>{tab === 1 ? `${t(messages.Input_Global_Delete())}` : `${t(messages.Input_ShoppingList_TotalPrice())}`}</Text>
                              </Grid>
                            </Grid>
                          </Grid>
                        ) : (
                          ''
                        )}
                        <Paper
                          sx={
                            deviceType === 'web'
                              ? {
                                  height: 'calc(93vh - 295px)',
                                  overflow: 'auto',
                                  mt: 2,
                                }
                              : { height: 'calc(93vh / 2.35)', overflow: 'auto' }
                          }
                          elevation={0}>
                          <Grid container spacing={1}>
                            {tab === 1 &&
                              cartItems.map((item, i) => {
                                return (
                                  <Grid item xs={12} key={i}>
                                    <CartItem item={item} index={i} cancelOrder={dialog} change={run} />
                                  </Grid>
                                );
                              })}
                            {tab === 2 &&
                              cartItems.map((item, i) => {
                                return (
                                  <Grid item xs={12} key={i}>
                                    <CheckItem item={item} index={i} />
                                  </Grid>
                                );
                              })}
                            {tab === 3 && (
                              <Grid item container flexDirection={'row'} justifyContent={'center'}>
                                <Mhesam totalPrice={totalPrice} selectedCredit={setSelectedCredit} />
                              </Grid>
                            )}
                          </Grid>
                        </Paper>
                      </CardContent>
                    </Card>
                  </Grid>
                  {/*@Dev Main Content of card ends*/}
                  {/*@Dev Sidebar stars*/}

                  <Grid item xs={12} lg={3} justifyContent={'space-between'}>
                    <Card variant={'outlined'}>
                      <CardContent sx={{ pb: '16px !important' }}>
                        <Grid container justifyContent={'space-between'} flexDirection={'row'}>
                          <Grid item container xs={12}>
                            <Grid container spacing={deviceType === 'web' ? 5 : 1}>
                              <Grid item container xs={12} justifyContent={'space-between'}>
                                <Grid item>
                                  <Text variant={fontSize}>{t(messages.Text_ShoppingList_SumTotal())}</Text>
                                </Grid>
                                <Grid item>
                                  <Text variant={fontSize} weight={'bold'}>
                                    {totalPrice} {t(messages.Text_Global_Cost())}
                                  </Text>
                                </Grid>
                              </Grid>
                              <Grid item container xs={12} justifyContent={'space-between'}>
                                <Grid item>
                                  <Text variant={fontSize}>{t(messages.Text_ShoppingList_Discount())}</Text>
                                </Grid>
                                <Grid item>
                                  <Text variant={fontSize} weight={'bold'}>
                                    0 {t(messages.Text_Global_Cost())}
                                  </Text>
                                </Grid>
                              </Grid>
                              <Grid item container xs={12} justifyContent={'space-between'}>
                                <Grid item>
                                  <Text variant={fontSize}>{t(messages.Text_ShoppingList_Payable())}</Text>
                                </Grid>
                                <Grid item>
                                  <Text variant={fontSize} weight={'bold'}>
                                    {totalPrice} {t(messages.Text_Global_Cost())}
                                  </Text>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          {/*@Dev Discount part starts*/}
                          <Grid item container xs={12} mt={10} spacing={2}>
                            <Grid display={tab === 1 ? 'flex' : 'none'} item container spacing={1} alignItems={'center'}>
                              <Grid item xs={8}>
                                <Input
                                  type={'text'}
                                  value={discount}
                                  onChange={(e) => {
                                    setDiscount(e.target.value);
                                  }}
                                  placeholder={'کد تخفیف'}
                                />
                              </Grid>
                              <Grid item xs={4}>
                                <Button type={'outlined'} disabled={discount.length === 0 ? true : false} label={'ثبت'} onClick={discountCodeHandler} fullWidth />
                              </Grid>
                            </Grid>
                            <Grid item container xs={12} display={tab === 2 ? 'flex' : 'none'}>
                              <Checkbox
                                labelStyle={{ paddingRight: '10px' }}
                                id={0}
                                label={`${t(messages.Input_Payment_Through_Mhesam())}`}
                                weight={'regular'}
                                checked={mhesamCheck}
                                // disabled={users.length === 0}
                                onChange={() => {
                                  setMhesamCheck(!mhesamCheck);
                                }}
                              />
                            </Grid>
                            {/*@Dev Discount Part ends*/}
                            <Grid item xs={12}>
                              <Button
                                type={'contained'}
                                label={
                                  tab === 1
                                    ? `${t(messages.Input_ShoppingList_FinalOrder())}`
                                    : tab === 3 && mhesamCheck
                                    ? `${t(messages.Text_Payment_Deduction_Credits())}`
                                    : mhesamCheck
                                    ? `${t(messages.Text_Mhesam_Pay_Next_Step())}`
                                    : `${t(messages.Text_Mhesam_Pay())}`
                                }
                                // onClick={handleCapacityModal}
                                onClick={tab === 1 ? goCheckout : mhesamCheck ? goMhesam : payWithBank}
                                fullWidth
                                disabled={disabled}
                              />
                            </Grid>
                          </Grid>
                          {/*</div>*/}
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  {/*@Dev Sidebar ends*/}
                </Grid>
                {/*order info Tab codes ends*/}
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
      <Dialog
        fullWidth={true}
        open={paymentModal}
        onClose={() => {
          setPaymentModal(false);
          navigation('');
        }}>
        <DialogTitle id='alert-dialog-title'>
          <Grid container>
            <Grid item>
              <IconButton
                onClick={() => {
                  setPaymentModal(false);
                  navigation('');
                }}>
                <Icons name={'Close'} />
              </IconButton>
            </Grid>
            <Grid item alignSelf={'center'}>
              <Title value={`${t(messages.Input_ShoppingList_PurchaseInfo())}`} />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item md={12}>
              {paymentMessage}
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item md={6}>
                <Button
                  fullWidth={true}
                  type={'contained'}
                  label={`${t(messages.Input_Global_Confirm())}`}
                  onClick={() => {
                    setPaymentModal(false);
                    window.location.reload();
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Prompt accept={() => cancelOrder(promptID)} />
      <BottomSheetDialog size={'xs'} fullWidth open={capacityModal} onClose={handleCapacityModal}>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: 'center' }} style={{ padding: '10px 0' }}>
            <Text variant={fontSize} weight={'regular'}>
              {`${t(messages.Text_Mhesam_Enter_Two_Factor_Code_Finalize_Order())}`}
            </Text>
          </Grid>
        </Grid>
        <Grid item container justifyContent={'center'} style={{ padding: '10px 0' }}>
          <OTP onChange={(e) => setCode(e)} value={code} />
        </Grid>
        <Grid item xs={12} style={{ padding: '10px 0' }}>
          <CardBtn value={`${t(messages.Text_Mhesam_Send_New_Two_Factor_Code())}`} onClick={() => {}} />
        </Grid>
        <Grid item container spacing={2} justifyContent={'center'} style={{ padding: '10px 0' }}>
          <Grid item md={4} xs={12}>
            <Button fullWidth={true} type={'contained'} label={`تایید`} disabled={code.length < 6} onClick={() => {}} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Button fullWidth={true} type={'outlined'} label={`${t(messages.Input_Global_Cancel())}`} onClick={handleCapacityModal} />
          </Grid>
        </Grid>
      </BottomSheetDialog>
    </>
  );
}
