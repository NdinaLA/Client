import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER_USER,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_FAIL,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  authorized: false,
};

const LoggedReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        authorized: true,
        user: payload.email,
      };
    case SIGN_IN:
    case REGISTER_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        authorized: true,
        user: payload.email,
      };
    case SIGN_OUT:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return { ...state, authorized: false, token: null };
    default:
      return state;
  }
};

export default LoggedReducer;
