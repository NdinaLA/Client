import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER_USER,
  USER_LOADED,
  AUTH_ERROR,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

//load user

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('http://localhost:5005/loadUser');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//login user
export const signInUser = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  console.log('action firing');

  try {
    const res = await axios.post('http://localhost:5005/login', body, config);
    dispatch({ type: SIGN_IN, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

//logout user
export const signOutUser = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
};

//register user
export const registerUser = (name, email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });
  console.log('action firing');

  try {
    const res = await axios.post('http://localhost:5005/signUp', body, config);
    if (res.status === 409) {
      return alert('user already exists');
    }
    dispatch({ type: REGISTER_USER, payload: res.data });
    console.log('User register action fired');
  } catch (error) {
    alert('email already in use');
  }
};
