import { UPDATE } from 'redux/action/types';

export const INITIAL_STATE = {
  isHydrated: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
};
