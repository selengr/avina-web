import { PROFILE_EDIT_FAILED, PROFILE_EDIT_REQUEST, PROFILE_EDIT_SUCCESS } from 'redux/action/types';
import { setAlert } from 'redux/action/creators/Common';
import { messages } from 'app/pages/profile/messages';
import { store } from 'redux/store/Store';
import { t } from 'i18next';
import { profileHttp } from 'api';

export const ProfileEdit = (data: any) => {
  return async (dispatch) => {
    dispatch({
      type: PROFILE_EDIT_REQUEST,
    });
    try {
      const result = await profileHttp.updateProfileInfo(data);
      dispatch({
        type: PROFILE_EDIT_SUCCESS,
        payload: {
          result: result.data,
        },
      });
      await store.dispatch(setAlert(true, 'success', `${t(messages.Alert_Profile_Success_UpdateProfile())}`, 'Done') as any);
    } catch (err) {
      dispatch({
        type: PROFILE_EDIT_FAILED,
      });
      await store.dispatch(setAlert(true, 'error', `${t(messages.Alert_Profile_Error_UpdateProfile())}`, 'Alert') as any);
      console.log(err);
    }
  };
};
