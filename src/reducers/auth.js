import {AUTH_SIGN_IN, AUTH_SIGN_OUT} from '../constants/auth';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN:
      return {
        ...state,
        user: action.user,
      };
    case AUTH_SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
