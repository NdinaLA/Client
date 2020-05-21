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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = async () => {
    await this.props.signInUser(this.state.email, this.state.password);
    console.log('logging in' + this.state.email, this.state.password);
    if (this.props.isLogged) {
      this.props.toggleModal();
    }
  };

  signUp = async () => {
    console.log('user register clicked');
    this.props.registerUser(
      this.state.name,
      this.state.email,
      this.state.password
    );

    await console.log(this.props.user);
  };

  render() {
    const { showModal, toggleModal, formSwap } = this.props;
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
          {this.props.modalForm ? (
            <form>
              <p className="title">Login</p>

              <label>Email</label>
              <input
                className="loginInput"
                type="email"
                placeholder="Enter Email"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
                required
              ></input>

              <label>Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={this.state.password}
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
                value={this.state.name}
                onChange={this.onChange}
              ></input>
              <label>Email</label>
              <input
                className="loginInput"
                type="email"
                placeholder="Enter Email"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
                required
              ></input>

              <label>Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              ></input>

              <label>Confirm Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter Password"
                name="confirmPassword"
                value={this.state.confirmPassword}
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
  isLogged: state.isLogged.isLogged,
  user: state.isLogged.user,
});

const mapDispatchToProps = {
  toggleModal,
  formSwap,
  signInUser,
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
