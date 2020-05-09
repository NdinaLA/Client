import React from 'react';

import './navbarUserUtils.styles.css';

//icons
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart.svg';

import LoginModal from '../LoginModal/LoginModal';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modalDisplay';

const NavbarUserUtils = ({ toggleModal }) => {
  return (
    <div className="navbar-user-utils">
      <LoginModal />
      <img
        className="navbar-user-utils-icon"
        src={searchIcon}
        alt="search icon"
      />
      <p className="navbar-user-utils-icon" onClick={toggleModal}>
        Log In
      </p>
      <img className="navbar-user-utils-icon" src={cartIcon} alt="cart icon " />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     showModal: state.modalDisplay.showModal,
//   };
// };

// const mapDispatchToProps = {
//   showModal,
// };

export default connect(null, { toggleModal })(NavbarUserUtils);
