import * as Types from 'redux/action/types';

const INITIAL_DASHBOARD = {
  data: '',
  loading: false,
  error: '',
};

export const ProfileDashboard_Reducer = (state = INITIAL_DASHBOARD, action: any) => {
  switch (action.type) {
    case Types.PROFILE_DASHBOARD_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.PROFILE_DASHBOARD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.PROFILE_DASHBOARD_FAILED: {
      return {
        ...state,
        loading: false,
        error: 'دریافت نشد',
      };
    }
    default:
      return state;
  }
};
