import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  Input_Global_Confirm: () => _t(translations.global.input.confirm),
  Input_Global_NextStep: () => _t(translations.global.input.nextStep),
  Input_Global_Phone: () => _t(translations.global.input.phone),

  Alert_AuthLogic_Error_Otp: () => _t(translations.auth.logic.alert.error.otp),
  Alert_AuthLogic_Error_Password: () => _t(translations.auth.logic.alert.error.password),
  Alert_AuthLogin_Error_Phone: () => _t(translations.auth.login.alert.errors.phone),
  Alert_AuthLogin_Error_Pass: () => _t(translations.auth.login.alert.errors.pass),
  Text_AuthLogin_OtpState: () => _t(translations.auth.login.text.otpState),
  Text_AuthLogin_PassState: () => _t(translations.auth.login.text.passState),
  Input_AuthLogin_Pass: () => _t(translations.auth.login.input.pass),
  Input_AuthLogin_EditPhone: () => _t(translations.auth.login.input.editPhone),
  Input_AuthLogin_ResendCode: () => _t(translations.auth.login.input.resendCode),
  Input_AuthLogin_DisposablePass: () => _t(translations.auth.login.input.disposablePass),
};
