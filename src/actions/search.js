import { TOGGLE_SEARCHBAR, SEARCH_PRODUCTS, IS_SEARCHING } from './types';
import axios from 'axios';

export const toggleSearchbar = () => (dispatch) => {
  dispatch({ type: TOGGLE_SEARCHBAR });
};

export const searchProducts = (searchInput) => async (dispatch) => {
  const { data } = await axios.get('http://localhost:5005/data/all');

  const filteredData = data.filter((obj) =>
    Object.keys(obj).some((key) =>
      obj[key].toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  dispatch({ type: SEARCH_PRODUCTS, payload: filteredData });
};

export const searchStateToggle = () => (dispatch) => {
  dispatch({ type: IS_SEARCHING });
};
