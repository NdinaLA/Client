import counterReducer from './Counter';
import loggedReducer from './isLogged';
import modalReducer from './modalDisplay';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  modalDisplay: modalReducer,
});

export default allReducers;
