import { MODAL_FORM, SHOW_MODAL } from './types';

export const toggleModal = () => (dispatch) => {
  dispatch({ type: SHOW_MODAL });
};

export const formSwap = () => (dispatch) => {
  dispatch({ type: MODAL_FORM });
};
