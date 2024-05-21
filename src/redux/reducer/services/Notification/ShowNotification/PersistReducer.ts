import * as Types from 'redux/action/types';

const INITIAL_SHOWNOTIFICATION = {
  data: '',
  loading: false,
  error: '',
};

export const Show_Notification_Reducer = (state = INITIAL_SHOWNOTIFICATION, action: any) => {
  switch (action.type) {
    case Types.SHOW_NOTIFICATION_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.SHOW_NOTIFICATION_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.SHOW_NOTIFICATION_FAILED: {
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
