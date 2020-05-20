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
  isLogged: false,
};

const LoggedReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isLogged: true,
        user: payload,
      };
    case SIGN_IN:
    case REGISTER_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isLogged: true,
        user: payload,
      };
    case SIGN_OUT:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return { ...state, isLogged: false, token: null };
    default:
      return state;
  }
};

export default LoggedReducer;
