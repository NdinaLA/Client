//dependencies
import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { formSwap, toggleModal } from '../../actions/modalDisplay';
import PropTypes from 'prop-types';
//css
import './LoginModal.css';

Modal.setAppElement('#root');

const LoginModal = ({ showModal, toggleModal, modalForm, formSwap }) => {
  console.log(showModal);
  return (
    <Modal
      className="loginModal"
      onRequestClose={toggleModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      isOpen={showModal}
      ariaHideApp={true}
    >
      <p className="close" onClick={toggleModal}>
        Close X
      </p>

      <div className="formContainer">
        {modalForm ? (
          <form>
            <p className="title">Login</p>

            <label>Email</label>
            <input
              className="loginInput"
              type="email"
              placeholder="Enter Email"
              required
            ></input>

            <label>Password</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter Password"
            ></input>

            <button type="submit">Login</button>
            <button onClick={formSwap}>Sign up</button>
            <div className="rememberMe">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <div>
              <a href="#!" className="loginMargin">
                Forgot username
              </a>
              <a href="#!" className="loginMargin">
                Forgot password
              </a>
            </div>
          </form>
        ) : (
          <form>
            <p className="title">Sign Up</p>
            <label>Full Name</label>
            <input
              className="loginInput"
              type="text"
              placeholder="Enter Full Name"
              required
            ></input>
            <label>Email</label>
            <input
              className="loginInput"
              type="email"
              placeholder="Enter Username"
              required
            ></input>

            <label>Password</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter Password"
            ></input>

            <label>Confirm Password</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter Password"
            ></input>

            <button type="submit">Register</button>

            <div className="rememberMe">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <div>
              <a href="#!" className="loginMargin" onClick={formSwap}>
                Go back to Login
              </a>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
};

LoginModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  modalForm: state.modalDisplay.modalForm,
  showModal: state.modalDisplay.showModal,
});

export default connect(mapStateToProps, { toggleModal, formSwap })(LoginModal);
