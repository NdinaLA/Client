import {
  TOGGLE_SEARCHBAR,
  SEARCH_PRODUCTS,
  IS_SEARCHING,
} from '../actions/types';

const initialState = {
  displaySearchbar: false,
  searchResults: [],
  isSearching: false,
};

const searchProducts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_SEARCHBAR:
      return { ...state, displaySearchbar: !state.displaySearchbar };
    case SEARCH_PRODUCTS:
      return { ...state, searchResults: [...payload] };
    case IS_SEARCHING:
      return { ...state, isSearching: true };
    default:
      return { ...state };
  }
};

export default searchProducts;
