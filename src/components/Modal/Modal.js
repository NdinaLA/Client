//dependencies
import React from 'react';
import Modal from 'react-modal';

//css
import './Modal.css';

Modal.setAppElement('#root');

const LoginModal = () => {
  return (
    <Modal className="modal" isOpen={false}>
      <div className="formContainer">
        <form>
          <p className="title">Login</p>
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter Username"
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
};
export default LoginModal;
