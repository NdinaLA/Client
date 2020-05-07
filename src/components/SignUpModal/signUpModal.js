//dependencies
import React from 'react';
import Modal from 'react-modal';

//css
import './SignUpModal.css';

Modal.setAppElement('#root');

const SignUpModal = () => {
  return (
    <Modal className="modal" isOpen={true}>
      <div className="formContainer">
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

          <button type="submit">Register</button>

          <div className="rememberMe">
            <input type="checkbox"></input>
            <label>Remember me</label>
          </div>
          <div>
            <a href="#!" className="loginMargin">
              Go back to Login
            </a>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default SignUpModal;
