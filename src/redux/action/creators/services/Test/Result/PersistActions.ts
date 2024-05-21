import { TEST_RESULT_FAILED, TEST_RESULT_REQUEST, TEST_RESULT_SUCCESS } from 'redux/action/types';
import { testHttp } from 'api';

export const TestResult = (JSONData?: any) => {
  return async (dispatch) => {
    dispatch({
      type: TEST_RESULT_REQUEST,
    });
    try {
      const result = await testHttp.showReport(JSONData);
      dispatch({
        type: TEST_RESULT_SUCCESS,
        payload: {
          result: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: TEST_RESULT_FAILED,
      });
    }
  };
};
