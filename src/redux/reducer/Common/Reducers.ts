import * as Types from '../../action/types';

const INITIAL_BACKDROP = {
  backDrop: false,
};
const INITIAL_ALERT = {
  open: false,
  severity: 'success',
  message: '',
  icon: '',
};

const INITIAL_PROMPT = {
  state: false,
  message: '',
};

const INITIAL_CONSOLE = {
  message: '',
};

export const backDropReducer = (state = INITIAL_BACKDROP, action) => {
  switch (action.type) {
    case Types.BACKDROP: {
      const backDrop = action.payload;
      return {
        ...state,
        backDrop,
      };
    }
    default:
      return state;
  }
};

//------------------------------------------------------------------------------snackbar
export const alertReducer = (state = INITIAL_ALERT, action: any = {}) => {
  switch (action.type) {
    case Types.ALERT: {
      const { open, severity, message, icon } = action.payload;
      return {
        ...state,
        open,
        severity,
        message,
        icon,
      };
    }
    default:
      return state;
  }
};

//------------------------------------------------------------------------------Prompt Dialog
export const promptReducer = (state = INITIAL_PROMPT, action: any = {}) => {
  switch (action.type) {
    case Types.PROMPT: {
      const { state, message } = action.payload;
      return {
        ...state,
        state,
        message,
      };
    }
    default:
      return state;
  }
};

//------------------------------------------------------------------------------Console
export const consoleReducer = (state = INITIAL_CONSOLE, action: any = {}) => {
  switch (action.type) {
    case Types.PROMPT: {
      const { message } = action.payload;
      return {
        ...state,
        message,
      };
    }
    default:
      return state;
  }
};
