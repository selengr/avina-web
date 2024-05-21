import * as Types from 'redux/action/types';

const INITIAL_SHOWLIST = {
  data: '',
  loading: false,
  error: '',
};
// const { state, message } = action.payload;

export const Group_ShowList_Reducer = (state = INITIAL_SHOWLIST, action: any) => {
  switch (action.type) {
    case Types.GROUP_SHOWLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case Types.GROUP_SHOWLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: 'دریافت شد',
        data: action.payload.result,
      };
    }
    case Types.GROUP_SHOWLIST_FAILED: {
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
