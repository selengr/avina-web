import { UPDATE } from 'redux/action/types';

export function backDrop(open) {
  return (dispatch) => {
    dispatch({
      type: UPDATE,
      open,
    });
  };
}

export function alert(open, severity, message, icon) {
  return (dispatch) => {
    dispatch({
      type: UPDATE,
      open,
      severity,
      message,
      icon,
    });
  };
}

export function prompt(state, message) {
  return (dispatch) => {
    dispatch({
      type: UPDATE,
      state,
      message,
    });
  };
}
