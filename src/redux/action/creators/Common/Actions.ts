import { ALERT, BACKDROP, PROMPT } from '../../types';

export function setBackDrop(state: boolean) {
  return (dispatch) => {
    dispatch({
      type: BACKDROP,
      payload: state,
    });
  };
}

export function setAlert(open: true | false, severity: 'success' | 'error' | string, message: string, icon: 'Alert' | 'Done' | string) {
  return (dispatch) => {
    dispatch({
      type: ALERT,
      payload: { open, severity, message, icon },
    });
  };
}

export function setPrompt(state: boolean, message: string) {
  return (dispatch) => {
    dispatch({
      type: PROMPT,
      payload: { state, message },
    });
  };
}
