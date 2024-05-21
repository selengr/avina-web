import { MHESAM_ISSUEREQUEST_FAILED, MHESAM_ISSUEREQUEST_REQUEST, MHESAM_ISSUEREQUEST_RESET, MHESAM_ISSUEREQUEST_SUCCESS } from 'redux/action/types';
import { mHesamHttp } from 'api';

export const MHesamIssueRequest = (JSONData?: any, type?: 'reset' | 'request' | undefined) => {
  switch (type) {
    case 'reset':
      return (dispatch) => {
        dispatch({
          type: MHESAM_ISSUEREQUEST_RESET,
          payload: '',
        });
      };
    case 'request' || undefined:
      return async (dispatch) => {
        dispatch({
          type: MHESAM_ISSUEREQUEST_REQUEST,
        });
        try {
          const result = await mHesamHttp.issueRequest(JSONData);
          dispatch({
            type: MHESAM_ISSUEREQUEST_SUCCESS,
            payload: {
              result: result.data,
            },
          });
        } catch (error) {
          dispatch({
            type: MHESAM_ISSUEREQUEST_FAILED,
          });
        }
      };
  }
};
