import { SHOW_MODAL, MODAL_FORM } from '../actions/types';

const initialState = {
  showModal: false,
  modalForm: true,
};

const modalDisplay = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: !state.showModal, modalForm: true };
    case MODAL_FORM:
      return {
        ...state,
        modalForm: !state.modalForm,
      };
    default:
      return { ...state };
  }
};

export default modalDisplay;
