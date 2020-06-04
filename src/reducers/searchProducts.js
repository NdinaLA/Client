import { TOGGLE_SEARCHBAR } from '../actions/types';

const initialState = {
  displaySearchbar: false,
  searchResults: [],
};

const searchProducts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_SEARCHBAR:
      return { ...state, displaySearchbar: !state.displaySearchbar };
    default:
      return { ...state };
  }
};

export default searchProducts;
