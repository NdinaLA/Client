import { TOGGLE_SEARCHBAR } from '../actions/types';

const initialState = {
  toggleSearchbar: false,
  searchResults: [],
};

const searchProducts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_SEARCHBAR:
      return { ...state, toggleSearchbar: !state.toggleSearchbar };
    default:
      return { ...state };
  }
};

export default searchProducts;
