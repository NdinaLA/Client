//dependencies
import React from 'react';
import Modal from 'react-modal';

//css
import './LoginModal.css';

Modal.setAppElement('#root');

class LoginModal extends React.Component {
  render() {
    return (
      <Modal className="modal" isOpen={this.props.isOpen}>
        <p className="close">Close X</p>
        <div className="formContainer">
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
            <button type="submit">Sign up</button>
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
        </div>
      </Modal>
    );
  }
}
export default LoginModal;
