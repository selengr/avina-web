import { Cookie } from 'storage-manager-js';
import { store } from 'redux/store/Store';
import { AuthEnterCode, AuthEnterPhone, AuthLogin, setAlert } from 'redux/action/creators';
import i18n from 'i18next';
import { messages } from './messages';
import qs from 'qs';

const callBackURL = qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

async function CheckPhone(phone: string, status?: string) {
  let result: any = {};
  try {
    result.loading = true;
    await store.dispatch(
      AuthEnterPhone({
        phone: phone.substring(1),
        status,
      }) as any,
    );
    result = store.getState().authEnterPhone;
  } catch (e) {
    result.loading = false;
  } finally {
  }
  return result.path;
}

export const SSOLoginGet = async () => {
  try {
    // const result = await Service.Request(Types.SSO_LOGIN_REQUEST);
    window.location.replace('https://psyadevapi.fardaap.com/api/auth/login/sso/mresalat');
    store.dispatch(setAlert(true, 'success', `ورود به ام رسالت با موفقیت انجام شد`, 'Alert') as any);
  } catch (error) {
    store.dispatch(setAlert(true, 'error', 'مشکلی در ورود به ام رسالت وجود دارد ', 'Alert') as any);
  }
};
const EnterOTP = async (phone: string, code?: string) => {
  // const dispatch = useDispatch();
  let result: any = {};
  try {
    result.loading = true;
    await store.dispatch(
      AuthEnterCode({
        phone: phone.substring(1),
        code,
      }) as any,
    );
    result = store.getState().authEnterCode;
    await CheckToken(result);
    // console.log("EnterOTP", result.data)
  } catch (e) {
    // console.error(e);
    result.loading = false;
    store.dispatch(setAlert(true, 'error', `${i18n.t(messages.Alert_AuthLogic_Error_Otp())}`, 'Alert') as any);
  } finally {
    // await CheckToken(result.data.token);
  }
  return result.loading;
};

const EnterPass = async (phone: string, password?: string) => {
  let result: any = {};
  try {
    result.loading = true;
    await store.dispatch(
      AuthLogin({
        phone: phone.substring(1),
        password,
      }) as any,
    );
    result = store.getState().authLogin;
    await CheckToken(result);
  } catch (e) {
    result.loading = false;
    store.dispatch(setAlert(true, 'error', `${i18n.t(messages.Alert_AuthLogic_Error_Password())}`, 'Alert') as any);
  } finally {
  }
  return result.loading;
};

const CheckToken = async (token?: any) => {
  if (token) {
    Cookie.set('token', token.token, { useSecure: true });
    Cookie.set('access_token', token.access_token, { useSecure: true });
    // window.location.href = '/app/get';
  }
  if (callBackURL.token) {
    Cookie.set('token', callBackURL.token, { useSecure: true });
    Cookie.set('access_token', callBackURL.access_token, { useSecure: true });
  }
  window.location.href = '/app/get';
};

export { CheckPhone, EnterPass, EnterOTP, CheckToken };
