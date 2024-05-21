import { PROFILE_DASHBOARD_FAILED, PROFILE_DASHBOARD_REQUEST, PROFILE_DASHBOARD_SUCCESS } from 'redux/action/types';
import { profileHttp } from 'api';

export const ProfileDashboard = (data: any) => {
  return async (dispatch) => {
    dispatch({
      type: PROFILE_DASHBOARD_REQUEST,
    });
    try {
      const result = await profileHttp.dashboard(data);
      dispatch({
        type: PROFILE_DASHBOARD_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (err) {
      dispatch({
        type: PROFILE_DASHBOARD_FAILED,
      });
      console.log(err);
    }
  };
};
