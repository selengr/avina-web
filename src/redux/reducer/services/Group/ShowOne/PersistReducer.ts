import * as Types from 'redux/action/types';

const INITIAL_SHOWONE = {
  data: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const Group_ShowOne_Reducer = (state = INITIAL_SHOWONE, action: any) => {
  switch (action.type) {
    case Types.GROUP_SHOWONE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.GROUP_SHOWONE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.GROUP_SHOWONE_FAILED: {
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
