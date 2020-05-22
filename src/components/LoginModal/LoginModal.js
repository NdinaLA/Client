//dependencies
import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { formSwap, toggleModal } from '../../actions/modalDisplay';
import { signInUser, registerUser } from '../../actions/isLogged';
import PropTypes from 'prop-types';
//css
import './LoginModal.css';

Modal.setAppElement('#root');

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  login = async () => {
    const { signInUser, authorized, toggleModal } = this.props;
    const { email, password } = this.state;
    await signInUser(email, password);

    if (authorized) {
      toggleModal();
    }
  };

  signUp = async () => {
    const { name, email, password } = this.state;
    const { registerUser } = this.props;
    registerUser(name, email, password);
  };

  render() {
    const {
      showModal,
      toggleModal,
      formSwap,
      modalForm,
      authorized,
    } = this.props;
    const { name, email, password, confirmPassword } = this.state;
    return (
      <Modal
        className="loginModal"
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        isOpen={!authorized ? showModal : false}
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
                onChange={this.onChange}
                name="email"
                value={email}
                required
              ></input>

              <label>Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={this.onChange}
              ></input>

              <button type="button" onClick={this.login}>
                Login
              </button>
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
                name="name"
                value={name}
                onChange={this.onChange}
              ></input>
              <label>Email</label>
              <input
                className="loginInput"
                type="email"
                placeholder="Enter Email"
                onChange={this.onChange}
                name="email"
                value={email}
                required
              ></input>

              <label>Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={this.onChange}
              ></input>

              <label>Confirm Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.onChange}
              ></input>

              <button type="button" onClick={this.signUp}>
                Register
              </button>

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
  }
}

LoginModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  modalForm: state.modalDisplay.modalForm,
  showModal: state.modalDisplay.showModal,
  authorized: state.isLogged.authorized,
  user: state.isLogged.user,
});

const mapDispatchToProps = {
  toggleModal,
  formSwap,
  signInUser,
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
