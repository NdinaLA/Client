import counterReducer from './Counter';
import loggedReducer from './isLogged';
import modalReducer from './modalDisplay';
import productSearchReducer from './searchProducts';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  modalDisplay: modalReducer,
  searchProducts: productSearchReducer,
});

export default allReducers;
