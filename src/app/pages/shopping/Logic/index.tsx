import { Service, Util } from 'utils';
import * as Types from 'redux/action/types';
import { MHESAM_PURCHASEUPDATE_REQUEST } from 'redux/action/types';
export const paymentDiscountCode = async (couponCode, ownerId) => {
  await Service.Request(Types.PAYMENT_DISCOUNTCODE_REQUEST, couponCode, ownerId);
};
export const mHesamOTPSend = async (id, data) => {
  await Service.Request(Types.MHESAM_OTPSEND_REQUEST, id, data);
};

export const IssueRequest = async (orderNo: number, totalAmount: number, productinfo: any[]) => {
  const data = {
    userId: Util.mResalatInfo().mResalatId,
    nationalCode: Util.mResalatInfo().nationalCode,
    orderNo: orderNo,
    purchaseAmount: totalAmount,
    purchaseDesc: 'بابت عملیات خرید',
    platform: 'PSYA',
    parcelModelList: [
      {
        parcelNo: orderNo,
        parcelPrepayment: '',
        parcelAmount: totalAmount,
        merchantModelList: [
          {
            merchantType: 'MERCHANT_TYPE_ONE',
            merchantTerminalId: Util.mResalatInfo().merchantId,
            merchantAmount: totalAmount,
            merchantDetailModelList: productinfo,
          },
        ],
      },
    ],
  } as const;
  return await Service.Request(Types.MHESAM_ISSUEREQUEST_REQUEST, data);
};

export const UserCreditList = async () => {
  const data = {
    isFacility: false,
    carrierGroupDescriptionHashMap: {},
    buyerFullName: null,
  } as const;
  return await Service.Request(Types.MHESAM_USERCREDITLIST_REQUEST, data);
};

export const PurchaseUpdate = async () => {
  const data = {} as const;
  return await Service.Request(Types.MHESAM_PURCHASEUPDATE_REQUEST, data);
};

export const OTPSend = async (id: string | number) => {
  const data = {
    issueRequestId: id,
    nationalCode: Util.mResalatInfo().nationalCode,
  } as const;
  await Service.Request(Types.MHESAM_OTPSEND_REQUEST, data);
};
