import {
  AUTH_RESTORE_TOKEN,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT,
} from '../constants/auth';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_RESTORE_TOKEN:
      return {
        ...state,
        token: action.token,
        isLoading: false,
      };
    case AUTH_SIGN_IN:
      return {
        ...state,
        isSignout: false,
        token: action.token,
      };
    case AUTH_SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        token: null,
      };
    default:
      return state;
  }
};
