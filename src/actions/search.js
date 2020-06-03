import { TOGGLE_SEARCHBAR } from './types';

export const toggleSearchbar = () => (dispatch) => {
  dispatch({ type: TOGGLE_SEARCHBAR });
};
